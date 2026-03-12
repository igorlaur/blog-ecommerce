import type { Metadata } from 'next';
import Link from 'next/link';
import MarketplaceCalculator from '@/components/MarketplaceCalculator';

export const metadata: Metadata = {
  title: 'Calculadora TikTok Shop: Preço de Venda e Lucro',
  description:
    'Calcule o preço ideal para vender no TikTok Shop Brasil. Simule comissão, impostos, custos fixos e margem de lucro. Ferramenta grátis para creators e lojistas do TikTok.',
  keywords: 'calculadora tiktok shop, calcular preço tiktok shop, taxas tiktok shop, precificação tiktok, tiktok commerce brasil',
  alternates: { canonical: '/ferramentas/calculadora-tiktok-shop' },
  openGraph: {
    title: 'Calculadora TikTok Shop: Preço de Venda e Lucro | Escala Ecommerce',
    description: 'Calcule o preço ideal para vender no TikTok Shop. Simule comissão, impostos e margem de lucro. Grátis.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Preço de Venda no TikTok Shop',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'WEB',
  description: 'Calcule o preço ideal de venda no TikTok Shop considerando comissão, impostos, custos fixos e margem de lucro.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'Escala Ecommerce', url: 'https://escalaecommerce.com.br' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual é a comissão do TikTok Shop no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O TikTok Shop pratica comissões mais baixas do que os marketplaces tradicionais para atrair lojistas. Em 2025, as taxas variam de 3% a 8% conforme a categoria. Moda, beleza e eletrônicos ficam tipicamente em torno de 5%. As taxas podem mudar conforme o TikTok expande sua operação no Brasil.',
      },
    },
    {
      '@type': 'Question',
      name: 'O TikTok Shop cobra taxa fixa por pedido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na maioria das categorias, o TikTok Shop não cobra taxa fixa por pedido — apenas a comissão percentual sobre o valor de venda. Isso beneficia especialmente produtos de menor ticket, que seriam mais penalizados por taxas fixas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vale a pena vender no TikTok Shop em vez do Mercado Livre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende do produto e da estratégia. O TikTok Shop tem comissões menores (3-8% vs 14%+ no ML), mas menor base de compradores com intenção de compra imediata. É ideal para produtos com apelo visual forte e para criar conteúdo que gera demanda. O Mercado Livre tem maior volume e compradores ativos buscando produtos. Use as calculadoras de ambos e compare.',
      },
    },
  ],
};

export default function CalculadoraTikTokShopPage() {
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
            <span className="text-orange-500">TikTok Shop</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Calcule o preço ideal para o TikTok Shop Brasil considerando comissão por categoria, impostos, custos fixos e a margem que você precisa para ser lucrativo.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <MarketplaceCalculator marketplace="tiktok-shop" />

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Quer escalar suas vendas no TikTok Shop?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Nossa consultoria ajuda lojistas e creators a construírem operações lucrativas no TikTok Shop e nos principais marketplaces do Brasil.
          </p>
          <Link href="/consultoria" className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-xl text-lg">
            Agendar Consultoria
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-gray max-w-none">
        <h2>Como calcular o preço de venda no TikTok Shop</h2>
        <p>
          O TikTok Shop chegou ao Brasil como uma das apostas mais importantes do comércio social (social commerce). A plataforma combina conteúdo em vídeo com compras diretas, criando uma jornada de descoberta e compra integrada. Para ser rentável nesse canal, a precificação precisa considerar as taxas específicas da plataforma.
        </p>

        <h2>Comissões do TikTok Shop por categoria (2025)</h2>
        <p>O TikTok Shop pratica comissões competitivas para atrair lojistas ao Brasil:</p>
        <ul>
          <li><strong>Moda e roupas:</strong> ~5%</li>
          <li><strong>Beleza e cosméticos:</strong> ~5%</li>
          <li><strong>Eletrônicos e gadgets:</strong> ~4-6%</li>
          <li><strong>Casa e decoração:</strong> ~5-7%</li>
          <li><strong>Fitness e esportes:</strong> ~5%</li>
          <li><strong>Alimentos e bebidas:</strong> ~3-5%</li>
        </ul>
        <p>
          Essas taxas são substancialmente menores que os marketplaces tradicionais. Elas podem mudar conforme o TikTok consolida sua operação no mercado brasileiro — consulte a central de vendedores para valores atualizados.
        </p>

        <h2>O modelo de social commerce do TikTok Shop</h2>
        <p>
          No TikTok Shop, as vendas acontecem de duas formas principais:
        </p>
        <ul>
          <li><strong>Live shopping:</strong> transmissões ao vivo com produtos disponíveis para compra instantânea durante o vídeo</li>
          <li><strong>Vídeo shoppable:</strong> produtos linkados em vídeos curtos que aparecem no feed dos usuários</li>
        </ul>
        <p>
          Isso significa que, além do custo do produto e das taxas, você deve considerar o custo de produção de conteúdo como parte do custo operacional. Include tempo de gravação, edição e, eventualmente, parcerias com criadores no campo de Custo Operacional.
        </p>

        <h2>Vantagens e desvantagens do TikTok Shop vs. marketplaces tradicionais</h2>
        <p>
          <strong>Vantagens do TikTok Shop:</strong>
        </p>
        <ul>
          <li>Menores comissões (3-8% vs 12-17% nos marketplaces clássicos)</li>
          <li>Potencial viral: um vídeo pode gerar centenas de pedidos em horas</li>
          <li>Público jovem e engajado, aberto a novos produtos e marcas</li>
        </ul>
        <p>
          <strong>Desvantagens:</strong>
        </p>
        <ul>
          <li>Exige produção contínua de conteúdo (custo de tempo e dinheiro)</li>
          <li>Demanda é menos previsível (picos virais seguidos de calmaria)</li>
          <li>Base de compradores menor do que Mercado Livre e Shopee no Brasil</li>
        </ul>

        <h2>Como usar a calculadora para o TikTok Shop</h2>
        <p>
          Inclua no campo <strong>Custo Operacional</strong> uma estimativa dos custos de criação de conteúdo rateados pelo número de unidades esperadas por vídeo. Isso dará uma visão realista da margem nesse canal. A comissão padrão de 5% já está pré-configurada — ajuste conforme a categoria do seu produto.
        </p>
      </article>
    </>
  );
}
