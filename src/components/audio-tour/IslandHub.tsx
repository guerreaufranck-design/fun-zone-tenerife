/**
 * Shared, island-aware audio-tour hub (the `/{island}-audio-tour` landing).
 *
 * Each island route passes its own `IslandMeta` and localized `HubCopy`, so a
 * single template renders the Tenerife, Gran Canaria, Lanzarote and
 * Fuerteventura hubs.
 */
import type { Metadata } from 'next';
import type { ComponentProps } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Headphones, MapPin, ArrowRight, Globe } from 'lucide-react';
import { locales } from '@/lib/seo';
import { islandRegion, type IslandMeta } from '@/lib/audio-tour';
import { getCityCopy } from '@/data/audio-tour-content';

const BASE = 'https://funzonetenerife.com';

export interface HubCopy {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heading: string;
  intro: string;
  explore: string;
}

export function islandHubStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function islandHubMetadata(
  island: IslandMeta,
  hub: Record<string, HubCopy>,
  params: Promise<{ locale: string }>,
): Promise<Metadata> {
  const { locale } = await params;
  const h = hub[locale] ?? hub.en;
  const path = island.routeBase;
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${BASE}/${l}${path}`;
  languages['x-default'] = `${BASE}/en${path}`;
  return {
    title: h.metaTitle,
    description: h.metaDescription,
    keywords: h.keywords,
    alternates: { canonical: `${BASE}/${locale}${path}`, languages },
    openGraph: {
      title: `${h.metaTitle} | Fun Zone Tenerife`,
      description: h.metaDescription,
      url: `${BASE}/${locale}${path}`,
      type: 'website',
      images: [{ url: `${BASE}/images/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

export async function IslandHubPage({
  island,
  hub,
  params,
}: {
  island: IslandMeta;
  hub: Record<string, HubCopy>;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const h = hub[locale] ?? hub.en;
  const region = islandRegion(island, locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: h.heading,
    itemListElement: island.cities.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.displayName,
      url: `${BASE}/${locale}${island.routeBase}/${c.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-4 pt-28 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff]">
            <Headphones size={14} /> {region}
          </span>
          <h1 className="neon-glow-blue mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{h.heading}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{h.intro}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/50">
            <Globe size={15} className="text-[#00d4ff]" /> 32 · €12
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {island.cities.map((meta) => {
            const copy = getCityCopy(meta.slug, locale);
            const photo = meta.photos[0];
            const href = {
              pathname: island.cityPathname,
              params: { city: meta.slug },
            } as unknown as ComponentProps<typeof Link>['href'];
            return (
              <Link
                key={meta.slug}
                href={href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-[#111118] transition-colors hover:border-[#00d4ff]/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={`${photo.label}, ${meta.displayName}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="flex items-center gap-2 text-base font-bold text-white">
                    <MapPin size={15} className="shrink-0 text-[#00d4ff]" /> {meta.displayName}
                  </h2>
                  {copy && (
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-white/60">{copy.heroIntro}</p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#00d4ff]">
                    {h.explore} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
