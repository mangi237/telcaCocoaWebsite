import React, { useState } from 'react';
import { CompanyConfig } from '../types';
import { ArrowUpRight, Check, Send, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  companyConfig: CompanyConfig;
  onRequestSample: () => void;
  onOpenConfig?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ companyConfig, onRequestSample, onOpenConfig }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-[#1A0E0A] text-[#FDFBF7] pt-20 pb-10 border-t-2 border-[#D9A404]/30 relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-1 bg-gradient-to-r from-transparent via-[#D9A404] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#4E2A18] p-1.5 border border-[#D9A404] flex items-center justify-center">
                <svg className="w-full h-full text-[#D9A404]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-[#FDFBF7]">TELCAR COCOA</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#D9A404] font-semibold">LTD • CAMEROON</p>
              </div>
            </div>

            <p className="text-xs text-[#FDFBF7]/80 leading-relaxed pt-2">
              Cameroon's leading cocoa exporter, connecting high-quality cocoa beans to international chocolate markets with integrity, sustainability, and agricultural excellence.
            </p>

            <div className="pt-2">
              <p className="font-serif italic text-sm text-[#D9A404]">
                "{companyConfig.slogan}"
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D9A404] border-b border-[#4E2A18] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FDFBF7]/80 font-medium">
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-[#D9A404] transition-colors flex items-center gap-1">
                  Company Story
                </a>
              </li>
              <li>
                <a href="#founder" onClick={(e) => scrollToSection(e, '#founder')} className="hover:text-[#D9A404] transition-colors flex items-center gap-1">
                  Founder — Madame Fotso
                </a>
              </li>
              <li>
                <a href="#journey" onClick={(e) => scrollToSection(e, '#journey')} className="hover:text-[#D9A404] transition-colors flex items-center gap-1">
                  The Journey of Cocoa
                </a>
              </li>
              <li>
                <a href="#quality" onClick={(e) => scrollToSection(e, '#quality')} className="hover:text-[#D9A404] transition-colors flex items-center gap-1">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="#cameroon" onClick={(e) => scrollToSection(e, '#cameroon')} className="hover:text-[#D9A404] transition-colors flex items-center gap-1">
                  Cameroon Sourcing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Executive Hub Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D9A404] border-b border-[#4E2A18] pb-2">
              Trade Services
            </h4>
            <ul className="space-y-2 text-xs text-[#FDFBF7]/80 font-medium">
              <li>
                <button onClick={onRequestSample} className="hover:text-[#D9A404] transition-colors cursor-pointer text-left">
                  Request Bean Sample
                </button>
              </li>
              <li>
                <a href="#impact" onClick={(e) => scrollToSection(e, '#impact')} className="hover:text-[#D9A404] transition-colors">
                  Our Impact Statistics
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')} className="hover:text-[#D9A404] transition-colors">
                  Operations Gallery
                </a>
              </li>
              <li>
                <a href="#news" onClick={(e) => scrollToSection(e, '#news')} className="hover:text-[#D9A404] transition-colors">
                  News & Market Insights
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-[#D9A404] transition-colors">
                  Contact Office
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Social */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D9A404] border-b border-[#4E2A18] pb-2">
              Market Reports Newsletter
            </h4>
            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed">
              Subscribe to receive quarterly Cameroonian cocoa harvest updates and export market insights.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center rounded-xl bg-[#2D180F] border border-[#4E2A18] overflow-hidden p-1 focus-within:border-[#D9A404]">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter business email..."
                  className="w-full px-3 py-2 text-xs text-[#FDFBF7] bg-transparent focus:outline-none placeholder-[#FDFBF7]/40"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#D9A404] text-[#2D180F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3C63F] transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4 text-[#2D180F]" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#D9A404] font-mono">
                  ✓ Subscribed! You will receive our next harvest report.
                </p>
              )}
            </form>

            <div className="pt-2">
              <button
                onClick={onOpenConfig}
                className="text-[11px] text-[#D9A404] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Edit Site Settings & Contact Addresses</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4E2A18] flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDFBF7]/60 gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-[#FDFBF7]">TELCAR COCOA LTD</strong>. Bonaberi, Douala, Cameroon. All rights reserved.
          </div>

          <div className="font-serif italic text-[#D9A404]">
            "Growing Excellence. Delivering Cameroon to the World."
          </div>
        </div>
      </div>
    </footer>
  );
};
