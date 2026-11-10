import React from 'react';
import { X, ShieldCheck, CheckCircle2, Leaf, HeartPulse } from 'lucide-react';
import { NUTRITION_INFO } from '../data/cupData';

interface NutritionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NutritionModal: React.FC<NutritionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] w-full max-w-lg rounded-3xl shadow-2xl border border-[#E8DFC8] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 bg-white border-b border-[#E8DFC8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-[#2B1B14]">
                Nutrition & Ingredient Facts
              </h3>
              <p className="text-xs text-stone-500">
                100% Clean Label • FSSAI Approved
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          
          {/* Ingredient Highlights */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase text-[#2B1B14] tracking-wider mb-2">
              Clean Food Philosophy:
            </h4>
            {NUTRITION_INFO.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#5E5146]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Classic Nutrition Table */}
          <div className="bg-white p-5 rounded-2xl border-2 border-stone-800 text-[#2B1B14] font-sans">
            <div className="border-b-4 border-stone-800 pb-2">
              <h4 className="font-heading font-black text-2xl tracking-tight leading-none">
                Nutrition Facts
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                Serving Size: {NUTRITION_INFO.servingSize}
              </p>
            </div>

            <div className="py-2 border-b-2 border-stone-800 flex justify-between items-baseline font-bold">
              <span>Calories per cup</span>
              <span className="text-xl font-mono">{NUTRITION_INFO.calories}</span>
            </div>

            <div className="divide-y divide-stone-200 text-xs">
              <div className="py-1.5 flex justify-between font-semibold">
                <span>Total Fat:</span>
                <span>{NUTRITION_INFO.totalFat}</span>
              </div>
              <div className="py-1 pl-4 flex justify-between text-stone-600">
                <span>Saturated Fat:</span>
                <span>{NUTRITION_INFO.saturatedFat}</span>
              </div>
              <div className="py-1 pl-4 flex justify-between text-stone-600">
                <span>Trans Fat:</span>
                <span>{NUTRITION_INFO.transFat}</span>
              </div>
              <div className="py-1.5 flex justify-between font-semibold">
                <span>Cholesterol:</span>
                <span>{NUTRITION_INFO.cholesterol}</span>
              </div>
              <div className="py-1.5 flex justify-between font-semibold">
                <span>Sodium:</span>
                <span>{NUTRITION_INFO.sodium}</span>
              </div>
              <div className="py-1.5 flex justify-between font-semibold">
                <span>Total Carbohydrates:</span>
                <span>{NUTRITION_INFO.totalCarbohydrates}</span>
              </div>
              <div className="py-1 pl-4 flex justify-between text-stone-600">
                <span>Dietary Fiber:</span>
                <span>{NUTRITION_INFO.dietaryFiber}</span>
              </div>
              <div className="py-1 pl-4 flex justify-between text-stone-600">
                <span>Sugars:</span>
                <span>{NUTRITION_INFO.sugars}</span>
              </div>
              <div className="py-1.5 flex justify-between font-semibold">
                <span>Protein:</span>
                <span>{NUTRITION_INFO.protein}</span>
              </div>
            </div>
          </div>

          {/* Allergen & Storage Advisory */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 space-y-2 text-xs text-[#684B28]">
            <p className="font-bold flex items-center gap-1.5 text-[#2B1B14]">
              <HeartPulse className="w-4 h-4 text-[#E87332]" />
              <span>Allergen Notice:</span>
            </p>
            <p>
              Contains <strong>Wheat & Gluten</strong>. Prepared in a certified vegetarian, nut-free, dairy-free facility. Zero animal gelatin or animal fats.
            </p>
            <p className="pt-1 text-[11px] text-stone-600">
              <strong>Storage:</strong> Store in original sealed foil at room temperature away from direct moisture. Shelf life is 9 to 12 months.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 bg-[#2B1B14] hover:bg-[#4A2810] text-white font-bold rounded-xl text-xs transition cursor-pointer"
          >
            Got It, Close Nutrition
          </button>
        </div>

      </div>
    </div>
  );
};
