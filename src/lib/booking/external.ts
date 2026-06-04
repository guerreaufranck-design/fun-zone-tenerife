/**
 * External booking redirect for the AXE tunnel.
 *
 * Axe throwing (incl. ninja) must NOT be booked through the internal FunZone
 * wizard — the whole axe funnel is handled on the dedicated axethrowingtenerife
 * site, which runs the up-to-date slot constraints and pricing. The internal
 * wizard runs an older engine that bypasses those rules, so every axe entry
 * point is redirected here instead of selling internally.
 */
export const AXE_EXTERNAL_BASE = 'https://axethrowingtenerife.com';

/** Category keys whose entire tunnel is delegated to the external axe site. */
export const AXE_EXTERNAL_CATEGORIES = ['axe', 'ninja'] as const;

export function isAxeExternalCategory(category: string | null | undefined): boolean {
  return category === 'axe' || category === 'ninja';
}

/** Locale-aware book URL on the external axe site (both sites share next-intl locales). */
export function axeExternalBookUrl(locale?: string): string {
  return locale ? `${AXE_EXTERNAL_BASE}/${locale}/book` : `${AXE_EXTERNAL_BASE}/book`;
}
