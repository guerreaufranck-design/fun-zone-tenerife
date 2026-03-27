import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.funzonetenerife.com';
const locales = ['en', 'es', 'fr', 'de', 'it'];

const escapeGameSlugs = [
  'le-code-dichasagua',
  'le-coffre-des-trois-cles',
  'le-butin-de-la-bateria',
  'les-cendres-de-lame',
];

const staticPages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/escape-game', priority: 0.95, changeFrequency: 'weekly' as const },
  { path: '/axe-throwing', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/quiz-room', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/darts', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/experiences', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/book', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/gift-voucher', priority: 0.6, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const page of staticPages) {
    for (const locale of locales) {
      const alternates: Record<string, string> = {};
      for (const altLocale of locales) {
        alternates[altLocale] = `${BASE_URL}/${altLocale}${page.path}`;
      }

      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages: alternates },
      });
    }
  }

  // Escape game product pages for each locale
  for (const slug of escapeGameSlugs) {
    for (const locale of locales) {
      const alternates: Record<string, string> = {};
      for (const altLocale of locales) {
        alternates[altLocale] = `${BASE_URL}/${altLocale}/escape-game/${slug}`;
      }

      entries.push({
        url: `${BASE_URL}/${locale}/escape-game/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        alternates: { languages: alternates },
      });
    }
  }

  return entries;
}
