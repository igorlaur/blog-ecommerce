import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agendar Consultoria de E-commerce',
  description:
    'Entre em contato para agendar sua consultoria de e-commerce e marketplaces. Diagnóstico gratuito disponível.',
  alternates: { canonical: '/contato' },
};

export default function ContatoPage() {
  const whatsappMsg =
    'Olá%2C%20vim%20pelo%20blog%20e%20gostaria%20de%20agendar%20uma%20consultoria%20de%20e-commerce';

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Contato</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-3">
          Agende sua consultoria
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Preencha o formulário abaixo ou entre em contato direto pelo WhatsApp. O diagnóstico inicial é gratuito.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Form (links to WhatsApp) */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h2 className="font-extrabold text-gray-900 mb-5">Enviar mensagem</h2>
          <form
            action={`https://wa.me/5511952286097`}
            method="GET"
            target="_blank"
            rel="noopener noreferrer"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Seu nome completo"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="seu@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(11) 99999-9999"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                Sobre sua operação
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Conte um pouco sobre sua operação de e-commerce, desafios e objetivos..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition resize-none"
              />
            </div>
            <a
              href={`https://wa.me/5511952286097?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-center transition"
            >
              Enviar via WhatsApp
            </a>
          </form>
        </div>

        {/* Right: Info */}
        <div className="space-y-6">
          {/* WhatsApp card */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-1">📱 WhatsApp (Resposta rápida)</h3>
            <p className="text-gray-500 text-sm mb-4">
              Para retorno mais rápido, entre em contato diretamente pelo WhatsApp. Respondemos em até 2h durante o horário comercial.
            </p>
            <a
              href={`https://wa.me/5511952286097?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition"
            >
              Abrir WhatsApp
            </a>
          </div>

          {/* Diagnóstico card */}
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-1">🔍 O que é o diagnóstico gratuito?</h3>
            <ul className="space-y-2 text-sm text-gray-600 mt-3">
              {[
                'Análise dos seus canais de venda atuais',
                'Identificação dos principais gargalos',
                'Oportunidades de crescimento imediato',
                'Plano de ação com próximos passos',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-orange-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social proof */}
          <div className="bg-gray-900 rounded-2xl p-6 text-center">
            <p className="text-orange-400 font-extrabold text-2xl">+R$5M</p>
            <p className="text-gray-400 text-xs mt-1">em vendas gerenciadas</p>
            <p className="text-orange-400 font-extrabold text-2xl mt-3">3.000+</p>
            <p className="text-gray-400 text-xs mt-1">SKUs operados</p>
          </div>
        </div>
      </div>
    </div>
  );
}
