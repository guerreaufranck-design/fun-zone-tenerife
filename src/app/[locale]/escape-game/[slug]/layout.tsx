import type { Metadata } from 'next';
import { getEscapeGameBySlug, getAllEscapeGameSlugs } from '@/data/escape-games';
import { getAlternates } from '@/lib/seo';

const BASE = 'https://funzonetenerife.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllEscapeGameSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const game = getEscapeGameBySlug(slug);
  if (!game) return {};

  const pick = (r?: Record<string, string>) => (r?.[locale] ?? r?.en ?? '');
  const title = pick(game.title);
  const description = pick(game.tagline) || pick(game.subtitle) || pick(game.intro);
  const alternates = getAlternates('/escape-game/[slug]', slug, locale);
  const image = game.image ? `${BASE}${game.image}` : `${BASE}/images/og-image.jpg`;

  return {
    title,
    description,
    alternates: { canonical: alternates.canonical, languages: alternates.languages },
    openGraph: {
      title: `${title} | Fun Zone Tenerife`,
      description,
      url: alternates.canonical,
      type: 'article',
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default function EscapeGameSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
