import React, { useState } from 'react';
import { Coffee, Instagram, ArrowRight, Heart, Sparkles, Check, Mail, Leaf, ShieldCheck } from 'lucide-react';
import { playChimeSound } from '../utils/audio';

interface FooterProps {
  onOpenSampleModal: () => void;
  onOpenNutritionModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSampleModal, onOpenNutritionModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const instagramUrl = "https://www.instagram.com/cup2eat?xtok=aXptcjEwMmplemVl";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    playChimeSound();
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#1F140E] text-white pt-16 pb-12 border-t border-[#352319]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card */}
        <div className="bg-gradient-to-r from-[#2B1B14] via-[#4A2810] to-[#2B1B14] p-8 sm:p-10 rounded-3xl border border-stone-700/60 shadow-xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-[#E87332] uppercase tracking-wider">
              Join 40,000+ Eco Crunchers
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Get 20% Off Your First Tasting Box
            </h3>
            <p className="text-xs text-stone-300">
              Subscribe for secret flavor drops, zero-waste lifestyle tips, and exclusive cafe wholesale discounts.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            {subscribed ? (
              <div className="bg-emerald-900/60 border border-emerald-500/60 px-5 py-3 rounded-2xl flex items-center gap-2 text-emerald-200 text-xs font-bold">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You're in! Use coupon code INSTA20 at checkout.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder-stone-400 text-xs border border-white/20 focus:border-[#E87332] outline-none w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#E87332] hover:bg-[#D35400] text-white font-bold text-xs rounded-xl transition cursor-pointer shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E87332] flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-black text-2xl tracking-tight text-white">
                cup<span className="text-[#E87332]">2</span>eat
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              The tastiest sustainable revolution in modern beverage service. 100% edible, baked biscuit cups that hold boiling drinks for 45+ minutes leak-free. 
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow @cup2eat on Instagram</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-300 tracking-wider">
              Experience
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-medium">
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#crunch-test" className="hover:text-white transition">45-Min Crunch Test</a></li>
              <li><a href="#flavors" className="hover:text-white transition">Flavors & Sizes</a></li>
              <li><a href="#eco-calculator" className="hover:text-white transition">Eco Impact Calculator</a></li>
              <li><a href="#instagram-reels" className="hover:text-white transition">Viral Reels</a></li>
            </ul>
          </div>

          {/* Col 3: Business & B2B */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-300 tracking-wider">
              For Cafes
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-medium">
              <li>
                <button onClick={onOpenSampleModal} className="hover:text-white transition text-left cursor-pointer">
                  Free Cafe Sample Box
                </button>
              </li>
              <li><a href="#b2b-cafes" className="hover:text-white transition">Wholesale Pricing</a></li>
              <li><a href="#b2b-cafes" className="hover:text-white transition">Custom Logo Laser Emboss</a></li>
              <li>
                <button onClick={onOpenNutritionModal} className="hover:text-white transition text-left cursor-pointer">
                  Ingredients & Nutrition
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Certifications */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-300 tracking-wider">
              Certifications
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>FSSAI Food Safety Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Plant-Based & Vegan</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>0% Plastic or Wax Coating</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-400 shrink-0" />
                <span>Oven Baked in India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Cup2Eat. All rights reserved. Drink it. Finish it. Eat it.</p>
          <div className="flex items-center gap-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E87332] hover:underline font-semibold"
            >
              Instagram: @cup2eat
            </a>
            <span>•</span>
            <span>Zero Waste Packaging</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
