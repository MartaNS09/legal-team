import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Marquee } from '@/components/ui/Marquee';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export const metadata: Metadata = {
  title: 'О компании Legal Team | Профессиональные юристы и адвокаты в Москве',
  description: 'Юридическая компания Legal Team — команда опытных адвокатов и юристов. 15 лет успешной работы, 1000+ выигранных дел. Доверьте защиту профессионалам.',
  keywords: 'юридическая компания, адвокаты, юристы, о компании, Legal Team',
  openGraph: {
    title: 'О компании Legal Team | Профессиональные юристы',
    description: 'Команда опытных адвокатов. 15 лет работы, 1000+ выигранных дел.',
    type: 'website',
    url: 'https://legal-team.pro/o-nas',
  },
  alternates: {
    canonical: 'https://legal-team.pro/o-nas',
  },
};

export default function AboutPage() {
  const principles = [
    {
      icon: '🎯',
      title: 'Результат превыше всего',
      description: 'Мы не раздаем пустых обещаний, а гарантируем достижение конкретных целей.',
    },
    {
      icon: '🔒',
      title: 'Конфиденциальность',
      description: 'Мы уважаем вашу приватность и гарантируем, что информация не будет раскрыта.',
    },
    {
      icon: '🔍',
      title: 'Внимание к деталям',
      description: 'Тщательно изучаем каждую ситуацию, чтобы найти наиболее эффективное решение.',
    },
  ];

  const advantages = [
    {
      icon: '⭐',
      title: 'Высокий уровень профессионализма',
      description: 'Эксперты с многолетним стажем, знанием судебной практики.',
    },
    {
      icon: '🤝',
      title: 'Индивидуальный подход',
      description: 'Анализируем каждое дело и разрабатываем стратегию, которая ведет к цели.',
    },
    {
      icon: '📋',
      title: 'Широкий спектр услуг',
      description: 'Поддержка по 22 направлениям права — от семейного до корпоративного.',
    },
    {
      icon: '📖',
      title: 'Понятный язык',
      description: 'Объясняем сложные правовые нормы простым и доступным языком.',
    },
  ];

  return (
    <main id="main" role="main">
      <Marquee 
        text="⚡ Бесплатная консультация по любым юридическим вопросам • Работаем 24/7 • Звоните +7 (499) 495-18-90"
        speed={30}
      />
      <Header />

      <section 
        className="about-hero"
        aria-labelledby="about-hero-title"
        style={{
          padding: '8rem 0 3rem',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '55vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('/images/about-hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(26, 58, 107, 0.85) 0%, rgba(26, 58, 107, 0.5) 100%)',
            zIndex: 1,
          }} />
        </div>

        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          fontSize: '15rem',
          opacity: 0.06,
          color: 'white',
          pointerEvents: 'none',
          zIndex: 2,
          animation: 'floatDecor 8s ease-in-out infinite'
        }}>⚖️</div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '3%',
          fontSize: '10rem',
          opacity: 0.04,
          color: 'white',
          pointerEvents: 'none',
          zIndex: 2,
          animation: 'floatDecor 8s ease-in-out infinite 2.5s'
        }}>📜</div>

        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.3rem 1.2rem',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '50px',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '1rem',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              🌟 15 лет на рынке юридических услуг
            </div>
            <h1 id="about-hero-title" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
              color: 'white',
              marginBottom: '1rem',
              textShadow: '0 2px 30px rgba(0,0,0,0.3)'
            }}>
              Ваша защита — <br />наша миссия
            </h1>
            <p style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.7,
              maxWidth: '550px',
              textShadow: '0 1px 15px rgba(0,0,0,0.2)'
            }}>
              Мы создали юридическую компанию, способную защитить ваши интересы в любой ситуации.
              Каждый заслуживает справедливости и профессиональной защиты.
            </p>
            <Link href="/kontakty" className="about-hero__button">
              Связаться с нами
            </Link>
          </div>
        </div>

        <style>{`
          @keyframes floatDecor {
            0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
            25% { transform: translateY(-25px) rotate(5deg) scale(1.05); }
            75% { transform: translateY(25px) rotate(-5deg) scale(0.95); }
          }
          .about-hero__button {
            display: inline-block;
            margin-top: 1.5rem;
            padding: 0.8rem 2.5rem;
            background: white;
            color: var(--primary);
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            transition: all 0.3s ease;
            box-shadow: 0 4px 30px rgba(0,0,0,0.15);
          }
          .about-hero__button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 40px rgba(0,0,0,0.25);
          }
        `}</style>
      </section>

      {/* ===== СТАТИСТИКА ===== */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="about-stats-grid">
            {[
              { target: 15, suffix: '+', label: 'лет опыта' },
              { target: 1000, suffix: '+', label: 'выигранных дел' },
              { target: 98, suffix: '%', label: 'успешных кейсов' },
              { target: 22, suffix: '', label: 'направлений права' },
            ].map((stat) => (
              <div key={stat.label} className="about-stats-item">
                <div className="about-stats-number">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="about-stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .about-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1.5rem;
            background: linear-gradient(135deg, var(--gray-light), var(--background));
            border-radius: 24px;
            padding: 3rem 2rem;
            border: 1px solid var(--gray);
          }
          .about-stats-item {
            text-align: center;
            padding: 0.5rem;
            border-radius: 16px;
            transition: all 0.3s ease;
          }
          .about-stats-item:hover {
            background: rgba(201, 168, 76, 0.05);
            transform: scale(1.05);
          }
          .about-stats-number {
            font-size: 2.8rem;
            font-weight: 700;
            color: var(--secondary);
            font-family: var(--font-serif);
          }
          .about-stats-label {
            color: var(--text-muted);
            font-size: 0.9rem;
          }
        `}</style>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="about-content-grid">
            <div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                marginBottom: '1.5rem',
                color: 'var(--foreground)'
              }}>
                Кто мы
              </h2>
              <p style={{
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                Legal Team — это юридическая компания, объединяющая лучших адвокатов и юристов Москвы.
                Мы работаем с 2010 года и за это время помогли более 1000 клиентам решить их проблемы.
              </p>
              <p style={{
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                fontSize: '1.05rem',
                marginBottom: '1.5rem'
              }}>
                Наша цель — стать лидером в области правового консультирования и защиты интересов клиентов.
                Мы постоянно совершенствуем свои услуги, охватывающие широкий спектр юридических вопросов.
              </p>
              <Link href="/kontakty" className="about-content__button">
                Связаться с нами
              </Link>
            </div>
            <div className="about-content__image-wrapper">
              <Image
                src="/images/about-office.jpg"
                alt="Юридический офис Legal Team"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        <style>{`
          .about-content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          .about-content__button {
            padding: 0.8rem 2rem;
            background: var(--primary);
            color: white;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(26, 58, 107, 0.2);
          }
          .about-content__button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(26, 58, 107, 0.3);
          }
          .about-content__image-wrapper {
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.08);
            position: relative;
            height: 350px;
            transition: all 0.5s ease;
          }
          .about-content__image-wrapper:hover {
            transform: scale(1.02);
            box-shadow: 0 30px 80px rgba(0,0,0,0.12);
          }
          @media (max-width: 992px) {
            .about-content-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      <section style={{ padding: '4rem 0', background: 'var(--gray-light)' }}>
        <div className="container">
          <h2 className="section-title">Наши принципы</h2>
          <div className="about-principles-grid">
            {principles.map((principle, index) => (
              <AnimatedCard key={principle.title} delay={index * 100} direction="bottom">
                <div className="about-principles-card">
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.5rem' }} aria-hidden="true">
                    {principle.icon}
                  </span>
                  <h3 className="about-principles-card__title">{principle.title}</h3>
                  <p className="about-principles-card__desc">{principle.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
        <style>{`
          .about-principles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
          }
          .about-principles-card {
            padding: 2rem;
            background: var(--background);
            border-radius: 20px;
            border: 1px solid var(--gray);
            text-align: center;
            height: 100%;
            transition: all 0.3s ease;
            cursor: default;
          }
          .about-principles-card:hover {
            transform: translateY(-8px);
            border-color: var(--secondary);
            box-shadow: 0 12px 40px rgba(0,0,0,0.06);
          }
          .about-principles-card__title {
            font-family: var(--font-serif);
            font-size: 1.2rem;
            color: var(--foreground);
            margin-bottom: 0.5rem;
          }
          .about-principles-card__desc {
            color: var(--text-muted);
            font-size: 0.95rem;
            line-height: 1.6;
          }
        `}</style>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title">Почему выбирают нас</h2>
          <div className="about-advantages-grid">
            {advantages.map((advantage, index) => (
              <AnimatedCard key={advantage.title} delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="about-advantages-card">
                  <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }} aria-hidden="true">
                    {advantage.icon}
                  </span>
                  <h3 className="about-advantages-card__title">{advantage.title}</h3>
                  <p className="about-advantages-card__desc">{advantage.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
        <style>{`
          .about-advantages-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
          }
          .about-advantages-card {
            padding: 1.8rem;
            background: var(--gray-light);
            border-radius: 20px;
            border: 1px solid var(--gray);
            height: 100%;
            transition: all 0.3s ease;
            cursor: default;
          }
          .about-advantages-card:hover {
            transform: translateY(-8px);
            border-color: var(--secondary);
            box-shadow: 0 12px 40px rgba(0,0,0,0.06);
          }
          .about-advantages-card__title {
            font-family: var(--font-serif);
            font-size: 1.1rem;
            color: var(--foreground);
            margin-bottom: 0.5rem;
          }
          .about-advantages-card__desc {
            color: var(--text-muted);
            font-size: 0.95rem;
            line-height: 1.6;
          }
        `}</style>
      </section>

      <section style={{ 
        padding: '4rem 0', 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-5%',
          fontSize: '20rem',
          opacity: 0.05,
          color: 'white',
          pointerEvents: 'none',
          transform: 'rotate(15deg)',
          animation: 'floatDecor 8s ease-in-out infinite'
        }}>⚖️</div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-cta">
            <h2 className="about-cta__title">Доверьте защиту профессионалам</h2>
            <p className="about-cta__text">
              Мы готовы взяться за дело немедленно, защитить ваши интересы и добиться желаемого результата.
            </p>
            <Link href="/kontakty" className="about-cta__button">
              Получить консультацию
            </Link>
          </div>
        </div>

        <style>{`
          .about-cta {
            text-align: center;
            color: white;
          }
          .about-cta__title {
            font-family: var(--font-serif);
            font-size: 2.2rem;
            margin-bottom: 1rem;
          }
          .about-cta__text {
            font-size: 1.1rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto 2rem;
            line-height: 1.7;
          }
          .about-cta__button {
            padding: 0.8rem 2.5rem;
            background: white;
            color: var(--primary);
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            display: inline-block;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          }
          .about-cta__button:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 8px 40px rgba(0,0,0,0.25);
          }
        `}</style>
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
