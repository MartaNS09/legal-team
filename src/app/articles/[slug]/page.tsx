import { articles, getArticleBySlug } from '@/data/articles';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { Footer } from '@/components/layout/Footer';
import { ConsultationForm } from '@/components/ui/ConsultationForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { renderTextWithLinks } from '@/lib/renderTextWithLinks';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Статья не найдена' };

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://legal-team.pro/articles/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      url: `https://legal-team.pro/articles/${article.slug}`,
      publishedTime: article.date,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const relatedService = services.find((s) => s.slug === article.relatedService);
  const relatedArticles = article.relatedArticles
    .map((s) => getArticleBySlug(s))
    .filter(Boolean);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: `https://legal-team.pro${article.image}`,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'Legal Team',
      url: 'https://legal-team.pro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Legal Team',
      url: 'https://legal-team.pro',
    },
    mainEntityOfPage: `https://legal-team.pro/articles/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Marquee
        text="Бесплатная консультация • Работаем 24/7 • +7 (499) 495-18-90"
        speed={30}
      />
      <Header />

      <main id="main" className="article-page">
        <article>
          <header className="article-page__hero">
            <div className="article-page__hero-bg" aria-hidden="true">
              <Image
                src={article.image}
                alt=""
                fill
                priority
                sizes="100vw"
                className="article-page__hero-image"
              />
              <div className="article-page__hero-overlay" />
            </div>
            <div className="container article-page__hero-inner">
              <Breadcrumbs
                items={[
                  { label: 'Статьи', href: '/articles' },
                  { label: article.title },
                ]}
              />
              <span className="article-page__category">{article.category}</span>
              <h1 className="article-page__title">{article.title}</h1>
              <p className="article-page__meta">
                <time dateTime={article.date}>{article.dateLabel}</time>
                <span aria-hidden="true"> · </span>
                <span>{article.readTime} чтения</span>
              </p>
            </div>
          </header>

          <div className="container article-page__layout">
            <div className="article-page__content">
              <p className="article-page__lead">{article.excerpt}</p>

              {article.sections.map((section, i) => (
                <section key={i} className="article-page__section">
                  {section.heading && (
                    <h2 className="article-page__heading">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="article-page__paragraph">
                      {renderTextWithLinks(p)}
                    </p>
                  ))}
                </section>
              ))}

              {relatedService && (
                <aside className="article-page__service-box" aria-labelledby="service-box-title">
                  <h2 id="service-box-title" className="article-page__service-title">
                    Нужна помощь юриста?
                  </h2>
                  <p>
                    Специалисты Legal Team по направлению «{relatedService.shortTitle}» готовы
                    разобрать вашу ситуацию бесплатно.
                  </p>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="button button--primary"
                  >
                    {relatedService.shortTitle} — подробнее
                  </Link>
                </aside>
              )}

              <nav className="article-page__links" aria-label="Полезные ссылки">
                <Link href="/kontakty">Контакты и консультация</Link>
                <Link href="/#pricing">Стоимость услуг</Link>
                <Link href="/#faq">Вопросы и ответы</Link>
                <Link href="/services">Все услуги</Link>
              </nav>
            </div>

            <aside className="article-page__sidebar" aria-label="Дополнительно">
              <div className="article-page__sidebar-sticky">
                <ConsultationForm />
                {relatedArticles.length > 0 && (
                  <div className="article-page__related">
                    <h2 className="article-page__related-title">Читайте также</h2>
                    <ul className="article-page__related-list">
                      {relatedArticles.map(
                        (rel) =>
                          rel && (
                            <li key={rel.slug}>
                              <Link href={`/articles/${rel.slug}`}>{rel.title}</Link>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
