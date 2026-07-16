/**
 * OddballTrip partner (reseller) integration.
 *
 * Fun Zone Tenerife resells OddballTrip's outdoor escape games. Instead of
 * generating activation codes itself, it declares each sale to OddballTrip's
 * partner API, which owns the games (PWA) and returns a ready-to-play code.
 *
 *   POST {ODDBALLTRIP_API_URL}/api/v1/partner/bookings
 *   Authorization: Bearer {ODDBALLTRIP_PARTNER_API_KEY}
 *   body: { slug, customer_email, language, players, partner_ref }
 *   → 200 { success, code, activationUrl, title, ... }   (game ready)
 *   → 202 { status: 'generating' }                        (game being built;
 *          the code is pushed later to our webhook receiver — see
 *          /api/escape-game/oddball-webhook)
 *
 * Idempotency is keyed on `partner_ref` (we use the Stripe session id, one per
 * phone), so Stripe webhook retries return the same code instead of new ones.
 */
import crypto from 'crypto';

const API_URL = process.env.ODDBALLTRIP_API_URL || 'https://www.oddballtrip.com';
const API_KEY = process.env.ODDBALLTRIP_PARTNER_API_KEY;
const WEBHOOK_SECRET = process.env.ODDBALLTRIP_WEBHOOK_SECRET;

/** Base URL of the escape-game PWA (used to build activation links in emails). */
export const ESCAPE_PWA_URL = 'https://escape-game-indol.vercel.app';

/**
 * Fun Zone escape offer slug → OddballTrip catalogue slug.
 * NOTE: `escape-cendres` (Garachico) has no game on OddballTrip yet, so a sale
 * of it returns 202 'generating' (or 404) — handled gracefully by the caller.
 */
export const ODDBALL_SLUG_BY_OFFER: Record<string, string> = {
  'escape-ichasagua': 'le-code-dichasagua',
  'escape-trois-cles': 'le-coffre-des-trois-cles',
  'escape-bateria': 'le-butin-de-la-bateria',
  'escape-cendres': 'les-cendres-de-lame',
};

export type PartnerBookingResult =
  | {
      status: 'issued';
      code: string;
      activationUrl: string;
      title?: Record<string, string> | string;
    }
  | { status: 'generating' };

/**
 * Declare a sale to OddballTrip and get an activation code back.
 * Throws on hard failures (auth, unknown game, upstream error) so the caller
 * can log + fall back; returns { status: 'generating' } when the game is being
 * built (code will arrive via the webhook receiver).
 */
export async function createPartnerBooking(params: {
  /** OddballTrip catalogue slug (NOT the Fun Zone offer slug). */
  slug: string;
  customerEmail: string;
  language: string;
  /** Stable idempotency key — use the Stripe session id (+ phone index). */
  partnerRef: string;
  players?: number;
}): Promise<PartnerBookingResult> {
  if (!API_KEY) {
    throw new Error('ODDBALLTRIP_PARTNER_API_KEY is not configured');
  }

  const res = await fetch(`${API_URL}/api/v1/partner/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      slug: params.slug,
      customer_email: params.customerEmail,
      language: params.language,
      players: params.players ?? 1,
      partner_ref: params.partnerRef,
    }),
  });

  const data = await res.json().catch(() => ({} as Record<string, unknown>));

  // 202 = game not generated yet; the code will be pushed to our webhook later.
  if (res.status === 202 || (data as { status?: string }).status === 'generating') {
    return { status: 'generating' };
  }

  if (!res.ok || !(data as { code?: string }).code) {
    const err = (data as { error?: string; message?: string }).error ||
      (data as { message?: string }).message ||
      JSON.stringify(data);
    throw new Error(`OddballTrip partner booking failed (${res.status}): ${err}`);
  }

  const d = data as { code: string; activationUrl: string; title?: Record<string, string> | string };
  return { status: 'issued', code: d.code, activationUrl: d.activationUrl, title: d.title };
}

/**
 * Verify an inbound `booking.code_ready` webhook push from OddballTrip.
 * Signature: hex(HMAC-SHA256(webhook_secret, `${timestamp}.${rawBody}`)).
 */
export function verifyOddballWebhook(
  timestamp: string | null,
  rawBody: string,
  signature: string | null
): boolean {
  if (!WEBHOOK_SECRET || !timestamp || !signature) return false;
  const expected = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(`${timestamp}.${rawBody}`)
    .digest('hex');
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
