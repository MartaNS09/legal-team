import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { aboutPrinciples } from '@/data/whyUs';

export function PrinciplesSection() {
  return (
    <section className="about-principles" aria-labelledby="principles-title">
      <div className="container">
        <header className="about-principles__header">
          <h2 id="principles-title" className="about-principles__title">
            Наши принципы
          </h2>
          <p className="about-principles__subtitle">
            Три опоры, на которых строится работа Legal Team с каждым клиентом
          </p>
        </header>

        <ol className="about-principles__list">
          {aboutPrinciples.map((item, index) => (
            <li key={item.title} className="about-principles__item-wrapper">
              <AnimatedCard delay={index * 100} direction="bottom">
                <div className="about-principles__item" tabIndex={0}>
                  <span className="about-principles__step" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="about-principles__panel">
                    <span className="about-principles__icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div className="about-principles__content">
                      <h3 className="about-principles__item-title">{item.title}</h3>
                      <p className="about-principles__item-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
