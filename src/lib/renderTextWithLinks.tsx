import Link from 'next/link';
import type { ReactNode } from 'react';

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderTextWithLinks(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const regex = new RegExp(LINK_PATTERN.source, 'g');
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link key={key} href={match[2]} className="article-page__inline-link">
        {match[1]}
      </Link>
    );
    key += 1;
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
