import type { Metadata } from 'next';
import Link from 'next/link';
import MarketplaceCalculator from '@/components/MarketplaceCalculator';

export const metadata: Metadata = {
  title: 'Calculadora de Marketplace: Calcule Preço e Lucro',
  description:
    'Ferramenta gratuita para calcular o preço ideal de venda em qualquer marketplace. Simule comissão, taxas, impostos e margem de lucro. Veja também: Mercado Livre, Shopee, Magalu e iFood.',
  keywords:
    'calculadora marketplace, calcular preço marketplace, precificação marketplace, calcular lucro marketplace, ferramenta precificação ecommerce',
  alternates: { canonical: '/ferramentas/calculadora-marketplace' },
  openGraph: {
    title: 'Calculadora de Marketplace: Calcule Preço e Lucro | Escala Ecommerce',
    description: 'Calcule o preço ideal de venda em qualquer marketplace. Simule comissão, taxas, impostos e margem. Grátis.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Precificação para Marketplace',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'WEB',
  description: 'Calcule o preço ideal de venda em qualquer marketplace brasileiro, considerando comissão, taxas fixas, impostos e margem de lucro.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'Escala Ecommerce', url: 'https://escalaecommerce.com.br' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como calcular o preço de venda em um marketplace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O preço de venda ideal deve cobrir o custo do produto, a comissão do marketplace, as taxas fixas por transação, os impostos, os custos operacionais, o rateio dos custos fixos e ainda gerar a margem de lucro desejada. A fórmula é: Preço = (Custo + Taxas Fixas) / (1 - Comissão% - Impostos% - Custos Variáveis% - Margem%).',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual marketplace tem as menores taxas no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varia por categoria e volume. A Shopee geralmente tem taxas totais um pouco menores para produtos de menor ticket. O Mercado Livre oferece maior volume de vendas. O Magalu é forte em eletrodomésticos. Use as calculadoras específicas de cada marketplace para comparar a margem real do seu produto em cada canal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como calcular a margem de lucro no marketplace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Margem de lucro = (Preço de venda - Todos os custos) / Preço de venda × 100. Use a calculadora definindo a margem desejada para obter o preço de venda mínimo que garante esse retorno.',
      },
    },
  ],
};

const SPECIFIC_CALCULATORS = [
  {
    key: 'mercado-livre',
    name: 'Mercado Livre',
    icon: '🛒',
    slug: 'calculadora-mercado-livre',
    desc: 'Comissão 14%, taxa fixa R$7,50',
    color: 'hover:border-yellow-300 hover:bg-yellow-50',
  },
  {
    key: 'shopee',
    name: 'Shopee',
    icon: '🧡',
    slug: 'calculadora-shopee',
    desc: 'Taxa de serviço 14% + R$2,00',
    color: 'hover:border-orange-300 hover:bg-orange-50',
  },
  {
    key: 'magalu',
    name: 'Magalu',
    icon: '🛍️',
    slug: 'calculadora-magalu',
    desc: 'Comissão 16%, sem taxa fixa',
    color: 'hover:border-blue-300 hover:bg-blue-50',
  },
  {
    key: 'ifood',
    name: 'iFood',
    icon: '🍕',
    slug: 'calculadora-ifood',
    desc: 'Plano Básico 12% + R$1,00',
    color: 'hover:border-red-300 hover:bg-red-50',
  },
  {
    key: 'shein',
    name: 'Shein',
    icon: '👗',
    slug: 'calculadora-shein',
    desc: 'Comissão ~15%, sem taxa fixa',
    color: 'hover:border-pink-300 hover:bg-pink-50',
  },
  {
    key: '99food',
    name: '99Food',
    icon: '🚗',
    slug: 'calculadora-99food',
    desc: 'Plano Entrega ~27% + R$1,50',
    color: 'hover:border-yellow-300 hover:bg-yellow-50',
  },
  {
    key: 'tiktok-shop',
    name: 'TikTok Shop',
    icon: '🎵',
    slug: 'calculadora-tiktok-shop',
    desc: 'Comissão ~5%, sem taxa fixa',
    color: 'hover:border-gray-300 hover:bg-gray-50',
  },
  {
    key: 'amazon',
    name: 'Amazon',
    icon: '📦',
    slug: 'calculadora-amazon',
    desc: 'Taxa de referência ~12%',
    color: 'hover:border-orange-300 hover:bg-orange-50',
  },
];

export default function CalculadoraMarketplacePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-orange-500 text-xs font-bold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-4">
            Hub de Ferramentas
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Calculadora de{' '}
            <span className="text-orange-500">Precificação para Marketplace</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Calcule o preço ideal de venda em qualquer marketplace. Configure a comissão, taxas, impostos e margem desejada para obter o preço correto instantaneamente.
          </p>
        </div>
      </section>

      {/* Specific Calculators Grid */}
      <section className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-base font-bold text-gray-700 mb-6">
            Calcule para um marketplace específico:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SPECIFIC_CALCULATORS.map((calc) => (
              <Link
                key={calc.key}
                href={`/ferramentas/${calc.slug}`}
                className={`flex flex-col items-center gap-2 bg-white border border-gray-200 rounded-2xl p-5 text-center transition group ${calc.color}`}
              >
                <span className="text-3xl">{calc.icon}</span>
                <span className="font-bold text-gray-900 text-sm">{calc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Generic Calculator */}
      <MarketplaceCalculator marketplace="marketplace" hideTabs />

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Quer escalar suas vendas nos marketplaces?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Calculadora mostra o número. Nós ajudamos a construir a operação. Consultoria especializada em estratégia de marketplace e e-commerce.
          </p>
          <Link href="/consultoria" className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-xl text-lg">
            Agendar Consultoria
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-gray max-w-none">
        <h2>Como calcular o preço de venda em marketplaces brasileiros</h2>
        <p>
          Precificar um produto para vender em marketplaces vai muito além de somar o custo ao lucro desejado. Cada marketplace tem sua estrutura de taxas — comissão percentual, taxa fixa por pedido, planos de frete — e você ainda precisa cobrir impostos, custos operacionais e custos fixos antes de ver lucro real.
        </p>
        <p>
          Esta calculadora usa uma fórmula precisa que considera todos esses custos simultaneamente para calcular o preço de venda mínimo que garante a rentabilidade desejada.
        </p>

        <h2>A fórmula de precificação para marketplaces</h2>
        <p>A fórmula base usada pela calculadora é:</p>
        <blockquote>
          <strong>Preço = (Custo do produto + Taxas fixas) ÷ (1 − Comissão% − Impostos% − Custo operacional% − Rateio custos fixos% − Margem desejada%)</strong>
        </blockquote>
        <p>
          O denominador representa a &quot;fatia&quot; do preço que realmente fica com o vendedor após todas as deduções. Se o denominador for zero ou negativo, significa que os custos superam o preço — a operação é inviável nessa configuração.
        </p>

        <h2>Custos que todo vendedor de marketplace precisa incluir</h2>

        <h3>1. Comissão do marketplace</h3>
        <p>
          Percentual cobrado sobre o valor de venda. Varia entre 9% e 20% dependendo do marketplace e categoria. É o principal custo variável.
        </p>

        <h3>2. Taxa fixa por transação</h3>
        <p>
          Alguns marketplaces cobram um valor fixo por pedido (ex: R$7,50 no Mercado Livre para produtos entre R$12 e R$79). Esse custo tem maior impacto em produtos de baixo ticket.
        </p>

        <h3>3. Impostos</h3>
        <p>
          Empresas no Simples Nacional pagam a partir de 6% de tributação sobre o faturamento. Empresas no Lucro Presumido ou Lucro Real têm alíquotas maiores. Para CPF (Pessoa Física), o rendimento é tributado pelo IR. Consulte seu contador para usar a alíquota correta.
        </p>

        <h3>4. Custos operacionais</h3>
        <p>
          Inclui embalagem, mão de obra para separação/expedição, etiquetas, plástico bolha e outros consumíveis. Typically representa 3-8% do faturamento para operações em marketplace.
        </p>

        <h3>5. Rateio de custos fixos</h3>
        <p>
          Aluguel, salários fixos, internet, ferramentas de gestão — todos esses custos precisam ser cobertos pelas vendas. A calculadora divide automaticamente os custos fixos mensais pelo faturamento previsto para chegar ao percentual a ser incluído em cada venda.
        </p>

        <h2>Comparando marketplaces: qual tem melhor margem?</h2>
        <p>
          Não existe resposta única — depende do produto, categoria e volume. A recomendação é usar as calculadoras específicas de cada marketplace (links acima) com o mesmo produto e comparar os preços ideais e margens resultantes.
        </p>
        <p>
          Geralmente, marketplaces com menor comissão permitem preços mais competitivos ou margens maiores. Mas volume de vendas, reputação da plataforma e perfil do comprador também importam na decisão de canal.
        </p>
      </article>
    </>
  );
}
