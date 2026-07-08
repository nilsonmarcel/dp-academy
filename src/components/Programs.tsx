import React, { useState } from "react";
import { PROGRAMS_DATA } from "../data";
import { Check, Clock, Users, ArrowRight } from "lucide-react";

interface ProgramsProps {
  onOpenModal: (programName?: string) => void;
}

export default function Programs({ onOpenModal }: ProgramsProps) {
  const [activeTab, setActiveTab] = useState(PROGRAMS_DATA[0].id);

  const activeProgram = PROGRAMS_DATA.find((p) => p.id === activeTab) || PROGRAMS_DATA[0];

  return (
    <section id="programas" className="py-24 bg-[#050505] relative">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_left,rgba(57,255,20,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-primary font-mono block">
            Nossas Turmas • Escolha Sua Jornada
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            Programas Sob Medida para <span className="text-brand-primary">Toda a Família</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Oferecemos turmas especializadas para todas as idades, focadas no desenvolvimento integral do aluno, 
            da infância à melhor idade. Clique nos botões abaixo para ver os detalhes.
          </p>
        </div>

        {/* Interactive Tabs Menu */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PROGRAMS_DATA.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveTab(prog.id)}
              className={`px-5 py-3 rounded-xs font-display font-black text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === prog.id
                  ? "bg-brand-primary text-brand-dark shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                  : "bg-[#0c0c0c] text-gray-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {prog.title.split(" (")[0]}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#0c0c0c] rounded-xs border border-white/10 overflow-hidden shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Side */}
            <div className="lg:col-span-5 h-[260px] sm:h-[350px] lg:h-auto relative">
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/20 to-transparent" />
            </div>

            {/* Info Side */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary font-mono">
                    Programa em Destaque
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
                    {activeProgram.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-4 leading-relaxed font-sans">
                    {activeProgram.description}
                  </p>
                </div>

                {/* Benefits checklist */}
                <div className="space-y-3.5">
                  <h4 className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">
                    Principais Benefícios:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProgram.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-gray-300">
                        <div className="bg-brand-primary/5 border border-brand-primary/20 p-0.5 rounded-xs mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5 text-brand-primary" />
                        </div>
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extra Details (Schedule, Target) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  <div className="flex items-start space-x-2.5">
                    <Clock className="w-4 h-4 text-brand-primary mt-1 shrink-0" />
                    <div>
                      <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-wide">Horários de Treino</h5>
                      <p className="text-xs text-gray-400 mt-0.5 leading-snug">{activeProgram.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Users className="w-4 h-4 text-brand-primary mt-1 shrink-0" />
                    <div>
                      <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-wide">Público Indicado</h5>
                      <p className="text-xs text-gray-400 mt-0.5 leading-snug">{activeProgram.targetAudience}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenModal(activeProgram.title)}
                  className="w-full sm:w-auto bg-brand-primary hover:brightness-110 text-brand-dark font-display font-black text-xs px-8 py-4 rounded-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.25)] flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Agendar Aula Grátis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
