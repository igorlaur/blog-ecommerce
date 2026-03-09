import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-xs">E</div>
          <span className="text-white font-bold text-sm">Escala Ecommerce <span className="text-orange-400">Blog</span></span>
        </div>
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} Escala Ecommerce. Todos os direitos reservados.</p>
        <Link href="https://consultoria-ecommerce.vercel.app" target="_blank" className="text-sm hover:text-orange-400 transition">
          Ver consultoria →
        </Link>
      </div>
    </footer>
  );
}
