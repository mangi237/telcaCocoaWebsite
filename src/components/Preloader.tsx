import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return prev + 15;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2D180F] text-[#FDFBF7]"
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#D9A404]/10 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center p-8 max-w-md text-center z-10">
            {/* Stylized Rotating Cocoa Bean Loader */}
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D9A404]/30 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border-2 border-[#D9A404] border-t-transparent animate-spin" />
              
              {/* Cocoa Bean SVG Icon */}
              <motion.svg
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-12 h-12 text-[#D9A404]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </motion.svg>
            </div>

            {/* Brand Title */}
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide text-[#FDFBF7] mb-2">
              TELCAR COCOA <span className="text-[#D9A404] text-lg font-sans font-normal ml-1">LTD</span>
            </h1>
            
            <p className="text-xs uppercase tracking-widest text-[#D9A404] font-medium mb-6">
              Douala, Cameroon
            </p>

            {/* Progress Bar */}
            <div className="w-64 h-1.5 bg-[#4E2A18] rounded-full overflow-hidden mb-3 border border-[#D9A404]/20">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8B1E1E] via-[#D9A404] to-[#F3C63F]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p className="text-xs text-[#D9A404]/80 font-mono">
              Loading Quality Cocoa Experience... {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
