import type { Metadata } from 'next';
import ActivityLandingPage from '@/components/activity/ActivityLandingPage';
import { getAlternates, type Locale } from '@/lib/seo';

const dartsMeta: Record<Locale, { title: string; description: string; keywords: string }> = {
  en: {
    title: 'Darts Tenerife | Digital Darts at Fun Zone Playa Las Americas',
    description:
      'Play competitive darts at Fun Zone Tenerife. Digital scoring, multiple game formats, perfect for groups. Book your darts session in Playa Las Americas today.',
    keywords: 'darts tenerife, digital darts tenerife, play darts playa las americas, darts fun zone tenerife, darts game tenerife south, competitive darts tenerife',
  },
  es: {
    title: 'Dardos Tenerife | Dardos Digitales en Fun Zone Playa Las Américas',
    description:
      'Juega a los dardos en Fun Zone Tenerife. Marcador digital, múltiples formatos de juego, perfecto para grupos. Reserva tu sesión en Playa Las Américas.',
    keywords: 'dardos tenerife, dardos digitales tenerife, jugar dardos playa las americas, dardos fun zone',
  },
  fr: {
    title: 'Fléchettes Tenerife | Fléchettes Digitales à Fun Zone Playa Las Americas',
    description:
      'Jouez aux fléchettes à Fun Zone Tenerife. Marquage digital, formats multiples, parfait pour les groupes. Réservez votre session à Playa Las Americas.',
    keywords: 'fléchettes tenerife, jeu fléchettes tenerife, fléchettes digitales playa las americas',
  },
  de: {
    title: 'Darts Teneriffa | Digitale Darts bei Fun Zone Playa Las Americas',
    description:
      'Spielen Sie Darts bei Fun Zone Teneriffa. Digitales Scoring, mehrere Spielformate, perfekt für Gruppen in Playa Las Americas.',
    keywords: 'darts teneriffa, digitale darts teneriffa, darts playa las americas',
  },
  nl: {
    title: 'Darts Tenerife | Digitale Darts bij Fun Zone Playa Las Americas',
    description:
      'Speel darts bij Fun Zone Tenerife. Digitale scoring, meerdere spelformaten, perfect voor groepen in Playa Las Americas.',
    keywords: 'darts tenerife, digitale darts tenerife, darts spelen playa las americas',
  },
  it: {
    title: 'Freccette Tenerife | Freccette Digitali a Fun Zone Playa Las Americas',
    description:
      'Gioca a freccette a Fun Zone Tenerife. Punteggio digitale, più formati, perfetto per gruppi a Playa Las Americas.',
    keywords: 'freccette tenerife, freccette digitali tenerife, giocare freccette playa las americas',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = dartsMeta[l] ?? dartsMeta['en'];
  const alternates = getAlternates('/darts');

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

export default function DartsPage() {
  return <ActivityLandingPage activityType="darts" />;
}
