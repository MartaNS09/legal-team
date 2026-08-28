'use client';

import styles from './Marquee.module.scss';

interface MarqueeProps {
  text: string;
  /** Длительность одного полного цикла в секундах */
  speed?: number;
  className?: string;
}

export function Marquee({ text, speed = 35, className = '' }: MarqueeProps) {
  return (
    <div
      className={`${styles.marquee} ${className}`}
      role="marquee"
      aria-label={text}
    >
      <div
        className={styles.marquee__track}
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
        aria-hidden="true"
      >
        <span className={styles.marquee__text}>{text}</span>
        <span className={styles.marquee__text}>{text}</span>
      </div>
      <p className="visually-hidden">{text}</p>
    </div>
  );
}
