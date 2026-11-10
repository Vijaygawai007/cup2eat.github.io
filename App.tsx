/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CrunchTimeline } from './components/CrunchTimeline';
import { AnatomySection } from './components/AnatomySection';
import { ProductCatalog } from './components/ProductCatalog';
import { EcoCalculator } from './components/EcoCalculator';
import { B2BSection } from './components/B2BSection';
import { InstagramFeed } from './components/InstagramFeed';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SampleModal } from './components/SampleModal';
import { NutritionModal } from './components/NutritionModal';
import { Footer } from './components/Footer';
import { Instagram, ShoppingBag, Volume2 } from 'lucide-react';
import { playCrunchSound } from './utils/audio';

export default function App() {
  // Pre-populate with 1 starter item so the cart feels rich immediately
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      productId: 'choco-glaze',
      name: 'Belgian Dark Chocolate Glaze',
      flavor: 'Dark Chocolate',
      size: '150ml',
      packSize: 12,
      unitPrice: 499,
      quantity: 1,
      image: '/src/assets/images/cup2eat_hero_cup_1794317046023.jpg'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isNutritionModalOpen, setIsNutritionModalOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState('INSTA20');
  const [discountAmount, setDiscountAmount] = useState(100);

  const instagramUrl = "https://www.instagram.com/cup2eat?xtok=aXptcjEwMmplemVl";

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.productId === newItem.productId && i.packSize === newItem.packSize && i.size === newItem.size
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, packSize: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.productId === productId && item.packSize === packSize) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string, packSize: number) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.productId === productId && item.packSize === packSize))
    );
  };

  const handleProceedToCheckout = (promo: string, discount: number) => {
    setAppliedPromo(promo);
    setDiscountAmount(discount);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
  };

  const scrollToFlavors = () => {
    const el = document.getElementById('flavors');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B1B14]">
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSampleModal={() => setIsSampleModalOpen(true)}
        onOpenNutritionModal={() => setIsNutritionModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreFlavors={scrollToFlavors}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        {/* 2. Interactive 45-Min Crunch Test */}
        <CrunchTimeline />

        {/* 3. Anatomy of an Edible Cup & How It Works */}
        <AnatomySection
          onOpenNutritionModal={() => setIsNutritionModalOpen(true)}
        />

        {/* 4. Products & Flavors Catalog */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          onOpenNutritionModal={() => setIsNutritionModalOpen(true)}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        {/* 5. Live Eco Impact Calculator */}
        <EcoCalculator
          onOrderNow={scrollToFlavors}
        />

        {/* 6. B2B, Cafes & Event Bulk Supplies */}
        <B2BSection
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        {/* 7. Instagram Reels & Social Proof Wall */}
        <InstagramFeed />

        {/* 8. Customer & Cafe Reviews */}
        <ReviewsSection />

        {/* 9. FAQs */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenSampleModal={() => setIsSampleModalOpen(true)}
        onOpenNutritionModal={() => setIsNutritionModalOpen(true)}
      />

      {/* Floating Action Bar (Sticky Mobile Quick Access) */}
      <div className="fixed bottom-4 inset-x-4 sm:hidden z-30 flex items-center gap-2">
        <button
          onClick={playCrunchSound}
          className="flex-1 bg-white text-[#2B1B14] border border-[#E8DFC8] py-3 rounded-2xl font-extrabold text-xs shadow-lg flex items-center justify-center gap-1.5 active:scale-95 transition"
        >
          <Volume2 className="w-4 h-4 text-[#E87332]" />
          <span>Crunch!</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-2 bg-[#E87332] text-white py-3 rounded-2xl font-black text-xs shadow-xl flex items-center justify-center gap-2 active:scale-95 transition"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Box ({totalCartCount})</span>
        </button>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 text-white rounded-2xl shadow-lg flex items-center justify-center shrink-0"
          aria-label="Instagram link"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        discountAmount={discountAmount}
        promoCode={appliedPromo}
        onOrderSuccess={handleOrderSuccess}
      />

      <SampleModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
      />

      <NutritionModal
        isOpen={isNutritionModalOpen}
        onClose={() => setIsNutritionModalOpen(false)}
      />
    </div>
  );
}
