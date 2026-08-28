import Image from 'next/image';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import type { WhyUsItem } from '@/data/whyUs';
import { whyUsItems } from '@/data/whyUs';

interface WhyUsSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  items?: WhyUsItem[];
  muted?: boolean;
}

export function WhyUsSection({
  id = 'why-us-title',
  title = 'Почему выбирают Legal Team',
  subtitle = 'Профессиональный подход, прозрачные условия и доказанный результат в каждом направлении права',
  items = whyUsItems,
  muted = true,
}: WhyUsSectionProps) {
  return (
    <section
      className={`why-us${muted ? ' why-us--muted' : ''}`}
      aria-labelledby={id}
    >
      <div className="container">
        <header className="why-us__header">
          <h2 id={id} className="why-us__title">
            {title}
          </h2>
          <p className="why-us__subtitle">{subtitle}</p>
        </header>

        <div className="why-us__list">
          {items.map((item, index) => (
            <AnimatedCard
              key={item.title}
              delay={index * 90}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className="why-us__card-wrapper"
            >
              <article
                className={`why-us__row${index % 2 === 1 ? ' why-us__row--reverse' : ''}`}
                tabIndex={0}
              >
                <div className="why-us__media">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="why-us__image"
                    style={{ objectPosition: item.imagePosition ?? '50% 15%' }}
                  />
                  <div className="why-us__media-overlay" aria-hidden="true" />
                  <div className="why-us__stat-badge">
                    <span className="why-us__stat-value">{item.stat}</span>
                    <span className="why-us__stat-label">{item.statLabel}</span>
                  </div>
                </div>

                <div className="why-us__body">
                  <span className="why-us__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="why-us__item-title">{item.title}</h3>
                  <p className="why-us__item-text">{item.description}</p>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
