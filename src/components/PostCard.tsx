import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

const categoryColors: Record<string, string> = {
  'Mercado Livre': 'bg-yellow-100 text-yellow-700',
  'Nicho Black': 'bg-gray-900 text-white',
  'Estratégia': 'bg-orange-100 text-orange-700',
  'Shopee': 'bg-orange-100 text-orange-700',
  'Tráfego Pago': 'bg-blue-100 text-blue-700',
  'Marketplace': 'bg-purple-100 text-purple-700',
  'Consultoria': 'bg-green-100 text-green-700',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-orange-100 transition-all"
    >
      {/* Category + time */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}
        >
          {post.category}
        </span>
        <span className="text-xs text-gray-400">{post.readTime}</span>
      </div>

      {/* Title */}
      <h2 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-orange-500 transition-colors flex-1">
        {post.title}
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{post.description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <time dateTime={post.date} className="text-xs text-gray-400">
          {formatDate(post.date)}
        </time>
        <span className="text-orange-500 text-xs font-semibold group-hover:translate-x-0.5 transition-transform">
          Ler artigo →
        </span>
      </div>
    </Link>
  );
}
