import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Sparkles, 
  Check, 
  Plus, 
  Star, 
  Truck, 
  ShieldCheck, 
  Sprout,
  ArrowRight,
  Filter,
  X,
  CreditCard,
  Building,
  DollarSign
} from 'lucide-react';
import { SHOP_PRODUCTS } from '../data/verdaData';
import { playSoftClick, playSproutChime } from '../utils/audio';

export default function MarketplaceStore({ onAddToCart, cart = [], onUpdateQuantity, onRemoveFromCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSellModal, setShowSellModal] = useState(false);
  const [sellSuccess, setSellSuccess] = useState(false);

  const categories = ['All', 'Organic Seeds', 'Natural Fertilizers', 'Pest Defense', 'Grow Bags & Pots', 'Smart Hardware', 'Farming Tools'];

  const filteredProducts = SHOP_PRODUCTS.filter((prod) => {
    const matchesCat = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSellSubmit = (e) => {
    e.preventDefault();
    playSproutChime();
    setSellSuccess(true);
    setTimeout(() => {
      setSellSuccess(false);
      setShowSellModal(false);
    }, 2500);
  };

  return (
    <section id="marketplace" className="py-20 lg:py-28 relative bg-[#E8E5E5] border-t border-[#DCD7D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD7D7] text-verda-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Verified Nursery Inputs & Tools</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
              Doorstep Inputs & Farming Tools
            </h2>
            <p className="mt-3 text-slate-700 text-sm sm:text-base max-w-2xl font-medium">
              100% verified non-toxic organic inputs and professional farming tools delivered to your door. Plus, a transparent platform to list your homegrown surplus!
            </p>
          </div>

          <button
            onClick={() => {
              playSoftClick();
              setShowSellModal(true);
            }}
            className="px-5 py-3 rounded-2xl bg-earth-600 hover:bg-earth-700 text-white font-bold text-xs shadow-md flex items-center gap-2 shrink-0 transition-all hover:scale-105"
          >
            <Sprout className="w-4 h-4" />
            <span>Sell My Farm / Terrace Produce</span>
          </button>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FFFFFF] border border-[#DCD7D7] rounded-2xl shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playSoftClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-verda-600 text-white shadow-sm shadow-verda-600/30'
                    : 'text-slate-700 hover:text-verda-800 hover:bg-[#E8E5E5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-verda-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search seeds, compost, bio-oil..."
              className="w-full pl-9 pr-4 py-2 bg-[#FFFFFF] border border-[#DCD7D7] rounded-xl text-xs text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-verda-600 shadow-xs font-medium"
            />
          </div>

        </div>

        {/* Product Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-5 rounded-3xl bg-[#FFFFFF] border-2 border-[#DCD7D7] hover:border-verda-500 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Image / Graphic container */}
                <div className="relative h-44 rounded-2xl bg-gradient-to-b from-[#F4F2F2] to-[#E8E5E5] border border-[#DCD7D7] flex items-center justify-center mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform p-3">
                  {typeof prod.image === 'string' && (prod.image.startsWith('/') || prod.image.includes('.')) ? (
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="h-32 w-auto max-w-full object-contain drop-shadow-md group-hover:rotate-6 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-6xl group-hover:rotate-6 transition-transform duration-300">
                      {prod.image}
                    </span>
                  )}

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD7D7] text-verda-800 text-[10px] font-mono font-bold shadow-xs">
                    {prod.badge}
                  </span>

                  <span className="absolute bottom-3 right-3 text-[11px] font-mono text-slate-800 bg-[#FFFFFF]/90 px-2 py-0.5 rounded-md shadow-xs font-semibold border border-[#DCD7D7]">
                    ★ {prod.rating} ({prod.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-verda-700 font-bold mb-1">
                  <span>{prod.category}</span>
                  <span className="text-sprout-700">In Stock</span>
                </div>

                <h3 className="font-bold text-slate-900 text-base group-hover:text-verda-700 transition-colors mb-2">
                  {prod.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4 font-medium">
                  {prod.desc}
                </p>
              </div>

              {/* Price & Add to Cart Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-lg font-extrabold font-mono text-slate-900">
                    ₹{prod.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through ml-2 font-mono">
                    ₹{prod.origPrice}
                  </span>
                </div>

                <button
                  onClick={() => {
                    playSproutChime();
                    if (onAddToCart) onAddToCart(prod);
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Doorstep Assurance Trust Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FFFFFF] border border-[#DCD7D7] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8E5E5] border border-[#DCD7D7] flex items-center justify-center text-verda-800 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Express Doorstep Dispatch</h4>
              <p className="text-[11px] text-slate-700 font-medium">Live microbial inputs shipped within 24 hours.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8E5E5] border border-[#DCD7D7] flex items-center justify-center text-verda-800 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">100% Non-Toxic Guarantee</h4>
              <p className="text-[11px] text-slate-700 font-medium">Zero synthetic residues, certified heirloom non-GMO.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8E5E5] border border-[#DCD7D7] flex items-center justify-center text-verda-800 shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Direct Farmer Fair Pricing</h4>
              <p className="text-[11px] text-slate-700 font-medium">Rooftop & rural growers receive 80% of consumer price.</p>
            </div>
          </div>
        </div>

      </div>

      {/* "Sell Your Harvest" Modal */}
      {showSellModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#FFFFFF] border-2 border-[#DCD7D7] rounded-3xl p-6 sm:p-8 shadow-2xl">
            
            <button
              onClick={() => setShowSellModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#E8E5E5] text-slate-700 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-earth-600 text-white flex items-center justify-center font-bold">
                🌾
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">List Your Organic Harvest</h3>
                <span className="text-xs text-earth-700 font-mono font-semibold">Connect directly with organic buyers</span>
              </div>
            </div>

            {sellSuccess ? (
              <div className="p-6 rounded-2xl bg-[#F4F2F2] border border-verda-300 text-center animate-fadeIn">
                <Sparkles className="w-10 h-10 text-verda-700 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900 text-base">Listing Submitted Successfully!</h4>
                <p className="text-xs text-slate-700 mt-1 font-medium">
                  Our local Vaibhav Nursery quality auditor will verify your batch details within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSellSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="text-slate-700 font-mono font-bold block mb-1">Produce Name & Variety</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Organic Roma Tomatoes (10 kg)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-slate-900 focus:outline-none focus:border-verda-600 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-700 font-mono font-bold block mb-1">Harvest Quantity (kg / boxes)</label>
                    <input
                      type="number"
                      required
                      placeholder="15"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-slate-900 focus:outline-none focus:border-verda-600 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-slate-700 font-mono font-bold block mb-1">Expected Price (₹ / kg)</label>
                    <input
                      type="number"
                      required
                      placeholder="60"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-slate-900 focus:outline-none focus:border-verda-600 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-mono font-bold block mb-1">Farming Method / Inputs Used</label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-slate-900 focus:outline-none focus:border-verda-600 font-medium">
                    <option>100% Home Terrace (Vermicompost & Jeevamrutha)</option>
                    <option>Certified Organic Farm (Zero Chemicals)</option>
                    <option>Natural Permaculture Forest Garden</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-700 font-mono font-bold block mb-1">Pickup City / Pincode</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bangalore - 560034"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-slate-900 focus:outline-none focus:border-verda-600 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-earth-600 to-verda-600 text-white font-bold text-xs shadow-md mt-2 hover:scale-[1.02] transition-transform"
                >
                  Submit Produce for Verified Listing
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
