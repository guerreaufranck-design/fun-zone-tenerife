import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookingId, paymentType, locale } = body as {
      bookingId: string;
      paymentType: "deposit" | "full";
      locale?: string;
    };

    if (!bookingId || !paymentType) {
      return NextResponse.json(
        { error: "Missing required fields: bookingId, paymentType" },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    // Fetch booking
    const { data: booking, error: bookingError } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", bookingId)
      .single();

    if (bookingError || !booking) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    // Fetch offer details for the product name
    const { data: offer } = await supabase
      .from("offers")
      .select("title")
      .eq("id", booking.offer_id)
      .single();

    const lang = locale ?? booking.language ?? "en";
    const experienceName =
      (offer?.title as Record<string, string>)?.[lang] ??
      (offer?.title as Record<string, string>)?.["en"] ??
      "Axe Throwing Experience";

    // Calculate amount based on payment type
    const amount =
      paymentType === "deposit" ? booking.deposit_cents : booking.total_cents;

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "https://axe-throwing-tenerife.vercel.app");

    // Create Stripe Checkout Session
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: experienceName,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        bookingId: booking.id,
        paymentType,
        bookingRef: booking.booking_ref,
      },
      success_url: `${siteUrl}/${lang}/book/success?session_id={CHECKOUT_SESSION_ID}&ref=${booking.booking_ref}`,
      cancel_url: `${siteUrl}/${lang}/book/cancel`,
      customer_email: booking.customer_email,
      currency: "eur",
    });

    // Update booking with stripe_session_id
    await supabase
      .from("bookings")
      .update({ stripe_session_id: session.id })
      .eq("id", booking.id);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("STRIPE_CHECKOUT_ERROR:", errMsg);
    console.error("STRIPE_KEY_SET:", !!process.env.STRIPE_SECRET_KEY);
    return NextResponse.json(
      { error: "Failed to create checkout session", details: errMsg },
      { status: 500 }
    );
  }
}
