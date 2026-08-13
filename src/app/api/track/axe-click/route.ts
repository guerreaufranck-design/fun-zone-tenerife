import { NextRequest, NextResponse } from 'next/server';
import { getPrivateDb } from '@/lib/supabase/private';

/**
 * POST /api/track/axe-click
 *
 * Logs an outbound click from Fun Zone toward the axe site (referral traffic),
 * into Fun Zone's PRIVATE database only. Lets Fun Zone measure the traffic it
 * sends — and its click→sale conversion — without exposing it to the axe side.
 *
 * Called via navigator.sendBeacon just before the redirect, so the body may
 * arrive as text; parse defensively. No-ops when the private DB isn't set.
 */
export async function POST(req: NextRequest) {
  const db = getPrivateDb();
  if (!db) return NextResponse.json({ ok: false, reason: 'not-configured' });

  let body: { locale?: string; path?: string; category?: string } = {};
  try {
    body = JSON.parse(await req.text());
  } catch {
    // ignore malformed beacon payloads
  }

  try {
    await db.from('referral_clicks').insert({
      partner: 'funzone',
      target: 'axe',
      locale: body.locale ?? null,
      source_path: body.path ?? null,
      category: body.category ?? null,
      user_agent: req.headers.get('user-agent'),
    });
  } catch {
    // never let tracking break the user's navigation
  }

  return NextResponse.json({ ok: true });
}
