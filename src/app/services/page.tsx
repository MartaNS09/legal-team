import { services } from '@/data/services';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { Footer } from '@/components/layout/Footer';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Accordion } from '@/components/ui/Accordion';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { ConsultationForm } from '@/components/ui/ConsultationForm';
import { ServiceCardImage } from '@/components/ui/ServiceCardImage';
import { AdBanner } from '@/components/ui/AdBanner';
import { PageHero } from '@/components/ui/PageHero';
import { buildPageMetadata, SITE } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Юридические услуги в Москве | Полный перечень',
  description:
    'Полный спектр юридических услуг: арбитраж, семейное право, корпоративное право, налоги, недвижимость, банкротство. Бесплатная консультация 24/7. 15 лет опыта, 98% успешных дел.',
  path: '/services',
  keywords:
    'юридические услуги, юрист, адвокат, арбитраж, семейное право, корпоративное право, налоговый юрист, банкротство, недвижимость, бесплатная консультация юриста',
});

export default function ServicesListPage() {
  const servicesCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE.url}/services#collection`,
    url: `${SITE.url}/services`,
    name: 'Юридические услуги Legal Team',
    description: 'Полный каталог юридических услуг: 21 направление права в Москве и России.',
    inLanguage: 'ru-RU',
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
  };

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesCollectionSchema) }}
      />
      <Marquee 
        text="Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90 • 15 лет опыта • 98% успешных дел"
        speed={30}
      />
      <Header />

      <main id="main">
        <PageHero
          id="services-hero-title"
          title="Юридические услуги в Москве"
          subtitle="Профессиональная юридическая помощь по всем направлениям права. Более 15 лет опыта, 1000+ выигранных дел. Бесплатная консультация 24/7."
          imageSrc="/images/hero/services.jpg"
          imageAlt="Юридические услуги Legal Team"
          badge="15 лет на рынке юридических услуг"
          actions={
            <>
              <a href="#consult" className="page-hero__btn page-hero__btn--primary">
                <span aria-hidden="true">📞</span> Бесплатная консультация
              </a>
              <a href="tel:+74994951890" className="page-hero__btn page-hero__btn--outline">
                +7 (499) 495-18-90
              </a>
            </>
          }
        />

        <section id="consult" className="services-consult">
          <div className="container">
            <ConsultationForm />
          </div>
        </section>

      <div className="container ad-slot">
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

      <WhyUsSection />

      <div className="container">
        <AdBanner 
          title="Специальное предложение!"
          subtitle="Первичная консультация — бесплатно"
          variant="blink"
          icon="⭐"
        />
      </div>

      <section className="section-block">
        <div className="container">
          <h2 className="section-block__title">Наши услуги</h2>
          <p className="section-block__subtitle">
            Выберите нужное направление и получите бесплатную консультацию юриста
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <AnimatedCard key={service.id} delay={index * 80} direction={index % 2 === 0 ? 'left' : 'right'}>
                <Link href={`/services/${service.slug}`} className="service-card-link">
                  <ServiceCardImage slug={service.slug} title={service.shortTitle} />
                  <div className="service-card-link__body">
                    <div className="service-card-link__header">
                      <span className="service-card-link__icon">{service.icon}</span>
                      <h3 className="service-card-link__title">{service.shortTitle}</h3>
                    </div>
                    <p className="service-card-link__desc">{service.subtitle}</p>
                    <div className="service-card-link__footer">
                      <span className="service-card-link__link">Подробнее →</span>
                      <span className="service-card-link__stats">{service.stats}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-block--muted" aria-labelledby="reviews-title">
        <div className="container">
          <h2 id="reviews-title" className="section-block__title">Отзывы наших клиентов</h2>
          <div className="reviews-grid">
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

      <section className="service-faq" aria-labelledby="services-faq-title">
        <div className="container">
          <h2 id="services-faq-title" className="section-title">
            Часто задаваемые вопросы
          </h2>
          <div className="service-faq__inner">
            <Accordion items={faqItems} defaultOpen={0} />
          </div>
        </div>
      </section>

      <CtaSection />
      </main>

      <Footer />
    </>
  );
}
