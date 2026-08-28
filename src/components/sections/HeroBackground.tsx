const SLIDES = [
  {
    src: '/images/hero/home.jpg',
    mobileSrc: '/images/hero/home-mobile.jpg',
  },
  {
    src: '/images/hero/home-2.jpg',
    mobileSrc: '/images/hero/home-2-mobile.jpg',
  },
  {
    src: '/images/hero/home-3.jpg',
    mobileSrc: '/images/hero/home-3-mobile.jpg',
  },
] as const;

export function HeroBackground() {
  return (
    <div className="hero__bg" aria-hidden="true">
      <div className="hero__bg-slides">
        {SLIDES.map((slide, index) => (
          <picture
            key={slide.src}
            className={`hero__bg-picture hero__bg-picture--${index + 1}`}
          >
            <source media="(max-width: 992px)" srcSet={slide.mobileSrc} />
            <img
              src={slide.src}
              alt=""
              className="hero__bg-image"
              fetchPriority={index === 0 ? 'high' : 'low'}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </picture>
        ))}
      </div>
      <div className="hero__bg-overlay" />
    </div>
  );
}
