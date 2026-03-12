'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { calculate, calculateShopee, getRecommendations, formatCurrency, SHOPEE_TIERS } from '@/lib/calculatorLogic';
import { getConfig, ALL_CALCULATORS } from '@/lib/marketplaceConfigs';
import type { GlobalConfig, ProductConfig, CalculationResult, Recommendation, ShopeeTier } from '@/lib/calculatorLogic';

// ─── Sub-components ──────────────────────────────────────────────────────────

interface InputFieldProps {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  note?: string;
  required?: boolean;
}

function InputField({ id, label, value, onChange, prefix, suffix, min, max, step, note, required }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">
        {label}{required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" aria-hidden="true">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          value={value === 0 ? '' : value}
          onChange={e => onChange(e.target.valueAsNumber || 0)}
          onFocus={e => e.target.select()}
          min={min}
          max={max}
          step={step ?? 1}
          className={`w-full border border-gray-200 rounded-xl py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition ${prefix ? 'pl-10 pr-4' : suffix ? 'pl-4 pr-10' : 'px-4'}`}
          aria-describedby={note ? `${id}-note` : undefined}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" aria-hidden="true">
            {suffix}
          </span>
        )}
      </div>
      {note && <p id={`${id}-note`} className="text-xs text-gray-400 mt-1 leading-tight">{note}</p>}
    </div>
  );
}

const REC_STYLE: Record<Recommendation['type'], string> = {
  success: 'bg-green-50 border-green-200 text-green-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  error: 'bg-red-50 border-red-200 text-red-800',
};
const REC_ICON: Record<Recommendation['type'], string> = {
  success: '✅', warning: '⚠️', info: 'ℹ️', error: '❌',
};

function RecommendationBadge({ rec }: { rec: Recommendation }) {
  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border text-sm ${REC_STYLE[rec.type]}`} role="alert">
      <span className="flex-shrink-0 text-base" aria-hidden="true">{REC_ICON[rec.type]}</span>
      <div>
        <span className="font-semibold">{rec.title}</span>
        <span className="opacity-80"> — {rec.message}</span>
      </div>
    </div>
  );
}

function MonthlyProjections({ global, result }: { global: GlobalConfig; result: CalculationResult }) {
  const estimatedUnits = result.idealPrice > 0 && global.monthlyRevenue > 0
    ? Math.round(global.monthlyRevenue / result.idealPrice)
    : 0;
  const monthlyProfit = estimatedUnits * result.profitPerUnit;
  const breakEvenUnits = result.contributionMargin > 0
    ? Math.ceil(global.fixedCosts / result.contributionMargin)
    : 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span aria-hidden="true">📊</span> Projeções Mensais
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-xs text-gray-500 mb-1">Unidades estimadas/mês</div>
          <div className="text-xl font-bold text-gray-900">{estimatedUnits.toLocaleString('pt-BR')}</div>
          <div className="text-xs text-gray-400 mt-0.5">baseado no faturamento</div>
        </div>
        <div className="bg-green-50 rounded-xl p-4">
          <div className="text-xs text-gray-500 mb-1">Lucro mensal estimado</div>
          <div className="text-xl font-bold text-green-600">{formatCurrency(monthlyProfit)}</div>
        </div>
        <div className="bg-orange-50 rounded-xl p-4">
          <div className="text-xs text-gray-500 mb-1">Break-even</div>
          <div className="text-xl font-bold text-orange-600">{breakEvenUnits > 0 ? `${breakEvenUnits} uni.` : '—'}</div>
          <div className="text-xs text-gray-400 mt-0.5">para cobrir custos fixos</div>
        </div>
        <div className="bg-blue-50 rounded-xl p-4">
          <div className="text-xs text-gray-500 mb-1">Markup sobre custo</div>
          <div className="text-xl font-bold text-blue-600">{result.markup.toFixed(0)}%</div>
        </div>
      </div>
    </div>
  );
}

function OtherCalculators({ current }: { current: string }) {
  const others = ALL_CALCULATORS.filter(c => c.key !== current);
  return (
    <nav aria-label="Outras calculadoras">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Calculadoras para outros marketplaces</h3>
        <div className="flex flex-wrap gap-3">
          {others.map(calc => (
            <Link
              key={calc.key}
              href={`/ferramentas/${calc.slug}`}
              className="inline-flex items-center gap-2 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 text-gray-700 hover:text-orange-700 px-4 py-2 rounded-xl text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <span aria-hidden="true">{calc.icon}</span>
              {calc.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MarketplaceCalculator({ marketplace }: { marketplace: string }) {
  const config = getConfig(marketplace);

  const [global, setGlobal] = useState<GlobalConfig>({
    monthlyRevenue: 0,
    fixedCosts: 0,
    taxRate: config.defaultTaxRate,
    operationalCostRate: 0,
    cpfSeller: false,
  });

  const [product, setProduct] = useState<ProductConfig>({
    sku: '',
    productCost: 50,
    commissionRate: config.defaultCommission,
    fixedFee: config.defaultFixedFee,
    desiredMargin: 20,
  });

  const [globalOpen, setGlobalOpen] = useState(true);
  const [advancedMode, setAdvancedMode] = useState(false);

  const updateGlobal = <K extends keyof GlobalConfig>(key: K) => (value: GlobalConfig[K]) =>
    setGlobal(prev => ({ ...prev, [key]: value }));

  const isShopee = marketplace === 'shopee';
  const shopeeResult = isShopee && product.productCost > 0 ? calculateShopee(global, product) : null;
  const activeTier: ShopeeTier | null = shopeeResult?.tier ?? null;
  const result: CalculationResult | null = isShopee
    ? shopeeResult
    : (product.productCost > 0 ? calculate(global, product) : null);
  const effectiveProduct = isShopee && activeTier
    ? { ...product, commissionRate: activeTier.commission, fixedFee: activeTier.fixedFee }
    : product;
  const recommendations = getRecommendations(global, effectiveProduct, result);

  const exportCSV = useCallback(() => {
    if (!result) return;
    const now = new Date().toLocaleDateString('pt-BR');
    const rows = [
      [`Calculadora de Precificação — ${config.name} — Escala Ecommerce`],
      [`Data: ${now}`],
      [],
      ['CONFIGURAÇÕES GLOBAIS'],
      ['Faturamento Mensal (R$)', global.monthlyRevenue.toFixed(2)],
      ['Custos Fixos Mensais (R$)', global.fixedCosts.toFixed(2)],
      ['Impostos (%)', global.taxRate.toFixed(1)],
      ['Custo Operacional (%)', global.operationalCostRate.toFixed(1)],
      ['Vendedor CPF', global.cpfSeller ? 'Sim (+R$3,00/venda)' : 'Não'],
      [],
      ['DADOS DO PRODUTO'],
      ['SKU', product.sku || '(não informado)'],
      ['Custo do Produto (R$)', product.productCost.toFixed(2)],
      ['Comissão (%)', product.commissionRate.toFixed(1)],
      ['Taxa Fixa (R$)', product.fixedFee.toFixed(2)],
      ['Margem Desejada (%)', product.desiredMargin.toFixed(1)],
      [],
      ['RESULTADOS'],
      ['Preço de Venda Ideal (R$)', result.idealPrice.toFixed(2)],
      ['Lucro por Unidade (R$)', result.profitPerUnit.toFixed(2)],
      ['Margem de Contribuição (R$)', result.contributionMargin.toFixed(2)],
      ['Markup (%)', result.markup.toFixed(1)],
      [],
      ['BREAKDOWN DE CUSTOS'],
      ['Item', 'Valor (R$)', '% do Preço'],
      ...result.breakdownItems.map(item => [
        item.label,
        item.value.toFixed(2),
        `${(item.value / result.idealPrice * 100).toFixed(1)}%`,
      ]),
    ];

    const csv = rows
      .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `calculadora-${config.key}-escala-ecommerce.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [result, global, product, config]);

  const fixedCostRatePct = global.monthlyRevenue > 0
    ? ((global.fixedCosts / global.monthlyRevenue) * 100).toFixed(1)
    : '0';

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* Calculator grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-10">

        {/* ── LEFT: Inputs ── */}
        <div className="space-y-6">

          {/* Global config */}
          <section aria-labelledby="global-heading" className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <button
              id="global-heading"
              onClick={() => setGlobalOpen(!globalOpen)}
              className="w-full flex items-center justify-between text-left font-bold text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg"
              aria-expanded={globalOpen}
              aria-controls="global-content"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true">⚙️</span> Configurações Globais
              </span>
              <span className={`text-orange-500 text-sm transition-transform duration-200 ${globalOpen ? 'rotate-180' : ''}`} aria-hidden="true">▼</span>
            </button>

            {globalOpen && (
              <div id="global-content" className="mt-5 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <InputField id="monthly-revenue" label="Faturamento Mensal" prefix="R$" value={global.monthlyRevenue}
                    onChange={updateGlobal('monthlyRevenue')} min={0} step={1000} note="Opcional — usado para rateio dos custos fixos" />
                  <InputField id="fixed-costs" label="Custos Fixos Mensais" prefix="R$" value={global.fixedCosts}
                    onChange={updateGlobal('fixedCosts')} min={0} step={100} note={global.monthlyRevenue > 0 ? `Rateio: ${fixedCostRatePct}% do faturamento` : 'Opcional — informe o faturamento para ratear'} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputField id="tax-rate" label="Impostos" suffix="%" value={global.taxRate} required
                    onChange={updateGlobal('taxRate')} min={0} max={50} step={0.5} note="Ex: Simples Nacional 6%" />
                  <InputField id="op-cost" label="Custo Operacional" suffix="%" value={global.operationalCostRate}
                    onChange={updateGlobal('operationalCostRate')} min={0} max={50} step={0.5} note="Opcional — embalagem, mão de obra, etc." />
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <button
                    role="switch"
                    aria-checked={global.cpfSeller}
                    onClick={() => setGlobal(prev => ({ ...prev, cpfSeller: !prev.cpfSeller }))}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 ${global.cpfSeller ? 'bg-orange-500' : 'bg-gray-200'}`}
                    aria-label="Sou vendedor CPF (+R$3,00 por venda)"
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${global.cpfSeller ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                  <span
                    className="text-sm text-gray-700 cursor-pointer select-none"
                    onClick={() => setGlobal(prev => ({ ...prev, cpfSeller: !prev.cpfSeller }))}
                  >
                    Sou vendedor CPF <span className="text-orange-500 font-semibold">(+R$3,00/venda)</span>
                  </span>
                </div>
              </div>
            )}
          </section>

          {/* Product config */}
          <section aria-labelledby="product-heading" className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 id="product-heading" className="font-bold text-gray-900 text-base flex items-center gap-2 mb-5">
              <span aria-hidden="true">📦</span> Dados do Produto
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="product-sku" className="block text-sm font-semibold text-gray-700 mb-1">
                  SKU / Nome do produto
                </label>
                <input
                  id="product-sku"
                  type="text"
                  value={product.sku}
                  onChange={e => setProduct(prev => ({ ...prev, sku: e.target.value }))}
                  placeholder="Ex: Camiseta Preta Nicho Black P"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition"
                />
              </div>
              <InputField id="product-cost" label="Custo do Produto" prefix="R$" value={product.productCost} required
                onChange={v => setProduct(prev => ({ ...prev, productCost: v }))} min={0} step={0.01}
                note="Custo de aquisição ou fabricação (sem impostos nem frete)" />
              {isShopee ? (
                <div className="rounded-xl border border-orange-200 bg-orange-50 overflow-hidden">
                  <div className="px-4 pt-3 pb-2">
                    <p className="text-xs font-bold text-orange-700 uppercase tracking-wide">Taxas automáticas por faixa de preço de venda</p>
                    {activeTier && result ? (
                      <p className="text-xs text-orange-600 mt-0.5">
                        ✓ Faixa ativa: <strong>{activeTier.label}</strong>
                        <span className="ml-1 text-orange-500"> — preço de venda calculado: <strong>{formatCurrency(result.idealPrice)}</strong></span>
                      </p>
                    ) : (
                      <p className="text-xs text-orange-400 mt-0.5">Informe o custo para identificar a faixa</p>
                    )}
                  </div>
                  <table className="w-full text-xs">
                    <thead className="bg-orange-100">
                      <tr>
                        <th className="text-left px-4 py-1.5 font-semibold text-gray-600">Faixa do preço de venda</th>
                        <th className="text-center px-3 py-1.5 font-semibold text-gray-600">Comissão</th>
                        <th className="text-center px-3 py-1.5 font-semibold text-gray-600">Taxa fixa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SHOPEE_TIERS.map(tier => (
                        <tr
                          key={tier.label}
                          className={activeTier?.label === tier.label
                            ? 'bg-orange-500 text-white font-bold'
                            : 'text-gray-600 even:bg-white odd:bg-orange-50/50'}
                        >
                          <td className="px-4 py-1.5">{tier.label}</td>
                          <td className="text-center px-3 py-1.5">{tier.commission}%</td>
                          <td className="text-center px-3 py-1.5">R${tier.fixedFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-orange-500 px-4 py-2 border-t border-orange-200">
                    ⚠️ As faixas são definidas pelo <strong>preço de venda calculado</strong>, não pelo custo do produto.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                <InputField id="commission-rate" label="Comissão do Marketplace" suffix="%" value={product.commissionRate} required
                  onChange={v => setProduct(prev => ({ ...prev, commissionRate: v }))} min={0} max={60} step={0.5}
                  note={config.commissionNote} />
                <InputField id="fixed-fee" label="Taxa Fixa (R$)" prefix="R$" value={product.fixedFee} required
                    onChange={v => setProduct(prev => ({ ...prev, fixedFee: v }))} min={0} step={0.50}
                    note={config.fixedFeeNote} />
                </div>
              )}
              <InputField id="desired-margin" label="Margem de Lucro Desejada" suffix="%" value={product.desiredMargin} required
                onChange={v => setProduct(prev => ({ ...prev, desiredMargin: v }))} min={1} max={80} step={1}
                note="Percentual do preço final que você quer de lucro líquido" />
            </div>
          </section>
        </div>

        {/* ── RIGHT: Results ── */}
        <div className="lg:sticky lg:top-24 lg:self-start space-y-4">
          {result ? (
            <>
              {/* Main result card */}
              <div className="bg-gradient-to-br from-slate-900 to-neutral-950 rounded-2xl p-6 text-white">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Preço de Venda Ideal</p>
                <div
                  className="text-5xl font-black text-orange-400 mb-5 tabular-nums"
                  aria-live="polite"
                  aria-label={`Preço de venda ideal: ${formatCurrency(result.idealPrice)}`}
                >
                  {formatCurrency(result.idealPrice)}
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-xs text-slate-400 mb-0.5">Lucro / unidade</div>
                    <div className="text-xl font-bold text-green-400">{formatCurrency(result.profitPerUnit)}</div>
                    <div className="text-xs text-green-500 mt-0.5">{result.idealPrice > 0 ? ((result.profitPerUnit / result.idealPrice) * 100).toFixed(1) : 0}% do preço</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-xs text-slate-400 mb-0.5">Margem contrib.</div>
                    <div className="text-xl font-bold text-blue-300">{formatCurrency(result.contributionMargin)}</div>
                    <div className="text-xs text-blue-400 mt-0.5">{result.contributionMarginPct.toFixed(1)}% do preço</div>
                  </div>
                </div>
                {product.sku && (
                  <p className="text-xs text-slate-400">Produto: <span className="text-slate-200">{product.sku}</span></p>
                )}
              </div>

              {/* Breakdown */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm mb-3">Composição do preço</h3>
                <div className="h-5 rounded-full overflow-hidden flex mb-4" aria-hidden="true">
                  {result.breakdownItems.map(item => (
                    <div
                      key={item.label}
                      style={{ width: `${(item.value / result.idealPrice * 100).toFixed(1)}%`, backgroundColor: item.color }}
                      title={`${item.label}: ${formatCurrency(item.value)}`}
                    />
                  ))}
                </div>
                <ul className="space-y-2">
                  {result.breakdownItems.map(item => (
                    <li key={item.label} className="flex items-center gap-2 text-sm">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} aria-hidden="true" />
                      <span className="text-gray-600 flex-1">{item.label}</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(item.value)}</span>
                      <span className="text-gray-400 text-xs w-10 text-right">{(item.value / result.idealPrice * 100).toFixed(1)}%</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className="space-y-2">
                  {recommendations.map((rec, i) => <RecommendationBadge key={i} rec={rec} />)}
                </div>
              )}

              {/* Advanced mode toggle */}
              <button
                onClick={() => setAdvancedMode(!advancedMode)}
                className="w-full text-center text-sm text-orange-500 hover:text-orange-600 font-semibold py-2 flex items-center justify-center gap-1 transition focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg"
                aria-expanded={advancedMode}
              >
                <span aria-hidden="true">{advancedMode ? '▲' : '▼'}</span>
                {advancedMode ? 'Ocultar modo avançado' : 'Ver modo avançado (projeções mensais)'}
              </button>

              {advancedMode && <MonthlyProjections global={global} result={result} />}

              {/* Export */}
              <button
                onClick={exportCSV}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Exportar resultado em CSV
              </button>
            </>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm text-center">
              {product.productCost === 0 ? (
                <>
                  <div className="text-4xl mb-3" aria-hidden="true">🧮</div>
                  <p className="font-bold text-gray-700 mb-1">Preencha o custo do produto</p>
                  <p className="text-gray-400 text-sm">Informe o custo de aquisição or fabricação para calcular o preço ideal.</p>
                </>
              ) : (
                <>
                  <div className="text-4xl mb-3" aria-hidden="true">⚠️</div>
                  <p className="font-bold text-red-700 mb-2">Configuração inválida</p>
                  {recommendations.map((rec, i) => <RecommendationBadge key={i} rec={rec} />)}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Other calculators */}
      <OtherCalculators current={marketplace} />
    </div>
  );
}
