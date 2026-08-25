'use client';

import { useState, useEffect, useRef } from 'react';

interface TypingPlaceholderProps {
  text: string;
  speed?: number;
  delay?: number;
}

export function TypingPlaceholder({ text, speed = 30, delay = 1000 }: TypingPlaceholderProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isFocused) {
      setDisplayText('');
      setIsTyping(false);
      return;
    }

    let index = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
        timeout = setTimeout(type, speed);
      } else {
        // После завершения сброс через паузу
        timeout = setTimeout(() => {
          index = 0;
          setDisplayText('');
          type();
        }, delay);
      }
    };

    const initialDelay = setTimeout(type, 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, speed, delay, isFocused]);

  return (
    <textarea
      ref={inputRef}
      className="typing-placeholder"
      placeholder={displayText}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsFocused(false);
        if (!inputRef.current?.value) {
          setIsTyping(true);
        }
      }}
    />
  );
}
