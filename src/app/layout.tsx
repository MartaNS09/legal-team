import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StructuredData } from '@/components/StructuredData';
import { PwaProvider } from '@/components/pwa/PwaProvider';
import { ChatFab } from '@/components/chat/ChatFab';
import { SITE, buildOpenGraph, buildTwitter } from '@/lib/seo';
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
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Юридическая компания Legal Team | Профессиональные юридические услуги в Москве',
    template: '%s | Legal Team',
  },
  description: SITE.description,
  keywords: [
    'юрист',
    'адвокат',
    'юридические услуги',
    'арбитраж',
    'налоговый юрист',
    'семейный юрист',
    'корпоративное право',
    'юридическая консультация',
    'бесплатная консультация юриста',
    'юрист Москва',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: SITE.name,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
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
  openGraph: buildOpenGraph({
    title: `${SITE.legalName} | Профессиональные юридические услуги`,
    description:
      '15 лет опыта, 1000+ выигранных дел, рейтинг 4.9. Бесплатная консультация юриста 24/7.',
    path: '/',
  }),
  twitter: buildTwitter({
    title: SITE.legalName,
    description:
      '15 лет опыта, 1000+ выигранных дел. Бесплатная консультация юриста онлайн 24/7.',
  }),
  alternates: {
    canonical: SITE.url,
    languages: {
      'ru-RU': SITE.url,
    },
  },
  manifest: '/site.webmanifest',
  category: 'law',
  classification: 'Юридические услуги',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Legal Team',
  },
  icons: {
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable}`}>
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Перейти к основному содержанию
          </a>
          <StructuredData />
          <PwaProvider />
          <ChatFab />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
