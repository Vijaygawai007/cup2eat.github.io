import React, { useState } from 'react';
import { Leaf, Trash2, Droplets, Wind, Trees, Sparkles, ArrowRight } from 'lucide-react';

interface EcoCalculatorProps {
  onOrderNow: () => void;
}

export const EcoCalculator: React.FC<EcoCalculatorProps> = ({ onOrderNow }) => {
  const [dailyCups, setDailyCups] = useState<number>(45);

  // Calculations per year
  const yearlyCups = dailyCups * 365;
  // An average 8oz paper cup has ~5g of polyethylene plastic coating + 12g bleached paper = 17g total waste
  const plasticSavedKg = Math.round((yearlyCups * 0.005));
  const totalWasteSavedKg = Math.round((yearlyCups * 0.017));
  // Producing 1 paper cup consumes approx 2.5 liters of water
  const waterSavedLiters = Math.round(yearlyCups * 2.5);
  // Carbon footprint: ~0.11 kg CO2 per paper cup lifecycle
  const co2PreventedKg = Math.round(yearlyCups * 0.11);
  const treesEquivalent = (co2PreventedKg / 22).toFixed(1); // 1 mature tree absorbs ~22kg CO2/year

  return (
    <section id="eco-calculator" className="py-20 bg-[#FAF7F2] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>Planetary Return On Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1B14] font-heading tracking-tight">
            Calculate Your Eco-Impact
          </h2>
          <p className="text-[#685A4E] text-base mt-2">
            Every Cup2Eat consumed is one less piece of petroleum-lined plastic choking our oceans and landfills. See what happens when you make the switch.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E8DFC8]">
          {/* Slider Input */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
              <div>
                <label className="text-base font-extrabold text-[#2B1B14] font-heading">
                  How many cups of tea or coffee do you serve per day?
                </label>
                <p className="text-xs text-stone-500">
                  Slide to match your household, office, or cafe volume
                </p>
              </div>

              <div className="flex items-center gap-2 bg-[#2B1B14] text-white px-4 py-2 rounded-2xl">
                <span className="text-2xl font-black font-mono text-[#E87332]">
                  {dailyCups}
                </span>
                <span className="text-xs text-stone-300 font-semibold uppercase">
                  Cups / Day
                </span>
              </div>
            </div>

            <input
              type="range"
              min="5"
              max="500"
              step="5"
              value={dailyCups}
              onChange={(e) => setDailyCups(Number(e.target.value))}
              className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#E87332]"
            />

            <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-2">
              <span>Home / Studio (5 cups)</span>
              <span>Boutique Cafe (50 cups)</span>
              <span>Busy Coffee Shop (150 cups)</span>
              <span>Chain / Hotel (500 cups)</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#E87332] mx-auto mb-2">
                <Trash2 className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-black font-mono text-[#2B1B14]">
                {yearlyCups.toLocaleString()}
              </p>
              <p className="text-xs font-bold text-[#E87332] uppercase tracking-wider mt-1">
                Cups Diverted
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">from landfills / year</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-2">
                <Leaf className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-black font-mono text-emerald-800">
                {totalWasteSavedKg.toLocaleString()} kg
              </p>
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mt-1">
                Waste Prevented
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">including {plasticSavedKg}kg pure plastic</p>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mx-auto mb-2">
                <Droplets className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-black font-mono text-sky-800">
                {waterSavedLiters.toLocaleString()} L
              </p>
              <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mt-1">
                Water Preserved
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">paper pulp manufacturing</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mx-auto mb-2">
                <Trees className="w-5 h-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-black font-mono text-purple-900">
                {treesEquivalent}
              </p>
              <p className="text-xs font-bold text-purple-700 uppercase tracking-wider mt-1">
                Trees Equivalent
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">{co2PreventedKg} kg CO2 absorbed</p>
            </div>
          </div>

          {/* Social Ripple Bonus Callout */}
          <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E87332] text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#2B1B14]">
                  Social Media Multiplier: ~{(dailyCups * 0.35).toFixed(0)} Customer Instagram Stories / Day
                </p>
                <p className="text-xs text-[#685A4E]">
                  Customers love filming the crunch. Edible cups generate 4x more user-generated content than regular branded cups.
                </p>
              </div>
            </div>

            <button
              onClick={onOrderNow}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2B1B14] hover:bg-[#4A2810] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition cursor-pointer shrink-0"
            >
              <span>Get Your Supply</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
