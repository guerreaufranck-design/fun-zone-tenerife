import type { Metadata } from 'next';
import ActivityLandingPage from '@/components/activity/ActivityLandingPage';
import { getAlternates, type Locale } from '@/lib/seo';

const axeMeta: Record<Locale, { title: string; description: string; keywords: string }> = {
  en: {
    title: 'Axe Throwing Tenerife | Fun Zone Playa Las Americas',
    description:
      'Try axe throwing at Fun Zone Tenerife! Professional lanes, digital targets, expert coaching. Perfect for groups, parties, and team building in Playa Las Americas.',
    keywords: 'axe throwing fun zone tenerife, axe throwing playa las americas, indoor axe throwing tenerife, try axe throwing tenerife, professional axe throwing tenerife south',
  },
  es: {
    title: 'Lanzamiento de Hachas Tenerife | Fun Zone Playa Las Américas',
    description:
      '¡Prueba el lanzamiento de hachas en Fun Zone Tenerife! Carriles profesionales, dianas digitales y entrenadores expertos. Ideal para grupos y despedidas en Playa Las Américas.',
    keywords: 'lanzamiento hachas tenerife, hachas fun zone tenerife, lanzar hachas playa las americas, actividad hachas tenerife sur',
  },
  fr: {
    title: 'Lancer de Haches Tenerife | Fun Zone Playa Las Americas',
    description:
      'Essayez le lancer de haches à Fun Zone Tenerife ! Couloirs professionnels, cibles digitales, coaching expert. Idéal pour groupes et soirées à Playa Las Americas.',
    keywords: 'lancer haches tenerife, haches fun zone tenerife, lancer de haches playa las americas, activité haches tenerife',
  },
  de: {
    title: 'Beilwerfen Teneriffa | Fun Zone Playa Las Americas',
    description:
      'Beilwerfen in Fun Zone Teneriffa! Professionelle Bahnen, digitale Ziele, Expertencoaching. Perfekt für Gruppen und Veranstaltungen in Playa Las Americas.',
    keywords: 'beilwerfen fun zone teneriffa, axt werfen teneriffa, beilwerfen playa las americas',
  },
  nl: {
    title: 'Bijl Gooien Tenerife | Fun Zone Playa Las Americas',
    description:
      'Probeer bijl gooien bij Fun Zone Tenerife! Professionele banen, digitale doelen, expert coaching. Perfect voor groepen in Playa Las Americas.',
    keywords: 'bijl gooien fun zone tenerife, bijl gooien playa las americas, activiteit tenerife',
  },
  it: {
    title: 'Lancio delle Asce Tenerife | Fun Zone Playa Las Americas',
    description:
      'Prova il lancio delle asce a Fun Zone Tenerife! Corsie professionali, bersagli digitali, coaching esperto. Ideale per gruppi a Playa Las Americas.',
    keywords: 'lancio asce fun zone tenerife, lancio asce playa las americas, attività tenerife',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = axeMeta[l] ?? axeMeta['en'];
  const alternates = getAlternates('/axe-throwing');

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: { canonical: alternates.canonical, languages: alternates.languages },
    openGraph: {
      title: m.title,
      description: m.description,
      url: alternates.canonical,
      images: [{ url: 'https://funzonetenerife.com/images/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function AxeThrowingPage() {
  return <ActivityLandingPage activityType="axe" />;
}
