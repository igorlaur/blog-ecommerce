'use client';
import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Quanto custa a consultoria?',
    answer: 'O investimento depende do escopo, necessidades e objetivos do seu negócio. Entre em contato para receber um orçamento personalizado e sem compromisso.',
  },
  {
    question: 'Para quem é essa consultoria?',
    answer: 'Para empreendedores, empresas e profissionais que querem estruturar, crescer ou escalar sua operação nos marketplaces e e-commerce brasileiro.',
  },
  {
    question: 'Vocês ajudam iniciantes?',
    answer: 'Sim! Atendemos desde quem está começando do zero até empresas com operações complexas. A metodologia é adaptada para cada perfil.',
  },
  {
    question: 'Vocês ajudam empresas grandes?',
    answer: 'Sim. Temos experiência com catálogos de 3.000+ SKUs, operação multicanal e estruturas profissionais de e-commerce.',
  },
  {
    question: 'A consultoria é online ou presencial?',
    answer: 'A consultoria é realizada de forma online, com reuniões por vídeo, análises detalhadas e suporte via WhatsApp.',
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Depende do ponto de partida e das ações implementadas. Em geral, os primeiros resultados aparecem dentro de 30 a 90 dias após a implementação das estratégias.',
  },
];

function FAQItem({ faq, idx }: { faq: typeof faqs[0]; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <button
        className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-${idx}`}
      >
        <span className="font-semibold text-gray-900">{faq.question}</span>
        <span className={`text-orange-500 text-xl transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id={`faq-${idx}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-7 pb-6 text-gray-500 leading-relaxed">{faq.answer}</p>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-6 bg-gray-50" aria-label="FAQ">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Perguntas frequentes</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Tire suas dúvidas antes de agendar.</p>
        </div>
        <ul className="flex flex-col gap-3 list-none p-0">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} idx={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
}
