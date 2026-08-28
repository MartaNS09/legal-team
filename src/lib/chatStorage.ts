import type { ChatMessage } from '@/data/chatRooms';

const STORAGE_PREFIX = 'legal-team-chat-';

export function loadMessages(roomId: string): ChatMessage[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${roomId}`);
    return raw ? (JSON.parse(raw) as ChatMessage[]) : [];
  } catch {
    return [];
  }
}

export function saveMessages(roomId: string, messages: ChatMessage[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${roomId}`, JSON.stringify(messages));
  } catch {
    // ignore quota errors
  }
}

export function createMessage(role: ChatMessage['role'], text: string): ChatMessage {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
    timestamp: new Date().toISOString(),
  };
}

export function clearMessages(roomId: string): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(`${STORAGE_PREFIX}${roomId}`);
}
