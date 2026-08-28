import type { Metadata } from 'next';
import { reviews } from '@/data/reviews';
import { services } from '@/data/services';

export const SITE = {
  name: 'Legal Team',
  legalName: 'Юридическая компания Legal Team',
  url: 'https://legal-team.pro',
  description:
    'Юридические услуги в Москве: арбитраж, корпоративное право, налоги, семейное право. 15 лет опыта, 1000+ выигранных дел. Бесплатная консультация 24/7.',
  phone: '+74994951890',
  phoneDisplay: '+7 (499) 495-18-90',
  email: 'info@legal-team.pro',
  locale: 'ru_RU' as const,
  foundingDate: '2010',
  slogan: 'Ваша защита — наша миссия',
  ogImage: '/og-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 800,
  logo: '/icon-512.png',
  address: {
    street: 'ул. Тверская, д. 15, офис 7',
    city: 'Москва',
    postalCode: '125009',
    country: 'RU',
  },
  geo: { latitude: 55.757, longitude: 37.615 },
  rating: { value: '4.9', count: reviews.length, best: '5', worst: '1' },
  demoDisclaimer:
    'Телефоны, адреса, email и реквизиты на сайте вымышлены и используются только для демонстрации.',
};

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildOgImages(imagePath = SITE.ogImage, alt?: string) {
  return [
    {
      url: absoluteUrl(imagePath),
      width: SITE.ogImageWidth,
      height: SITE.ogImageHeight,
      alt: alt ?? `${SITE.name} — профессиональные юридические услуги в Москве`,
      type: imagePath.endsWith('.png') ? 'image/png' : 'image/jpeg',
    },
  ];
}

type OpenGraphType = 'website' | 'article' | 'profile' | 'book' | 'music.song' | 'video.movie';

export function buildOpenGraph(options: {
  title: string;
  description: string;
  path?: string;
  type?: OpenGraphType;
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
}): NonNullable<Metadata['openGraph']> {
  const {
    title,
    description,
    path = '/',
    type = 'website',
    image,
    imageAlt,
    publishedTime,
    modifiedTime,
    section,
  } = options;

  return {
    title,
    description,
    url: absoluteUrl(path),
    siteName: SITE.name,
    locale: SITE.locale,
    type,
    images: buildOgImages(image, imageAlt),
    emails: [SITE.email],
    phoneNumbers: [SITE.phoneDisplay],
    countryName: 'Russia',
    ...(publishedTime && { publishedTime }),
    ...(modifiedTime && { modifiedTime }),
    ...(section && { section }),
  };
}

export function buildTwitter(options: {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}): NonNullable<Metadata['twitter']> {
  return {
    card: 'summary_large_image',
    title: options.title,
    description: options.description,
    images: buildOgImages(options.image, options.imageAlt).map((img) => img.url),
  };
}

export function buildPageMetadata(options: {
  title: string;
  description: string;
  path?: string;
  keywords?: string | string[];
  type?: OpenGraphType;
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  noIndex?: boolean;
}): Metadata {
  const path = options.path ?? '/';
  const og = buildOpenGraph(options);
  const twitter = buildTwitter(options);

  return {
    title: options.title,
    description: options.description,
    ...(options.keywords && { keywords: options.keywords }),
    alternates: { canonical: absoluteUrl(path) },
    openGraph: og,
    twitter,
    ...(options.noIndex && { robots: { index: false, follow: false } }),
  };
}

export function getOrganizationSchema() {
  return {
    '@type': ['Organization', 'LegalService', 'LocalBusiness'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: 'Legal Team Москва',
    description: SITE.description,
    url: SITE.url,
    slogan: SITE.slogan,
    foundingDate: SITE.foundingDate,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE.url}/#logo`,
      url: absoluteUrl(SITE.logo),
      contentUrl: absoluteUrl(SITE.logo),
      width: 512,
      height: 512,
      caption: SITE.name,
    },
    image: {
      '@type': 'ImageObject',
      url: absoluteUrl(SITE.ogImage),
      width: SITE.ogImageWidth,
      height: SITE.ogImageHeight,
      caption: `${SITE.name} — юридические услуги`,
    },
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '₽₽',
    currenciesAccepted: 'RUB',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    areaServed: [
      { '@type': 'City', name: 'Москва' },
      { '@type': 'Country', name: 'Россия' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
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
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'customer service',
        email: SITE.email,
        availableLanguage: ['Russian'],
        areaServed: 'RU',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: SITE.rating.best,
      worstRating: SITE.rating.worst,
    },
    review: reviews.slice(0, 5).map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
        jobTitle: review.position,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
      datePublished: review.date,
      name: review.caseType,
    })),
    knowsAbout: [
      'Арбитражное право',
      'Семейное право',
      'Налоговое право',
      'Банкротство',
      'Недвижимость',
      'Корпоративное право',
      'Трудовое право',
      'Защита прав потребителей',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Юридические услуги Legal Team',
      itemListElement: services.slice(0, 12).map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.metaDescription,
          url: absoluteUrl(`/services/${service.slug}`),
          provider: { '@id': `${SITE.url}/#organization` },
        },
      })),
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'ru-RU',
    publisher: { '@id': `${SITE.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/services?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getStructuredDataGraph(extra: Record<string, unknown>[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [getOrganizationSchema(), getWebSiteSchema(), ...extra],
  };
}

export function getServiceSchema(service: {
  title: string;
  metaDescription: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'City', name: 'Москва' },
    serviceType: service.title,
  };
}

export function getArticleSchema(article: {
  title: string;
  metaDescription: string;
  slug: string;
  date: string;
  image: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: absoluteUrl(article.image),
    datePublished: article.date,
    dateModified: article.date,
    articleSection: article.category,
    inLanguage: 'ru-RU',
    author: { '@id': `${SITE.url}/#organization` },
    publisher: {
      '@id': `${SITE.url}/#organization`,
      logo: { '@id': `${SITE.url}/#logo` },
    },
    mainEntityOfPage: absoluteUrl(`/articles/${article.slug}`),
  };
}

export function getBreadcrumbSchema(
  items: { label: string; href?: string }[],
  includeHome = true
) {
  const allItems = includeHome ? [{ label: 'Главная', href: '/' }, ...items] : items;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}
