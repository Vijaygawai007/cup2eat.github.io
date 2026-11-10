import React, { useState } from 'react';
import { Clock, Thermometer, ShieldCheck, Sparkles, Volume2, CheckCircle2 } from 'lucide-react';
import { playCrunchSound } from '../utils/audio';
import confetti from 'canvas-confetti';

export const CrunchTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [bitten, setBitten] = useState(false);

  const stages = [
    {
      minute: 0,
      title: 'Boiling Hot Pour (95°C)',
      status: 'Freshly Poured',
      liquidLevel: '100%',
      temp: '95°C / 203°F',
      crispiness: '100% Solid & Rigid',
      description:
        'Fresh steaming espresso, cappuccino, or kadak chai is poured into your Cup2Eat biscuit cup. The natural thermal barrier immediately repels moisture while keeping your fingers cool.',
      tag: 'Thermal Lock Active',
      tagColor: 'bg-red-100 text-red-800'
    },
    {
      minute: 15,
      title: 'Steaming Sips (75°C)',
      status: 'Halfway Enjoyed',
      liquidLevel: '60%',
      temp: '75°C / 167°F',
      crispiness: '100% Crisp & Dry',
      description:
        '15 minutes into your meeting or morning stroll. The interior chocolate/oat glaze gently enriches the beverage aroma. The exterior biscuit wall remains completely dry, sturdy, and crumb-free.',
      tag: 'Zero Sogginess',
      tagColor: 'bg-amber-100 text-amber-800'
    },
    {
      minute: 30,
      title: 'Last Savory Drops (55°C)',
      status: 'Last Sips Finished',
      liquidLevel: '20%',
      temp: '55°C / 131°F',
      crispiness: '98% Crisp Crunch',
      description:
        '30 minutes in. Regular paper cups would be soggy, sweaty, and leeching micro-plastics. Cup2Eat maintains its structural integrity and pleasant baked biscuit aroma.',
      tag: 'Leak-Proof Certified',
      tagColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      minute: 45,
      title: 'Crunch Time! (Eat The Cup)',
      status: 'Drink Done — Snack Ready',
      liquidLevel: '0%',
      temp: 'Room Temperature',
      crispiness: '100% Golden Crunchy Bite',
      description:
        'You finish your drink. Now comes the best part: snap into the golden biscuit rim and eat your cup! Rich chocolate or warm cardamom notes pair like a freshly baked cookie treat. Zero trash bin required.',
      tag: 'Zero Waste Snack',
      tagColor: 'bg-purple-100 text-purple-800'
    }
  ];

  const current = stages[activeStage];

  const handleCrunchBite = (e: React.MouseEvent) => {
    playCrunchSound();
    setBitten(true);

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 35,
      spread: 60,
      origin: { x, y },
      colors: ['#E87332', '#4A2810', '#E5A93C', '#8D5B4C']
    });

    setTimeout(() => setBitten(false), 2000);
  };

  return (
    <section id="crunch-test" className="py-18 bg-[#F4EFEA] border-y border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Proven In Lab & Cafes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2B1B14] font-heading tracking-tight">
            The 45-Minute Crunch Test
          </h2>
          <p className="text-[#685A4E] text-base mt-2">
            "Will it dissolve in hot coffee?" Never. Click the timeline stages below to see how Cup2Eat performs from first pour to your final delicious bite.
          </p>
        </div>

        {/* Timeline Slider Buttons */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/70 p-2 rounded-2xl border border-[#E8DFC8] shadow-sm">
            {stages.map((st, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={st.minute}
                  onClick={() => {
                    playCrunchSound();
                    setActiveStage(idx);
                  }}
                  className={`py-3 px-4 rounded-xl text-left transition cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-[#2B1B14] text-white shadow-md'
                      : 'hover:bg-amber-50 text-[#5E5146]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#E87332]' : 'text-stone-400'}`}>
                      {st.minute === 0 ? 'START' : `${st.minute} MINS`}
                    </span>
                    <Clock className={`w-3.5 h-3.5 ${isActive ? 'text-[#E87332]' : 'text-stone-400'}`} />
                  </div>
                  <p className={`font-bold text-xs truncate ${isActive ? 'text-white' : 'text-[#2B1B14]'}`}>
                    {st.status}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Stage Visualizer Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#E8DFC8]/80">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Cup Graphic Representation */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8]/60 relative overflow-hidden">
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-4 ${current.tagColor}`}>
                {current.tag}
              </span>

              {/* Simulated Cup Visual */}
              <div className="relative w-40 h-48 flex items-center justify-center">
                {/* Steam if hot */}
                {activeStage < 2 && (
                  <div className="absolute -top-6 flex gap-2 animate-steam">
                    <div className="w-1.5 h-8 bg-stone-300/60 rounded-full blur-[1px]" />
                    <div className="w-1.5 h-10 bg-stone-300/60 rounded-full blur-[1px]" />
                    <div className="w-1.5 h-7 bg-stone-300/60 rounded-full blur-[1px]" />
                  </div>
                )}

                {/* Cup Outer Biscuit Body */}
                <div className={`relative w-36 h-44 rounded-b-[2.5rem] rounded-t-lg bg-gradient-to-b from-[#C4935A] via-[#B27B42] to-[#8D582A] p-2.5 shadow-lg border-2 border-[#7C481E] flex flex-col justify-end transition-all duration-500 ${
                  bitten ? 'scale-95 rotate-1' : ''
                }`}>
                  {/* Biscuit Cookie Texture Flecks */}
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#4a2810_1px,transparent_1px)] [background-size:6px_6px] pointer-events-none rounded-b-[2.5rem]" />

                  {/* Top Chocolate Rim */}
                  <div className="absolute top-0 inset-x-0 h-4 bg-[#3E1E0F] rounded-t-lg border-b border-[#2A1208] flex items-center justify-center">
                    <span className="text-[9px] text-amber-200 font-bold uppercase tracking-wider">
                      Dark Chocolate Glaze
                    </span>
                  </div>

                  {/* Liquid Fill Level */}
                  <div
                    className="w-full bg-gradient-to-t from-[#351C10] via-[#522E1A] to-[#6C3E24] rounded-b-[2.2rem] transition-all duration-700 relative overflow-hidden flex items-center justify-center"
                    style={{ height: current.liquidLevel }}
                  >
                    {activeStage < 3 && (
                      <span className="text-[10px] font-mono text-amber-200/90 font-bold">
                        {current.liquidLevel}
                      </span>
                    )}
                  </div>

                  {/* Bite Mark if bitten or stage 3 */}
                  {(bitten || activeStage === 3) && (
                    <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-[#FAF7F2] border-2 border-dashed border-[#8D582A] flex items-center justify-center animate-pulse">
                      <span className="text-[10px] font-black text-[#E87332]">CRUNCH!</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Virtual Bite Button */}
              <button
                onClick={handleCrunchBite}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[#E87332] hover:bg-[#D35400] text-white py-2.5 px-4 rounded-xl text-xs font-bold shadow-md hover:scale-[1.02] active:scale-95 transition cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>Take a Bite! (Hear The Crunch)</span>
              </button>
            </div>

            {/* Stage Description & Stats */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#E87332] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Stage {activeStage + 1} of 4 ({current.minute} Minutes)
                </div>
                <h3 className="text-2xl font-black text-[#2B1B14] font-heading">
                  {current.title}
                </h3>
                <p className="text-[#5E5146] text-sm mt-2 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <Thermometer className="w-3.5 h-3.5 text-red-500" />
                    <span>Beverage Temp</span>
                  </div>
                  <p className="font-extrabold text-sm text-[#2B1B14]">{current.temp}</p>
                </div>

                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Biscuit Texture</span>
                  </div>
                  <p className="font-extrabold text-sm text-emerald-700">{current.crispiness}</p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4A3E36]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No plastic or wax taste leaching into beverage</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4A3E36]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Doesn't burn fingers; acts as natural heat insulator</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4A3E36]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero waste produced — pure edible pleasure</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
