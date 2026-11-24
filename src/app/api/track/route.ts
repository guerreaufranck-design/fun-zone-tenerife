import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

/**
 * POST /api/track  — public, first-party analytics ingest (no auth).
 *
 * The browser sends a tiny beacon here on each page view and on each click of a
 * money link (Discover Cars / GetYourGuide / WhatsApp). We write the row with
 * the service-role key (the table is RLS-locked), enrich it with the country
 * from the Vercel edge header and a coarse device type from the user agent, and
 * drop obvious bots so the admin report stays clean.
 *
 * Always answers 204 (even on bad input) so a tracking failure never shows up
 * in the visitor's console or blocks navigation.
 */

export const runtime = 'nodejs';

const LOCALES = new Set(['en', 'es', 'fr', 'de', 'nl', 'it']);
const TARGETS = new Set(['discover-cars', 'getyourguide', 'whatsapp']);
const BOT_RE = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|preview|monitor|headless|lighthouse|pingdom|gtmetrix|curl|wget|python-requests|axios|node-fetch/i;

function clip(v: unknown, max: number): string | null {
  if (typeof v !== 'string') return null;
  const s = v.trim();
  if (!s) return null;
  return s.slice(0, max);
}

/** Reduce a raw referrer URL to a clean source host, or 'direct' when empty. */
function referrerHost(raw: string | null): string {
  if (!raw) return 'direct';
  try {
    const h = new URL(raw).hostname.toLowerCase().replace(/^www\./, '');
    return h || 'direct';
  } catch {
    return 'direct';
  }
}

export async function POST(req: NextRequest) {
  // Ignore bots / preview fetchers so the numbers reflect real humans.
  const ua = req.headers.get('user-agent') || '';
  if (BOT_RE.test(ua)) return new NextResponse(null, { status: 204 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const type = body.t === 'out' ? 'outbound' : body.t === 'pv' ? 'pageview' : null;
  if (!type) return new NextResponse(null, { status: 204 });

  const path = clip(body.p, 512);

  // Only keep a self-reported locale if it is one of ours; otherwise derive it
  // from the path prefix.
  let locale = clip(body.l, 8);
  if (!locale || !LOCALES.has(locale)) {
    const seg = path?.split('/').filter(Boolean)[0];
    locale = seg && LOCALES.has(seg) ? seg : null;
  }

  const isEntry = body.e === true;
  const rawReferrer = type === 'pageview' && isEntry ? clip(body.r, 1024) : null;

  let target: string | null = null;
  let targetUrl: string | null = null;
  if (type === 'outbound') {
    const t = clip(body.rt, 32);
    target = t && TARGETS.has(t) ? t : null;
    if (!target) return new NextResponse(null, { status: 204 });
    targetUrl = clip(body.u, 1024);
  }

  const country =
    req.headers.get('x-vercel-ip-country') ||
    req.headers.get('x-country') ||
    null;
  const device = /mobile|android|iphone|ipad|ipod/i.test(ua) ? 'mobile' : 'desktop';

  try {
    const admin = createAdminClient();
    await admin.from('traffic_events').insert({
      type,
      path,
      locale,
      referrer: rawReferrer,
      referrer_host: type === 'pageview' && isEntry ? referrerHost(rawReferrer) : null,
      is_entry: type === 'pageview' ? isEntry : false,
      target,
      target_url: targetUrl,
      country,
      device,
      session_id: clip(body.s, 64),
    });
  } catch {
    /* tracking must never surface an error to the visitor */
  }

  return new NextResponse(null, { status: 204 });
}
