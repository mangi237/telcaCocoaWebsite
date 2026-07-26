import React from 'react';
import { motion } from 'motion/react';
import { Quote, Award, Anchor, Briefcase, Sparkles } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-[#2D180F] text-[#FDFBF7] relative overflow-hidden">
      {/* Background Subtle Pattern & Lighting Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#D9A404]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8B1E1E]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4E2A18] text-[#D9A404] text-xs font-bold uppercase tracking-widest border border-[#D9A404]/30 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D9A404]" />
            <span>Company Leadership</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight"
          >
            Meet Our Founder — Madame Kate Fotso
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#D9A404] font-serif italic"
          >
            Pioneering Businesswoman & "Iron Lady" of Cameroon's Cocoa Industry
          </motion.p>
        </div>

        {/* Founder Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D9A404]/40 shadow-2xl bg-[#4E2A18] group">
              {/* Founder Image */}
              <img
                src="https://www.theafricaceoforum.com/forum-2023/wp-content/uploads/sites/6/2023/04/19056_1651827568_4ZNZCX.jpg.jpg"
                alt="Madame Kate Fotso - Founder & CEO of Telcar Cocoa Ltd"
                className="w-full h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E0A] via-transparent to-transparent opacity-90" />

              {/* Portrait Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#1A0E0A]/90 backdrop-blur-md border border-[#D9A404]/30">
                <h3 className="font-serif font-bold text-xl text-[#FDFBF7]">Madame Kate Kanyi-Tometi Fotso</h3>
                <p className="text-xs text-[#D9A404] font-medium tracking-wide">Founder & Chief Executive Officer • Telcar Cocoa Ltd</p>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-[#FDFBF7]/70">
                  <Anchor className="w-3.5 h-3.5 text-[#D9A404]" />
                  <span>Board Representative, Autonomous Port of Kribi</span>
                </div>
              </div>
            </div>

            {/* Corner Decorative Badge */}
            <div className="hidden sm:flex absolute -top-6 -right-6 p-4 rounded-2xl bg-[#8B1E1E] text-[#FDFBF7] border border-[#D9A404] shadow-2xl items-center gap-3">
              <Award className="w-6 h-6 text-[#D9A404]" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#D9A404]">Agribusiness Visionary</div>
                <div className="text-xs text-white">Cameroon Cocoa Sector</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Detailed Narrative & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Prominent Pull-Quote Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#4E2A18] to-[#3F0909] border-l-4 border-[#D9A404] shadow-xl relative">
              <Quote className="w-10 h-10 text-[#D9A404]/30 absolute top-4 right-4" />
              <p className="font-serif italic text-lg sm:text-xl text-[#FDFBF7] leading-relaxed relative z-10">
                “A legacy built on integrity, resilience, and a belief in the power of Cameroonian cocoa to reach the world.”
              </p>
              <div className="mt-3 text-xs uppercase tracking-widest text-[#D9A404] font-bold">
                — Madame Kate Fotso
              </div>
            </div>

            {/* Biography Narrative */}
            <div className="space-y-4 text-sm sm:text-base text-[#FDFBF7]/90 leading-relaxed font-normal">
              <p>
                <strong className="text-[#D9A404]">Kate Kanyi-Tometi Fotso</strong> is the founder and CEO of Telcar Cocoa Ltd. Before starting Telcar, she gained extensive experience in global commodities trading at <strong className="text-white">Cargill</strong> — an insight that deeply shaped her understanding of international agricultural markets and supply chain dynamics.
              </p>

              <p>
                She founded Telcar Cocoa in Douala in the mid-1990s with a singular vision: building a direct, reliable bridge between Cameroonian cocoa farmers and major international buyers. Under her leadership, Telcar grew into one of Cameroon's largest cocoa exporters, forging a long-standing trading alliance with Cargill and helping bring international quality and sustainability standards — including farmer training academies — to tens of thousands of Cameroonian cocoa producers.
              </p>

              <p>
                She was married to the late <strong className="text-white">André Fotso</strong>, a prominent Cameroonian businessman and former head of the country's employers' association (GICAM), who passed away in 2016; she has since continued to lead and grow the family's business interests with steady determination.
              </p>

              <p>
                Madame Fotso has been widely recognized across Cameroon and Africa as a pioneering businesswoman and one of the continent's most influential figures in agribusiness, frequently described as the <strong className="text-[#D9A404]">"iron lady"</strong> of Cameroon's cocoa sector. She was appointed by the Cameroonian government to represent exporters on the board of directors of the Autonomous Port of Kribi.
              </p>
            </div>

            {/* Key Achievements Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#4E2A18]">
              <div className="p-4 rounded-xl bg-[#4E2A18]/60 border border-[#D9A404]/20 flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-[#D9A404] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#FDFBF7]">Cargill Sourcing Pioneer</h4>
                  <p className="text-xs text-[#FDFBF7]/70">Pioneered direct farmer sourcing partnerships and international certification across Cameroon.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#4E2A18]/60 border border-[#D9A404]/20 flex items-start gap-3">
                <Anchor className="w-5 h-5 text-[#D9A404] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#FDFBF7]">Port Governance</h4>
                  <p className="text-xs text-[#FDFBF7]/70">Government appointee representing exporters on the board of the Autonomous Port of Kribi.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
