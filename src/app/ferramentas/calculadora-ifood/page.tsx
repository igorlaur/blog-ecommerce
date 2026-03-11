import type { Metadata } from 'next';
import Link from 'next/link';
import MarketplaceCalculator from '@/components/MarketplaceCalculator';

export const metadata: Metadata = {
  title: 'Calculadora iFood: Simule Taxas e Lucro por Pedido',
  description:
    'Calcule o preço ideal no iFood. Simule a taxa de intermediação, custos operacionais, impostos e margem de lucro por pedido de forma automática. Grátis.',
  keywords: 'calculadora ifood, calcular preço ifood, taxas ifood, precificação ifood, calcular lucro ifood',
  alternates: { canonical: '/ferramentas/calculadora-ifood' },
  openGraph: {
    title: 'Calculadora iFood: Simule Taxas e Lucro por Pedido | Escala Ecommerce',
    description: 'Calcule o preço ideal no iFood. Simule taxas, impostos e margem de lucro. Grátis.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Preço de Venda no iFood',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'WEB',
  description: 'Calcule o preço ideal de venda no iFood considerando taxa de intermediação, custos operacionais e margem de lucro por pedido.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'Escala Ecommerce', url: 'https://escalaecommerce.com.br' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual é a taxa do iFood para restaurantes e lojas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O iFood cobra uma taxa de intermediação que varia conforme o plano contratado. O Plano Básico cobra cerca de 12% por pedido. O Plano Entrega, que inclui os entregadores do iFood, cobra em torno de 27%. Consulte seu contrato para confirmar os valores exatos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como calcular o preço de venda no iFood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use nossa calculadora gratuita: informe o custo do item, a taxa de intermediação do seu plano (ex: 12%), os impostos e a margem de lucro desejada. O preço ideal é calculado automaticamente cobrindo todos os custos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vale a pena oferecer frete grátis no iFood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do ticket médio. Use a calculadora incluindo o custo do frete no campo "Custo Operacional" para ver o impacto no preço final. Geralmente, um ticket médio acima de R$40 suporta melhor a absorção do custo de entrega.',
      },
    },
  ],
};

export default function CalculadoraIFoodPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-orange-500 text-xs font-bold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-4">
            Ferramentas gratuitas
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Calculadora de Preço de Venda no{' '}
            <span className="text-orange-500">iFood</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Simule o preço ideal por pedido considerando a taxa de intermediação do iFood, custos operacionais, impostos e a margem que você precisa para ter lucro.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <MarketplaceCalculator marketplace="ifood" />

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Quer escalar seu negócio de delivery?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Nossa consultoria ajuda estabelecimentos a estruturarem operações lucrativas no iFood e nos principais marketplaces digitais.
          </p>
          <Link href="/consultoria" className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-xl text-lg">
            Agendar Consultoria
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-gray max-w-none">
        <h2>Como calcular o preço de venda no iFood</h2>
        <p>
          O iFood é a maior plataforma de delivery do Brasil e conecta milhões de consumidores a restaurantes, mercados e lojas. Para ser lucrativo no iFood, precificar corretamente cada item do cardápio ou catálogo é fundamental — as taxas da plataforma são significativas e, sem cálculo correto, é fácil operar no prejuízo.
        </p>

        <h2>Planos e taxas do iFood (2025)</h2>
        <p>O iFood oferece diferentes planos com estruturas de custos distintas:</p>
        <ul>
          <li>
            <strong>Plano Básico:</strong> taxa de intermediação de aproximadamente 12% por pedido.
            O estabelecimento é responsável pela entrega. Ideal para quem possui frota própria ou usa
            aplicativos de motoboys parceiros.
          </li>
          <li>
            <strong>Plano Entrega:</strong> taxa de aproximadamente 27% por pedido, mas o iFood
            disponibiliza entregadores parceiros. Conveniente, mas a margem é significativamente menor.
          </li>
        </ul>
        <p>
          A calculadora usa o Plano Básico como padrão (12%), mas você pode ajustar a comissão para o
          seu plano exato. Consulte seu painel ou contrato do iFood para confirmar a taxa específica.
        </p>

        <h2>Custo operacional no delivery: o que incluir</h2>
        <p>
          O campo &quot;Custo Operacional&quot; deve incluir todos os custos variáveis de operação além da
          taxa da plataforma e do custo do produto:
        </p>
        <ul>
          <li>Embalagens (sachês, caixas, sacos térmicos)</li>
          <li>Taxa do motoboy ou serviço de entrega (se não usar o Plano Entrega do iFood)</li>
          <li>Promoções e descontos em campanhas</li>
          <li>Custos de manuseio e preparo por pedido</li>
        </ul>
        <p>
          Para um restaurante típico, o custo operacional variável gira entre 5% e 10% do faturamento.
          Inclua um valor realista para obter um preço ideal preciso.
        </p>

        <h2>Estratégias de precificação no iFood</h2>
        <ul>
          <li>
            <strong>Preço mínimo de viabilidade:</strong> use a calculadora para encontrar o preço mínimo
            que cobre todos os custos com sua margem desejada. Nunca venda abaixo desse valor.
          </li>
          <li>
            <strong>Ticket médio:</strong> quanto maior o ticket médio do pedido, menor é o impacto
            da taxa fixa de R$1,00 e dos custos fixos por pedido.
          </li>
          <li>
            <strong>Frete grátis estratégico:</strong> ofereça frete grátis a partir de um valor mínimo
            de pedido que garanta a absorção do custo de entrega na margem.
          </li>
          <li>
            <strong>Combos e kits:</strong> monte combos com margem média maior para compensar
            itens de baixa margem individual.
          </li>
        </ul>

        <h2>Perguntas frequentes sobre precificação no iFood</h2>

        <h3>O iFood cobra taxa de adesão?</h3>
        <p>
          O iFood pode cobrar uma mensalidade ou taxa de adesão dependendo do contrato e plano.
          No modo avançado da calculadora, inclua esse custo no campo &quot;Custos Fixos Mensais&quot; para
          que seja rateado no preço de venda.
        </p>

        <h3>Como calcular o preço com frete grátis?</h3>
        <p>
          Para absorver o custo da entrega no preço, some o custo médio de entrega ao custo do produto
          ou inclua-o no &quot;Custo Operacional&quot;. A calculadora distribuirá este custo automaticamente
          no preço de venda ideal.
        </p>
      </article>
    </>
  );
}
