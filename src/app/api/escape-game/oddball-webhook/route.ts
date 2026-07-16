import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { verifyOddballWebhook, ESCAPE_PWA_URL } from "@/lib/oddballtrip";
import { ESCAPE_GAMES } from "@/lib/escape-game";
import { sendEscapeGameCode } from "@/lib/email";

const ESCAPE_CITIES: Record<string, string> = {
  'escape-ichasagua': 'Los Cristianos & Playa de las Américas',
  'escape-trois-cles': 'San Cristóbal de La Laguna',
  'escape-bateria': 'Puerto de la Cruz',
  'escape-cendres': 'Garachico',
};
const ESCAPE_DURATIONS: Record<string, string> = {
  'escape-ichasagua': '3-4h',
  'escape-trois-cles': '2-2h30',
  'escape-bateria': '1h30-2h',
  'escape-cendres': '2h30-3h',
};

/**
 * POST /api/escape-game/oddball-webhook
 *
 * Receives the `booking.code_ready` push from OddballTrip when a game that was
 * still generating at purchase time finishes building (e.g. Garachico). Verifies
 * the HMAC signature, then emails the activation code to the original buyer.
 *
 * Payload: { event, slug, code, activationUrl, language, players, partner_ref, price, currency }
 * Headers: X-OddballTrip-Timestamp, X-OddballTrip-Signature
 *
 * Always answers 200 once the signature is valid so OddballTrip stops retrying;
 * unrecoverable delivery problems are logged for manual follow-up (the code also
 * lives in OddballTrip's partner_purchases).
 */
export async function POST(request: NextRequest) {
  const raw = await request.text();
  const timestamp = request.headers.get("x-oddballtrip-timestamp");
  const signature = request.headers.get("x-oddballtrip-signature");

  if (!verifyOddballWebhook(timestamp, raw, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: {
    event?: string;
    slug?: string;
    code?: string;
    language?: string;
    partner_ref?: string | null;
  };
  try {
    payload = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (payload.event !== "booking.code_ready" || !payload.code) {
    return NextResponse.json({ received: true, ignored: true });
  }

  try {
    const supabase = createAdminClient();

    // partner_ref looks like `${sessionId}_p1` or `${sessionId}_p1_<oddballSlug>`.
    // Derive the Stripe session id to locate the original order + buyer.
    const sessionId = (payload.partner_ref || "").replace(/_p\d+(?:_.*)?$/, "");

    const { data: order } = sessionId
      ? await supabase
          .from("escape_orders")
          .select("id, customer_name, customer_email, locale, codes")
          .or(`stripe_session_id.eq.${sessionId},stripe_session_id.like.${sessionId}%`)
          .limit(1)
          .maybeSingle()
      : { data: null };

    if (!order?.customer_email) {
      console.error(
        `[oddball-webhook] code ${payload.code} for ${payload.slug} — no matching order for partner_ref=${payload.partner_ref}. Manual delivery needed.`
      );
      return NextResponse.json({ received: true, unmatched: true });
    }

    const game = ESCAPE_GAMES.find((g) => g.oddballSlug === payload.slug);
    const locale = payload.language || order.locale || "en";
    const gameName = game ? (game.title[locale] ?? game.title["en"]) : "Escape Game";
    const offerSlug = game?.offerSlug ?? "";

    await sendEscapeGameCode({
      email: order.customer_email,
      customerName: order.customer_name || "Player",
      code: payload.code,
      gameName,
      city: ESCAPE_CITIES[offerSlug] || game?.city || "",
      estimatedDuration: ESCAPE_DURATIONS[offerSlug] || game?.estimatedDuration || "2h",
      appUrl: ESCAPE_PWA_URL,
      language: locale,
    });

    // Record the now-delivered code on the order.
    const codes = Array.isArray(order.codes) ? order.codes : [];
    if (!codes.includes(payload.code)) {
      await supabase
        .from("escape_orders")
        .update({ codes: [...codes, payload.code] })
        .eq("id", order.id);
    }

    console.log(`[oddball-webhook] delivered code ${payload.code} (${payload.slug}) to ${order.customer_email}`);
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[oddball-webhook] handler error:", err);
    // 200 anyway: signature was valid, so don't trigger endless retries; the
    // code is safe in OddballTrip and can be resent manually.
    return NextResponse.json({ received: true, error: true });
  }
}
