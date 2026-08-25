'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ConsultationForm.module.scss';

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    question: '',
    name: '',
    phone: '',
    agree: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stats, setStats] = useState({ specialists: 8, people: 17, minutes: 2 });
  const [placeholderText, setPlaceholderText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const fullText = 'Опишите ваш вопрос, чтобы мы подобрали нужного специалиста';

  // Анимация печатания (как на примере yurist-msk.pro)
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting) {
        // Печатаем
        setPlaceholderText(fullText.slice(0, index));
        index++;
        
        if (index > fullText.length) {
          // Пауза перед удалением
          timeoutId = setTimeout(() => {
            isDeleting = true;
            timeoutId = setTimeout(type, 40);
          }, 3000);
          return;
        }
        
        timeoutId = setTimeout(type, 35 + Math.random() * 25);
      } else {
        // Удаляем
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
    if (!formData.agree) {
      alert('Пожалуйста, согласитесь с обработкой данных');
      return;
    }
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            Получите <span className={styles.highlight}>бесплатную</span> консультацию
          </h3>
          <p className={styles.subtitle}>по любым юридическим вопросам</p>
        </div>

        <div className={styles.stats}>
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

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={styles.textareaWrapper}>
            <textarea
              ref={textareaRef}
              className={styles.textarea}
              placeholder={placeholderText}
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              onFocus={() => setPlaceholderText('')}
              onBlur={() => {
                if (!formData.question) {
                  setPlaceholderText(fullText.slice(0, 10));
                  setTimeout(() => {
                    let i = 10;
                    const interval = setInterval(() => {
                      if (i < fullText.length) {
                        setPlaceholderText(fullText.slice(0, i));
                        i++;
                      } else {
                        clearInterval(interval);
                      }
                    }, 30);
                  }, 300);
                }
              }}
              required
              aria-label="Опишите ваш вопрос"
              aria-required="true"
            />
            {!formData.question && (
              <span className={styles.cursorBlink} aria-hidden="true">|</span>
            )}
          </div>

          <div className={styles.step2}>
            <input
              type="text"
              className={styles.input}
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              aria-label="Ваше имя"
              aria-required="true"
              autoComplete="name"
            />
            <input
              type="tel"
              className={styles.input}
              placeholder="Ваш номер телефона"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              aria-label="Ваш номер телефона"
              aria-required="true"
              autoComplete="tel"
            />
          </div>

          <div className={styles.online}>
            <span className={styles.onlineDot}></span>
            online
          </div>

          <div className={styles.dops}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={formData.agree}
                onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                required
                aria-label="Согласие на обработку персональных данных"
                aria-required="true"
              />
              Отправляя данные, Вы соглашаетесь с{' '}
              <a href="/policies" className={styles.link} target="_blank" rel="noopener noreferrer">
                Правилами обработки персональных данных
              </a>
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Задать вопрос
          </button>
        </form>

        {isSubmitted && (
          <div className={styles.successMessage} role="alert">
            ✅ Спасибо! Мы свяжемся с вами в ближайшее время.
          </div>
        )}
      </div>
    </div>
  );
}
