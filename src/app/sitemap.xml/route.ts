import { NextResponse } from 'next/server';

const BASE_URL = 'https://axethrowingtenerife.com';
const locales = ['en', 'es', 'fr', 'de', 'nl', 'it'] as const;

interface SitemapEntry {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: string;
}

const pages: SitemapEntry[] = [
  { path: '', changefreq: 'weekly', priority: 1.0 },
  { path: '/experiences', changefreq: 'weekly', priority: 0.9 },
  { path: '/experiences/axe-throwing', changefreq: 'monthly', priority: 0.8 },
  { path: '/experiences/ninja-throwing', changefreq: 'monthly', priority: 0.8 },
  { path: '/experiences/darts', changefreq: 'monthly', priority: 0.8 },
  { path: '/experiences/combo-axe-ninja', changefreq: 'monthly', priority: 0.8 },
  { path: '/experiences/combo-full', changefreq: 'monthly', priority: 0.8 },
  { path: '/experiences/group-event', changefreq: 'monthly', priority: 0.8 },
  { path: '/experiences/private-event', changefreq: 'monthly', priority: 0.8 },
  { path: '/experiences/kids-session', changefreq: 'monthly', priority: 0.7 },
  { path: '/experiences/competition', changefreq: 'monthly', priority: 0.7 },
  { path: '/book', changefreq: 'daily', priority: 0.9 },
  { path: '/faq', changefreq: 'monthly', priority: 0.6 },
  { path: '/blog', changefreq: 'weekly', priority: 0.7 },
  { path: '/contact', changefreq: 'monthly', priority: 0.6 },
  { path: '/about', changefreq: 'monthly', priority: 0.5 },
  { path: '/gift-voucher', changefreq: 'monthly', priority: 0.8 },
  { path: '/waiver', changefreq: 'yearly', priority: 0.3 },
];

function buildUrlEntry(entry: SitemapEntry): string {
  const lastmod = entry.lastmod || new Date().toISOString().split('T')[0];

  const xhtmlLinks = locales
    .map(
      (locale) =>
        `    <xhtml:link rel="alternate" hreflang="${locale}" href="${BASE_URL}/${locale}${entry.path}" />`
    )
    .join('\n');

  // Use default locale (en) as the main URL
  const loc = `${BASE_URL}/en${entry.path}`;

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
${xhtmlLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${entry.path}" />
  </url>`;
}

export async function GET() {
  const urls = pages.map(buildUrlEntry).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
