import React from "react";
import { ShieldCheck, Award, Users, MapPin, Star, Calendar } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050505]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(57,255,20,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(57,255,20,0.03),transparent_50%)]" />
        {/* Abstract grids */}
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline / Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-primary/5 border border-brand-primary/20 px-3 py-1.5 rounded-xs">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[10px] font-semibold text-brand-primary tracking-[0.2em] uppercase font-mono">
                MATRÍCULAS ABERTAS • TURMAS LIMITADAS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[1.05]">
              A Elite do Jiu-Jitsu & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-emerald-400 to-brand-primary bg-[size:200%_auto] animate-pulse">
                Alta Performance
              </span>{" "}
              em Salto-SP
            </h1>

            {/* Subtitle / Copywriting (AIDA) */}
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Desenvolva disciplina extrema, força física e autoconfiança inabalável. 
              Um ambiente familiar e acolhedor focado no jiu-jitsu tradicional, 
              musculação completa e um projeto social transformador de inclusão para crianças atípicas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto bg-brand-primary hover:brightness-110 text-brand-dark font-display font-black text-xs px-8 py-4 rounded-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(57,255,20,0.3)] cursor-pointer"
              >
                Agendar Aula Grátis
              </button>
              <a
                href="#programas"
                className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white font-display font-semibold border border-white/10 hover:border-brand-primary text-xs px-8 py-4 rounded-xs uppercase tracking-wider transition-all duration-300 text-center"
              >
                Ver Nossos Programas
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 max-w-lg sm:max-w-none mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">CBJJ Oficial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">Faixa Preta 4º Grau</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">Familiar / Inclusivo</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">Salto - SP</span>
              </div>
            </div>
          </div>

          {/* Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-emerald-600 rounded-xs blur opacity-25"></div>
              
              <div className="relative bg-[#0c0c0c] rounded-xs border border-white/10 p-4 shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1644594570717-cbedc26ce67b?q=80"
                  alt="Dojo DP Academy Premium"
                  className="rounded-xs w-full h-[320px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating overlay card */}
                <div className="absolute bottom-8 left-8 right-8 bg-[#050505]/95 border border-white/10 backdrop-blur-md p-4 rounded-xs flex items-center space-x-4 shadow-xl">
                  <div className="bg-brand-primary/10 p-2.5 rounded-xs border border-brand-primary/20">
                    <Star className="w-5 h-5 text-brand-primary fill-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider">5/5 Avaliações Google</h3>
                    <p className="text-[11px] text-gray-500 font-sans mt-0.5">A academia de artes marciais mais elogiada em Salto.</p>
                  </div>
                </div>

                {/* Micro-Interaction / Quick Info Badge */}
                <div className="absolute top-8 right-8 bg-brand-primary text-brand-dark font-mono text-[9px] font-black px-3 py-1 rounded-xs uppercase tracking-widest flex items-center space-x-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping inline-block mr-1" />
                  <span>Últimas vagas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
