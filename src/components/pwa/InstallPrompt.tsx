'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const DISMISS_KEY = 'legal-team-pwa-install-dismissed';
const LEGACY_DISMISS_KEY = 'legal-team-pwa-install-dismissed';
const SHOW_DELAY_MS = 2000;

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

function isStandaloneMode(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator && (navigator as Navigator & { standalone?: boolean }).standalone === true)
  );
}

function isIosDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
}

function isDismissedThisSession(): boolean {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

function setDismissedThisSession(): void {
  try {
    sessionStorage.setItem(DISMISS_KEY, '1');
  } catch {
    // ignore
  }
}

export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    if (isStandaloneMode()) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setCanInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = useCallback(async () => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setCanInstall(false);
    return outcome === 'accepted';
  }, [deferredPrompt]);

  return {
    canInstall: canInstall && !!deferredPrompt,
    isIos: isIosDevice(),
    isStandalone: isStandaloneMode(),
    install,
  };
}

export function InstallPrompt() {
  const pathname = usePathname();
  const { canInstall, isIos, isStandalone, install } = usePwaInstall();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      localStorage.removeItem(LEGACY_DISMISS_KEY);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (isStandalone) return;

    setVisible(false);

    if (isDismissedThisSession()) return;

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, SHOW_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [isStandalone, pathname]);

  useEffect(() => {
    const open = () => {
      if (!isStandalone) setVisible(true);
    };
    window.addEventListener('legal-team:show-install', open);
    return () => window.removeEventListener('legal-team:show-install', open);
  }, [isStandalone]);

  const dismiss = () => {
    setDismissedThisSession();
    setVisible(false);
  };

  const handleInstall = async () => {
    if (canInstall) {
      const accepted = await install();
      if (accepted) dismiss();
      return;
    }
    dismiss();
  };

  const getDescription = () => {
    if (isIos) {
      return 'Нажмите «Поделиться» ⎙ внизу Safari → «На экран Домой» — приложение появится на главном экране iPhone.';
    }
    if (canInstall) {
      return 'Добавьте Legal Team на главный экран — чат с юристом и консультации всегда под рукой.';
    }
    return 'Chrome / Edge: меню ⋮ → «Установить приложение». Safari на Mac: «Файл» → «Добавить в Dock».';
  };

  const primaryLabel = canInstall ? 'Установить' : isIos ? 'Понятно' : 'Как установить';

  if (!visible || isStandalone) return null;

  return (
    <div className="pwa-install" role="dialog" aria-labelledby="pwa-install-title">
      <div className="pwa-install__glow" aria-hidden="true" />
      <div className="pwa-install__content">
        <div className="pwa-install__icon-wrap" aria-hidden="true">
          ⚖️
        </div>
        <div className="pwa-install__text">
          <span className="pwa-install__badge">Приложение</span>
          <p id="pwa-install-title" className="pwa-install__title">
            Установить Legal Team
          </p>
          <p className="pwa-install__desc">{getDescription()}</p>
        </div>
      </div>
      <div className="pwa-install__actions">
        <button
          type="button"
          className="pwa-install__btn pwa-install__btn--primary"
          onClick={handleInstall}
        >
          {primaryLabel}
        </button>
        <button type="button" className="pwa-install__btn" onClick={dismiss}>
          Не сейчас
        </button>
      </div>
    </div>
  );
}

export function InstallAppLink({ className = '' }: { className?: string }) {
  const { isStandalone } = usePwaInstall();

  if (isStandalone) return null;

  const showPrompt = () => {
    try {
      sessionStorage.removeItem(DISMISS_KEY);
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent('legal-team:show-install'));
  };

  return (
    <button type="button" className={`pwa-install-link ${className}`} onClick={showPrompt}>
      <span aria-hidden="true">📲</span> Установить приложение
    </button>
  );
}
