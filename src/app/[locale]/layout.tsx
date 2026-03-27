import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'Fun Zone Tenerife | Outdoor Escape Games, Axe Throwing, Quiz Room & Darts',
    template: '%s | Fun Zone Tenerife',
  },
  description:
    'Outdoor escape games, axe throwing, interactive quiz room & darts in Playa de las Américas, Tenerife. Self-guided city games through historic towns — GPS puzzles, real history, unlimited players. Book your adventure!',
  metadataBase: new URL('https://www.funzonetenerife.com'),
  verification: {
    google: 'TRPmuhCscyzIybPKovZQ5ZgCdTuYFFfD8M_JrDtpnb4',
  },
  keywords: [
    'outdoor escape game Tenerife', 'escape room Tenerife', 'city game Tenerife',
    'street escape Canary Islands', 'scavenger hunt Tenerife', 'self-guided tour Tenerife',
    'axe throwing Tenerife', 'things to do Tenerife', 'Tenerife activities',
    'quiz room Tenerife', 'darts Tenerife', 'team building Tenerife',
    'GPS adventure Tenerife', 'urban game Tenerife', 'Playa de las Americas activities',
    'location-based entertainment', 'family activities Tenerife',
    'Los Cristianos escape game', 'La Laguna escape game', 'Puerto de la Cruz escape game',
    'Garachico escape game', 'Tenerife Chronicle', 'Guanche history',
    'bachelor party Tenerife', 'corporate events Tenerife',
    'escape game extérieur Tenerife', 'juego de escape Tenerife',
    'Outdoor Escape Spiel Teneriffa', 'gioco di fuga Tenerife',
  ],
  alternates: {
    canonical: 'https://www.funzonetenerife.com',
    languages: {
      en: 'https://www.funzonetenerife.com/en',
      fr: 'https://www.funzonetenerife.com/fr',
      es: 'https://www.funzonetenerife.com/es',
      de: 'https://www.funzonetenerife.com/de',
      it: 'https://www.funzonetenerife.com/it',
    },
  },
  openGraph: {
    title: 'Fun Zone Tenerife | Outdoor Escape Games, Axe Throwing & More',
    description:
      'Explore Tenerife like never before! Self-guided outdoor escape games through historic towns, axe throwing, quiz room & darts. GPS puzzles, real history, unlimited players.',
    type: 'website',
    siteName: 'Fun Zone Tenerife',
    locale: 'en_US',
    url: 'https://www.funzonetenerife.com',
    images: [
      {
        url: '/images/offers/escapegame.png',
        width: 1200,
        height: 630,
        alt: 'Fun Zone Tenerife - Outdoor Escape Games & Activities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fun Zone Tenerife | Outdoor Escape Games & Activities',
    description:
      'Self-guided outdoor escape games through historic Tenerife towns. GPS puzzles, real history, unlimited players. Plus axe throwing, quiz room & darts!',
    images: ['/images/offers/escapegame.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale parameter is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Fetch messages for the current locale
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Fun Zone Tenerife',
    description: 'Multi-activity entertainment venue offering outdoor escape games, axe throwing, interactive quiz room and darts in Playa de las Américas, Tenerife.',
    url: 'https://www.funzonetenerife.com',
    image: 'https://www.funzonetenerife.com/images/offers/escapegame.png',
    telephone: '+34623362229',
    email: 'axethrowingtenerife@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida Arquitecto Gomez Cuesta 22, Zentral Center',
      addressLocality: 'Playa de las Américas',
      addressRegion: 'Santa Cruz de Tenerife',
      postalCode: '38650',
      addressCountry: 'ES',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 28.0564, longitude: -16.7248 },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '14:00',
      closes: '20:00',
    }],
    priceRange: '€€',
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </NextIntlClientProvider>
  );
}
