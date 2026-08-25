import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { ConsultationForm } from '@/components/ui/ConsultationForm';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Контакты Legal Team | Адрес, телефон, карта в Москве',
  description: 'Свяжитесь с Legal Team: телефон +7 (499) 495-18-90, адрес в Москве, форма обратной связи. Работаем 24/7.',
};

export default function ContactsPage() {
  const contacts = [
    { icon: '📍', title: 'Адрес', text: 'Москва, ул. Тверская, д. 15', sub: 'офис 7, 4-й этаж' },
    { icon: '📞', title: 'Телефон', text: '+7 (499) 495-18-90', sub: 'Работаем 24/7' },
    { icon: '📧', title: 'Email', text: 'info@legal-team.pro', sub: 'Отвечаем в течение часа' },
    { icon: '🕐', title: 'Часы работы', text: 'Пн-Пт: 9:00 – 21:00', sub: 'Сб-Вс: 10:00 – 19:00' },
  ];

  return (
    <main id="main" role="main">
      <Marquee 
        text="⚡ Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90"
        speed={30}
      />
      <Header />

      <section style={{ 
        padding: '8rem 0 3rem', 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          fontSize: '15rem',
          opacity: 0.05,
          color: 'white',
          pointerEvents: 'none'
        }}>📍</div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'white', marginBottom: '0.5rem' }}>
            Контакты
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)' }}>
            Свяжитесь с нами удобным способом
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {contacts.map((contact) => (
              <div key={contact.title} style={{
                padding: '1.5rem',
                background: 'var(--gray-light)',
                borderRadius: '20px',
                border: '1px solid var(--gray)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              className="contact-card"
              >
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.3rem' }}>{contact.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--foreground)', marginBottom: '0.3rem' }}>
                  {contact.title}
                </h3>
                <div style={{ fontWeight: '600', color: 'var(--secondary)', fontSize: '1.1rem' }}>
                  {contact.text}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                  {contact.sub}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1rem' }}>
                Напишите нам
              </h2>
              <ConsultationForm />
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1rem' }}>
                Мы на карте
              </h2>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--gray)',
                height: '400px',
                background: 'var(--gray-light)'
              }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&source=constructor"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Карта офиса Legal Team"
                />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .contact-card:hover {
            transform: translateY(-8px);
            border-color: var(--secondary);
            box-shadow: 0 12px 40px rgba(0,0,0,0.06);
            background: var(--background);
          }
          @media (max-width: 992px) {
            .container > div:last-child {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}
