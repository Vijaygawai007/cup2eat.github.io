import React, { useState } from 'react';
import { CupProduct, CartItem } from '../types';
import { CUP_PRODUCTS } from '../data/cupData';
import { ShoppingBag, Check, Sparkles, Star, Flame, Coffee, Heart, Info } from 'lucide-react';
import { playCrunchSound, playChimeSound } from '../utils/audio';

interface ProductCatalogProps {
  onAddToCart: (item: CartItem) => void;
  onOpenNutritionModal: () => void;
  onOpenSampleModal: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onAddToCart,
  onOpenNutritionModal,
  onOpenSampleModal
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  
  // Selection state per product (size & pack)
  const [selectedSizes, setSelectedSizes] = useState<Record<string, '100ml' | '150ml' | '220ml'>>({
    'choco-glaze': '150ml',
    'classic-oat': '150ml',
    'royal-elaichi': '100ml',
    'vanilla-bourbon': '220ml'
  });

  const [selectedPacks, setSelectedPacks] = useState<Record<string, 12 | 50 | 200 | 1000>>({
    'choco-glaze': 12,
    'classic-oat': 12,
    'royal-elaichi': 12,
    'vanilla-bourbon': 12
  });

  const [addedAnimation, setAddedAnimation] = useState<string | null>(null);

  const packLabels: Record<12 | 50 | 200 | 1000, { label: string; perCup: string; best: string }> = {
    12: { label: 'Taster Box (12 cups)', perCup: '~₹41/cup', best: 'For Home & Gifting' },
    50: { label: 'Cafe Starter (50 cups)', perCup: '~₹30/cup', best: 'Best Value for Cafes' },
    200: { label: 'Event Bundle (200 cups)', perCup: '~₹26/cup', best: 'Weddings & Parties' },
    1000: { label: 'Wholesale (1,000 cups)', perCup: '~₹20/cup', best: 'Commercial Supply' }
  };

  const filteredProducts = selectedFilter === 'all'
    ? CUP_PRODUCTS
    : CUP_PRODUCTS.filter((p) => p.id === selectedFilter || p.flavor.toLowerCase().includes(selectedFilter.toLowerCase()));

  const handleSizeChange = (productId: string, size: '100ml' | '150ml' | '220ml') => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handlePackChange = (productId: string, pack: 12 | 50 | 200 | 1000) => {
    setSelectedPacks((prev) => ({ ...prev, [productId]: pack }));
  };

  const handleAdd = (product: CupProduct) => {
    const size = selectedSizes[product.id] || product.defaultSize;
    const pack = selectedPacks[product.id] || 12;
    const price = product.prices[String(pack) as '12' | '50' | '200' | '1000'];

    playCrunchSound();
    playChimeSound();

    onAddToCart({
      productId: product.id,
      name: product.name,
      flavor: product.flavor,
      size,
      packSize: pack,
      unitPrice: price,
      quantity: 1,
      image: product.image
    });

    setAddedAnimation(product.id);
    setTimeout(() => setAddedAnimation(null), 1800);
  };

  return (
    <section id="flavors" className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E87332] uppercase tracking-wider bg-[#E87332]/10 px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct-To-Consumer & Wholesale Menu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1B14] font-heading tracking-tight">
              Crafted Flavors & Sizes
            </h2>
            <p className="text-[#685A4E] text-base mt-2 max-w-xl">
              100% plant-based, baked fresh to order in certified clean bakeries. Sealed in food-grade eco nitrogen foil for 9-month peak crispness.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Flavors' },
              { id: 'choco-glaze', label: 'Dark Chocolate' },
              { id: 'classic-oat', label: 'Golden Oat' },
              { id: 'royal-elaichi', label: 'Elaichi (Chai)' },
              { id: 'vanilla-bourbon', label: 'Vanilla Bean' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedFilter(btn.id)}
                className={`text-xs font-bold px-3.5 py-2 rounded-xl transition cursor-pointer ${
                  selectedFilter === btn.id
                    ? 'bg-[#2B1B14] text-white shadow-md'
                    : 'bg-white/80 text-[#5E5146] hover:bg-white border border-[#E8DFC8]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => {
            const currentSize = selectedSizes[product.id] || product.defaultSize;
            const currentPack = selectedPacks[product.id] || 12;
            const currentPrice = product.prices[String(currentPack) as '12' | '50' | '200' | '1000'];
            const isAdded = addedAnimation === product.id;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image and Header */}
                <div>
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      {product.badge ? (
                        <span className="bg-[#E87332] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                          {product.badge}
                        </span>
                      ) : <span />}

                      <span className="bg-white/90 backdrop-blur-md text-[#2B1B14] text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        {product.rating} ({product.reviewCount})
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 inset-x-4 text-white">
                      <p className="text-xs font-mono text-amber-200 uppercase tracking-widest">
                        {product.flavor}
                      </p>
                      <h3 className="font-heading font-black text-2xl tracking-tight leading-snug">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-5">
                    <p className="text-sm text-[#5E5146] leading-relaxed">
                      {product.description}
                    </p>

                    {/* Best paired with */}
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/50 text-xs text-[#684B28]">
                      <Coffee className="w-4 h-4 text-[#E87332] shrink-0" />
                      <span><strong>Best paired with:</strong> {product.bestFor}</span>
                    </div>

                    {/* Size Selector */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-extrabold uppercase text-[#2B1B14] tracking-wider">
                          Select Volume:
                        </label>
                        <span className="text-[11px] text-stone-500">
                          {currentSize === '100ml' && 'Single Espresso / Cutting Chai'}
                          {currentSize === '150ml' && 'Standard Latte / Cappuccino'}
                          {currentSize === '220ml' && 'Cold Brew / Shakes / Ice Cream'}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {product.sizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() => handleSizeChange(product.id, sz)}
                            className={`py-2 px-3 rounded-xl text-xs font-extrabold transition cursor-pointer border ${
                              currentSize === sz
                                ? 'bg-[#2B1B14] text-white border-[#2B1B14]'
                                : 'bg-[#FAF7F2] text-[#4A3E36] border-[#E8DFC8] hover:border-stone-400'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Pack Quantity Selector */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase text-[#2B1B14] tracking-wider mb-2">
                        Choose Pack Quantity:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {([12, 50, 200, 1000] as const).map((packNum) => {
                          const isSelected = currentPack === packNum;
                          return (
                            <button
                              key={packNum}
                              onClick={() => handlePackChange(product.id, packNum)}
                              className={`p-2.5 rounded-xl text-left border transition cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E87332]/10 border-[#E87332] text-[#2B1B14]'
                                  : 'bg-white border-[#E8DFC8] hover:border-stone-400 text-stone-600'
                              }`}
                            >
                              <div className="font-extrabold text-xs">
                                {packNum} Cups
                              </div>
                              <div className="text-[10px] text-stone-500">
                                {packLabels[packNum].perCup}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer with Price and Add to Cart Button */}
                <div className="p-6 bg-[#FAF7F2] border-t border-[#E8DFC8] flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-[#2B1B14] font-mono">
                        ₹{currentPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-stone-500">
                        ({currentPack} cups • {currentSize})
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-700 font-semibold">
                      ✓ Free Pan-India Delivery • 9-Month Shelf Life
                    </p>
                  </div>

                  <button
                    onClick={() => handleAdd(product)}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm shadow-md transition cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#2B1B14] hover:bg-[#E87332] text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-amber-300" />
                        <span>Add Box</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Mix & Match Box Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#2B1B14] via-[#4A2810] to-[#2B1B14] rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="bg-[#E87332] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Cafe Owner or Caterer?
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl">
              Need custom laser embossing or custom pack sizes?
            </h3>
            <p className="text-stone-300 text-sm max-w-xl">
              We personalize your edible cups with your cafe crest, wedding monogram, or brand logo for orders of 1,000+ cups.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenSampleModal}
              className="bg-white hover:bg-stone-100 text-[#2B1B14] font-extrabold px-6 py-3.5 rounded-2xl text-sm transition shadow-md cursor-pointer text-center"
            >
              Request Free Cafe Samples
            </button>
            <button
              onClick={onOpenNutritionModal}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-4 py-3.5 rounded-2xl text-sm transition cursor-pointer text-center"
            >
              Ingredient Facts
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
