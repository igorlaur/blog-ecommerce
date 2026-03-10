'use client';
import { motion } from 'framer-motion';

const metrics = [
  { value: '+R$5M', label: 'em faturamento', desc: 'Vendas acumuladas nos últimos anos de operação.' },
  { value: '3.000+', label: 'SKUs ativos', desc: 'Catálogo gerenciado com dados completos e performance.' },
  { value: '9+', label: 'plataformas', desc: 'Operação simultânea nos maiores marketplaces do Brasil.' },
  { value: '100%', label: 'operação real', desc: 'Nada de teoria. Cada estratégia foi testada no campo.' },
];

export default function ResultadosSection() {
  return (
    <section id="resultados" className="py-20 px-6 bg-gradient-to-br from-orange-500 to-orange-700 text-white" aria-label="Resultados">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange-200 font-semibold text-sm uppercase tracking-widest">Números</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Resultados comprovados</h2>
          <p className="text-orange-100 mt-3 max-w-xl mx-auto">
            Uma operação construída do zero, com dados reais e estratégias que funcionam.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.value}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-7 text-center hover:bg-white/20 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl font-extrabold text-white">{m.value}</div>
              <div className="text-orange-200 font-semibold text-sm mt-1">{m.label}</div>
              <div className="text-orange-100 text-xs mt-2 leading-relaxed">{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
