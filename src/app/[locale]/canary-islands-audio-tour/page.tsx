import type { Metadata } from 'next';
import type { ComponentProps } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Headphones, MapPin, ArrowRight, Globe } from 'lucide-react';
import { locales } from '@/lib/seo';
import { ISLANDS, islandRegion } from '@/lib/audio-tour';
import { getCityCopy } from '@/data/audio-tour-content';

const BASE = 'https://funzonetenerife.com';
const PATH = '/canary-islands-audio-tour';

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface ArchCopy {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heading: string;
  intro: string;
  explore: string;
}

const ARCH: Record<string, ArchCopy> = {
  en: {
    metaTitle: 'Canary Islands Audio Tours · Self-Guided City Walks',
    metaDescription:
      'Self-guided GPS audio tours across the Canary Islands: Tenerife, Gran Canaria, Lanzarote and Fuerteventura. Native-voice stories in 32 languages, offline, 12 € per code.',
    keywords: 'canary islands audio tours, self-guided tour canary islands, tenerife gran canaria lanzarote fuerteventura audio tour, audio guide canary islands',
    heading: 'Canary Islands city audio tours',
    intro: 'Self-guided GPS audio walks through the historic towns of the Canary Islands, one island at a time. Native-voice narration in 32 languages, offline, with an augmented-reality guide. Choose an island and a town to begin.',
    explore: 'Explore',
  },
  fr: {
    metaTitle: 'Visites audio des îles Canaries · Balades autoguidées',
    metaDescription:
      'Visites audio GPS en autonomie à travers les îles Canaries : Tenerife, Gran Canaria, Lanzarote et Fuerteventura. Récits en voix native dans 32 langues, hors ligne, 12 € le code.',
    keywords: 'visites audio îles canaries, visite autoguidée canaries, tenerife gran canaria lanzarote fuerteventura visite audio, audioguide canaries',
    heading: 'Visites audio des villes des îles Canaries',
    intro: 'Des balades audio GPS en autonomie dans les villes historiques des îles Canaries, île par île. Narration en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée. Choisissez une île et une ville pour commencer.',
    explore: 'Explorer',
  },
  es: {
    metaTitle: 'Audioguías de las Islas Canarias · Rutas autoguiadas',
    metaDescription:
      'Audioguías GPS autoguiadas por las Islas Canarias: Tenerife, Gran Canaria, Lanzarote y Fuerteventura. Relatos en voz nativa en 32 idiomas, sin conexión, 12 € por código.',
    keywords: 'audioguías islas canarias, ruta autoguiada canarias, tenerife gran canaria lanzarote fuerteventura audioguía, audioguía islas canarias',
    heading: 'Audioguías de las ciudades de Canarias',
    intro: 'Paseos con audioguía GPS autoguiada por los pueblos históricos de las Islas Canarias, isla por isla. Narración en voz nativa en 32 idiomas, sin conexión, con un guía de realidad aumentada. Elige una isla y una ciudad para empezar.',
    explore: 'Explorar',
  },
  de: {
    metaTitle: 'Audiotouren Kanarische Inseln · Selbstgeführte Stadtrundgänge',
    metaDescription:
      'Selbstgeführte GPS-Audiotouren über die Kanarischen Inseln: Teneriffa, Gran Canaria, Lanzarote und Fuerteventura. Erzählungen von Muttersprachlern in 32 Sprachen, offline, 12 € pro Code.',
    keywords: 'audiotouren kanarische inseln, selbstgeführte tour kanaren, teneriffa gran canaria lanzarote fuerteventura audiotour, audioguide kanaren',
    heading: 'Audiotouren durch die Städte der Kanaren',
    intro: 'Selbstgeführte GPS-Audiospaziergänge durch die historischen Städte der Kanarischen Inseln, Insel für Insel. Erzählung von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide. Wählen Sie eine Insel und eine Stadt, um zu beginnen.',
    explore: 'Entdecken',
  },
  it: {
    metaTitle: 'Audioguide delle Isole Canarie · Tour autoguidati',
    metaDescription:
      'Tour audio GPS in autonomia nelle Isole Canarie: Tenerife, Gran Canaria, Lanzarote e Fuerteventura. Racconti a voce madrelingua in 32 lingue, offline, 12 € a codice.',
    keywords: 'audioguide isole canarie, tour autoguidato canarie, tenerife gran canaria lanzarote fuerteventura audioguida, audioguida isole canarie',
    heading: 'Audioguide delle città delle Canarie',
    intro: 'Passeggiate con audioguida GPS in autonomia nelle città storiche delle Isole Canarie, un’isola alla volta. Narrazione a voce madrelingua in 32 lingue, offline, con guida in realtà aumentata. Scegli un’isola e una città per iniziare.',
    explore: 'Esplora',
  },
  nl: {
    metaTitle: 'Audiotours Canarische Eilanden · Zelfgeleide stadswandelingen',
    metaDescription:
      'Zelfgeleide gps-audiotours over de Canarische Eilanden: Tenerife, Gran Canaria, Lanzarote en Fuerteventura. Verhalen in moedertaalstem in 32 talen, offline, 12 € per code.',
    keywords: 'audiotours canarische eilanden, zelfgeleide tour canarische eilanden, tenerife gran canaria lanzarote fuerteventura audiotour, audiogids canarische eilanden',
    heading: 'Audiotours door de steden van de Canarische Eilanden',
    intro: 'Zelfgeleide gps-audiowandelingen door de historische steden van de Canarische Eilanden, eiland voor eiland. Verteld door moedertaalsprekers in 32 talen, offline, met augmented-reality-gids. Kies een eiland en een stad om te beginnen.',
    explore: 'Ontdekken',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const a = ARCH[locale] ?? ARCH.en;
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${BASE}/${l}${PATH}`;
  languages['x-default'] = `${BASE}/en${PATH}`;
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: a.keywords,
    alternates: { canonical: `${BASE}/${locale}${PATH}`, languages },
    openGraph: {
      title: `${a.metaTitle} | Fun Zone Tenerife`,
      description: a.metaDescription,
      url: `${BASE}/${locale}${PATH}`,
      type: 'website',
      images: [{ url: `${BASE}/images/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function CanaryIslandsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const a = ARCH[locale] ?? ARCH.en;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: a.heading,
    itemListElement: ISLANDS.flatMap((island) =>
      island.cities.map((c) => ({
        '@type': 'ListItem',
        name: c.displayName,
        url: `${BASE}/${locale}${island.routeBase}/${c.slug}`,
      })),
    ).map((item, i) => ({ ...item, position: i + 1 })),
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-4 pt-28 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff]">
            <Headphones size={14} /> Canarias
          </span>
          <h1 className="neon-glow-blue mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{a.heading}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{a.intro}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/50">
            <Globe size={15} className="text-[#00d4ff]" /> 32 · €12
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-14">
          {ISLANDS.map((island) => {
            const region = islandRegion(island, locale);
            const hubHref = { pathname: island.routeBase } as unknown as ComponentProps<typeof Link>['href'];
            return (
              <div key={island.slug}>
                <Link
                  href={hubHref}
                  className="group inline-flex items-center gap-2 text-xl font-bold text-white transition-colors hover:text-[#00d4ff]"
                >
                  <MapPin size={18} className="text-[#00d4ff]" /> {region}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                            {a.explore} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
