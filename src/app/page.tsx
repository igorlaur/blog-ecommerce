import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog de E-commerce | Escala Digital',
  description: 'Estratégias práticas de e-commerce, marketplaces, nicho black e escala de vendas.',
};

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Blog</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
          Estratégias para vender <span className="text-orange-500">de verdade</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Conteúdo baseado em operação real: +R$5M em vendas, 3.000+ SKUs e 9+ plataformas.
        </p>
      </div>
      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => <PostCard key={post.slug} post={post} />)}
      </div>
      {/* CTA */}
      <div className="mt-20 bg-gray-900 rounded-3xl p-10 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">Precisa de ajuda para escalar?</h2>
        <p className="text-gray-400 mb-6">Conheça nossa consultoria especializada em e-commerce e marketplaces.</p>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition">
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}