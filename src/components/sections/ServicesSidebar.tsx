'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import styles from './ServicesSidebar.module.scss';

export function ServicesSidebar() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      alert('Пожалуйста, согласитесь с обработкой данных');
      return;
    }
    console.log('Заказ звонка:', { name, phone });
    alert('Спасибо! Мы перезвоним вам в ближайшее время.');
  };

  return (
    <aside className={styles.sidebar} aria-label="Боковое меню услуг">
      <nav className={styles.menu} aria-label="Навигация по услугам">
        <ul className={styles.menuList}>
          <li className={styles.menuTitle} aria-hidden="true">Наши услуги</li>
          {services.map((service) => (
            <li key={service.id} className={styles.menuItem}>
              <Link 
                href={`/services/${service.slug}`} 
                className={styles.menuLink}
                aria-label={`Подробнее о ${service.title}`}
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.callback} role="complementary" aria-label="Форма заказа звонка">
        <div className={styles.callbackContent}>
          <span className={styles.callbackTitle}>Заказать звонок</span>
          <span className={styles.callbackSubtitle}>
            Заполните поля и мы с Вами свяжемся в ближайшее время
          </span>
          <form onSubmit={handleSubmit} className={styles.callbackForm} noValidate>
            <input
              type="text"
              className={styles.callbackInput}
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Ваше имя"
              aria-required="true"
              autoComplete="name"
            />
            <input
              type="tel"
              className={styles.callbackInput}
              placeholder="Ваш телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              aria-label="Ваш номер телефона"
              aria-required="true"
              autoComplete="tel"
            />
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
                aria-label="Согласие на обработку персональных данных"
                aria-required="true"
              />
              Отправляя данные, Вы соглашаетесь с{' '}
              <a href="/policies" target="_blank" className={styles.link} rel="noopener noreferrer">
                Правилами обработки персональных данных
              </a>
            </label>
            <button type="submit" className={styles.callbackButton}>
              Перезвоните мне
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
