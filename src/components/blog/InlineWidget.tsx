import { activities } from '@/data/activities';
import { gygTourId, withGygCampaign } from '@/lib/gyg';
import GygAvailabilityWidget from '@/components/product/GygAvailabilityWidget';

/**
 * A booking widget placed in the MIDDLE of a blog article (not just at the
 * foot). Two modes:
 *  - `activitySlug`: looks up one of our existing GetYourGuide activities and
 *    renders its live availability widget. Zero duplication — the tour id and
 *    affiliate link come straight from `data/activities`.
 *  - `embed`: raw GYG embed HTML pasted from the partner dashboard (e.g. a city
 *    widget that lists every activity in a town). Hydrated by the global GYG
 *    script already loaded in the root layout.
 * The placement (`afterParagraph`) is decided per-article in `blog/posts.ts`.
 */
export interface BlogWidget {
  /** Slug of an entry in `data/activities` (non-FunZone / GetYourGuide). */
  activitySlug?: string;
  /** OR raw GYG embed markup (city widget, custom availability widget…). */
  embed?: string;
  /** Insert the widget block AFTER this 0-based paragraph index. */
  afterParagraph: number;
  /** GYG campaign tag for dashboard attribution. */
  cmp?: string;
}

export default function InlineWidget({
  widget,
  locale,
}: {
  widget: BlogWidget;
  locale: string;
}) {
  const cmp = widget.cmp ?? 'funzone-blog-city';

  // Raw embed takes precedence (lets Franck paste a GYG city widget as-is).
  if (widget.embed) {
    return (
      <div className="my-10 rounded-2xl border border-border/50 bg-[#111118] p-5">
        <div dangerouslySetInnerHTML={{ __html: widget.embed }} />
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Booked via GetYourGuide (affiliate link)
        </p>
      </div>
    );
  }

  const act = widget.activitySlug
    ? activities.find((a) => a.slug === widget.activitySlug && !a.isFunZone)
    : undefined;
  if (!act) return null;

  const tourId = gygTourId(act.bookUrl);
  if (!tourId) return null;

  return (
    <div className="my-10 rounded-2xl border border-border/50 bg-[#111118] p-5">
      <p className="mb-1 text-xs font-medium text-[#00d4ff]">{act.location}</p>
      <p className="mb-4 text-base font-bold text-white">{act.name}</p>
      <GygAvailabilityWidget
        tourId={tourId}
        locale={locale}
        bookUrl={withGygCampaign(act.bookUrl, cmp)}
        cmp={cmp}
      />
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Booked via GetYourGuide (affiliate link)
      </p>
    </div>
  );
}
