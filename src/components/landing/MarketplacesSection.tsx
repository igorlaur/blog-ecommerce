'use client';
import { motion } from 'framer-motion';

const niches: Record<string, { label: string; color: string }> = {
  black: { label: 'Nicho Black', color: 'bg-black text-white' },
  moda: { label: 'Moda', color: 'bg-pink-100 text-pink-700' },
  delivery: { label: 'Delivery', color: 'bg-red-100 text-red-700' },
  ecommerce: { label: 'E-commerce', color: 'bg-orange-100 text-orange-700' },
};

const marketplaces = [
  { name: 'Mercado Livre', logo: 'https://cdn.brandfetch.io/mercadolivre.com.br/w/200/h/200', desc: 'Loja Oficial FULL e FLEX', tags: ['black', 'ecommerce'] },
  { name: 'Shopee', logo: 'https://cdn.brandfetch.io/shopee.com/w/200/h/200', desc: 'Marketplace em crescimento', tags: ['black', 'moda', 'ecommerce'] },
  { name: 'Magalu', logo: 'https://cdn.brandfetch.io/magazineluiza.com.br/w/200/h/200', desc: 'Marketplace nacional', tags: ['black', 'ecommerce'] },
  { name: 'Shein', logo: 'https://cdn.brandfetch.io/shein.com/w/200/h/200', desc: 'Moda e vestuário', tags: ['moda'] },
  { name: 'iFood', logo: 'https://cdn.brandfetch.io/ifood.com.br/w/200/h/200', desc: 'Delivery de nicho black e moda', tags: ['black', 'moda', 'delivery'] },
  { name: 'Rappi', logo: 'https://cdn.brandfetch.io/rappi.com/w/200/h/200', desc: 'Delivery de nicho black e moda', tags: ['black', 'moda', 'delivery'] },
  { name: 'Kwai', logo: 'https://cdn.brandfetch.io/kwai.com/w/200/h/200', desc: 'Vendas via vídeos curtos', tags: ['black', 'moda', 'ecommerce'] },
  { name: 'Site Próprio', logo: null, desc: 'E-commerce proprietário', tags: ['black', 'moda', 'ecommerce'] },
];

export default function MarketplacesSection() {
  return (
    <section id="marketplaces" className="py-20 px-6 bg-slate-950 text-white" aria-label="Marketplaces">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Plataformas</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Onde já atuamos</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Operação ativa nos principais marketplaces do Brasil com estratégias específicas para cada canal.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketplaces.map((mkt, i) => (
            <motion.div
              key={mkt.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-default"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              {mkt.logo ? (
                <div className="w-14 h-14 mb-3 rounded-xl bg-white flex items-center justify-center p-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={mkt.logo} alt={mkt.name} className="w-full h-full object-contain" loading="lazy" />
                </div>
              ) : (
                <div className="w-14 h-14 mb-3 rounded-xl bg-white/10 flex items-center justify-center text-2xl">🌐</div>
              )}
              <div className="font-bold text-white text-base">{mkt.name}</div>
              <div className="text-slate-400 text-xs mt-1 mb-3">{mkt.desc}</div>
              <div className="flex flex-wrap justify-center gap-1">
                {mkt.tags.map(tag => (
                  <span key={tag} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${niches[tag].color}`}>
                    {niches[tag].label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
