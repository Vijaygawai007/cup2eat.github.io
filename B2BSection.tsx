import React, { useState } from 'react';
import { Coffee, Stamp, Truck, ShieldCheck, Check, Send, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface B2BSectionProps {
  onOpenSampleModal: () => void;
}

export const B2BSection: React.FC<B2BSectionProps> = ({ onOpenSampleModal }) => {
  const [businessType, setBusinessType] = useState('cafe');
  const [monthlyVolume, setMonthlyVolume] = useState('2500');
  const [customLogo, setCustomLogo] = useState(true);
  const [cafeName, setCafeName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getEstimatedRate = () => {
    const vol = Number(monthlyVolume);
    let base = 22;
    if (vol >= 5000) base = 19;
    if (vol >= 10000) base = 17;
    if (vol >= 20000) base = 15;
    return base;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cafeName || !phone) return;

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="b2b-cafes" className="py-20 bg-gradient-to-b from-[#F5EBE1] via-[#FAF7F2] to-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#E87332]/10 text-[#E87332] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Coffee className="w-4 h-4" />
            <span>Commercial & B2B Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1B14] font-heading tracking-tight">
            Put Cup2Eat in Your Cafe or Event
          </h2>
          <p className="text-[#685A4E] text-base mt-2">
            Turn every customer beverage into an unforgettable brand experience. Delight your guests, eliminate waste disposal bills, and boost your social media word-of-mouth.
          </p>
        </div>

        {/* 3 Pillars for Cafes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 bg-white rounded-3xl border border-[#E8DFC8] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-[#E87332] mb-4">
              <Stamp className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#2B1B14] mb-2">
              Free Custom Logo Embossing
            </h3>
            <p className="text-xs text-[#685A4E] leading-relaxed">
              We laser-emboss your cafe crest, couple’s wedding monogram, or corporate badge directly into the baked wafer with food-safe precision.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E8DFC8] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#2B1B14] mb-2">
              Pan-India Express Logistics
            </h3>
            <p className="text-xs text-[#685A4E] leading-relaxed">
              Cushioned double-corrugated commercial crates with nitrogen-flushed foil packs. Guaranteed zero transit breakage with immediate replacement warranty.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#E8DFC8] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#2B1B14] mb-2">
              Display Kit & Barista Training
            </h3>
            <p className="text-xs text-[#685A4E] leading-relaxed">
              Every first wholesale partner receives free acrylic counter display caddies, table tent marketing cards, and barista serving tips.
            </p>
          </div>
        </div>

        {/* Interactive B2B Wholesale Estimator & Inquiry Box */}
        <div className="bg-[#2B1B14] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Wholesale Estimator */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#E87332] uppercase tracking-wider">
                  Live Tiered Pricing
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading mt-1">
                  Wholesale Rate Estimator
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  Adjust expected monthly volume to see your bulk wholesale pricing.
                </p>
              </div>

              {/* Volume selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase text-stone-300 tracking-wider">
                  Estimated Monthly Volume:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '1000', label: '1,000 / mo' },
                    { id: '2500', label: '2,500 / mo' },
                    { id: '5000', label: '5,000 / mo' },
                    { id: '10000', label: '10,000 / mo' },
                    { id: '20000', label: '20,000+ / mo' }
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setMonthlyVolume(v.id)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                        monthlyVolume === v.id
                          ? 'bg-[#E87332] text-white border-[#E87332]'
                          : 'bg-white/5 text-stone-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Price Card */}
              <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-stone-300 font-medium">Estimated Wholesale Price:</span>
                  <span className="text-3xl font-black text-amber-300 font-mono">
                    ₹{getEstimatedRate()} <span className="text-xs font-normal text-stone-300">/ cup</span>
                  </span>
                </div>
                <div className="text-[11px] text-stone-300 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Includes custom logo embossing & food-grade counter display stand</span>
                </div>
                <div className="text-[11px] text-stone-300 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>FSSAI certified, 9-month shelf stability</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenSampleModal}
                  className="w-full py-3 bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 border border-amber-400/30 rounded-xl font-bold text-xs transition cursor-pointer"
                >
                  Want to test first? Request Free 6-Cup Sample Kit →
                </button>
              </div>
            </div>

            {/* Right: Instant Inquiry Form */}
            <div className="lg:col-span-7 bg-white text-[#2B1B14] p-6 sm:p-8 rounded-2xl shadow-lg">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-black text-2xl text-[#2B1B14]">
                    Wholesale Inquiry Received!
                  </h4>
                  <p className="text-sm text-[#5E5146] max-w-md mx-auto">
                    Thank you, <strong>{contactName || cafeName}</strong>. Our B2B partnership director will WhatsApp you the complete wholesale catalog and dispatch your complimentary tasting box to <strong>{city || 'your address'}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-4 text-xs font-bold text-[#E87332] underline cursor-pointer"
                  >
                    Submit another location or inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="font-heading font-black text-xl text-[#2B1B14]">
                      Get Custom Wholesale Quote & Tasting Box
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      We reply within 2 business hours via WhatsApp & Email.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-stone-600 mb-1">
                        Cafe / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Blue Tokai / Third Wave"
                        value={cafeName}
                        onChange={(e) => setCafeName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-[#E87332] focus:ring-1 focus:ring-[#E87332] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-stone-600 mb-1">
                        Contact Person Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-[#E87332] focus:ring-1 focus:ring-[#E87332] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-stone-600 mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-[#E87332] focus:ring-1 focus:ring-[#E87332] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-stone-600 mb-1">
                        City & State
                      </label>
                      <input
                        type="text"
                        placeholder="Mumbai, Delhi, Bangalore, etc."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-[#E87332] focus:ring-1 focus:ring-[#E87332] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-stone-600 mb-1">
                      Business Category
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-[#E87332] outline-none bg-stone-50"
                    >
                      <option value="cafe">Specialty Cafe / Coffee Shop</option>
                      <option value="chai">Traditional Chai Bar / Tea Lounge</option>
                      <option value="wedding">Wedding / Event Planner / Catering</option>
                      <option value="corporate">Corporate Office / Sustainability Dept</option>
                      <option value="hotel">Boutique Hotel / Resort</option>
                      <option value="retail">Retail Distributor / Gift Shop</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="customLogoCheck"
                      checked={customLogo}
                      onChange={(e) => setCustomLogo(e.target.checked)}
                      className="w-4 h-4 rounded text-[#E87332] focus:ring-[#E87332] accent-[#E87332]"
                    />
                    <label htmlFor="customLogoCheck" className="text-xs text-stone-600 font-medium">
                      Include custom laser branding simulation for our cafe logo
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#E87332] hover:bg-[#D35400] text-white font-extrabold rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Wholesale Proposal & Tasting Kit</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
