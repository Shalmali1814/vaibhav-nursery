import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Sparkles, 
  CheckCircle2, 
  Truck, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';
import { playSoftClick, playSproutChime } from '../utils/audio';

export default function CartDrawer({ isOpen, onClose, cart = [], onUpdateQuantity, onRemoveFromCart, onClearCart }) {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.15) : 0;
  const shipping = subtotal > 499 || subtotal === 0 ? 0 : 49;
  const total = Math.max(0, subtotal - discount + shipping);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toLowerCase();
    if (code === 'vaibhav15' || code === 'vaibhav' || code === 'verda15' || code === 'organic') {
      setPromoApplied(true);
      playSproutChime();
    }
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    playSproutChime();
    setCheckoutStep('success');
    setTimeout(() => {
      onClearCart();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md h-full bg-[#FFFFFF] border-l-2 border-[#DCD7D7] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
        
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#DCD7D7] mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E8E5E5] border border-[#DCD7D7] flex items-center justify-center text-verda-800">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg font-display">Your Organic Cart</h3>
                <span className="text-[10px] text-verda-800 font-mono font-bold">{cart.length} item(s) selected</span>
              </div>
            </div>

            <button
              onClick={() => {
                playSoftClick();
                onClose();
              }}
              className="p-1.5 rounded-xl bg-[#E8E5E5] text-slate-700 hover:text-slate-900 border border-[#DCD7D7]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body content */}
          {checkoutStep === 'cart' && (
            <div>
              {cart.length === 0 ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <span className="text-5xl mb-3">🌱</span>
                  <h4 className="text-base font-bold text-slate-900 font-display">Your cart is empty</h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-xs font-medium">
                    Explore our certified heirloom seeds, enriched vermicompost, and non-toxic pest defense products!
                  </p>
                </div>
              ) : (
                <div className="space-y-3 mb-6 max-h-[380px] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="p-3.5 rounded-2xl bg-[#F4F2F2] border border-[#DCD7D7] flex items-center justify-between gap-3 shadow-xs">
                      <div className="flex items-center gap-3">
                        {typeof item.image === 'string' && (item.image.startsWith('/') || item.image.includes('.')) ? (
                          <img src={item.image} alt={item.name} className="w-8 h-8 object-contain shrink-0 drop-shadow-xs" />
                        ) : (
                          <span className="text-2xl">{item.image}</span>
                        )}
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{item.name}</h4>
                          <span className="text-[11px] font-mono text-verda-800 font-bold">₹{item.price}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-[#FFFFFF] border border-[#DCD7D7] rounded-lg p-0.5 shadow-xs">
                          <button
                            onClick={() => {
                              playSoftClick();
                              onUpdateQuantity(item.id, Math.max(1, item.quantity - 1));
                            }}
                            className="p-1 text-slate-600 hover:text-slate-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-bold text-slate-900">{item.quantity}</span>
                          <button
                            onClick={() => {
                              playSoftClick();
                              onUpdateQuantity(item.id, item.quantity + 1);
                            }}
                            className="p-1 text-slate-600 hover:text-slate-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => {
                            playSoftClick();
                            onRemoveFromCart(item.id);
                          }}
                          className="p-1.5 text-rose-600 hover:text-rose-800 transition-colors"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Promo code */}
              {cart.length > 0 && (
                <form onSubmit={handleApplyPromo} className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Coupon code (Try: VAIBHAV15)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-xs text-slate-900 focus:outline-none focus:border-verda-600 font-medium"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-xl bg-verda-700 hover:bg-verda-800 text-xs text-white font-bold"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>
          )}

          {checkoutStep === 'checkout' && (
            <form onSubmit={handleCompleteOrder} className="space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Delivery Information</h4>
              <div>
                <label className="text-slate-700 font-mono font-bold block mb-1">Full Name</label>
                <input type="text" required defaultValue="Priya Ganguly" className="w-full px-3 py-2 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-slate-900 font-medium" />
              </div>
              <div>
                <label className="text-slate-700 font-mono font-bold block mb-1">Delivery Address</label>
                <input type="text" required defaultValue="Flat 402, Green Meadows, 5th Main" className="w-full px-3 py-2 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-slate-900 font-medium" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-700 font-mono font-bold block mb-1">City</label>
                  <input type="text" required defaultValue="Bangalore" className="w-full px-3 py-2 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-slate-900 font-medium" />
                </div>
                <div>
                  <label className="text-slate-700 font-mono font-bold block mb-1">Pincode</label>
                  <input type="text" required defaultValue="560034" className="w-full px-3 py-2 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-slate-900 font-medium" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-slate-700">
                <span className="text-[11px] font-mono text-verda-800 font-bold block mb-1">Payment Method</span>
                <span>🌱 Cash on Delivery / UPI upon inspection</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-xs shadow-md mt-3"
              >
                Place Verified Order (₹{total})
              </button>
              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="w-full py-1.5 text-slate-600 text-xs text-center font-medium"
              >
                ← Back to Cart Items
              </button>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-verda-100 border-2 border-verda-400 flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
                🌱
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-display">Order Confirmed!</h4>
              <p className="text-xs text-slate-600 mt-2 max-w-xs mx-auto leading-relaxed font-medium">
                Your certified organic inputs and saplings have been queued for dispatch. You will receive real-time SMS tracking updates!
              </p>
              <div className="mt-4 p-3 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-xs text-verda-900 font-mono font-bold">
                Order ID: #VNB-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <button
                onClick={() => {
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-verda-600 text-white font-bold text-xs"
              >
                Continue Gardening
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer Summary */}
        {cart.length > 0 && checkoutStep === 'cart' && (
          <div className="pt-4 border-t border-[#DCD7D7]">
            <div className="space-y-1.5 text-xs text-slate-700 mb-3 font-mono font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-slate-900 font-bold">₹{subtotal}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-verda-800 font-bold">
                  <span>Promo (VAIBHAV15)</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Doorstep Shipping</span>
                <span>{shipping === 0 ? <strong className="text-verda-800 font-bold">FREE</strong> : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-900 font-extrabold pt-2 border-t border-[#DCD7D7]">
                <span>Total Amount</span>
                <span className="text-verda-800 font-mono">₹{total}</span>
              </div>
            </div>

            <button
              onClick={() => {
                playSoftClick();
                setCheckoutStep('checkout');
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-xs shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
