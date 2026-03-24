import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getAvailableSlots } from "@/lib/booking/availability";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const offerId = searchParams.get("offerId");
    const date = searchParams.get("date");
    const players = searchParams.get("players");
    const locale = searchParams.get("locale") ?? "en";

    if (!offerId || !date || !players) {
      return NextResponse.json(
        { error: "Missing required parameters: offerId, date, players" },
        { status: 400 }
      );
    }

    const playerCount = parseInt(players, 10);
    if (isNaN(playerCount) || playerCount < 1) {
      return NextResponse.json(
        { error: "Invalid players count" },
        { status: 400 }
      );
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { error: "Invalid date format. Use YYYY-MM-DD" },
        { status: 400 }
      );
    }

    // Resolve slug to UUID if offerId is not a UUID
    let offerUuid = offerId;
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(offerId)) {
      const supabase = createAdminClient();
      const { data: offer } = await supabase
        .from("offers")
        .select("id")
        .eq("slug", offerId)
        .single();
      if (!offer) {
        return NextResponse.json(
          { error: "Offer not found" },
          { status: 404 }
        );
      }
      offerUuid = offer.id;
    }

    const result = await getAvailableSlots(
      offerUuid,
      date,
      playerCount,
      locale
    );

    // Transform to frontend TimeSlot format (cents → euros)
    const slots = result.slots.map((slot, index) => ({
      id: `slot-${index}`,
      startTime: slot.startTime,
      endTime: slot.endTime,
      price: Math.round(slot.pricePerPlayer) / 100,
      available: slot.available,
      lanesAvailable: slot.lanesAvailable,
      dynamicPricing: slot.modifier
        ? {
            label: slot.modifier.label,
            discount: Math.abs(slot.modifier.value),
          }
        : undefined,
    }));

    return NextResponse.json({ slots, totalLanes: result.totalLanes });
  } catch (error) {
    console.error("Error fetching availability:", error);
    return NextResponse.json(
      { error: "Failed to fetch availability" },
      { status: 500 }
    );
  }
}
