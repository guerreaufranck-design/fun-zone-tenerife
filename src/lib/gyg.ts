/**
 * GetYourGuide affiliate link helpers.
 *
 * Every GYG link carries our `partner_id`; we also tag a `cmp` (campaign) so
 * Fun Zone's traffic shows up as its own line in the GYG partner dashboard
 * (instead of the catch-all "no_reseller_campaign"), broken down by placement
 * (activities / blog / celebrations) so we can see what actually converts.
 */
export const GYG_PARTNER = 'VHOM8VQ';

/** Base builder: deep-link to a specific GYG activity path, tagged by placement. */
export function gygUrl(path: string, cmp = 'funzone-activities'): string {
  return `https://www.getyourguide.com/${path}?partner_id=${GYG_PARTNER}&cmp=${cmp}`;
}

/**
 * Extract the numeric GetYourGuide tour id from a product URL or path.
 * GYG slugs end with `-t<digits>` (e.g. `…travelin-lady-tenerife-t392740/`),
 * which is the id the availability widget needs. Returns null for non-GYG urls
 * (e.g. the internal `/escape-game` booking).
 */
export function gygTourId(url: string): string | null {
  const m = url.match(/-t(\d+)(?:[/?#]|$)/);
  return m ? m[1] : null;
}

/** Re-tag an existing GYG url with a placement campaign (set or replace `cmp`). */
export function withGygCampaign(url: string, cmp: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set('cmp', cmp);
    return u.toString();
  } catch {
    return url;
  }
}
