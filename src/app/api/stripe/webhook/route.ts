import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { getStripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { allocateLanes } from "@/lib/booking/lane-allocation";
import { sendBookingConfirmation, sendAdminNewBookingNotification } from "@/lib/email";
import type { LaneType } from "@/lib/supabase/types";

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
      const bookingId = session.metadata?.bookingId;
      const paymentType = session.metadata?.paymentType;

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
