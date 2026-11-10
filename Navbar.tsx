import React, { useState } from 'react';
import { ShoppingBag, Instagram, Sparkles, Menu, X, ArrowUpRight, Leaf, Coffee } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSampleModal: () => void;
  onOpenNutritionModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSampleModal,
  onOpenNutritionModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const instagramUrl = "https://www.instagram.com/cup2eat?xtok=aXptcjEwMmplemVl";

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF7F2]/95 border-b border-[#E8DFC8]/60 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#2B1B14] via-[#4A2810] to-[#2B1B14] text-white px-4 py-2 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="inline-flex items-center gap-1 bg-[#E87332] text-white text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              <Sparkles className="w-3 h-3" /> Instagram Sensation
            </span>
            <span className="hidden sm:inline text-amber-100">
              Drink the beverage, finish it, eat the cup! Zero plastic, 100% crunchy.
            </span>
            <span className="sm:hidden text-amber-100 text-xs truncate">
              Eat your cup! 100% zero-waste biscuit cups
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden md:inline-block text-xs bg-white/10 px-2 py-0.5 rounded border border-white/15 text-amber-200">
              Use code <strong className="text-white font-mono">INSTA20</strong> for 20% OFF
            </span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-200 hover:text-white font-semibold transition group bg-white/10 px-2.5 py-1 rounded-full hover:bg-[#E87332]"
            >
              <Instagram className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>@cup2eat</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E87332] to-[#C85215] flex items-center justify-center shadow-md shadow-[#E87332]/25 group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-[#2B1B14]">
                  cup<span className="text-[#E87332]">2</span>eat
                </span>
                <span className="bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider flex items-center gap-0.5">
                  <Leaf className="w-2.5 h-2.5" /> Edible
                </span>
              </div>
              <p className="text-[11px] text-[#786C60] font-medium -mt-1 hidden sm:block">
                Drink it. Finish it. Eat it.
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#4A3E36]">
            <a href="#how-it-works" className="hover:text-[#E87332] transition">
              How It Works
            </a>
            <a href="#crunch-test" className="hover:text-[#E87332] transition flex items-center gap-1">
              45-Min Crunch Test
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </a>
            <a href="#flavors" className="hover:text-[#E87332] transition">
              Flavors & Sizes
            </a>
            <a href="#eco-calculator" className="hover:text-[#E87332] transition">
              Eco Savings
            </a>
            <a href="#b2b-cafes" className="hover:text-[#E87332] transition text-[#C85215]">
              For Cafes & Events
            </a>
            <a href="#instagram-reels" className="hover:text-[#E87332] transition">
              Reels
            </a>
            <button
              onClick={onOpenNutritionModal}
              className="text-[#786C60] hover:text-[#2B1B14] transition cursor-pointer text-xs uppercase tracking-wider"
            >
              Ingredients
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSampleModal}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#2B1B14] bg-amber-100/70 hover:bg-amber-200/80 px-3.5 py-2 rounded-xl transition border border-amber-300/40 cursor-pointer"
            >
              <span>Cafe Sample Kit</span>
              <span className="text-[10px] bg-[#E87332] text-white px-1.5 py-0.2 rounded font-mono">FREE</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#2B1B14] hover:bg-[#4A2810] text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-[#2B1B14]/15 hover:shadow-lg transition cursor-pointer group"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Box</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#E87332] text-white text-[11px] font-black flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2B1B14] hover:bg-stone-200/50 rounded-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFC8] px-4 pt-3 pb-5 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl bg-white/70 font-semibold text-sm text-[#2B1B14]"
            >
              How It Works
            </a>
            <a
              href="#crunch-test"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl bg-white/70 font-semibold text-sm text-[#2B1B14]"
            >
              45-Min Test 🔥
            </a>
            <a
              href="#flavors"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl bg-white/70 font-semibold text-sm text-[#2B1B14]"
            >
              Flavors & Shop
            </a>
            <a
              href="#eco-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl bg-white/70 font-semibold text-sm text-[#2B1B14]"
            >
              Eco Calculator
            </a>
            <a
              href="#b2b-cafes"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl bg-white/70 font-semibold text-sm text-[#C85215]"
            >
              For Cafes / B2B
            </a>
            <a
              href="#instagram-reels"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2.5 rounded-xl bg-white/70 font-semibold text-sm text-[#2B1B14]"
            >
              Instagram Reels
            </a>
          </div>

          <div className="pt-2 border-t border-[#E8DFC8] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSampleModal();
              }}
              className="w-full py-2.5 bg-[#E87332] text-white font-bold rounded-xl text-center text-sm shadow cursor-pointer"
            >
              Request Free Cafe Sample Kit
            </button>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow"
            >
              <Instagram className="w-4 h-4" />
              Follow @cup2eat on Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
