import { createAdminClient } from "@/lib/supabase/admin";
import type { LaneType } from "@/lib/supabase/types";

/**
 * Calculate how many lanes are needed for a given lane type and player count.
 *
 * - axe: 1 lane per 5 players (ceil(players / 5))
 * - darts_pixels: always 1 lane (max 6 players)
 * - classic_darts: always 1 lane (priced per lane, not per player)
 */
export function calculateLanesNeeded(
  laneType: LaneType,
  players: number
): number {
  switch (laneType) {
    case "axe":
      return Math.ceil(players / 5);
    case "darts_pixels":
      return 1;
    case "classic_darts":
      return 1;
    default:
      return 1;
  }
}

/**
 * Check whether enough lanes of the given type are available
 * for the requested date and time window.
 * Uses lanes_needed from bookings directly (works for manual + online bookings).
 */
export async function checkAvailability(
  laneType: LaneType,
  lanesNeeded: number,
  date: string,
  startTime: string,
  endTime: string
): Promise<boolean> {
  const supabase = createAdminClient();

  // Get all active lanes of this type
  const { data: allLanes } = await supabase
    .from("lanes")
    .select("id")
    .eq("type", laneType)
    .eq("is_active", true);

  if (!allLanes || allLanes.length < lanesNeeded) {
    return false;
  }

  // Find overlapping bookings with their offer to check lane type
  const { data: overlappingBookings } = await supabase
    .from("bookings")
    .select("id, lanes_needed, offer_id")
    .eq("booking_date", date)
    .lt("start_time", endTime)
    .gt("end_time", startTime)
    .in("status", ["confirmed", "completed", "modified", "manual"]);

  if (!overlappingBookings || overlappingBookings.length === 0) {
    return true;
  }

  // Get offer lane types to filter by our lane type
  const offerIds = [...new Set(overlappingBookings.map((b) => b.offer_id).filter(Boolean))];
  const { data: offerData } = await supabase
    .from("offers")
    .select("id, lane_type")
    .in("id", offerIds);

  const offerLaneTypes = new Map((offerData ?? []).map((o) => [o.id, o.lane_type]));

  // Sum lanes_needed from overlapping bookings of the same lane type
  let occupiedLanes = 0;
  for (const booking of overlappingBookings) {
    if (booking.offer_id && offerLaneTypes.get(booking.offer_id) === laneType) {
      occupiedLanes += booking.lanes_needed ?? 1;
    }
  }

  return (allLanes.length - occupiedLanes) >= lanesNeeded;
}

/**
 * Allocate specific lane IDs for a booking.
 * Returns an array of lane IDs if enough lanes are available, or null otherwise.
 * Uses both booking_lanes entries AND lanes_needed counts to handle
 * bookings without explicit lane assignments (e.g., manual bookings).
 */
export async function allocateLanes(
  laneType: LaneType,
  lanesNeeded: number,
  date: string,
  startTime: string,
  endTime: string
): Promise<string[] | null> {
  const supabase = createAdminClient();

  // Get all active lanes of this type
  const { data: allLanes } = await supabase
    .from("lanes")
    .select("id")
    .eq("type", laneType)
    .eq("is_active", true);

  if (!allLanes || allLanes.length < lanesNeeded) {
    return null;
  }

  // Find overlapping bookings
  const { data: overlappingBookings } = await supabase
    .from("bookings")
    .select("id, lanes_needed, offer_id")
    .eq("booking_date", date)
    .lt("start_time", endTime)
    .gt("end_time", startTime)
    .in("status", ["confirmed", "completed", "modified", "manual"]);

  let bookedLaneIds = new Set<string>();
  let unassignedLanesCount = 0;

  if (overlappingBookings && overlappingBookings.length > 0) {
    // Get offer lane types
    const offerIds = [...new Set(overlappingBookings.map((b) => b.offer_id).filter(Boolean))];
    const { data: offerData } = await supabase
      .from("offers")
      .select("id, lane_type")
      .in("id", offerIds);
    const offerLaneTypes = new Map((offerData ?? []).map((o) => [o.id, o.lane_type]));

    // Get explicit lane assignments
    const bookingIds = overlappingBookings.map((b) => b.id);
    const { data: bookedLaneAssignments } = await supabase
      .from("booking_lanes")
      .select("booking_id, lane_id")
      .in("booking_id", bookingIds);

    const assignedBookingIds = new Set(
      (bookedLaneAssignments ?? []).map((bl) => bl.booking_id)
    );

    bookedLaneIds = new Set(
      (bookedLaneAssignments ?? []).map((bl) => bl.lane_id)
    );

    // Count lanes_needed from bookings WITHOUT explicit lane assignments
    // (manual bookings that don't have booking_lanes entries)
    for (const booking of overlappingBookings) {
      if (!assignedBookingIds.has(booking.id)) {
        // Only count if same lane type
        if (booking.offer_id && offerLaneTypes.get(booking.offer_id) === laneType) {
          unassignedLanesCount += booking.lanes_needed ?? 1;
        }
      }
    }
  }

  // Filter to available lanes (not explicitly booked)
  const availableLanes = allLanes.filter(
    (lane) => !bookedLaneIds.has(lane.id)
  );

  // Account for unassigned bookings that still occupy lanes
  const effectiveAvailable = availableLanes.length - unassignedLanesCount;

  if (effectiveAvailable < lanesNeeded) {
    return null;
  }

  // Return the first N available lane IDs
  return availableLanes.slice(0, lanesNeeded).map((lane) => lane.id);
}
