'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './TypingCloud.module.scss';

interface TypingCloudProps {
  fullText: string;
}

export function TypingCloud({ fullText }: TypingCloudProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const cloudRef = useRef<HTMLDivElement>(null);

  // Разбиваем текст на строки по 2 слова
  const formatTextForCloud = (text: string) => {
    const words = text.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i += 2) {
      result.push(words.slice(i, i + 2).join(' '));
    }
    return result.join('<br/>');
  };

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting) {
        setDisplayText(fullText.slice(0, index));
        index++;
        
        if (index > fullText.length) {
          setIsComplete(true);
          timeoutId = setTimeout(() => {
            isDeleting = true;
            setIsComplete(false);
            timeoutId = setTimeout(type, 40);
          }, 2500);
          return;
        }
        
        timeoutId = setTimeout(type, 40 + Math.random() * 30);
      } else {
        setDisplayText(fullText.slice(0, index));
        index--;
        
        if (index < 0) {
          isDeleting = false;
          index = 0;
          timeoutId = setTimeout(type, 500);
          return;
        }
        
        timeoutId = setTimeout(type, 20 + Math.random() * 20);
      }
    };

    timeoutId = setTimeout(type, 300);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fullText]);

  // Форматируем текст с переносами по 2 слова
  const formattedText = formatTextForCloud(displayText);

  return (
    <div className={styles.cloud} ref={cloudRef}>
      <div 
        className={styles.cloudText}
        dangerouslySetInnerHTML={{ __html: formattedText || '&nbsp;' }}
      />
      <span className={`${styles.cursor} ${isComplete ? styles.blink : ''}`}>|</span>
    </div>
  );
}
