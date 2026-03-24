import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendBookingModified, sendAdminNewBookingNotification } from "@/lib/email";
import { calculateLanesNeeded } from "@/lib/booking/lane-allocation";
import type { LaneType } from "@/lib/supabase/types";

// PUT /api/admin/bookings/[id] — modify a booking from admin
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = createAdminClient();
  const body = await req.json();

  // Fetch existing booking
  const { data: existing, error: fetchError } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (fetchError || !existing) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }

  // Fetch the offer (use new offer_id if changed, otherwise existing)
  const offerId = body.offer_id || existing.offer_id;
  const { data: offer, error: offerError } = await supabase
    .from("offers")
    .select("*")
    .eq("id", offerId)
    .single();

  if (offerError || !offer) {
    return NextResponse.json({ error: "Offer not found" }, { status: 404 });
  }

  const isBackoffice = offer.backoffice_only === true;
  const players = body.players ?? existing.players;
  const laneType = offer.lane_type as LaneType;
  const lanesNeeded = calculateLanesNeeded(laneType, players);

  // Calculate end_time from start_time + offer duration
  const startTime = body.start_time || existing.start_time;
  const [sh, sm] = startTime.split(":").map(Number);
  const endMinutes = sh * 60 + sm + offer.duration_minutes;
  const endTime = `${Math.floor(endMinutes / 60)
    .toString()
    .padStart(2, "0")}:${(endMinutes % 60).toString().padStart(2, "0")}`;

  // Calculate total if offer or players changed
  let totalCents = existing.total_cents;
  if (body.offer_id || body.players) {
    if (isBackoffice) {
      totalCents = 0;
    } else {
      // Fetch pricing for new player count
      const { data: pricing } = await supabase
        .from("offer_pricing")
        .select("players, price_cents")
        .eq("offer_id", offerId)
        .order("players");

      if (pricing && pricing.length > 0) {
        const exact = pricing.find((p) => p.players === players);
        if (exact) {
          totalCents = exact.price_cents;
        } else {
          // Find closest lower tier
          let closest = pricing[0];
          for (const tier of pricing) {
            if (tier.players <= players) closest = tier;
            else break;
          }
          totalCents = closest?.price_cents ?? existing.total_cents;
        }
      }
    }
  }

  // Keep old values for modification email
  const oldDate = existing.booking_date;
  const oldStartTime = existing.start_time;

  // Determine new status
  const newStatus =
    existing.status === "manual" ? "manual" : "modified";

  // Update booking
  const updateData: Record<string, unknown> = {
    offer_id: offerId,
    players,
    booking_date: body.booking_date || existing.booking_date,
    start_time: startTime,
    end_time: endTime,
    lanes_needed: lanesNeeded,
    total_cents: totalCents,
    notes: body.notes !== undefined ? body.notes : existing.notes,
    status: newStatus,
  };

  const { data: updated, error: updateError } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (updateError) {
    console.error("Booking update error:", updateError);
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  // Send modification email to customer
  if (updated.customer_email) {
    try {
      const bookingWithOld = {
        ...updated,
        _oldDate: oldDate,
        _oldStartTime: oldStartTime,
      };
      await sendBookingModified(bookingWithOld, offer);
    } catch (emailError) {
      console.error("Failed to send modification email:", emailError);
    }

    // Send admin notification
    try {
      await sendAdminNewBookingNotification(updated, offer);
    } catch (adminError) {
      console.error("Failed to send admin notification:", adminError);
    }
  }

  return NextResponse.json(updated);
}
