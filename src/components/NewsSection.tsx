import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Calendar, ArrowRight, X, PlusCircle, Newspaper, Check } from 'lucide-react';
import { INITIAL_NEWS_ARTICLES } from '../data/companyData';
import { NewsArticle } from '../types';

export const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>(INITIAL_NEWS_ARTICLES);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New Article Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<NewsArticle['category']>('Company Updates');
  const [newSummary, setNewSummary] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newSummary || !newContent) return;

    const created: NewsArticle = {
      id: `news-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '4 min read',
      summary: newSummary,
      content: newContent,
      imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80',
      author: 'Telcar Editorial Team'
    };

    setArticles([created, ...articles]);
    setShowAddModal(false);
    setNewTitle('');
    setNewSummary('');
    setNewContent('');
  };

  return (
    <section id="news" className="py-24 bg-[#F5EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E2A18]/10 text-[#4E2A18] text-xs font-bold uppercase tracking-widest mb-3 border border-[#4E2A18]/20"
            >
              <span>Insights & Press</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2D180F] tracking-tight"
            >
              Latest News & Cocoa Market Insights
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setShowAddModal(true)}
              className="px-5 py-3 rounded-xl bg-[#4E2A18] text-[#D9A404] hover:bg-[#2D180F] transition-colors font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-[#D9A404]" />
              <span>Add Custom Article</span>
            </button>
          </motion.div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-3xl bg-white border border-[#D9A404]/25 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2D180F]">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2D180F]/90 text-[#D9A404] border border-[#D9A404]/30 backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[#4E2A18]/60 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D9A404]" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D9A404]" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#2D180F] group-hover:text-[#8B1E1E] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#4E2A18]/80 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-3 rounded-xl bg-[#F5EFE6] text-[#2D180F] group-hover:bg-[#2D180F] group-hover:text-[#D9A404] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDFBF7] text-[#1A0E0A] rounded-3xl overflow-hidden max-w-3xl w-full border-2 border-[#D9A404] shadow-2xl relative my-8"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#2D180F] text-[#D9A404] hover:bg-[#8B1E1E] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[21/9] bg-[#2D180F]">
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent" />
              </div>

              <div className="p-8 -mt-8 relative z-10 space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#8B1E1E] font-bold uppercase tracking-wider mb-2">
                    <span>{selectedArticle.category}</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                  </div>

                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#2D180F] leading-snug">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-xs text-[#4E2A18]/70 mt-1">By {selectedArticle.author}</p>
                </div>

                <div className="p-4 bg-[#F5EFE6] rounded-2xl border-l-4 border-[#D9A404] text-sm text-[#2D180F] font-serif italic">
                  "{selectedArticle.summary}"
                </div>

                <div className="text-sm text-[#4E2A18]/90 leading-relaxed whitespace-pre-line space-y-4">
                  {selectedArticle.content}
                </div>

                <div className="pt-6 border-t border-[#4E2A18]/20 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#2D180F] text-[#D9A404] font-bold text-xs uppercase tracking-wider hover:bg-[#4E2A18] transition-colors cursor-pointer"
                  >
                    Close Reader
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Custom Article Form Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#2D180F] text-[#FDFBF7] rounded-3xl p-8 max-w-xl w-full border-2 border-[#D9A404] shadow-2xl relative"
            >
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#4E2A18] text-[#D9A404] hover:bg-[#8B1E1E] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#4E2A18] text-[#D9A404]">
                  <Newspaper className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#FDFBF7]">Add Corporate Article</h3>
                  <p className="text-xs text-[#D9A404]">Publish new press releases or market reports</p>
                </div>
              </div>

              <form onSubmit={handleAddArticle} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Telcar Expands Solar Drying Capacity in Ebolowa"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                    Category *
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as NewsArticle['category'])}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
                  >
                    <option value="Company Updates">Company Updates</option>
                    <option value="Industry News">Industry News</option>
                    <option value="Market Insights">Market Insights</option>
                    <option value="Sustainability">Sustainability</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                    Executive Summary *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={newSummary}
                    onChange={(e) => setNewSummary(e.target.value)}
                    placeholder="Short 2-line teaser..."
                    className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D9A404] mb-1">
                    Full Body Article *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Write detailed news paragraphs..."
                    className="w-full px-4 py-2 rounded-xl bg-[#1A0E0A] border border-[#4E2A18] text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D9A404]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#D9A404] text-[#2D180F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3C63F] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Publish Article</span>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
