'use client';
import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Artigos', href: '/blog' },
  { label: 'Mercado Livre', href: '/blog/categoria/mercado-livre' },
  { label: 'Shopee', href: '/blog/categoria/shopee' },
  { label: 'Estratégia', href: '/blog/categoria/estrategia' },
  { label: 'Consultoria', href: '/consultoria' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-sm">
            E
          </div>
          <span className="font-bold text-gray-900">
            Escala <span className="text-orange-500">Digital</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-600">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-orange-500 transition">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition text-sm font-semibold"
        >
          Agendar consultoria
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-transform origin-center ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 my-1 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-transform origin-center ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 text-sm font-medium">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-orange-500 transition py-1"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-3 rounded-lg text-center font-semibold mt-2"
          >
            Agendar consultoria
          </a>
        </div>
      )}
    </header>
  );
}
