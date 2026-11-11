import type { Metadata } from 'next';
import { getAlternates, type Locale } from '@/lib/seo';

const escapeMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Outdoor Escape Games in Tenerife',
    description:
      'Self-guided outdoor escape games across Tenerife and the Canary Islands. Explore a real town on your phone, solve the mystery at your own pace, and play any day.',
  },
  es: {
    title: 'Escape Games al Aire Libre en Tenerife',
    description:
      'Escape games al aire libre y autoguiados por Tenerife y Canarias. Recorre un pueblo real con el móvil y resuelve el misterio a tu ritmo, cualquier día.',
  },
  fr: {
    title: 'Escape Games en Plein Air à Tenerife',
    description:
      'Escape games outdoor autoguidés à Tenerife et aux Canaries. Explorez une vraie ville sur votre téléphone et résolvez le mystère à votre rythme, tous les jours.',
  },
  de: {
    title: 'Outdoor-Escape-Games auf Teneriffa',
    description:
      'Selbstgeführte Outdoor-Escape-Games auf Teneriffa und den Kanaren. Erkunde eine echte Stadt per Handy und löse das Rätsel in deinem Tempo, an jedem Tag.',
  },
  nl: {
    title: 'Outdoor Escape Games op Tenerife',
    description:
      'Zelfgeleide outdoor escape games op Tenerife en de Canarische Eilanden. Verken een echt stadje met je telefoon en los het mysterie op in je eigen tempo, elke dag.',
  },
  it: {
    title: 'Escape Game all’Aperto a Tenerife',
    description:
      'Escape game all’aperto e autoguidati a Tenerife e alle Canarie. Esplora un vero paese con il telefono e risolvi il mistero al tuo ritmo, ogni giorno.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = escapeMeta[locale as Locale] ?? escapeMeta.en;
  const alternates = getAlternates('/escape-game', undefined, locale);
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

export default function EscapeGameLayout({ children }: { children: React.ReactNode }) {
  return children;
}
