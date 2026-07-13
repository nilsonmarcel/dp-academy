import React, { useRef, useState, useEffect } from "react";
import { Menu, X, Dumbbell, Shield, Phone } from "lucide-react";


interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);


  // =========================
  // Header Scroll Effect
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================
  // Header Height
  // =========================
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [scrolled]);

  // =========================
  // Lock Body Scroll
  // =========================
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // =========================
  // Close on Resize
  // =========================
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // =========================
  // Close on ESC
  // =========================
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Programas", href: "#programas" },
    { name: "Projeto Social", href: "#projeto-social" },
    { name: "Planos", href: "#planos" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      ref={headerRef}
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,padding,backdrop-filter,box-shadow,border-color]
        duration-300
        ease-in-out ${scrolled || isOpen
          ? "bg-[#050505] py-6 border-b border-white/10 shadow-lg"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 bg-brand-primary rounded-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-black font-black text-xl tracking-tighter">DP</span>
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tighter text-white">
                ACADEMY<span className="text-brand-primary">.</span>
              </span>
              <p className="text-[8px] uppercase tracking-[0.2em] text-gray-500 font-mono -mt-1.5">
                Salto - SP
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-brand-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href="https://wa.me/551195765-2882?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20e%20aulas%20da%20DP%20Academy."
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-brand-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>(11) 95765-2882</span>
            </a>
            <button
              onClick={onOpenModal}
              className="bg-brand-primary hover:brightness-110 text-brand-dark font-display font-black text-xs px-6 py-3 rounded-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.25)] cursor-pointer"
            >
              Matrícula / Aula Grátis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={onOpenModal}
              className="bg-brand-primary hover:brightness-110 text-brand-dark font-display font-black text-[10px] px-3.5 py-2 rounded-xs uppercase tracking-wider transition-all"
            >
              Aula Grátis
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-brand-primary p-1.5 focus:outline-none"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Mobile Drawer */}
      <div
        style={{ top: headerHeight }}
        className={`lg:hidden fixed inset-0 z-40 bg-[#050505] border-t border-white/10 transition-transform transition-opacity duration-300 transform 
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
      >
        <div className="px-6 py-8 space-y-6 flex flex-col justify-between h-[calc(100vh-100px)]">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-200 hover:text-brand-primary transition-colors border-b border-gray-900 pb-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="space-y-4">
            <a
              href="https://wa.me/551195765-2882?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20e%20aulas%20da%20DP%20Academy."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 text-base font-semibold text-gray-300 hover:text-brand-primary py-3 bg-gray-900 rounded-lg"
            >
              <Phone className="w-5 h-5 text-brand-primary" />
              <span>Falar no WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenModal();
              }}
              className="w-full bg-brand-primary hover:bg-green-500 text-brand-dark font-display font-bold py-3.5 rounded-lg text-center shadow-lg cursor-pointer"
            >
              Garantir Aula Experimental Grátis
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
