import { services } from '@/data/services';

const BASE_URL = 'https://legal-team.pro';

export function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${BASE_URL}/#organization`,
    name: 'Legal Team',
    alternateName: 'Юридическая компания Legal Team',
    description:
      'Профессиональные юридические услуги в Москве: арбитраж, корпоративное право, налоги, семейное право. 15 лет опыта, 1000+ выигранных дел.',
    url: BASE_URL,
    logo: `${BASE_URL}/icon-512.png`,
    image: `${BASE_URL}/og-image.jpg`,
    telephone: '+74994951890',
    email: 'info@legal-team.pro',
    priceRange: '₽₽',
    currenciesAccepted: 'RUB',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    areaServed: {
      '@type': 'City',
      name: 'Москва',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Тверская, д. 15, офис 7',
      addressLocality: 'Москва',
      postalCode: '125009',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.757,
      longitude: 37.615,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '19:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+74994951890',
      contactType: 'customer service',
      availableLanguage: ['Russian'],
      areaServed: 'RU',
    },
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Юридические услуги',
      itemListElement: services.slice(0, 12).map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `${BASE_URL}/services/${service.slug}`,
        },
      })),
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Legal Team',
    description: 'Юридические услуги в Москве — бесплатная консультация 24/7',
    publisher: { '@id': `${BASE_URL}/#organization` },
    inLanguage: 'ru-RU',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/services?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
