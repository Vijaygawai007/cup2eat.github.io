import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Flame, Leaf, Volume2, Instagram, Award } from 'lucide-react';
import { playCrunchSound } from '../utils/audio';

interface HeroProps {
  onExploreFlavors: () => void;
  onOpenSampleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFlavors, onOpenSampleModal }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [biteCount, setBiteCount] = useState(0);

  const instagramUrl = "https://www.instagram.com/cup2eat?xtok=aXptcjEwMmplemVl";

  const handleVirtualBite = () => {
    playCrunchSound();
    setBiteCount((prev) => prev + 1);
  };

  const hotspots = [
    {
      id: 1,
      x: '52%',
      y: '34%',
      label: 'Chocolate / Flavour Glaze',
      desc: 'Inner micro-thin barrier seals liquids while infusing velvety cocoa into your drink.'
    },
    {
      id: 2,
      x: '48%',
      y: '60%',
      label: 'Double-Baked Multi-Grain Crust',
      desc: 'Wholesome oats and golden wheat flour baked for structural strength and crisp bite.'
    },
    {
      id: 3,
      x: '50%',
      y: '80%',
      label: 'Zero-Leak Thermal Base',
      desc: 'Engineered base withstands boiling 95°C hot tea or coffee for 45+ minutes without sweating.'
    }
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#F6EFE6] to-[#FAF7F2]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#E87332]/10 via-[#F3843E]/10 to-amber-200/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2B1B14] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E87332] animate-ping" />
              <span>As Seen on Instagram Reels</span>
              <span className="text-amber-300 font-bold">@cup2eat</span>
              <Award className="w-3.5 h-3.5 text-amber-400 ml-1" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2B1B14] tracking-tight leading-[1.08] font-heading">
              Don’t Just Sip Your Drink.{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#E87332] via-[#D35400] to-[#8E3200]">
                Crunch It.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#E87332]/40"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,7 Q50,0 100,7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#5E5146] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Say goodbye to soggy paper cups and toxic plastic linings. <strong className="text-[#2B1B14] font-semibold">Cup2Eat</strong> is India’s viral 100% edible, vegan biscuit cup crafted to hold boiling hot coffee and tea for <span className="underline decoration-[#E87332] decoration-2 font-semibold text-[#2B1B14]">45+ minutes leak-free</span> — then become your favorite snack.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreFlavors}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E87332] hover:bg-[#D35400] text-white px-7 py-4 rounded-2xl font-bold text-base shadow-xl shadow-[#E87332]/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
              >
                <span>Order Your Crunch Box</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-[#2B1B14] border-2 border-[#E8DFC8] px-6 py-4 rounded-2xl font-bold text-base shadow-sm hover:border-[#2B1B14] transition cursor-pointer"
              >
                <span>For Cafes & Events</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full">B2B Samples</span>
              </button>

              <button
                onClick={handleVirtualBite}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2B1B14]/5 hover:bg-[#2B1B14]/10 text-[#4A3E36] px-4 py-4 rounded-2xl font-semibold text-sm transition cursor-pointer group"
                title="Hear the cookie crunch sound"
              >
                <Volume2 className="w-4 h-4 text-[#E87332] group-hover:scale-125 transition-transform" />
                <span>Hear the Crunch! {biteCount > 0 ? `(${biteCount})` : ''}</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 bg-white/80 rounded-2xl border border-[#E8DFC8]/60 shadow-xs">
                <div className="flex items-center gap-2 text-[#E87332] mb-1">
                  <Flame className="w-4 h-4" />
                  <span className="font-extrabold text-sm text-[#2B1B14]">45+ Mins</span>
                </div>
                <p className="text-xs text-[#786C60] font-medium">Holds boiling hot coffee</p>
              </div>

              <div className="p-3 bg-white/80 rounded-2xl border border-[#E8DFC8]/60 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-600 mb-1">
                  <Leaf className="w-4 h-4" />
                  <span className="font-extrabold text-sm text-[#2B1B14]">100% Vegan</span>
                </div>
                <p className="text-xs text-[#786C60] font-medium">Wholesome oats & grains</p>
              </div>

              <div className="p-3 bg-white/80 rounded-2xl border border-[#E8DFC8]/60 shadow-xs">
                <div className="flex items-center gap-2 text-amber-600 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-extrabold text-sm text-[#2B1B14]">0% Waste</span>
                </div>
                <p className="text-xs text-[#786C60] font-medium">No plastic, wax or paper</p>
              </div>

              <div className="p-3 bg-white/80 rounded-2xl border border-[#E8DFC8]/60 shadow-xs">
                <div className="flex items-center gap-2 text-purple-600 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-extrabold text-sm text-[#2B1B14]">9 Mo Shelf</span>
                </div>
                <p className="text-xs text-[#786C60] font-medium">Ambient room storage</p>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Interactive Cup Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#4A2810]/20 border-4 border-white bg-white group">
                <img
                  src="/src/assets/images/cup2eat_hero_cup_1794317046023.jpg"
                  alt="Cup2Eat Edible Coffee Cup with Chocolate Rim and Latte Art"
                  className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay for Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Interactive Hotspots */}
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => {
                      playCrunchSound();
                      setActiveHotspot(activeHotspot === h.id ? null : h.id);
                    }}
                    style={{ left: h.x, top: h.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#E87332] text-white flex items-center justify-center font-black text-xs shadow-lg shadow-black/40 border-2 border-white cursor-pointer hover:scale-125 transition-transform active:scale-95 animate-pulse"
                    aria-label={`Inspect ${h.label}`}
                  >
                    <span>{h.id}</span>
                  </button>
                ))}

                {/* Hotspot Card Details Box if selected */}
                {activeHotspot !== null && (
                  <div className="absolute bottom-16 inset-x-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-amber-200 text-left animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between pb-1">
                      <span className="text-xs font-bold text-[#E87332] uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Layer #{activeHotspot}
                      </span>
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="text-stone-400 hover:text-stone-700 text-xs font-bold"
                      >
                        ✕
                      </button>
                    </div>
                    <h4 className="font-heading font-extrabold text-sm text-[#2B1B14]">
                      {hotspots.find((h) => h.id === activeHotspot)?.label}
                    </h4>
                    <p className="text-xs text-[#5E5146] mt-0.5 leading-relaxed">
                      {hotspots.find((h) => h.id === activeHotspot)?.desc}
                    </p>
                  </div>
                )}

                {/* Bottom Card Ribbon */}
                <div className="absolute bottom-3 inset-x-3 bg-black/40 backdrop-blur-md rounded-xl p-2.5 flex items-center justify-between text-white border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <p className="text-xs font-bold">100% Edible Biscuit Cup</p>
                      <p className="text-[10px] text-amber-200">Tap numbered dots to inspect anatomy</p>
                    </div>
                  </div>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#E87332] hover:bg-[#D35400] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition"
                  >
                    <Instagram className="w-3 h-3" />
                    <span>Watch Reel</span>
                  </a>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-[#E8DFC8] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-black text-sm">
                  ☕
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    {'★'.repeat(5)}
                    <span className="text-stone-400 text-[10px] ml-0.5">(4.9/5)</span>
                  </div>
                  <p className="text-xs font-bold text-[#2B1B14]">"Tastes like heavenly cookie!"</p>
                  <p className="text-[10px] text-stone-500">2,400+ Verified Cafes & Foodies</p>
                </div>
              </div>

              {/* Floating Instagram Card Badge */}
              <div className="absolute -bottom-5 -right-4 bg-gradient-to-r from-amber-600 to-[#E87332] text-white p-3 rounded-2xl shadow-xl flex items-center gap-2.5">
                <div className="p-1.5 bg-white/20 rounded-lg">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-black tracking-tight">Viral on Instagram</p>
                  <p className="text-[10px] text-amber-100">Over 5M+ Total Video Views</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
