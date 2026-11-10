import React, { useState } from 'react';
import { Coffee, Cookie, Sparkles, Shield, HeartHandshake, Utensils } from 'lucide-react';
import { playCrunchSound } from '../utils/audio';

interface AnatomySectionProps {
  onOpenNutritionModal: () => void;
}

export const AnatomySection: React.FC<AnatomySectionProps> = ({ onOpenNutritionModal }) => {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const layers = [
    {
      title: '1. Plant-Based Thermal Seal',
      subtitle: 'Waterproof & Heat Resistant up to 95°C',
      desc: 'Our breakthrough 100% natural moisture barrier is derived from vegetable plant extracts and non-GMO grain fibers. It completely prevents liquids from soaking into the biscuit wall for 45+ minutes, without using petroleum wax, plastic, or chemicals.',
      icon: Shield,
      highlight: '0% Wax • 0% Plastic • 100% Vegan'
    },
    {
      title: '2. Stoneground Multi-Grain Crust',
      subtitle: 'Toasted Rolled Oats, Whole Wheat & Chia Fiber',
      desc: 'Double-oven baked at precision temperatures to achieve the signature structural crunch. Rich in dietary fiber, lightly sweetened with raw demerara sugar, and sturdy enough to handle daily cafe transport.',
      icon: Cookie,
      highlight: '3.2g Natural Fiber • High Protein • Non-GMO'
    },
    {
      title: '3. Gourmet Flavor Infusion',
      subtitle: 'Belgian Dark Cocoa, Royal Elaichi or Vanilla',
      desc: 'The interior glaze can be infused with 60% Belgian cocoa, freshly ground Indian green cardamom pods, or Madagascar vanilla bean. It subtly enriches every sip as you drink.',
      icon: Sparkles,
      highlight: 'Real Cocoa & Cardamom • Natural Flavors'
    },
    {
      title: '4. Thermal Comfort Outer Grip',
      subtitle: 'No Need For Cardboard Sleeves',
      desc: 'The textured wafer exterior has micro-air pockets that act as a natural heat insulator. You can hold steaming 90°C coffee comfortably without scalding your hands or needing single-use paper sleeves.',
      icon: Utensils,
      highlight: 'Cool-Touch Exterior • Easy Grip'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E87332] text-xs font-bold tracking-widest uppercase bg-[#E87332]/10 px-3 py-1 rounded-full">
            Engineering Nature
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1B14] font-heading mt-3 tracking-tight">
            Anatomy of an Edible Cup
          </h2>
          <p className="text-[#685A4E] text-base sm:text-lg mt-3">
            Every Cup2Eat is a masterclass in eco-food engineering: strong enough to hold boiling coffee, delicious enough to eat as dessert.
          </p>
        </div>

        {/* 3-Step Simple Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl border border-[#E8DFC8] shadow-sm relative group hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-[#E87332] mb-4 group-hover:scale-110 transition-transform">
              <Coffee className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#E87332] uppercase">Step 01</span>
            <h3 className="font-heading font-extrabold text-xl text-[#2B1B14] mt-1 mb-2">
              Pour Any Drink
            </h3>
            <p className="text-xs text-[#685A4E] leading-relaxed">
              Pour hot espresso, masala chai, flat whites, hot cocoa, or cold milkshakes. Temperature safe from ice-cold up to 95°C.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8DFC8] shadow-sm relative group hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase">Step 02</span>
            <h3 className="font-heading font-extrabold text-xl text-[#2B1B14] mt-1 mb-2">
              Sip For 45+ Mins
            </h3>
            <p className="text-xs text-[#685A4E] leading-relaxed">
              Take your time. The cup stays firm, leak-proof, and odor-neutral throughout your beverage break. No soggy cardboard taste!
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8DFC8] shadow-sm relative group hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-[#E87332]/10 flex items-center justify-center text-[#E87332] mb-4 group-hover:scale-110 transition-transform">
              <Cookie className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#E87332] uppercase">Step 03</span>
            <h3 className="font-heading font-extrabold text-xl text-[#2B1B14] mt-1 mb-2">
              Crunch & Eat!
            </h3>
            <p className="text-xs text-[#685A4E] leading-relaxed">
              Finish your last sip, then snap into the crisp cookie rim. It’s an oven-baked sweet treat! 100% zero trash created.
            </p>
          </div>
        </div>

        {/* Interactive Layer Breakdown */}
        <div className="bg-gradient-to-br from-[#2B1B14] to-[#1E120D] text-white rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Layer Selector Tabs */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Proprietary 4-Layer Technology</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                Engineered for Perfect Crunch
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mb-4 leading-relaxed">
                Click any layer to explore the scientific formulation that makes Cup2Eat leak-proof yet completely digestible.
              </p>

              <div className="space-y-2 pt-2">
                {layers.map((layer, idx) => {
                  const isSelected = selectedLayer === idx;
                  const Icon = layer.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        playCrunchSound();
                        setSelectedLayer(idx);
                      }}
                      className={`w-full text-left p-3.5 rounded-2xl transition cursor-pointer flex items-center gap-3 border ${
                        isSelected
                          ? 'bg-[#E87332] text-white border-[#E87332] shadow-lg'
                          : 'bg-white/5 hover:bg-white/10 text-stone-200 border-white/10'
                      }`}
                    >
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-amber-300'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-extrabold text-xs sm:text-sm">{layer.title}</p>
                        <p className={`text-[11px] truncate ${isSelected ? 'text-amber-100' : 'text-stone-400'}`}>
                          {layer.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Layer Deep Dive Card */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30">
                  {layers[selectedLayer].highlight}
                </span>
                <button
                  onClick={onOpenNutritionModal}
                  className="text-xs text-amber-200 hover:text-white underline font-semibold cursor-pointer"
                >
                  View Full Ingredients & Nutrition →
                </button>
              </div>

              <div>
                <h4 className="text-2xl font-black font-heading text-white">
                  {layers[selectedLayer].title}
                </h4>
                <p className="text-amber-200/90 text-sm font-semibold mt-1">
                  {layers[selectedLayer].subtitle}
                </p>
                <p className="text-stone-200 text-sm mt-3 leading-relaxed">
                  {layers[selectedLayer].desc}
                </p>
              </div>

              {/* Photo Showcase Comparison */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="bg-black/30 p-3.5 rounded-xl border border-white/5">
                  <p className="text-[11px] text-red-300 font-bold uppercase">Traditional Paper Cup</p>
                  <p className="text-xs text-stone-300 mt-1">
                    Lined with polyethylene micro-plastics. Takes 30+ years to degrade in landfills.
                  </p>
                </div>
                <div className="bg-[#E87332]/20 p-3.5 rounded-xl border border-[#E87332]/40">
                  <p className="text-[11px] text-amber-300 font-bold uppercase">Cup2Eat Edible Cup</p>
                  <p className="text-xs text-stone-200 mt-1">
                    100% eaten as food or decomposes in compost within 10 days. Zero plastic residue.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
