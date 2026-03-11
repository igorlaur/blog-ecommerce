import type { Metadata } from 'next';
import Link from 'next/link';
import MarketplaceCalculator from '@/components/MarketplaceCalculator';

export const metadata: Metadata = {
  title: 'Calculadora Magalu: Preço de Venda e Lucro',
  description:
    'Calcule o preço ideal para vender no Magalu. Simule comissão, impostos, custos fixos e margem de lucro automaticamente. Ferramenta grátis para vendedores do Magazine Luiza.',
  keywords: 'calculadora magalu, calcular preço magalu, taxas magalu, precificação magalu, magazine luiza marketplace',
  alternates: { canonical: '/ferramentas/calculadora-magalu' },
  openGraph: {
    title: 'Calculadora Magalu: Preço de Venda e Lucro | Escala Ecommerce',
    description: 'Calcule o preço ideal para vender no Magalu. Simule comissão, impostos e margem de lucro. Grátis.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Preço de Venda no Magalu',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'WEB',
  description: 'Calcule o preço ideal de venda no Magazine Luiza considerando comissão, impostos, custos fixos e margem de lucro.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'Escala Ecommerce', url: 'https://escalaecommerce.com.br' },
};

export default function CalculadoraMagaluPage() {
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
            Calculadora de Preço de Venda no{' '}
            <span className="text-orange-500">Magalu</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Calcule o preço ideal para o Magazine Luiza Marketplace considerando comissão por categoria, impostos, custos fixos e a margem que você precisa.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <MarketplaceCalculator marketplace="magalu" />

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Quer escalar suas vendas no Magalu?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Nossa consultoria ajuda vendedores a estruturarem operações rentáveis no Magazine Luiza e em outros marketplaces.
          </p>
          <Link href="/consultoria" className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-xl text-lg">
            Agendar Consultoria
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-gray max-w-none">
        <h2>Como calcular o preço de venda no Magazine Luiza Marketplace</h2>
        <p>
          O Magalu Marketplace (Magazine Luiza) é um dos maiores varejistas do Brasil e oferece um poderoso canal de vendas para lojistas que querem alcançar milhões de consumidores. Para ser competitivo e lucrativo, calcular o preço de venda corretamente é essencial.
        </p>

        <h2>Comissões do Magalu por categoria (2025)</h2>
        <p>O Magalu cobra comissão percentual por venda, que varia conforme a categoria:</p>
        <ul>
          <li><strong>Informática e Games:</strong> 12-14%</li>
          <li><strong>Eletrodomésticos:</strong> 14-16%</li>
          <li><strong>Móveis e Decoração:</strong> 16-18%</li>
          <li><strong>Moda e Calçados:</strong> 16-18%</li>
          <li><strong>Ferramentas:</strong> 14-16%</li>
          <li><strong>Demais categorias:</strong> 16% (padrão)</li>
        </ul>
        <p>
          Use a calculadora acima ajustando a comissão para a categoria específica do seu produto. O campo aceita qualquer valor percentual de 0 a 50%.
        </p>

        <h2>Entrega Magalu: como impacta no preço</h2>
        <p>
          O Magalu oferece a modalidade <strong>Entrega Magalu</strong>, em que o marketplace gerencia parte da logística. Para vendedores que usam esta opção, há custos adicionais de envio ao centro de distribuição que devem ser considerados no custo operacional.
        </p>
        <p>
          Para calcular corretamente, some todos os custos de frete, embalagem e manuseio e inclua esse total no campo &quot;Custo Operacional&quot; da calculadora. Como referência, custos operacionais típicos no e-commerce variam entre 3% e 8% do faturamento.
        </p>

        <h2>Como aumentar a margem vendendo no Magalu</h2>
        <ul>
          <li>Escolha categorias com menor comissão para produtos com menor margem bruta</li>
          <li>Ofereça kits ou bundles para aumentar o ticket médio e diluir os custos fixos por unidade</li>
          <li>Mantenha boa avaliação para melhorar o posicionamento orgânico e reduzir gastos com tráfego pago</li>
          <li>Negocie condições especiais com o Magalu ao atingir volume mínimo de vendas mensais</li>
          <li>Use a calculadora para simular diferentes margens e encontrar o ponto ideal de preço vs. competitividade</li>
        </ul>

        <h2>Posso vender no Magalu sendo pessoa física?</h2>
        <p>
          Diferente do Mercado Livre, o Magalu Marketplace exige CNPJ para vendedores. Isso elimina a taxa extra de CPF. No entanto, considere as obrigações fiscais do CNPJ ao configurar o campo &quot;Impostos&quot; da calculadora — a alíquota varia com o regime tributário e faturamento.
        </p>

        <h2>Comparando Magalu, Mercado Livre e Shopee</h2>
        <p>
          Cada marketplace tem seu perfil de cliente e estrutura de taxas. Use as calculadoras específicas para comparar qual canal oferece melhor margem para o seu produto:
        </p>
        <ul>
          <li>Magalu: forte em eletrodomésticos, móveis e categorias de ticket médio alto</li>
          <li>Mercado Livre: maior volume de tráfego, forte em todas as categorias</li>
          <li>Shopee: crescimento acelerado, forte em moda e produtos de menor ticket</li>
        </ul>
      </article>
    </>
  );
}
