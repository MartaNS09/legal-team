'use client';

import { useState, useEffect, useRef, useId } from 'react';
import styles from './ConsultationForm.module.scss';

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    question: '',
    name: '',
    phone: '',
    agree: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ specialists: 8, people: 17, minutes: 2 });
  const [placeholderText, setPlaceholderText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formId = useId();

  const fullText = 'Опишите ваш вопрос, чтобы мы подобрали нужного специалиста';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setPlaceholderText(fullText);
      return;
    }

    let index = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      if (!isDeleting) {
        setPlaceholderText(fullText.slice(0, index));
        index++;

        if (index > fullText.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            timeoutId = setTimeout(type, 40);
          }, 3000);
          return;
        }

        timeoutId = setTimeout(type, 35 + Math.random() * 25);
      } else {
        setPlaceholderText(fullText.slice(0, index));
        index--;

        if (index < 0) {
          isDeleting = false;
          index = 0;
          timeoutId = setTimeout(type, 500);
          return;
        }

        timeoutId = setTimeout(type, 20 + Math.random() * 15);
      }
    };

    timeoutId = setTimeout(type, 500);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setStats({
        specialists: Math.floor(Math.random() * 5) + 8,
        people: Math.floor(Math.random() * 10) + 15,
        minutes: Math.floor(Math.random() * 3) + 1,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.question.trim() || !formData.name.trim() || !formData.phone.trim()) {
      setError('Заполните все обязательные поля');
      return;
    }

    if (!formData.agree) {
      setError('Пожалуйста, согласитесь с обработкой персональных данных');
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <header className={styles.header}>
          <h2 className={styles.title} id={`${formId}-title`}>
            Получите <span className={styles.highlight}>бесплатную</span> консультацию
          </h2>
          <p className={styles.subtitle} id={`${formId}-desc`}>
            по любым юридическим вопросам
          </p>
        </header>

        <div className={styles.stats} aria-live="polite" aria-atomic="true">
          <div className={styles.stat}>
            <span className={styles.statNumber}>{stats.specialists}</span>
            <span className={styles.statLabel}>специалистов</span>
            <span className={styles.statDesc}>Юристов online</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{stats.people}</span>
            <span className={styles.statLabel}>человек</span>
            <span className={styles.statDesc}>Сейчас консультируется</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{stats.minutes}</span>
            <span className={styles.statLabel}>минуты</span>
            <span className={styles.statDesc}>Среднее время ответа</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          noValidate
          aria-labelledby={`${formId}-title`}
          aria-describedby={`${formId}-desc`}
        >
          <div className={styles.field}>
            <label htmlFor={`${formId}-question`} className={styles.label}>
              Ваш вопрос
            </label>
            <div className={styles.textareaWrapper}>
              <textarea
                id={`${formId}-question`}
                ref={textareaRef}
                className={styles.textarea}
                placeholder={placeholderText}
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                onFocus={() => setPlaceholderText('')}
                required
                aria-required="true"
                rows={3}
              />
              {!formData.question && (
                <span className={styles.cursorBlink} aria-hidden="true">
                  |
                </span>
              )}
            </div>
          </div>

          <div className={styles.step2}>
            <div className={styles.field}>
              <label htmlFor={`${formId}-name`} className={styles.label}>
                Имя
              </label>
              <input
                id={`${formId}-name`}
                type="text"
                className={styles.input}
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                aria-required="true"
                autoComplete="name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`${formId}-phone`} className={styles.label}>
                Телефон
              </label>
              <input
                id={`${formId}-phone`}
                type="tel"
                className={styles.input}
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                aria-required="true"
                autoComplete="tel"
                inputMode="tel"
              />
            </div>
          </div>

          <p className={styles.online} role="status">
            <span className={styles.onlineDot} aria-hidden="true" />
            Специалисты онлайн
          </p>

          <div className={styles.dops}>
            <label className={styles.checkboxLabel} htmlFor={`${formId}-agree`}>
              <input
                id={`${formId}-agree`}
                type="checkbox"
                className={styles.checkbox}
                checked={formData.agree}
                onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                required
                aria-required="true"
              />
              <span>
                Отправляя данные, Вы соглашаетесь с{' '}
                <a href="/policies" className={styles.link}>
                  Правилами обработки персональных данных
                </a>
              </span>
            </label>
          </div>

          {error && (
            <p className={styles.errorMessage} role="alert">
              {error}
            </p>
          )}

          <button type="submit" className={styles.submitButton}>
            Задать вопрос
          </button>
        </form>

        {isSubmitted && (
          <div className={styles.successMessage} role="status" aria-live="polite">
            Спасибо! Мы свяжемся с вами в ближайшее время.
          </div>
        )}
      </div>
    </div>
  );
}
