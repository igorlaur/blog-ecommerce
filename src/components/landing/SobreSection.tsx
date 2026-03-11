'use client';
import { m } from 'framer-motion';

const badges = ['Nicho Black', 'Marketplace', 'Marca Própria', 'Importação', 'Fabricação', 'Tráfego Pago', 'Google Ads', 'ML Ads', 'EAN Próprio'];

export default function SobreSection() {
  return (
    <section id="sobre" className="py-20 px-6 bg-gray-50" aria-label="Sobre o Consultor">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo side */}
          <m.div
            className="flex-shrink-0 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-44 h-44 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-7xl shadow-xl mb-4">
              👤
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">Consultor Discretta</div>
              <div className="text-orange-500 text-sm font-medium">Especialista em E-commerce</div>
            </div>
          </m.div>

          {/* Content side */}
          <m.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Sobre</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
              Quem está por trás da consultoria
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Especialista em e-commerce e marketplaces. Responsável pela estruturação e crescimento da{' '}
              <strong className="text-gray-900">Escala Ecommerce Consultoria</strong> — empresa com mais de R$5 milhões em vendas, 3.000+ SKUs e presença em 9+ plataformas.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Experiência real em importação de produtos exclusivos, fabricação de marca própria, gestão de tráfego pago e operação multicanal. Cada consultoria é baseada no que realmente funciona.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
                    b === 'Nicho Black'
                      ? 'bg-black text-white border-gray-700'
                      : 'bg-orange-50 border-orange-100 text-orange-700'
                  }`}
                >
                  {b}
                </span>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
