import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sprout,
  Scissors,
  Flame,
  Sun,
  ShieldCheck,
  Package,
  Ship,
  Award,
  ChevronRight,
  CheckCircle2,
  Info
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';
import { ProcessStep } from '../types';

export const JourneySection: React.FC = () => {
  const [selectedStepId, setSelectedStepId] = useState<number>(1);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Sprout': return <Sprout className="w-6 h-6" />;
      case 'Scissors': return <Scissors className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Package': return <Package className="w-6 h-6" />;
      case 'Ship': return <Ship className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      default: return <Sprout className="w-6 h-6" />;
    }
  };

  const activeStep = PROCESS_STEPS.find((s) => s.id === selectedStepId) || PROCESS_STEPS[0];

  return (
    <section id="journey" className="py-24 bg-[#F5EFE6] relative overflow-hidden">
      {/* Decorative SVG Line Accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E2A18]/10 text-[#4E2A18] text-xs font-bold uppercase tracking-widest mb-3 border border-[#4E2A18]/20"
          >
            <span>Supply Chain Excellence</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2D180F] tracking-tight"
          >
            The Journey of Cameroonian Cocoa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#4E2A18]/80 leading-relaxed"
          >
            From shade-grown volcanic soil plantations in Cameroon to global chocolate artisans, explore our rigorous 8-step quality pipeline.
          </motion.p>
        </div>

        {/* Interactive Steps Grid Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-12">
          {PROCESS_STEPS.map((step) => {
            const isSelected = step.id === selectedStepId;
            return (
              <button
                key={step.id}
                onClick={() => setSelectedStepId(step.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-32 relative group ${
                  isSelected
                    ? 'bg-[#2D180F] text-[#FDFBF7] border-[#D9A404] shadow-xl scale-105 z-10'
                    : 'bg-white text-[#4E2A18] border-[#4E2A18]/15 hover:border-[#D9A404] hover:bg-[#FDFBF7]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-[#D9A404] text-[#2D180F]' : 'bg-[#4E2A18]/10 text-[#4E2A18]'
                  }`}>
                    0{step.id}
                  </span>
                  <div className={isSelected ? 'text-[#D9A404]' : 'text-[#8B1E1E]'}>
                    {getIconComponent(step.iconName)}
                  </div>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-xs leading-tight line-clamp-2">
                    {step.title.split('. ')[1] || step.title}
                  </h4>
                  <p className={`text-[10px] mt-1 line-clamp-1 ${isSelected ? 'text-[#D9A404]' : 'text-[#4E2A18]/60'}`}>
                    {step.keyMetric}
                  </p>
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="activeJourneyIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2D180F] border-r border-b border-[#D9A404] rotate-45 hidden lg:block"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Viewer Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#2D180F] text-[#FDFBF7] p-8 lg:p-12 border-2 border-[#D9A404]/30 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9A404]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Metric & Icon */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-[#4E2A18] text-[#D9A404] border border-[#D9A404]/40 shadow-lg">
                    {getIconComponent(activeStep.iconName)}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D9A404] font-bold">
                      Step 0{activeStep.id} of 08
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FDFBF7]">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#4E2A18]/80 border border-[#D9A404]/25">
                  <div className="text-xs text-[#D9A404] font-medium uppercase tracking-wider mb-1">
                    Quality Parameter Benchmark
                  </div>
                  <div className="text-xl font-bold font-serif text-[#FDFBF7]">
                    {activeStep.keyMetric}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#FDFBF7]/90 leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Right Column: Key Details Bullet Points */}
              <div className="lg:col-span-7 bg-[#1A0E0A]/90 p-6 sm:p-8 rounded-2xl border border-[#D9A404]/20 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#D9A404] flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#D9A404]" />
                  Operational Protocol & Field Execution
                </h4>

                <div className="space-y-3">
                  {activeStep.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#2D180F]/80 border border-[#4E2A18]">
                      <CheckCircle2 className="w-5 h-5 text-[#D9A404] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#FDFBF7] font-medium leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step Switcher Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-[#4E2A18]">
                  <button
                    disabled={activeStep.id === 1}
                    onClick={() => setSelectedStepId((prev) => Math.max(1, prev - 1))}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-[#FDFBF7] bg-[#4E2A18] hover:bg-[#8B1E1E] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  >
                    ← Previous Step
                  </button>

                  <div className="text-xs text-[#D9A404] font-mono">
                    {activeStep.id} / {PROCESS_STEPS.length}
                  </div>

                  <button
                    disabled={activeStep.id === PROCESS_STEPS.length}
                    onClick={() => setSelectedStepId((prev) => Math.min(PROCESS_STEPS.length, prev + 1))}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-[#2D180F] bg-[#D9A404] hover:bg-[#F3C63F] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors flex items-center gap-1"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
