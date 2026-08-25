import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';

export const metadata = {
  title: 'Страница не найдена | 404 | Legal Team',
  description: 'К сожалению, запрашиваемая страница не найдена. Вернитесь на главную страницу Legal Team.',
  robots: 'noindex, follow',
};

export default function NotFoundPage() {
  return (
    <main id="main" role="main">
      <Marquee 
        text="⚡ Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90"
        speed={30}
      />
      <Header />

      <section 
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 2rem',
          background: 'linear-gradient(135deg, var(--gray-light) 0%, transparent 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Декоративные элементы */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          fontSize: '25rem',
          opacity: 0.03,
          color: 'var(--primary)',
          pointerEvents: 'none',
          transform: 'rotate(15deg)'
        }}>⚖️</div>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          fontSize: '15rem',
          opacity: 0.02,
          color: 'var(--secondary)',
          pointerEvents: 'none',
          transform: 'rotate(-10deg)'
        }}>📜</div>

        <div style={{
          maxWidth: '600px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            fontSize: '8rem',
            fontWeight: '700',
            fontFamily: 'var(--font-serif)',
            color: 'var(--secondary)',
            lineHeight: 1,
            marginBottom: '0.5rem',
            textShadow: '0 4px 40px rgba(201, 168, 76, 0.15)'
          }}>
            404
          </div>
          
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            color: 'var(--foreground)',
            marginBottom: '1rem'
          }}>
            Страница не найдена
          </h1>
          
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            К сожалению, запрашиваемая страница не существует или была перемещена.
            Возможно, вы перешли по устаревшей ссылке.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/" style={{
              padding: '0.8rem 2.5rem',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span aria-hidden="true">🏠</span> На главную
            </Link>
            <Link href="/services" style={{
              padding: '0.8rem 2.5rem',
              background: 'transparent',
              color: 'var(--foreground)',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              border: '2px solid var(--gray)',
              transition: 'all 0.3s ease'
            }}>
              Все услуги
            </Link>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'var(--gray-light)',
            borderRadius: '16px',
            border: '1px solid var(--gray)'
          }}>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              marginBottom: '0.5rem'
            }}>
              Нужна помощь? Свяжитесь с нами:
            </p>
            <a href="tel:+74994951890" style={{
              color: 'var(--secondary)',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '1.2rem'
            }}>
              +7 (499) 495-18-90
            </a>
          </div>
        </div>
      </section>

      <footer className="footer" role="contentinfo">
        <div className="container footer__inner">
          <p className="footer__copy">© 2026 Legal Team. Все права защищены.</p>
          <nav className="footer__nav" aria-label="Дополнительная навигация">
            <a href="#" className="footer__link">Политика конфиденциальности</a>
            <a href="#" className="footer__link">Пользовательское соглашение</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
