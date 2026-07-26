import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Sun, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { CAMEROON_REGIONS } from '../data/companyData';
import { CameroonRegion } from '../types';

export const CameroonSection: React.FC = () => {
  const [activeRegionId, setActiveRegionId] = useState<string>('south-west');

  const selectedRegion = CAMEROON_REGIONS.find((r) => r.id === activeRegionId) || CAMEROON_REGIONS[0];

  return (
    <section id="cameroon" className="py-24 bg-[#2D180F] text-[#FDFBF7] relative overflow-hidden">
      {/* Background African Geometric Motif */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D9A404_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E2A18] text-[#D9A404] text-xs font-bold uppercase tracking-widest mb-3 border border-[#D9A404]/30"
          >
            <span>Origin & Terroir</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight"
          >
            Cameroon — The Heart of World-Class Cocoa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#FDFBF7]/80 leading-relaxed"
          >
            From the volcanic slopes of Mount Cameroon in the South-West to the vast river valleys of the Centre region, explore where Telcar sources its premium beans.
          </motion.p>
        </div>

        {/* Map & Region Details Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Interactive Cameroon Map Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative bg-[#1A0E0A] p-6 sm:p-8 rounded-3xl border-2 border-[#D9A404]/30 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6 border-b border-[#4E2A18] pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D9A404] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D9A404]" />
                Cameroon Cocoa Terroir Map
              </span>
              <span className="text-[10px] text-[#FDFBF7]/60 font-mono">
                Click pin to inspect region
              </span>
            </div>

            {/* Stylized SVG Map Container */}
            <div className="relative w-full aspect-[4/3] bg-[#2D180F]/60 rounded-2xl border border-[#4E2A18] overflow-hidden flex items-center justify-center p-4">
              {/* Cameroon Country Silhouette Vector */}
              <svg className="w-full h-full text-[#4E2A18] opacity-60" viewBox="0 0 500 500" fill="currentColor">
                <path d="M 200,80 L 260,110 L 290,160 L 380,220 L 420,310 L 360,370 L 310,430 L 250,420 L 200,470 L 170,410 L 160,330 L 120,310 L 110,260 L 150,220 L 170,140 Z" />
              </svg>

              {/* Gulf of Guinea / Atlantic Ocean Label */}
              <div className="absolute bottom-6 left-6 text-[10px] uppercase font-serif tracking-widest text-[#D9A404]/40">
                Atlantic Ocean / Bight of Biafra
              </div>

              {/* Bonaberi Douala Central Port Hub Marker */}
              <div className="absolute top-[66%] left-[36%] z-20 group">
                <div className="w-4 h-4 rounded-full bg-[#8B1E1E] border-2 border-[#D9A404] animate-ping absolute -inset-0" />
                <div className="w-4 h-4 rounded-full bg-[#8B1E1E] border-2 border-[#D9A404] relative flex items-center justify-center shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D9A404]" />
                </div>
                <div className="absolute left-6 top-0 bg-[#1A0E0A] text-[#D9A404] text-[10px] font-bold px-2 py-0.5 rounded border border-[#D9A404]/40 whitespace-nowrap shadow-xl">
                  TELCAR HQ (Bonaberi)
                </div>
              </div>

              {/* Regional Map Hotspots */}
              {CAMEROON_REGIONS.map((region) => {
                const isActive = region.id === activeRegionId;
                return (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegionId(region.id)}
                    style={{ left: `${region.coordinates.x}%`, top: `${region.coordinates.y}%` }}
                    className={`absolute z-30 transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 cursor-pointer ${
                      isActive ? 'scale-125 z-40' : 'hover:scale-110'
                    }`}
                  >
                    <div className={`p-2 rounded-full border-2 transition-all shadow-xl flex items-center justify-center ${
                      isActive
                        ? 'bg-[#D9A404] text-[#2D180F] border-white shadow-[#D9A404]/50'
                        : 'bg-[#4E2A18] text-[#D9A404] border-[#D9A404]/50 hover:bg-[#8B1E1E]'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    <span className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap transition-colors shadow-md ${
                      isActive
                        ? 'bg-[#D9A404] text-[#2D180F]'
                        : 'bg-[#1A0E0A]/90 text-[#FDFBF7] border border-[#D9A404]/20'
                    }`}>
                      {region.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Region Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
              {CAMEROON_REGIONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActiveRegionId(r.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                    r.id === activeRegionId
                      ? 'bg-[#D9A404] text-[#2D180F] shadow-md font-bold'
                      : 'bg-[#4E2A18] text-[#FDFBF7]/80 hover:bg-[#8B1E1E]'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Selected Region Breakdown Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1A0E0A] p-8 rounded-3xl border-2 border-[#D9A404]/40 shadow-2xl space-y-6"
              >
                <div className="border-b border-[#4E2A18] pb-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D9A404] font-bold">
                      Regional Sourcing Hub
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FDFBF7]">
                      {selectedRegion.name}
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#8B1E1E] text-white text-xs font-mono font-bold">
                    {selectedRegion.annualTonnage}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#2D180F] border border-[#4E2A18]">
                    <div className="flex items-center gap-2 text-xs text-[#D9A404] font-medium mb-1">
                      <Sun className="w-4 h-4" />
                      Harvest Window
                    </div>
                    <div className="text-sm font-bold text-[#FDFBF7]">
                      {selectedRegion.harvestPeriod}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#2D180F] border border-[#4E2A18]">
                    <div className="flex items-center gap-2 text-xs text-[#D9A404] font-medium mb-1">
                      <Award className="w-4 h-4" />
                      Regional Hub
                    </div>
                    <div className="text-sm font-bold text-[#FDFBF7]">
                      {selectedRegion.capital}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#2D180F] border border-[#D9A404]/20 space-y-1">
                  <div className="text-xs text-[#D9A404] font-bold uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Flavor & Sensory Profile
                  </div>
                  <p className="text-xs sm:text-sm text-[#FDFBF7]/90 leading-relaxed font-serif italic">
                    "{selectedRegion.flavorProfile}"
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9A404]">
                    Telcar Agricultural Highlights
                  </h4>
                  {selectedRegion.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#2D180F] border border-[#4E2A18]">
                      <CheckCircle2 className="w-4 h-4 text-[#D9A404] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#FDFBF7]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
