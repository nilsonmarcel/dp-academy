import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Methodology from "./components/Methodology";
import Programs from "./components/Programs";
import SocialProject from "./components/SocialProject";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  const handleOpenModal = (programName: string = "") => {
    setSelectedProgram(programName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProgram("");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 flex flex-col font-sans selection:bg-brand-primary selection:text-brand-dark overflow-x-hidden antialiased">
      {/* Sticky Header */}
      <Header onOpenModal={() => handleOpenModal()} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenModal={() => handleOpenModal()} />

        {/* About Section */}
        <About />

        {/* Methodology Section */}
        <Methodology />

        {/* Programs (Interactive Tabs) */}
        <Programs onOpenModal={(prog) => handleOpenModal(prog)} />

        {/* Social Project Focus */}
        <SocialProject onOpenModal={(subj) => handleOpenModal(subj)} />

        {/* Testimonials Slider */}
        <Testimonials />

        {/* Plan Pricing */}
        <Pricing onOpenModal={(plan) => handleOpenModal(plan)} />

        {/* Educational SEO Blog */}
        <Blog />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Complete Business Footer */}
      <Footer />

      {/* Leads / Free trial booking Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        selectedProgram={selectedProgram}
      />
    </div>
  );
}
