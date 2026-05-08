import type { Metadata } from 'next';
import SplitHero from '@/components/home/SplitHero';
import ExperienceCards from '@/components/home/ExperienceCards';
import StatsSection from '@/components/home/StatsSection';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import Gallery from '@/components/home/Gallery';
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
    en: 'fun zone tenerife, quiz room tenerife, quizzaboom tenerife, escape game tenerife, interactive entertainment tenerife, evening activities playa las americas, competitive games tenerife, group entertainment tenerife south, multi activity venue tenerife, date night tenerife',
    es: 'fun zone tenerife, quiz room tenerife, escape game tenerife sur, entretenimiento grupos tenerife, actividades nocturnas playa las americas, juegos interactivos tenerife, sala quiz tenerife, centro ocio tenerife sur',
    fr: 'fun zone tenerife, quiz room tenerife, escape game tenerife, quizzaboom, activités soirée tenerife, divertissement groupes tenerife, jeux interactifs tenerife playa las americas, activités originales tenerife',
    de: 'fun zone teneriffa, quiz room teneriffa, escape game teneriffa, quizzaboom tenerife, abendaktivitäten teneriffa, gruppenaktivitäten teneriffa, unterhaltung playa las americas, interaktive spiele teneriffa',
    nl: 'fun zone tenerife, quiz room tenerife, escape game tenerife, quizzaboom, avondactiviteiten tenerife, groepsactiviteiten playa las americas, interactieve spellen tenerife, entertainment tenerife',
    it: 'fun zone tenerife, quiz room tenerife, escape game tenerife, quizzaboom, attività serali tenerife, giochi interattivi tenerife, intrattenimento gruppi playa las americas, attività originali tenerife',
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
        <ExperienceCards />
      </section>

      <StatsSection />

      <section className="py-20 lg:py-24">
        <HowItWorks />
      </section>

      <section className="py-20 lg:py-24">
        <Testimonials />
      </section>

      <CTASection />

      <section className="py-20 lg:py-24">
        <Gallery />
      </section>
    </>
  );
}
