'use client';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services } from '@/data/services';
import { useState, useRef, useEffect, useId, useCallback } from 'react';
import { createPortal } from 'react-dom';

const NAV_LINKS = [
  { href: '/o-nas', label: 'О нас' },
  { href: '/#cases', label: 'Дела' },
  { href: '/articles', label: 'Статьи' },
  { href: '/chat', label: 'Чат' },
  { href: '/#reviews', label: 'Отзывы' },
  { href: '/#pricing', label: 'Стоимость' },
  { href: '/kontakty', label: 'Контакты' },
] as const;

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const servicesMenuId = useId();
  const mobileNavId = useId();

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', isMobileOpen);
    return () => document.documentElement.classList.remove('menu-open');
  }, [isMobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY ?? document.documentElement.scrollTop ?? 0;
      setIsScrolled(y > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isMobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobile();
        burgerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen, closeMobile]);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return pathname === href;
  };

  const mobileMenu = mounted
    ? createPortal(
        <>
          <div
            className={`header__overlay ${isMobileOpen ? 'header__overlay--visible' : ''}`}
            onClick={closeMobile}
            aria-hidden="true"
          />
          <div
            id={mobileNavId}
            className={`header__mobile ${isMobileOpen ? 'header__mobile--open' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Мобильное меню"
            aria-hidden={!isMobileOpen}
          >
            <div className="header__mobile-head">
              <span className="header__mobile-brand">
                Legal<span>Team</span>
              </span>
              <button
                type="button"
                className="header__mobile-close"
                aria-label="Закрыть меню"
                onClick={closeMobile}
              >
                ✕
              </button>
            </div>

            <nav aria-label="Мобильная навигация">
              <ul className="header__mobile-list">
                <li>
                  <button
                    type="button"
                    className="header__mobile-link header__mobile-link--toggle"
                    aria-expanded={isMobileServicesOpen}
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  >
                    Услуги
                    <span aria-hidden="true">{isMobileServicesOpen ? '−' : '+'}</span>
                  </button>
                  <ul
                    className={`header__mobile-sublist ${isMobileServicesOpen ? 'header__mobile-sublist--open' : ''}`}
                  >
                    <li>
                      <Link href="/services" className="header__mobile-sublink" onClick={closeMobile}>
                        Все услуги
                      </Link>
                    </li>
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="header__mobile-sublink"
                          onClick={closeMobile}
                        >
                          <span aria-hidden="true">{service.icon}</span>
                          {service.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="header__mobile-link"
                      onClick={closeMobile}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="header__mobile-actions">
                <a href="#consult" className="button button--primary button--large header__mobile-cta" onClick={closeMobile}>
                  Получить консультацию
                </a>
                <a href="tel:+74994951890" className="header__mobile-phone">
                  +7 (499) 495-18-90
                </a>
              </div>
            </nav>
          </div>
        </>,
        document.body
      )
    : null;

  return (
    <header className={`header ${isMobileOpen ? 'header--menu-open' : ''} ${isScrolled ? 'header--scrolled' : ''}`} role="banner">
      <div className="container header__inner">
        <Link href="/" className="header__logo">
          <span aria-hidden="true">⚖️</span>
          <span className="header__logo-text">
            Legal<span className="header__logo-accent">Team</span>
          </span>
        </Link>

        <nav className="header__nav" aria-label="Основная навигация">
          <ul className="header__nav-list">
            <li
              className="header__nav-item header__nav-item--dropdown"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className={`header__nav-link header__nav-link--dropdown ${
                  pathname.startsWith('/services') ? 'header__nav-link--active' : ''
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls={servicesMenuId}
                onFocus={handleMouseEnter}
              >
                Услуги
                <span className="header__nav-arrow" aria-hidden="true">
                  ▼
                </span>
              </Link>

              <ul
                id={servicesMenuId}
                className={`header__dropdown ${isServicesOpen ? 'header__dropdown--open' : ''}`}
                hidden={!isServicesOpen}
              >
                <li className="header__dropdown-item">
                  <Link
                    href="/services"
                    className="header__dropdown-link header__dropdown-link--all"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Все услуги
                  </Link>
                </li>
                {services.map((service) => (
                  <li key={service.id} className="header__dropdown-item">
                    <Link
                      href={`/services/${service.slug}`}
                      className={`header__dropdown-link ${
                        pathname === `/services/${service.slug}` ? 'header__dropdown-link--active' : ''
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span className="header__dropdown-icon" aria-hidden="true">
                        {service.icon}
                      </span>
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`header__nav-link ${isActive(link.href) ? 'header__nav-link--active' : ''}`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <a href="#consult" className="button button--primary button--glow header__cta">
            <span className="button__icon" aria-hidden="true">
              📞
            </span>
            <span className="header__cta-text">Консультация</span>
          </a>
          <button
            ref={burgerRef}
            type="button"
            className={`header__burger ${isMobileOpen ? 'header__burger--open' : ''}`}
            aria-label={isMobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMobileOpen}
            aria-controls={mobileNavId}
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <span className="header__burger-line" aria-hidden="true" />
            <span className="header__burger-line" aria-hidden="true" />
            <span className="header__burger-line" aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
}
