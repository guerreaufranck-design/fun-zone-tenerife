import type { Metadata } from 'next';
import { getAlternates, type Locale } from '@/lib/seo';

const escapeMeta: Record<Locale, { title: string; description: string; keywords: string }> = {
  en: {
    title: 'Escape Game Tenerife | Escape Room at Fun Zone Playa Las Americas',
    description:
      'Play our immersive escape game in Tenerife. 60 minutes, real puzzles, atmospheric design. Can your team solve the mystery? Book your escape room at Fun Zone, Playa Las Americas.',
    keywords: 'escape game tenerife, escape room tenerife south, escape room playa las americas, fun zone escape game, immersive escape game tenerife, group escape room tenerife, escape game activity tenerife',
  },
  es: {
    title: 'Escape Game Tenerife | Sala de Escape en Fun Zone Playa Las Américas',
    description:
      'Juega nuestro escape game inmersivo en Tenerife. 60 minutos, puzzles reales, diseño atmosférico. ¿Tu grupo puede resolver el misterio? Reserva en Fun Zone, Playa Las Américas.',
    keywords: 'escape game tenerife, sala escape tenerife sur, escape room playa las americas, escape game fun zone tenerife',
  },
  fr: {
    title: 'Escape Game Tenerife | Salle d\'Évasion à Fun Zone Playa Las Americas',
    description:
      'Jouez à notre escape game immersif à Tenerife. 60 minutes, vrais puzzles, design atmosphérique. Votre équipe peut-elle résoudre le mystère ? Fun Zone, Playa Las Americas.',
    keywords: 'escape game tenerife, salle évasion tenerife, escape room playa las americas, fun zone escape game tenerife',
  },
  de: {
    title: 'Escape Game Teneriffa | Escape Room bei Fun Zone Playa Las Americas',
    description:
      'Spielen Sie unser immersives Escape Game in Teneriffa. 60 Minuten, echte Rätsel, atmosphärisches Design. Kann Ihr Team das Geheimnis lösen? Fun Zone, Playa Las Americas.',
    keywords: 'escape game teneriffa, escape room teneriffa, escape room playa las americas, fun zone escape game',
  },
  nl: {
    title: 'Escape Game Tenerife | Escape Room bij Fun Zone Playa Las Americas',
    description:
      'Speel ons meeslepende escape game op Tenerife. 60 minuten, echte puzzels, atmosferisch ontwerp. Kan uw team het mysterie oplossen? Fun Zone, Playa Las Americas.',
    keywords: 'escape game tenerife, escape room tenerife, escape room playa las americas, fun zone escape game',
  },
  it: {
    title: 'Escape Game Tenerife | Stanza di Fuga a Fun Zone Playa Las Americas',
    description:
      'Gioca al nostro escape game immersivo a Tenerife. 60 minuti, veri enigmi, design atmosferico. Il tuo gruppo riesce a risolvere il mistero? Fun Zone, Playa Las Americas.',
    keywords: 'escape game tenerife, escape room tenerife, escape room playa las americas, fun zone escape game',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = escapeMeta[l] ?? escapeMeta['en'];
  const alternates = getAlternates('/escape-game');

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

export default function EscapeGameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
