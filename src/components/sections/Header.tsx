'use client';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import Link from 'next/link';

export function Header() {
  return (
    <header className="header" role="banner" aria-label="Главная навигация">
      <div className="container header__inner">
        <Link href="/" className="header__logo" aria-label="Legal Team - главная">
          <span aria-hidden="true">⚖️</span>
          <span className="header__logo-text">Legal<span className="header__logo-accent">Team</span></span>
        </Link>
        
        <nav className="header__nav" aria-label="Основное меню">
          <ul className="header__nav-list">
            <li><Link href="#services" className="header__nav-link">Услуги</Link></li>
            <li><a href="#about" className="header__nav-link">О нас</a></li>
            <li><a href="#team" className="header__nav-link">Команда</a></li>
            <li><a href="#reviews" className="header__nav-link">Отзывы</a></li>
            <li><a href="#contacts" className="header__nav-link">Контакты</a></li>
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
