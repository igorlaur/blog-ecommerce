'use client';
import { motion } from 'framer-motion';

const stats = [
  { value: '+R$5 milhões', label: 'Faturados', icon: '💰', color: 'text-orange-500', bg: 'bg-orange-50' },
  { value: '3.000+', label: 'SKUs ativos', icon: '📦', color: 'text-green-600', bg: 'bg-green-50' },
  { value: 'Loja Oficial', label: 'Mercado Livre FULL & FLEX', icon: '🏆', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { value: 'Multicanal', label: 'Vários canais de venda', icon: '🌐', color: 'text-purple-600', bg: 'bg-purple-50' },
  { value: 'Exclusivos', label: 'Produtos sem concorrência', icon: '⭐', color: 'text-pink-600', bg: 'bg-pink-50' },
  { value: 'Marca Própria', label: 'Desenvolvimento e fabricação', icon: '✅', color: 'text-orange-500', bg: 'bg-orange-50' },
];

export default function AuthoritySection() {
  return (
    <section id="autoridade" className="py-20 px-6 bg-white border-b border-gray-100" aria-label="Prova de Autoridade">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Autoridade</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Resultados que falam por si</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Não é teoria. São números reais de uma operação de e-commerce multimilionária.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              className="rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center text-2xl mb-4`}>{s.icon}</div>
              <div className={`text-2xl font-extrabold ${s.color}`}>{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
