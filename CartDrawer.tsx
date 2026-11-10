import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck, Sparkles } from 'lucide-react';
import { playCrunchSound, playChimeSound } from '../utils/audio';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, packSize: number, delta: number) => void;
  onRemoveItem: (productId: string, packSize: number) => void;
  onProceedToCheckout: (appliedPromo: string, discountAmount: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>('INSTA20');
  const [promoError, setPromoError] = useState<string | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  // Discount calculation
  let discountPercentage = 0;
  if (appliedPromo === 'INSTA20') discountPercentage = 0.20;
  else if (appliedPromo === 'CRUNCH') discountPercentage = 0.15;

  const discountAmount = Math.round(rawSubtotal * discountPercentage);
  const freeShippingThreshold = 999;
  const shipping = rawSubtotal >= freeShippingThreshold || rawSubtotal === 0 ? 0 : 99;
  const total = Math.max(0, rawSubtotal - discountAmount + shipping);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError(null);
    const cleaned = promoCode.trim().toUpperCase();
    if (cleaned === 'INSTA20' || cleaned === 'CRUNCH') {
      setAppliedPromo(cleaned);
      setPromoCode('');
      playChimeSound();
    } else {
      setPromoError('Invalid coupon code. Try INSTA20 or CRUNCH');
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-l border-[#E8DFC8] animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-[#E8DFC8] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#2B1B14] text-white flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-heading font-black text-lg text-[#2B1B14]">
                  Your Crunch Box
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  {items.length} {items.length === 1 ? 'item' : 'items'} in order
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-amber-50 border-b border-amber-200/60 text-xs text-[#5E5146]">
            {rawSubtotal >= freeShippingThreshold ? (
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>You unlocked FREE Pan-India Delivery! 🚚</span>
              </div>
            ) : (
              <div>
                <p className="font-semibold text-[#2B1B14]">
                  Add <strong>₹{(freeShippingThreshold - rawSubtotal).toLocaleString()}</strong> more for FREE Pan-India shipping!
                </p>
                <div className="w-full bg-stone-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-[#E87332] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-200/60 flex items-center justify-center text-stone-400 mx-auto text-2xl">
                  🍪
                </div>
                <h4 className="font-heading font-black text-lg text-[#2B1B14]">
                  Your box is currently empty
                </h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Add our bestselling Belgian Dark Chocolate or Royal Elaichi biscuit cups to start crunching!
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 inline-flex items-center gap-1.5 bg-[#2B1B14] hover:bg-[#E87332] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition cursor-pointer"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.productId}-${item.packSize}`}
                  className="bg-white p-4 rounded-2xl border border-[#E8DFC8] shadow-xs flex items-center gap-3.5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover border border-stone-200 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm text-[#2B1B14] truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-medium">
                      {item.packSize} Cups • {item.size}
                    </p>
                    <p className="text-xs font-black font-mono text-[#E87332] mt-0.5">
                      ₹{item.unitPrice.toLocaleString('en-IN')}
                    </p>
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(item.productId, item.packSize)}
                      className="text-stone-300 hover:text-red-500 transition cursor-pointer p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1 bg-stone-100 rounded-lg p-0.5 border border-stone-200">
                      <button
                        onClick={() => {
                          playCrunchSound();
                          onUpdateQuantity(item.productId, item.packSize, -1);
                        }}
                        className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-white transition cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold font-mono text-[#2B1B14]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => {
                          playCrunchSound();
                          onUpdateQuantity(item.productId, item.packSize, 1);
                        }}
                        className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-white transition cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary & Checkout Footer */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#E8DFC8] space-y-4">
              
              {/* Promo Code Box */}
              <div>
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <Tag className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Coupon <strong>{appliedPromo}</strong> applied (-20%)</span>
                    </div>
                    <button
                      onClick={handleRemovePromo}
                      className="text-stone-400 hover:text-red-500 text-xs font-semibold cursor-pointer underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (INSTA20)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs rounded-xl border border-stone-300 focus:border-[#E87332] outline-none uppercase font-mono"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#2B1B14] hover:bg-[#4A2810] text-white text-xs font-bold rounded-xl transition cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoError && (
                  <p className="text-[11px] text-red-600 mt-1 font-medium">{promoError}</p>
                )}
              </div>

              {/* Price Details */}
              <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-100 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-semibold">₹{rawSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount ({appliedPromo})</span>
                    <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Pan-India Shipping</span>
                  <span className="font-mono font-semibold">
                    {shipping === 0 ? <span className="text-emerald-700 uppercase font-bold">FREE</span> : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#2B1B14] pt-2 border-t border-stone-200">
                  <span>Total Payable</span>
                  <span className="font-mono text-xl text-[#E87332]">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  playChimeSound();
                  onProceedToCheckout(appliedPromo || '', discountAmount);
                }}
                className="w-full py-3.5 bg-[#E87332] hover:bg-[#D35400] text-white rounded-2xl font-extrabold text-sm shadow-lg shadow-[#E87332]/30 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Damage-free delivery guarantee • Safe payments</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
