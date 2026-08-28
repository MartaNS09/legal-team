import Link from 'next/link';

interface CtaSectionProps {
  consultHref?: string;
}

export function CtaSection({ consultHref = '/kontakty#consult' }: CtaSectionProps) {
  return (
    <section className="cta-section" aria-labelledby="cta-section-title">
      <div className="cta-section__pattern" aria-hidden="true" />
      <div className="cta-section__decor" aria-hidden="true">
        ⚖️
      </div>
      <div className="container">
        <div className="cta-section__content">
          <span className="cta-section__badge">
            Бесплатная консультация · Ответ за 15 минут · Работаем 24/7
          </span>
          <h2 id="cta-section-title" className="cta-section__title">
            Нужна юридическая помощь?
          </h2>
          <p className="cta-section__text">
            Опишите ситуацию — практикующий юрист разберёт ваш случай, определит
            перспективы и предложит пошаговый план действий. Конфиденциально и без
            обязательств.
          </p>
          <div className="cta-section__actions">
            <Link href={consultHref} className="cta-section__button">
              Получить консультацию
            </Link>
            <a href="tel:+74994951890" className="cta-section__button cta-section__button--outline">
              +7 (499) 495-18-90
            </a>
          </div>
          <ul className="cta-section__trust" aria-label="Гарантии">
            <li>15 лет опыта</li>
            <li>1000+ дел</li>
            <li>Конфиденциально</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
