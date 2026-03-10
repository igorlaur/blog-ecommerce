import { getAllPosts, getAllCategories, getPostsByCategory, categoryToSlug } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog de E-commerce e Marketplaces',
  description:
    'Artigos sobre consultoria de e-commerce, Mercado Livre, Shopee, tráfego pago e estratégias para escalar marketplaces.',
  alternates: { canonical: '/blog' },
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

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Blog</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1 mb-3">
          Estratégias de E-commerce e Marketplaces
        </h1>
        <p className="text-gray-500 max-w-xl">
          {posts.length} artigos com estratégias reais baseadas em +R$5M em vendas e operação em 9+ plataformas.
        </p>
      </div>

      {/* Category filter */}
      <nav aria-label="Filtrar por categoria" className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/blog"
          className="bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full"
        >
          Todos ({posts.length})
        </Link>
        {categories.map(cat => (
          <Link
            key={cat}
            href={`/blog/categoria/${categoryToSlug(cat)}`}
            className="bg-white border border-gray-200 hover:border-orange-300 hover:text-orange-500 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full transition flex items-center gap-1.5"
          >
            <span>{CATEGORY_ICONS[cat] ?? '📄'}</span>
            <span>{cat}</span>
          </Link>
        ))}
      </nav>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-extrabold text-white mb-2">
          Precisa de ajuda para escalar?
        </h2>
        <p className="text-gray-400 text-sm mb-5">
          Consultoria especializada em e-commerce e marketplaces.
        </p>
        <a
          href="https://wa.me/5511952286097?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition"
        >
          Agendar consultoria
        </a>
      </div>
    </div>
  );
}