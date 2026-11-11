import type { Metadata } from 'next';
import { getAlternates, type Locale } from '@/lib/seo';

const voucherMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Gift Vouchers',
    description:
      'Give the gift of adventure in Tenerife: a Fun Zone gift voucher for a self-guided outdoor escape game or an island activity. Valid 12 months.',
  },
  es: {
    title: 'Tarjetas Regalo',
    description:
      'Regala aventura en Tenerife: una tarjeta regalo Fun Zone para un escape game al aire libre o una actividad en la isla. Válida 12 meses.',
  },
  fr: {
    title: 'Bons Cadeaux',
    description:
      'Offrez de l’aventure à Tenerife : un bon cadeau Fun Zone pour un escape game en plein air ou une activité de l’île. Valable 12 mois.',
  },
  de: {
    title: 'Geschenkgutscheine',
    description:
      'Verschenke Abenteuer auf Teneriffa: ein Fun-Zone-Geschenkgutschein für ein Outdoor-Escape-Game oder eine Inselaktivität. 12 Monate gültig.',
  },
  nl: {
    title: 'Cadeaubonnen',
    description:
      'Geef avontuur op Tenerife cadeau: een Fun Zone-cadeaubon voor een outdoor escape game of een eilandactiviteit. 12 maanden geldig.',
  },
  it: {
    title: 'Buoni Regalo',
    description:
      'Regala avventura a Tenerife: un buono regalo Fun Zone per un escape game all’aperto o un’attività sull’isola. Valido 12 mesi.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = voucherMeta[locale as Locale] ?? voucherMeta.en;
  const alternates = getAlternates('/gift-voucher', undefined, locale);
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
  return children;
}
