import Image from 'next/image';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/Breadcrumbs';
import type { ReactNode } from 'react';

interface PageHeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: string;
  actions?: ReactNode;
  variant?: 'default' | 'compact';
  id?: string;
}

export function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  breadcrumbs,
  badge,
  actions,
  variant = 'default',
  id,
}: PageHeroProps) {
  return (
    <section
      className={`page-hero page-hero--${variant}`}
      aria-labelledby={id}
    >
      <div className="page-hero__media" aria-hidden="true">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="page-hero__image"
        />
        <div className="page-hero__overlay" />
      </div>

      <div className="container page-hero__inner">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} />
        )}
        {badge && <p className="page-hero__badge">{badge}</p>}
        <h1 id={id} className="page-hero__title">
          {title}
        </h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {actions && <div className="page-hero__actions">{actions}</div>}
      </div>
    </section>
  );
}
