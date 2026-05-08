export default function JsonLdLocalBusiness() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'EntertainmentBusiness'],
        '@id': 'https://funzonetenerife.com/#business',
        name: 'Fun Zone Tenerife',
        alternateName: ['Fun Zone Playa Las Americas', 'QuizzaBoom Tenerife'],
        description:
          'Fun Zone Tenerife is the ultimate multi-activity entertainment venue in Playa Las Americas, featuring QuizzaBoom Quiz Room, Axe Throwing, Escape Game and Darts under one roof.',
        url: 'https://funzonetenerife.com',
        telephone: '+34623362229',
        email: 'info@funzonetenerife.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Avenida Arquitecto Gomez Cuesta 22, Zentral Center',
          addressLocality: 'Playa Las Americas',
          addressRegion: 'Tenerife',
          postalCode: '38650',
          addressCountry: 'ES',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.0575,
          longitude: -16.7177,
        },
        hasMap: 'https://maps.google.com/?q=Zentral+Center+Playa+Las+Americas+Tenerife',
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Cash, Credit Card',
        image: [
          'https://funzonetenerife.com/images/og-image.jpg',
          'https://funzonetenerife.com/images/quiz-room.jpg',
          'https://funzonetenerife.com/images/escape-game.jpg',
        ],
        logo: 'https://funzonetenerife.com/favicon.png',
        sameAs: ['https://www.instagram.com/funzonetenerife'],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '14:00',
            closes: '22:00',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
          ratingCount: '48',
        },
        potentialAction: {
          '@type': 'ReserveAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://funzonetenerife.com/en/book',
            actionPlatform: [
              'http://schema.org/DesktopWebPlatform',
              'http://schema.org/MobileWebPlatform',
            ],
          },
          result: {
            '@type': 'Reservation',
            name: 'Fun Zone Tenerife Booking',
          },
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://funzonetenerife.com/#website',
        url: 'https://funzonetenerife.com',
        name: 'Fun Zone Tenerife',
        inLanguage: ['en', 'es', 'fr', 'de', 'nl', 'it'],
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://funzonetenerife.com/en/experiences',
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
