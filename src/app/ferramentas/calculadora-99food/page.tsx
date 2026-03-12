import type { Metadata } from 'next';
import Link from 'next/link';
import MarketplaceCalculator from '@/components/MarketplaceCalculator';

export const metadata: Metadata = {
  title: 'Calculadora 99Food: Preço de Venda e Lucro para Delivery',
  description:
    'Calcule o preço ideal para vender no 99Food. Simule comissão do delivery, impostos, custos fixos e margem de lucro. Ferramenta grátis para restaurantes e lojistas.',
  keywords: 'calculadora 99food, calcular preço 99food, taxas 99food, precificação delivery, 99 food delivery',
  alternates: { canonical: '/ferramentas/calculadora-99food' },
  openGraph: {
    title: 'Calculadora 99Food: Preço de Venda e Lucro | Escala Ecommerce',
    description: 'Calcule o preço ideal para vender no 99Food. Simule comissão de delivery, impostos e margem. Grátis.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Preço de Venda no 99Food',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'WEB',
  description: 'Calcule o preço ideal para delivery via 99Food considerando comissão, impostos, custos fixos e margem de lucro.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'Escala Ecommerce', url: 'https://escalaecommerce.com.br' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual é a comissão do 99Food para restaurantes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A comissão do 99Food varia conforme o plano contratado. No plano com entrega inclusa, a taxa é tipicamente em torno de 27% sobre cada pedido. Verifique as condições atuais diretamente com o 99Food, pois as taxas podem variar por região e volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como calcular o preço dos pratos para entregar pelo 99Food?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O preço ideal deve cobrir: custo dos ingredientes e embalagem, comissão do 99Food, impostos, custos operacionais (cozinha, mão de obra) e a margem de lucro desejada. Use a calculadora acima para simular diferentes cenários.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre o 99Food e o iFood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O 99Food e o iFood são apps de delivery de comida que cobram comissões sobre os pedidos. As estruturas de taxas são similares. O iFood tem maior penetração no mercado brasileiro. Use as calculadoras específicas de cada plataforma para comparar a margem real do seu estabelecimento em cada canal.',
      },
    },
  ],
};

export default function Calculadora99FoodPage() {
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
            Calculadora de Preço para{' '}
            <span className="text-orange-500">99Food</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Calcule o preço ideal para delivery via 99Food considerando a comissão do aplicativo, impostos, custos operacionais e a margem que você precisa para ser lucrativo.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <MarketplaceCalculator marketplace="99food" />

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Quer estruturar uma operação de delivery lucrativa?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Nossa consultoria ajuda negócios de food service a precificarem corretamente e a escalar vendas nos apps de delivery.
          </p>
          <Link href="/consultoria" className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition shadow-xl text-lg">
            Agendar Consultoria
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-gray max-w-none">
        <h2>Como calcular o preço de venda no 99Food</h2>
        <p>
          Vender pelo 99Food pode ser uma excelente fonte de pedidos, mas a sustentabilidade do negócio depende de uma precificação correta. Muitos estabelecimentos cometem o erro de simplesmente listar os mesmos preços do salão no delivery — sem considerar que a comissão do app pode consumir toda a margem.
        </p>

        <h2>Estrutura de taxas do 99Food</h2>
        <p>O 99Food cobra uma comissão percentual sobre cada pedido. A taxa varia conforme o plano:</p>
        <ul>
          <li><strong>Plano com entrega inclusa:</strong> ~27% (a logística de entrega é feita pelo app)</li>
          <li><strong>Plano com entrega própria:</strong> menor comissão, mas você arca com os custos de entrega</li>
        </ul>
        <p>
          Use a calculadora ajustando a comissão conforme o plano contratado. Lembre-se também de incluir o custo da embalagem delivery no campo <strong>Embalagem</strong>.
        </p>

        <h2>Custos que todo restaurante no delivery deve calcular</h2>
        <ul>
          <li><strong>Custo do produto (CMV):</strong> ingredientes, insumos e embalagem</li>
          <li><strong>Comissão do app:</strong> percentual sobre cada pedido</li>
          <li><strong>Impostos:</strong> conforme regime tributário (Simples, Lucro Presumido)</li>
          <li><strong>Custo operacional:</strong> mão de obra, energia, aluguel de cozinha rateado</li>
          <li><strong>Custos fixos mensais:</strong> aluguel, salários, assinaturas divididos pelo volume de pedidos</li>
        </ul>

        <h2>Por que o preço do delivery deve ser diferente do salão?</h2>
        <p>
          No salão, o cliente consome no local e o ticket médio é maior. No delivery, há a comissão do app (que pode chegar a 27%), o custo da embalagem e, em muitos casos, entrega por conta do estabelecimento. Uma operação de delivery precisa de preços 20-35% maiores do que o salão para manter a mesma margem de lucro.
        </p>
        <p>
          Use a calculadora para definir exatamente qual deve ser o preço do cardápio no 99Food para garantir a lucratividade desejada.
        </p>

        <h2>Comparando 99Food e iFood</h2>
        <p>
          Tanto o 99Food quanto o iFood operam de forma similar no Brasil. As principais diferenças estão na base de usuários, cobertura geográfica e condições comerciais. Use as calculadoras específicas de cada app para comparar o impacto na sua margem e decidir em qual plataforma focar.
        </p>
      </article>
    </>
  );
}
