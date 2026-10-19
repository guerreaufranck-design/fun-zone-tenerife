import type { Metadata } from 'next';
import { getEscapeGameBySlug } from '@/data/escape-games';
import { getAlternates, type Locale } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = (['en', 'es', 'fr', 'de', 'nl', 'it'].includes(locale) ? locale : 'en') as Locale;
  const game = getEscapeGameBySlug(slug);

  if (!game) {
    return { title: 'Escape Game | Fun Zone Tenerife' };
  }

  const pick = (field: Record<string, string>) => field[l] ?? field['en'] ?? '';

  const name = pick(game.title);
  const island = game.island || 'Tenerife';
  // City the game is played in (location is e.g. "Las Palmas — Vegueta").
  const city = (pick(game.location).split('—')[0] || island).trim();

  // Title + keywords lean hard into "the city and its secrets" per language.
  const TITLE: Record<string, (n: string, c: string) => string> = {
    en: (n, c) => `${n} — Outdoor Escape Game in ${c}: Uncover the City's Secrets | Fun Zone`,
    fr: (n, c) => `${n} — Escape Game Extérieur à ${c} : Les Secrets de la Ville | Fun Zone`,
    es: (n, c) => `${n} — Escape Game al Aire Libre en ${c}: Los Secretos de la Ciudad | Fun Zone`,
    de: (n, c) => `${n} — Outdoor Escape Game in ${c}: Die Geheimnisse der Stadt | Fun Zone`,
    nl: (n, c) => `${n} — Outdoor Escape Game in ${c}: De Geheimen van de Stad | Fun Zone`,
    it: (n, c) => `${n} — Escape Game all'Aperto a ${c}: I Segreti della Città | Fun Zone`,
  };
  const KEYWORDS: Record<string, (n: string, c: string, i: string) => string> = {
    en: (n, c, i) => `escape game ${c}, outdoor escape game ${i}, secrets of ${c}, treasure hunt ${c}, things to do in ${c}, ${n}`,
    fr: (n, c, i) => `escape game ${c}, escape game extérieur ${i}, secrets de ${c}, chasse au trésor ${c}, que faire à ${c}, ${n}`,
    es: (n, c, i) => `escape game ${c}, escape game exterior ${i}, secretos de ${c}, búsqueda del tesoro ${c}, qué hacer en ${c}, ${n}`,
    de: (n, c, i) => `escape game ${c}, outdoor escape ${i}, geheimnisse von ${c}, schnitzeljagd ${c}, ${n}`,
    nl: (n, c, i) => `escape game ${c}, outdoor escape ${i}, geheimen van ${c}, speurtocht ${c}, ${n}`,
    it: (n, c, i) => `escape game ${c}, escape all'aperto ${i}, segreti di ${c}, caccia al tesoro ${c}, ${n}`,
  };
  const title = (TITLE[l] ?? TITLE.en)(name, city);
  const keywords = (KEYWORDS[l] ?? KEYWORDS.en)(name, city, island);
  const description = pick(game.tagline).slice(0, 160);
  const alternates = getAlternates('/escape-game/[slug]', slug);
  const image = game.image
    ? `https://funzonetenerife.com${game.image}`
    : 'https://funzonetenerife.com/images/og-image.jpg';

  return {
    title,
    description,
    keywords,
    alternates: { canonical: alternates.canonical, languages: alternates.languages },
    openGraph: {
      title,
      description,
      url: `https://funzonetenerife.com/${locale}/escape-game/${slug}`,
      siteName: 'Fun Zone Tenerife',
      locale,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default function EscapeGameSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
