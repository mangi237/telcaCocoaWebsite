import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Microscope,
  Sparkles,
  HeartHandshake,
  Truck,
  Globe2,
  FileText,
  X,
  Check,
  ShieldCheck,
  Download
} from 'lucide-react';
import { QUALITY_CARDS } from '../data/companyData';
import { QualityCard } from '../types';

export const QualitySection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<QualityCard | null>(null);
  const [showSpecSheet, setShowSpecSheet] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Microscope': return <Microscope className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'Globe2': return <Globe2 className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="quality" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-bold uppercase tracking-widest mb-3 border border-[#8B1E1E]/20"
          >
            <span>Standard of Excellence</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2D180F] tracking-tight"
          >
            Why Quality Matters to Global Chocolate Manufacturers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#4E2A18]/80 leading-relaxed"
          >
            Cameroon cocoa is world-renowned for its distinct deep reddish-brown color, high fat content, and rich flavor profile. We enforce strict parameters from field buying stations to export loading.
          </motion.p>
        </div>

        {/* Quality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {QUALITY_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white border border-[#D9A404]/25 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#4E2A18] text-[#D9A404] group-hover:bg-[#8B1E1E] transition-colors flex items-center justify-center shadow-md">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9A404] bg-[#4E2A18]/5 px-2.5 py-1 rounded-full border border-[#D9A404]/20">
                    Grade 1 Focus
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#2D180F] mb-2 group-hover:text-[#8B1E1E] transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-xs text-[#D9A404] font-semibold mb-4">
                  {card.tagline}
                </p>

                <p className="text-sm text-[#4E2A18]/80 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#F5EFE6] border border-[#4E2A18]/10 mb-6">
                  {card.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xs font-bold text-[#2D180F] font-mono">{m.value}</div>
                      <div className="text-[10px] text-[#4E2A18]/70 line-clamp-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedCard(card)}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#4E2A18] bg-[#F5EFE6] hover:bg-[#4E2A18] hover:text-[#D9A404] border border-[#D9A404]/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Quality Protocol</span>
                <Check className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}

          {/* Action CTA Card: Download Technical Spec Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl bg-gradient-to-br from-[#2D180F] via-[#4E2A18] to-[#8B1E1E] text-[#FDFBF7] p-8 shadow-2xl border-2 border-[#D9A404]/40 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#D9A404] text-[#2D180F] flex items-center justify-center mb-6 shadow-md">
                <FileText className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#FDFBF7] mb-2">
                Export Technical Spec Sheet
              </h3>
              
              <p className="text-xs text-[#D9A404] font-semibold mb-4">
                Official Telcar Grade 1 Cocoa Bean Standard
              </p>

              <p className="text-sm text-[#FDFBF7]/80 leading-relaxed mb-6">
                Inspect our official laboratory parameters for moisture, fat content, bean count calibration, cut-test thresholds, and packaging standards.
              </p>
            </div>

            <button
              onClick={() => setShowSpecSheet(true)}
              className="w-full py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-[#2D180F] bg-gradient-to-r from-[#D9A404] to-[#F3C63F] hover:from-[#F3C63F] hover:to-[#D9A404] transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Inspect Spec Sheet</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Card Detail Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#2D180F] text-[#FDFBF7] rounded-3xl p-8 max-w-xl w-full border-2 border-[#D9A404]/40 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#4E2A18] text-[#D9A404] hover:bg-[#8B1E1E] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#4E2A18] text-[#D9A404] border border-[#D9A404]/30">
                  {getIcon(selectedCard.iconName)}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#FDFBF7]">{selectedCard.title}</h3>
                  <p className="text-xs text-[#D9A404]">{selectedCard.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-[#FDFBF7]/90 leading-relaxed mb-6">
                {selectedCard.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-3">
                Key Protocol Guidelines
              </h4>

              <div className="space-y-2 mb-6">
                {selectedCard.bulletPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#1A0E0A] border border-[#4E2A18]">
                    <Check className="w-4 h-4 text-[#D9A404] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#FDFBF7]">{pt}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedCard(null)}
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#D9A404] text-[#2D180F] hover:bg-[#F3C63F] transition-colors cursor-pointer"
              >
                Close Protocol View
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grade 1 Spec Sheet Preview Modal */}
      <AnimatePresence>
        {showSpecSheet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#FDFBF7] text-[#1A0E0A] rounded-3xl p-8 max-w-2xl w-full border-2 border-[#D9A404] shadow-2xl relative my-8"
            >
              <button
                onClick={() => setShowSpecSheet(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#4E2A18] text-[#D9A404] hover:bg-[#8B1E1E] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-[#4E2A18]/20 pb-4 mb-6">
                <div className="text-xs uppercase tracking-widest text-[#8B1E1E] font-bold mb-1">
                  TELCAR COCOA LTD • BONABERI DOUALA
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#2D180F]">
                  Grade 1 Cameroonian Cocoa Bean Spec Sheet
                </h3>
                <p className="text-xs text-[#4E2A18]/70">
                  Export Specification Document #TCL-SPEC-2026-A1
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-3 bg-[#F5EFE6] rounded-xl border border-[#4E2A18]/10">
                    <div className="text-[10px] text-[#4E2A18]/70 font-semibold uppercase">Moisture Level</div>
                    <div className="text-base font-bold font-mono text-[#2D180F]">&lt; 7.5% Max</div>
                  </div>
                  <div className="p-3 bg-[#F5EFE6] rounded-xl border border-[#4E2A18]/10">
                    <div className="text-[10px] text-[#4E2A18]/70 font-semibold uppercase">Bean Count</div>
                    <div className="text-base font-bold font-mono text-[#2D180F]">95–105 / 100g</div>
                  </div>
                  <div className="p-3 bg-[#F5EFE6] rounded-xl border border-[#4E2A18]/10">
                    <div className="text-[10px] text-[#4E2A18]/70 font-semibold uppercase">Fat Content</div>
                    <div className="text-base font-bold font-mono text-[#2D180F]">54%–58%</div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#4E2A18]/15 space-y-2">
                  <h4 className="text-xs font-bold text-[#2D180F] uppercase">Cut-Test Tolerances (FCC Compliant):</h4>
                  <ul className="text-xs text-[#4E2A18]/80 space-y-1 list-disc list-inside">
                    <li>Mouldy beans: Maximum 3%</li>
                    <li>Slaty beans: Maximum 3%</li>
                    <li>Insect-damaged, germinated or flat beans: Maximum 3%</li>
                    <li>Foreign matter: Less than 0.1%</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#4E2A18]/15 space-y-2">
                  <h4 className="text-xs font-bold text-[#2D180F] uppercase">Packaging & Vessel Logistics:</h4>
                  <ul className="text-xs text-[#4E2A18]/80 space-y-1 list-disc list-inside">
                    <li>Standard 65.5 kg food-grade breathable natural jute bags</li>
                    <li>Full batch origin traceability barcode stencil</li>
                    <li>Phytosanitary inspection certificate issued by Cameroonian Ministry of Agriculture</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    alert("Telcar Grade 1 Cocoa Spec Sheet downloaded (Simulated PDF).");
                    setShowSpecSheet(false);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#2D180F] text-[#D9A404] font-bold text-xs uppercase tracking-wider hover:bg-[#4E2A18] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Spec Sheet</span>
                </button>
                <button
                  onClick={() => setShowSpecSheet(false)}
                  className="px-6 py-3 rounded-xl bg-[#F5EFE6] text-[#2D180F] font-bold text-xs uppercase tracking-wider hover:bg-[#4E2A18]/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
