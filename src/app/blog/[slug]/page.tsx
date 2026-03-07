import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return { title: post.title, description: post.description };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/" className="text-orange-500 text-sm font-medium hover:underline mb-8 inline-block">← Voltar ao blog</Link>
      <div className="mb-2">
        <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
        <span className="text-gray-400 text-xs ml-3">{post.readTime} de leitura · {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">{post.title}</h1>
      <article className="prose prose-gray prose-lg max-w-none prose-headings:font-extrabold prose-a:text-orange-500 prose-strong:text-gray-900">
        <MDXRemote source={post.content} />
      </article>
      <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-center">
        <p className="text-white font-bold text-lg mb-2">Gostou do conteúdo?</p>
        <p className="text-gray-400 text-sm mb-5">Fale com nossa equipe e descubra como aplicar isso no seu negócio.</p>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition text-sm">
          Agendar consultoria gratuita
        </a>
      </div>
    </div>
  );
}