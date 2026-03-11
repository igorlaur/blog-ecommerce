import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consultoria de E-commerce e Marketplaces | Escala Ecommerce',
  description:
    'Consultoria especializada em e-commerce, Mercado Livre, Shopee, Magalu e marketplaces. +R$5M em vendas, 3.000+ SKUs, operação multicanal. Agende sua sessão estratégica.',
  keywords: 'consultoria ecommerce, consultor ecommerce, consultoria mercado livre, consultoria shopee, consultoria marketplace, especialista ecommerce',
  alternates: { canonical: '/consultoria' },
  openGraph: {
    title: 'Consultoria de E-commerce | Escala Ecommerce',
    description: 'Consultoria especializada em e-commerce e marketplaces. +R$5M em vendas reais.',
    type: 'website',
  },
};

const SERVICES = [
  {
    icon: '🛒',
    title: 'Consultoria Mercado Livre',
    desc: 'Otimização de anúncios, ML Ads, reputação, catálogo e estratégias para atingir Loja Oficial.',
  },
  {
    icon: '🧡',
    title: 'Consultoria Shopee',
    desc: 'Configuração de loja, campanhas, frete, produtos patrocinados e crescimento nas primeiras páginas.',
  },
  {
    icon: '🏪    title: 'Estratégia Multicanal',
    desc: 'Operação simultânea em Mercado Livre, Shopee, Magalu, Shein, iFood, Rappi e site próprio.',
  },
  {
    icon: '🎯',
    title: 'Tráfego Pago (ML Ads + Google Ads)',
    desc: 'Campanhas de Product Ads, Sponsored Brands e Google Shopping com ROI positivo comprovado.',
  },
  {
    icon: '📦',
    title: 'Gestão de Catálogo e SKUs',
    desc: 'Estruturação de catálogo, gestão de EAN, variações, kits e bundles para maximizar ticket médio.',
  },
  {
    icon: '🏷️',
    title: 'Private Label e Importação',
    desc: 'Desenvolvimento de produtos de marca própria, importação, negociação com fornecedores e gestão de EAN.',
  },
];

const STEPS = [
  { num: '01', title: 'Diagnóstico gratuito', desc: 'Análise completa da sua operação atual: canais, produtos, métricas e gargalos.' },
  { num: '02', title: 'Plano estratégico', desc: 'Elaboração de um plano de crescimento personalizado com metas claras e ações prioritárias.' },
  { num: '03', title: 'Implementação', desc: 'Acompanhamento semanal na execução das estratégias, ajustes e otimizações contínuas.' },
  { num: '04', title: 'Escala', desc: 'Expansão para novos canais, produtos e estratégias de tráfego pago para acelerar os resultados.' },
];

const STATS = [
  { value: '+R$5M', label: 'em vendas no e-commerce' },
  { value: '3.000+', label: 'SKUs gerenciados' },
  { value: '9+', label: 'Marketplaces operados' },
  { value: 'Loja Oficial', label: 'Mercado Livre' },
];

const FAQS = [
  {
    q: 'Quanto tempo dura a consultoria?',
    a: 'A consultoria pode ser pontual (sessão única de diagnóstico) ou contínua (acompanhamento mensal). O formato ideal é definido conforme seus objetivos.',
  },
  {
    q: 'A consultoria é para iniciantes ou veteranos?',
    a: 'Atendemos desde quem está começando até operações com faturamento acima de R$500k/mês. O plano é sempre personalizado para o seu momento.',
  },
  {
    q: 'Vocês trabalham com todos os marketplaces?',
    a: 'Sim. Temos experiência em Mercado Livre, Shopee, Magalu, Shein, iFood, Rappi e site próprio (Shopify/Nuvemshop).',
  },
  {
    q: 'Como funciona a primeira sessão?',
    a: 'A primeira sessão é um diagnóstico gratuito. Analisamos sua operação e apresentamos as principais oportunidades de crescimento.',
  },
];

const consultoriaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Consultoria de E-commerce',
  provider: { '@type': 'Organization', name: 'Escala Ecommerce' },
  description:
    'Consultoria especializada em e-commerce, Mercado Livre, Shopee e marketplaces. +R$5M em vendas, 3.000+ SKUs, operação multicanal.',
  areaServed: 'BR',
  serviceType: 'Consultoria de E-commerce',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function ConsultoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(consultoriaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* â”€â”€ HERO â”€â”€ */}
      <section className="bg-white border-b border-gray-100 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-orange-500 text-xs font-bold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-4">
            Consultoria Especializada
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Consultoria de E-commerce e{' '}
            <span className="text-orange-500">Marketplaces</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Diagnóstico completo + plano de crescimento personalizado para você vender mais no Mercado Livre,
            Shopee, Magalu e outros marketplaces. Baseado em operação real com +R$5M em vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5511952286097?text=Olá%2C%20quero%20saber%20mais%20sobre%20a%20consultoria%20de%20e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-orange-200"
            >
              Agendar diagnóstico gratuito
            </a>
            <Link
              href="/blog"
              className="inline-block bg-white border border-gray-200 hover:border-orange-300 text-gray-700 font-semibold px-8 py-4 rounded-xl transition"
            >
              Ver artigos do blog
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ STATS â”€â”€ */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <p className="text-orange-400 font-extrabold text-2xl md:text-3xl">{s.value}</p>
              <p className="text-gray-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ SERVICES â”€â”€ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">O que a consultoria cobre</h2>
          <p className="text-gray-500 mt-2">Especialização em todas as frentes do e-commerce moderno.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(s => (
            <div key={s.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <span className="text-2xl mb-3 block">{s.icon}</span>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ HOW IT WORKS â”€â”€ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Como funciona</h2>
            <p className="text-gray-500 mt-2">Um processo estruturado do diagnóstico à escala.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(step => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ FAQ â”€â”€ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Perguntas frequentes</h2>
        <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
          {FAQS.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm hover:bg-gray-50 transition list-none">
                {f.q}
                <span className="text-orange-500 ml-4">+</span>
              </summary>
              <p className="px-6 pb-4 text-sm text-gray-600 bg-gray-50">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* â”€â”€ FINAL CTA â”€â”€ */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-3">
            Pronto para escalar seu e-commerce?
          </h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Agende agora sua sessão de diagnóstico gratuita e descubra exatamente o que fazer para crescer nos marketplaces.
          </p>
          <a
            href="https://wa.me/5511952286097?text=Olá%2C%20quero%20agendar%20meu%20diagnóstico%20gratuito%20de%20e-commerce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-xl text-lg"
          >
            Agendar diagnóstico gratuito
          </a>
        </div>
      </section>
    </>
  );
}
