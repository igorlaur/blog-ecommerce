'use client';
import { useState, useEffect } from 'react';

export default function StickySchedule() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600 && !dismissed) setVisible(true);
      else if (window.scrollY <= 600) setVisible(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div
      role="complementary"
      aria-label="Agendar consultoria"
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 px-4 py-3 flex items-center justify-between gap-4 shadow-2xl"
    >
      <p className="text-white text-sm font-semibold hidden sm:block">
        🚀 Pronto para escalar seu e-commerce?
      </p>
      <p className="text-white text-sm font-semibold sm:hidden">Consultoria disponível</p>
      <div className="flex items-center gap-3 flex-shrink-0">
        <a
          href="https://wa.me/5511952286097?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2 rounded-lg transition whitespace-nowrap"
        >
          Agendar agora
        </a>
        <button
          onClick={() => { setDismissed(true); setVisible(false); }}
          aria-label="Fechar banner"
          className="text-gray-400 hover:text-white transition text-lg leading-none flex-shrink-0"
        >
          ×
        </button>
      </div>
    </div>
  );
}