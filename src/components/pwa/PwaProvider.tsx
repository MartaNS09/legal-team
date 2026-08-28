'use client';

import { useEffect, useState } from 'react';
import { InstallPrompt } from './InstallPrompt';

export function PwaProvider() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    const register = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none',
        });

        registration.addEventListener('updatefound', () => {
          const worker = registration.installing;
          if (!worker) return;

          worker.addEventListener('statechange', () => {
            if (worker.state === 'installed' && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
            }
          });
        });
      } catch {
        // SW registration failed — app still works online
      }
    };

    register();
  }, []);

  const applyUpdate = () => {
    navigator.serviceWorker.ready.then((registration) => {
      registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
      setUpdateAvailable(false);
      window.location.reload();
    });
  };

  return (
    <>
      <InstallPrompt />
      {updateAvailable && (
        <div className="pwa-update" role="status">
          <p className="pwa-update__text">Доступна новая версия приложения</p>
          <button type="button" className="pwa-update__btn" onClick={applyUpdate}>
            Обновить
          </button>
        </div>
      )}
    </>
  );
}
