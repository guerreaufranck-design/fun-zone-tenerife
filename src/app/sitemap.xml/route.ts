import { NextResponse } from 'next/server';
import { activities } from '@/data/activities';
import { blogPosts } from '@/lib/blog/posts';
import { escapeGamesData } from '@/data/escape-games';

// Force dynamic rendering so the route always reflects the current data set.
export const dynamic = 'force-dynamic';

const BASE_URL = 'https://funzonetenerife.com';
const locales = ['en', 'es', 'fr', 'de', 'nl', 'it'] as const;
type Locale = (typeof locales)[number];
type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

const MAIN_LOCALE: Locale = 'en';

// Localized path segments per route (mirror src/i18n/routing.ts).
const experiencePaths: Record<Locale, string> = {
  en: '/experiences', es: '/experiencias', fr: '/experiences',
  de: '/erlebnisse', nl: '/ervaringen', it: '/esperienze',
};
const activityPaths: Record<Locale, string> = {
  en: '/activities', es: '/actividades', fr: '/activites',
  de: '/aktivitaeten', nl: '/activiteiten', it: '/attivita',
};
const giftPaths: Record<Locale, string> = {
  en: '/gift-voucher', es: '/tarjeta-regalo', fr: '/bon-cadeau',
  de: '/geschenkgutschein', nl: '/cadeaubon', it: '/buono-regalo',
};
const contactPaths: Record<Locale, string> = {
  en: '/contact', es: '/contacto', fr: '/contact',
  de: '/kontakt', nl: '/contact', it: '/contatto',
};
const aboutPaths: Record<Locale, string> = {
  en: '/about', es: '/sobre-nosotros', fr: '/a-propos',
  de: '/ueber-uns', nl: '/over-ons', it: '/chi-siamo',
};
const celebrationPaths: Record<Locale, string> = {
  en: '/stag-hen-party-tenerife', es: '/despedidas-tenerife', fr: '/evjf-evg-tenerife',
  de: '/junggesellenabschied-teneriffa', nl: '/vrijgezellenfeest-tenerife', it: '/addio-nubilato-celibato-tenerife',
};

// Helper: a route whose path segment is identical in every locale.
function samePath(path: string): Record<Locale, string> {
  return { en: path, es: path, fr: path, de: path, nl: path, it: path };
}

// Emit one self-canonical <url> per locale so Google indexes every language,
// each carrying the full hreflang alternate set + x-default. This is the key
// difference from a single-<loc>-per-page sitemap: without a dedicated <loc>
// for each language URL, Google under-indexes the non-default locales.
function buildUrlEntry(
  paths: Record<Locale, string>,
  priority: number,
  changefreq: ChangeFreq,
  lastmod?: string,
  image?: string
): string {
  const date = lastmod || new Date().toISOString().split('T')[0];

  const xhtmlLinks =
    locales
      .map(
        (locale) =>
          `    <xhtml:link rel="alternate" hreflang="${locale}" href="${BASE_URL}/${locale}${paths[locale]}" />`
      )
      .join('\n') +
    `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/${MAIN_LOCALE}${paths[MAIN_LOCALE]}" />`;

  const imageBlock = image
    ? `\n    <image:image>\n      <image:loc>${image}</image:loc>\n    </image:image>`
    : '';

  return locales
    .map(
      (locale) => `  <url>
    <loc>${BASE_URL}/${locale}${paths[locale]}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${locale === MAIN_LOCALE ? priority.toFixed(1) : Math.max(0.1, priority - 0.1).toFixed(1)}</priority>
${xhtmlLinks}${imageBlock}
  </url>`
    )
    .join('\n');
}

export async function GET() {
  const urlEntries: string[] = [];

  // Homepage
  urlEntries.push(buildUrlEntry(samePath(''), 1.0, 'weekly'));

  // Localized marketing pages
  urlEntries.push(buildUrlEntry(experiencePaths, 0.9, 'weekly'));
  urlEntries.push(buildUrlEntry(activityPaths, 0.9, 'weekly'));
  // Stag & hen / EVG-EVJF pillar (high-intent group-celebration landing page)
  urlEntries.push(buildUrlEntry(celebrationPaths, 0.9, 'weekly'));

  // Category pages (same slug in every locale)
  urlEntries.push(buildUrlEntry(samePath('/axe-throwing'), 0.8, 'monthly'));
  urlEntries.push(buildUrlEntry(samePath('/quiz-room'), 0.8, 'monthly'));
  urlEntries.push(buildUrlEntry(samePath('/darts'), 0.8, 'monthly'));
  urlEntries.push(buildUrlEntry(samePath('/escape-game'), 0.9, 'weekly'));

  // Other localized static pages.
  // NOTE: /book is intentionally excluded — it 307-redirects off-site to
  // axethrowingtenerife.com (see next.config.ts), so it must not appear as an
  // indexable URL here.
  urlEntries.push(buildUrlEntry(giftPaths, 0.8, 'monthly'));
  urlEntries.push(buildUrlEntry(samePath('/faq'), 0.6, 'monthly'));
  urlEntries.push(buildUrlEntry(samePath('/blog'), 0.7, 'weekly'));
  urlEntries.push(buildUrlEntry(contactPaths, 0.6, 'monthly'));
  urlEntries.push(buildUrlEntry(aboutPaths, 0.5, 'monthly'));

  // Activity detail pages (localized path segment + shared slug)
  for (const activity of activities) {
    const paths = {} as Record<Locale, string>;
    for (const locale of locales) {
      paths[locale] = `${activityPaths[locale]}/${activity.slug}`;
    }
    const image = activity.image ? `${BASE_URL}${activity.image}` : undefined;
    urlEntries.push(buildUrlEntry(paths, 0.8, 'monthly', undefined, image));
  }

  // Escape-game detail pages (same /escape-game/[slug] path in every locale)
  for (const game of escapeGamesData) {
    const paths = samePath(`/escape-game/${game.slug}`);
    const image = game.image ? `${BASE_URL}${game.image}` : undefined;
    urlEntries.push(buildUrlEntry(paths, 0.8, 'monthly', undefined, image));
  }

  // Blog posts (same /blog/[slug] path in every locale)
  for (const post of blogPosts) {
    const paths = samePath(`/blog/${post.slug}`);
    urlEntries.push(buildUrlEntry(paths, 0.7, 'monthly', post.date));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
