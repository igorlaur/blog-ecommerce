import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  cover?: string;
};

export type Post = PostMeta & { content: string };

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
