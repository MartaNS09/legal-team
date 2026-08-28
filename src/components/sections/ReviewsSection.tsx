import { reviews } from '@/data/reviews';
import { AnimatedCard } from '@/components/ui/AnimatedCard';

export function ReviewsSection() {
  return (
    <section id="reviews" className="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <h2 id="reviews-title" className="section-title">
          Отзывы клиентов
        </h2>
        <p className="reviews__subtitle">
          Реальные истории людей и компаний, которым мы помогли защитить права и выиграть дела
        </p>

        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <AnimatedCard
              key={review.id}
              delay={index * 60}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <article className="reviews__card" aria-label={`Отзыв: ${review.name}`}>
                <div className="reviews__card-head">
                  <span
                    className="reviews__stars"
                    role="img"
                    aria-label={`Оценка: ${review.rating} из 5`}
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </span>
                  <span className="reviews__case">{review.caseType}</span>
                </div>
                <blockquote className="reviews__text">&ldquo;{review.text}&rdquo;</blockquote>
                <footer className="reviews__author">
                  <cite className="reviews__name">{review.name}</cite>
                  <span className="reviews__position">{review.position}</span>
                  <time className="reviews__date" dateTime={review.date}>
                    {new Date(review.date).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </time>
                </footer>
              </article>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
