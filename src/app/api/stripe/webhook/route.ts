import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { getStripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { allocateLanes } from "@/lib/booking/lane-allocation";
import { sendBookingConfirmation, sendAdminNewBookingNotification, sendEscapeGameCode } from "@/lib/email";
import type { LaneType } from "@/lib/supabase/types";


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

// Mapping from offer slug to escape-game app gameId
const ESCAPE_GAME_IDS: Record<string, string> = {
  'escape-ichasagua': '11111111-1111-1111-1111-111111111111',
  'escape-trois-cles': '22222222-2222-2222-2222-222222222222',
  'escape-bateria': '33333333-3333-3333-3333-333333333333',
  'escape-cendres': '44444444-4444-4444-4444-444444444444',
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

        // Generate codes via escape-game app API
        const appUrl = process.env.ESCAPE_GAME_APP_URL || 'https://escape-game-indol.vercel.app';
        const apiSecret = process.env.CODE_API_SECRET || 'FZ-EG-2026-sEcReT';
        const gameId = ESCAPE_GAME_IDS[slug] || '';

        const generatedCodes: string[] = [];

        for (let i = 0; i < phoneCount; i++) {
          try {
            const codeRes = await fetch(`${appUrl}/api/generate-code`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-secret': apiSecret,
              },
              body: JSON.stringify({
                gameId,
                customerEmail,
                customerName: customerName || 'Player',
              }),
            });

            if (!codeRes.ok) {
              const errData = await codeRes.json().catch(() => ({}));
              console.error(`Failed to generate code from escape app (phone ${i + 1}):`, errData);
              continue;
            }

            const { code } = await codeRes.json();
            generatedCodes.push(code);

            await sendEscapeGameCode({
              email: customerEmail,
              customerName: customerName || 'Player',
              code,
              gameName,
              city,
              estimatedDuration: duration,
              appUrl,
              language: locale,
            });
          } catch (emailError) {
            console.error(`Failed to process escape game code (phone ${i + 1}):`, emailError);
          }
        }

        // Save order to Supabase for analytics
        try {
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
