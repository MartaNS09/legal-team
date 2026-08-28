'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { InstallAppLink } from '@/components/pwa/InstallPrompt';
import { SITE } from '@/lib/seo';

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
            <span className="footer__logo-text">
              Legal<span className="footer__logo-accent">Team</span>
            </span>
          </Link>
          <p className="footer__description">
            Профессиональные юридические услуги в Москве и по всей России. 15 лет опыта,
            1000+ выигранных дел, 22 направления права.
          </p>
          <div className="footer__contacts">
            <span className="footer__phone" aria-label={`Демо-телефон: ${SITE.phoneDisplay}`}>
              {SITE.phoneDisplay}
            </span>
            <span className="footer__email">{SITE.email}</span>
            <p className="footer__demo-note">{SITE.demoDisclaimer}</p>
          </div>
          <div className="footer__meta">
            <p className="footer__meta-item">
              <span aria-hidden="true">📍</span>
              Москва, ул. Тверская, д. 15, офис 7
            </p>
            <p className="footer__meta-item">
              <span aria-hidden="true">🕐</span>
              Пн–Пт 9:00–21:00, Сб–Вс 10:00–19:00
            </p>
          </div>
          <div className="footer__trust" aria-label="Преимущества компании">
            <span className="footer__trust-badge">15 лет опыта</span>
            <span className="footer__trust-badge">98% успешных дел</span>
            <span className="footer__trust-badge">Конфиденциально</span>
          </div>
        </div>

        <div className="footer__links">
          <nav className="footer__links-column" aria-labelledby="footer-company">
            <h2 id="footer-company" className="footer__links-title">
              Компания
            </h2>
            <ul className="footer__links-list">
              <li><Link href="/o-nas" className="footer__link">О нас</Link></li>
              <li><Link href="/#team" className="footer__link">Команда</Link></li>
              <li><Link href="/#cases" className="footer__link">Выигранные дела</Link></li>
              <li><Link href="/#reviews" className="footer__link">Отзывы</Link></li>
              <li><Link href="/kontakty" className="footer__link">Контакты</Link></li>
            </ul>
          </nav>

          <nav className="footer__links-column" aria-labelledby="footer-services">
            <h2 id="footer-services" className="footer__links-title">
              Услуги
            </h2>
            <ul className="footer__links-list">
              <li><Link href="/services" className="footer__link">Все услуги</Link></li>
              <li><Link href="/services/semeynoe-pravo" className="footer__link">Семейное право</Link></li>
              <li><Link href="/services/nalogovyi-advokat" className="footer__link">Налоговое право</Link></li>
              <li><Link href="/services/bankrotstvo" className="footer__link">Банкротство</Link></li>
              <li><Link href="/services/nedvizhimost" className="footer__link">Недвижимость</Link></li>
            </ul>
          </nav>

          <nav className="footer__links-column" aria-labelledby="footer-info">
            <h2 id="footer-info" className="footer__links-title">
              Информация
            </h2>
            <ul className="footer__links-list">
              <li><Link href="/#pricing" className="footer__link">Стоимость услуг</Link></li>
              <li><Link href="/#faq" className="footer__link">Вопросы и ответы</Link></li>
              <li><Link href="/articles" className="footer__link">Статьи</Link></li>
              <li><Link href="/chat" className="footer__link">Онлайн-чат</Link></li>
              <li>
                <InstallAppLink className="footer__link footer__link--button" />
              </li>
              <li><Link href="/policies" className="footer__link">Политика конфиденциальности</Link></li>
              <li><Link href="/sitemap.xml" className="footer__link">Карта сайта</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Legal Team. Все права защищены. ИНН 7700000000 · ОГРН
            1000000000000
          </p>
          <p className="footer__developer">
            Разработано в{' '}
            <a
              href="https://apsod.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__developer-link"
            >
              <span className="footer__developer-badge" aria-hidden="true">✦</span>
              APSOD
              <span className="visually-hidden"> (откроется в новой вкладке)</span>
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
          <span aria-hidden="true">↑</span>
        </button>
      )}
    </footer>
  );
}
