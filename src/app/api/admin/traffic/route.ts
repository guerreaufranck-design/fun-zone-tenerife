import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';

/**
 * GET /api/admin/traffic?from=YYYY-MM-DD&to=YYYY-MM-DD
 *
 * Reads the first-party traffic_events table (RLS-locked, so this uses the
 * service key behind the admin session) and returns the aggregates the Traffic
 * report needs. Aggregation is done here in JS: the volumes are modest and this
 * keeps the table policy-free with no extra SQL views/rpc to maintain.
 */

interface Row {
  type: 'pageview' | 'outbound';
  path: string | null;
  referrer_host: string | null;
  is_entry: boolean;
  target: string | null;
  country: string | null;
  device: string | null;
  session_id: string | null;
}

function friendlySource(host: string): string {
  const h = host.toLowerCase();
  if (h === 'direct') return 'Direct / app';
  if (h.includes('google')) return 'Google';
  if (h.includes('bing')) return 'Bing';
  if (h.includes('duckduckgo')) return 'DuckDuckGo';
  if (h.includes('yahoo')) return 'Yahoo';
  if (h.includes('ecosia')) return 'Ecosia';
  if (h.includes('facebook') || h === 'fb.com' || h.includes('fb.me')) return 'Facebook';
  if (h.includes('instagram')) return 'Instagram';
  if (h.includes('tiktok')) return 'TikTok';
  if (h.includes('youtube')) return 'YouTube';
  if (h.includes('pinterest')) return 'Pinterest';
  if (h.includes('reddit')) return 'Reddit';
  if (h === 't.co' || h.includes('twitter') || h === 'x.com') return 'X / Twitter';
  if (h.includes('whatsapp')) return 'WhatsApp';
  if (h.includes('chatgpt') || h.includes('openai')) return 'ChatGPT';
  if (h.includes('bing') || h.includes('copilot')) return 'Copilot';
  return host;
}

function topN<T extends string>(counts: Map<T, number>, n = 25) {
  return [...counts.entries()]
    .map(([key, count]) => ({ key, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, n);
}

export async function GET(req: NextRequest) {
  const authClient = await createClient();
  const {
    data: { user },
  } = await authClient.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  const admin = createAdminClient();
  let query = admin
    .from('traffic_events')
    .select('type, path, referrer_host, is_entry, target, country, device, session_id')
    .order('created_at', { ascending: false })
    .limit(50000);
  if (from) query = query.gte('created_at', `${from}T00:00:00`);
  if (to) query = query.lte('created_at', `${to}T23:59:59`);

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const rows = (data ?? []) as Row[];

  const sources = new Map<string, number>(); // entry referrer -> count
  const landingPages = new Map<string, number>(); // entry path -> count
  const topPages = new Map<string, number>(); // all pageview path -> count
  const outboundByTarget = new Map<string, number>();
  const outboundByPage = new Map<string, { discoverCars: number; getYourGuide: number; whatsapp: number }>();
  const byCountry = new Map<string, number>();
  const sessions = new Set<string>();

  let pageviews = 0;
  let entries = 0;
  let outbound = 0;
  let deviceMobile = 0;
  let deviceDesktop = 0;

  for (const r of rows) {
    if (r.session_id) sessions.add(r.session_id);
    if (r.country) byCountry.set(r.country, (byCountry.get(r.country) ?? 0) + 1);

    if (r.type === 'pageview') {
      pageviews++;
      if (r.device === 'mobile') deviceMobile++;
      else if (r.device === 'desktop') deviceDesktop++;
      if (r.path) topPages.set(r.path, (topPages.get(r.path) ?? 0) + 1);
      if (r.is_entry) {
        entries++;
        const src = friendlySource(r.referrer_host ?? 'direct');
        sources.set(src, (sources.get(src) ?? 0) + 1);
        if (r.path) landingPages.set(r.path, (landingPages.get(r.path) ?? 0) + 1);
      }
    } else if (r.type === 'outbound') {
      outbound++;
      if (r.target) outboundByTarget.set(r.target, (outboundByTarget.get(r.target) ?? 0) + 1);
      if (r.path) {
        const cur = outboundByPage.get(r.path) ?? { discoverCars: 0, getYourGuide: 0, whatsapp: 0 };
        if (r.target === 'discover-cars') cur.discoverCars++;
        else if (r.target === 'getyourguide') cur.getYourGuide++;
        else if (r.target === 'whatsapp') cur.whatsapp++;
        outboundByPage.set(r.path, cur);
      }
    }
  }

  const outboundPages = [...outboundByPage.entries()]
    .map(([path, c]) => ({ path, ...c, total: c.discoverCars + c.getYourGuide + c.whatsapp }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 50);

  return NextResponse.json({
    capped: rows.length >= 50000,
    totals: {
      pageviews,
      entries,
      sessions: sessions.size,
      outbound,
    },
    devices: { mobile: deviceMobile, desktop: deviceDesktop },
    sources: topN(sources).map((x) => ({ source: x.key, count: x.count })),
    landingPages: topN(landingPages).map((x) => ({ path: x.key, count: x.count })),
    topPages: topN(topPages).map((x) => ({ path: x.key, count: x.count })),
    outboundByTarget: topN(outboundByTarget).map((x) => ({ target: x.key, count: x.count })),
    outboundPages,
    countries: topN(byCountry, 15).map((x) => ({ country: x.key, count: x.count })),
  });
}
