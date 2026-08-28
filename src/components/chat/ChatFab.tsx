'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ChatFab() {
  const pathname = usePathname();

  if (pathname.startsWith('/chat')) return null;

  return (
    <Link href="/chat" className="chat-fab" aria-label="Открыть чат с юристом">
      <span className="chat-fab__icon" aria-hidden="true">
        💬
      </span>
      <span className="chat-fab__label">Чат</span>
    </Link>
  );
}
