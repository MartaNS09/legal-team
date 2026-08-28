'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import type { ChatRoom } from '@/data/chatRooms';
import { getBotReply, getTypingDelay } from '@/lib/chatBot';
import {
  loadMessages,
  saveMessages,
  createMessage,
  clearMessages,
} from '@/lib/chatStorage';
import type { ChatMessage } from '@/data/chatRooms';

interface ChatWindowProps {
  room: ChatRoom;
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function ChatWindow({ room }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const stored = loadMessages(room.id);
    if (stored.length === 0) {
      const welcome = createMessage('assistant', room.welcomeMessage);
      setMessages([welcome]);
      saveMessages(room.id, [welcome]);
    } else {
      setMessages(stored);
    }
    setHydrated(true);
  }, [room.id, room.welcomeMessage]);

  useEffect(() => {
    if (!hydrated) return;
    saveMessages(room.id, messages);
  }, [messages, room.id, hydrated]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      const userMsg = createMessage('user', trimmed);
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setIsTyping(true);

      const replyText = getBotReply(trimmed, room);
      await new Promise((r) => setTimeout(r, getTypingDelay(replyText)));

      const botMsg = createMessage('assistant', replyText);
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    },
    [isTyping, room]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = (topic: string) => {
    sendMessage(`Подскажите по теме: ${topic}`);
  };

  const handleReset = () => {
    clearMessages(room.id);
    const welcome = createMessage('assistant', room.welcomeMessage);
    setMessages([welcome]);
    saveMessages(room.id, [welcome]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  if (!hydrated) {
    return (
      <div className="chat-window chat-window--loading" aria-busy="true">
        <p className="chat-window__loading-text">Загрузка чата…</p>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <header className="chat-window__header">
        <div className="chat-window__lawyer">
          <span className="chat-window__avatar" aria-hidden="true">
            {room.icon}
          </span>
          <div>
            <div className="chat-window__lawyer-name">{room.lawyerName}</div>
            <div className="chat-window__lawyer-role">
              {room.lawyerRole}
              <span className="chat-window__online" aria-label="Онлайн"> · онлайн</span>
            </div>
          </div>
        </div>
        <div className="chat-window__actions">
          <button
            type="button"
            className="chat-window__reset"
            onClick={handleReset}
            aria-label="Начать чат заново"
          >
            ↺
          </button>
        </div>
      </header>

      <div
        ref={listRef}
        className="chat-window__messages"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
        aria-label="Сообщения чата"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-window__message chat-window__message--${msg.role}`}
          >
            <div className="chat-window__bubble">
              <p>{msg.text}</p>
              <time className="chat-window__time" dateTime={msg.timestamp}>
                {formatTime(msg.timestamp)}
              </time>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-window__message chat-window__message--assistant" aria-label="Юрист печатает">
            <div className="chat-window__bubble chat-window__bubble--typing">
              <span className="chat-window__dots" aria-hidden="true">
                <span /><span /><span />
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="chat-window__quick" role="group" aria-label="Быстрые темы">
        {room.topics.map((topic) => (
          <button
            key={topic}
            type="button"
            className="chat-window__quick-btn"
            onClick={() => handleQuickReply(topic)}
            disabled={isTyping}
          >
            {topic}
          </button>
        ))}
      </div>

      <form className="chat-window__form" onSubmit={handleSubmit}>
        <label htmlFor="chat-input" className="visually-hidden">
          Ваше сообщение
        </label>
        <textarea
          id="chat-input"
          ref={inputRef}
          className="chat-window__input"
          rows={2}
          placeholder="Опишите ваш вопрос…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isTyping}
          maxLength={2000}
        />
        <button
          type="submit"
          className="chat-window__send"
          disabled={!input.trim() || isTyping}
          aria-label="Отправить сообщение"
        >
          ➤
        </button>
      </form>

      <p className="chat-window__disclaimer">
        Тестовый чат · ответы автоматические ·{' '}
        <Link href="/kontakty#consult">Запись к юристу</Link>
      </p>
    </div>
  );
}
