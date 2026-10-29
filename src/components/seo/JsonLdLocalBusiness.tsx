export default function JsonLdLocalBusiness() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'TravelAgency'],
        '@id': 'https://funzonetenerife.com/#business',
        name: 'Fun Zone Tenerife',
        alternateName: ['Fun Zone Tenerife Activities'],
        description:
          'Fun Zone Tenerife is a guide to the best things to do in Tenerife — top tours and activities across the island plus self-guided outdoor escape games in Tenerife towns.',
        url: 'https://funzonetenerife.com',
        email: 'info@funzonetenerife.com',
        areaServed: {
          '@type': 'Place',
          name: 'Tenerife, Canary Islands, Spain',
        },
        image: ['https://funzonetenerife.com/images/og-image.jpg'],
        logo: 'https://funzonetenerife.com/favicon.png',
        sameAs: ['https://www.instagram.com/funzonetenerife'],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
          ratingCount: '48',
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
            urlTemplate: 'https://funzonetenerife.com/en/activities',
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
