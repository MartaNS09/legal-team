import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { PrinciplesSection } from '@/components/sections/PrinciplesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { aboutAdvantagesItems } from '@/data/whyUs';
import { buildPageMetadata, SITE } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'О компании Legal Team | Профессиональные юристы и адвокаты в Москве',
  description:
    'Юридическая компания Legal Team — команда опытных адвокатов и юристов. 15 лет успешной работы, 1000+ выигранных дел. Доверьте защиту профессионалам.',
  path: '/o-nas',
  keywords: 'юридическая компания, адвокаты, юристы, о компании, Legal Team',
});

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE.url}/o-nas#aboutpage`,
    url: `${SITE.url}/o-nas`,
    name: 'О компании Legal Team',
    description:
      'Юридическая компания Legal Team — 15 лет опыта, 1000+ выигранных дел, 22 направления права.',
    inLanguage: 'ru-RU',
    isPartOf: { '@id': `${SITE.url}/#website` },
    mainEntity: { '@id': `${SITE.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Marquee
        text="Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90"
        speed={30}
      />
      <Header />

      <main id="main">
        <PageHero
          id="about-hero-title"
          title={
            <>
              Ваша защита — <br />
              наша миссия
            </>
          }
          subtitle="Мы создали юридическую компанию, способную защитить ваши интересы в любой ситуации. Каждый заслуживает справедливости и профессиональной защиты."
          imageSrc="/images/about-hero-bg.jpg"
          imageAlt="Юридическая компания Legal Team"
          badge="15 лет на рынке юридических услуг"
          breadcrumbs={[{ label: 'О нас' }]}
          actions={
            <Link href="/kontakty" className="page-hero__btn page-hero__btn--primary">
              Связаться с нами
            </Link>
          }
        />

        <section className="about-page__stats" aria-label="Статистика компании">
          <div className="container">
            <div className="about-page__stats-grid">
              {[
                { target: 15, suffix: '+', label: 'лет опыта' },
                { target: 1000, suffix: '+', label: 'выигранных дел' },
                { target: 98, suffix: '%', label: 'успешных кейсов' },
                { target: 22, suffix: '', label: 'направлений права' },
              ].map((stat) => (
                <div key={stat.label} className="about-page__stats-item">
                  <div className="about-page__stats-number">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="about-page__stats-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__section">
          <div className="container about-page__content-grid">
            <div>
              <h2 className="about-page__title">Кто мы</h2>
              <p className="about-page__text">
                Legal Team — это юридическая компания, объединяющая лучших адвокатов и юристов
                Москвы. Мы работаем с 2010 года и за это время помогли более 1000 клиентам решить
                их проблемы.
              </p>
              <p className="about-page__text">
                Наша цель — стать лидером в области правового консультирования и защиты интересов
                клиентов. Мы постоянно совершенствуем свои услуги, охватывающие широкий спектр
                юридических вопросов.
              </p>
              <Link href="/kontakty" className="button button--primary button--large">
                Связаться с нами
              </Link>
            </div>
            <div className="about-page__image">
              <Image
                src="/images/about-office.jpg"
                alt="Команда юристов Legal Team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
                priority
              />
            </div>
          </div>
        </section>

        <PrinciplesSection />

        <WhyUsSection
          id="about-advantages-title"
          title="Почему выбирают нас"
          subtitle="Профессионализм, индивидуальный подход и прозрачность на каждом этапе работы"
          items={aboutAdvantagesItems}
          muted={false}
        />

        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
