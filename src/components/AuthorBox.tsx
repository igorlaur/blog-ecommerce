interface Props {
  compact?: boolean;
}

const STATS = [
  { value: '+R$5M', label: 'em vendas no e-commerce' },
  { value: '3.000+', label: 'SKUs gerenciados' },
  { value: '9+', label: 'marketplaces operados' },
  { value: 'Loja Oficial', label: 'Mercado Livre' },
];

const MARKETPLACES = [
  'Mercado Livre', 'Shopee', 'Magalu', 'Shein', 'iFood', 'Rappi', 'Site Próprio',
];

export default function AuthorBox({ compact = false }: Props) {
  if (compact) {
    return (
      <div className="flex items-center gap-3 py-4 border-y border-gray-100">
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
          C
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Consultor Escala Digital</p>
          <p className="text-xs text-gray-500">+R$5M em vendas · Especialista em Marketplaces</p>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black text-3xl">
            C
          </div>
        </div>
        {/* Bio */}
        <div className="flex-1">
          <p className="text-xs text-orange-500 font-bold uppercase tracking-widest mb-1">Sobre o Autor</p>
          <h3 className="text-xl font-extrabold text-gray-900 mb-1">Consultor Escala Digital</h3>
          <p className="text-sm text-gray-500 mb-4">
            Especialista em e-commerce e marketplaces com mais de R$5 milhões em vendas na prática. 
            Gerenciei mais de 3.000 SKUs, operei loja oficial no Mercado Livre, trabalhei com importação, 
            produtos de marca própria (private label), gestão de EAN e operações multicanais em 7+ plataformas.
          </p>
          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {STATS.map(s => (
              <div key={s.label} className="bg-white rounded-xl p-3 border border-gray-100 text-center">
                <p className="text-orange-500 font-extrabold text-sm">{s.value}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          {/* Marketplaces */}
          <div className="flex flex-wrap gap-2">
            {MARKETPLACES.map(m => (
              <span key={m} className="text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
