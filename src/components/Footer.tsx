import React from "react";
import { Shield, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-6">
            <a href="#inicio" className="flex items-center space-x-2">
              <div className="bg-brand-primary p-2 rounded-xs">
                <Shield className="w-5 h-5 text-brand-dark" />
              </div>
              <div>
                <span className="font-display text-2xl font-black tracking-wider text-white">
                  DP <span className="text-brand-primary">ACADEMY</span>
                </span>
                <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-mono -mt-1.5">Salto - SP</p>
              </div>
            </a>
            <p className="text-xs text-gray-500 leading-relaxed font-sans">
              Referência regional em Brazilian Jiu-Jitsu e Musculação Integrada de Alta Performance. Forjando Campeões nos 
              tatames e transformando vidas fora deles, através da disciplina, inclusão e acolhimento familiar.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://instagram.com/dpacademyjj/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#0c0c0c] hover:bg-brand-primary border border-white/10 hover:border-transparent p-2.5 rounded-xs text-gray-400 hover:text-brand-dark transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/dpacademyjj/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#0c0c0c] hover:bg-brand-primary border border-white/10 hover:border-transparent p-2.5 rounded-xs text-gray-400 hover:text-brand-dark transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>             
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-display font-bold uppercase tracking-wider text-white text-xs">Navegação</h4>
            <ul className="space-y-3">
              {[
                { name: "Início", href: "#inicio" },
                { name: "Sobre Nós", href: "#sobre" },
                { name: "Metodologia", href: "#metodologia" },
                { name: "Programas", href: "#programas" },
                { name: "Projeto Social", href: "#projeto-social" },
                { name: "Planos", href: "#planos" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs text-gray-400 hover:text-brand-primary transition-colors font-mono uppercase tracking-wider text-[11px]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Contact Col */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-display font-bold uppercase tracking-wider text-white text-xs">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-xs text-gray-400">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">Rua Teotonio Correa, 130 - Vila Nova, Salto - SP, 13322-090</span>
              </li>
              <li className="flex items-center space-x-3 text-xs text-gray-400">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <span>(11) 95765-2882</span>
              </li>
              <li className="flex items-center space-x-3 text-xs text-gray-400">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <span>contato@dpacademybjj.com.br</span>
              </li>
              <li className="flex items-start space-x-3 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium uppercase font-mono tracking-wider text-[10px]">Segunda a Sexta:</span>
                  <span className="text-[11px] block font-mono text-gray-500">06h às 22h</span>
                  <span className="block text-white font-medium mt-2 uppercase font-mono tracking-wider text-[10px]">Sábados:</span>
                  <span className="text-[11px] block font-mono text-gray-500">08h às 12h</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Preview Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold uppercase tracking-wider text-white text-xs">Como Chegar</h4>
            <div className="relative rounded-xs overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-lg p-2 group h-[180px]">
              {/* Fake Styled Custom Black/Green Map */}
              <div className="w-full h-full bg-[#050505] flex flex-col justify-between p-4 relative border border-white/5 rounded-xs">
                {/* Visual grid / circles representing map */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_50%,#39FF14_2px,transparent_2px)] bg-[size:16px_16px]" />
                
                <div className="z-10 flex justify-between items-start">
                  <div className="bg-brand-primary/5 border border-brand-primary/25 px-2.5 py-1 rounded-xs text-[8px] font-mono text-brand-primary uppercase font-bold tracking-wider">
                    Google Maps
                  </div>
                  <div className="bg-brand-primary p-1.5 rounded-xs text-brand-dark">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="z-10 bg-[#0c0c0c] border border-white/10 p-2.5 rounded-xs">
                  <h5 className="text-[10px] font-bold text-white uppercase tracking-wider">DP Academy Salto</h5>
                  <p className="text-[9px] text-gray-500 leading-none mt-1">Rua Teotonio Correa, 130 - Vila Nova</p>
                </div>
              </div>
              
              {/* Real Map Anchor link */}
              <a
                href="https://maps.google.com/?q=DP+Academy+Salto+SP"
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-20 bg-[#050505]/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              >
                <span className="bg-brand-primary text-brand-dark font-display font-black text-[10px] px-4 py-2.5 rounded-xs uppercase tracking-wider shadow-lg">
                  Abrir no Google Maps
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-gray-500 font-sans">
            &copy; {currentYear} DP Academy BJJ & Musculação. Desenvolvido por Nilson. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-[10px] text-gray-500 font-mono uppercase tracking-wider">
            <a href="#inicio" className="hover:text-brand-primary">Termos de Uso</a>
            <a href="#inicio" className="hover:text-brand-primary">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
