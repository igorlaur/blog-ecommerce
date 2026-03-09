'use client';
import { useState } from 'react';
import type { FAQ } from '@/lib/posts';

interface Props {
  items: FAQ[];
}

export default function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-extrabold text-gray-900 mb-4">Perguntas Frequentes</h2>
      <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
        {items.map((item, i) => (
          <div key={i}>
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-900 font-semibold text-sm hover:bg-gray-50 transition"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.question}</span>
              <span
                className={`ml-4 flex-shrink-0 text-orange-500 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-gray-50">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
