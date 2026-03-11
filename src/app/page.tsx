import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/landing/HeroSection';
import AuthoritySection from '@/components/landing/AuthoritySection';
import MarketplacesSection from '@/components/landing/MarketplacesSection';
import ServicesSection from '@/components/landing/ServicesSection';
import DiferencialSection from '@/components/landing/DiferencialSection';
import SobreSection from '@/components/landing/SobreSection';
import ResultadosSection from '@/components/landing/ResultadosSection';
import CTASection from '@/components/landing/CTASection';
import FAQSection from '@/components/landing/FAQSection';
import MotionProvider from '@/components/landing/MotionProvider';

export const metadata: Metadata = {
  title: 'Consultoria em E-commerce e Marketplaces | Escala Ecommerce',
  description:
    'Consultoria especializada em e-commerce, Mercado Livre, Shopee, Magalu e marketplaces. +R$5M em vendas, 3.000+ SKUs, operação multicanal. Agende sua sessão estratégica.',
  keywords: 'consultoria ecommerce, consultor ecommerce, consultoria mercado livre, consultoria shopee, nicho black, especialista ecommerce',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Consultoria em E-commerce e Marketplaces | Escala Ecommerce',
    description: 'Consultoria especializada em e-commerce e marketplaces. +R$5M em vendas reais.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Escala Ecommerce – Consultoria de E-commerce e Marketplaces' }],
  },
};

export default function HomePage() {
  return (
    <MotionProvider>
      <HeroSection />
      <AuthoritySection />
      <MarketplacesSection />

      {/* Ferramentas Gratuitas */}
      <section className="bg-orange-50 border-y border-orange-100 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">Ferramentas gratuitas</p>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1">
              Calculadoras de Precificação para Marketplaces
            </h2>
            <p className="text-gray-500 text-sm max-w-md">
              Calcule o preço de venda ideal no Mercado Livre, Shopee, Magalu e iFood. Inclui comissão, impostos, custos fixos e margem de lucro.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              href="/ferramentas/calculadora-mercado-livre"
              className="inline-flex items-center gap-2 bg-white border border-orange-200 text-orange-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 font-semibold px-5 py-3 rounded-xl transition text-sm shadow-sm"
            >
              🛒 Mercado Livre
            </Link>
            <Link
              href="/ferramentas/calculadora-shopee"
              className="inline-flex items-center gap-2 bg-white border border-orange-200 text-orange-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 font-semibold px-5 py-3 rounded-xl transition text-sm shadow-sm"
            >
              🧡 Shopee
            </Link>
            <Link
              href="/ferramentas/calculadora-marketplace"
              className="inline-flex items-center gap-2 bg-orange-500 text-white hover:bg-orange-600 font-semibold px-5 py-3 rounded-xl transition text-sm shadow-md"
            >
              Ver todas →
            </Link>
          </div>
        </div>
      </section>

      <ServicesSection />
      <DiferencialSection />
      <SobreSection />
      <ResultadosSection />
      <CTASection />
      <FAQSection />
    </MotionProvider>
  );
}