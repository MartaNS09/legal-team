import { homeFaqItems } from '@/data/homeFaq';
import { reviews } from '@/data/reviews';
import { caseStudies } from '@/data/caseStudies';
import { articles } from '@/data/articles';
import { absoluteUrl, SITE } from '@/lib/seo';

export function HomeStructuredData() {
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE.url}/#faq`,
    mainEntity: homeFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const reviewList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Отзывы клиентов Legal Team',
    itemListElement: reviews.map((review, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
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
        itemReviewed: { '@id': `${SITE.url}/#organization` },
      },
    })),
  };

  const caseList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Выигранные дела Legal Team',
    itemListElement: caseStudies.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        headline: item.title,
        description: item.summary,
        articleSection: item.category,
        author: {
          '@type': 'Person',
          name: item.lawyer,
        },
        publisher: { '@id': `${SITE.url}/#organization` },
      },
    })),
  };

  const articleList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Популярные статьи Legal Team',
    itemListElement: articles.slice(0, 6).map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        url: absoluteUrl(`/articles/${article.slug}`),
        datePublished: article.date,
        image: absoluteUrl(article.image),
        author: { '@id': `${SITE.url}/#organization` },
      },
    })),
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}/#webpage`,
    url: SITE.url,
    name: 'Legal Team — юридическая компания в Москве',
    description: SITE.description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'ru-RU',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleList) }}
      />
    </>
  );
}
