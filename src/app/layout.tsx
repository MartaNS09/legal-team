import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StructuredData } from '@/components/StructuredData';
import '@/styles/globals.scss';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://legal-team.pro'),
  title: {
    default: 'Юридическая компания Legal Team | Профессиональные юридические услуги',
    template: '%s | Legal Team',
  },
  description: 'Юридические услуги в Москве: арбитраж, корпоративное право, налоги, семейное право. 15 лет опыта, 1000+ выигранных дел. Бесплатная консультация юриста онлайн 24/7.',
  keywords: 'юрист, адвокат, юридические услуги, арбитраж, налоговый юрист, семейный юрист, корпоративное право, юридическая консультация, бесплатная консультация юриста',
  authors: [{ name: 'Legal Team', url: 'https://legal-team.pro' }],
  creator: 'Legal Team',
  publisher: 'Legal Team',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Юридическая компания Legal Team | Профессиональные юридические услуги',
    description: '15 лет опыта, 1000+ выигранных дел. Бесплатная консультация юриста онлайн 24/7.',
    url: 'https://legal-team.pro',
    siteName: 'Legal Team',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Legal Team - Профессиональные юридические услуги',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юридическая компания Legal Team',
    description: '15 лет опыта, 1000+ выигранных дел. Бесплатная консультация юриста онлайн 24/7.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'ваш-код-верификации',
    yandex: 'ваш-код-верификации',
  },
  category: 'law',
  classification: 'Юридические услуги',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://legal-team.pro" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <a href="#main" className="skip-link" aria-label="Перейти к основному содержанию">
            Перейти к содержанию
          </a>
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
