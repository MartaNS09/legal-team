import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Добавляем явные пути для страниц
  async rewrites() {
    return [
      {
        source: '/o-nas',
        destination: '/o-nas',
      },
      {
        source: '/kontakty',
        destination: '/kontakty',
      },
    ];
  },
};

export default nextConfig;
