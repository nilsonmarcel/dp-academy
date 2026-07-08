import React from "react";
import { CheckCircle2, Award, HeartHandshake, Heart } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Ambiente Familiar e Seguro",
      desc: "Nossos tatames são seguros, higienizados e focados na camaradagem. Aqui todos se apoiam mutuamente.",
      icon: Heart
    },
    {
      title: "Excelência Técnica de Alto Nível",
      desc: "Instrução liderada por Faixa Preta de 4º Grau, garantindo Jiu-Jitsu autêntico da mais alta qualidade.",
      icon: Award
    },
    {
      title: "Inclusão Social Real",
      desc: "Nosso espaço é adaptado e acolhe alunos de todos os perfis, com destaque para nosso projeto de neurodivergência.",
      icon: HeartHandshake
    },
    {
      title: "Estrutura Integrada",
      desc: "A única que combina Jiu-Jitsu de elite com musculação de alta tecnologia no mesmo espaço unificado.",
      icon: CheckCircle2
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-[#050505] relative border-y border-white/5">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_right,rgba(57,255,20,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image with layered grids */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative block behind */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-brand-primary/50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-brand-primary/50" />
              
              <img
                src="https://images.unsplash.com/photo-1602827115160-a9e732f05533?q=80"
                alt="Treinamento Jiu-Jitsu DP Academy"
                className="rounded-xs w-full h-[450px] object-cover shadow-2xl relative z-10 filter brightness-95 border border-white/10"
                referrerPolicy="no-referrer"
              />

              {/* Float Badge */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-brand-primary text-brand-dark p-6 rounded-xs shadow-[0_0_25px_rgba(57,255,20,0.3)] z-20 max-w-[180px] text-center">
                <span className="font-display text-4xl font-black block leading-none">12+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark">Anos de Tradição e Impacto</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-primary font-mono block">
                Nossa História • Nosso Legado
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white leading-[1.1]">
                Mais do que uma Academia. <br />
                <span className="text-brand-primary">Um Estilo de Vida e Transformação.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm font-sans">
                Fundada sob os pilares da disciplina, respeito e excelência técnica, a <strong>DP Academy</strong> nasceu 
                da visão de criar um ecossistema esportivo em Salto-SP que não apenas formasse campeões no tatame, 
                mas também vencesse as batalhas da vida cotidiana.
              </p>
              <p className="text-gray-500 leading-relaxed text-xs font-sans">
                Acreditamos firmemente que o esporte tem poder curativo e regulador. É por isso que unimos 
                uma estrutura esportiva de altíssimo padrão com profissionais apaixonados. Aqui, cada aluno — 
                seja uma criança buscando autoconfiança, uma mulher aprendendo defesa pessoal ou uma criança 
                com espectro autista participando do nosso projeto de inclusão — é tratado com acolhimento individualizado.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex space-x-4">
                    <div className="bg-brand-primary/5 border border-brand-primary/20 p-2.5 rounded-xs h-fit shrink-0">
                      <Icon className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase tracking-wide text-white text-xs">{item.title}</h3>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
