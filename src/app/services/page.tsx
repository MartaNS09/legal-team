import { services } from '@/data/services';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { Footer } from '@/components/layout/Footer';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Accordion } from '@/components/ui/Accordion';
import { AdBanner } from '@/components/ui/AdBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Юридические услуги в Москве | Полный перечень | Legal Team',
  description: 'Полный спектр юридических услуг: арбитраж, семейное право, корпоративное право, налоги, недвижимость, банкротство. Бесплатная консультация юриста 24/7. 15 лет опыта, 98% успешных дел.',
  keywords: 'юридические услуги, юрист, адвокат, арбитраж, семейное право, корпоративное право, налоговый юрист, банкротство, недвижимость, бесплатная консультация юриста',
};

export default function ServicesListPage() {
  const faqItems = [
    {
      question: 'Какие юридические услуги вы предоставляете?',
      answer: 'Мы предоставляем полный спектр юридических услуг: арбитражные споры, семейное право, корпоративное право, налоговое право, недвижимость, банкротство, административное право, уголовное право, трудовое право, наследственные споры и другие. Всего более 22 направлений.',
    },
    {
      question: 'Сколько стоит консультация юриста?',
      answer: 'Первичная консультация по любым вопросам предоставляется бесплатно. Стоимость последующих услуг зависит от сложности дела и объема работы.',
    },
    {
      question: 'Как быстро вы отвечаете на запрос?',
      answer: 'Мы отвечаем на запросы в течение 10-15 минут в рабочее время. По срочным вопросам звоните по телефону +7 (499) 495-18-90.',
    },
    {
      question: 'Можно ли получить консультацию онлайн?',
      answer: 'Да, мы проводим консультации онлайн через видео-звонки, мессенджеры (Telegram, WhatsApp) и по телефону.',
    },
    {
      question: 'Какие гарантии вы даете?',
      answer: 'Мы гарантируем профессиональный подход, конфиденциальность и защиту ваших интересов. Средняя оценка удовлетворенности — 4.85 из 5.',
    },
    {
      question: 'Работаете ли вы с юридическими лицами?',
      answer: 'Да, мы работаем как с физическими, так и с юридическими лицами. Предоставляем полный спектр услуг для бизнеса.',
    },
  ];

  const advantages = [
    { icon: '⚖️', title: '15 лет опыта', desc: 'Более 15 лет успешной практики в различных отраслях права.' },
    { icon: '🎯', title: '98% успешных дел', desc: 'Высокий процент выигранных дел и положительных решений.' },
    { icon: '👨‍⚖️', title: '22 направления', desc: 'Широкий спектр юридических услуг для бизнеса и частных лиц.' },
    { icon: '🕐', title: 'Работаем 24/7', desc: 'Круглосуточная поддержка и оперативное решение ваших вопросов.' },
  ];

  const reviews = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор ООО "ТехноСтрой"',
      text: 'Обратился в Legal Team по вопросу арбитражного спора. Юристы провели дело профессионально, выиграли суд и взыскали задолженность. Очень доволен результатом!',
      rating: 5,
    },
    {
      name: 'Екатерина Смирнова',
      position: 'Частный клиент',
      text: 'Помогли с разводом и разделом имущества. Все прошло быстро и без лишних нервов. Спасибо юристу Екатерине за чуткое отношение и профессионализм.',
      rating: 5,
    },
    {
      name: 'Иван Козлов',
      position: 'Индивидуальный предприниматель',
      text: 'Консультировались по налоговым вопросам. Юристы нашли законные способы оптимизации, сэкономили значительную сумму. Рекомендую!',
      rating: 5,
    },
  ];

  return (
    <main id="main" role="main">
      <Marquee 
        text="⚡ Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90 • Задайте вопрос прямо сейчас • 15 лет опыта • 98% успешных дел • Юристы онлайн 24/7"
        speed={30}
      />
      <Header />

      <section className="services-hero" aria-labelledby="services-hero-title">
        <div className="services-hero__decor services-hero__decor--1" aria-hidden="true">⚖️</div>
        <div className="services-hero__decor services-hero__decor--2" aria-hidden="true">📜</div>

        <div className="container">
          <div className="services-hero__content">
            <div className="services-hero__badge">🌟 15 лет на рынке юридических услуг</div>
            <h1 id="services-hero-title" className="services-hero__title">
              Юридические услуги в Москве
            </h1>
            <p className="services-hero__subtitle">
              Профессиональная юридическая помощь по всем направлениям права. 
              Более 15 лет опыта, 1000+ выигранных дел. Бесплатная консультация 24/7.
            </p>
            <div className="services-hero__actions">
              <a href="#consult" className="services-hero__button services-hero__button--primary">
                <span aria-hidden="true">📞</span> Бесплатная консультация
              </a>
              <a href="tel:+74994951890" className="services-hero__button services-hero__button--outline">
                +7 (499) 495-18-90
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '1.5rem' }}>
        <AdBanner 
          title="Здесь может быть ваша реклама!"
          subtitle="Разместите информацию о своей компании и привлекайте клиентов"
          variant="neon"
          icon="🔥"
        />
      </div>

      <section className="seo-block" aria-label="О компании">
        <div className="container">
          <div className="seo-block__inner">
            <div className="seo-block__grid">
              <div>
                <h2 className="seo-block__title" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
                  Комплексные юридические услуги
                </h2>
                <p className="seo-block__text">
                  Юридическая компания Legal Team предоставляет полный спектр юридических услуг 
                  для бизнеса и частных лиц. Мы специализируемся на решении самых сложных 
                  правовых задач, используя многолетний опыт и глубокие знания законодательства.
                </p>
                <p className="seo-block__text">
                  Наши юристы и адвокаты имеют успешный опыт ведения дел в судах всех 
                  инстанций, а также в досудебном урегулировании споров. Мы работаем 
                  с 2010 года и за это время помогли более 1000 клиентам защитить свои права.
                </p>
              </div>
              <ul className="seo-block__list">
                <li className="seo-block__list-item">
                  <span className="seo-block__list-icon">✓</span> 15 лет успешной практики
                </li>
                <li className="seo-block__list-item">
                  <span className="seo-block__list-icon">✓</span> 22 направления юридических услуг
                </li>
                <li className="seo-block__list-item">
                  <span className="seo-block__list-icon">✓</span> 98% успешных дел
                </li>
                <li className="seo-block__list-item">
                  <span className="seo-block__list-icon">✓</span> Круглосуточная поддержка 24/7
                </li>
                <li className="seo-block__list-item">
                  <span className="seo-block__list-icon">✓</span> Бесплатная первичная консультация
                </li>
                <li className="seo-block__list-item">
                  <span className="seo-block__list-icon">✓</span> Конфиденциальность и защита данных
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0', background: 'var(--gray-light)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: 'var(--foreground)' }}>
            Почему выбирают Legal Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {advantages.map((adv) => (
              <div key={adv.title} className="advantage-card">
                <span className="advantage-card__icon">{adv.icon}</span>
                <h3 className="advantage-card__title">{adv.title}</h3>
                <p className="advantage-card__desc">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <AdBanner 
          title="Специальное предложение!"
          subtitle="Первичная консультация — бесплатно"
          variant="blink"
          icon="⭐"
        />
      </div>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem', color: 'var(--foreground)' }}>
            Наши услуги
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Выберите нужное направление и получите бесплатную консультацию юриста
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map((service, index) => (
              <AnimatedCard key={service.id} delay={index * 80} direction={index % 2 === 0 ? 'left' : 'right'}>
                <Link href={`/services/${service.slug}`} className="service-card-link">
                  <div className="service-card-link__header">
                    <span className="service-card-link__icon">{service.icon}</span>
                    <h3 className="service-card-link__title">{service.shortTitle}</h3>
                  </div>
                  <p className="service-card-link__desc">{service.subtitle}</p>
                  <div className="service-card-link__footer">
                    <span className="service-card-link__link">Подробнее →</span>
                    <span className="service-card-link__stats">{service.stats}</span>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0', background: 'var(--gray-light)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: 'var(--foreground)' }}>
            Отзывы наших клиентов
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-card__stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="review-card__text">{`"${review.text}"`}</p>
                <div>
                  <div className="review-card__name">{review.name}</div>
                  <div className="review-card__position">{review.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <AdBanner 
          title="Станьте партнером!"
          subtitle="Разместите рекламу на нашем сайте"
          variant="pulse"
          icon="💎"
        />
      </div>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: 'var(--foreground)' }}>
            Часто задаваемые вопросы
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Accordion items={faqItems} defaultOpen={0} />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section__decor" aria-hidden="true">⚖️</div>
        <div className="container">
          <div className="cta-section__content">
            <h2 className="cta-section__title">Нужна помощь юриста?</h2>
            <p className="cta-section__text">
              Получите бесплатную консультацию прямо сейчас. Наши юристы готовы ответить на все ваши вопросы.
            </p>
            <div>
              <a href="/kontakty" className="cta-section__button">Получить консультацию</a>
              <a href="tel:+74994951890" className="cta-section__button cta-section__button--outline">
                +7 (499) 495-18-90
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
