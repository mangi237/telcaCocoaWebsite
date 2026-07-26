import React from 'react';
import { motion } from 'motion/react';
import { Building2, Globe2, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A404]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4E2A18]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E2A18]/10 text-[#4E2A18] text-xs font-bold uppercase tracking-widest mb-3 border border-[#4E2A18]/20"
          >
            <span>Our Corporate Story</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-[#2D180F] tracking-tight"
          >
            Connecting Cameroon’s Finest Cocoa to the World
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#4E2A18]/80 leading-relaxed"
          >
            Headquartered in <strong className="text-[#2D180F]">Bonaberi, Douala, Cameroon</strong>, Telcar Cocoa Ltd is one of the country's foremost agricultural exporters, built on a foundation of integrity, quality, and long-term farmer empowerment.
          </motion.p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Image Stack showcasing Bonaberi HQ & Operations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D9A404]/30 group">
              <img
                src="https://www.businessincameroon.com/media/k2/items/cache/428178a9c29f27022dcd4bf143525287_XL.jpg"
                alt="Telcar Cocoa Warehouse and Bonaberi Industrial Complex"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D180F] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#2D180F]/90 backdrop-blur-md border border-[#D9A404]/30 text-[#FDFBF7]">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-6 h-6 text-[#D9A404]" />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#FDFBF7]">Bonaberi Industrial Complex</h3>
                    <p className="text-xs text-[#D9A404]">Douala, Littoral Region, Cameroon</p>
                  </div>
                </div>
                <p className="text-xs text-[#FDFBF7]/80 leading-normal">
                  Our headquarters houses state-of-the-art bean quality laboratories, extensive warehousing, and high-capacity export processing facilities.
                </p>
              </div>
            </div>

            {/* Floating Secondary Accent Card */}
            <div className="hidden sm:flex absolute -bottom-8 -right-6 p-5 rounded-2xl bg-[#4E2A18] text-[#FDFBF7] border-2 border-[#D9A404] shadow-2xl max-w-xs items-center gap-4 z-20">
              <div className="p-3 rounded-xl bg-[#D9A404] text-[#2D180F] font-bold">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <div className="font-serif font-bold text-base">Cargill Alliance</div>
                <div className="text-xs text-[#D9A404]">30+ Years Global Trading Partnership</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D180F] leading-snug">
              Building a Direct, Reliable Bridge Between Cameroonian Cocoa Farmers & Global Buyers
            </h3>

            <p className="text-[#4E2A18]/90 text-sm sm:text-base leading-relaxed">
              Established in Douala, Telcar Cocoa Ltd has consistently transformed the Cameroonian cocoa landscape. By bridging local agricultural co-operatives directly with world-class international markets, we ensure that Cameroon’s rich reddish-brown cocoa beans command the prestige and value they deserve.
            </p>

            <p className="text-[#4E2A18]/90 text-sm sm:text-base leading-relaxed">
              Our long-standing commercial alliance with <strong>Cargill</strong> has brought modern agricultural technology, solar drying beds, and strict international quality certifications (including UTZ / Rainforest Alliance) to thousands of farming families across Cameroon's primary cocoa belts.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8B1E1E] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2D180F]">
                  <strong>Strategic Port Hub:</strong> Rapid vessel clearing via Autonomous Ports of Douala and Kribi.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8B1E1E] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2D180F]">
                  <strong>Farmer Empowerment:</strong> Training 30,000+ smallholders through Telcar Farmer Academies.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8B1E1E] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2D180F]">
                  <strong>Uncompromising Quality:</strong> Strict laboratory cut-tests and moisture controls (&lt;7.5%).
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#founder"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4E2A18] text-[#D9A404] hover:bg-[#2D180F] transition-colors font-bold text-xs uppercase tracking-wider shadow-md"
              >
                <span>Read About Our Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-white border border-[#D9A404]/25 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#4E2A18] text-[#D9A404] flex items-center justify-center mb-6 shadow-md">
              <Globe2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-bold text-[#2D180F] mb-3">Global Export Reach</h4>
            <p className="text-sm text-[#4E2A18]/80 leading-relaxed">
              Serving world-class chocolate manufacturers and grinders across Europe, North America, and Asia with steady, high-volume Grade 1 exports.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-white border border-[#D9A404]/25 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#8B1E1E] text-[#D9A404] flex items-center justify-center mb-6 shadow-md">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-bold text-[#2D180F] mb-3">Farmer Partnerships</h4>
            <p className="text-sm text-[#4E2A18]/80 leading-relaxed">
              Direct co-operative contracts, transparent cocoa buying prices, and educational programs ensuring dignified agricultural livelihoods.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-white border border-[#D9A404]/25 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D9A404] text-[#2D180F] flex items-center justify-center mb-6 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-bold text-[#2D180F] mb-3">Traceable Quality</h4>
            <p className="text-sm text-[#4E2A18]/80 leading-relaxed">
              Every bag shipped from Bonaberi features full digital origin batch tracking, verified moisture levels, and zero deforestation guarantees.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
