import React from "react";
import { Brain, Disc, Dumbbell, ShieldAlert, Heart, ChevronRight } from "lucide-react";

export default function Methodology() {
  const pillars = [
    {
      num: "01",
      title: "Mindset & Foco",
      desc: "Desenvolvemos o controle de estresse e a resiliência mental. O jiu-jitsu ensina a pensar estrategicamente sob pressão, acalmando a ansiedade.",
      icon: Brain,
      color: "from-brand-primary/20 to-emerald-500/10"
    },
    {
      num: "02",
      title: "Técnica & Precisão",
      desc: "Nossa metodologia prioriza a mecânica inteligente e a física das alavancas, permitindo que qualquer pessoa neutralize agressores sem gastar força.",
      icon: Disc,
      color: "from-emerald-500/20 to-green-500/10"
    },
    {
      num: "03",
      title: "Condicionamento & Força",
      desc: "A musculação de ponta integrada ao plano atua na hipertrofia, ganho metabólico e fortalecimento das articulações para blindar o corpo contra lesões.",
      icon: Dumbbell,
      color: "from-brand-primary/20 to-teal-500/10"
    },
    {
      num: "04",
      title: "Caráter & Inclusão",
      desc: "Nosso pilar principal. Respeito mútuo, ambiente acolhedor e familiar, e o compromisso real de inclusão e neurodivergência infantil.",
      icon: Heart,
      color: "from-teal-500/20 to-brand-primary/10"
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-[#0c0c0c] relative border-y border-white/5">
      <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(circle_at_left,rgba(57,255,20,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-primary font-mono block">
            Nossa Fórmula de Sucesso
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            A Metodologia de Evolução Integral <span className="text-brand-primary">DP Academy</span>
          </h2>
          <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Nós não apenas ensinamos lutas e musculação. Nosso método proprietário une o fortalecimento mental, 
            a precisão mecânica, o suporte físico e o desenvolvimento humanitário para moldar vencedores na vida.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#050505] border border-white/10 hover:border-brand-primary/50 rounded-xs p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 rounded-xs bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 pointer-events-none blur-sm" />

                <div>
                  {/* Number & Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-display font-black text-3xl text-gray-800 group-hover:text-brand-primary/10 transition-colors">
                      {pillar.num}
                    </span>
                    <div className="bg-brand-primary/5 border border-brand-primary/20 p-3 rounded-xs text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="font-display text-xs font-black uppercase tracking-wider text-white mb-3 group-hover:text-brand-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Foot/Indicator */}
                <div className="mt-6 flex items-center text-[10px] font-black uppercase tracking-wider text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Saber mais</span>
                  <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
