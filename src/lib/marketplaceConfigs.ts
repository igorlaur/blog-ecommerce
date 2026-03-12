export interface MarketplaceConfig {
  key: string;
  name: string;
  slug: string;
  icon: string;
  defaultCommission: number;
  defaultFixedFee: number;
  commissionNote: string;
  fixedFeeNote: string;
  defaultTaxRate: number;
  defaultOpCostRate: number;
}

export const MARKETPLACE_CONFIGS: Record<string, MarketplaceConfig> = {
  'mercado-livre': {
    key: 'mercado-livre',
    name: 'Mercado Livre',
    slug: 'calculadora-mercado-livre',
    icon: '🛒',
    defaultCommission: 14,
    defaultFixedFee: 7.50,
    commissionNote: 'Clássico: 14%. Varia entre 11% (informática) e 17% (moda)',
    fixedFeeNote: 'R$7,50 para itens entre R$12 e R$79. Gratuito acima de R$79.',
    defaultTaxRate: 6,
    defaultOpCostRate: 3,
  },
  shopee: {
    key: 'shopee',
    name: 'Shopee',
    slug: 'calculadora-shopee',
    icon: '🧡',
    defaultCommission: 14,
    defaultFixedFee: 2.00,
    commissionNote: '14% para maioria das categorias (varia entre 9% e 17%)',
    fixedFeeNote: 'R$2,00 de taxa fixa por pedido',
    defaultTaxRate: 6,
    defaultOpCostRate: 3,
  },
  magalu: {
    key: 'magalu',
    name: 'Magalu',
    slug: 'calculadora-magalu',
    icon: '🛍️',
    defaultCommission: 16,
    defaultFixedFee: 0,
    commissionNote: '16% para maioria das categorias (varia entre 12% e 20%)',
    fixedFeeNote: 'Sem taxa fixa por item. Consulte o contrato da loja.',
    defaultTaxRate: 6,
    defaultOpCostRate: 3,
  },
  ifood: {
    key: 'ifood',
    name: 'iFood',
    slug: 'calculadora-ifood',
    icon: '🍕',
    defaultCommission: 12,
    defaultFixedFee: 1.00,
    commissionNote: 'Plano Básico: 12%. Plano Entrega: 27% (inclui entrega)',
    fixedFeeNote: 'R$1,00 por pedido no plano básico',
    defaultTaxRate: 6,
    defaultOpCostRate: 5,
  },
  marketplace: {
    key: 'marketplace',
    name: 'Marketplace',
    slug: 'calculadora-marketplace',
    icon: '🏪',
    defaultCommission: 15,
    defaultFixedFee: 5.00,
    commissionNote: 'Personalize a comissão para qualquer marketplace',
    fixedFeeNote: 'Personalize a taxa fixa para qualquer marketplace',
    defaultTaxRate: 6,
    defaultOpCostRate: 3,
  },
  shein: {
    key: 'shein',
    name: 'Shein',
    slug: 'calculadora-shein',
    icon: '👗',
    defaultCommission: 15,
    defaultFixedFee: 0,
    commissionNote: '10-20% por categoria. Moda: ~15%. Beleza: ~12%. Acessórios: ~18%.',
    fixedFeeNote: 'Sem taxa fixa por item. Verifique o acordo da sua categoria.',
    defaultTaxRate: 6,
    defaultOpCostRate: 3,
  },
  '99food': {
    key: '99food',
    name: '99Food',
    slug: 'calculadora-99food',
    icon: '🚗',
    defaultCommission: 27,
    defaultFixedFee: 1.50,
    commissionNote: 'Plano Entrega: ~27% (entrega inclusa). Varia conforme contrato.',
    fixedFeeNote: 'R$1,50 por pedido (pode variar conforme plano contratado).',
    defaultTaxRate: 6,
    defaultOpCostRate: 5,
  },
  'tiktok-shop': {
    key: 'tiktok-shop',
    name: 'TikTok Shop',
    slug: 'calculadora-tiktok-shop',
    icon: '🎵',
    defaultCommission: 5,
    defaultFixedFee: 0,
    commissionNote: '3-8% por categoria. Moda: ~5%. Beleza: ~5%. Taxa promocional em 2025.',
    fixedFeeNote: 'Sem taxa fixa por item para a maioria das categorias.',
    defaultTaxRate: 6,
    defaultOpCostRate: 3,
  },
  amazon: {
    key: 'amazon',
    name: 'Amazon',
    slug: 'calculadora-amazon',
    icon: '📦',
    defaultCommission: 12,
    defaultFixedFee: 0,
    commissionNote: '8-15% conforme categoria. Eletrônicos: 8%. Moda: 14%. Geral: 12%.',
    fixedFeeNote: 'Sem taxa fixa por item no plano por unidade (taxas variáveis por categoria).',
    defaultTaxRate: 6,
    defaultOpCostRate: 3,
  },
};

export function getConfig(key: string): MarketplaceConfig {
  return MARKETPLACE_CONFIGS[key] ?? MARKETPLACE_CONFIGS['marketplace'];
}

export const ALL_CALCULATORS = [
  { key: 'mercado-livre', name: 'Mercado Livre', icon: '🛒', slug: 'calculadora-mercado-livre' },
  { key: 'shopee', name: 'Shopee', icon: '🧡', slug: 'calculadora-shopee' },
  { key: 'magalu', name: 'Magalu', icon: '🛍️', slug: 'calculadora-magalu' },
  { key: 'ifood', name: 'iFood', icon: '🍕', slug: 'calculadora-ifood' },
  { key: 'shein', name: 'Shein', icon: '👗', slug: 'calculadora-shein' },
  { key: '99food', name: '99Food', icon: '🚗', slug: 'calculadora-99food' },
  { key: 'tiktok-shop', name: 'TikTok Shop', icon: '🎵', slug: 'calculadora-tiktok-shop' },
  { key: 'amazon', name: 'Amazon', icon: '📦', slug: 'calculadora-amazon' },
  { key: 'marketplace', name: 'Global', icon: '🏪', slug: 'calculadora-marketplace' },
];
