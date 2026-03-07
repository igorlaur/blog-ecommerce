'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-sm">E</div>
          <span className="font-bold text-gray-900">Escala <span className="text-orange-500">Digital</span> <span className="text-gray-400 font-normal text-sm">Blog</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-orange-500 transition">Artigos</Link>
          <Link href="https://consultoria-ecommerce.vercel.app" target="_blank" className="hover:text-orange-500 transition">Consultoria</Link>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition text-sm font-semibold">
            Falar no WhatsApp
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Artigos</Link>
          <Link href="https://consultoria-ecommerce.vercel.app" target="_blank">Consultoria</Link>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center font-semibold">Falar no WhatsApp</a>
        </div>
      )}
    </header>
  );
}
