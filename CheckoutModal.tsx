import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Check, ShieldCheck, Truck, CreditCard, QrCode, Sparkles, ArrowRight, Package } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playChimeSound, playCrunchSound } from '../utils/audio';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discountAmount: number;
  promoCode: string;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discountAmount,
  promoCode,
  onOrderSuccess
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: 'Vijay Gawai',
    email: 'gawai@cup2eat.demo',
    phone: '+91 98765 43210',
    address: 'Flat 402, Green Meadows, MG Road',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411001',
    paymentMethod: 'upi'
  });

  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const shipping = rawSubtotal >= 999 || rawSubtotal === 0 ? 0 : 99;
  const grandTotal = Math.max(0, rawSubtotal - discountAmount + shipping);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `C2E-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);

    playChimeSound();
    playCrunchSound();

    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#E87332', '#4A2810', '#10B981', '#F59E0B']
    });

    setStep('success');
  };

  const handleFinish = () => {
    onOrderSuccess();
    onClose();
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#E8DFC8] overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-5 bg-white border-b border-[#E8DFC8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍪</span>
            <div>
              <h3 className="font-heading font-black text-lg text-[#2B1B14]">
                {step === 'form' ? 'Checkout & Eco-Dispatch' : 'Order Confirmed!'}
              </h3>
              <p className="text-xs text-stone-500">
                {step === 'form' ? 'Cushioned food-grade packaging • 100% damage-free delivery' : 'Your edible cups are getting freshly packed'}
              </p>
            </div>
          </div>

          <button
            onClick={step === 'success' ? handleFinish : onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Quick Order Summary Snippet */}
            <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200 flex items-center justify-between text-xs text-[#5E5146]">
              <div>
                <span className="font-bold text-[#2B1B14]">{items.length} Product(s) Selected</span>
                <p className="text-[11px] text-stone-500">
                  {promoCode && `Coupon ${promoCode} applied (-₹${discountAmount})`}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-stone-500 block">Total Payable:</span>
                <span className="font-mono text-base font-black text-[#E87332]">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Shipping Address Inputs */}
            <div className="space-y-3">
              <h4 className="font-heading font-extrabold text-sm text-[#2B1B14] uppercase tracking-wider flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#E87332]" />
                <span>1. Shipping Information</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-600 mb-1">Email Address (for order tracking) *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-600 mb-1">Delivery Street Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">State *</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">Pincode *</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:border-[#E87332] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 pt-2">
              <h4 className="font-heading font-extrabold text-sm text-[#2B1B14] uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#E87332]" />
                <span>2. Select Payment Option</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'upi', label: 'UPI / GPay / QR', icon: QrCode, badge: 'Fastest' },
                  { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, badge: 'All Banks' },
                  { id: 'cod', label: 'Cash on Delivery', icon: Package, badge: 'Pan-India' }
                ].map((m) => {
                  const Icon = m.icon;
                  const isSelected = formData.paymentMethod === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                      className={`p-3 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#E87332]/10 border-[#E87332] text-[#2B1B14]'
                          : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-4 h-4 text-[#E87332]" />
                        <span className="text-[10px] font-bold bg-stone-100 text-stone-600 px-1.5 py-0.2 rounded">
                          {m.badge}
                        </span>
                      </div>
                      <p className="font-bold text-xs">{m.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-stone-200">
              <button
                type="submit"
                className="w-full py-4 bg-[#E87332] hover:bg-[#D35400] text-white rounded-2xl font-black text-sm shadow-xl shadow-[#E87332]/25 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm & Place Order (₹{grandTotal.toLocaleString('en-IN')})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 font-medium mt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Satisfaction Guarantee • Baked Fresh to Order</span>
              </div>
            </div>

          </form>
        ) : (
          /* Order Success Receipt */
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-10 h-10" />
            </div>

            <div>
              <span className="inline-block bg-[#E87332]/10 text-[#E87332] text-xs font-mono font-bold px-3 py-1 rounded-full mb-2">
                Order #{orderId}
              </span>
              <h4 className="font-heading font-black text-3xl text-[#2B1B14]">
                Thank You, {formData.name}!
              </h4>
              <p className="text-sm text-[#5E5146] max-w-md mx-auto mt-2">
                Your Cup2Eat zero-waste box is scheduled for fresh baking and will dispatch to <strong className="text-[#2B1B14]">{formData.city}, {formData.pincode}</strong> within 24 hours.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#E8DFC8] max-w-md mx-auto text-left space-y-3">
              <div className="flex justify-between text-xs pb-2 border-b border-stone-100">
                <span className="text-stone-500">Tracking Notification:</span>
                <span className="font-semibold text-emerald-700">Sent to {formData.phone}</span>
              </div>
              <div className="flex justify-between text-xs pb-2 border-b border-stone-100">
                <span className="text-stone-500">Payment Status:</span>
                <span className="font-semibold text-stone-800 uppercase">{formData.paymentMethod} (Verified)</span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-1">
                <span className="text-[#2B1B14]">Total Paid:</span>
                <span className="font-mono text-[#E87332] text-base">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Instagram Follow Prompt */}
            <div className="p-4 bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 rounded-2xl border border-pink-200/60 max-w-md mx-auto">
              <p className="text-xs font-bold text-[#2B1B14]">
                📸 Remember to tag @cup2eat in your first crunch reel!
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                We repost our favorite customer reactions to our 128K+ Instagram community.
              </p>
            </div>

            <button
              onClick={handleFinish}
              className="inline-flex items-center gap-2 bg-[#2B1B14] hover:bg-[#4A2810] text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow transition cursor-pointer"
            >
              <span>Back to Cup2Eat Homepage</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
