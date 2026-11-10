import React, { useState } from 'react';
import { X, Coffee, Check, Send, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playChimeSound } from '../utils/audio';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleModal: React.FC<SampleModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [cafeName, setCafeName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [sampleFlavor, setSampleFlavor] = useState('assorted');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playChimeSound();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] w-full max-w-lg rounded-3xl shadow-2xl border border-[#E8DFC8] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 bg-white border-b border-[#E8DFC8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#E87332] text-white flex items-center justify-center">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-[#2B1B14]">
                Free Cafe Tasting Kit
              </h3>
              <p className="text-xs text-stone-500">
                Experience the 45-min crunch test at your own bar
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-black text-2xl text-[#2B1B14]">
              Sample Box Dispatched!
            </h4>
            <p className="text-sm text-[#5E5146]">
              We have booked a 6-cup assorted tasting box (Dark Chocolate, Elaichi, Golden Oat, Vanilla) for <strong>{cafeName}</strong> in <strong>{city}</strong>.
            </p>
            <p className="text-xs text-stone-500">
              Tracking code will arrive via WhatsApp at {phone} within 4 hours.
            </p>
            <button
              onClick={handleClose}
              className="mt-3 bg-[#2B1B14] hover:bg-[#4A2810] text-white px-6 py-2.5 rounded-xl font-bold text-xs cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-xs text-[#684B28] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E87332] shrink-0" />
              <span>Includes 6 assorted edible cups + barista brewing & serving manual. 100% complimentary for verified cafes and event planners.</span>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-stone-600 mb-1">
                Cafe / Establishment Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Roastery Coffee House"
                value={cafeName}
                onChange={(e) => setCafeName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-stone-600 mb-1">
                WhatsApp Phone Number (for courier tracking) *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-stone-600 mb-1">
                Delivery City & Pincode *
              </label>
              <input
                type="text"
                required
                placeholder="City name, State, Pincode"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-stone-600 mb-1">
                Primary Flavor Interest
              </label>
              <select
                value={sampleFlavor}
                onChange={(e) => setSampleFlavor(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none bg-stone-50"
              >
                <option value="assorted">Assorted Box (All 4 Flavors)</option>
                <option value="choco">Belgian Dark Chocolate (Coffee Specialist)</option>
                <option value="elaichi">Royal Elaichi (Chai Specialist)</option>
                <option value="oat">Artisanal Oat (Pour-over & Tea)</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#E87332] hover:bg-[#D35400] text-white font-extrabold rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Me Free Sample Box</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-400 font-medium">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>Zero obligation • No shipping fee required</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
