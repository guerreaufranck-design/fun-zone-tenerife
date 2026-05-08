import type { Metadata } from 'next';
import { getAlternates, type Locale } from '@/lib/seo';

const quizMeta: Record<Locale, { title: string; description: string; keywords: string }> = {
  en: {
    title: 'QuizzaBoom Quiz Room Tenerife | Interactive Quiz Night Playa Las Americas',
    description:
      'Play QuizzaBoom — Tenerife\'s first interactive quiz room. Choose your categories, unleash jokers, and battle on the big screen. Perfect for groups of 2 to 20 in Playa Las Americas.',
    keywords: 'quiz room tenerife, quizzaboom tenerife, interactive quiz tenerife, quiz night playa las americas, trivia game tenerife, quiz room fun zone, quiz experience tenerife south',
  },
  es: {
    title: 'QuizzaBoom Sala de Quiz Tenerife | Quiz Interactivo Playa Las Américas',
    description:
      'Juega al QuizzaBoom — la primera sala de quiz interactiva de Tenerife. Elige categorías, activa jokers y compite en pantalla grande. Grupos de 2 a 20 en Playa Las Américas.',
    keywords: 'sala quiz tenerife, quizzaboom tenerife, quiz interactivo tenerife, noche de quiz playa las americas, juego trivia tenerife',
  },
  fr: {
    title: 'QuizzaBoom Quiz Room Tenerife | Quiz Interactif Playa Las Americas',
    description:
      'Jouez à QuizzaBoom — le premier quiz room interactif de Tenerife. Choisissez vos catégories, activez vos jokers et battaillez sur grand écran. Groupes de 2 à 20.',
    keywords: 'quiz room tenerife, quizzaboom tenerife, quiz interactif tenerife, soirée quiz playa las americas, jeu trivia tenerife',
  },
  de: {
    title: 'QuizzaBoom Quiz Room Teneriffa | Interaktives Quiz Playa Las Americas',
    description:
      'Spielen Sie QuizzaBoom — Teneriffas erster interaktiver Quiz-Raum. Kategorien wählen, Joker einsetzen, auf der Großleinwand kämpfen. Gruppen von 2 bis 20.',
    keywords: 'quiz room teneriffa, quizzaboom teneriffa, interaktives quiz teneriffa, quiz abend playa las americas',
  },
  nl: {
    title: 'QuizzaBoom Quiz Room Tenerife | Interactieve Quiz Playa Las Americas',
    description:
      'Speel QuizzaBoom — Tenerife\'s eerste interactieve quiz room. Kies categorieën, gebruik jokers, strijd op het grote scherm. Groepen van 2 tot 20.',
    keywords: 'quiz room tenerife, quizzaboom tenerife, interactieve quiz tenerife, quiz avond playa las americas',
  },
  it: {
    title: 'QuizzaBoom Quiz Room Tenerife | Quiz Interattivo Playa Las Americas',
    description:
      'Gioca a QuizzaBoom — la prima quiz room interattiva di Tenerife. Scegli le categorie, usa i joker e combatti sul grande schermo. Gruppi da 2 a 20.',
    keywords: 'quiz room tenerife, quizzaboom tenerife, quiz interattivo tenerife, serata quiz playa las americas',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = quizMeta[l] ?? quizMeta['en'];
  const alternates = getAlternates('/quiz-room');

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

export default function QuizRoomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
