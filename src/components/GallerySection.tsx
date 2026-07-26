import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, MapPin, X, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Operations' },
    { id: 'farms', label: 'Farms & Harvest' },
    { id: 'quality', label: 'Quality & Facility' },
    { id: 'port', label: 'Port & Shipping' },
    { id: 'community', label: 'Community & Training' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E2A18]/10 text-[#4E2A18] text-xs font-bold uppercase tracking-widest mb-3 border border-[#4E2A18]/20"
          >
            <span>Visual Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2D180F] tracking-tight"
          >
            Telcar Cocoa in Pictures
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#4E2A18]/80 leading-relaxed"
          >
            Experience our field operations, farmer training academies, Bonaberi laboratory, and port logistics in Douala and Kribi.
          </motion.p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2D180F] text-[#D9A404] shadow-lg scale-105 border border-[#D9A404]/50'
                    : 'bg-[#F5EFE6] text-[#4E2A18] hover:bg-[#4E2A18] hover:text-[#FDFBF7]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden shadow-lg border border-[#D9A404]/20 bg-[#2D180F] cursor-pointer aspect-[4/3]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E0A] via-[#2D180F]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2D180F]/80 text-[#D9A404] backdrop-blur-md border border-[#D9A404]/30">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#2D180F]/80 text-[#D9A404] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif font-bold text-sm text-[#FDFBF7] line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#D9A404] flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-[#D9A404]" />
                    {item.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#2D180F] rounded-3xl overflow-hidden max-w-4xl w-full border-2 border-[#D9A404]/40 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1A0E0A]/80 text-[#D9A404] hover:bg-[#8B1E1E] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-[#2D180F] text-[#FDFBF7] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#D9A404] font-bold">
                    {selectedImage.categoryLabel}
                  </span>
                  <span className="text-xs text-[#D9A404] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {selectedImage.location}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#FDFBF7]">
                  {selectedImage.title}
                </h3>

                <p className="text-sm text-[#FDFBF7]/80 leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
