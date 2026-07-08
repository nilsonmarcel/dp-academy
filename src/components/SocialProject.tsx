import React from "react";
import { Heart, Sparkles, Smile, ShieldAlert, ArrowUpRight } from "lucide-react";

interface SocialProjectProps {
  onOpenModal: (subject?: string) => void;
}

export default function SocialProject({ onOpenModal }: SocialProjectProps) {
  const pillars = [
    {
      title: "Regulação Neuro-Sensorial",
      desc: "A pressão física e os estímulos proprioceptivos do Jiu-Jitsu estimulam o cerebelo e regulam o sistema nervoso de crianças com TEA ou TDAH.",
      icon: Sparkles
    },
    {
      title: "Desenvolvimento de Coordenação",
      desc: "Rolar, desviar e coordenar pegadas criam novas conexões neuronais, aprimorando o equilíbrio e a coordenação motora grossa e fina.",
      icon: Smile
    },
    {
      title: "Ambiente Blindado de Acolhimento",
      desc: "Aqui o preconceito é zero. Nossa equipe e os alunos são treinados para entender, respeitar e apoiar cada tempo de evolução individual.",
      icon: Heart
    }
  ];

  return (
    <section id="projeto-social" className="py-24 bg-[#0c0c0c] border-t border-b border-white/5 relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-rose-500/5 border border-rose-500/20 px-3 py-1.5 rounded-xs">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                <span className="text-[10px] font-black text-rose-400 tracking-widest uppercase font-mono">
                  PROJETO SOCIAL ATÍPICO • RESPONSABILIDADE E AMOR
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white leading-[1.1]">
                Forjando Vencedores: Jiu-Jitsu Como <span className="text-brand-primary">Cura e Inclusão</span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
                O esporte é a ponte mais forte para a dignidade humana. Na <strong>DP Academy</strong>, temos o orgulho de conduzir o 
                projeto <strong>Forjando Vencedores</strong>, voltado ao acolhimento e desenvolvimento de crianças atípicas 
                com Autismo (TEA), TDAH, Síndrome de Down e outras condições neurodivergentes.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed font-sans">
                Através de aulas adaptadas, carinho pedagógico e metodologia especializada, usamos as alavancas do jiu-jitsu 
                para criar regulação sensorial, melhorar a coordenação motora e promover uma integração social profunda. 
                Nós não buscamos medalhas de ouro para estes pequenos; buscamos a medalha de ouro de uma vida independente 
                e feliz.
              </p>
            </div>

            {/* Social Pillars cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#050505] border border-white/10 rounded-xs p-5 hover:border-brand-primary/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="bg-brand-primary/5 border border-brand-primary/25 p-2.5 rounded-xs text-brand-primary w-fit mb-4">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold uppercase tracking-wider text-white text-xs mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => onOpenModal("Projeto Social Atípico")}
                className="w-full sm:w-auto bg-brand-primary hover:brightness-110 text-brand-dark font-display font-black text-xs px-8 py-4 rounded-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.25)] flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Inscrever uma Criança</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/551195765-2882?text=Gostaria%20de%20saber%20como%20posso%20apoiar%20ou%20cadastrar%20um%20aluno%20no%20projeto%20social%20at%C3%ADpico."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center border border-white/10 hover:border-brand-primary text-gray-400 hover:text-white px-8 py-4 rounded-xs font-display font-black text-xs uppercase tracking-wider transition-all duration-300"
              >
                Como posso apoiar o projeto?
              </a>
            </div>
          </div>

          {/* Image & Stats Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Outer frame */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-rose-500 to-brand-primary rounded-xs opacity-20 blur" />
              
              <div className="relative bg-[#050505] rounded-xs border border-white/10 p-3 shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1635962005741-a9c4904d110b?q=80"
                  alt="Inclusão e carinho DP Academy"
                  className="rounded-xs w-full h-[300px] object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />

                {/* Micro Stats inside container */}
                <div className="p-5 space-y-4 pt-6 bg-[#0c0c0c] rounded-xs mt-3 border border-white/10">
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-xs text-gray-400 font-medium font-sans">Crianças Atendidas</span>
                    <span className="text-xs font-display font-black text-brand-primary uppercase tracking-wider">8+ Ativos</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-xs text-gray-400 font-medium font-sans">Investimento Mensal</span>
                    <span className="text-xs font-display font-black text-brand-primary uppercase tracking-wider">100% Gratuito</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-medium font-sans">Equipe Especializada</span>
                    <span className="text-xs font-display font-black text-brand-primary uppercase tracking-wider">Especialistas & Faixas Pretas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
