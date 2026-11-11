/**
 * Lume partner (reseller) integration: Tenerife city audio tours.
 *
 * Fun Zone Tenerife resells Lume's self-guided audio tours. Instead of
 * generating activation codes itself, it declares each paid sale to Lume's
 * partner API, which owns the tours, generates the narration for a new
 * (city × language) pair on demand, EMAILS the code to the customer directly,
 * and returns the code(s) so Fun Zone can show them on the confirmation page.
 *
 *   POST {LUME_PARTNER_API_URL}/api/partner/order
 *   Authorization: Bearer {LUME_PARTNER_API_KEY}
 *   body: { externalOrderId, citySlug, email, language, quantity?, name? }
 *   → 200 { received, codes:[...], status:'delivered' }   (tour ready, email sent)
 *   → 202 { received, codes:[...], status:'building' }     (new city: code valid
 *          immediately, narration generating, email arrives within minutes)
 *   → same externalOrderId again → { received, duplicate:true, codes:[...] }
 *   → 401 bad key · 404 unknown slug · 403 city sold as pass · 400 invalid body
 *     · 503 server key not configured
 *
 * Idempotency is keyed on `externalOrderId` (unique + stable per order line),
 * so a retry (webhook + confirmation page both call this) returns the same
 * codes instead of issuing new ones. One call = one city + one language.
 *
 * IMPORTANT: Fun Zone does NOT send the code email itself; Lume does, in the
 * `language` sent here. Sending our own would double-email the customer.
 *
 * The key lives only in the server env (LUME_PARTNER_API_KEY), never in source
 * and never exposed to the browser.
 */

const API_URL = process.env.LUME_PARTNER_API_URL || 'https://www.lume.travel/api/partner/order';
const API_KEY = process.env.LUME_PARTNER_API_KEY;

/** Public page where a customer redeems a code (shown on the confirmation page). */
export const LUME_ACTIVATE_URL = 'https://www.lume.travel/activate';

/** Max codes Lume issues per single call (per the partner contract). */
export const LUME_MAX_QUANTITY = 6;

/**
 * Build the stable idempotency key for one order line.
 * Uses the Stripe session id + Lume city slug so webhook retries and the
 * confirmation-page call resolve to the same Lume order (no duplicate codes).
 */
export function audioTourExternalOrderId(sessionId: string, lumeCitySlug: string): string {
  return `FZ-${sessionId}:${lumeCitySlug}`;
}

export interface LumeOrderResult {
  /** 'delivered' = tour ready + email sent; 'building' = code valid now, email soon. */
  status: 'delivered' | 'building';
  codes: string[];
  /** true when this externalOrderId was already fulfilled (nothing re-created). */
  duplicate: boolean;
}

/**
 * Declare a paid audio-tour sale to Lume and get the activation code(s) back.
 * Throws on hard failures (auth, unknown slug, city-in-pass, invalid body,
 * server key) so the caller can log; returns codes + status on success.
 */
export async function createLumeOrder(params: {
  externalOrderId: string;
  /** Lume city slug (the CityMeta.fulfilmentSlug), e.g. "garachico". */
  citySlug: string;
  /** Customer email; Lume emails the code here. */
  email: string;
  /** Tour + email language: one of the 32 ISO 639-1 codes, lowercase. */
  language: string;
  /** 1..6 codes in one call. */
  quantity?: number;
  /** Optional customer name (feeds Lume's internal sale alert). */
  name?: string;
}): Promise<LumeOrderResult> {
  if (!API_KEY) {
    throw new Error('LUME_PARTNER_API_KEY is not configured');
  }

  const quantity = Math.max(1, Math.min(LUME_MAX_QUANTITY, Math.floor(params.quantity ?? 1)));

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      externalOrderId: params.externalOrderId,
      citySlug: params.citySlug,
      email: params.email,
      language: (params.language || 'en').toLowerCase(),
      quantity,
      ...(params.name ? { name: params.name } : {}),
    }),
  });

  const data = await res.json().catch(() => ({} as Record<string, unknown>));

  if (!res.ok) {
    const d = data as { error?: string; message?: string };
    const msg = d.error || d.message || JSON.stringify(data);
    throw new Error(`Lume order failed (${res.status}): ${msg}`);
  }

  const d = data as { codes?: unknown; status?: string; duplicate?: boolean };
  const codes = Array.isArray(d.codes)
    ? d.codes.filter((c): c is string => typeof c === 'string')
    : [];
  const status: 'delivered' | 'building' = d.status === 'building' ? 'building' : 'delivered';

  return { status, codes, duplicate: Boolean(d.duplicate) };
}
