import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/cupData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Love & Cafe Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2B1B14] font-heading tracking-tight">
            Loved By Baristas, Foodies & Caterers
          </h2>
          <p className="text-[#685A4E] text-base mt-2">
            Over 2,400 cafes, wedding hosts, and eco-conscious coffee lovers have made the switch to edible biscuit cups.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 border border-[#E8DFC8] shadow-md flex flex-col justify-between relative group hover:shadow-xl transition-all"
            >
              <Quote className="w-10 h-10 text-amber-200/60 absolute top-6 right-6 pointer-events-none group-hover:text-amber-300 transition-colors" />

              <div className="space-y-4">
                {/* Star Rating & Highlight Tag */}
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="inline-block bg-[#E87332]/10 text-[#E87332] text-xs font-bold px-2.5 py-0.5 rounded-full">
                    "{rev.highlight}"
                  </span>
                </div>

                <p className="text-[#5E5146] text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-stone-100">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-200"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-heading font-black text-sm text-[#2B1B14]">
                      {rev.name}
                    </h4>
                    {rev.verifiedCafe && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-stone-500 font-medium">
                    {rev.role}
                  </p>
                  <p className="text-[11px] text-[#E87332] font-semibold">
                    📍 {rev.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global / National Stat Banner */}
        <div className="mt-14 p-6 bg-white rounded-2xl border border-[#E8DFC8] flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <p className="text-3xl font-black font-mono text-[#E87332]">4.96 / 5</p>
            <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mt-0.5">Average Taste & Crispiness Rating</p>
          </div>
          <div className="h-10 w-px bg-stone-200 hidden sm:block" />
          <div>
            <p className="text-3xl font-black font-mono text-[#2B1B14]">250,000+</p>
            <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mt-0.5">Edible Cups Served To Date</p>
          </div>
          <div className="h-10 w-px bg-stone-200 hidden sm:block" />
          <div>
            <p className="text-3xl font-black font-mono text-emerald-700">100%</p>
            <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mt-0.5">Zero Single-Use Plastic Guilt</p>
          </div>
        </div>

      </div>
    </section>
  );
};
