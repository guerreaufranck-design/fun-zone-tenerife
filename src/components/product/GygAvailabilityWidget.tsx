/**
 * GetYourGuide availability widget (live dates + price) for a single tour.
 *
 * This renders only the widget placeholder div. The actual UI is injected by
 * the GYG integration-analyzer script loaded once globally in the root layout
 * (which also handles click/view tracking under our partner id). The fallback
 * markup inside is shown if that script is blocked or fails.
 */
import { GYG_PARTNER } from '@/lib/gyg';

/** next-intl locale → GetYourGuide locale code. */
const GYG_LOCALE: Record<string, string> = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
  nl: 'nl-NL',
  it: 'it-IT',
};

export default function GygAvailabilityWidget({
  tourId,
  locale,
  bookUrl,
  cmp = 'funzone-activity-detail',
}: {
  tourId: string;
  locale: string;
  /** Deep affiliate link, used as the crawlable/no-JS fallback. */
  bookUrl: string;
  cmp?: string;
}) {
  const localeCode = GYG_LOCALE[locale] ?? 'en-US';

  return (
    <div
      data-gyg-href="https://widget.getyourguide.com/default/availability.frame"
      data-gyg-tour-id={tourId}
      data-gyg-locale-code={localeCode}
      data-gyg-currency="EUR"
      data-gyg-widget="availability"
      data-gyg-variant="horizontal"
      data-gyg-partner-id={GYG_PARTNER}
      data-gyg-cmp={cmp}
    >
      {/* Fallback shown until the GYG script renders the widget (or if blocked). */}
      <a
        href={bookUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-flex items-center gap-2 rounded-lg bg-[#00d4ff] px-6 py-3 font-semibold text-[#0a0a0f] transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
      >
        Check availability & book on GetYourGuide
      </a>
    </div>
  );
}
