import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, SunMedium, TreePine, ShieldCheck, Heart, Users } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  const initiatives = [
    {
      title: "Telcar Farmer Academy",
      subtitle: "Empowering 30,000+ Cameroonian Farmers",
      description: "Structured agronomical training on shade tree maintenance, integrated pest management, safe pod harvesting, and business skills.",
      icon: <GraduationCap className="w-6 h-6 text-[#D9A404]" />,
      badge: "350+ Training Hubs"
    },
    {
      title: "Solar Drying Innovation",
      subtitle: "Elevated Bamboo Drying Tables",
      description: "Replacing ground drying with solar drying beds to protect beans from mold, soil contact, and animal intrusion, achieving ideal < 7.5% moisture.",
      icon: <SunMedium className="w-6 h-6 text-[#D9A404]" />,
      badge: "Clean Solar Moisture"
    },
    {
      title: "Zero Deforestation Commitment",
      subtitle: "GPS Farm Boundary Polygon Mapping",
      description: "Ensuring zero cocoa cultivation in protected primary national parks, preserving Cameroon's rainforest canopy through shade-grown agroforestry.",
      icon: <TreePine className="w-6 h-6 text-[#D9A404]" />,
      badge: "Forest Protection"
    },
    {
      title: "Community & Child Welfare",
      subtitle: "Cargill Cocoa Promise Partnership",
      description: "Community child labor monitoring, construction of primary school classrooms, and provision of clean drinking water boreholes in rural co-ops.",
      icon: <Heart className="w-6 h-6 text-[#D9A404]" />,
      badge: "Community Care"
    },
    {
      title: "Transparent Digital Purchasing",
      subtitle: "Mobile Farmer Payment System",
      description: "Providing direct mobile money payments to farmers upon delivery at buying centers, eliminating cash risks and guaranteeing fair market premiums.",
      icon: <ShieldCheck className="w-6 h-6 text-[#D9A404]" />,
      badge: "Direct Payments"
    },
    {
      title: "Gender Inclusivity in Agriculture",
      subtitle: "Female Cocoa Producer Empowerment",
      description: "Led by Madame Kate Fotso, Telcar actively champions women in agricultural entrepreneurship, cooperative leadership, and land governance.",
      icon: <Users className="w-6 h-6 text-[#D9A404]" />,
      badge: "Female Leadership"
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-[#F5EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E2A18]/10 text-[#4E2A18] text-xs font-bold uppercase tracking-widest mb-3 border border-[#4E2A18]/20"
          >
            <span>Sustainability & Ethics</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2D180F] tracking-tight"
          >
            Sustainable Sourcing & Farmer Empowerment
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#4E2A18]/80 leading-relaxed"
          >
            Quality cocoa begins with dignified, empowered farming communities. Discover how Telcar Cocoa advances social, environmental, and economic standards across Cameroon.
          </motion.p>
        </div>

        {/* 6 Initiative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-8 rounded-2xl bg-white border border-[#D9A404]/25 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#2D180F] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D180F] bg-[#D9A404]/20 px-2.5 py-1 rounded-full border border-[#D9A404]/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#2D180F] mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-[#8B1E1E] font-semibold mb-3">
                  {item.subtitle}
                </p>

                <p className="text-sm text-[#4E2A18]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
