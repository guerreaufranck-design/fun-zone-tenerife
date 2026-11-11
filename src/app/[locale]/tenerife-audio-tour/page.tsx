import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Headphones, MapPin, ArrowRight, Globe } from 'lucide-react';
import { locales } from '@/lib/seo';
import { CITY_META } from '@/lib/audio-tour';
import { getCityCopy } from '@/data/audio-tour-content';

const BASE = 'https://funzonetenerife.com';
const PATH = '/tenerife-audio-tour';

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface HubCopy {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heading: string;
  intro: string;
  explore: string;
}

const HUB: Record<string, HubCopy> = {
  en: {
    metaTitle: 'Tenerife Audio Tours · Self-Guided City Walks',
    metaDescription:
      'Self-guided GPS audio tours of Tenerife’s historic towns: Santa Cruz, La Laguna, La Orotava, Puerto de la Cruz and Garachico. Native-voice stories in 32 languages, offline, 12 € per code.',
    keywords: 'tenerife audio tours, self-guided tour tenerife, things to do tenerife, tenerife walking tours, audio guide tenerife',
    heading: 'Tenerife city audio tours',
    intro: 'Self-guided GPS audio walks through five of Tenerife’s most storied towns. Native-voice narration in 32 languages, offline, with an augmented-reality guide. Pick a town to begin.',
    explore: 'Explore',
  },
  fr: {
    metaTitle: 'Visites audio de Tenerife · Balades autoguidées',
    metaDescription:
      'Visites audio GPS en autonomie des villes historiques de Tenerife : Santa Cruz, La Laguna, La Orotava, Puerto de la Cruz et Garachico. Récits en voix native dans 32 langues, hors ligne, 12 € le code.',
    keywords: 'visites audio tenerife, visite autoguidée tenerife, que faire à tenerife, visites à pied tenerife, audioguide tenerife',
    heading: 'Visites audio des villes de Tenerife',
    intro: 'Des balades audio GPS en autonomie dans cinq des villes les plus chargées d’histoire de Tenerife. Narration en voix native dans 32 langues, hors ligne, avec un guide en réalité augmentée. Choisissez une ville pour commencer.',
    explore: 'Explorer',
  },
  es: {
    metaTitle: 'Audioguías de Tenerife · Rutas autoguiadas',
    metaDescription:
      'Audioguías GPS autoguiadas de los pueblos históricos de Tenerife: Santa Cruz, La Laguna, La Orotava, Puerto de la Cruz y Garachico. Relatos en voz nativa en 32 idiomas, sin conexión, 12 € por código.',
    keywords: 'audioguías tenerife, ruta autoguiada tenerife, qué ver en tenerife, rutas a pie tenerife, audioguía tenerife',
    heading: 'Audioguías de las ciudades de Tenerife',
    intro: 'Paseos con audioguía GPS autoguiada por cinco de los pueblos con más historia de Tenerife. Narración en voz nativa en 32 idiomas, sin conexión, con un guía de realidad aumentada. Elige un pueblo para empezar.',
    explore: 'Explorar',
  },
  de: {
    metaTitle: 'Audiotouren Teneriffa · Selbstgeführte Stadtrundgänge',
    metaDescription:
      'Selbstgeführte GPS-Audiotouren durch Teneriffas historische Städte: Santa Cruz, La Laguna, La Orotava, Puerto de la Cruz und Garachico. Erzählungen von Muttersprachlern in 32 Sprachen, offline, 12 € pro Code.',
    keywords: 'audiotouren teneriffa, selbstgeführte tour teneriffa, teneriffa sehenswürdigkeiten, stadtrundgänge teneriffa, audioguide teneriffa',
    heading: 'Audiotouren durch Teneriffas Städte',
    intro: 'Selbstgeführte GPS-Audiospaziergänge durch fünf der geschichtsträchtigsten Städte Teneriffas. Erzählung von Muttersprachlern in 32 Sprachen, offline, mit Augmented-Reality-Guide. Wählen Sie eine Stadt, um zu beginnen.',
    explore: 'Entdecken',
  },
  it: {
    metaTitle: 'Audioguide di Tenerife · Tour autoguidati',
    metaDescription:
      'Tour audio GPS in autonomia delle città storiche di Tenerife: Santa Cruz, La Laguna, La Orotava, Puerto de la Cruz e Garachico. Racconti a voce madrelingua in 32 lingue, offline, 12 € a codice.',
    keywords: 'audioguide tenerife, tour autoguidato tenerife, cosa vedere a tenerife, tour a piedi tenerife, audioguida tenerife',
    heading: 'Audioguide delle città di Tenerife',
    intro: 'Passeggiate con audioguida GPS in autonomia in cinque delle città più ricche di storia di Tenerife. Narrazione a voce madrelingua in 32 lingue, offline, con guida in realtà aumentata. Scegli una città per iniziare.',
    explore: 'Esplora',
  },
  nl: {
    metaTitle: 'Audiotours Tenerife · Zelfgeleide stadswandelingen',
    metaDescription:
      'Zelfgeleide gps-audiotours door de historische steden van Tenerife: Santa Cruz, La Laguna, La Orotava, Puerto de la Cruz en Garachico. Verhalen in moedertaalstem in 32 talen, offline, 12 € per code.',
    keywords: 'audiotours tenerife, zelfgeleide tour tenerife, bezienswaardigheden tenerife, stadswandelingen tenerife, audiogids tenerife',
    heading: 'Audiotours door de steden van Tenerife',
    intro: 'Zelfgeleide gps-audiowandelingen door vijf van de meest historische steden van Tenerife. Verteld door moedertaalsprekers in 32 talen, offline, met augmented-reality-gids. Kies een stad om te beginnen.',
    explore: 'Ontdekken',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const h = HUB[locale] ?? HUB.en;
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${BASE}/${l}${PATH}`;
  languages['x-default'] = `${BASE}/en${PATH}`;
  return {
    title: h.metaTitle,
    description: h.metaDescription,
    keywords: h.keywords,
    alternates: { canonical: `${BASE}/${locale}${PATH}`, languages },
    openGraph: {
      title: `${h.metaTitle} | Fun Zone Tenerife`,
      description: h.metaDescription,
      url: `${BASE}/${locale}${PATH}`,
      type: 'website',
      images: [{ url: `${BASE}/images/og-image.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default async function AudioTourHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const h = HUB[locale] ?? HUB.en;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: h.heading,
    itemListElement: CITY_META.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.displayName,
      url: `${BASE}/${locale}${PATH}/${c.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-4 pt-28 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff]">
            <Headphones size={14} /> Tenerife
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
          {CITY_META.map((meta) => {
            const copy = getCityCopy(meta.slug, locale);
            const photo = meta.photos[0];
            return (
              <Link
                key={meta.slug}
                href={{ pathname: '/tenerife-audio-tour/[city]', params: { city: meta.slug } }}
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
