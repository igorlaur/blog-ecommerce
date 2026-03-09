import { getAllPosts, getAllCategories, categoryToSlug } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultoria de E-commerce e Marketplaces | Escala Ecommerce Blog',
  description:
    'Estratégias práticas de consultoria em e-commerce, Mercado Livre, Shopee e marketplaces. Conteúdo baseado em +R$5M em vendas reais.',
  alternates: { canonical: '/' },
};

const CATEGORY_ICONS: Record<string, string> = {
  'Mercado Livre': '🛒',
  'Shopee': '🧡',
  'Estratégia': '📈',
  'Tráfego Pago': '🎯',
  'Nicho Black': '⚫',
  'Marketplace': '🏪',
  'Consultoria': '💼',
};

const MARKETPLACES = [
  { name: 'Mercado Livre', color: 'bg-yellow-400' },
  { name: 'Shopee', color: 'bg-orange-400' },
  { name: 'Magalu', color: 'bg-blue-500' },
  { name: 'Shein', color: 'bg-gray-800' },
  { name: 'iFood', color: 'bg-red-500' },
  { name: 'Rappi', color: 'bg-orange-500' },
];

const STATS = [
  { value: '+R$5M', label: 'em vendas no e-commerce' },
  { value: '3.000+', label: 'SKUs gerenciados' },
  { value: '9+', label: 'Marketplaces operados' },
  { value: 'Loja Oficial', label: 'Mercado Livre' },
];

export default function Home() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featured = posts.slice(0, 6);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-orange-500 font-bold text-xs uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-4">
              Blog · Consultoria de E-commerce
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
              Escale seu e-commerce com{' '}
              <span className="text-orange-500">estratégia real</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Conteúdo baseado em operação real: +R$5M em vendas, 3.000+ SKUs e presença em 9 marketplaces.
              Consultoria especializada em Mercado Livre, Shopee, Magalu e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-orange-200"
              >
                Agendar consultoria gratuita
              </a>
              <a
                href="#artigos"
                className="inline-block bg-white border border-gray-200 hover:border-orange-300 text-gray-700 font-semibold px-8 py-4 rounded-xl transition"
              >
                Ver artigos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <p className="text-orange-400 font-extrabold text-2xl md:text-3xl">{s.value}</p>
                <p className="text-gray-400 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETPLACES ─────────────────────────────────── */}
      <section className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">Operação em</p>
          <div className="flex flex-wrap justify-center gap-3">
            {MARKETPLACES.map(m => (
              <span
                key={m.name}
                className={`${m.color} text-white text-xs font-bold px-4 py-2 rounded-full`}
              >
                {m.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ────────────────────────────────────── */}
      <section className="py-12 max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-extrabold text-gray-900 mb-5">Explorar por categoria</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <Link
              key={cat}
              href={`/blog/categoria/${categoryToSlug(cat)}`}
              className="flex items-center gap-2 bg-white border border-gray-200 hover:border-orange-300 hover:text-orange-500 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl transition"
            >
              <span>{CATEGORY_ICONS[cat] ?? '📄'}</span>
              <span>{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── POSTS GRID ────────────────────────────────────── */}
      <section id="artigos" className="max-w-5xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-extrabold text-gray-900">Artigos mais recentes</h2>
          <Link href="/blog" className="text-sm text-orange-500 font-semibold hover:underline">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* ── AUTHOR CREDIBILITY ────────────────────────────── */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Sobre o consultor</span>
              <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
                Experiência real, resultados comprovados
              </h2>
              <p className="text-gray-400 mb-6">
                Mais de R$5 milhões em vendas no e-commerce, gestão de 3.000+ SKUs, loja oficial no Mercado Livre,
                operação multicanal em 9 plataformas, importação de produtos, private label, gestão de EAN,
                Mercado Livre Ads e Google Ads.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                {[
                  'Loja Oficial certificada no Mercado Livre',
                  'Operação em Shopee, Magalu, Shein, iFood e Rappi',
                  'Mercado Livre Ads e Google Ads com ROI positivo',
                  'Private label e importação exclusiva',
                  'Gestão de EAN e catálogos de 3.000+ SKUs',
                  'Site próprio + operação multicanal',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black text-4xl mx-auto mb-5">
                C
              </div>
              <h3 className="text-white font-extrabold text-lg mb-1">Consultor Escala Ecommerce</h3>
              <p className="text-gray-400 text-sm mb-5">Especialista em E-commerce &amp; Marketplaces</p>
              <a
                href="https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition text-sm"
              >
                Agendar consultoria
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-3">
            Agende sua consultoria estratégica de e-commerce
          </h2>
          <p className="text-orange-100 mb-6 max-w-xl mx-auto">
            Diagnóstico completo da sua operação + plano de crescimento personalizado para você vender mais em menos tempo.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-lg"
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </section>
    </>
  );
}