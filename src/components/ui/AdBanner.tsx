'use client';

import { useState, useEffect } from 'react';

interface AdBannerProps {
  title: string;
  subtitle: string;
  className?: string;
  variant?: 'default' | 'blink' | 'pulse' | 'neon';
  icon?: string;
}

export function AdBanner({ 
  title, 
  subtitle, 
  className = '', 
  variant = 'default',
  icon = '📢'
}: AdBannerProps) {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    if (variant === 'blink') {
      const interval = setInterval(() => {
        setIsBlinking(prev => !prev);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [variant]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'blink':
        return {
          border: isBlinking ? '3px solid var(--secondary)' : '3px dashed var(--gray)',
          boxShadow: isBlinking ? '0 0 30px rgba(201, 168, 76, 0.2)' : 'none',
          transition: 'all 0.3s ease',
          transform: isBlinking ? 'scale(1.01)' : 'scale(1)',
        };
      case 'pulse':
        return {
          animation: 'adPulse 2s ease-in-out infinite',
        };
      case 'neon':
        return {
          border: '2px solid var(--secondary)',
          boxShadow: '0 0 40px rgba(201, 168, 76, 0.15), inset 0 0 40px rgba(201, 168, 76, 0.05)',
          animation: 'adNeon 2s ease-in-out infinite',
        };
      default:
        return {
          border: '2px dashed var(--gray)',
        };
    }
  };

  return (
    <>
      <div 
        className={`ad-banner ${className}`}
        style={{
          padding: '1.5rem 2rem',
          background: 'linear-gradient(135deg, var(--gray-light), var(--background))',
          borderRadius: '20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          border: '2px dashed var(--gray)',
          transition: 'all 0.3s ease',
          ...getVariantStyles(),
        }}
      >
        {/* Фоновое свечение */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
          opacity: 0.04,
          animation: 'adFloat 6s ease-in-out infinite',
        }}></div>

        {/* Иконка */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        }}>
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.2rem' }}>
            {icon}
          </span>
          <span style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--secondary)',
            fontWeight: '700',
          }}>
            Реклама
          </span>
        </div>
        
        <h3 style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: '1.3rem', 
          color: 'var(--foreground)', 
          marginBottom: '0.2rem',
          position: 'relative',
          zIndex: 1,
        }}>
          {title}
        </h3>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '0.9rem',
          position: 'relative',
          zIndex: 1,
        }}>
          {subtitle}
        </p>

        {/* Мигающий уголок */}
        {variant === 'blink' && (
          <div style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '8px',
            height: '8px',
            background: 'var(--secondary)',
            borderRadius: '50%',
            animation: 'adBlink 1s ease-in-out infinite',
          }}></div>
        )}
      </div>

      <style>{`
        @keyframes adPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes adNeon {
          0%, 100% { 
            box-shadow: 0 0 40px rgba(201, 168, 76, 0.15), inset 0 0 40px rgba(201, 168, 76, 0.05);
          }
          50% { 
            box-shadow: 0 0 60px rgba(201, 168, 76, 0.25), inset 0 0 60px rgba(201, 168, 76, 0.1);
          }
        }
        @keyframes adFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, -20px) scale(1.2); }
        }
        @keyframes adBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
