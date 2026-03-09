'use client';
import { useEffect, useState } from 'react';
import type { TocItem } from '@/lib/posts';

interface Props {
  items: TocItem[];
}

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );

    items.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Índice do artigo" className="bg-gray-50 rounded-xl border border-gray-100 p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Índice do conteúdo</p>
      <ol className="space-y-1.5">
        {items.map(item => (
          <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${item.id}`}
              onClick={e => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`text-sm leading-snug transition-colors block py-0.5 ${
                activeId === item.id
                  ? 'text-orange-500 font-semibold'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
