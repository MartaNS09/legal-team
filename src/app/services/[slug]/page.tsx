import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { ConsultationForm } from '@/components/ui/ConsultationForm';
import { Accordion } from '@/components/ui/Accordion';
import { Footer } from '@/components/layout/Footer';
import { AdBanner } from '@/components/ui/AdBanner';
import { PageHero } from '@/components/ui/PageHero';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return { title: 'Услуга не найдена' };
  }
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://legal-team.pro/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
      url: `https://legal-team.pro/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServices
    .map((relatedSlug) => services.find((s) => s.slug === relatedSlug))
    .filter(Boolean);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'LegalService',
      name: 'Legal Team',
      url: 'https://legal-team.pro',
      telephone: '+74994951890',
    },
    areaServed: {
      '@type': 'City',
      name: 'Москва',
    },
    url: `https://legal-team.pro/services/${service.slug}`,
  };

  const faqSchema =
    service.faq && service.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Marquee
        text="Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90"
        speed={30}
      />
      <Header />

      <main id="main">
        <PageHero
          id="service-hero-title"
          title={service.title}
          subtitle={service.subtitle}
          imageSrc="/images/hero/services.jpg"
          imageAlt={service.title}
          breadcrumbs={[
            { label: 'Услуги', href: '/services' },
            { label: service.title },
          ]}
          badge={service.stats}
          actions={
            <>
              <a href="#consult" className="page-hero__btn page-hero__btn--primary">
                <span aria-hidden="true">📞</span> Задать вопрос
              </a>
              <a href="tel:+74994951890" className="page-hero__btn page-hero__btn--outline">
                +7 (499) 495-18-90
              </a>
            </>
          }
        />

        <section id="consult" className="services-consult services-consult--mobile">
          <div className="container">
            <ConsultationForm />
          </div>
        </section>

        <div className="container ad-slot">
          <AdBanner
            title="Здесь может быть ваша реклама!"
            subtitle="Разместите информацию о своей компании и привлекайте клиентов"
            variant="blink"
            icon="🔥"
          />
        </div>

        <section className="service-detail" aria-labelledby="service-detail-title">
          <div className="container">
            <div className="service-detail__grid">
              <div>
                <h2 id="service-detail-title" className="service-detail__title">
                  Что мы предлагаем
                </h2>

                {service.fullDescription.map((text, i) => (
                  <p key={i} className="service-detail__text">
                    {text}
                  </p>
                ))}

                <h3 className="service-detail__subtitle">Наши услуги включают:</h3>

                <ul className="service-detail__benefits">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="service-detail__benefit">
                      <span className="service-detail__benefit-icon" aria-hidden="true">
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <aside className="service-detail__promo" aria-label="Срочная консультация">
                  <p className="service-detail__promo-title">Не откладывайте решение!</p>
                  <p className="service-detail__promo-text">
                    Получите консультацию прямо сейчас
                  </p>
                  <a href="tel:+74994951890" className="service-detail__promo-phone">
                    +7 (499) 495-18-90
                  </a>
                </aside>

                <div className="service-detail__stat-box">
                  <span className="service-detail__stat-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <div className="service-detail__stat-value">{service.stats}</div>
                  <div className="service-detail__stat-label">по данному направлению</div>
                </div>
              </div>

              <aside className="service-detail__aside" aria-label="Форма консультации и реклама">
                <ConsultationForm />
                <div className="service-detail__aside-slot">
                  <AdBanner
                    title="Ваше объявление здесь!"
                    subtitle="Привлекайте целевых клиентов"
                    variant="pulse"
                    icon="💎"
                  />
                </div>
                <div className="service-detail__aside-slot">
                  <AdBanner
                    title="Специальное предложение!"
                    subtitle="Узнайте о наших акциях и скидках"
                    variant="neon"
                    icon="⭐"
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {service.faq && service.faq.length > 0 && (
          <section className="service-faq" aria-labelledby="service-faq-title">
            <div className="container">
              <h2 id="service-faq-title" className="section-title">
                Часто задаваемые вопросы
              </h2>
              <div className="service-faq__inner">
                <Accordion items={service.faq} defaultOpen={0} />
              </div>
            </div>
          </section>
        )}

        {relatedServices.length > 0 && (
          <section className="service-related" aria-labelledby="service-related-title">
            <div className="container">
              <h2 id="service-related-title" className="section-title">
                Другие направления
              </h2>
              <div className="service-related__grid">
                {relatedServices.map((related) => (
                  <Link
                    key={related!.id}
                    href={`/services/${related!.slug}`}
                    className="service-related__card"
                  >
                    <span className="service-related__icon" aria-hidden="true">
                      {related!.icon}
                    </span>
                    <h3 className="service-related__title">{related!.title}</h3>
                    <span className="service-related__more">Перейти →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
