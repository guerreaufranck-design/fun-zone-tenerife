import type { Metadata, Viewport } from 'next';
import { spaceGrotesk, inter } from '@/lib/fonts';
import Script from 'next/script';

import './globals.css';

export const metadata: Metadata = {
  title: 'Fun Zone Tenerife',
  description: 'Outdoor escape games, axe throwing, quiz room & darts in Playa de las Américas, Tenerife. Self-guided city games through historic towns with GPS puzzles and real history.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
};

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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.0564,
    longitude: -16.7248,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '14:00',
      closes: '20:00',
    },
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Credit Card, Cash',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fun Zone Activities',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'TouristTrip',
          name: 'Outdoor Escape Game — Tenerife Chronicle',
          description: 'Self-guided outdoor escape games through historic Tenerife towns. GPS-triggered puzzles based on real history. Unlimited players.',
          touristType: ['Families', 'Groups', 'Couples', 'Corporate Teams'],
        },
        priceCurrency: 'EUR',
        price: '19',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'EUR',
          price: '19',
          unitText: 'per phone/team',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SportsActivity',
          name: 'Axe Throwing',
          description: 'Indoor axe throwing with professional coaching. Traditional axes, ninja stars and shurikens.',
        },
        priceCurrency: 'EUR',
        price: '12',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'EntertainmentBusiness',
          name: 'Quiz Room — QuizzaBoom',
          description: 'Interactive quiz room with buzzer systems and giant screens.',
        },
        priceCurrency: 'EUR',
        price: '12',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SportsActivity',
          name: 'Darts — Classic & Pixel',
          description: 'Classic steel-tip dartboards and interactive Darts Pixel digital targets.',
        },
        priceCurrency: 'EUR',
        price: '5',
      },
    ],
  },
  sameAs: [
    'https://www.instagram.com/funzonetenerife',
    'https://www.facebook.com/funzonetenerife',
    'https://www.tripadvisor.com/Attraction_Review-g1181511-d27149069-Reviews-Axe_Throwing_Tenerife-Playa_de_las_Americas_Arona_Tenerife_Canary_Islands.html',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '85',
    bestRating: '5',
    worstRating: '1',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
