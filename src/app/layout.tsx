import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geist = Geist({ subsets: ['latin'], display: 'swap' });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://escalaecommerce.com.br';
const SITE_NAME = 'Escala Ecommerce Blog';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Consultoria de E-commerce | Escala Ecommerce Blog',
    template: '%s | Escala Ecommerce',
  },
  description:
    'Estratégias reais de e-commerce, marketplaces, tráfego pago e escala de operações digitais. +R$5M em vendas, 3.000+ SKUs, 9+ plataformas.',
  keywords: [
    'consultoria ecommerce',
    'consultor ecommerce',
    'consultoria mercado livre',
    'consultoria shopee',
    'consultoria marketplace',
    'especialista ecommerce',
    'consultor marketplace',
    'como vender no mercado livre',
  ],
  authors: [{ name: 'Escala Ecommerce', url: SITE_URL }],
  creator: 'Escala Ecommerce',
  publisher: 'Escala Ecommerce',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    siteName: SITE_NAME,
    locale: 'pt_BR',
    type: 'website',
    url: SITE_URL,
    title: 'Consultoria de E-commerce | Escala Ecommerce Blog',
    description:
      'Estratégias reais de e-commerce e marketplaces. +R$5M em vendas, loja oficial Mercado Livre, operação multicanal.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultoria de E-commerce | Escala Ecommerce Blog',
    description: 'Estratégias reais de e-commerce e marketplaces. +R$5M em vendas.',
  },
  alternates: { canonical: SITE_URL },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/blog?busca={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${geist.className} bg-gray-50 text-gray-900 antialiased`}>
        <Header />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}