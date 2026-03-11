'use client';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="contato" className="py-20 px-6 bg-white" aria-label="CTA Final">
      <motion.div
        className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-neutral-950 rounded-3xl p-10 md:p-16 text-center shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-5xl mb-6">ðŸš€</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Pronto para escalar suas vendas?</h2>
        <p className="text-slate-300 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Agende uma consultoria estratégica gratuita e descubra como estruturar seu e-commerce para crescer de forma consistente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5511952286097"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-green-900/30 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 2.042.613 3.938 1.664 5.527L2 22l4.473-1.664A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.93 13.71c-.17-.085-1.01-.497-1.166-.553-.156-.057-.27-.085-.384.085-.113.17-.44.553-.54.667-.099.113-.198.127-.368.042-.17-.085-.719-.265-1.37-.846-.507-.452-.85-1.01-.948-1.18-.099-.17-.011-.262.074-.347.076-.076.17-.198.255-.297.085-.099.113-.17.17-.283.057-.113.028-.212-.014-.297-.042-.085-.384-.927-.527-1.27-.14-.34-.283-.294-.384-.3-.099-.007-.212-.007-.326-.007-.113 0-.297.042-.454.198-.156.156-.595.582-.595 1.418 0 .836.609 1.645.694 1.76.085.113 1.2 1.84 2.91 2.5.407.14.724.224.973.287.408.099.78.07 1.074.042.327-.035 1.01-.413 1.153-.813.142-.4.142-.74.099-.813-.042-.07-.155-.113-.326-.198z" />
            </svg>
            Falar no WhatsApp
          </a>
          <a
            href="#servicos"
            className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Ver Serviços
          </a>
        </div>
      </motion.div>
    </section>
  );
}
