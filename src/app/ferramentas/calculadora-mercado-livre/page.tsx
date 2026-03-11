import type { Metadata } from 'next';
import Link from 'next/link';
import MarketplaceCalculator from '@/components/MarketplaceCalculator';

export const metadata: Metadata = {
  title: 'Calculadora Mercado Livre: Simule Taxas e Lucro',
  description:
    'Calcule o preço ideal de venda no Mercado Livre. Simule comissão, taxa fixa, impostos, custos fixos e margem de lucro automaticamente. Ferramenta gratuita.',
  keywords: 'calculadora mercado livre, calcular preço mercado livre, taxas mercado livre, precificação mercado livre, calcular lucro mercado livre',
  alternates: { canonical: '/ferramentas/calculadora-mercado-livre' },
  openGraph: {
    title: 'Calculadora Mercado Livre: Simule Taxas e Lucro | Escala Ecommerce',
    description: 'Calcule o preço ideal de venda no Mercado Livre. Simule comissão, taxas, impostos e margem de lucro. Grátis.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Preço de Venda no Mercado Livre',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'WEB',
  description: 'Calcule o preço ideal de venda no Mercado Livre considerando comissão, taxa fixa, impostos, custos operacionais e margem de lucro.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'Escala Ecommerce', url: 'https://escalaecommerce.com.br' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual é a comissão do Mercado Livre em 2025?',
      acceptedAnswer: { '@type': 'Answer', text: 'A comissão do Mercado Livre varia entre 11% e 17% dependendo da categoria. Para a maioria das categorias, o Plano Clássico cobra 14%. Moda e vestuário pagam 17%; informática e eletrônicos pagam entre 11% e 14%.' },
    },
    {
      '@type': 'Question',
      name: 'O Mercado Livre cobra taxa fixa por venda?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sim. Para produtos com preço entre R$12 e R$79, há uma taxa fixa de R$7,50 por venda. Produtos acima de R$79 não pagam taxa fixa. Produtos abaixo de R$12 pagam R$5,00 de taxa fixa.' },
    },
    {
      '@type': 'Question',
      name: 'Como calcular o preço de venda no Mercado Livre?',
      acceptedAnswer: { '@type': 'Answer', text: 'Use a fórmula: Preço = (Custo + Taxa fixa + Taxa CPF) ÷ (1 − Comissão% − Impostos% − Custo operacional% − Rateio custos fixos% − Margem%). A calculadora acima faz esse cálculo automaticamente.' },
    },
  ],
};

export default function CalculadoraMercadoLivrePage() {
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
            <span className="text-orange-500">Mercado Livre</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Simule seu preço de venda considerando comissão, taxa fixa, impostos, custos fixos e margem de lucro. Resultado instantâneo e exportável.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <MarketplaceCalculator marketplace="mercado-livre" />

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Quer aumentar sua margem e escalar suas vendas?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            A calculadora mostra o número. Nós ajudamos a chegar lá. Consultoria especializada em Mercado Livre, com operação real de +R$5M em vendas.
          </p>
          <Link
            href="/consultoria"
            className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-xl text-lg"
          >
            Agendar Consultoria
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-gray max-w-none">
        <h2>Como calcular o preço de venda no Mercado Livre</h2>
        <p>
          Precificar corretamente no Mercado Livre é um dos maiores desafios para vendedores do marketplace. Com taxas que variam por categoria e modalidade de anúncio, um cálculo errado significa vender no prejuízo sem perceber. Esta calculadora foi desenvolvida para resolver esse problema: informe o custo do produto, configure as taxas da sua categoria e defina a margem desejada — o preço ideal é calculado automaticamente.
        </p>

        <h2>Como funcionam as taxas do Mercado Livre em 2025</h2>
        <p>O Mercado Livre cobra três tipos principais de custos por venda:</p>
        <ul>
          <li><strong>Comissão percentual:</strong> varia entre 11% e 17% dependendo da categoria e do plano (Grátis, Clássico ou Premium). Para a maioria das categorias, o Plano Clássico cobra 14%.</li>
          <li><strong>Taxa fixa por transação:</strong> R$7,50 para produtos entre R$12,00 e R$79,00. Acima de R$79,00, a taxa fixa não se aplica.</li>
          <li><strong>Taxa de vendedor CPF:</strong> R$3,00 adicionais por venda para quem opera como Pessoa Física. Vendedores CNPJ não pagam essa taxa.</li>
        </ul>

        <h2>Plano Clássico vs. Premium: qual impacta mais o preço?</h2>
        <p>
          O Plano Premium oferece frete grátis para o comprador, mas cobra comissão mais alta (até 17% em algumas categorias). O Plano Clássico tem comissão menor, mas o frete é pago pelo comprador ou subsidiado parcialmente. Para produtos de ticket médio acima de R$100, o Premium geralmente aumenta a conversão o suficiente para compensar a comissão maior. Use a calculadora com ambos os percentuais para comparar o impacto no seu preço ideal.
        </p>

        <h2>FULL e FLEX: inclua os custos no custo operacional</h2>
        <p>
          Se você utiliza o FULL (fulfillment do Mercado Livre), há taxas de armazenagem e manuseio que variam conforme o peso e dimensões do produto. Se usa FLEX, há custos de coleta. Inclua esses valores no campo <strong>&quot;Custo Operacional&quot;</strong> da calculadora. Uma operação FULL bem otimizada pode reduzir o custo operacional total graças à escala e à logística centralizada.
        </p>

        <h2>Fórmula de precificação para o Mercado Livre</h2>
        <p>A calculadora usa a seguinte fórmula:</p>
        <blockquote>
          Preço = (Custo do produto + Taxa fixa + Taxa CPF) ÷ (1 − Comissão% − Impostos% − Custo operacional% − Rateio custos fixos% − Margem desejada%)
        </blockquote>
        <p>
          O rateio de custos fixos é calculado automaticamente dividindo seus custos fixos mensais pelo faturamento mensal informado. Isso distribui proporcionalmente o aluguel, salários e outros fixos em cada unidade vendida.
        </p>

        <h2>Dicas para aumentar a margem no Mercado Livre</h2>
        <ul>
          <li>Migre de CPF para CNPJ para eliminar a taxa extra de R$3,00 por venda</li>
          <li>Trabalhe com produtos de ticket médio acima de R$79 para evitar a taxa fixa</li>
          <li>Negocie diretamente com fabricantes ou importadores para reduzir o custo de aquisição</li>
          <li>Registre EAN próprio para proteger o catálogo e evitar guerra de preços</li>
          <li>Monitore as comissões por categoria — escolher a categoria certa pode reduzir de 17% para 14%</li>
        </ul>

        <h2>Perguntas frequentes sobre precificação no Mercado Livre</h2>

        <h3>O Mercado Livre cobra taxa de anúncio?</h3>
        <p>Não — anunciar é gratuito. O Mercado Livre só cobra no momento da venda, pela comissão percentual e, quando aplicável, pela taxa fixa.</p>

        <h3>Como calcular o frete no preço de venda?</h3>
        <p>
          No Plano Premium, o frete grátis é coberto pela comissão mais alta. No Plano Clássico, inclua o custo estimado do frete no campo &quot;Custo Operacional&quot; da calculadora para que ele seja diluído no preço.
        </p>

        <h3>Qual é o imposto mínimo para vender no Mercado Livre?</h3>
        <p>
          Para CNPJ no Simples Nacional com faturamento até R$180k/ano, a alíquota inicial é 6%. Para CPF, os rendimentos são tributados pelo IRPF conforme a faixa de renda. Use a alíquota efetiva do seu regime fiscal no campo &quot;Impostos&quot;.
        </p>
      </article>
    </>
  );
}
