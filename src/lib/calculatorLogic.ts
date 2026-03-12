export interface GlobalConfig {
  monthlyRevenue: number;
  fixedCosts: number;
  taxRate: number;
  operationalCostRate: number;
  cpfSeller: boolean;
}

export interface ProductConfig {
  sku: string;
  productCost: number;
  commissionRate: number;
  fixedFee: number;
  desiredMargin: number;
  packagingCost: number;
}

export interface BreakdownItem {
  label: string;
  value: number;
  color: string;
}

export interface CalculationResult {
  idealPrice: number;
  profitPerUnit: number;
  contributionMargin: number;
  contributionMarginPct: number;
  markup: number;
  breakdownItems: BreakdownItem[];
}

export interface Recommendation {
  type: 'success' | 'warning' | 'info' | 'error';
  title: string;
  message: string;
}

export function calculate(
  global: GlobalConfig,
  product: ProductConfig,
): CalculationResult | null {
  const commission = product.commissionRate / 100;
  const tax = global.taxRate / 100;
  const opCost = global.operationalCostRate / 100;
  const margin = product.desiredMargin / 100;
  const fixedCostRate = global.monthlyRevenue > 0 ? global.fixedCosts / global.monthlyRevenue : 0;
  const cpfFee = global.cpfSeller ? 3 : 0;
  const packaging = product.packagingCost ?? 0;

  const denominator = 1 - commission - tax - opCost - fixedCostRate - margin;
  if (denominator <= 0.001) return null;

  const idealPrice = (product.productCost + product.fixedFee + cpfFee + packaging) / denominator;
  const profitPerUnit = idealPrice * margin;
  const commissionValue = idealPrice * commission;
  const taxValue = idealPrice * tax;
  const opCostValue = idealPrice * opCost;
  const fixedCostValue = idealPrice * fixedCostRate;
  const contributionMargin =
    idealPrice - product.productCost - product.fixedFee - cpfFee - packaging - commissionValue - taxValue - opCostValue;
  const contributionMarginPct = idealPrice > 0 ? (contributionMargin / idealPrice) * 100 : 0;
  const markup = product.productCost > 0 ? ((idealPrice / product.productCost) - 1) * 100 : 0;

  const breakdownItems: BreakdownItem[] = [
    { label: 'Custo do produto', value: product.productCost, color: '#3b82f6' },
    { label: 'Taxa fixa', value: product.fixedFee, color: '#ef4444' },
    ...(packaging > 0 ? [{ label: 'Embalagem', value: packaging, color: '#0ea5e9' }] : []),
    ...(global.cpfSeller ? [{ label: 'Taxa CPF', value: cpfFee, color: '#ec4899' }] : []),
    { label: `Comissão (${product.commissionRate}%)`, value: commissionValue, color: '#f97316' },
    { label: `Impostos (${global.taxRate}%)`, value: taxValue, color: '#a855f7' },
    { label: `Operacional (${global.operationalCostRate}%)`, value: opCostValue, color: '#eab308' },
    ...(fixedCostValue > 0.01 ? [{ label: 'Rateio custos fixos', value: fixedCostValue, color: '#6b7280' }] : []),
    { label: `Lucro (${product.desiredMargin}%)`, value: profitPerUnit, color: '#22c55e' },
  ].filter(item => item.value > 0.001);

  return { idealPrice, profitPerUnit, contributionMargin, contributionMarginPct, markup, breakdownItems };
}

export function getRecommendations(
  global: GlobalConfig,
  product: ProductConfig,
  result: CalculationResult | null,
): Recommendation[] {
  const recs: Recommendation[] = [];

  if (!result) {
    const fixedCostRate = global.monthlyRevenue > 0 ? (global.fixedCosts / global.monthlyRevenue) * 100 : 0;
    recs.push({
      type: 'error',
      title: 'Configuração inválida',
      message: `A soma de comissão (${product.commissionRate}%) + impostos (${global.taxRate}%) + operacional (${global.operationalCostRate}%) + custos fixos (${fixedCostRate.toFixed(1)}%) + margem (${product.desiredMargin}%) passa de 100%. Reduza um ou mais valores.`,
    });
    return recs;
  }

  if (product.productCost === 0) {
    recs.push({ type: 'info', title: 'Informe o custo do produto', message: 'Preencha o campo "Custo do Produto" para ver o preço ideal.' });
    return recs;
  }

  if (product.desiredMargin < 10) {
    recs.push({ type: 'warning', title: 'Margem baixa', message: `Margem de ${product.desiredMargin}% é arriscada. Revise o custo ou a comissão.` });
  } else if (product.desiredMargin >= 20) {
    recs.push({ type: 'success', title: 'Margem saudável', message: `Margem de ${product.desiredMargin}% garante boa rentabilidade para e-commerce.` });
  }

  if (product.commissionRate > 18) {
    recs.push({ type: 'warning', title: 'Comissão elevada', message: 'Comissão acima de 18% pode comprometer a competitividade do preço final.' });
  }

  const fixedCostRate = global.monthlyRevenue > 0 ? global.fixedCosts / global.monthlyRevenue : 0;
  if (fixedCostRate > 0.3) {
    recs.push({ type: 'warning', title: 'Custos fixos elevados', message: 'Custos fixos acima de 30% do faturamento. Avalie oportunidades de redução.' });
  }

  if (result.markup > 300) {
    recs.push({ type: 'info', title: 'Markup elevado', message: `Markup de ${result.markup.toFixed(0)}% pode ser difícil de sustentar dependendo da categoria e concorrência.` });
  }

  return recs;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

// ─── Shopee tiered fee logic ─────────────────────────────────────────────────

export interface ShopeeTier {
  minPrice: number;
  maxPrice: number;
  commission: number; // %
  fixedFee: number;   // R$
  label: string;
}

export const SHOPEE_TIERS: ShopeeTier[] = [
  { minPrice: 0,    maxPrice: 79.99,    commission: 20, fixedFee: 4,  label: 'Até R$79,99' },
  { minPrice: 80,   maxPrice: 99.99,    commission: 14, fixedFee: 16, label: 'R$80 a R$99,99' },
  { minPrice: 100,  maxPrice: 199.99,   commission: 14, fixedFee: 20, label: 'R$100 a R$199,99' },
  { minPrice: 200,  maxPrice: 499.99,   commission: 14, fixedFee: 26, label: 'R$200 a R$499,99' },
  { minPrice: 500,  maxPrice: Infinity, commission: 14, fixedFee: 26, label: 'Acima de R$500' },
];

export function calculateShopee(
  global: GlobalConfig,
  product: ProductConfig,
): (CalculationResult & { tier: ShopeeTier }) | null {
  for (const tier of SHOPEE_TIERS) {
    const tieredProduct: ProductConfig = { ...product, commissionRate: tier.commission, fixedFee: tier.fixedFee };
    const result = calculate(global, tieredProduct);
    if (result && result.idealPrice >= tier.minPrice && result.idealPrice <= tier.maxPrice) {
      return { ...result, tier };
    }
  }
  return null;
}
