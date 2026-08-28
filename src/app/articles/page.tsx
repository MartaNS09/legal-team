import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import { buildPageMetadata, SITE } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Юридические статьи и инструкции | Legal Team',
  description:
    'Экспертные статьи юристов Legal Team: защита прав потребителей, налоги, развод, арбитраж, банкротство, недвижимость. Практические гиды 2026.',
  path: '/articles',
});

export default function ArticlesPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE.url}/articles#collection`,
    url: `${SITE.url}/articles`,
    name: 'Юридические статьи Legal Team',
    description: 'Экспертные материалы юристов: инструкции, гиды и разборы актуального законодательства.',
    inLanguage: 'ru-RU',
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Marquee
        text="Бесплатная консультация • Работаем 24/7 • +7 (499) 495-18-90"
        speed={30}
      />
      <Header />

      <main id="main">
        <PageHero
          id="articles-hero-title"
          title="Юридические статьи"
          subtitle="Практические материалы от практикующих адвокатов и юристов Legal Team"
          imageSrc="/images/hero/services.jpg"
          imageAlt="Юридические статьи Legal Team"
          breadcrumbs={[{ label: 'Статьи' }]}
          variant="compact"
        />

        <ArticlesSection showAllLink={false} />

        <section className="articles-cta" aria-labelledby="articles-cta-title">
          <div className="container">
            <div className="articles-cta__inner">
              <h2 id="articles-cta-title" className="articles-cta__title">
                Нужна помощь по вашей ситуации?
              </h2>
              <p className="articles-cta__text">
                Получите бесплатную консультацию — юрист разберёт ваш случай и предложит
                стратегию
              </p>
              <div className="articles-cta__actions">
                <Link href="/kontakty#consult" className="button button--primary button--large">
                  Консультация
                </Link>
                <Link href="/services" className="button button--outline button--large">
                  Наши услуги
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
