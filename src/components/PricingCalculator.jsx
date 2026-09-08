import React, { useState } from 'react';
import { Calculator, Check, Zap, Sparkles, ShieldCheck, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function PricingCalculator({ onSelectPackageQuote }) {
  const [videoFormat, setVideoFormat] = useState('youtube');
  const [quantity, setQuantity] = useState(1);
  const [turnaround, setTurnaround] = useState('standard');
  const [selectedAddons, setSelectedAddons] = useState(['sound', 'captions']);

  const formatPricing = {
    'short-form': { name: 'Viral Short-Form (Reel / TikTok / Short)', base: 150, days: 2 },
    'youtube': { name: 'YouTube Video (8-15 Minutes)', base: 450, days: 4 },
    'commercial': { name: 'Commercial / SaaS Launch Promo', base: 850, days: 5 },
    'documentary': { name: 'Long-Form Story Documentary (20m+)', base: 1100, days: 7 }
  };

  const quantityDiscounts = {
    1: { discount: 0, label: '1 Video (Standard)' },
    4: { discount: 0.10, label: '4 Videos (10% Batch Discount)' },
    8: { discount: 0.15, label: '8 Videos (15% Volume Discount)' },
    12: { discount: 0.20, label: '12 Videos (20% Retainer Discount)' }
  };

  const turnaroundOptions = {
    'standard': { name: 'Standard Delivery', extra: 0, daysModifier: 0 },
    'express': { name: 'Express Delivery (48h Queue Jump)', extra: 100, daysModifier: -2 },
    'rush': { name: 'Emergency 24h Rush', extra: 250, daysModifier: -3 }
  };

  const addonsList = [
    { id: 'captions', name: 'Viral Word-by-Word Motion Captions', price: 50 },
    { id: 'sound', name: 'Layered Custom SFX & Sound Design (100+ tracks)', price: 90 },
    { id: 'motion3d', name: '3D Motion Graphics, Maps & HUD Elements', price: 150 },
    { id: 'thumbnail', name: 'High-CTR YouTube Thumbnail Design (2 Variations)', price: 80 },
    { id: 'script', name: 'Script Polish & Retention Storyboard Audit', price: 120 },
    { id: 'projectFiles', name: 'Full Raw Premiere / DaVinci Project Files Master', price: 100 }
  ];

  const toggleAddon = (id) => {
    soundEngine.playClick();
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate pricing
  const baseRate = formatPricing[videoFormat].base;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = addonsList.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const rawPerVideo = baseRate + addonsTotal;
  const discountMultiplier = 1 - quantityDiscounts[quantity].discount;
  const totalBase = (rawPerVideo * quantity) * discountMultiplier;
  const turnaroundFee = turnaroundOptions[turnaround].extra * (quantity === 1 ? 1 : Math.ceil(quantity * 0.5));
  const finalPrice = Math.round(totalBase + turnaroundFee);
  const totalSavings = Math.round((rawPerVideo * quantity) * quantityDiscounts[quantity].discount);

  const baseDays = Math.max(1, formatPricing[videoFormat].days + (quantity > 1 ? Math.floor(quantity * 0.6) : 0) + turnaroundOptions[turnaround].daysModifier);

  const handleBookEstimate = () => {
    soundEngine.playImpact();
    const config = {
      formatName: formatPricing[videoFormat].name,
      quantity,
      turnaroundName: turnaroundOptions[turnaround].name,
      addons: selectedAddons.map(id => addonsList.find(a => a.id === id)?.name).filter(Boolean),
      estimatedPrice: finalPrice,
      estimatedDays: baseDays
    };
    onSelectPackageQuote(config);
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#08080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Customize Your Project &{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-emerald-400 bg-clip-text text-transparent">
              Instant Estimate
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Configure your video parameters, turnaround speed, and custom add-ons for a transparent real-time quote with zero hidden surprises.
          </p>
        </div>

        {/* Two-Column Interactive Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Form Options (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-7">
            
            {/* Step 1: Select Format */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan mb-3">
                1. Select Video Format
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(formatPricing).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => {
                      soundEngine.playClick();
                      setVideoFormat(key);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      videoFormat === key
                        ? 'bg-brand-cyan/15 border-brand-cyan text-white shadow-md shadow-brand-cyan/20'
                        : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold font-display">{val.name}</div>
                    <div className="text-[11px] font-mono text-emerald-400 mt-1">Starting from ${val.base}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Quantity / Volume */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan">
                  2. Select Video Batch Volume
                </label>
                {quantity > 1 && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                    Save {quantityDiscounts[quantity].discount * 100}% on batch
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[1, 4, 8, 12].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      soundEngine.playClick();
                      setQuantity(num);
                    }}
                    className={`py-3 px-2 rounded-xl border text-center transition-all ${
                      quantity === num
                        ? 'bg-brand-violet/20 border-brand-violet text-white font-bold shadow-md shadow-brand-violet/20'
                        : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="text-sm font-display font-bold">{num} {num === 1 ? 'Video' : 'Videos'}</div>
                    <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                      {quantityDiscounts[num].discount > 0 ? `-${quantityDiscounts[num].discount * 100}% off` : 'Single'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Turnaround Speed */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan mb-3">
                3. Desired Turnaround Speed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {Object.entries(turnaroundOptions).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => {
                      soundEngine.playClick();
                      setTurnaround(key);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      turnaround === key
                        ? 'bg-amber-500/15 border-amber-400 text-white shadow-md shadow-amber-500/20'
                        : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="text-xs font-bold">{val.name}</div>
                    <div className="text-[11px] font-mono text-amber-300 mt-1">
                      {val.extra === 0 ? 'Standard Rate (+$0)' : `+$${val.extra}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-Ons */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan mb-3">
                4. Custom Polish & Production Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-start justify-between gap-2 transition-all ${
                        isChecked
                          ? 'bg-white/[0.08] border-brand-cyan/60 text-white'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                          isChecked ? 'bg-brand-cyan border-brand-cyan text-slate-950' : 'border-slate-600'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium text-slate-200">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-bold shrink-0">
                        +${addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Calculated Receipt & Booking Trigger (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-brand-cyan/30 shadow-2xl relative sticky top-28 bg-gradient-to-b from-[#141224] to-[#0c0b15]">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">ESTIMATE BREAKDOWN</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                GUARANTEED FIXED QUOTE
              </span>
            </div>

            {/* Receipt Items */}
            <div className="py-5 space-y-3 font-mono text-xs text-slate-300">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Base Type:</span>
                <span className="text-white font-bold">{formatPricing[videoFormat].name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Volume:</span>
                <span className="text-white font-bold">{quantity} {quantity === 1 ? 'Video' : 'Videos'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Delivery Tier:</span>
                <span className="text-amber-300 font-bold">{turnaroundOptions[turnaround].name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Add-ons Selected:</span>
                <span className="text-brand-cyan font-bold">{selectedAddons.length} Applied</span>
              </div>

              {totalSavings > 0 && (
                <div className="flex justify-between items-center text-emerald-400 font-bold pt-2 border-t border-white/5">
                  <span>Batch Volume Discount:</span>
                  <span>-${totalSavings}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-slate-400 pt-2 border-t border-white/5">
                <span>Est. Delivery Timeframe:</span>
                <span className="text-white font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                  ~{baseDays} {baseDays === 1 ? 'Day' : 'Days'}
                </span>
              </div>
            </div>

            {/* Big Total Price Box */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 text-center mb-6">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Total Estimated Investment
              </div>
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-white flex items-center justify-center gap-1">
                <span className="text-brand-cyan text-2xl sm:text-3xl">$</span>
                <span>{finalPrice.toLocaleString()}</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-2">
                Includes 2 free revision rounds & Frame.io master delivery
              </div>
            </div>

            {/* Book This Package Button */}
            <button
              onClick={handleBookEstimate}
              className="w-full py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-brand-cyan via-[#b5179e] to-brand-violet hover:from-white hover:to-brand-cyan transition-all duration-300 shadow-xl shadow-brand-cyan/30 flex items-center justify-center gap-2 group"
            >
              <span>Lock In This Package (${finalPrice.toLocaleString()})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Guarantees Strip */}
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Licensed Music</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Frame.io Comments</span>
              </div>
            </div>

          </div>

        </div>

        {/* Pre-made Service Packages Grid */}
        <div className="mt-10">
          <h3 className="text-center text-xl sm:text-2xl font-display font-bold text-white mb-8">
            Or Choose A Fixed Retainer Tier
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.services.map((service) => (
              <div
                key={service.id}
                className={`glass-card rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  service.popular
                    ? 'border-brand-cyan/60 bg-gradient-to-b from-[#17152b] to-[#0e0d18] shadow-xl shadow-brand-cyan/15 relative'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-cyan text-slate-950 font-mono text-[10px] font-bold tracking-wider uppercase shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1">{service.bestFor}</div>
                  <h4 className="text-lg font-display font-bold text-white mb-2">{service.title}</h4>
                  
                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-xs font-mono text-slate-400">From</span>
                    <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">{service.priceStarting}</span>
                  </div>

                  <div className="text-xs font-mono text-amber-300 mb-5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Turnaround: {service.turnaround}</span>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-slate-300">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundEngine.playImpact();
                    onSelectPackageQuote({
                      formatName: service.title,
                      quantity: 1,
                      turnaroundName: service.turnaround,
                      addons: [],
                      estimatedPrice: service.priceStarting,
                      estimatedDays: service.turnaround
                    });
                  }}
                  className={`mt-6 w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    service.popular
                      ? 'bg-gradient-to-r from-brand-cyan to-brand-violet text-slate-950 hover:brightness-110 shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <span>Select Package</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
