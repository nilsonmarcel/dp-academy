import React, { useState } from "react";
import { FAQ_DATA } from "../data";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [activeTab, setActiveTab] = useState<string>("Todos");

  const categories = ["Todos", "Iniciantes", "Musculação", "Projeto Social", "Aulas", "Planos"];

  const filteredFaq =
    activeTab === "Todos"
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === activeTab);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#0c0c0c] relative border-t border-b border-white/5">
      <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(circle_at_left,rgba(57,255,20,0.06),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-primary font-mono block">
            Dúvidas Frequentes • FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            Perguntas <span className="text-brand-primary">Frequentes</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Tem alguma dúvida sobre kimonos, mensalidades, metodologia ou o projeto social atípico? Encontre respostas rápidas aqui.
          </p>

          {/* Categories Tab selector */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-1.5 rounded-xs text-[10px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === cat
                    ? "bg-brand-primary text-brand-dark"
                    : "bg-[#050505] text-gray-400 hover:text-white hover:bg-white/5 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {filteredFaq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#050505] border border-white/10 hover:border-brand-primary/30 rounded-xs overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center space-x-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3 text-left">
                    <HelpCircle className="w-4 h-4 text-brand-primary shrink-0 hidden sm:block" />
                    <span className="font-display font-bold uppercase tracking-wide text-white text-xs sm:text-sm leading-tight">
                      {item.question}
                    </span>
                  </div>
                  <div className="bg-[#0c0c0c] p-1 rounded-xs border border-white/10 text-gray-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Answer height */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-gray-400 text-xs leading-relaxed font-sans bg-[#0c0c0c]/40">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Direct Action */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400">
            Ainda tem dúvidas? Fale diretamente com nossa recepção agora mesmo.{" "}
            <a
              href="https://wa.me/551195765-2882?text=Olá! Estava navegando no FAQ e gostaria de tirar uma dúvida específica."
              target="_blank"
              rel="noreferrer"
              className="text-brand-primary font-bold hover:underline"
            >
              Falar no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
