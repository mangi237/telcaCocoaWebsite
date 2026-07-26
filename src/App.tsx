import React, { useState } from 'react';
import { INITIAL_COMPANY_CONFIG } from './data/companyData';
import { CompanyConfig } from './types';

// Components
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { JourneySection } from './components/JourneySection';
import { QualitySection } from './components/QualitySection';
import { CameroonSection } from './components/CameroonSection';
import { ImpactSection } from './components/ImpactSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { GallerySection } from './components/GallerySection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { SampleRequestModal } from './components/SampleRequestModal';
import { SiteConfigModal } from './components/SiteConfigModal';

export default function App() {
  const [companyConfig, setCompanyConfig] = useState<CompanyConfig>(INITIAL_COMPANY_CONFIG);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [configModalOpen, setConfigModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A0E0A] flex flex-col font-sans selection:bg-[#D9A404] selection:text-[#4E2A18]">
      {/* 1. Preloader (Stylized rotating cocoa bean animation) */}
      <Preloader />

      {/* 2. Top Scroll Progress Line + Back-To-Top Button */}
      <ScrollProgress />

      {/* 3. Sticky Navigation Bar */}
      <Navbar
        companyConfig={companyConfig}
        onRequestSample={() => setSampleModalOpen(true)}
        onOpenConfig={() => setConfigModalOpen(true)}
      />

      {/* Main Corporate Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Telcar Cocoa */}
        <AboutSection />

        {/* 3. Meet the Founder — Madame Kate Fotso */}
        <FounderSection />

        {/* 4. The Journey of Cocoa (8-Step Process) */}
        <JourneySection />

        {/* 5. Why Quality Matters */}
        <QualitySection />

        {/* 6. Cameroon Sourcing Terroir Map */}
        <CameroonSection />

        {/* 7. Impact Statistics & Animated Counters */}
        <ImpactSection />

        {/* 8. Quality & Sustainability */}
        <SustainabilitySection />

        {/* 9. Operations Gallery */}
        <GallerySection />

        {/* 10. News & Insights */}
        <NewsSection />

        {/* 11. Contact & Map */}
        <ContactSection companyConfig={companyConfig} />
      </main>

      {/* 12. Corporate Footer */}
      <Footer
        companyConfig={companyConfig}
        onRequestSample={() => setSampleModalOpen(true)}
        onOpenConfig={() => setConfigModalOpen(true)}
      />

      {/* Modals */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
      />

      <SiteConfigModal
        isOpen={configModalOpen}
        onClose={() => setConfigModalOpen(false)}
        config={companyConfig}
        onUpdateConfig={(updated) => setCompanyConfig(updated)}
      />
    </div>
  );
}
