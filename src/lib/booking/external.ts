/**
 * External booking redirect.
 *
 * Everything sold as a timed reservation (a specific DATE *and* TIME slot) is
 * booked on the dedicated axethrowingtenerife site, which runs the up-to-date
 * slot constraints and pricing. The internal FunZone wizard runs an older engine
 * that bypasses those rules, so all of those tunnels (axe, ninja, darts, quiz,
 * events) are delegated to the external site.
 *
 * Only the escape game stays internal: it's sold as a self-paced code (number of
 * phones), with no date/time slot, so it doesn't go through the axe booking
 * engine and isn't affected by the constraint mismatch.
 */
export const AXE_EXTERNAL_BASE = 'https://axethrowingtenerife.com';

/** Categories that stay internal (no timed reservation). Everything else is external. */
export const INTERNAL_BOOKING_CATEGORIES = ['escape'] as const;

/** True for any category sold as a date+time reservation (handled by the external site). */
export function isExternalBookingCategory(category: string | null | undefined): boolean {
  if (!category) return false;
  return !INTERNAL_BOOKING_CATEGORIES.includes(
    category as (typeof INTERNAL_BOOKING_CATEGORIES)[number]
  );
}

/** Locale-aware book URL on the external axe site (both sites share next-intl locales). */
export function axeExternalBookUrl(locale?: string): string {
  return locale ? `${AXE_EXTERNAL_BASE}/${locale}/book` : `${AXE_EXTERNAL_BASE}/book`;
}
