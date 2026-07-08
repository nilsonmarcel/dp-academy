import React, { useState } from "react";
import { X, Check, Dumbbell, Shield, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgram?: string;
}

export default function ContactModal({ isOpen, onClose, selectedProgram = "" }: ContactModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("Manhã");
  const [program, setProgram] = useState(selectedProgram || "Jiu-Jitsu Adulto");
  const [submitted, setSubmitted] = useState(false);

  // Sync state if selectedProgram changes from parent
  React.useEffect(() => {
    if (selectedProgram) {
      setProgram(selectedProgram);
    }
  }, [selectedProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Simulate lead capture and format a beautiful WhatsApp message
    const cleanProgram = program.split(" (")[0];
    const textMessage = `Olá DP Academy! Gostaria de agendar minha aula experimental gratuita.%0A%0A*Dados do Aluno:*%0A- Nome: ${name}%0A- WhatsApp: ${phone}%0A- Programa: ${cleanProgram}%0A- Período de Interesse: ${time}%0A%0AVim pelo site premium! Aguardo retorno.`;
    
    setSubmitted(true);
    
    setTimeout(() => {
      // Redirect to WhatsApp
      window.open(`https://wa.me/551195765-2882?text=${textMessage}`, "_blank");
      setSubmitted(false);
      setName("");
      setPhone("");
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0c0c0c] border border-white/10 rounded-xs max-w-md w-full relative shadow-2xl overflow-hidden">
        {/* Decorative Top Accent line */}
        <div className="h-1 bg-brand-primary w-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white bg-[#050505] border border-white/10 hover:border-brand-primary p-1.5 rounded-xs transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-brand-primary/5 border border-brand-primary/20 rounded-xs flex items-center justify-center mx-auto text-brand-primary animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black uppercase tracking-wide text-white text-lg">Inscrição Enviada!</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs mx-auto">
                Redirecionando você para a nossa recepção no WhatsApp para confirmar o seu horário...
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-brand-primary">
                  <Shield className="w-4 h-4" />
                  <span className="font-mono text-[9px] font-black uppercase tracking-widest">Aula Experimental Grátis</span>
                </div>
                <h3 className="font-display font-black text-white text-xl">
                  Dê o Primeiro Passo Hoje!
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Preencha o formulário abaixo. Geramos sua aula e conectamos com a recepção de Salto-SP instantaneamente.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="modal-name" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Nome Completo
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Theo Alencar"
                    className="w-full bg-[#050505] border border-white/10 focus:border-brand-primary focus:outline-none rounded-xs px-4 py-3 text-xs text-white placeholder-gray-600 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="modal-phone" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    WhatsApp (Celular)
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full bg-[#050505] border border-white/10 focus:border-brand-primary focus:outline-none rounded-xs px-4 py-3 text-xs text-white placeholder-gray-600 transition-colors"
                  />
                </div>

                {/* Program Category */}
                <div className="space-y-1.5">
                  <label htmlFor="modal-program" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Programa de Interesse
                  </label>
                  <select
                    id="modal-program"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full bg-[#050505] border border-white/10 focus:border-brand-primary focus:outline-none rounded-xs px-4 py-3 text-xs text-white transition-colors cursor-pointer"
                  >
                    <option value="Jiu-Jitsu Adulto">Jiu-Jitsu Adulto</option>
                    <option value="Jiu-Jitsu Kids">Jiu-Jitsu Kids</option>
                    <option value="Defesa Pessoal Feminina">Defesa Pessoal Feminina</option>
                    <option value="Musculação & Preparação">Musculação & Preparação Física</option>
                    <option value="Projeto Social Atípico">Projeto Social Atípico (Inclusão)</option>
                  </select>
                </div>

                {/* Preferred time period */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Melhor Período para Treinar
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Manhã", "Tarde", "Noite"].map((period) => (
                      <button
                        key={period}
                        type="button"
                        onClick={() => setTime(period)}
                        className={`py-2 rounded-xs border text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                          time === period
                            ? "bg-brand-primary/5 border-brand-primary text-brand-primary"
                            : "bg-[#050505] border-white/10 text-gray-400 hover:text-white"
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submission CTA */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-brand-primary hover:brightness-110 text-brand-dark font-display font-black text-xs py-3.5 rounded-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.25)] flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Confirmar Inscrição Grátis</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[9px] text-gray-500 text-center mt-3 leading-relaxed font-mono uppercase tracking-wider">
                    Ao preencher, você concorda com nossas políticas e será direcionado ao WhatsApp para agendamento.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
