import { getPostsByCategory, getAllCategories, categoryToSlug } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map(cat => ({ categoria: categoryToSlug(cat) }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ categoria: string }> },
): Promise<Metadata> {
  const { categoria } = await params;
  const categories = getAllCategories();
  const match = categories.find(c => categoryToSlug(c) === categoria);
  if (!match) return { title: 'Categoria não encontrada' };
  return {
    title: `${match} – Artigos sobre ${match} no E-commerce`,
    description: `Artigos e estratégias sobre ${match} para e-commerce e marketplaces. Conteúdo especializado baseado em operação real.`,
    alternates: { canonical: `/blog/categoria/${categoria}` },
  };
}

export default async function CategoryPage(
  { params }: { params: Promise<{ categoria: string }> },
) {
  const { categoria } = await params;
  const categories = getAllCategories();
  const match = categories.find(c => categoryToSlug(c) === categoria);
  if (!match) notFound();

  const posts = getPostsByCategory(match);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: match },
        ]}
      />

      <div className="mb-8">
        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Categoria</span>
        <h1 className="text-3xl font-extrabold text-gray-900 mt-1 mb-2">{match}</h1>
        <p className="text-gray-500 text-sm">{posts.length} artigos nesta categoria</p>
      </div>

      {/* Category nav */}
      <nav aria-label="Outras categorias" className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/blog"
          className="text-xs font-semibold border border-gray-200 hover:border-orange-300 hover:text-orange-500 text-gray-600 px-3 py-1.5 rounded-full transition"
        >
          Ver todos
        </Link>
        {categories
          .filter(c => c !== match)
          .map(cat => (
            <Link
              key={cat}
              href={`/blog/categoria/${categoryToSlug(cat)}`}
              className="text-xs font-semibold border border-gray-200 hover:border-orange-300 hover:text-orange-500 text-gray-600 px-3 py-1.5 rounded-full transition"
            >
              {cat}
            </Link>
          ))}
      </nav>

      {posts.length === 0 ? (
        <p className="text-gray-500">Nenhum artigo publicado nesta categoria ainda.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-14 bg-orange-500 rounded-2xl p-8 text-center text-white">
        <h2 className="text-xl font-extrabold mb-2">
          Quer aplicar essas estratégias no seu negócio?
        </h2>
        <p className="text-orange-100 text-sm mb-5">
          Consultoria especializada em e-commerce e marketplaces.
        </p>
        <a
          href="https://wa.me/5511952286097?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition text-sm"
        >
          Agendar consultoria gratuita
        </a>
      </div>
    </div>
  );
}
