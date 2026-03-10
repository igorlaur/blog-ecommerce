import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export type FAQ = {
  question: string;
  answer: string;
};

export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  cover?: string;
  tags?: string[];
  keywords?: string;
  author?: string;
  faq?: FAQ[];
};

export type Post = PostMeta & { content: string };

/** Normalize text to URL-safe slug (handles Portuguese accents) */
export function toSlugId(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/** Convert category name to URL slug */
export function categoryToSlug(category: string): string {
  return toSlugId(category);
}

/** Extract headings (h2/h3) from MDX content to build Table of Contents */
export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/\*\*/g, '').replace(/`/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    items.push({ id: toSlugId(text), text, level });
  }
  return items;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));
  return files
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(raw);
      return { slug, ...data } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post {
  const file = path.join(postsDir, `${slug}.mdx`);
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return { slug, ...data, content } as Post;
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const seen = new Set<string>();
  const cats: string[] = [];
  for (const p of posts) {
    if (!seen.has(p.category)) {
      seen.add(p.category);
      cats.push(p.category);
    }
  }
  return cats;
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(
    p => categoryToSlug(p.category) === categoryToSlug(category),
  );
}

export function getRelatedPosts(current: PostMeta, limit = 3): PostMeta[] {
  const all = getAllPosts().filter(p => p.slug !== current.slug);
  const sameCat = all.filter(p => p.category === current.category);
  const others = all.filter(p => p.category !== current.category);
  return [...sameCat, ...others].slice(0, limit);
}