'use client';

import { useEffect, useState } from 'react';
import styles from './Marquee.module.scss';

interface MarqueeProps {
  text: string;
  /** Длительность одного полного цикла в секундах */
  speed?: number;
  className?: string;
}

const MOBILE_MQ = '(max-width: 768px)';
const SCROLL_THRESHOLD = 20;

export function Marquee({ text, speed = 35, className = '' }: MarqueeProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);

    const applyMarqueeOffset = (isHidden: boolean, isMobile: boolean) => {
      if (isMobile && isHidden) {
        document.documentElement.style.setProperty('--marquee-height', '0px');
        document.documentElement.classList.add('marquee-hidden');
      } else {
        document.documentElement.style.removeProperty('--marquee-height');
        document.documentElement.classList.remove('marquee-hidden');
      }
    };

    const handleScroll = () => {
      const isMobile = mq.matches;
      const shouldHide = isMobile && window.scrollY > SCROLL_THRESHOLD;
      setHidden(shouldHide);
      applyMarqueeOffset(shouldHide, isMobile);
    };

    const handleResize = () => {
      handleScroll();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    mq.addEventListener('change', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mq.removeEventListener('change', handleResize);
      document.documentElement.style.removeProperty('--marquee-height');
      document.documentElement.classList.remove('marquee-hidden');
    };
  }, []);

  return (
    <div
      className={`${styles.marquee} ${hidden ? styles['marquee--hidden'] : ''} ${className}`}
      role="marquee"
      aria-label={text}
      aria-hidden={hidden}
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
