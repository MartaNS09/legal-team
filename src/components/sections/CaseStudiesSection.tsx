'use client';

import { useState } from 'react';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';

export function CaseStudiesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="cases" className="case-studies" aria-labelledby="cases-title">
      <div className="container">
        <h2 id="cases-title" className="section-title">
          Выигранные дела
        </h2>
        <p className="case-studies__subtitle">
          Реальные истории клиентов Legal Team: как наши юристы добились результата в суде и
          досудебном порядке
        </p>

        <div className="case-studies__grid">
          {caseStudies.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <article
                key={item.id}
                className={`case-studies__card ${isExpanded ? 'case-studies__card--expanded' : ''}`}
                aria-labelledby={`case-title-${item.id}`}
              >
                <div className={`case-studies__media ${isExpanded ? 'case-studies__media--playing' : ''}`}>
                  <Image
                    src={item.poster}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="case-studies__poster"
                  />
                  <button
                    type="button"
                    className="case-studies__play"
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`case-body-${item.id}`}
                    aria-label={
                      isExpanded
                        ? `Свернуть историю дела: ${item.title}`
                        : `Читать историю дела: ${item.title}`
                    }
                  >
                    <span aria-hidden="true">{isExpanded ? '✕' : '▶'}</span>
                  </button>
                  <span className="case-studies__category">{item.category}</span>
                </div>

                <div id={`case-body-${item.id}`} className="case-studies__body">
                  <h3 id={`case-title-${item.id}`} className="case-studies__title">
                    {item.title}
                  </h3>
                  <p className="case-studies__summary">{item.summary}</p>

                  {isExpanded && (
                    <div className="case-studies__details">
                      <ol className="case-studies__steps" aria-label="Этапы работы юристов">
                        {item.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>

                      <p className="case-studies__result">
                        <strong>Результат:</strong> {item.result}
                      </p>
                    </div>
                  )}

                  <footer className="case-studies__footer">
                    <span className="case-studies__duration">Срок: {item.duration}</span>
                    <span className="case-studies__lawyer">{item.lawyer}</span>
                  </footer>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
