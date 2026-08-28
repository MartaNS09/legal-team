import Image from 'next/image';
import { getServiceCardImage } from '@/data/serviceImages';

interface ServiceCardImageProps {
  slug: string;
  title: string;
  priority?: boolean;
}

export function ServiceCardImage({ slug, title, priority = false }: ServiceCardImageProps) {
  return (
    <div className="service-card-image">
      <Image
        src={getServiceCardImage(slug)}
        alt=""
        fill
        sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 320px"
        className="service-card-image__img"
        priority={priority}
        quality={85}
      />
      <div className="service-card-image__overlay" aria-hidden="true" />
      <span className="visually-hidden">{title}</span>
    </div>
  );
}
