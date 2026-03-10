'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Resultados', href: '/#resultados' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Escala Ecommerce">
          <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-lg">
            E
          </div>
          <span className="font-bold text-lg text-gray-900 tracking-tight">
            Escala <span className="text-orange-500">Ecommerce</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600" aria-label="Navegação principal">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-orange-500 transition">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/5511952286097"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-lg hover:bg-orange-600 transition text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Agendar Consultoria
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-orange-400"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
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
            href="https://wa.me/5511952286097"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-5 py-3 rounded-lg text-center font-semibold hover:bg-orange-600 transition mt-2"
          >
            Agendar Consultoria
          </a>
        </div>
      )}
    </header>
  );
}