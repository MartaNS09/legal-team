'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link href="/" className="footer__logo">
            <span aria-hidden="true">⚖️</span>
            <span className="footer__logo-text">Legal<span className="footer__logo-accent">Team</span></span>
          </Link>
          <p className="footer__description">
            Профессиональные юридические услуги в Москве. 15 лет опыта, 1000+ выигранных дел.
          </p>
          <div className="footer__contacts">
            <a href="tel:+74994951890" className="footer__phone">+7 (499) 495-18-90</a>
            <a href="mailto:info@legal-team.pro" className="footer__email">info@legal-team.pro</a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__links-column">
            <h4 className="footer__links-title">Компания</h4>
            <ul className="footer__links-list">
              <li><Link href="/o-nas" className="footer__link">О нас</Link></li>
              <li><Link href="/kontakty" className="footer__link">Контакты</Link></li>
              <li><a href="#" className="footer__link">Вакансии</a></li>
              <li><a href="#" className="footer__link">Партнёрам</a></li>
            </ul>
          </div>

          <div className="footer__links-column">
            <h4 className="footer__links-title">Услуги</h4>
            <ul className="footer__links-list">
              <li><Link href="/services/arbitrazhnye-spory" className="footer__link">Арбитраж</Link></li>
              <li><Link href="/services/semeynoe-pravo" className="footer__link">Семейное право</Link></li>
              <li><Link href="/services/korporativnoe-pravo" className="footer__link">Корпоративное право</Link></li>
              <li><Link href="/services/nalogovoe-pravo" className="footer__link">Налоговое право</Link></li>
            </ul>
          </div>

          <div className="footer__links-column">
            <h4 className="footer__links-title">Информация</h4>
            <ul className="footer__links-list">
              <li><a href="#" className="footer__link">Политика конфиденциальности</a></li>
              <li><a href="#" className="footer__link">Пользовательское соглашение</a></li>
              <li><a href="#" className="footer__link">Публичная оферта</a></li>
              <li><a href="#" className="footer__link">Карта сайта</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Legal Team. Все права защищены.
          </p>
          <p className="footer__developer">
            Разработано в{' '}
            <a 
              href="https://apsod.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__developer-link"
            >
              APSOD
            </a>
          </p>
        </div>
      </div>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="footer__top-btn"
          aria-label="Вернуться наверх"
          type="button"
        >
          ↑
        </button>
      )}

      <style>{`
        .footer {
          background: var(--gray-light);
          border-top: 1px solid var(--gray);
          padding: 3rem 0 0;
          margin-top: 2rem;
        }
        .footer__inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--gray);
        }
        .footer__logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.3rem;
          font-weight: 700;
          font-family: var(--font-serif);
          text-decoration: none;
          color: var(--foreground);
        }
        .footer__logo-accent {
          color: var(--secondary);
        }
        .footer__description {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0.5rem 0 1rem;
          max-width: 300px;
        }
        .footer__contacts {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .footer__phone {
          color: var(--secondary);
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer__phone:hover {
          color: var(--primary);
        }
        .footer__email {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer__email:hover {
          color: var(--primary);
        }
        .footer__links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .footer__links-title {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 0.8rem;
        }
        .footer__links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer__links-list li {
          margin-bottom: 0.4rem;
        }
        .footer__link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s;
        }
        .footer__link:hover {
          color: var(--secondary);
        }
        .footer__bottom {
          padding: 1.2rem 0;
          background: var(--background);
        }
        .footer__bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .footer__copyright {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin: 0;
        }
        .footer__developer {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin: 0;
        }
        .footer__developer-link {
          color: var(--secondary);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }
        .footer__developer-link:hover {
          color: var(--primary);
        }
        .footer__top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--secondary);
          color: white;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(201, 168, 76, 0.3);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer__top-btn:hover {
          background: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(26, 58, 107, 0.3);
        }
        @media (max-width: 992px) {
          .footer__inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer__links {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer__description {
            max-width: 100%;
          }
        }
        @media (max-width: 576px) {
          .footer__links {
            grid-template-columns: 1fr;
          }
          .footer__bottom-inner {
            flex-direction: column;
            text-align: center;
          }
          .footer__top-btn {
            bottom: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </footer>
  );
}
