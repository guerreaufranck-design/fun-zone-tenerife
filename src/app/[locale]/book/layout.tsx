import type { Metadata } from 'next';
import { getAlternates, type Locale } from '@/lib/seo';

const bookMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Book an Escape Game in Tenerife | Fun Zone Tenerife',
    description:
      'Book a self-guided outdoor escape game in Tenerife in minutes. Explore a town, solve the mystery at your own pace, play any day — instant booking.',
  },
  es: {
    title: 'Reserva un Escape Game en Tenerife | Fun Zone Tenerife',
    description:
      'Reserva en minutos un escape game al aire libre y autoguiado en Tenerife. Recorre un pueblo y resuelve el misterio a tu ritmo, cualquier día. Reserva instantánea.',
  },
  fr: {
    title: 'Réservez un Escape Game à Tenerife | Fun Zone Tenerife',
    description:
      'Réservez en quelques minutes un escape game outdoor autoguidé à Tenerife. Explorez une ville et résolvez le mystère à votre rythme, tous les jours. Réservation instantanée.',
  },
  de: {
    title: 'Escape Game auf Teneriffa buchen | Fun Zone Teneriffa',
    description:
      'Buche in Minuten ein selbstgeführtes Outdoor-Escape-Game auf Teneriffa. Erkunde eine Stadt und löse das Rätsel in deinem Tempo, an jedem Tag. Sofortbuchung.',
  },
  nl: {
    title: 'Boek een Escape Game op Tenerife | Fun Zone Tenerife',
    description:
      'Boek in minuten een zelfgeleide outdoor escape game op Tenerife. Verken een stad en los het mysterie op in je eigen tempo, elke dag. Directe boeking.',
  },
  it: {
    title: 'Prenota un Escape Game a Tenerife | Fun Zone Tenerife',
    description:
      'Prenota in pochi minuti un escape game all’aperto e autoguidato a Tenerife. Esplora un paese e risolvi il mistero al tuo ritmo, ogni giorno. Prenotazione immediata.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = bookMeta[l] ?? bookMeta['en'];
  const alternates = getAlternates('/book');

  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: alternates.canonical, languages: alternates.languages },
    openGraph: {
      title: m.title,
      description: m.description,
      url: alternates.canonical,
      images: [{ url: 'https://funzonetenerife.com/images/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
