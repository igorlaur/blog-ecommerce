import Link from 'next/link';

const CATEGORIES = [
  { label: 'Mercado Livre', slug: 'mercado-livre' },
  { label: 'Shopee', slug: 'shopee' },
  { label: 'Estratégia', slug: 'estrategia' },
  { label: 'Tráfego Pago', slug: 'trafego-pago' },
  { label: 'Nicho Black', slug: 'nicho-black' },
];

const SERVICES = [
  { label: 'Consultoria de E-commerce', href: '/#servicos' },
  { label: 'Consultoria Mercado Livre', href: '/blog/consultoria-mercado-livre' },
  { label: 'Consultoria Shopee', href: '/blog/consultoria-shopee' },
  { label: 'Consultoria Marketplace', href: '/blog/consultoria-marketplace' },
  { label: 'Agendar consultoria', href: 'https://wa.me/5511999999999' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-sm">E</div>
              <span className="font-bold text-white">Escala <span className="text-orange-400">Ecommerce</span></span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              Consultoria especializada em e-commerce e marketplaces. +R$5M em vendas, 3.000+ SKUs e operação em 9 plataformas.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg className="w-6 h-6 text-green-500 hover:text-green-400 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 2.042.613 3.938 1.664 5.527L2 22l4.473-1.664A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.657 0-3.22-.507-4.527-1.373l-.32-.21-2.66.988.988-2.66-.21-.32A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm3.93-6.29c-.17-.085-1.01-.497-1.166-.553-.156-.057-.27-.085-.384.085-.113.17-.44.553-.54.667-.099.113-.198.127-.368.042-.17-.085-.719-.265-1.37-.846-.507-.452-.85-1.01-.948-1.18-.099-.17-.011-.262.074-.347.076-.076.17-.198.255-.297.085-.099.113-.17.17-.283.057-.113.028-.212-.014-.297-.042-.085-.384-.927-.527-1.27-.14-.34-.283-.294-.384-.3-.099-.007-.212-.007-.326-.007-.113 0-.297.042-.454.198-.156.156-.595.582-.595 1.418 0 .836.609 1.645.694 1.76.085.113 1.2 1.84 2.91 2.5.407.14.724.224.973.287.408.099.78.07 1.074.042.327-.035 1.01-.413 1.153-.813.142-.4.142-.74.099-.813-.042-.07-.155-.113-.326-.198z"/>
                </svg>
              </a>
              <a href="https://instagram.com/discretta" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-6 h-6 text-pink-500 hover:text-pink-400 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.25.75a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Menu</h3>
            <ul className="space-y-2">
              {[
                { label: 'Serviços', href: '/#servicos' },
                { label: 'Resultados', href: '/#resultados' },
                { label: 'Sobre', href: '/#sobre' },
                { label: 'FAQ', href: '/#faq' },
                { label: 'Blog', href: '/blog' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-orange-400 transition">{l.label}</Link>
                </li>
              ))}
            </ul>
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
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Escala Ecommerce. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}