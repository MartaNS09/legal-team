import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { ConsultationForm } from '@/components/ui/ConsultationForm';
import { Accordion } from '@/components/ui/Accordion';
import { Footer } from '@/components/layout/Footer';
import { AdBanner } from '@/components/ui/AdBanner';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return { title: 'Услуга не найдена' };
  }
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
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
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <main id="main" role="main">
      <Marquee 
        text="⚡ Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90 • Задайте вопрос прямо сейчас • 15 лет опыта • 98% успешных дел • Юристы онлайн 24/7"
        speed={30}
      />
      <Header />

      {/* HERO */}
      <section style={{ 
        padding: '8rem 0 3rem',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          fontSize: '10rem',
          opacity: 0.06,
          color: 'white',
          pointerEvents: 'none',
          animation: 'floatDecor 8s ease-in-out infinite'
        }}>⚖️</div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          fontSize: '7rem',
          opacity: 0.05,
          color: 'white',
          pointerEvents: 'none',
          animation: 'floatDecor 8s ease-in-out infinite 2s'
        }}>📜</div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div style={{ color: 'white' }}>
              <h1 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                color: 'white',
                margin: '0 0 0.5rem 0',
                lineHeight: 1.1,
                textShadow: '0 2px 30px rgba(0,0,0,0.3)'
              }}>
                {service.title}
              </h1>
              <p style={{ 
                fontSize: '1.15rem',
                color: 'rgba(255,255,255,0.92)',
                maxWidth: '500px',
                lineHeight: 1.6,
                textShadow: '0 1px 15px rgba(0,0,0,0.2)'
              }}>
                {service.subtitle}
              </p>
              
              <div style={{ 
                marginTop: '1.5rem',
                padding: '0.6rem 1.2rem',
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'inline-block'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--secondary)' }}>
                    {service.stats}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                    по данному направлению
                  </span>
                </div>
              </div>

              <div style={{ 
                marginTop: '1.5rem',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <a href="#consult" style={{
                  padding: '0.7rem 1.8rem',
                  background: 'white',
                  color: 'var(--primary)',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                }}>
                  <span aria-hidden="true">📞</span> Задать вопрос
                </a>
                <a href="tel:+74994951890" style={{
                  padding: '0.7rem 1.8rem',
                  background: 'transparent',
                  color: 'white',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  border: '2px solid rgba(255,255,255,0.25)',
                  transition: 'all 0.3s ease'
                }}>
                  +7 (499) 495-18-90
                </a>
              </div>
            </div>

            <div id="consult" style={{ 
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '0.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
            }}>
              <ConsultationForm />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes floatDecor {
            0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
            25% { transform: translateY(-25px) rotate(5deg) scale(1.05); }
            75% { transform: translateY(25px) rotate(-5deg) scale(0.95); }
          }
          @media (max-width: 992px) {
            .service-hero div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* РЕКЛАМНЫЙ БАННЕР 1 — МИГАЮЩИЙ */}
      <div className="container" style={{ marginTop: '1.5rem' }}>
        <AdBanner 
          title="Здесь может быть ваша реклама!"
          subtitle="Разместите информацию о своей компании и привлекайте клиентов"
          variant="blink"
          icon="🔥"
        />
      </div>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}>
            {/* ЛЕВАЯ КОЛОНКА */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
                Что мы предлагаем
              </h2>
              
              {service.fullDescription.map((text, i) => (
                <p key={i} style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '1.05rem' }}>
                  {text}
                </p>
              ))}

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: '2rem 0 1rem', color: 'var(--foreground)' }}>
                Наши услуги включают:
              </h3>
              
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem 1.5rem'
              }}>
                {service.benefits.map((benefit, i) => (
                  <li key={i} style={{ 
                    padding: '0.5rem 0', 
                    borderBottom: '1px solid var(--gray)',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.95rem'
                  }}>
                    <span style={{ color: 'var(--secondary)', fontSize: '1.2rem' }} aria-hidden="true">✓</span> {benefit}
                  </li>
                ))}
              </ul>

              <div style={{ 
                margin: '2.5rem 0',
                padding: '2rem',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-10%',
                  fontSize: '15rem',
                  opacity: 0.05,
                  color: 'white',
                  pointerEvents: 'none',
                  transform: 'rotate(15deg)'
                }}>⚖️</div>
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                    Не откладывайте решение!
                  </div>
                  <div style={{ opacity: 0.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
                    Получите консультацию прямо сейчас
                  </div>
                  <a href="tel:+74994951890" style={{ 
                    color: 'var(--secondary)', 
                    fontWeight: '700', 
                    textDecoration: 'none',
                    fontSize: '1.4rem',
                    display: 'inline-block',
                    padding: '0.5rem 2rem',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50px',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s'
                  }}>
                    +7 (499) 495-18-90
                  </a>
                </div>
              </div>

              <div style={{ 
                marginTop: '2rem', 
                padding: '2rem', 
                background: 'linear-gradient(135deg, var(--gray-light), var(--background))',
                borderRadius: '20px', 
                textAlign: 'center',
                border: '1px solid var(--gray)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '-20%',
                  left: '-5%',
                  fontSize: '10rem',
                  opacity: 0.03,
                  color: 'var(--primary)',
                  pointerEvents: 'none'
                }}>📜</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.3rem' }} aria-hidden="true">{service.icon}</span>
                  <span style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--secondary)' }}>
                    {service.stats}
                  </span>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                    по данному направлению
                  </div>
                </div>
              </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА */}
            <div>
              <div style={{ position: 'sticky', top: '120px' }}>
                <ConsultationForm />

                {/* РЕКЛАМА 2 — ПУЛЬСИРУЮЩАЯ */}
                <div style={{ marginTop: '1.5rem' }}>
                  <AdBanner 
                    title="Ваше объявление здесь!"
                    subtitle="Привлекайте целевых клиентов"
                    variant="pulse"
                    icon="💎"
                  />
                </div>

                {/* РЕКЛАМА 3 — НЕОНОВАЯ */}
                <div style={{ marginTop: '1.5rem' }}>
                  <AdBanner 
                    title="Специальное предложение!"
                    subtitle="Узнайте о наших акциях и скидках"
                    variant="neon"
                    icon="⭐"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section style={{ padding: '3rem 0', background: 'var(--gray-light)' }}>
          <div className="container">
            <h2 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '2.2rem',
              textAlign: 'center', 
              marginBottom: '2.5rem',
              color: 'var(--foreground)'
            }}>
              Часто задаваемые вопросы
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <Accordion items={service.faq} defaultOpen={0} />
            </div>
          </div>
        </section>
      )}

      {/* СВЯЗАННЫЕ УСЛУГИ */}
      {relatedServices.length > 0 && (
        <section style={{ padding: '3rem 0' }}>
          <div className="container">
            <h2 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '2rem',
              textAlign: 'center', 
              marginBottom: '2.5rem',
              color: 'var(--foreground)'
            }}>
              Другие направления
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '1.5rem'
            }}>
              {relatedServices.map((related) => (
                <Link 
                  key={related!.id} 
                  href={`/services/${related!.slug}`}
                  style={{
                    padding: '2rem 1.5rem',
                    background: 'var(--gray-light)',
                    borderRadius: '20px',
                    border: '1px solid var(--gray)',
                    textDecoration: 'none',
                    color: 'var(--foreground)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    display: 'block'
                  }}
                >
                  <span style={{ fontSize: '2.5rem', display: 'block' }} aria-hidden="true">{related!.icon}</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', margin: '0.5rem 0' }}>
                    {related!.title}
                  </h3>
                  <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>Перейти →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
