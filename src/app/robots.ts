import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/not-found'],
      },
    ],
    sitemap: 'https://legal-team.pro/sitemap.xml',
    host: 'https://legal-team.pro',
  };
}
