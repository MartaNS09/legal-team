import { Marquee } from "@/components/ui/Marquee";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { ServicesSidebar } from "@/components/sections/ServicesSidebar";
import { AnimatedList } from "@/components/ui/AnimatedList";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Accordion } from "@/components/ui/Accordion";
import { TeamSection } from "@/components/sections/TeamSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AdBanner } from "@/components/ui/AdBanner";
import { HomeStructuredData } from "@/components/HomeStructuredData";
import { ServiceCardImage } from "@/components/ui/ServiceCardImage";
import Link from "next/link";
import { services } from "@/data/services";
import { homeFaqItems } from "@/data/homeFaq";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Юридическая компания Legal Team | Профессиональные юридические услуги в Москве",
  description:
    "Юридические услуги в Москве и России: арбитраж, налоги, семейное право, банкротство, недвижимость. 15 лет опыта, 1000+ дел, 98% успеха. Бесплатная консультация 24/7.",
  path: "/",
});

export default function Home() {
  const servicesList = [
    "Консультирование по любым интересующим вопросам",
    "Подготовка исковых заявлений, жалоб",
    "Подача документов в судебные инстанции",
    "Представление интересов клиента в досудебных спорах",
    "Юридическое сопровождение сделок",
    "Подготовка правовых заключений",
  ];

  const complexServices = [
    "Консультация – разбор ситуации",
    "Анализ и подготовка документов",
    "Сбор доказательств",
    "Переговоры с другой стороной",
    "Взаимодействие с госорганами",
    "Представление в суде",
    "Контроль исполнения решения",
  ];

  const mainServices = services.slice(0, 6);

  return (
    <>
      <link rel="preload" as="image" href="/images/hero/home-mobile.jpg" media="(max-width: 992px)" />
      <link rel="preload" as="image" href="/images/hero/home.jpg" media="(min-width: 993px)" />
      <HomeStructuredData />
      <Marquee
        text="Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90 • 15 лет опыта • 98% успешных дел"
        speed={30}
      />
      <Header />

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <HeroBackground />

          <div className="container hero__inner">
            <div className="hero__content">
              <p className="hero__badge" role="status" aria-live="polite">
                <span className="hero__badge-dot" aria-hidden="true">
                  ●
                </span>
                Сейчас онлайн: <strong>8</strong> юристов
              </p>
              <h1 id="hero-title" className="hero__title">
                Юридическая защита <br />
                <span className="hero__title-accent">на высшем уровне</span>
              </h1>

              <div className="hero__buttons">
                <a
                  href="#consult"
                  className="button button--primary button--large button--glow"
                >
                  <span className="button__icon" aria-hidden="true">
                    ⚡
                  </span>
                  Получить консультацию
                </a>
                <a
                  href="#services"
                  className="button button--outline button--large"
                >
                  Узнать больше
                </a>
              </div>

              <ul
                className="hero__stats"
                aria-label="Ключевые показатели компании"
              >
                <li className="hero__stat hero__stat--animated">
                  <span className="hero__stat-number">
                    <AnimatedCounter target={15} suffix="+" />
                  </span>
                  <span className="hero__stat-label">лет опыта</span>
                </li>
                <li className="hero__stat hero__stat--animated">
                  <span className="hero__stat-number">
                    <AnimatedCounter target={1000} suffix="+" />
                  </span>
                  <span className="hero__stat-label">выигранных дел</span>
                </li>
                <li className="hero__stat hero__stat--animated">
                  <span className="hero__stat-number">
                    <AnimatedCounter target={98} suffix="%" />
                  </span>
                  <span className="hero__stat-label">успешных кейсов</span>
                </li>
              </ul>
            </div>

            <div id="consult" className="hero__form">
              <ConsultationForm />
            </div>
          </div>
        </section>

        <div className="container ad-slot">
          <AdBanner
            title="Разместите свою рекламу на нашем сайте!"
            subtitle="Привлекайте клиентов с Legal Team"
            variant="neon"
            icon="🚀"
          />
        </div>

        <section
          id="services"
          className="servicesSection"
          aria-labelledby="services-title"
        >
          <div className="container">
            <div className="servicesSection__grid">
              <ServicesSidebar />
              <div className="servicesSection__content">
                <h2 id="services-title" className="servicesSection__title">
                  Консультация по юридическим вопросам
                </h2>
                <div className="servicesSection__text">
                  <p>
                    В жизни часто происходят ситуации, требующие участия
                    профессионального юриста. От квалификации специалиста всегда
                    зависит исход спорной ситуации.
                  </p>
                  <p>
                    Заказать их услуги вы можете в нашей компании. У нас
                    работают юристы с большим практическим опытом, компетентные
                    в различных отраслях права.
                  </p>

                  <h3>Перечень оказываемых юридических услуг</h3>
                  <AnimatedList items={servicesList} delay={150} />

                  <h3>Комплексные юридические услуги</h3>
                  <p>
                    Адвокат – специалист, оказывающий квалифицированную помощь в
                    решении вопросов, затрагивающих различные области права.
                  </p>
                  <AnimatedList items={complexServices} delay={120} />

                  <p>
                    Практика показывает, что не бывает простых споров. Поэтому,
                    если вам нужно разобраться в возникшей сложной ситуации,
                    заказывайте юридические услуги в нашей компании.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="home-services"
          aria-labelledby="home-services-title"
        >
          <div className="container">
            <h2 id="home-services-title" className="section-title">
              Наши услуги
            </h2>
            <div className="home-services__grid">
              {mainServices.map((service, index) => (
                <AnimatedCard
                  key={service.id}
                  delay={index * 80}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="home-services__card"
                    aria-label={`${service.shortTitle}: ${service.subtitle}`}
                  >
                    <ServiceCardImage
                      slug={service.slug}
                      title={service.shortTitle}
                      priority={index < 2}
                    />
                    <div className="home-services__card-body">
                      <div className="home-services__card-head">
                        <span
                          className="home-services__card-icon"
                          aria-hidden="true"
                        >
                          {service.icon}
                        </span>
                        <h3 className="home-services__card-title">
                          {service.shortTitle}
                        </h3>
                      </div>
                      <p className="home-services__card-text">
                        {service.subtitle}
                      </p>
                      <div className="home-services__card-meta">
                        <span className="home-services__card-more">
                          Подробнее →
                        </span>
                        <span className="home-services__card-stats">
                          {service.stats}
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
            <div className="home-services__more">
              <Link
                href="/services"
                className="button button--primary button--large"
              >
                Все услуги
              </Link>
            </div>
          </div>
        </section>

        <PricingSection />

        <TeamSection />

        <CaseStudiesSection />

        <ReviewsSection />

        <ArticlesSection limit={6} />

        <section id="faq" className="faq" aria-labelledby="faq-title">
          <div className="container">
            <h2 id="faq-title" className="section-title">
              Часто задаваемые вопросы
            </h2>
            <p className="faq__intro">
              Ответы практикующих адвокатов и юристов Legal Team на самые
              популярные вопросы клиентов
            </p>
            <div className="faq__wrapper">
              <Accordion items={homeFaqItems} defaultOpen={0} />
            </div>
          </div>
        </section>

        <CtaSection consultHref="/#consult" />
      </main>

      <Footer />
    </>
  );
}
