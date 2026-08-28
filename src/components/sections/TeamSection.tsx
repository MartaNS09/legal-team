'use client';

import { useEffect, useRef } from 'react';
import styles from './TeamSection.module.scss';
import { TypingCloud } from '@/components/ui/TypingCloud';
import Image from 'next/image';

interface TeamMember {
  name: string;
  vocation: string;
  fullText: string;
  gradient1: string;
  gradient2: string;
  stats: string;
  image: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Арбитражные споры',
    vocation: 'Представление в судах',
    fullText: 'Выигрываем сложные дела', // ← укоротили
    gradient1: 'rgba(26, 58, 107, 0.5)',
    gradient2: 'rgba(26, 58, 107, 0.2)',
    stats: '98% успешных дел',
    image: '/images/team/arbitrazh.webp',
    alt: 'Юрист по арбитражным спорам',
  },
  {
    name: 'Семейное право',
    vocation: 'Разводы, алименты, опека',
    fullText: 'Сохраняем семьи и детей', // ← укоротили
    gradient1: 'rgba(201, 168, 76, 0.4)',
    gradient2: 'rgba(201, 168, 76, 0.2)',
    stats: '1000+ семей',
    image: '/images/team/semeynoe-pravo.webp',
    alt: 'Семейный юрист',
  },
  {
    name: 'Корпоративное право',
    vocation: 'Сделки и защита бизнеса',
    fullText: 'Сопровождаем бизнес', // ← укоротили
    gradient1: 'rgba(26, 58, 107, 0.5)',
    gradient2: 'rgba(26, 58, 107, 0.2)',
    stats: '500+ компаний',
    image: '/images/team/korporativnoe.webp',
    alt: 'Корпоративный юрист',
  },
  {
    name: 'Налоговое право',
    vocation: 'Споры с ФНС',
    fullText: 'Защищаем от налоговых рисков',
    gradient1: 'rgba(201, 168, 76, 0.4)',
    gradient2: 'rgba(201, 168, 76, 0.2)',
    stats: 'Сэкономлено 200M+ ₽',
    image: '/images/team/nalogovoe.webp',
    alt: 'Налоговый адвокат',
  },
  {
    name: 'Недвижимость',
    vocation: 'Сделки и споры',
    fullText: 'Проверяем сделки на чистоту', // ← укоротили
    gradient1: 'rgba(26, 58, 107, 0.5)',
    gradient2: 'rgba(26, 58, 107, 0.2)',
    stats: '1500+ сделок',
    image: '/images/team/nedvizhimost.webp',
    alt: 'Юрист по недвижимости',
  },
  {
    name: 'Банкротство',
    vocation: 'Физ. и юр. лиц',
    fullText: 'Помогаем начать с чистого листа',
    gradient1: 'rgba(201, 168, 76, 0.4)',
    gradient2: 'rgba(201, 168, 76, 0.2)',
    stats: '300+ процедур',
    image: '/images/team/bankrotstvo.webp',
    alt: 'Юрист по банкротству',
  },
];

export function TeamSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="team"
      className={styles.team} 
      aria-labelledby="team-title"
    >
      <div className="container">
        <h2 id="team-title" className="section-title">Наши направления</h2>
        <div 
          className={styles.grid}
          role="list"
          aria-label="Список направлений юридических услуг"
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={styles.card}
              style={{
                '--card-gradient-1': member.gradient1,
                '--card-gradient-2': member.gradient2,
              } as React.CSSProperties}
              role="listitem"
              aria-label={`Направление: ${member.name}`}
            >
              <div className={styles.cardGlow} aria-hidden="true"></div>
              
              {/* ФОТО — фоном */}
              <div className={styles.imageWrapper} aria-hidden="true">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className={styles.photo}
                  loading="lazy"
                  quality={90}
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                />
              </div>
              
              {/* ОБЛАЧКО */}
              <TypingCloud fullText={member.fullText} />
              
              {/* ТЕКСТ поверх фото */}
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.vocation}>{member.vocation}</p>
              
              {member.stats && (
                <div className={styles.stats} aria-label={`Статистика: ${member.stats}`}>
                  {member.stats}
                </div>
              )}
            </div>
          ))}
          
          <div 
            className={`${styles.card} ${styles.cardBlack}`}
            role="listitem"
            aria-label="В команде более 20 юристов"
          >
            <div className={styles.cardBlackContent}>
              <div className={styles.cardBlackNumber} aria-hidden="true">20+</div>
              <div className={styles.cardBlackText}>Юристов в команде</div>
              <div className={styles.cardBlackSubtext}>Каждый — эксперт</div>
              <div className={styles.cardBlackEmoji} aria-hidden="true">⭐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
