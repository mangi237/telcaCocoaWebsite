import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Settings, Check, RefreshCw } from 'lucide-react';
import { CompanyConfig } from '../types';

interface SiteConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CompanyConfig;
  onUpdateConfig: (updated: CompanyConfig) => void;
}

export const SiteConfigModal: React.FC<SiteConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
}) => {
  const [formData, setFormData] = useState<CompanyConfig>(config);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(formData);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
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
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#D9A404] font-bold">
              Site Ownership & Content Settings
            </span>
            <h3 className="font-serif font-bold text-2xl text-[#FDFBF7]">
              Customize Telcar Corporate Info
            </h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                Headquarters Hub
              </label>
              <input
                type="text"
                value={formData.headquarters}
                onChange={(e) => setFormData({ ...formData, headquarters: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
              Physical Street Address
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                Main Telephone Line
              </label>
              <input
                type="text"
                value={formData.phoneMain}
                onChange={(e) => setFormData({ ...formData, phoneMain: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                Alternate Phone Line
              </label>
              <input
                type="text"
                value={formData.phoneAlt}
                onChange={(e) => setFormData({ ...formData, phoneAlt: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                General Contact Email
              </label>
              <input
                type="email"
                value={formData.emailContact}
                onChange={(e) => setFormData({ ...formData, emailContact: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                Export Department Email
              </label>
              <input
                type="email"
                value={formData.emailExport}
                onChange={(e) => setFormData({ ...formData, emailExport: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
              Corporate Motto / Slogan
            </label>
            <input
              type="text"
              value={formData.slogan}
              onChange={(e) => setFormData({ ...formData, slogan: e.target.value })}
              className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[#D9A404] text-[#2D180F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3C63F] transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4" />
                <span>Configuration Saved!</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                <span>Update Site Settings</span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};
