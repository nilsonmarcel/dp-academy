import React, { useState } from "react";
import { PLANS_DATA } from "../data";
import { Check, Star, HelpCircle } from "lucide-react";

interface PricingProps {
  onOpenModal: (planName?: string) => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<"mensal" | "anual">("mensal");

  // Calculate prices based on period
  const getPrice = (basePrice: string) => {
    const num = parseInt(basePrice);
    if (billingPeriod === "anual") {
      // 15% discount for annual commitment
      const discounted = Math.round(num * 0.85);
      return discounted.toString();
    }
    return basePrice;
  };

  return (
    <section id="planos" className="py-24 bg-[#050505] relative">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_right,rgba(57,255,20,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-primary font-mono block">
            Planos & Investimento • Sem Surpresas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            Invista na Sua <span className="text-brand-primary">Saúde e Evolução</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Escolha o plano ideal para seus objetivos. Planos claros, sem letras miúdas, com musculação integrada de alta 
            performance e acesso aos melhores professores da região.
          </p>

          {/* Billing Toggle Selector */}
          <div className="pt-6 flex justify-center items-center">
            <div className="bg-[#0c0c0c] border border-white/10 p-1.5 rounded-xs inline-flex items-center space-x-1.5">
              <button
                onClick={() => setBillingPeriod("mensal")}
                className={`px-4 py-2 rounded-xs font-display text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                  billingPeriod === "mensal"
                    ? "bg-brand-primary text-brand-dark"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingPeriod("anual")}
                className={`px-4 py-2 rounded-xs font-display text-[10px] font-black uppercase tracking-wider transition-all flex items-center space-x-1 cursor-pointer ${
                  billingPeriod === "anual"
                    ? "bg-brand-primary text-brand-dark"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span>Fidelidade Anual</span>
                <span className="bg-emerald-500/10 text-brand-primary text-[8px] font-extrabold px-1.5 py-0.5 rounded-xs uppercase ml-1 border border-brand-primary/20">
                  -15%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS_DATA.map((plan) => {
            const calculatedPrice = getPrice(plan.price);
            return (
              <div
                key={plan.id}
                className={`relative bg-[#0c0c0c] border rounded-xs p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.popular
                    ? "border-brand-primary/60 shadow-[0_0_30px_rgba(57,255,20,0.15)] md:-translate-y-2 hover:border-brand-primary hover:shadow-[0_0_40px_rgba(57,255,20,0.25)]"
                    : "border-white/10 hover:border-white/20 shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-primary text-brand-dark px-4 py-1.5 rounded-xs font-display text-[9px] font-black uppercase tracking-widest shadow-md flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-brand-dark" />
                    <span>O Mais Vendido</span>
                  </div>
                )}

                {/* Upper Card Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xs font-black text-white uppercase tracking-wider">{plan.name}</h3>
                    <p className="text-gray-500 text-[11px] mt-1">Garantia de satisfação e evolução técnica.</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline space-x-1.5 py-4 border-b border-white/5">
                    <span className="text-gray-500 text-xs font-semibold uppercase font-mono">R$</span>
                    <span className="font-display text-5xl sm:text-6xl font-black text-white tracking-tighter">
                      {calculatedPrice}
                    </span>
                    <span className="text-gray-500 text-[11px] lowercase font-mono">/ {plan.period}</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 pt-4">
                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-gray-500">O que está incluso:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feat, index) => (
                        <li key={index} className="flex items-start space-x-2.5 text-xs text-gray-300">
                          <div className="bg-brand-primary/5 border border-brand-primary/20 p-0.5 rounded-xs mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5 text-brand-primary" />
                          </div>
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button Section */}
                <div className="pt-8">
                  <button
                    onClick={() => onOpenModal(`${plan.name} (${billingPeriod})`)}
                    className={`w-full font-display font-black py-3.5 px-6 rounded-xs uppercase tracking-wider transition-all duration-300 text-center text-xs cursor-pointer ${
                      plan.popular
                        ? "bg-brand-primary hover:brightness-110 text-brand-dark shadow-[0_0_20px_rgba(57,255,20,0.2)]"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-brand-primary/30"
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                  <p className="text-[9px] text-gray-500 text-center mt-3 font-mono uppercase tracking-wider">
                    {billingPeriod === "anual"
                      ? "Fidelidade de 12 meses recorrente"
                      : "Sem carência de cancelamento"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary warning / call to action */}
        <div className="mt-16 bg-[#0c0c0c] border border-white/10 p-6 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-brand-primary/5 p-3 rounded-xs border border-brand-primary/20 text-brand-primary shrink-0 hidden sm:block">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold uppercase tracking-wide text-white text-xs">Procura planos para grupos familiares?</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">
                Oferecemos descontos exclusivos progressivos para matrículas de pais e filhos ou casais. Treine em família e poupe muito mais.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/551195765-2882?text=Gostaria%20de%20receber%20um%20or%C3%A7amento%20de%20plano%20familiar%20para%20minha%20casa."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center bg-transparent border border-white/10 hover:border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-dark font-display font-black text-xs px-6 py-3.5 rounded-xs uppercase tracking-wider transition-all"
          >
            Orçamento de Grupo / Família
          </a>
        </div>
      </div>
    </section>
  );
}
