'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Accordion.module.scss';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export function Accordion({ items, defaultOpen }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ?? null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
          index={index}
        />
      ))}
    </div>
  );
}

interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function AccordionItem({ item, isOpen, onClick, index }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.header}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        id={`accordion-header-${index}`}
      >
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
        <span className={styles.question}>{item.question}</span>
      </button>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ maxHeight: height > 0 ? `${height}px` : '0px' }}
        id={`accordion-content-${index}`}
        role="region"
        aria-labelledby={`accordion-header-${index}`}
      >
        <div className={styles.answer}>{item.answer}</div>
      </div>
    </div>
  );
}
