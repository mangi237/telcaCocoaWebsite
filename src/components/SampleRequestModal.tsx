import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, FileText, Send, Sparkles } from 'lucide-react';
import { SampleRequestData } from '../types';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<SampleRequestData>({
    fullName: '',
    companyName: '',
    email: '',
    country: 'Belgium',
    beanGrade: 'Grade 1 Reddish-Brown',
    sampleQuantityKg: 2,
    shippingAddress: '',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-[#2D180F] text-[#FDFBF7] rounded-3xl p-8 max-w-xl w-full border-2 border-[#D9A404] shadow-2xl relative my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#4E2A18] text-[#D9A404] hover:bg-[#8B1E1E] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-[#4E2A18] text-[#D9A404] border border-[#D9A404]/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#D9A404] font-bold">
              International Buyers Protocol
            </span>
            <h3 className="font-serif font-bold text-2xl text-[#FDFBF7]">
              Request Grade 1 Bean Sample
            </h3>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#4E2A18] text-[#D9A404] border border-[#D9A404] flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif font-bold text-xl text-[#FDFBF7]">Sample Dispatch Requested</h4>
            <p className="text-xs text-[#FDFBF7]/80 leading-relaxed max-w-md mx-auto">
              Our export department in Bonaberi, Douala has dispatched your sample request. DHL courier tracking details will be transmitted to <strong className="text-[#D9A404]">{formData.email}</strong> upon phytosanitary clearance.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#D9A404] text-[#2D180F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3C63F] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Master Chocolatier Francois"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                  Company / Mill *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Artisan Cacao SA"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="buyer@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                  Destination Country *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. Germany, Netherlands, USA"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                  Cocoa Bean Grade Spec
                </label>
                <select
                  value={formData.beanGrade}
                  onChange={(e) => setFormData({ ...formData, beanGrade: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
                >
                  <option value="Grade 1 Reddish-Brown">Grade 1 Reddish-Brown (Standard)</option>
                  <option value="Grade 1 Fermented">Grade 1 Fully Fermented (High Aroma)</option>
                  <option value="Fairtrade / UTZ Certified">UTZ / Rainforest Alliance Certified</option>
                  <option value="Custom Specification">Custom Factory Specification</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                  Sample Volume (Kg)
                </label>
                <select
                  value={formData.sampleQuantityKg}
                  onChange={(e) => setFormData({ ...formData, sampleQuantityKg: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
                >
                  <option value={1}>1.0 kg Laboratory Sample</option>
                  <option value={2}>2.5 kg Standard Roasting Sample</option>
                  <option value={5}>5.0 kg Pilot Batch Production Sample</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                Courier Delivery Address *
              </label>
              <textarea
                required
                rows={2}
                value={formData.shippingAddress}
                onChange={(e) => setFormData({ ...formData, shippingAddress: e.target.value })}
                placeholder="Full international street address for DHL Express courier delivery..."
                className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D9A404] to-[#F3C63F] text-[#2D180F] font-bold text-xs uppercase tracking-wider hover:from-[#F3C63F] hover:to-[#D9A404] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {submitting ? 'Processing Courier Dispatch...' : 'Dispatch Sample Request to Bonaberi'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
