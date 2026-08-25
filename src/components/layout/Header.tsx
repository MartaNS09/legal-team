'use client';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services } from '@/data/services';
import { useState, useRef, useEffect } from 'react';

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

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

  return (
    <header className="header" role="banner" aria-label="Главная навигация">
      <div className="container header__inner">
        <Link href="/" className="header__logo" aria-label="Legal Team - главная">
          <span aria-hidden="true">⚖️</span>
          <span className="header__logo-text">Legal<span className="header__logo-accent">Team</span></span>
        </Link>
        
        <nav className="header__nav" aria-label="Основное меню">
          <ul className="header__nav-list">
            <li 
              className="header__nav-item header__nav-item--dropdown"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className={`header__nav-link header__nav-link--dropdown ${pathname === '/services' ? 'header__nav-link--active' : ''}`}
              >
                Услуги
                <span className="header__nav-arrow" aria-hidden="true">▼</span>
              </Link>
              
              {isServicesOpen && (
                <ul className="header__dropdown" role="menu">
                  {services.map((service) => (
                    <li key={service.id} className="header__dropdown-item" role="menuitem">
                      <Link 
                        href={`/services/${service.slug}`} 
                        className={`header__dropdown-link ${pathname === `/services/${service.slug}` ? 'header__dropdown-link--active' : ''}`}
                      >
                        <span className="header__dropdown-icon" aria-hidden="true">{service.icon}</span>
                        {service.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link href="/o-nas" className={`header__nav-link ${pathname === '/o-nas' ? 'header__nav-link--active' : ''}`}>
                О нас
              </Link>
            </li>
            <li>
              <a href="#team" className="header__nav-link">Команда</a>
            </li>
            <li>
              <a href="#reviews" className="header__nav-link">Отзывы</a>
            </li>
            <li>
              <Link href="/kontakty" className={`header__nav-link ${pathname === '/kontakty' ? 'header__nav-link--active' : ''}`}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <a href="#consult" className="button button--primary button--glow">
            <span className="button__icon">📞</span>
            Консультация
          </a>
        </div>
      </div>
    </header>
  );
}
