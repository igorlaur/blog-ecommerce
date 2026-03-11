'use client';
import { m } from 'framer-motion';

const services = [
  { title: 'Estruturação de E-commerce', desc: 'Montamos a operação do zero: plataforma, catálogo, processos e logística.', icon: '🏗️' },
  { title: 'Estratégia de Marketplaces', desc: 'Plano de atuação em Mercado Livre, Shopee, Magalu e outros canais.', icon: '🗺️' },
  { title: 'Otimização de Anúncios', desc: 'Títulos, imagens, descrições e SEO interno para máxima visibilidade.', icon: '📈' },
  { title: 'Gestão de Tráfego Pago', desc: 'Campanhas no Mercado Livre Ads e Google Ads com foco em ROI.', icon: '💡' },
  { title: 'Desenvolvimento de Produtos', desc: 'Curadoria, importação, fabricação e criação de marca própria.', icon: '🎯' },
  { title: 'Estruturação de Catálogo', desc: 'Organização de 3.000+ SKUs com categorização e dados completos.', icon: '📦' },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 px-6 bg-gray-50" aria-label="Serviços de Consultoria">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Serviços</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">O que você vai receber</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Consultoria prática, focada em resultado. Sem teoria, sem enrolação.</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
          {services.map((s, i) => (
            <m.li
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </m.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
