'use client';

import { useEffect } from 'react';

const MOBILE_MQ = '(max-width: 768px)';
const TOP_THRESHOLD = 8;
const HIDE_AFTER = 48;
const DELTA = 6;

function getScrollY(): number {
  return (
    window.scrollY ??
    window.pageYOffset ??
    document.documentElement.scrollTop ??
    document.body.scrollTop ??
    0
  );
}

export function MobileScrollChrome() {
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    let lastY = getScrollY();
    let ticking = false;

    const resetClasses = () => {
      document.documentElement.classList.remove('at-top', 'marquee-hidden', 'chrome-hidden');
      document.documentElement.style.removeProperty('--marquee-height');
    };

    const update = () => {
      ticking = false;

      if (!mq.matches) {
        resetClasses();
        return;
      }

      const y = getScrollY();
      const delta = y - lastY;
      const atTop = y <= TOP_THRESHOLD;

      document.documentElement.classList.toggle('at-top', atTop);

      if (atTop) {
        document.documentElement.classList.remove('marquee-hidden', 'chrome-hidden');
        document.documentElement.style.removeProperty('--marquee-height');
      } else {
        document.documentElement.classList.add('marquee-hidden');
        document.documentElement.style.setProperty('--marquee-height', '0px');

        const menuOpen = document.documentElement.classList.contains('menu-open');

        if (!menuOpen && delta > DELTA && y > HIDE_AFTER) {
          document.documentElement.classList.add('chrome-hidden');
        } else if (delta < -DELTA || menuOpen) {
          document.documentElement.classList.remove('chrome-hidden');
        }
      }

      lastY = y;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const onResize = () => {
      lastY = getScrollY();
      update();
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.visualViewport?.addEventListener('scroll', onScroll);
    mq.addEventListener('change', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll, { capture: true });
      window.visualViewport?.removeEventListener('scroll', onScroll);
      mq.removeEventListener('change', onResize);
      resetClasses();
    };
  }, []);

  return null;
}
