import { homeFaqItems } from '@/data/homeFaq';
import { reviews } from '@/data/reviews';
import { caseStudies } from '@/data/caseStudies';
import { articles } from '@/data/articles';

const BASE_URL = 'https://legal-team.pro';

export function HomeStructuredData() {
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
        itemReviewed: {
          '@type': 'LegalService',
          name: 'Legal Team',
          url: BASE_URL,
        },
      },
    })),
  };

  const aggregateRating = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${BASE_URL}/#organization`,
    name: 'Legal Team',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1',
    },
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
        url: `${BASE_URL}/articles/${article.slug}`,
        datePublished: article.date,
        image: `${BASE_URL}${article.image}`,
        author: {
          '@type': 'Organization',
          name: 'Legal Team',
        },
      },
    })),
  };

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleList) }}
      />
    </>
  );
}
