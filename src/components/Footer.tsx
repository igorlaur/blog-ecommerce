import Link from 'next/link';

const CATEGORIES = [
  { label: 'Mercado Livre', slug: 'mercado-livre' },
  { label: 'Shopee', slug: 'shopee' },
  { label: 'Estratégia', slug: 'estrategia' },
  { label: 'Tráfego Pago', slug: 'trafego-pago' },
  { label: 'Nicho Black', slug: 'nicho-black' },
];

const SERVICES = [
  { label: 'Consultoria de E-commerce', href: '/consultoria' },
  { label: 'Consultoria Mercado Livre', href: '/blog/consultoria-mercado-livre' },
  { label: 'Consultoria Shopee', href: '/blog/consultoria-shopee' },
  { label: 'Consultoria Marketplace', href: '/blog/consultoria-marketplace' },
  { label: 'Agendar consultoria', href: 'https://wa.me/5511999999999' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-14 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-sm">E</div>
              <span className="text-white font-bold">Escala <span className="text-orange-400">Digital</span></span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Consultoria especializada em e-commerce e marketplaces. +R$5M em vendas, 3.000+ SKUs e operação em 9 plataformas.
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Categorias</h3>
            <ul className="space-y-2">
              {CATEGORIES.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/blog/categoria/${cat.slug}`} className="text-sm hover:text-orange-400 transition">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Consultoria</h3>
            <ul className="space-y-2">
              {SERVICES.map(s => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm hover:text-orange-400 transition"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Contato</h3>
            <p className="text-xs text-gray-500 mb-4">
              Pronto para escalar seu e-commerce? Agende uma consultoria estratégica.
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Escala Digital. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/blog" className="hover:text-orange-400 transition">Blog</Link>
            <Link href="/consultoria" className="hover:text-orange-400 transition">Consultoria</Link>
            <Link href="/contato" className="hover:text-orange-400 transition">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
