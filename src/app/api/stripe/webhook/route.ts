import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { getStripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { allocateLanes } from "@/lib/booking/lane-allocation";
import { sendBookingConfirmation, sendAdminNewBookingNotification, sendEscapeGameCode, sendIslandPassEmail } from "@/lib/email";
import { ESCAPE_GAMES } from "@/lib/escape-game";
import { createPartnerBooking, ODDBALL_SLUG_BY_OFFER, ESCAPE_PWA_URL } from "@/lib/oddballtrip";
import type { LaneType } from "@/lib/supabase/types";

// Escape-game code generation is delegated to OddballTrip's partner API, which
// can synchronously pre-generate a game's audio on the first sale of a new
// (game × language) pair. Give the webhook room so it doesn't abort mid-call.
export const maxDuration = 300;

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const sig = (await headers()).get("stripe-signature");

    if (!sig) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    let event;
    try {
      event = getStripe().webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const metadata = session.metadata || {};

      // ===== ISLAND PASS PAYMENT (4 escape games) =====
      if (metadata.type === 'island_pass') {
        const { phones, customerName, customerPhone } = metadata;
        const customerEmail = session.customer_email || '';
        const locale = metadata.locale || 'en';
        const phoneCount = parseInt(phones || '1', 10);

        const appUrl = ESCAPE_PWA_URL;
        const supabase = createAdminClient();

        // For each phone, generate 4 codes (one per escape game) via OddballTrip.
        for (let phoneIdx = 0; phoneIdx < phoneCount; phoneIdx++) {
          const gameCodes: { gameName: string; city: string; estimatedDuration: string; code: string }[] = [];

          for (const game of ESCAPE_GAMES) {
            try {
              const booking = await createPartnerBooking({
                slug: game.oddballSlug,
                customerEmail,
                language: locale,
                // one idempotency key per (session, phone, game)
                partnerRef: `${session.id}_p${phoneIdx + 1}_${game.oddballSlug}`,
              });

              if (booking.status === 'generating') {
                console.error(`Island Pass: ${game.oddballSlug} not ready (generating) — will be delivered by webhook`);
                continue;
              }

              gameCodes.push({
                gameName: game.title[locale] ?? game.title['en'] ?? game.city,
                city: game.city,
                estimatedDuration: game.estimatedDuration,
                code: booking.code,
              });
            } catch (e) {
              console.error(`Island Pass: error generating code for ${game.city}:`, e);
            }
          }

          // Send 1 email with all 4 codes
          if (gameCodes.length > 0) {
            try {
              await sendIslandPassEmail({
                email: customerEmail,
                customerName: customerName || 'Player',
                games: gameCodes,
                appUrl,
                language: locale,
              });
            } catch (e) {
              console.error(`Island Pass: failed to send email (phone ${phoneIdx + 1}):`, e);
            }

            // Save to escape_orders (1 row per phone)
            try {
              await supabase.from('escape_orders').insert({
                stripe_session_id: `${session.id}_phone${phoneIdx + 1}`,
                offer_id: null,
                offer_slug: 'island-pass',
                game_name: 'Island Pass',
                phones: 1,
                amount_cents: Math.round((session.amount_total ?? 0) / phoneCount),
                customer_name: customerName || 'Player',
                customer_email: customerEmail,
                customer_phone: customerPhone || null,
                locale,
                codes: gameCodes.map((g) => g.code),
              });
            } catch (dbErr) {
              console.error('Island Pass: failed to save order:', dbErr);
            }
          }
        }

        console.log(`Island Pass processed: ${phoneCount} phone(s), ${phoneCount * 4} codes sent to ${customerEmail}`);
        return NextResponse.json({ received: true });
      }

      // ===== ESCAPE GAME PAYMENT =====
      if (metadata.type === 'escape_game') {
        const { offerId, offerSlug, phones, customerName, customerPhone } = metadata;
        const customerEmail = session.customer_email || '';
        const locale = metadata.locale || 'en';
        const phoneCount = parseInt(phones || '1', 10);

        const supabase = createAdminClient();

        // Fetch offer details
        const { data: offer } = await supabase
          .from('offers')
          .select('title, slug')
          .eq('id', offerId)
          .single();

        const slug = offerSlug || offer?.slug || '';
        const gameName = (offer?.title as Record<string, string>)?.[locale]
          ?? (offer?.title as Record<string, string>)?.['en']
          ?? 'Escape Game';
        const city = ESCAPE_CITIES[slug] || '';
        const duration = ESCAPE_DURATIONS[slug] || '2h';

        // Idempotency: Stripe retries the webhook if we're slow (code generation
        // can take a while). If this session was already fulfilled, don't
        // generate/email again.
        const { data: existingOrder } = await supabase
          .from('escape_orders')
          .select('id, codes')
          .eq('stripe_session_id', session.id)
          .maybeSingle();
        if (existingOrder && Array.isArray(existingOrder.codes) && existingOrder.codes.length >= phoneCount) {
          console.log(`Escape order ${session.id} already fulfilled — skipping`);
          return NextResponse.json({ received: true, alreadyProcessed: true });
        }

        // Generate codes via OddballTrip's partner API (Fun Zone is a reseller).
        const oddballSlug = ODDBALL_SLUG_BY_OFFER[slug];
        const generatedCodes: string[] = [];

        if (!oddballSlug) {
          console.error(`Escape game: no OddballTrip slug mapped for offer "${slug}" — cannot generate code`);
        } else {
          for (let i = 0; i < phoneCount; i++) {
            try {
              const booking = await createPartnerBooking({
                slug: oddballSlug,
                customerEmail,
                language: locale,
                partnerRef: `${session.id}_p${i + 1}`,
              });

              if (booking.status === 'generating') {
                console.error(`Escape game ${oddballSlug} not ready (generating) — code will be delivered by webhook`);
                continue;
              }

              generatedCodes.push(booking.code);

              await sendEscapeGameCode({
                email: customerEmail,
                customerName: customerName || 'Player',
                code: booking.code,
                gameName,
                city,
                estimatedDuration: duration,
                appUrl: ESCAPE_PWA_URL,
                language: locale,
              });
            } catch (err) {
              console.error(`Failed to generate/send escape code (phone ${i + 1}):`, err);
            }
          }
        }

        // Save (or update) the order for analytics + idempotency.
        try {
          if (existingOrder) {
            await supabase.from('escape_orders').update({ codes: generatedCodes }).eq('id', existingOrder.id);
          } else {
            await supabase.from('escape_orders').insert({
              stripe_session_id: session.id,
              offer_id: offerId,
              offer_slug: slug,
              game_name: gameName,
              phones: phoneCount,
              amount_cents: session.amount_total ?? 0,
              customer_name: customerName || 'Player',
              customer_email: customerEmail,
              customer_phone: customerPhone || null,
              locale,
              codes: generatedCodes,
            });
          }
        } catch (dbErr) {
          console.error('Failed to save escape order:', dbErr);
        }

        console.log(`Escape game payment processed: ${phoneCount} codes sent to ${customerEmail} for ${gameName}`);
        return NextResponse.json({ received: true });
      }

      // ===== REGULAR BOOKING PAYMENT =====
      const bookingId = metadata.bookingId;
      const paymentType = metadata.paymentType;

      if (!bookingId) {
        console.error("No bookingId in session metadata");
        return NextResponse.json({ received: true });
      }

      const supabase = createAdminClient();

      // Update booking: confirm status + payment status
      const paymentStatus = paymentType === "deposit" ? "partial" : "paid";
      await supabase
        .from("bookings")
        .update({
          status: "confirmed",
          payment_status: paymentStatus,
          stripe_payment_intent:
            typeof session.payment_intent === "string"
              ? session.payment_intent
              : null,
        })
        .eq("id", bookingId);

      // Fetch the updated booking
      const { data: booking } = await supabase
        .from("bookings")
        .select("*")
        .eq("id", bookingId)
        .single();

      if (booking) {
        // Fetch the offer
        const { data: offer } = await supabase
          .from("offers")
          .select("*")
          .eq("id", booking.offer_id)
          .single();

        // Allocate lanes
        if (offer) {
          const laneType = offer.lane_type as LaneType;
          const laneIds = await allocateLanes(
            laneType,
            booking.lanes_needed,
            booking.booking_date,
            booking.start_time,
            booking.end_time
          );

          if (laneIds) {
            const laneInserts = laneIds.map((laneId) => ({
              booking_id: booking.id,
              lane_id: laneId,
            }));

            await supabase.from("booking_lanes").insert(laneInserts);
          }
        }

        // Send confirmation email to customer + notification to admin
        if (offer) {
          try {
            await sendBookingConfirmation(booking, offer);
          } catch (emailError) {
            console.error("Failed to send confirmation email:", emailError);
          }
          try {
            await sendAdminNewBookingNotification(booking, offer);
          } catch (adminEmailError) {
            console.error("Failed to send admin notification:", adminEmailError);
          }
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
