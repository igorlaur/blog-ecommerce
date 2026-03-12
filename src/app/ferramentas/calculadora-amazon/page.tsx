import type { Metadata } from 'next';
import Link from 'next/link';
import MarketplaceCalculator from '@/components/MarketplaceCalculator';

export const metadata: Metadata = {
  title: 'Calculadora Amazon Brasil: Preço de Venda e Lucro',
  description:
    'Calcule o preço ideal para vender na Amazon Brasil. Simule taxa de referência por categoria, impostos, custos fixos e margem de lucro. Ferramenta grátis para sellers Amazon.',
  keywords: 'calculadora amazon brasil, calcular preço amazon, taxa referência amazon, precificação amazon, amazon seller brasil',
  alternates: { canonical: '/ferramentas/calculadora-amazon' },
  openGraph: {
    title: 'Calculadora Amazon Brasil: Preço de Venda e Lucro | Escala Ecommerce',
    description: 'Calcule o preço ideal para vender na Amazon Brasil. Simule taxa de referência, impostos e margem. Grátis.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Preço de Venda na Amazon Brasil',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'WEB',
  description: 'Calcule o preço ideal de venda na Amazon Brasil considerando taxas de referência por categoria, impostos, custos de armazenamento e margem de lucro.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'Escala Ecommerce', url: 'https://escalaecommerce.com.br' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual é a taxa de referência da Amazon Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Amazon Brasil cobra uma taxa de referência (comissão) que varia de 8% a 15% conforme a categoria. Eletrônicos e informática: 8-10%. Moda e acessórios: 14-15%. Casa e decoração: 12-14%. Brinquedos: 12%. Demais categorias: ~12%. Consulte a tabela oficial da Amazon para valores atualizados da sua categoria.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Amazon Brasil tem taxa fixa por venda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para o plano de venda por unidade, a Amazon cobra uma taxa fixa de fechamento de R$1,00 em algumas categorias (como mídia/livros). Para a maioria dos produtos, há apenas a taxa de referência percentual. Sellers com plano profissional (assinatura mensal) não pagam taxa por item.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é FBA na Amazon e como afeta o preço?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FBA (Fulfillment by Amazon) é o serviço em que a Amazon armazena, embala e envia seus produtos. Os custos de FBA incluem armazenagem e fulfillment por unidade, que variam por tamanho e peso. Sellers FBA devem incluir esses custos no campo Custo Operacional da calculadora para obter o preço correto.',
      },
    },
  ],
};

export default function CalculadoraAmazonPage() {
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
            <span className="text-orange-500">Amazon Brasil</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Calcule o preço ideal para vender na Amazon considerando taxa de referência por categoria, impostos, custos de logística e a margem que você precisa para ser lucrativo.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <MarketplaceCalculator marketplace="amazon" />

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Quer escalar suas vendas na Amazon?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Nossa consultoria ajuda sellers a estruturarem operações rentáveis na Amazon Brasil e nos principais marketplaces do país.
          </p>
          <Link href="/consultoria" className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-xl text-lg">
            Agendar Consultoria
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-gray max-w-none">
        <h2>Como calcular o preço de venda na Amazon Brasil</h2>
        <p>
          A Amazon é um dos maiores marketplaces do mundo e tem crescido consistentemente no Brasil. Para ser competitivo e lucrativo na plataforma, a precificação precisa considerar a taxa de referência (comissão), as taxas de logística (FBA ou frete próprio) e a estrutura tributária brasileira.
        </p>

        <h2>Taxas de referência da Amazon por categoria (2025)</h2>
        <p>A Amazon cobra uma taxa de referência sobre o preço de venda de cada item:</p>
        <ul>
          <li><strong>Eletrônicos e informática:</strong> 8-10%</li>
          <li><strong>Smartphones e tablets:</strong> 8%</li>
          <li><strong>Eletrodomésticos:</strong> 10-12%</li>
          <li><strong>Moda e vestuário:</strong> 14-15%</li>
          <li><strong>Calçados e bolsas:</strong> 14%</li>
          <li><strong>Casa e decoração:</strong> 12-14%</li>
          <li><strong>Brinquedos e jogos:</strong> 12%</li>
          <li><strong>Beleza e saúde:</strong> 12%</li>
          <li><strong>Esportes e lazer:</strong> 12%</li>
          <li><strong>Ferramentas e construção:</strong> 12%</li>
          <li><strong>Demais categorias:</strong> 12% (padrão)</li>
        </ul>
        <p>
          Use a calculadora ajustando a comissão para a taxa exata da sua categoria. A taxa padrão de 12% já está pré-configurada.
        </p>

        <h2>FBA vs. FBM: qual o impacto no preço?</h2>
        <p>
          Sellers na Amazon podem optar por dois modelos de logística:
        </p>
        <ul>
          <li>
            <strong>FBA (Fulfillment by Amazon):</strong> a Amazon armazena, embala e entrega. Você paga taxas de armazenamento mensal e custo de fulfillment por unidade. Vantagem: Prime Badge, maior visibilidade e conversão.
          </li>
          <li>
            <strong>FBM (Fulfillment by Merchant):</strong> você gerencia o estoque e a entrega. Menores custos de plataforma, mas maior trabalho operacional.
          </li>
        </ul>
        <p>
          Para calcular o preço com FBA, inclua os custos de fulfillment e armazenamento no campo <strong>Custo Operacional</strong> da calculadora. Para FBM, inclua os custos de frete e manuseio.
        </p>

        <h2>Amazon vs. Mercado Livre: qual escolher?</h2>
        <p>
          A escolha entre Amazon e Mercado Livre depende da categoria e estratégia:
        </p>
        <ul>
          <li><strong>Amazon:</strong> forte em eletrônicos, livros e produtos de alto valor. Menores taxas em tecnologia (8% vs 14% no ML). Exige qualidade de catálogo elevada.</li>
          <li><strong>Mercado Livre:</strong> maior tráfego e base de compradores no Brasil. Mais democrático entre categorias. Melhor para produtos de consumo geral.</li>
        </ul>
        <p>
          Use as calculadoras de cada marketplace para comparar a margem real do seu produto em ambas as plataformas antes de decidir onde focar.
        </p>

        <h2>Posso vender na Amazon Brasil como pessoa física?</h2>
        <p>
          A Amazon Brasil aceita vendedores com CPF ou CNPJ. Vendedores CPF devem atentar para a tributação como pessoa física — o lucro entra na base do IR conforme tabela progressiva. Vendedores CNPJ no Simples Nacional geralmente pagam entre 6% e 11% de impostos. Configure o campo <strong>Impostos</strong> da calculadora conforme sua situação tributária para obter um cálculo preciso.
        </p>
      </article>
    </>
  );
}
