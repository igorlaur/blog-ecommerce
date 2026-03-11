import type { Metadata } from 'next';
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
      <ServicesSection />
      <DiferencialSection />
      <SobreSection />
      <ResultadosSection />
      <CTASection />
      <FAQSection />
    </MotionProvider>
  );
}