import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { ConsultationForm } from '@/components/ui/ConsultationForm';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import Link from 'next/link';
import { buildPageMetadata, SITE, getOrganizationSchema } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Контакты Legal Team | Адрес, телефон, карта в Москве',
  description:
    'Свяжитесь с Legal Team: телефон +7 (499) 495-18-90, адрес в Москве — ул. Тверская, д. 15. Форма обратной связи. Работаем ежедневно.',
  path: '/kontakty',
  keywords: 'контакты юриста, Legal Team телефон, юридическая компания Москва адрес',
});

const STATS = [
  { value: '15 мин', label: 'Среднее время ответа' },
  { value: '4.9', label: 'Оценка клиентов' },
  { value: '1000+', label: 'Выигранных дел' },
  { value: '24/7', label: 'Горячая линия' },
];

const CHART = [
  { label: 'Телефон', value: 95, display: '95%' },
  { label: 'Email', value: 88, display: '88%' },
  { label: 'Форма', value: 92, display: '92%' },
  { label: 'Мессенджеры', value: 90, display: '90%' },
];

const STEPS = [
  {
    title: 'Свяжитесь с нами',
    text: 'Позвоните, напишите или оставьте заявку — ответим в течение 15 минут в рабочее время.',
  },
  {
    title: 'Бесплатная консультация',
    text: 'Юрист разберёт ситуацию, определит применимые нормы права и оценит перспективы дела.',
  },
  {
    title: 'Стратегия и договор',
    text: 'Предложим пошаговый план, зафиксируем стоимость и сроки в официальном договоре.',
  },
  {
    title: 'Результат',
    text: 'Представим интересы в суде и госорганах, проконтролируем исполнение решения.',
  },
];

const DETAILS = [
  {
    icon: '📍',
    label: 'Адрес офиса',
    value: 'Москва, ул. Тверская, д. 15',
    sub: 'офис 7, 4-й этаж',
    href: 'https://yandex.ru/maps/',
    external: true,
  },
  {
    icon: '📞',
    label: 'Телефон',
    value: '+7 (499) 495-18-90',
    sub: 'Круглосуточная линия',
    href: 'tel:+74994951890',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'info@legal-team.pro',
    sub: 'Ответ в течение часа',
    href: 'mailto:info@legal-team.pro',
  },
  {
    icon: '🕐',
    label: 'Часы работы',
    value: 'Пн–Пт: 9:00 – 21:00',
    sub: 'Сб–Вс: 10:00 – 19:00',
  },
];

export default function ContactsPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE.url}/kontakty#contactpage`,
    name: 'Контакты Legal Team',
    url: `${SITE.url}/kontakty`,
    description: 'Телефон, адрес офиса и форма обратной связи юридической компании Legal Team.',
    inLanguage: 'ru-RU',
    isPartOf: { '@id': `${SITE.url}/#website` },
    mainEntity: { '@id': `${SITE.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <Marquee
        text="Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90"
        speed={30}
      />
      <Header />

      <main id="main" className="contacts-page">
        <PageHero
          id="contacts-hero-title"
          title="Контакты"
          subtitle="Свяжитесь с нами удобным способом — мы на связи каждый день"
          imageSrc="/images/contacts-hero-bg.jpg"
          imageAlt="Офис Legal Team в Москве"
          breadcrumbs={[{ label: 'Контакты' }]}
          variant="compact"
          actions={
            <a href="tel:+74994951890" className="page-hero__btn page-hero__btn--primary">
              +7 (499) 495-18-90
            </a>
          }
        />

        <div className="container">
          <p className="contacts-page__demo-note" role="note">
            {SITE.demoDisclaimer}
          </p>
        </div>

        <section className="contacts-page__stats" aria-label="Показатели работы">
          <div className="container">
            <div className="contacts-page__stats-grid">
              {STATS.map((stat) => (
                <div key={stat.label} className="contacts-page__stat">
                  <span className="contacts-page__stat-value">{stat.value}</span>
                  <span className="contacts-page__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="contacts-page__chart" role="img" aria-label="Скорость ответа по каналам связи">
              <h2 className="contacts-page__chart-title">Скорость ответа по каналам</h2>
              <div className="contacts-page__chart-bars">
                {CHART.map((row) => (
                  <div key={row.label} className="contacts-page__chart-row">
                    <span className="contacts-page__chart-label">{row.label}</span>
                    <div className="contacts-page__chart-bar">
                      <div
                        className="contacts-page__chart-fill"
                        style={{ width: `${row.value}%` }}
                      />
                    </div>
                    <span className="contacts-page__chart-value">{row.display}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contacts-page__stairs" aria-labelledby="contacts-steps-title">
          <div className="container">
            <h2 id="contacts-steps-title" className="contacts-page__stairs-title">
              Как мы работаем
            </h2>
            <p className="contacts-page__stairs-subtitle">
              От первого звонка до результата — прозрачный процесс на каждом этапе
            </p>
            <ol className="contacts-page__steps">
              {STEPS.map((step, index) => (
                <li key={step.title} className="contacts-page__step">
                  <span className="contacts-page__step-num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div className="contacts-page__step-body">
                    <h3 className="contacts-page__step-title">{step.title}</h3>
                    <p className="contacts-page__step-text">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="contacts-page__info" aria-labelledby="contacts-info-title">
          <div className="container">
            <div className="contacts-page__info-grid">
              <div>
                <h2 id="contacts-info-title" className="contacts-page__form-title">
                  Реквизиты и связь
                </h2>
                <div className="contacts-page__details">
                  {DETAILS.map((item) => (
                    <div key={item.label} className="contacts-page__detail">
                      <span className="contacts-page__detail-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <div>
                        <div className="contacts-page__detail-label">{item.label}</div>
                        <div className="contacts-page__detail-value">
                          {item.href ? (
                            <a
                              href={item.href}
                              {...(item.external
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : {})}
                            >
                              {item.value}
                              {item.external && (
                                <span className="visually-hidden">
                                  {' '}
                                  (откроется в новой вкладке)
                                </span>
                              )}
                            </a>
                          ) : (
                            item.value
                          )}
                        </div>
                        {item.sub && (
                          <div className="contacts-page__detail-sub">{item.sub}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <nav className="contacts-page__links" aria-label="Полезные разделы">
                  <Link href="/services">Услуги</Link>
                  <Link href="/articles">Статьи</Link>
                  <Link href="/#pricing">Стоимость</Link>
                  <Link href="/#faq">Вопросы</Link>
                </nav>
              </div>

              <div id="consult">
                <h2 className="contacts-page__form-title">Напишите нам</h2>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </section>

        <section className="contacts-page__map-section" aria-labelledby="contacts-map-title">
          <div className="container">
            <h2 id="contacts-map-title" className="contacts-page__map-title">
              Мы на карте
            </h2>
            <div className="contacts-page__map">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.615000%2C55.757000&z=16"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта офиса Legal Team на улице Тверская, 15"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
