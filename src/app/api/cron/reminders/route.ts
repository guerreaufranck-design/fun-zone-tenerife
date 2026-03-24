import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendBookingReminder } from "@/lib/email";

export async function GET(request: NextRequest) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new Response("Unauthorized", { status: 401 });
    }

    const supabase = createAdminClient();

    // Calculate tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];

    // Query bookings for tomorrow that haven't had reminders sent
    const { data: bookings, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("booking_date", tomorrowStr)
      .eq("reminder_sent", false)
      .in("status", ["confirmed", "manual"]);

    if (error) {
      console.error("Error fetching bookings for reminders:", error);
      return NextResponse.json(
        { error: "Failed to fetch bookings" },
        { status: 500 }
      );
    }

    if (!bookings || bookings.length === 0) {
      return NextResponse.json({ sent: 0 });
    }

    let sentCount = 0;

    for (const booking of bookings) {
      try {
        // Fetch the offer for this booking
        const { data: offer } = await supabase
          .from("offers")
          .select("*")
          .eq("id", booking.offer_id)
          .single();

        if (offer) {
          await sendBookingReminder(booking, offer);

          // Mark reminder as sent
          await supabase
            .from("bookings")
            .update({ reminder_sent: true })
            .eq("id", booking.id);

          sentCount++;
        }
      } catch (emailError) {
        console.error(
          `Failed to send reminder for booking ${booking.booking_ref}:`,
          emailError
        );
      }
    }

    return NextResponse.json({ sent: sentCount });
  } catch (error) {
    console.error("Error in reminders cron:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
