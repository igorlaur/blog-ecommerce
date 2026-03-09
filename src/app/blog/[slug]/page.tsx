import { getPostBySlug, getAllPosts, getRelatedPosts, extractToc, toSlugId } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import AuthorBox from '@/components/AuthorBox';
import FAQAccordion from '@/components/FAQAccordion';
import RelatedPosts from '@/components/RelatedPosts';
import Breadcrumb from '@/components/Breadcrumb';
import CTAConsultoria from '@/components/CTAConsultoria';
import StickySchedule from '@/components/StickySchedule';
import Link from 'next/link';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://seusite.com.br';

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author ?? 'Escala Ecommerce' }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author ?? 'Escala Ecommerce'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

/** Custom MDX heading components that inject ID for TOC anchor links */
function makeHeading(Tag: 'h2' | 'h3') {
  return function Heading({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    const text = typeof children === 'string' ? children : String(children ?? '');
    const id = toSlugId(text.replace(/\*\*/g, '').replace(/`/g, ''));
    return <Tag id={id} {...props}>{children}</Tag>;
  };
}

const mdxComponents = {
  h2: makeHeading('h2'),
  h3: makeHeading('h3'),
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const related = getRelatedPosts(post, 3);
  const toc = extractToc(post.content);
  const url = `${SITE_URL}/blog/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url,
    author: {
      '@type': 'Person',
      name: post.author ?? 'Consultor Escala Ecommerce',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Escala Ecommerce',
      url: SITE_URL,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  const faqSchema = post.faq && post.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.category, href: `/blog/categoria/${post.category.toLowerCase().replace(/\s+/g, '-')}` },
            { label: post.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-12">
          {/* ── SIDEBAR (sticky TOC) ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <TableOfContents items={toc} />
              {/* Sidebar CTA */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 text-center">
                <p className="text-sm font-bold text-gray-900 mb-2">Pronto para escalar?</p>
                <p className="text-xs text-gray-500 mb-3">Consultoria personalizada para seu e-commerce.</p>
                <a
                  href="https://wa.me/5511999999999?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
                >
                  Agendar consultoria
                </a>
              </div>
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <article className="min-w-0">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-400 text-xs">
                {post.readTime} de leitura
              </span>
              <span className="text-gray-300 text-xs">·</span>
              <time dateTime={post.date} className="text-gray-400 text-xs">
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Author compact */}
            <AuthorBox compact />

            {/* Mobile TOC */}
            <div className="lg:hidden mt-6">
              <TableOfContents items={toc} />
            </div>

            {/* MDX content */}
            <div className="mt-8 prose prose-gray prose-lg max-w-none prose-headings:font-extrabold prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Inline CTA */}
            <CTAConsultoria variant="dark" />

            {/* FAQ */}
            {post.faq && post.faq.length > 0 && <FAQAccordion items={post.faq} />}

            {/* Author full bio */}
            <AuthorBox />

            {/* Related posts */}
            <RelatedPosts posts={related} />

            {/* Bottom CTA */}
            <CTAConsultoria variant="compact" />

            {/* Back link */}
            <div className="mt-10">
              <Link href="/blog" className="text-orange-500 text-sm font-semibold hover:underline">
                ← Ver todos os artigos
              </Link>
            </div>
          </article>
        </div>
      </div>

      {/* Sticky bottom banner */}
      <StickySchedule />
    </>
  );
}