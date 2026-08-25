'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedList.module.scss';

interface AnimatedListProps {
  items: string[];
  delay?: number;
}

export function AnimatedList({ items, delay = 100 }: AnimatedListProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < items.length) {
        setVisibleItems(prev => [...prev, currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [isVisible, items.length, delay]);

  return (
    <ul className={styles.list} ref={containerRef}>
      {items.map((item, index) => (
        <li 
          key={index}
          className={`${styles.item} ${visibleItems.includes(index) ? styles.visible : ''}`}
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          <span className={styles.icon}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
