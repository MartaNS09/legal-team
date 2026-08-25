import { Marquee } from '@/components/ui/Marquee';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ConsultationForm } from '@/components/ui/ConsultationForm';
import { ServicesSidebar } from '@/components/sections/ServicesSidebar';
import { AnimatedList } from '@/components/ui/AnimatedList';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Accordion } from '@/components/ui/Accordion';
import { TeamSection } from '@/components/sections/TeamSection';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AdBanner } from '@/components/ui/AdBanner';
import Link from 'next/link';
import { services } from '@/data/services';

export default function Home() {
  const servicesList = [
    'Консультирование по любым интересующим вопросам',
    'Подготовка исковых заявлений, жалоб',
    'Подача документов в судебные инстанции',
    'Представление интересов клиента в досудебных спорах',
    'Юридическое сопровождение сделок',
    'Подготовка правовых заключений',
  ];

  const complexServices = [
    'Консультация – разбор ситуации',
    'Анализ и подготовка документов',
    'Сбор доказательств',
    'Переговоры с другой стороной',
    'Взаимодействие с госорганами',
    'Представление в суде',
    'Контроль исполнения решения',
  ];

  const popularArticles = [
    {
      title: 'Как защитить права потребителей в 2024 году',
      excerpt: 'Подробный гид по защите прав потребителей: куда жаловаться, какие законы действуют...',
      category: 'Защита прав',
      date: '7 августа 2026',
      link: '#',
    },
    {
      title: 'Налоговые проверки: что нужно знать бизнесу',
      excerpt: 'Как подготовиться к налоговой проверке, какие документы нужны и как минимизировать риски...',
      category: 'Налоговое право',
      date: '6 августа 2026',
      link: '#',
    },
    {
      title: 'Развод с разделом имущества: пошаговая инструкция',
      excerpt: 'Как правильно оформить развод, разделить имущество и защитить свои права в суде...',
      category: 'Семейное право',
      date: '5 августа 2026',
      link: '#',
    },
    {
      title: 'Арбитражный суд: как выиграть дело',
      excerpt: 'Стратегии ведения арбитражных дел, подготовка доказательств и работа с экспертами...',
      category: 'Арбитраж',
      date: '4 августа 2026',
      link: '#',
    },
  ];

  const faqItems = [
    {
      question: 'Можно ли доверять онлайн-юристам?',
      answer: 'Онлайн-формат дает больше возможностей: это агрегатор лучших профессионалов на рынке. Мы работаем с 2010 года и за это время собрали базу лучших специалистов.',
    },
    {
      question: 'У меня есть знакомый юрист. Могу ли я обратиться к нему?',
      answer: 'Можете. Но юристы специализируются на какой-то одной области. Специалист по семейному праву мало знает про налоги — и наоборот.',
    },
    {
      question: 'Какие гарантии вы даете?',
      answer: 'Среди наших корпоративных клиентов — Тинькофф, Яндекс и ВСК Страхование. Средняя оценка удовлетворенности составляет 4.85.',
    },
    {
      question: 'Сколько времени занимает консультация?',
      answer: 'Первичная консультация длится от 15 до 30 минут. За это время мы успеваем разобрать вашу ситуацию и наметить план действий.',
    },
    {
      question: 'Как происходит оплата услуг?',
      answer: 'Мы предлагаем гибкую систему оплаты: можно оплатить как наличными, так и по безналичному расчету. Первичная консультация — бесплатно.',
    },
    {
      question: 'Можно ли получить консультацию срочно?',
      answer: 'Да, мы предоставляем срочные консультации по телефону или в мессенджерах в течение 10-15 минут.',
    },
  ];

  const mainServices = services.slice(0, 6);

  return (
    <main id="main" role="main">
      <Marquee 
        text="⚡ Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90 • Задайте вопрос прямо сейчас • 15 лет опыта • 98% успешных дел • Юристы онлайн 24/7"
        speed={30}
      />
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__background-scale" aria-hidden="true">⚖️</div>

        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot">●</span>
              Сейчас онлайн: <strong>8</strong> юристов
            </div>
            <h1 id="hero-title" className="hero__title">
              Юридическая защита <br />
              <span className="hero__title-accent">на высшем уровне</span>
            </h1>
            
            <div className="hero__buttons">
              <a href="#consult" className="button button--primary button--large button--glow">
                <span className="button__icon">⚡</span>
                Получить консультацию
              </a>
              <a href="#about" className="button button--outline button--large">
                Узнать больше
              </a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat hero__stat--animated">
                <span className="hero__stat-number">
                  <AnimatedCounter target={15} suffix="+" />
                </span>
                <span className="hero__stat-label">лет опыта</span>
              </div>
              <div className="hero__stat hero__stat--animated">
                <span className="hero__stat-number">
                  <AnimatedCounter target={1000} suffix="+" />
                </span>
                <span className="hero__stat-label">выигранных дел</span>
              </div>
              <div className="hero__stat hero__stat--animated">
                <span className="hero__stat-number">
                  <AnimatedCounter target={98} suffix="%" />
                </span>
                <span className="hero__stat-label">успешных кейсов</span>
              </div>
            </div>
          </div>
          
          <div className="hero__form">
            <ConsultationForm />
          </div>
        </div>

        <div className="hero__decorations" aria-hidden="true">
          <div className="hero__decor">⚖️</div>
          <div className="hero__decor">⏳</div>
          <div className="hero__decor">📜</div>
        </div>
      </section>

      {/* ===== БАННЕР 1 (после Hero, на всю ширину) ===== */}
      <div className="container" style={{ marginTop: '1.5rem' }}>
        <AdBanner 
          title="Разместите свою рекламу на нашем сайте!"
          subtitle="Привлекайте клиентов с Legal Team"
          variant="neon"
          icon="🚀"
        />
      </div>

      {/* ===== СЕКЦИЯ С САЙДБАРОМ ===== */}
      <section id="services" className="servicesSection" aria-labelledby="services-title">
        <div className="container">
          <div className="servicesSection__grid">
            <ServicesSidebar />
            <div className="servicesSection__content">
              <h1 className="servicesSection__title">Консультация по юридическим вопросам</h1>
              <div className="servicesSection__text">
                <p>
                  В жизни часто происходят ситуации, требующие участия профессионального юриста. 
                  От квалификации специалиста всегда зависит исход спорной ситуации.
                </p>
                <p>
                  Заказать их услуги вы можете в нашей компании. У нас работают юристы с большим 
                  практическим опытом, компетентные в различных отраслях права.
                </p>
                
                <h2>Перечень оказываемых юридических услуг</h2>
                <AnimatedList items={servicesList} delay={150} />

                <h2>Комплексные юридические услуги</h2>
                <p>
                  Адвокат – специалист, оказывающий квалифицированную помощь в решении вопросов, 
                  затрагивающих различные области права.
                </p>
                <AnimatedList items={complexServices} delay={120} />

                <p>
                  Практика показывает, что не бывает простых споров. Поэтому, если вам нужно 
                  разобраться в возникшей сложной ситуации, заказывайте юридические услуги в нашей компании.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== НАШИ УСЛУГИ ===== */}
      <section className="home-services" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title">Наши услуги</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            {mainServices.map((service, index) => (
              <AnimatedCard key={service.id} delay={index * 80} direction={index % 2 === 0 ? 'left' : 'right'}>
                <Link href={`/services/${service.slug}`} className="service-card-link">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.8rem'
                  }}>
                    <span style={{ fontSize: '2.5rem' }}>{service.icon}</span>
                    <h3 style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontSize: '1.1rem', 
                      margin: 0,
                      color: 'var(--foreground)'
                    }}>
                      {service.shortTitle}
                    </h3>
                  </div>
                  <p style={{ 
                    color: 'var(--text-muted)', 
                    fontSize: '0.9rem', 
                    lineHeight: 1.5,
                    marginBottom: '0.8rem'
                  }}>
                    {service.subtitle}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      color: 'var(--secondary)', 
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}>
                      Подробнее →
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      background: 'var(--background)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '20px'
                    }}>
                      {service.stats}
                    </span>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/services" className="button button--primary button--large">
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      <TeamSection />

      <section id="articles" className="articles" aria-labelledby="articles-title">
        <div className="container">
          <h2 id="articles-title" className="section-title">Популярные статьи</h2>
          <div className="articles__grid">
            {popularArticles.map((article, index) => (
              <AnimatedCard 
                key={article.title}
                delay={index * 100}
                direction={index % 2 === 0 ? 'left' : 'right'}
                className="articles__card-wrapper"
              >
                <article className="article-card" aria-label={article.title}>
                  <div className="article-card__category">{article.category}</div>
                  <h3 className="article-card__title">
                    <a href={article.link} className="article-card__link">
                      {article.title}
                    </a>
                  </h3>
                  <p className="article-card__excerpt">{article.excerpt}</p>
                  <time className="article-card__date" dateTime={article.date}>
                    {article.date}
                  </time>
                </article>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="faq" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title" className="section-title">Часто задаваемые вопросы</h2>
          <div className="faq__wrapper">
            <Accordion items={faqItems} defaultOpen={0} />
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
              Нужна помощь юриста?
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Получите бесплатную консультацию прямо сейчас. Наши юристы готовы ответить на все ваши вопросы.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/kontakty" style={{
                padding: '0.8rem 2.5rem',
                background: 'white',
                color: 'var(--primary)',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '700',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
              }}>
                Получить консультацию
              </a>
              <a href="tel:+74994951890" style={{
                padding: '0.8rem 2.5rem',
                background: 'transparent',
                color: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '700',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease'
              }}>
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
