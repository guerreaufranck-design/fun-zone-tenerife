import { NextResponse } from 'next/server';

const BASE_URL = 'https://funzonetenerife.com';
const locales = ['en', 'es', 'fr', 'de', 'nl', 'it'] as const;

interface SitemapEntry {
  path: string;
  localizedPaths?: Partial<Record<(typeof locales)[number], string>>;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: string;
}

const pages: SitemapEntry[] = [
  { path: '', changefreq: 'weekly', priority: 1.0 },
  {
    path: '/experiences',
    localizedPaths: { en: '/experiences', es: '/experiencias', fr: '/experiences', de: '/erlebnisse', nl: '/ervaringen', it: '/esperienze' },
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    path: '/activities',
    localizedPaths: { en: '/activities', es: '/actividades', fr: '/activites', de: '/aktivitaeten', nl: '/activiteiten', it: '/attivita' },
    changefreq: 'weekly',
    priority: 0.9,
  },
  { path: '/axe-throwing', changefreq: 'monthly', priority: 0.8 },
  { path: '/quiz-room', changefreq: 'monthly', priority: 0.8 },
  { path: '/darts', changefreq: 'monthly', priority: 0.8 },
  { path: '/escape-game', changefreq: 'monthly', priority: 0.8 },
  {
    path: '/book',
    localizedPaths: { en: '/book', es: '/reservar', fr: '/reserver', de: '/buchen', nl: '/boeken', it: '/prenota' },
    changefreq: 'daily',
    priority: 0.9,
  },
  {
    path: '/gift-voucher',
    localizedPaths: { en: '/gift-voucher', es: '/tarjeta-regalo', fr: '/bon-cadeau', de: '/geschenkgutschein', nl: '/cadeaubon', it: '/buono-regalo' },
    changefreq: 'monthly',
    priority: 0.8,
  },
  { path: '/faq', changefreq: 'monthly', priority: 0.6 },
  { path: '/blog', changefreq: 'weekly', priority: 0.7 },
  {
    path: '/contact',
    localizedPaths: { en: '/contact', es: '/contacto', fr: '/contact', de: '/kontakt', nl: '/contact', it: '/contatto' },
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    path: '/about',
    localizedPaths: { en: '/about', es: '/sobre-nosotros', fr: '/a-propos', de: '/ueber-uns', nl: '/over-ons', it: '/chi-siamo' },
    changefreq: 'monthly',
    priority: 0.5,
  },
];

const activitySlugs = [
  'axe-throwing',
  'quiz-room-quizzaboom',
  'escape-game',
  'darts',
  'whale-watching-tenerife',
  'catamaran-sunset-cruise-tenerife',
  'los-gigantes-boat-trip',
  'submarine-tour-tenerife',
  'jet-ski-tenerife',
  'parasailing-tenerife',
  'scuba-diving-tenerife',
  'surf-lessons-tenerife',
  'teide-cable-car-tour',
  'teide-stargazing-tour',
  'quad-buggy-tour-tenerife',
  'masca-gorge-hike',
  'paragliding-tenerife',
  'horse-riding-tenerife',
  'helicopter-tenerife',
  'loro-parque-tickets',
  'siam-park-tickets',
  'karting-tenerife',
  'wine-tasting-tenerife',
  'tenerife-north-day-trip',
  'flamenco-show-dinner-tenerife',
];

const actLocalizedPaths: Record<(typeof locales)[number], string> = {
  en: 'activities', es: 'actividades', fr: 'activites',
  de: 'aktivitaeten', nl: 'activiteiten', it: 'attivita',
};

const blogSlugs = [
  'fun-center-tenerife-4-experiences',
  'quiz-room-tenerife-quizzaboom',
  'escape-game-tenerife-first-timers',
  'evening-entertainment-tenerife-south',
  'date-night-ideas-tenerife',
  'evjf-evg-tenerife-activites-originales',
  'indoor-activities-tenerife-all-weather',
  'group-games-tenerife-competitive',
  'activities-teenagers-tenerife-south',
  'despedida-soltera-tenerife-ideas',
];

function buildUrlEntry(entry: SitemapEntry): string {
  const lastmod = entry.lastmod || new Date().toISOString().split('T')[0];

  const xhtmlLinks = locales
    .map((locale) => {
      const localePath = entry.localizedPaths?.[locale] ?? entry.path;
      return `    <xhtml:link rel="alternate" hreflang="${locale}" href="${BASE_URL}/${locale}${localePath}" />`;
    })
    .join('\n');

  const defaultPath = entry.localizedPaths?.['en'] ?? entry.path;
  const loc = `${BASE_URL}/en${defaultPath}`;

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
${xhtmlLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${defaultPath}" />
  </url>`;
}

function buildActivityEntry(slug: string): string {
  const lastmod = new Date().toISOString().split('T')[0];
  const xhtmlLinks = locales
    .map((locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${BASE_URL}/${locale}/${actLocalizedPaths[locale]}/${slug}" />`)
    .join('\n');

  return `  <url>
    <loc>${BASE_URL}/en/activities/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
${xhtmlLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/activities/${slug}" />
  </url>`;
}

function buildBlogEntry(slug: string): string {
  const lastmod = new Date().toISOString().split('T')[0];
  const xhtmlLinks = locales
    .map((locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${BASE_URL}/${locale}/blog/${slug}" />`)
    .join('\n');

  return `  <url>
    <loc>${BASE_URL}/en/blog/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
${xhtmlLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/blog/${slug}" />
  </url>`;
}

export async function GET() {
  const pageUrls = pages.map(buildUrlEntry).join('\n');
  const activityUrls = activitySlugs.map(buildActivityEntry).join('\n');
  const blogUrls = blogSlugs.map(buildBlogEntry).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pageUrls}
${activityUrls}
${blogUrls}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
