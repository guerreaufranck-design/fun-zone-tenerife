import { createAdminClient } from "@/lib/supabase/admin";
import type { DynamicPricing, LaneType } from "@/lib/supabase/types";

export type PriceModifier = {
  type: string;
  value: number;
  label: string;
};

export type PriceCalculation = {
  basePrice: number;
  modifier: PriceModifier | null;
  finalPrice: number;
  depositAmount: number;
};

/**
 * Calculate the price for a booking, applying any active dynamic pricing rules.
 *
 * For classic_darts: pricing is per lane (always 1 player entry in offer_pricing).
 * For other types: pricing is looked up by player count in offer_pricing.
 *
 * Deposit = 20% of the total price.
 */
export async function calculatePrice(
  offerId: string,
  players: number,
  date: string,
  startTime: string,
  locale: string = "en"
): Promise<PriceCalculation> {
  const supabase = createAdminClient();

  // Get the offer to know the lane type
  const { data: offer } = await supabase
    .from("offers")
    .select("lane_type")
    .eq("id", offerId)
    .single();

  if (!offer) {
    throw new Error(`Offer not found: ${offerId}`);
  }

  // Get the base price from offer_pricing
  const pricingQuery = supabase
    .from("offer_pricing")
    .select("price_cents")
    .eq("offer_id", offerId);

  if (offer.lane_type === "classic_darts") {
    // Classic darts is priced per lane, use the single entry (players=1)
    pricingQuery.eq("players", 1);
  } else {
    pricingQuery.eq("players", players);
  }

  const { data: pricing } = await pricingQuery.single();

  if (!pricing) {
    // If exact player count not found, find the closest lower match
    const { data: closestPricing } = await supabase
      .from("offer_pricing")
      .select("price_cents")
      .eq("offer_id", offerId)
      .lte("players", players)
      .order("players", { ascending: false })
      .limit(1)
      .single();

    if (!closestPricing) {
      throw new Error(
        `No pricing found for offer ${offerId} with ${players} players`
      );
    }

    return buildPriceResult(
      closestPricing.price_cents,
      date,
      startTime,
      locale
    );
  }

  return buildPriceResult(pricing.price_cents, date, startTime, locale);
}

async function buildPriceResult(
  basePriceCents: number,
  date: string,
  startTime: string,
  locale: string
): Promise<PriceCalculation> {
  const modifier = await getActiveDynamicModifier(date, startTime, locale);
  let finalPrice = basePriceCents;

  if (modifier) {
    if (modifier.type === "percentage") {
      finalPrice = Math.round(basePriceCents * (1 - modifier.value / 100));
    } else if (modifier.type === "fixed") {
      finalPrice = basePriceCents - Math.round(modifier.value * 100);
    }
  }

  // Ensure price doesn't go below zero
  finalPrice = Math.max(0, finalPrice);

  const depositAmount = Math.round(finalPrice * 0.2);

  return {
    basePrice: basePriceCents,
    modifier,
    finalPrice,
    depositAmount,
  };
}

/**
 * Find the active dynamic pricing modifier for a given date and time.
 * Returns null if no modifier applies.
 */
async function getActiveDynamicModifier(
  date: string,
  startTime: string,
  locale: string
): Promise<PriceModifier | null> {
  const supabase = createAdminClient();

  // Get the day of week (0=Sunday, 6=Saturday) from the date
  const dateObj = new Date(date + "T12:00:00");
  const dayOfWeek = dateObj.getDay();

  // Query active dynamic pricing rules for this day
  const { data: rules } = await supabase
    .from("dynamic_pricing")
    .select("*")
    .eq("is_active", true)
    .eq("day_of_week", dayOfWeek)
    .lte("start_hour", startTime)
    .gte("end_hour", startTime);

  if (!rules || rules.length === 0) {
    // Also check rules with null day_of_week (applies to all days)
    const { data: globalRules } = await supabase
      .from("dynamic_pricing")
      .select("*")
      .eq("is_active", true)
      .is("day_of_week", null)
      .lte("start_hour", startTime)
      .gte("end_hour", startTime);

    if (!globalRules || globalRules.length === 0) {
      return null;
    }

    return mapRuleToModifier(globalRules[0], locale);
  }

  // Use the first matching rule (most specific - day-specific over global)
  return mapRuleToModifier(rules[0], locale);
}

function mapRuleToModifier(
  rule: DynamicPricing,
  locale: string
): PriceModifier {
  const label =
    (rule.label as Record<string, string>)?.[locale] ??
    (rule.label as Record<string, string>)?.["en"] ??
    "";

  return {
    type: rule.modifier_type,
    value: Number(rule.modifier_value),
    label,
  };
}
