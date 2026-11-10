import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/cupData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Product', 'Cafes & B2B', 'Storage & Health'];

  const filteredFaqs = selectedCategory === 'all'
    ? FAQS
    : FAQS.filter((f) => f.category === selectedCategory);

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#E8DFC8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-stone-200/70 text-[#2B1B14] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-[#E87332]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2B1B14] font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#685A4E] text-base mt-2">
            Everything you need to know about our edible biscuit cups, temperature stability, and cafe ordering.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition cursor-pointer capitalize ${
                  selectedCategory === cat
                    ? 'bg-[#2B1B14] text-white'
                    : 'bg-white text-[#5E5146] hover:bg-stone-100 border border-[#E8DFC8]'
                }`}
              >
                {cat === 'all' ? 'All Questions' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8DFC8] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 transition"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#E87332]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#2B1B14]">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E87332]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#5E5146] leading-relaxed border-t border-stone-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 bg-amber-50/70 rounded-2xl border border-amber-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E87332] text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#2B1B14]">
                Have a unique cafe or wedding request?
              </p>
              <p className="text-xs text-[#685A4E]">
                Our culinary team responds directly via WhatsApp or Instagram Direct Message @cup2eat.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/cup2eat?xtok=aXptcjEwMmplemVl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-[#2B1B14] hover:bg-[#4A2810] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shrink-0"
          >
            <span>Message @cup2eat</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
