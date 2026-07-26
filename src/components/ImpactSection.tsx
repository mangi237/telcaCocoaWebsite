import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Calendar, Users, TrendingUp, Globe } from 'lucide-react';
import { IMPACT_STATS } from '../data/companyData';

interface CounterProps {
  target: number;
  suffix: string;
}

const CountUp: React.FC<CounterProps> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-serif font-extrabold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const ImpactSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Calendar': return <Calendar className="w-7 h-7 text-[#D9A404]" />;
      case 'Users': return <Users className="w-7 h-7 text-[#D9A404]" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-[#D9A404]" />;
      case 'Globe': return <Globe className="w-7 h-7 text-[#D9A404]" />;
      default: return <TrendingUp className="w-7 h-7 text-[#D9A404]" />;
    }
  };

  return (
    <section id="impact" className="py-24 bg-[#4E2A18] text-[#FDFBF7] relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D9A404]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#8B1E1E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D180F] text-[#D9A404] text-xs font-bold uppercase tracking-widest mb-3 border border-[#D9A404]/30"
          >
            <span>Measurable Leadership</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight"
          >
            Our Impact Across Cameroon & Global Markets
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#FDFBF7]/80 leading-relaxed"
          >
            Three decades of proven reliability, ethical farmer purchasing, and high-volume Grade 1 cocoa exports from the Port of Douala.
          </motion.p>
        </div>

        {/* 4 Animated Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#2D180F] border-2 border-[#D9A404]/30 shadow-2xl hover:border-[#D9A404] hover:-translate-y-1.5 transition-all flex flex-col justify-between text-center group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#4E2A18] border border-[#D9A404]/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {getIcon(stat.iconName)}
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl text-[#D9A404] mb-3">
                  <CountUp target={stat.targetValue} suffix={stat.suffix} />
                </div>

                <h3 className="font-serif font-bold text-lg text-[#FDFBF7] mb-2">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs text-[#FDFBF7]/70 leading-relaxed mt-4 pt-4 border-t border-[#4E2A18]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
