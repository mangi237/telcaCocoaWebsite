import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, ArrowRight, Sparkles, MapPin, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#1A0E0A]">
      {/* Background Hero Image Overlay with Parallax Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.foodbusinessmea.com/wp-content/uploads/2025/09/90ee0e4f-9b46-4756-bc2b-030d871aadf4-840x480.jpg"
          alt="Cameroon Cocoa Plantation"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform animate-pulse-subtle"
        />
        {/* Layered Rich Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E0A] via-[#2D180F]/80 to-[#1A0E0A]/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#2D180F]/40 to-[#1A0E0A]" />
      </div>

      {/* Subtle Floating Golden Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-1/4 left-1/10 w-2 h-2 rounded-full bg-[#D9A404] animate-float" />
        <div className="absolute top-1/3 right-1/6 w-3 h-3 rounded-full bg-[#D9A404]/60 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 rounded-full bg-[#8B1E1E]/80 animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto pt-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4E2A18]/80 border border-[#D9A404]/40 text-[#D9A404] text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#D9A404]" />
            <span>Cameroon's Leading Premium Cocoa Exporter</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404]" />
            <span className="hidden sm:inline text-white/80 font-normal">Bonaberi, Douala</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#FDFBF7] tracking-tight leading-[1.12] mb-6"
          >
            From Cameroon’s Rich Soil to the World’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9A404] via-[#F3C63F] to-[#D9A404]">Finest Chocolate</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[#FDFBF7]/85 font-normal leading-relaxed mb-8 max-w-2xl"
          >
            For decades, <strong className="text-[#D9A404] font-semibold">Telcar Cocoa</strong> has connected Cameroon's finest cocoa beans to global markets through quality, integrity and excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 rounded-xl text-sm font-bold tracking-wide uppercase text-[#2D180F] bg-gradient-to-r from-[#D9A404] to-[#F3C63F] hover:from-[#F3C63F] hover:to-[#D9A404] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-xl text-sm font-bold tracking-wide uppercase text-[#FDFBF7] bg-[#4E2A18]/80 border border-[#D9A404]/50 hover:bg-[#8B1E1E] hover:border-[#D9A404] backdrop-blur-md shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Key Metrics Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#2D180F]/90 border border-[#D9A404]/25 backdrop-blur-md shadow-2xl"
        >
          <div className="flex items-center space-x-3.5 p-2">
            <div className="p-2.5 rounded-xl bg-[#4E2A18] text-[#D9A404] border border-[#D9A404]/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-[#FDFBF7]">30+ Years</div>
              <div className="text-xs text-[#D9A404]">Export Leadership</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 p-2">
            <div className="p-2.5 rounded-xl bg-[#4E2A18] text-[#D9A404] border border-[#D9A404]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-[#FDFBF7]">30,000+</div>
              <div className="text-xs text-[#D9A404]">Farmers Trained</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 p-2">
            <div className="p-2.5 rounded-xl bg-[#4E2A18] text-[#D9A404] border border-[#D9A404]/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-[#FDFBF7]">Bonaberi</div>
              <div className="text-xs text-[#D9A404]">Douala Headquarters</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5 p-2">
            <div className="p-2.5 rounded-xl bg-[#8B1E1E] text-[#D9A404] border border-[#D9A404]/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-[#FDFBF7]">Grade 1</div>
              <div className="text-xs text-[#D9A404]">Cameroonian Quality</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#D9A404]/70 hover:text-[#D9A404] transition-colors flex flex-col items-center gap-1 text-xs uppercase tracking-widest cursor-pointer"
          >
            <span>Scroll To Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
