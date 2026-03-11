import Link from 'next/link';

interface Props {
  variant?: 'default' | 'compact' | 'dark';
}

export default function CTAConsultoria({ variant = 'default' }: Props) {
  if (variant === 'compact') {
    return (
      <div className="my-8 border-l-4 border-orange-500 bg-orange-50 px-6 py-4 rounded-r-xl">
        <p className="text-gray-800 font-semibold text-sm mb-2">
          💡 Quer aplicar isso no seu negócio?
        </p>
        <p className="text-gray-600 text-sm mb-3">
          Com +R$5M em vendas e operação em 9+ marketplaces, nosso consultor pode ajudar você a escalar mais rápido.
        </p>
        <a
          href="https://wa.me/5511952286097?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition"
        >
          Agendar consultoria →
        </a>
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div className="my-12 bg-gray-900 rounded-2xl p-8 md:p-10 text-center">
        <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Consultoria Especializada</span>
        <h3 className="text-white text-2xl font-extrabold mt-2 mb-3">
          Pronto para escalar seu e-commerce?
        </h3>
        <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
          Mais de R$5 milhões em vendas, 3.000+ SKUs gerenciados e operação em 9 marketplaces. Nossa consultoria é baseada em operação real.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/5511952286097?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition"
          >
            Agendar consultoria
          </a>
          <Link
            href="/consultoria"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition"
          >
            Ver serviços →
          </Link>
        </div>
      </div>
    );
  }

  // default
  return (
    <div className="my-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-10 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-extrabold mb-2">
          Agende sua consultoria estratégica de e-commerce
        </h3>
        <p className="text-orange-100 text-sm mb-6">
          Diagnóstico completo da sua operação + plano de ação personalizado para crescer nos marketplaces.
        </p>
        <a
          href="https://wa.me/5511952286097?text=Olá%2C%20vim%20pelo%20blog%20e%20quero%20saber%20mais%20sobre%20consultoria%20de%20e-commerce"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition shadow-lg"
        >
          Falar no WhatsApp agora
        </a>
      </div>
    </div>
  );
}