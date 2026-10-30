import type { Metadata } from 'next';
import SplitHero from '@/components/home/SplitHero';
import ActivityHighlights from '@/components/home/ActivityHighlights';
import StatsSection from '@/components/home/StatsSection';
import HowItWorks from '@/components/home/HowItWorks';
import CTASection from '@/components/home/CTASection';
import JsonLdLocalBusiness from '@/components/seo/JsonLdLocalBusiness';
import { defaultMeta, getAlternates, type Locale } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const meta = defaultMeta[l] ?? defaultMeta['en'];
  const alternates = getAlternates('/');

  const keywordsByLocale: Record<Locale, string> = {
    en: 'things to do in tenerife, tenerife activities, tenerife excursions, tenerife tours, whale watching tenerife, mount teide, boat trips tenerife, escape game tenerife, tenerife travel guide',
    es: 'que hacer en tenerife, actividades tenerife, excursiones tenerife, tours tenerife, avistamiento ballenas tenerife, teide, paseos en barco tenerife, escape game tenerife, guia de viaje tenerife',
    fr: 'que faire a tenerife, activites tenerife, excursions tenerife, tours tenerife, observation baleines tenerife, teide, sorties bateau tenerife, escape game tenerife, guide voyage tenerife',
    de: 'aktivitaeten teneriffa, was tun auf teneriffa, ausfluege teneriffa, touren teneriffa, wale beobachten teneriffa, teide, bootstouren teneriffa, escape game teneriffa, reisefuehrer teneriffa',
    nl: 'dingen om te doen op tenerife, activiteiten tenerife, excursies tenerife, tours tenerife, walvissen spotten tenerife, teide, boottochten tenerife, escape game tenerife, reisgids tenerife',
    it: 'cosa fare a tenerife, attivita tenerife, escursioni tenerife, tour tenerife, avvistamento balene tenerife, teide, gite in barca tenerife, escape game tenerife, guida di viaggio tenerife',
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: keywordsByLocale[l],
    alternates: {
      canonical: `https://funzonetenerife.com/${locale}`,
      languages: alternates.languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://funzonetenerife.com/${locale}`,
      siteName: 'Fun Zone Tenerife',
      locale: locale,
      type: 'website',
      images: [
        {
          url: 'https://funzonetenerife.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Fun Zone Tenerife — Playa Las Americas',
        },
      ],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <JsonLdLocalBusiness />
      <SplitHero />

      <section className="py-20 lg:py-24">
        <ActivityHighlights />
      </section>

      <StatsSection />

      <section className="py-20 lg:py-24">
        <HowItWorks />
      </section>

      <CTASection />
    </>
  );
}
