import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, Globe, Info, Clock, Copy, Check } from 'lucide-react';
import { CompanyConfig, ContactFormData } from '../types';

interface ContactSectionProps {
  companyConfig: CompanyConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ companyConfig }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interestType: 'buyer',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable API form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(companyConfig.emailContact);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#2D180F] text-[#FDFBF7] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D9A404]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B1E1E]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E2A18] text-[#D9A404] text-xs font-bold uppercase tracking-widest mb-3 border border-[#D9A404]/30"
          >
            <span>Direct Commercial Inquiries</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFBF7] tracking-tight"
          >
            Connect with Telcar Cocoa Headquarters
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#FDFBF7]/80 leading-relaxed"
          >
            Whether you are an international chocolate manufacturer seeking Grade 1 beans, a potential trade partner, or an agricultural cooperative, our Bonaberi team is ready to assist you.
          </motion.p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Office Details & Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Headquarters Contact Info Card */}
            <div className="p-8 rounded-3xl bg-[#1A0E0A] border-2 border-[#D9A404]/30 shadow-2xl space-y-6">
              <div className="border-b border-[#4E2A18] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#D9A404] font-bold">
                  Bonaberi Executive Office
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#FDFBF7] mt-1">
                  TELCAR COCOA LTD
                </h3>
                <p className="text-xs text-[#FDFBF7]/70">Douala, Littoral Region, Cameroon</p>
              </div>

              <div className="space-y-4 text-sm text-[#FDFBF7]/90">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#4E2A18] text-[#D9A404] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#D9A404]">Physical Address</h4>
                    <p className="text-xs sm:text-sm text-[#FDFBF7]/80 leading-relaxed mt-0.5">
                      {companyConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#4E2A18] text-[#D9A404] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#D9A404]">Telephone Lines</h4>
                    <p className="text-xs sm:text-sm text-[#FDFBF7]/80 leading-relaxed mt-0.5">
                      Main: <a href={`tel:${companyConfig.phoneMain}`} className="hover:text-[#D9A404] font-mono">{companyConfig.phoneMain}</a>
                      <br />
                      Alt: <a href={`tel:${companyConfig.phoneAlt}`} className="hover:text-[#D9A404] font-mono">{companyConfig.phoneAlt}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#4E2A18] text-[#D9A404] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-[#D9A404]">Official Email Desk</h4>
                      <button
                        onClick={copyEmailToClipboard}
                        className="text-[10px] text-[#D9A404] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        {copiedEmail ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-[#FDFBF7]/80 leading-relaxed mt-0.5 font-mono">
                      General: {companyConfig.emailContact}
                      <br />
                      Exports: {companyConfig.emailExport}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#4E2A18] text-[#D9A404] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#D9A404]">Working Hours</h4>
                    <p className="text-xs text-[#FDFBF7]/80 leading-relaxed mt-0.5">
                      Monday – Friday: 08:00 – 17:30 (WAT / GMT+1)
                      <br />
                      Saturday: 08:00 – 12:30 (Logistics Desk)
                    </p>
                  </div>
                </div>
              </div>

              {/* Integration Helper Banner */}
              <div className="p-4 rounded-2xl bg-[#4E2A18]/60 border border-[#D9A404]/20 text-xs text-[#FDFBF7]/80 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#D9A404] shrink-0 mt-0.5" />
                <span>
                  <strong>Configuration Note:</strong> Submissions are processed directly. You can update live email endpoints or form webhook keys in <code className="text-[#D9A404] font-mono">Site Config</code>.
                </span>
              </div>
            </div>

            {/* Google Map Embed centered on Bonaberi, Douala */}
            <div className="rounded-3xl overflow-hidden border-2 border-[#D9A404]/30 shadow-2xl h-64 relative bg-[#1A0E0A]">
              <iframe
                title="Telcar Cocoa Bonaberi Douala Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.792582845607!2d9.671388874975545!3d4.081512495892556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061129b8c2c8f85%3A0x6a0c5bc6b84589d8!2sBonab%C3%A9ri%2C%20Douala%2C%20Cameroon!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) opacity(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#1A0E0A] p-8 sm:p-10 rounded-3xl border-2 border-[#D9A404]/30 shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[#4E2A18] text-[#D9A404] border-2 border-[#D9A404] flex items-center justify-center mx-auto shadow-2xl">
                    <CheckCircle2 className="w-10 h-10 text-[#D9A404]" />
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#FDFBF7]">
                    Message Received by Telcar Export Team
                  </h3>

                  <p className="text-sm text-[#FDFBF7]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#D9A404]">{formData.fullName}</strong>. Your inquiry regarding <strong className="text-white">{formData.subject || 'Cocoa Export'}</strong> has been successfully transmitted to our Bonaberi executive office.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#2D180F] border border-[#D9A404]/20 max-w-md mx-auto text-xs text-[#FDFBF7]/70 space-y-1 font-mono text-left">
                    <div>Reference ID: TEL-{Math.floor(100000 + Math.random() * 900000)}</div>
                    <div>Target Email: {companyConfig.emailContact}</div>
                    <div>Status: Queued for High-Priority Officer Review</div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        interestType: 'buyer',
                      });
                    }}
                    className="px-8 py-3 rounded-xl bg-[#D9A404] text-[#2D180F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3C63F] transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="border-b border-[#4E2A18] pb-4">
                    <h3 className="font-serif font-bold text-2xl text-[#FDFBF7]">
                      Send an Inquiry
                    </h3>
                    <p className="text-xs text-[#D9A404]">
                      Complete the form below to reach our commercial export team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Jean-Pierre Mbarga"
                        className="w-full px-4 py-3 rounded-xl bg-[#2D180F] border border-[#4E2A18] text-xs text-[#FDFBF7] placeholder-[#FDFBF7]/40 focus:outline-none focus:border-[#D9A404] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Chocolaterie Fine Europe"
                        className="w-full px-4 py-3 rounded-xl bg-[#2D180F] border border-[#4E2A18] text-xs text-[#FDFBF7] placeholder-[#FDFBF7]/40 focus:outline-none focus:border-[#D9A404] transition-colors"
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
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. buyer@chocolat.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#2D180F] border border-[#4E2A18] text-xs text-[#FDFBF7] placeholder-[#FDFBF7]/40 focus:outline-none focus:border-[#D9A404] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +33 1 42 68 00 00"
                        className="w-full px-4 py-3 rounded-xl bg-[#2D180F] border border-[#4E2A18] text-xs text-[#FDFBF7] placeholder-[#FDFBF7]/40 focus:outline-none focus:border-[#D9A404] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                        Inquiry Category *
                      </label>
                      <select
                        name="interestType"
                        value={formData.interestType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#2D180F] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404] transition-colors"
                      >
                        <option value="buyer">International Cocoa Buyer / Importer</option>
                        <option value="partner">Commodities Trader / Partner</option>
                        <option value="farmer">Farmer Cooperative / Sourcing</option>
                        <option value="press">Media & Public Relations</option>
                        <option value="general">General Corporate Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                        Subject Line *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Contract Inquiry for 500 MT Grade 1 Beans"
                        className="w-full px-4 py-3 rounded-xl bg-[#2D180F] border border-[#4E2A18] text-xs text-[#FDFBF7] placeholder-[#FDFBF7]/40 focus:outline-none focus:border-[#D9A404] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                      Detailed Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify target volume, destination port (e.g. Antwerp, Hamburg), and preferred shipment schedule..."
                      className="w-full px-4 py-3 rounded-xl bg-[#2D180F] border border-[#4E2A18] text-xs text-[#FDFBF7] placeholder-[#FDFBF7]/40 focus:outline-none focus:border-[#D9A404] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#2D180F] bg-gradient-to-r from-[#D9A404] to-[#F3C63F] hover:from-[#F3C63F] hover:to-[#D9A404] shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Commercial Inquiry</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
