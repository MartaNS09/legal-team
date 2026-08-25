'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from './AnimatedCard.module.scss';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

export function AnimatedCard({ 
  children, 
  delay = 0, 
  direction = 'left',
  className = '' 
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const directionClass = {
    left: styles.fromLeft,
    right: styles.fromRight,
    top: styles.fromTop,
    bottom: styles.fromBottom,
  }[direction];

  return (
    <div 
      ref={ref} 
      className={`${styles.card} ${isVisible ? styles.visible : ''} ${directionClass} ${className}`}
    >
      {children}
    </div>
  );
}
