import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Нет подключения',
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <main className="offline-page" id="main">
      <div className="offline-page__inner">
        <span className="offline-page__icon" aria-hidden="true">
          📡
        </span>
        <h1 className="offline-page__title">Нет подключения к интернету</h1>
        <p className="offline-page__text">
          Проверьте сеть и попробуйте снова. Часть страниц может быть доступна офлайн после
          установки приложения.
        </p>
        <div className="offline-page__actions">
          <Link href="/" className="button button--primary">
            На главную
          </Link>
          <Link href="/chat" className="button button--outline">
            Открыть чат
          </Link>
        </div>
      </div>
    </main>
  );
}
