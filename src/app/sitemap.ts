import { getAllPosts, getAllCategories, categoryToSlug } from '@/lib/posts';
import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://seusite.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const categories = getAllCategories();

  const postUrls: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${SITE_URL}/blog/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const categoryUrls: MetadataRoute.Sitemap = categories.map(cat => ({
    url: `${SITE_URL}/blog/blog/categoria/${categoryToSlug(cat)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/blog/consultoria`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/blog/contato`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...categoryUrls,
    ...postUrls,
  ];
}
