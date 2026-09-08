import React, { useState } from 'react';
import { 
  Calculator, 
  Sun, 
  Sprout, 
  TrendingUp, 
  Sparkles, 
  DollarSign, 
  Leaf, 
  Check, 
  ShoppingBag,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { playSoftClick, playSproutChime } from '../utils/audio';

export default function GardenCalculator({ onOpenStore }) {
  const [areaSize, setAreaSize] = useState(150);
  const [sunlight, setSunlight] = useState('full');
  const [selectedCrops, setSelectedCrops] = useState(['tomatoes', 'spinach', 'herbs']);

  const cropOptions = [
    { id: 'tomatoes', name: 'Roma & Cherry Tomatoes', yieldRate: 0.12, icon: '🍅' },
    { id: 'spinach', name: 'Spinach & Salad Greens', yieldRate: 0.16, icon: '🥬' },
    { id: 'herbs', name: 'Basil, Mint & Coriander', yieldRate: 0.08, icon: '🌿' },
    { id: 'peppers', name: 'Bell Peppers & Chillies', yieldRate: 0.09, icon: '🫑' },
    { id: 'microgreens', name: 'Dense Microgreens', yieldRate: 0.22, icon: '🌱' },
  ];

  const handleToggleCrop = (cropId) => {
    playSoftClick();
    if (selectedCrops.includes(cropId)) {
      if (selectedCrops.length > 1) {
        setSelectedCrops(selectedCrops.filter(c => c !== cropId));
      }
    } else {
      setSelectedCrops([...selectedCrops, cropId]);
    }
  };

  const sunMultiplier = sunlight === 'low' ? 0.7 : sunlight === 'med' ? 1.0 : 1.25;

  const avgCropRate = selectedCrops.reduce((acc, cId) => {
    const crop = cropOptions.find(c => c.id === cId);
    return acc + (crop ? crop.yieldRate : 0.1);
  }, 0) / selectedCrops.length;

  const monthlyYieldKg = Math.round(areaSize * avgCropRate * sunMultiplier);
  const annualSavingsRs = Math.round(monthlyYieldKg * 12 * 90);
  const carbonOffsetKg = Math.round(monthlyYieldKg * 1.8 * 12);

  return (
    <section id="calculator" className="py-20 lg:py-28 relative bg-[#F4F2F2] border-t border-[#DCD7D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD7D7] text-verda-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Terrace & Balcony Yield Calculator
          </h2>
          <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Estimate how much fresh, chemical-free organic food you can harvest right from your apartment balcony or rooftop terrace.
          </p>
        </div>

        {/* Interactive Calculator Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Input Controls */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#DCD7D7] shadow-xl flex flex-col justify-between">
            <div>
              
              {/* Space Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold text-verda-800 uppercase tracking-wider">
                    1. Available Growing Space
                  </label>
                  <span className="text-base font-extrabold text-slate-900 font-mono bg-[#E8E5E5] px-3 py-1 rounded-lg border border-[#DCD7D7]">
                    {areaSize} sq. ft
                  </span>
                </div>

                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={areaSize}
                  onChange={(e) => setAreaSize(Number(e.target.value))}
                  className="w-full h-2 bg-[#E0DCDC] rounded-lg appearance-none cursor-pointer accent-verda-600"
                />

                <div className="flex justify-between text-[10px] text-slate-600 font-mono mt-1.5 font-medium">
                  <span>Small Balcony (20 sq ft)</span>
                  <span>Terrace (150 sq ft)</span>
                  <span>Rooftop (500 sq ft)</span>
                </div>
              </div>

              {/* Sunlight Exposure */}
              <div className="mb-6">
                <label className="text-xs font-mono font-bold text-verda-800 uppercase tracking-wider block mb-2">
                  2. Sunlight Exposure
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'low', label: 'Shaded / 2-3 hrs', sub: 'Leafy greens & herbs' },
                    { id: 'med', label: 'Moderate / 4-5 hrs', sub: 'Peppers & root veg' },
                    { id: 'full', label: 'Full Sun / 6+ hrs', sub: 'Tomatoes & fruiting' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        playSoftClick();
                        setSunlight(s.id);
                      }}
                      className={`p-3 rounded-xl text-left transition-all ${
                        sunlight === s.id
                          ? 'bg-verda-600 text-white font-bold border border-verda-700 shadow-md scale-[1.02]'
                          : 'bg-[#E8E5E5] border border-[#DCD7D7] text-slate-800 hover:bg-[#E0DCDC]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs">{s.label}</span>
                        <Sun className={`w-3.5 h-3.5 ${sunlight === s.id ? 'text-amber-300' : 'text-slate-500'}`} />
                      </div>
                      <span className="text-[9px] opacity-80 block font-mono">{s.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Crop Selection */}
              <div>
                <label className="text-xs font-mono font-bold text-verda-800 uppercase tracking-wider block mb-2">
                  3. Select Preferred Crops
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {cropOptions.map((c) => {
                    const isSelected = selectedCrops.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        onClick={() => handleToggleCrop(c.id)}
                        className={`p-2.5 rounded-xl text-left text-xs transition-all flex items-center gap-2 ${
                          isSelected
                            ? 'bg-verda-100 border-2 border-verda-600 text-verda-950 font-bold'
                            : 'bg-[#E8E5E5] border border-[#DCD7D7] text-slate-800 hover:text-slate-950'
                        }`}
                      >
                        <span className="text-base">{c.icon}</span>
                        <span className="line-clamp-1">{c.name}</span>
                        {isSelected && <Check className="w-3 h-3 text-verda-700 ml-auto shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-[#DCD7D7] text-[11px] text-slate-600 font-mono flex items-center justify-between font-medium">
              <span>Scientific yield models applied</span>
              <span className="text-verda-800 font-bold">100% Organic Estimates</span>
            </div>
          </div>

          {/* Right: Calculated Yield */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-verda-500 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DCD7D7] mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-verda-800 uppercase">
                    Calculated Potential
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
                    Your Organic Harvest Projection
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-verda-600 text-white flex items-center justify-center font-bold shadow-xs">
                  🌿
                </div>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                
                {/* Monthly Yield */}
                <div className="p-4 rounded-2xl bg-[#E8E5E5] border border-[#DCD7D7] flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-verda-800 font-bold uppercase">
                    Monthly Fresh Yield
                  </span>
                  <div className="my-2">
                    <span className="text-3xl font-black font-mono text-slate-900">
                      {monthlyYieldKg}
                    </span>
                    <span className="text-xs text-verda-800 font-mono ml-1 font-bold">kg/mo</span>
                  </div>
                  <span className="text-[10px] text-slate-600 font-medium">
                    ~{(monthlyYieldKg * 2.2).toFixed(1)} lbs pesticide-free
                  </span>
                </div>

                {/* Annual Savings */}
                <div className="p-4 rounded-2xl bg-[#fdf6e7] border border-[#e8d5b5] flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-amber-800 font-bold uppercase">
                    Annual Grocery Savings
                  </span>
                  <div className="my-2">
                    <span className="text-3xl font-black font-mono text-amber-800">
                      ₹{annualSavingsRs.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-600 font-medium">
                    Avoids retail organic markups
                  </span>
                </div>

                {/* CO2 Offset */}
                <div className="p-4 rounded-2xl bg-[#eef8f6] border border-[#c4e8e0] flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-cyan-800 font-bold uppercase">
                    CO2 Offset / Year
                  </span>
                  <div className="my-2">
                    <span className="text-3xl font-black font-mono text-cyan-800">
                      {carbonOffsetKg}
                    </span>
                    <span className="text-xs text-cyan-800 font-mono ml-1 font-bold">kg</span>
                  </div>
                  <span className="text-[10px] text-slate-600 font-medium">
                    Zero food packaging waste
                  </span>
                </div>

              </div>

              {/* Recommended Starter Bundle */}
              <div className="p-4 rounded-2xl bg-[#E8E5E5] border border-[#DCD7D7]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-verda-600" />
                    <span>Recommended Vaibhav Nursery Kit:</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-verda-800">
                    {areaSize <= 100 ? 'Urban Balcony Starter' : 'Complete Rooftop Terrace Suite'}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Includes {Math.ceil(areaSize / 25)}x Heavy-Duty Grow Bags, 10kg Enriched Vermicompost, Cold-Pressed Neem Foliar Spray, and {selectedCrops.length * 2} Heirloom Seed Packets.
                </p>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-[#DCD7D7] flex items-center justify-between">
              <span className="text-xs text-slate-600 font-mono font-medium">Ready to get started?</span>
              <button
                onClick={() => {
                  playSoftClick();
                  const el = document.querySelector('#marketplace');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-xs hover:scale-105 transition-transform flex items-center gap-2 shadow-sm"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Order Starter Input Kit</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
