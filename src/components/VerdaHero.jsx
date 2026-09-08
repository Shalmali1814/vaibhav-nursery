import React, { useState } from 'react';
import { 
  Sprout, 
  Smartphone, 
  ShoppingBag, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Droplets, 
  Sun, 
  Flame, 
  MessageSquareHeart 
} from 'lucide-react';
import { VERDA_METRICS } from '../data/verdaData';
import { playSproutChime, playSoftClick } from '../utils/audio';

export default function VerdaHero({ onOpenAppDemo, onOpenPlantDoctor, onOpenStore }) {
  const [mascotMood, setMascotMood] = useState('happy');
  const [tipIndex, setTipIndex] = useState(0);

  const mascotTips = [
    "Hi there! I'm Verdi, your Vaibhav Nursery plant care companion! 🌱 Click me for quick tips!",
    "Did you know? Adding a pinch of cinnamon powder to seed soil stops fungal damping-off naturally! ✨",
    "Want more oxygen in your bedroom? The Snake Plant releases fresh O2 through the night! 🪴",
    "Terrace gardening with Vaibhav Nursery can save up to ₹30,000/yr on organic groceries while restoring soil! 🍅",
    "Got a sick leaf? Use our AI Plant Doctor scanner to diagnose it in under 3 seconds! 🔍"
  ];

  const handleMascotClick = () => {
    playSproutChime();
    setTipIndex((prev) => (prev + 1) % mascotTips.length);
    setMascotMood(mascotMood === 'happy' ? 'celebrate' : 'happy');
  };

  const scrollToSection = (selector) => {
    playSoftClick();
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#F4F2F2]">
      {/* Decorative ambient spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-verda-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-sprout-400/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-earth-300/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#DCD7D7] text-verda-800 text-xs font-bold shadow-xs backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sprout-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-verda-600" />
            </span>
            <span className="font-extrabold text-slate-900">Vaibhav Nursery Ecosystem</span>
            <span className="text-verda-600">•</span>
            <span>Premium Plants, Doorstep Natural Inputs & Terrace Gardening</span>
          </div>
        </div>

        {/* 3D Isometric Title & Mascot Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Page 1 Introduction & Actions */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            
            {/* Vaibhav Nursery Banner & Tagline */}
            <div className="relative inline-block mb-4 self-center lg:self-start">
              <h1 className="verda-3d-text text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide">
                Vaibhav Nursery
              </h1>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start -mt-1 sm:-mt-2 pb-1">
                <span className="h-0.5 w-6 sm:w-8 bg-gradient-to-r from-transparent to-verda-600 rounded-full" />
                <p className="font-chillin text-2xl sm:text-3xl lg:text-4xl text-verda-700 tracking-wide inline-block pb-1 pr-1">
                  Grow your own era
                </p>
                <span className="h-0.5 w-6 sm:w-8 bg-gradient-to-l from-transparent to-verda-600 rounded-full" />
              </div>
            </div>

            {/* Sub-headline: Official Introduction */}
            <div className="mb-6 bg-[#FFFFFF] border border-[#DCD7D7] rounded-3xl p-5 sm:p-6 shadow-md text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sprout-400/10 to-transparent pointer-events-none rounded-bl-full" />
              <div className="flex items-center gap-2 text-verda-800 text-xs font-mono font-bold uppercase tracking-widest mb-2">
                <Sprout className="w-4 h-4" />
                <span>INTRODUCTION & MISSION</span>
              </div>
              <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
                Take control of your health, food, and greenery with <strong className="text-verda-800 font-bold">Vaibhav Nursery</strong>, your dedicated platform to grow lush plants and organic crops right from your home, balcony, or farm. Whether you are a beginner or experienced grower, <strong className="text-slate-900 font-bold">Vaibhav Nursery</strong> provides you with premium saplings, certified natural inputs, and AI-powered plant care guidance for sustainable living.
              </p>
            </div>

            {/* Key Value Prop Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left text-xs sm:text-sm text-slate-800">
              <div className="flex items-center gap-2.5 bg-[#FFFFFF] border border-[#DCD7D7] rounded-xl px-3.5 py-2.5 shadow-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-verda-700 shrink-0" />
                <span><strong>Doorstep Delivery:</strong> Live plants, heirloom seeds & bio-compost</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#FFFFFF] border border-[#DCD7D7] rounded-xl px-3.5 py-2.5 shadow-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-verda-700 shrink-0" />
                <span><strong>AI Plant Doctor:</strong> Instant leaf disease diagnosis</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#FFFFFF] border border-[#DCD7D7] rounded-xl px-3.5 py-2.5 shadow-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-verda-700 shrink-0" />
                <span><strong>Terrace Companion:</strong> Automated watering calendar</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#FFFFFF] border border-[#DCD7D7] rounded-xl px-3.5 py-2.5 shadow-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-verda-700 shrink-0" />
                <span><strong>Farm Marketplace:</strong> Direct nursery pricing & quality guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-6">
              <button
                onClick={() => scrollToSection('#app-simulator')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-verda-600 via-verda-500 to-sprout-500 text-slate-950 font-bold text-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5"
              >
                <Smartphone className="w-4 h-4" />
                <span>Launch 9-Screen Mobile App Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('#marketplace')}
                className="px-6 py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#E8E5E5] border border-[#DCD7D7] text-slate-800 font-bold text-sm transition-all flex items-center gap-2 shadow-xs"
              >
                <ShoppingBag className="w-4 h-4 text-verda-700" />
                <span>Shop Plants & Organic Inputs</span>
              </button>

              <button
                onClick={() => scrollToSection('#branches')}
                className="px-4 py-3.5 rounded-xl bg-[#dff2e3] hover:bg-[#d0ebd5] border border-[#a8d6b1] text-verda-900 font-bold text-xs transition-all flex items-center gap-1.5"
              >
                <span>Explore 14 Agricultural Branches</span>
                <span>→</span>
              </button>
            </div>

            {/* Color Swatch Reference */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-[11px] text-slate-600 font-mono">
              <span className="font-semibold">Nursery Palette:</span>
              <div className="flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-sm bg-[#96dbaa] border border-[#c4bcad]" title="Sprout Leaf #96dbaa" />
                <span className="w-3.5 h-3.5 rounded-sm bg-[#38a85a] border border-[#c4bcad]" title="Botanical Emerald #38a85a" />
                <span className="w-3.5 h-3.5 rounded-sm bg-[#1d5530] border border-[#c4bcad]" title="Forest Green #1d5530" />
                <span className="w-3.5 h-3.5 rounded-sm bg-[#d07849] border border-[#c4bcad]" title="Warm Earth #d07849" />
                <span className="w-3.5 h-3.5 rounded-sm bg-[#643125] border border-[#c4bcad]" title="Wood Bark #643125" />
              </div>
              <span className="text-[10px] ml-1">(Eco-Botanical Theme)</span>
            </div>
          </div>

          {/* Right Column: Interactive Mascot "Verdi" Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-[#FFFFFF] border-2 border-[#DCD7D7] rounded-3xl p-6 sm:p-8 shadow-lg overflow-hidden group">

              {/* Illustrated Mascot Verdi */}
              <div 
                onClick={handleMascotClick}
                className="relative py-2 flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95"
                title="Tap Verdi for organic gardening wisdom!"
              >
                <div className="relative w-48 h-64 sm:w-52 sm:h-72 flex items-center justify-center">
                  <img 
                    src="/mascot.png" 
                    alt="Vaibhav Nursery Mascot" 
                    className="w-full h-full object-contain drop-shadow-xl animate-float"
                  />

                  <div className="absolute top-2 right-4 text-sprout-600 animate-spin" style={{ animationDuration: '8s' }}>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-6 left-2 text-earth-600 animate-bounce">
                    <Droplets className="w-4 h-4" />
                  </div>
                </div>

                <span className="font-chillin text-3xl sm:text-4xl text-slate-900 mt-2">
                  Meet "Verdi"
                </span>
                <span className="text-xs text-verda-800 font-mono font-bold">
                  Your Vaibhav Nursery Companion
                </span>
              </div>

              {/* Dynamic Interactive Speech Bubble */}
              <div className="mt-3 p-4 rounded-2xl bg-[#E8E5E5] border border-[#DCD7D7] relative shadow-xs">
                <div className="flex items-start gap-2.5">
                  <MessageSquareHeart className="w-5 h-5 text-verda-700 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                    {mascotTips[tipIndex]}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#DCD7D7] text-[10px] text-verda-900 font-mono font-semibold">
                  <span>Tip {tipIndex + 1} of {mascotTips.length}</span>
                  <button 
                    onClick={handleMascotClick}
                    className="text-verda-800 hover:text-slate-950 font-bold underline"
                  >
                    Next Wisdom →
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button
                  onClick={() => scrollToSection('#app-simulator')}
                  className="py-2.5 px-3 rounded-xl bg-verda-700 hover:bg-verda-800 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Try Mobile App</span>
                </button>
                <button
                  onClick={() => scrollToSection('#calculator')}
                  className="py-2.5 px-3 rounded-xl bg-earth-700 hover:bg-earth-800 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Yield Calculator</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VERDA_METRICS.map((metric, idx) => (
            <div 
              key={idx}
              className="bg-[#FFFFFF] border border-[#DCD7D7] rounded-2xl p-4 sm:p-5 shadow-xs hover:border-verda-600 transition-all group"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black font-display text-verda-800 group-hover:text-verda-600 transition-colors">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                  {metric.label}
                </span>
                <span className="text-[11px] text-slate-600 font-mono mt-0.5 font-medium">
                  {metric.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
