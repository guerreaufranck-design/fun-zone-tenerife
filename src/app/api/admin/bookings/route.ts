import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendBookingConfirmation, sendAdminNewBookingNotification } from "@/lib/email";
import { nanoid } from "nanoid";

// POST /api/admin/bookings — create a manual booking + send emails
export async function POST(req: NextRequest) {
  const supabase = createAdminClient();
  const body = await req.json();

  const bookingRef = `AXT-${new Date().getFullYear()}-${nanoid(5).toUpperCase()}`;

  const bookingData = {
    booking_ref: bookingRef,
    offer_id: body.offer_id,
    customer_name: body.customer_name,
    customer_email: body.customer_email || "",
    customer_phone: body.customer_phone || null,
    players: body.players,
    booking_date: body.booking_date,
    start_time: body.start_time,
    end_time: body.end_time,
    lanes_needed: body.lanes_needed,
    total_cents: body.total_cents ?? 0,
    deposit_cents: body.deposit_cents ?? 0,
    payment_type: body.payment_type || "full",
    status: "manual" as const,
    payment_status: body.payment_status || "pending",
    source: "manual" as const,
    notes: body.notes || null,
    language: body.language || "en",
    reminder_sent: false,
    modification_token: nanoid(32),
  };

  const { data: booking, error } = await supabase
    .from("bookings")
    .insert(bookingData)
    .select()
    .single();

  if (error) {
    console.error("Manual booking creation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Fetch offer for email
  const { data: offer } = await supabase
    .from("offers")
    .select("*")
    .eq("id", body.offer_id)
    .single();

  // Send confirmation email to customer (if email provided)
  if (booking.customer_email && offer) {
    try {
      await sendBookingConfirmation(booking, offer);
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
    }

    // Send admin notification
    try {
      await sendAdminNewBookingNotification(booking, offer);
    } catch (adminError) {
      console.error("Failed to send admin notification:", adminError);
    }
  }

  return NextResponse.json(booking, { status: 201 });
}
