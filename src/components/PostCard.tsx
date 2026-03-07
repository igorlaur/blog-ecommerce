import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

const categoryColors: Record<string, string> = {
  'Mercado Livre': 'bg-yellow-100 text-yellow-700',
  'Nicho Black': 'bg-gray-900 text-white',
  'Estratégia': 'bg-orange-100 text-orange-700',
  'Shopee': 'bg-orange-100 text-orange-700',
  'Tráfego Pago': 'bg-blue-100 text-blue-700',
};

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
          {post.category}
        </span>
        <span className="text-xs text-gray-400">{post.readTime} de leitura</span>
      </div>
      <h2 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-orange-500 transition-colors">
        {post.title}
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.description}</p>
      <div className="mt-4 text-orange-500 text-sm font-semibold">Ler artigo →</div>
    </Link>
  );
}
