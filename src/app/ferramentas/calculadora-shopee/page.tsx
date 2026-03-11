import type { Metadata } from 'next';
import Link from 'next/link';
import MarketplaceCalculator from '@/components/MarketplaceCalculator';

export const metadata: Metadata = {
  title: 'Calculadora Shopee: Calcule Preço e Lucro',
  description:
    'Calcule o preço ideal de venda na Shopee. Simule a taxa de serviço, taxa fixa, impostos, custos operacionais e margem de lucro de forma automática. Grátis.',
  keywords: 'calculadora shopee, calcular preço shopee, taxas shopee, precificação shopee, calcular lucro shopee',
  alternates: { canonical: '/ferramentas/calculadora-shopee' },
  openGraph: {
    title: 'Calculadora Shopee: Calcule Preço e Lucro | Escala Ecommerce',
    description: 'Calcule o preço ideal de venda na Shopee. Simule taxas, impostos e margem de lucro. Grátis.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Preço de Venda na Shopee',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'WEB',
  description: 'Calcule o preço ideal de venda na Shopee considerando taxa de serviço, taxa fixa, impostos, custos operacionais e margem de lucro.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'Escala Ecommerce', url: 'https://escalaecommerce.com.br' },
};

export default function CalculadoraShopeePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-orange-500 text-xs font-bold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-4">
            Ferramentas gratuitas
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Calculadora de Preço de Venda na{' '}
            <span className="text-orange-500">Shopee</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Simule seu preço de venda considerando a taxa de serviço Shopee, taxa fixa, impostos e margem de lucro. Resultado instantâneo.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <MarketplaceCalculator marketplace="shopee" />

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Quer aumentar sua margem e escalar suas vendas?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            A calculadora mostra o número. Nós ajudamos a chegar lá. Consultoria especializada em Shopee e multiplos marketplaces.
          </p>
          <Link href="/consultoria" className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-xl text-lg">
            Agendar Consultoria
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-gray max-w-none">
        <h2>Como calcular o preço de venda na Shopee</h2>
        <p>
          A Shopee é um dos marketplaces de crescimento mais rápido no Brasil e oferece taxas competitivas para vendedores. Mesmo assim, calcular o preço de forma incorreta pode destruir a margem, especialmente em categorias altamente competitivas onde a diferença de R$1,00 no preço impacta o posicionamento nos resultados de busca.
        </p>

        <h2>Como funcionam as taxas da Shopee em 2025</h2>
        <p>A Shopee cobra:</p>
        <ul>
          <li><strong>Taxa de serviço:</strong> 14% sobre o valor da venda para a maioria das categorias. Categorias como eletrônicos e celulares podem ter taxas menores (9-12%). Moda e acessórios ficam em torno de 14-17%.</li>
          <li><strong>Taxa fixa por pedido:</strong> R$2,00 por pedido, independente do valor total.</li>
          <li><strong>Programas de frete grátis:</strong> o custo do frete grátis é absorvido pela Shopee em programas promocionais, mas você pode subsidiar parte do frete como estratégia de preço.</li>
        </ul>

        <h2>Shopee vs. Mercado Livre: qual tem melhor margem?</h2>
        <p>
          Para a maioria dos produtos, a Shopee cobra taxas totais (comissão + taxa fixa) ligeiramente menores que o Mercado Livre no Plano Premium, mas pode ser comparável ao Plano Clássico do ML. A verdadeira diferença está no volume: a Shopee tem crescido em volume de vendas e, para determinadas categorias (moda, acessórios, produtos importados), pode oferecer melhor custo-benefício.
        </p>
        <p>
          Use as calculadoras específicas de cada marketplace para comparar os preços ideais e as margens. A diferença de 2-3 pontos percentuais na comissão se traduz diretamente em preço mais competitivo ou margem maior.
        </p>

        <h2>Estratégias de precificação na Shopee</h2>
        <ul>
          <li>Use os cupons e cashbacks da Shopee como ferramenta de aquisição, mas calcule o custo no seu preço base</li>
          <li>Produtos com ticket médio acima de R$50 têm melhor absorção da taxa fixa de R$2,00</li>
          <li>Para itens de baixo valor, a taxa fixa representa uma porcentagem maior — priorize kits ou bundles</li>
          <li>Monitore os rankings e ajuste preços dinamicamente usando a calculadora como base</li>
        </ul>

        <h2>Frete grátis na Shopee: como calcular o impacto</h2>
        <p>
          Quando você participa dos programas de frete grátis da Shopee, o marketplace subsidia parte ou totalidade do frete. Porém, em algumas campanhas, o vendedor absorve um percentual. Inclua esses custos no campo &quot;Custo Operacional&quot; da calculadora para garantir que o preço final cubra todos os custos de envio.
        </p>

        <h2>Perguntas frequentes sobre a Shopee</h2>

        <h3>A Shopee cobra mensalidade para vender?</h3>
        <p>Não. A Shopee não cobra mensalidade para vendedores. As taxas são cobradas apenas por transação (taxa de serviço + taxa fixa por pedido).</p>

        <h3>Como funciona o ranking de produtos na Shopee?</h3>
        <p>
          O algoritmo da Shopee considera preço, avaliações, taxa de conversão, tempo de resposta e participação em campanhas. Precificar corretamente é fundamental para ser competitivo nos rankings sem sacrificar a margem.
        </p>
      </article>
    </>
  );
}
