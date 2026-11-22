/**
 * Discover Cars affiliate leaderboard (728x90) from the Post Affiliate Pro panel.
 *
 * Faithful to the supplied creative, the same banner id (a_bid=f29909e9) and the
 * same impression-tracking pixel, with two deliberate improvements:
 *  - responsive: the 728px banner scales down to the container width so it never
 *    overflows on phones;
 *  - rel="sponsored nofollow noopener" + target="_blank" (SEO-safe paid link,
 *    opens in a new tab) instead of the panel's bare target="_top" link.
 *
 * Rendered wherever a blog post's content array contains the marker item
 * "[[discover-cars-banner]]".
 */
export default function DiscoverCarsBanner() {
  const html =
    '<a href="https://www.discovercars.com/?a_aid=FUNZONETENERIFE&a_bid=f29909e9" target="_blank" rel="sponsored nofollow noopener">' +
    '<img src="https://discover-car-hire.postaffiliatepro.com/accounts/default1/bunyh71e/f29909e9.jpg" alt="DiscoverCars.com car rental" title="DiscoverCars.com" width="728" height="90" style="width:100%;max-width:728px;height:auto;border-radius:12px;display:block" />' +
    '</a>' +
    '<img src="https://discover-car-hire.postaffiliatepro.com/scripts/iunyh71e?a_aid=FUNZONETENERIFE&a_bid=f29909e9" width="1" height="1" alt="" style="position:absolute;left:-9999px;border:0;width:1px;height:1px" />';

  return (
    <div className="my-8 flex flex-col items-center">
      <div className="w-full max-w-[728px]" dangerouslySetInnerHTML={{ __html: html }} />
      <span className="mt-2 text-xs text-muted-foreground">Partner · affiliate link</span>
    </div>
  );
}
