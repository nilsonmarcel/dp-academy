import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="depoimentos" className="py-24 bg-[#0c0c0c] relative border-y border-white/5">
      <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(circle_at_left,rgba(57,255,20,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-primary font-mono block">
            Vidas Transformadas • Prova Social
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            O Que Dizem os <span className="text-brand-primary">Nossos Alunos & Pais</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Nada fala mais alto do que os resultados de quem vive os tatames no dia a dia. Descubra histórias reais de superação, 
            disciplina e inclusão.
          </p>
        </div>

        {/* Interactive Testimonial Slider Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Big Quote Accent Graphic */}
          <div className="absolute -top-12 -left-6 md:-left-12 opacity-5 text-brand-primary">
            <Quote className="w-20 h-20 stroke-[4]" />
          </div>

          <div className="bg-[#050505] border border-white/10 rounded-xs p-6 sm:p-12 shadow-2xl relative">
            <div className="space-y-6">
              {/* Rating Stars */}
              <div className="flex space-x-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-primary fill-brand-primary" />
                ))}
              </div>

              {/* Feedback Content */}
              <p className="text-gray-200 text-xs sm:text-base md:text-lg font-sans italic leading-relaxed">
                "{activeTestimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="w-11 h-11 rounded-full object-cover border border-brand-primary"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-white text-sm">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-[11px] text-gray-500">{activeTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controllers */}
          <div className="flex justify-between items-center mt-8">
            {/* Dots */}
            <div className="flex space-x-1.5">
              {TESTIMONIALS_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-xs transition-all duration-300 cursor-pointer ${
                    currentIndex === index ? "w-6 bg-brand-primary" : "w-1.5 bg-gray-800"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="bg-[#050505] hover:bg-white/5 border border-white/10 hover:border-brand-primary text-white p-2.5 rounded-xs transition-all cursor-pointer"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-[#050505] hover:bg-white/5 border border-white/10 hover:border-brand-primary text-white p-2.5 rounded-xs transition-all cursor-pointer"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Corporate Trust Badge Logostrip/Icons */}
        <div className="mt-20 pt-12 border-t border-white/5 text-center space-y-6">
          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-mono">Instituições e Associações Registradas</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-20 grayscale hover:grayscale-0 transition-all">
            <span className="font-display font-black text-lg sm:text-xl text-white tracking-wider">CBJJ</span>
            <span className="font-display font-black text-lg sm:text-xl text-white tracking-wider">IBJJF</span>
            <span className="font-display font-black text-lg sm:text-xl text-white tracking-wider">FED. PAULISTA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
