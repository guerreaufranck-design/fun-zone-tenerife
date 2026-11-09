import type { Metadata } from 'next';
import { getAlternates, type Locale } from '@/lib/seo';

const voucherMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Gift Vouchers Fun Zone Tenerife | Give the Gift of Adventure',
    description:
      'Give the gift of an unforgettable experience! Fun Zone Tenerife gift vouchers for outdoor escape games and top island activities. Instant email delivery. Perfect for any occasion.',
  },
  es: {
    title: 'Tarjetas Regalo Fun Zone Tenerife | Regala una Aventura',
    description:
      '¡Regala una experiencia inolvidable! Tarjetas regalo Fun Zone Tenerife para escape games al aire libre y las mejores actividades de la isla. Entrega instantánea por email.',
  },
  fr: {
    title: 'Bons Cadeaux Fun Zone Tenerife | Offrez une Aventure',
    description:
      'Offrez une expérience inoubliable ! Bons cadeaux Fun Zone Tenerife pour les escape games outdoor et les meilleures activités de l\'île. Livraison instantanée par email.',
  },
  de: {
    title: 'Geschenkgutscheine Fun Zone Teneriffa | Schenken Sie ein Abenteuer',
    description:
      'Verschenken Sie ein unvergessliches Erlebnis! Fun Zone Teneriffa Gutscheine für Outdoor-Escape-Games und die besten Aktivitäten der Insel. Sofortige E-Mail-Lieferung.',
  },
  nl: {
    title: 'Cadeaubonnen Fun Zone Tenerife | Geef een Avontuur Cadeau',
    description:
      'Geef een onvergetelijke ervaring cadeau! Fun Zone Tenerife cadeaubonnen voor outdoor escape games en de leukste activiteiten van het eiland. Directe levering per e-mail.',
  },
  it: {
    title: 'Buoni Regalo Fun Zone Tenerife | Regala un\'Avventura',
    description:
      'Regala un\'esperienza indimenticabile! Buoni regalo Fun Zone Tenerife per escape game all\'aperto e le migliori attività dell\'isola. Consegna istantanea via email.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = voucherMeta[l] ?? voucherMeta['en'];
  const alternates = getAlternates('/gift-voucher');

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

export default function GiftVoucherLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
