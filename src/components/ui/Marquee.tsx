'use client';

import { useEffect, useRef } from 'react';
import styles from './Marquee.module.scss';

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
}

export function Marquee({ text, speed = 30, className = '' }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    let animationId: number;
    let position = container.offsetWidth;

    const animate = () => {
      position -= 0.8;
      if (position <= -textEl.offsetWidth) {
        position = container.offsetWidth;
      }
      textEl.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    const clone = textEl.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [text]);

  return (
    <div className={`${styles.marquee} ${className}`} ref={containerRef}>
      <div className={styles.marquee__text} ref={textRef}>
        {text}
      </div>
    </div>
  );
}
