import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { checkAvailability, allocateLanes } from "@/lib/booking/lane-allocation";
import { sendBookingModified } from "@/lib/email";
import type { LaneType } from "@/lib/supabase/types";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ ref: string }> }
) {
  try {
    const { ref } = await params;
    const body = await request.json();
    const { token, newDate, newStartTime } = body as {
      token: string;
      newDate: string;
      newStartTime: string;
    };

    if (!token || !newDate || !newStartTime) {
      return NextResponse.json(
        { error: "Missing required fields: token, newDate, newStartTime" },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    // Fetch the booking by reference
    const { data: booking, error: bookingError } = await supabase
      .from("bookings")
      .select("*")
      .eq("booking_ref", ref)
      .single();

    if (bookingError || !booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    // Validate modification token
    if (booking.modification_token !== token) {
      return NextResponse.json(
        { error: "Invalid modification token" },
        { status: 403 }
      );
    }

    // Check that booking is in a modifiable state
    if (booking.status !== "confirmed" && booking.status !== "modified") {
      return NextResponse.json(
        { error: "Booking cannot be modified in its current state" },
        { status: 400 }
      );
    }

    // Fetch the offer to get duration and lane_type
    const { data: offer } = await supabase
      .from("offers")
      .select("*")
      .eq("id", booking.offer_id)
      .single();

    if (!offer) {
      return NextResponse.json(
        { error: "Offer not found" },
        { status: 404 }
      );
    }

    // Calculate new end time based on offer duration
    const laneType = offer.lane_type as LaneType;
    const durationMinutes = offer.duration_minutes;
    const startParts = newStartTime.split(":");
    const startMinutes =
      parseInt(startParts[0], 10) * 60 + parseInt(startParts[1], 10);
    const endMinutes = startMinutes + durationMinutes;
    const newEndTime = `${Math.floor(endMinutes / 60)
      .toString()
      .padStart(2, "0")}:${(endMinutes % 60).toString().padStart(2, "0")}`;

    // Check availability for the new slot (excluding the current booking)
    const isAvailable = await checkAvailability(
      laneType,
      booking.lanes_needed,
      newDate,
      newStartTime,
      newEndTime
    );

    if (!isAvailable) {
      return NextResponse.json(
        { error: "The requested time slot is not available" },
        { status: 409 }
      );
    }

    // Release old lane assignments
    await supabase
      .from("booking_lanes")
      .delete()
      .eq("booking_id", booking.id);

    // Allocate new lanes
    const newLaneIds = await allocateLanes(
      laneType,
      booking.lanes_needed,
      newDate,
      newStartTime,
      newEndTime
    );

    if (newLaneIds) {
      const laneInserts = newLaneIds.map((laneId) => ({
        booking_id: booking.id,
        lane_id: laneId,
      }));
      await supabase.from("booking_lanes").insert(laneInserts);
    }

    // Update booking date and time
    const { data: updatedBooking, error: updateError } = await supabase
      .from("bookings")
      .update({
        booking_date: newDate,
        start_time: newStartTime,
        end_time: newEndTime,
        status: "modified",
      })
      .eq("id", booking.id)
      .select()
      .single();

    if (updateError) {
      console.error("Error updating booking:", updateError);
      return NextResponse.json(
        { error: "Failed to update booking" },
        { status: 500 }
      );
    }

    // Send modification confirmation email
    try {
      await sendBookingModified(
        { ...updatedBooking, _oldDate: booking.booking_date, _oldStartTime: booking.start_time, _oldEndTime: booking.end_time },
        offer
      );
    } catch (emailError) {
      console.error("Failed to send modification email:", emailError);
    }

    return NextResponse.json(updatedBooking);
  } catch (error) {
    console.error("Error modifying booking:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
