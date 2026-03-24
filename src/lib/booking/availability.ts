import { createAdminClient } from "@/lib/supabase/admin";
import type { LaneType } from "@/lib/supabase/types";
import { calculateLanesNeeded } from "./lane-allocation";
import { calculatePrice, type PriceModifier } from "./pricing";

export type TimeSlot = {
  startTime: string;
  endTime: string;
  available: boolean;
  lanesAvailable: number;
  pricePerPlayer: number;
  totalPrice: number;
  modifier: PriceModifier | null;
};

/**
 * Get available time slots for a given offer, date, and player count.
 *
 * Generates 30-minute increment slots within business hours,
 * checks lane availability for each slot, and calculates pricing.
 */
export type AvailabilityResult = {
  slots: TimeSlot[];
  totalLanes: number;
};

export async function getAvailableSlots(
  offerId: string,
  date: string,
  players: number,
  locale: string = "en"
): Promise<AvailabilityResult> {
  const supabase = createAdminClient();

  // 1. Fetch the offer details
  const { data: offer } = await supabase
    .from("offers")
    .select("*")
    .eq("id", offerId)
    .single();

  if (!offer) {
    throw new Error(`Offer not found: ${offerId}`);
  }

  // 2. Check if this date is a closed date
  const { data: closedDate } = await supabase
    .from("closed_dates")
    .select("id")
    .eq("date", date)
    .maybeSingle();

  if (closedDate) {
    return { slots: [], totalLanes: 0 };
  }

  // 3. Get business hours for this day of the week
  const dateObj = new Date(date + "T12:00:00");
  const dayOfWeek = dateObj.getDay();

  const { data: hours } = await supabase
    .from("business_hours")
    .select("*")
    .eq("day_of_week", dayOfWeek)
    .single();

  if (!hours || hours.is_closed) {
    return { slots: [], totalLanes: 0 };
  }

  // 4. Calculate lanes needed
  const laneType = offer.lane_type as LaneType;
  const lanesNeeded = calculateLanesNeeded(laneType, players);

  // 5. Get all active lanes of this type
  const { data: allLanes } = await supabase
    .from("lanes")
    .select("id")
    .eq("type", laneType)
    .eq("is_active", true);

  const totalLanesOfType = allLanes?.length ?? 0;

  if (totalLanesOfType < lanesNeeded) {
    return { slots: [], totalLanes: 0 };
  }

  // 6. Get all bookings for this date
  // We need offer_id to determine if the booking uses the same lane type
  const { data: dayBookings } = await supabase
    .from("bookings")
    .select("id, start_time, end_time, lanes_needed, offer_id")
    .eq("booking_date", date)
    .in("status", ["confirmed", "completed", "modified", "manual"]);

  // Get offer lane types for all bookings to filter by our lane type
  const bookingOfferIds = [
    ...new Set((dayBookings ?? []).map((b) => b.offer_id).filter(Boolean)),
  ];
  let offerLaneTypes: Map<string, string> = new Map();
  if (bookingOfferIds.length > 0) {
    const { data: offerData } = await supabase
      .from("offers")
      .select("id, lane_type")
      .in("id", bookingOfferIds);
    if (offerData) {
      for (const o of offerData) {
        offerLaneTypes.set(o.id, o.lane_type);
      }
    }
  }

  // 7. Generate time slots using the offer's configured interval
  const openMinutes = timeToMinutes(hours.open_time);
  const closeMinutes = timeToMinutes(hours.close_time);
  const durationMinutes = offer.duration_minutes;
  const slotInterval = offer.slot_interval_minutes ?? 60;

  // For same-day bookings, calculate minimum start time (now + 15 min)
  // Use Canary Islands timezone (Atlantic/Canary)
  const canaryNow = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Atlantic/Canary" })
  );
  const todayStr = canaryNow.toISOString().slice(0, 10);
  const isToday = date === todayStr;
  const minStartMinutes = isToday
    ? canaryNow.getHours() * 60 + canaryNow.getMinutes() + 15
    : 0;

  const slots: TimeSlot[] = [];

  for (
    let slotStart = openMinutes;
    slotStart + durationMinutes <= closeMinutes;
    slotStart += slotInterval
  ) {
    // Skip past slots for same-day bookings (must be at least 15 min from now)
    if (isToday && slotStart < minStartMinutes) continue;

    const startTime = minutesToTime(slotStart);
    const endTime = minutesToTime(slotStart + durationMinutes);

    // Count how many lanes of our type are occupied during this time window
    // Use lanes_needed from each booking (works for both manual and online bookings)
    let occupiedLanesCount = 0;

    if (dayBookings) {
      for (const booking of dayBookings) {
        // Only count bookings that use the same lane type
        const bookingLaneType = booking.offer_id
          ? offerLaneTypes.get(booking.offer_id)
          : null;
        if (bookingLaneType !== laneType) continue;

        const bStart = timeToMinutes(booking.start_time);
        const bEnd = timeToMinutes(booking.end_time);

        // Check overlap: booking overlaps if it starts before our end AND ends after our start
        if (bStart < slotStart + durationMinutes && bEnd > slotStart) {
          occupiedLanesCount += booking.lanes_needed ?? 1;
        }
      }
    }

    const lanesAvailable = Math.max(0, totalLanesOfType - occupiedLanesCount);
    const isAvailable = lanesAvailable >= lanesNeeded;

    // Calculate pricing for this slot
    let pricePerPlayer = 0;
    let totalPrice = 0;
    let modifier: PriceModifier | null = null;

    try {
      const priceResult = await calculatePrice(
        offerId,
        players,
        date,
        startTime,
        locale
      );
      totalPrice = priceResult.finalPrice;
      modifier = priceResult.modifier;

      if (laneType === "classic_darts") {
        // Classic darts is per lane, not per player
        pricePerPlayer = totalPrice;
      } else {
        pricePerPlayer =
          players > 0 ? Math.round(totalPrice / players) : totalPrice;
      }
    } catch {
      // If pricing fails, mark slot as unavailable
      pricePerPlayer = 0;
      totalPrice = 0;
    }

    slots.push({
      startTime,
      endTime,
      available: isAvailable,
      lanesAvailable,
      pricePerPlayer,
      totalPrice,
      modifier,
    });
  }

  return { slots, totalLanes: totalLanesOfType };
}

/**
 * Convert a time string (HH:mm or HH:mm:ss) to minutes since midnight.
 */
function timeToMinutes(time: string): number {
  const parts = time.split(":");
  return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

/**
 * Convert minutes since midnight to a time string (HH:mm).
 */
function minutesToTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}
