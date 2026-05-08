import type { Metadata } from 'next';
import { getAlternates, type Locale } from '@/lib/seo';

const bookMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Book Fun Zone Tenerife | Quiz Room, Axe Throwing, Escape Game & Darts',
    description:
      'Book your Fun Zone Tenerife experience online in minutes. Quiz Room, Axe Throwing, Escape Game and Darts in Playa Las Americas. Secure your slot today!',
  },
  es: {
    title: 'Reservar Fun Zone Tenerife | Quiz Room, Hachas, Escape Game y Dardos',
    description:
      'Reserva tu experiencia en Fun Zone Tenerife en minutos. Quiz Room, Lanzamiento de Hachas, Escape Game y Dardos en Playa Las Américas. ¡Asegura tu plaza hoy!',
  },
  fr: {
    title: 'Réserver Fun Zone Tenerife | Quiz Room, Haches, Escape Game & Fléchettes',
    description:
      'Réservez votre expérience à Fun Zone Tenerife en quelques minutes. Quiz Room, Lancer de Haches, Escape Game et Fléchettes à Playa Las Americas.',
  },
  de: {
    title: 'Buchen Fun Zone Teneriffa | Quiz Room, Beilwerfen, Escape Game & Darts',
    description:
      'Buchen Sie Ihr Fun Zone Teneriffa Erlebnis online in Minuten. Quiz Room, Beilwerfen, Escape Game und Darts in Playa Las Americas.',
  },
  nl: {
    title: 'Boeken Fun Zone Tenerife | Quiz Room, Bijl Gooien, Escape Game & Darts',
    description:
      'Boek uw Fun Zone Tenerife ervaring online in minuten. Quiz Room, Bijl Gooien, Escape Game en Darts in Playa Las Americas.',
  },
  it: {
    title: 'Prenota Fun Zone Tenerife | Quiz Room, Asce, Escape Game e Freccette',
    description:
      'Prenota la tua esperienza a Fun Zone Tenerife in pochi minuti. Quiz Room, Lancio delle Asce, Escape Game e Freccette a Playa Las Americas.',
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
