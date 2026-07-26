import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      
      if (documentHeight > 0) {
        const percentage = (scrolled / documentHeight) * 100;
        setScrollPercent(Math.min(100, Math.max(0, percentage)));
      }

      setShowBackToTop(scrolled > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#2D180F]/30 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#8B1E1E] via-[#D9A404] to-[#F3C63F] transition-all duration-150 ease-out"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Floating Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#4E2A18] text-[#D9A404] shadow-2xl border border-[#D9A404]/30 hover:bg-[#2D180F] hover:scale-110 active:scale-95 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#D9A404]"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
