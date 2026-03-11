'use client';
import { m } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0.01, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: 'easeOut' as const },
});

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-neutral-950 to-slate-900 text-white py-28 md:py-36 px-6"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-orange-500 opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badges */}
        <m.div {...fadeUp(0)} className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Especialista com experiência real em +R$5 milhões em vendas
          </span>
          <span className="inline-flex items-center gap-2 bg-black/40 border border-white/10 text-white text-sm font-bold px-4 py-1.5 rounded-full">
            🖤 Especialista em Nicho Black
          </span>
        </m.div>

        {/* Headline */}
        <m.h1
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
        >
          Consultoria em E-commerce e{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
            Marketplaces
          </span>{' '}
          para quem quer vender de verdade
        </m.h1>

        {/* Subtitle */}
        <m.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Operação real com <strong className="text-white">3.000+ SKUs</strong>, presença em Mercado Livre, Shopee, Magalu e muito mais. Especialistas em{' '}
            <strong className="text-orange-400">nicho black</strong> e produtos importados exclusivos sem concorrência no Brasil.
        </m.p>

        {/* CTAs */}
        <m.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5511952286097"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg shadow-orange-500/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Agendar Consultoria
          </a>
          <a
            href="https://wa.me/5511952286097"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 2.042.613 3.938 1.664 5.527L2 22l4.473-1.664A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.93 13.71c-.17-.085-1.01-.497-1.166-.553-.156-.057-.27-.085-.384.085-.113.17-.44.553-.54.667-.099.113-.198.127-.368.042-.17-.085-.719-.265-1.37-.846-.507-.452-.85-1.01-.948-1.18-.099-.17-.011-.262.074-.347.076-.076.17-.198.255-.297.085-.099.113-.17.17-.283.057-.113.028-.212-.014-.297-.042-.085-.384-.927-.527-1.27-.14-.34-.283-.294-.384-.3-.099-.007-.212-.007-.326-.007-.113 0-.297.042-.454.198-.156.156-.595.582-.595 1.418 0 .836.609 1.645.694 1.76.085.113 1.2 1.84 2.91 2.5.407.14.724.224.973.287.408.099.78.07 1.074.042.327-.035 1.01-.413 1.153-.813.142-.4.142-.74.099-.813-.042-.07-.155-.113-.326-.198z" />
            </svg>
            Falar no WhatsApp
          </a>
        </m.div>

        {/* Social proof stats */}
        <m.div {...fadeUp(0.4)} className="mt-14 flex flex-wrap justify-center gap-8">
          {[
            { value: '+R$5M', label: 'em vendas' },
            { value: '3.000+', label: 'SKUs ativos' },
            { value: '9+', label: 'plataformas' },
            { value: '100%', label: 'operação real' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
