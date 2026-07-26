import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, FileText, ChevronRight } from 'lucide-react';
import { CompanyConfig } from '../types';

interface NavbarProps {
  companyConfig: CompanyConfig;
  onRequestSample: () => void;
  onOpenConfig?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ companyConfig, onRequestSample, onOpenConfig }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['hero', 'about', 'founder', 'journey', 'quality', 'cameroon', 'impact', 'sustainability', 'gallery', 'news', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Founder', href: '#founder' },
    { name: 'Cocoa Journey', href: '#journey' },
    { name: 'Quality', href: '#quality' },
    { name: 'Cameroon', href: '#cameroon' },
    { name: 'Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Banner (Hidden on compact mobile) */}
      <div className={`hidden lg:block bg-[#1A0E0A] text-[#FDFBF7]/80 text-xs py-1.5 border-b border-[#D9A404]/15 transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#D9A404]">
              <span className="w-2 h-2 rounded-full bg-[#D9A404] inline-block mr-2 animate-pulse" />
              Cameroon's Premier Cocoa Exporter • Bonaberi, Douala
            </span>
            <a href={`tel:${companyConfig.phoneMain}`} className="hover:text-[#D9A404] transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#D9A404]" /> {companyConfig.phoneMain}
            </a>
            <a href={`mailto:${companyConfig.emailContact}`} className="hover:text-[#D9A404] transition-colors flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#D9A404]" /> {companyConfig.emailContact}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onRequestSample}
              className="text-[#D9A404] hover:underline font-medium cursor-pointer"
            >
              International Buyer Samples
            </button>
            <span className="text-[#D9A404]/30">|</span>
            <button
              onClick={onOpenConfig}
              className="text-[#FDFBF7]/60 hover:text-[#D9A404] transition-colors text-xs cursor-pointer"
              title="Site Settings & Ownership Config"
            >
              Site Config
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#2D180F]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#D9A404]/20'
            : 'bg-gradient-to-b from-[#1A0E0A]/90 via-[#2D180F]/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            {/* Custom Cocoa Pod Logo Badge */}
            <div className="w-10 h-10 rounded-xl bg-white p-1 border border-[#D9A404] shadow-md group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden shrink-0">
              <img
                src="https://sobabuea.org/wp-content/uploads/2021/05/Telcar-Cocoa-Logo.png"
                alt="Telcar Cocoa Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://www.thetelcargroup.com/wp-content/uploads/2021/05/logo.png';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#FDFBF7] group-hover:text-[#D9A404] transition-colors leading-tight">
                TELCAR COCOA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D9A404] font-semibold -mt-0.5">
                LTD • CAMEROON
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#D9A404] font-semibold'
                      : 'text-[#FDFBF7]/90 hover:text-[#D9A404]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D9A404] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onRequestSample}
              className="px-4 py-2 rounded-lg text-xs font-semibold tracking-wide text-[#FDFBF7] bg-[#4E2A18] hover:bg-[#8B1E1E] border border-[#D9A404]/40 hover:border-[#D9A404] transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#D9A404]" />
              Request Sample
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-5 py-2 rounded-lg text-xs font-bold tracking-wide uppercase text-[#2D180F] bg-gradient-to-r from-[#D9A404] to-[#F3C63F] hover:from-[#F3C63F] hover:to-[#D9A404] shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#4E2A18]/80 text-[#D9A404] border border-[#D9A404]/30 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#2D180F] border-b border-[#D9A404]/30 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3">
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#4E2A18]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-center justify-between p-2.5 rounded-lg text-sm text-[#FDFBF7] hover:bg-[#4E2A18] hover:text-[#D9A404] transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D9A404]/60" />
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestSample();
                  }}
                  className="w-full py-3 rounded-lg text-sm font-semibold text-[#FDFBF7] bg-[#4E2A18] border border-[#D9A404]/40 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#D9A404]" />
                  Request Cocoa Sample
                </button>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full text-center py-3 rounded-lg text-sm font-bold text-[#2D180F] bg-[#D9A404]"
                >
                  Contact Telcar Team
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
