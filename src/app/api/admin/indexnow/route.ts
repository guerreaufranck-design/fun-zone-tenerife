import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { submitToIndexNow } from '@/lib/indexnow';

/**
 * POST /api/admin/indexnow  — admin only.
 *
 * Body { urls?: string[] }. With a url list, submits exactly those to IndexNow.
 * With no body, reads the live sitemap and submits every URL in it (use this
 * after publishing new content so Bing crawls it within minutes).
 */

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const authClient = await createClient();
  const {
    data: { user },
  } = await authClient.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let urls: string[] = [];
  const body = await req.json().catch(() => null);
  if (body && Array.isArray(body.urls)) {
    urls = body.urls.filter((u: unknown): u is string => typeof u === 'string');
  }

  // Default: submit the whole sitemap. The <loc> entries are the apex canonical
  // URLs regardless of which host served the sitemap.
  if (urls.length === 0) {
    const origin = new URL(req.url).origin;
    try {
      const xml = await fetch(`${origin}/sitemap.xml`, { cache: 'no-store' }).then((r) => r.text());
      urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
    } catch {
      return NextResponse.json({ error: 'Could not read sitemap' }, { status: 500 });
    }
  }

  if (urls.length === 0) {
    return NextResponse.json({ error: 'No URLs to submit' }, { status: 400 });
  }

  try {
    const result = await submitToIndexNow(urls);
    return NextResponse.json(result, { status: result.ok ? 200 : 502 });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Submit failed' },
      { status: 500 },
    );
  }
}
