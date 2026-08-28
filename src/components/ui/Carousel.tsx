'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';
import styles from './Carousel.module.scss';

interface CarouselProps {
  children: ReactNode[];
  ariaLabel: string;
  showDots?: boolean;
  className?: string;
}

export function Carousel({
  children,
  ariaLabel,
  showDots = true,
  className = '',
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const slideWidth = track.offsetWidth * 0.85 + 16;
      const index = Math.round(track.scrollLeft / slideWidth);
      setActiveIndex(Math.min(index, children.length - 1));
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [children.length]);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.offsetWidth * 0.85 + 16;
    track.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
  };

  if (children.length === 0) return null;

  return (
    <div className={`${styles.carousel} ${className}`}>
      <div
        ref={trackRef}
        className={styles.carousel__track}
        role="region"
        aria-label={ariaLabel}
        aria-roledescription="carousel"
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={styles.carousel__slide}
            aria-roledescription="slide"
            aria-label={`${index + 1} из ${children.length}`}
          >
            {child}
          </div>
        ))}
      </div>

      {showDots && children.length > 1 && (
        <div className={styles.carousel__dots} role="tablist" aria-label="Навигация карусели">
          {children.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              className={`${styles.carousel__dot} ${activeIndex === index ? styles['carousel__dot--active'] : ''}`}
              aria-label={`Слайд ${index + 1}`}
              aria-selected={activeIndex === index}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
