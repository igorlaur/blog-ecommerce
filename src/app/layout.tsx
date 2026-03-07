import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Blog | Escala Digital', template: '%s | Escala Digital Blog' },
  description: 'Estratégias de e-commerce, marketplaces, nicho black e tráfego pago para quem quer vender de verdade.',
  openGraph: { siteName: 'Escala Digital Blog', locale: 'pt_BR', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} bg-gray-50 text-gray-900 antialiased`}>
        <Header />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}