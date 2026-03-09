import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';

const categoryColors: Record<string, string> = {
  'Mercado Livre': 'bg-yellow-100 text-yellow-700',
  'Nicho Black': 'bg-gray-900 text-white',
  'Estratégia': 'bg-orange-100 text-orange-700',
  'Shopee': 'bg-orange-100 text-orange-700',
  'Tráfego Pago': 'bg-blue-100 text-blue-700',
  'Marketplace': 'bg-purple-100 text-purple-700',
  'Consultoria': 'bg-green-100 text-green-700',
};

interface Props {
  posts: PostMeta[];
  title?: string;
}

export default function RelatedPosts({ posts, title = 'Artigos relacionados' }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-extrabold text-gray-900 mb-5">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}
            >
              {post.category}
            </span>
            <p className="mt-3 text-sm font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors line-clamp-3">
              {post.title}
            </p>
            <p className="mt-2 text-xs text-orange-500 font-semibold">Ler artigo →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
