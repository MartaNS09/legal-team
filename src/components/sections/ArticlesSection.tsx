import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';
import { AnimatedCard } from '@/components/ui/AnimatedCard';

interface ArticlesSectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export function ArticlesSection({ limit, showAllLink = true }: ArticlesSectionProps) {
  const items = limit ? articles.slice(0, limit) : articles;

  return (
    <section id="articles" className="articles" aria-labelledby="articles-title">
      <div className="container">
        <h2 id="articles-title" className="section-title">
          Популярные статьи
        </h2>
        <p className="articles__subtitle">
          Экспертные материалы юристов Legal Team: практические инструкции, актуальное
          законодательство и советы по защите ваших прав
        </p>

        <div className="articles__grid">
          {items.map((article, index) => (
            <AnimatedCard
              key={article.slug}
              delay={index * 80}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className="articles__card-wrapper"
            >
              <article className="article-card">
                <Link
                  href={`/articles/${article.slug}`}
                  className="article-card__media"
                  aria-label={`Читать статью: ${article.title}`}
                >
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 380px"
                    className="article-card__image"
                  />
                  <span className="article-card__read-time">{article.readTime}</span>
                </Link>

                <div className="article-card__body">
                  <span className="article-card__category">{article.category}</span>
                  <h3 className="article-card__title">
                    <Link href={`/articles/${article.slug}`} className="article-card__link">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="article-card__excerpt">{article.excerpt}</p>
                  <footer className="article-card__footer">
                    <time className="article-card__date" dateTime={article.date}>
                      {article.dateLabel}
                    </time>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="article-card__more"
                      aria-label={`Читать далее: ${article.title}`}
                    >
                      Читать →
                    </Link>
                  </footer>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>

        {showAllLink && (
          <div className="articles__more">
            <Link href="/articles" className="button button--outline button--large">
              Все статьи
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
