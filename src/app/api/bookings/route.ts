import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { createAdminClient } from "@/lib/supabase/admin";
import { calculatePrice } from "@/lib/booking/pricing";
import { calculateLanesNeeded } from "@/lib/booking/lane-allocation";
import { generateBookingRef } from "@/lib/utils";
import type { BookingInsert, LaneType, PaymentType } from "@/lib/supabase/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      offerId,
      players,
      date,
      startTime,
      endTime,
      customerName,
      customerEmail,
      customerPhone,
      paymentType,
      language,
    } = body as {
      offerId: string;
      players: number;
      date: string;
      startTime: string;
      endTime: string;
      customerName: string;
      customerEmail: string;
      customerPhone?: string;
      paymentType: PaymentType;
      language?: string;
    };

    // Validate required fields
    if (
      !offerId ||
      !players ||
      !date ||
      !startTime ||
      !endTime ||
      !customerName ||
      !customerEmail ||
      !paymentType
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (paymentType !== "deposit" && paymentType !== "full") {
      return NextResponse.json(
        { error: "paymentType must be 'deposit' or 'full'" },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    // Fetch offer to get lane_type
    const { data: offer, error: offerError } = await supabase
      .from("offers")
      .select("*")
      .eq("id", offerId)
      .single();

    if (offerError || !offer) {
      return NextResponse.json(
        { error: "Offer not found" },
        { status: 404 }
      );
    }

    // Calculate price
    const priceResult = await calculatePrice(
      offerId,
      players,
      date,
      startTime,
      language ?? "en"
    );

    // Calculate lanes needed
    const laneType = offer.lane_type as LaneType;
    const lanesNeeded = calculateLanesNeeded(laneType, players);

    // Generate booking reference and modification token
    const bookingRef = generateBookingRef();
    const modificationToken = nanoid(32);

    // Create booking in Supabase
    const bookingData: BookingInsert = {
      booking_ref: bookingRef,
      offer_id: offerId,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone ?? null,
      players,
      booking_date: date,
      start_time: startTime,
      end_time: endTime,
      lanes_needed: lanesNeeded,
      total_cents: priceResult.finalPrice,
      deposit_cents: priceResult.depositAmount,
      payment_type: paymentType,
      payment_status: "pending",
      status: "pending",
      reminder_sent: false,
      language: language ?? "en",
      source: "online",
      modification_token: modificationToken,
      notes: null,
      stripe_session_id: null,
      stripe_payment_intent: null,
      google_event_id: null,
      outlook_event_id: null,
    };

    const { data: booking, error: bookingError } = await supabase
      .from("bookings")
      .insert(bookingData)
      .select()
      .single();

    if (bookingError) {
      console.error("Error creating booking:", bookingError);
      return NextResponse.json(
        { error: "Failed to create booking" },
        { status: 500 }
      );
    }

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
