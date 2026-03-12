import type { Metadata } from 'next';
import Link from 'next/link';
import MarketplaceCalculator from '@/components/MarketplaceCalculator';

export const metadata: Metadata = {
  title: 'Calculadora Shein Marketplace: Preço de Venda e Lucro',
  description:
    'Calcule o preço ideal para vender no marketplace da Shein. Simule comissão por categoria, impostos, custos fixos e margem de lucro. Ferramenta grátis para lojistas Shein.',
  keywords: 'calculadora shein, calcular preço shein, taxas shein marketplace, precificação shein, shein seller',
  alternates: { canonical: '/ferramentas/calculadora-shein' },
  openGraph: {
    title: 'Calculadora Shein Marketplace: Preço de Venda e Lucro | Escala Ecommerce',
    description: 'Calcule o preço ideal para vender na Shein. Simule comissão, impostos e margem de lucro. Grátis.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Preço de Venda na Shein',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'WEB',
  description: 'Calcule o preço ideal de venda no marketplace da Shein considerando comissão por categoria, impostos, custos fixos e margem de lucro.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'Escala Ecommerce', url: 'https://escalaecommerce.com.br' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual é a comissão da Shein para lojistas no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Shein cobra comissões que variam de 10% a 20% conforme a categoria. Moda feminina: ~14-16%. Acessórios: ~16-18%. Beleza e cuidados pessoais: ~12%. Use a calculadora ajustando a comissão para a sua categoria específica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como calcular o preço de venda na Shein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O preço ideal deve cobrir: custo do produto, comissão da Shein, impostos, custos operacionais (embalagem, frete, mão de obra), rateio dos custos fixos e a margem de lucro desejada. Use a calculadora preenchendo esses campos para obter o preço mínimo rentável.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Shein tem taxa fixa por pedido no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diferente do Mercado Livre e da Shopee, a Shein geralmente não cobra taxa fixa por pedido — apenas a comissão percentual sobre o valor vendido. Verifique o contrato da sua categoria, pois as condições podem variar.',
      },
    },
  ],
};

export default function CalculadoraSheinPage() {
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
            Calculadora de Preço de Venda na{' '}
            <span className="text-orange-500">Shein</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Calcule o preço ideal para o marketplace da Shein considerando comissão por categoria, impostos, custos fixos e a margem que você precisa.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <MarketplaceCalculator marketplace="shein" />

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Quer escalar suas vendas na Shein?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Nossa consultoria ajuda lojistas a estruturarem operações rentáveis na Shein e em outros marketplaces de moda.
          </p>
          <Link href="/consultoria" className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-xl text-lg">
            Agendar Consultoria
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-gray max-w-none">
        <h2>Como calcular o preço de venda no marketplace da Shein</h2>
        <p>
          A Shein abriu seu marketplace 3P (third-party) no Brasil, permitindo que lojistas independentes vendam pela plataforma. Para ser competitivo e lucrativo nesse canal, calcular o preço correto é o primeiro passo.
        </p>

        <h2>Comissões da Shein por categoria (2025)</h2>
        <p>A Shein cobra comissão percentual sobre o valor de venda conforme a categoria:</p>
        <ul>
          <li><strong>Moda feminina:</strong> 14-16%</li>
          <li><strong>Moda masculina:</strong> 14-16%</li>
          <li><strong>Acessórios e joias:</strong> 16-18%</li>
          <li><strong>Beleza e cuidados pessoais:</strong> 12-14%</li>
          <li><strong>Casa e decoração:</strong> 14-16%</li>
          <li><strong>Bebê e infantil:</strong> 12-14%</li>
        </ul>
        <p>
          Use a calculadora acima ajustando a comissão para a categoria específica do seu produto.
        </p>

        <h2>O perfil do comprador Shein e o impacto no preço</h2>
        <p>
          A Shein é conhecida por preços muito competitivos. Os compradores na plataforma têm alta sensibilidade a preço. Isso significa que a precificação precisa ser muito precisa: alta o suficiente para garantir rentabilidade, mas competitiva o suficiente para converter vendas.
        </p>
        <p>
          Use a margem desejada como ponto de partida e compare o preço calculado com produtos similares na plataforma. Se o preço ideal ficar acima dos concorrentes, avalie reduzir o custo do produto ou a margem para esse canal.
        </p>

        <h2>Logística na Shein: cross-border vs. local</h2>
        <p>
          A Shein permite tanto vendedores com estoque local quanto vendedores em modelo cross-border. Para lojistas brasileiros com estoque local, os custos de frete e embalagem devem ser incluídos no campo <strong>Custo Operacional</strong> da calculadora.
        </p>

        <h2>Comparando Shein, Shopee e Mercado Livre</h2>
        <p>
          Para produtos de moda e acessórios, os três marketplaces são relevantes:
        </p>
        <ul>
          <li><strong>Shein:</strong> alto volume em moda, compradores focados em preço baixo</li>
          <li><strong>Shopee:</strong> forte em moda e produtos do dia a dia, base de usuários crescente no Brasil</li>
          <li><strong>Mercado Livre:</strong> maior marketplace do Brasil, tickets médios mais altos em moda</li>
        </ul>
        <p>
          Use as calculadoras específicas de cada marketplace para comparar qual canal oferece melhor margem para o seu produto.
        </p>
      </article>
    </>
  );
}
