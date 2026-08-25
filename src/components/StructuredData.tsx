'use client';

import Script from 'next/script';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Legal Team',
    description: 'Профессиональные юридические услуги. Арбитраж, корпоративное право, налоги, семейное право.',
    url: 'https://legal-team.pro',
    telephone: '+74994951890',
    email: 'info@legal-team.pro',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU',
    },
    openingHours: 'Mo-Su 00:00-24:00',
    priceRange: '₽₽',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Юридические услуги',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Арбитражные споры',
          description: 'Представление интересов в арбитражных судах всех инстанций.',
        },
        {
          '@type': 'Offer',
          name: 'Корпоративное право',
          description: 'Сопровождение сделок M&A, регистрация ООО, защита активов.',
        },
        {
          '@type': 'Offer',
          name: 'Налоговое право',
          description: 'Налоговые проверки, оспаривание решений ФНС, оптимизация.',
        },
        {
          '@type': 'Offer',
          name: 'Семейное право',
          description: 'Разводы, раздел имущества, алименты, споры о детях.',
        },
      ],
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
