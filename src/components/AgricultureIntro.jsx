import React, { useState } from 'react';
import { 
  Sprout, 
  Droplets, 
  Wheat, 
  TrendingUp, 
  Users, 
  Sparkles, 
  HeartHandshake, 
  RotateCcw, 
  SunMedium 
} from 'lucide-react';
import { AGRICULTURE_FOUNDATION } from '../data/verdaData';
import { playWaterDrop, playSproutChime, playSoftClick } from '../utils/audio';

export default function AgricultureIntro() {
  const [growthStage, setGrowthStage] = useState(1);
  const [watering, setWatering] = useState(false);
  const [waterCount, setWaterCount] = useState(1);

  const handleWaterPlant = () => {
    if (watering) return;
    setWatering(true);
    playWaterDrop();

    setTimeout(() => {
      setWaterCount((prev) => prev + 1);
      if (growthStage < 3) {
        setGrowthStage((prev) => prev + 1);
        playSproutChime();
      }
      setWatering(false);
    }, 1100);
  };

  const handleResetPlant = () => {
    playSoftClick();
    setGrowthStage(0);
    setWaterCount(0);
  };

  const stageDescriptions = [
    { name: 'Dormant Organic Seed', tip: 'Enriched with microbial compost & moisture.', o2: '0 mg/day' },
    { name: 'Fresh Sapling Sprout', tip: 'First true leaves unfurl (as illustrated on Page 2!).', o2: '150 mg/day' },
    { name: 'Vigorous Vegetative Growth', tip: 'Photosynthesis active, roots establishing bio-network.', o2: '480 mg/day' },
    { name: 'Lush Organic Flora', tip: 'Full foliage bloom releasing fresh oxygen & ready to harvest!', o2: '1,200 mg/day' }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#E8E5E5] border-t border-[#DCD7D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Agriculture: The Bedrock of Life
          </h2>
          <p className="mt-4 text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
            {AGRICULTURE_FOUNDATION.quote}
          </p>
        </div>

        {/* Interactive Plant Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] border-2 border-[#DCD7D7] rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#DCD7D7] mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-verda-800 uppercase tracking-wider">
                    Interactive Living Plant
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Water the Sapling
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#dff2e3] text-verda-900 font-bold border border-[#a8d6b1] font-mono">
                    Nourished: {waterCount}x
                  </span>
                  {growthStage > 0 && (
                    <button
                      onClick={handleResetPlant}
                      className="p-1.5 rounded-lg bg-[#E8E5E5] text-slate-700 hover:text-slate-900 transition-colors"
                      title="Reset seed"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Visual Scene */}
              <div className="relative h-72 sm:h-80 rounded-2xl bg-gradient-to-b from-[#f5ecd0] via-[#ece0b8] to-[#decfa0] border border-[#cfc190] flex items-center justify-center overflow-hidden select-none">
                
                {/* Background Sunlight */}
                <div className="absolute top-3 right-5 text-amber-500/40 animate-pulse">
                  <SunMedium className="w-14 h-14 sm:w-16 sm:h-16" />
                </div>

                {/* Ambient floating garden dust */}
                <div className="absolute top-8 left-10 w-2 h-2 rounded-full bg-amber-400/30 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute top-20 right-16 w-1.5 h-1.5 rounded-full bg-amber-400/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />

                {/* Coordinated Plant & Watering Can Stage */}
                <div className="relative w-72 sm:w-80 h-full flex flex-col items-center justify-end pb-4">

                  {/* Animated Watering Can */}
                  <div 
                    className={`absolute z-20 transition-all duration-500 ease-out pointer-events-none ${
                      watering 
                        ? 'top-8 left-1/2 -translate-x-[68px] -rotate-[36deg] scale-110' 
                        : 'top-6 left-1/2 -translate-x-[95px] -rotate-6 animate-float-slow'
                    }`}
                    style={{ transformOrigin: '30% 65%' }}
                  >
                    <svg viewBox="0 0 100 80" className="w-20 h-16 drop-shadow-lg">
                      <path d="M25 30 L65 30 L60 70 L30 70 Z" fill="#d07849" stroke="#783827" strokeWidth="2.5" />
                      <path d="M60 45 L85 25 L88 30 L62 55 Z" fill="#d07849" stroke="#783827" strokeWidth="2.5" />
                      {/* Metallic spout rose nozzle */}
                      <ellipse cx="86" cy="27" rx="5" ry="8" fill="#5e2b1d" stroke="#361611" strokeWidth="1" transform="rotate(30 86 27)" />
                      {/* Handle */}
                      <path d="M25 35 Q8 40 8 55 Q8 68 30 68" fill="none" stroke="#783827" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Water Flow Stream & Droplets Pouring Directly Down Onto the Plant */}
                  {watering && (
                    <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-36 h-48 z-25 pointer-events-none flex justify-center">
                      <svg viewBox="0 0 100 160" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="waterStreamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
                            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.85" />
                            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.3" />
                          </linearGradient>
                          <linearGradient id="waterDropGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#bae6fd" stopOpacity="1" />
                            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
                          </linearGradient>
                          <filter id="waterGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="1" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>

                        {/* Core center water stream falling right onto the seed / stem */}
                        <path d="M50 0 Q50 65 50 145" stroke="url(#waterStreamGrad)" strokeWidth="3.5" fill="none" strokeLinecap="round" className="animate-water-stream" filter="url(#waterGlowFilter)" />
                        
                        {/* Left & Right spreading streams to water the full plant & soil */}
                        <path d="M48 2 Q42 60 38 140" stroke="url(#waterStreamGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" className="animate-water-stream" style={{ animationDelay: '80ms' }} />
                        <path d="M52 2 Q58 60 62 142" stroke="url(#waterStreamGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" className="animate-water-stream" style={{ animationDelay: '160ms' }} />
                        
                        {/* Outer spray mist streams */}
                        <path d="M46 4 Q35 55 28 135" stroke="url(#waterStreamGrad)" strokeWidth="1.8" fill="none" strokeLinecap="round" className="animate-water-stream" style={{ animationDelay: '120ms' }} />
                        <path d="M54 4 Q65 55 72 137" stroke="url(#waterStreamGrad)" strokeWidth="1.8" fill="none" strokeLinecap="round" className="animate-water-stream" style={{ animationDelay: '200ms' }} />

                        {/* Cascading Water Droplets falling straight down into foliage and soil */}
                        <circle cx="50" cy="12" r="3.2" fill="url(#waterDropGlow)" className="animate-droplet-shower" style={{ animationDelay: '0ms' }} />
                        <circle cx="44" cy="20" r="2.8" fill="url(#waterDropGlow)" className="animate-droplet-shower" style={{ animationDelay: '90ms' }} />
                        <circle cx="56" cy="16" r="2.8" fill="url(#waterDropGlow)" className="animate-droplet-shower" style={{ animationDelay: '180ms' }} />
                        <circle cx="50" cy="30" r="3.4" fill="url(#waterDropGlow)" className="animate-droplet-shower" style={{ animationDelay: '270ms' }} />
                        <circle cx="38" cy="24" r="2.4" fill="url(#waterDropGlow)" className="animate-droplet-shower" style={{ animationDelay: '360ms' }} />
                        <circle cx="62" cy="22" r="2.6" fill="url(#waterDropGlow)" className="animate-droplet-shower" style={{ animationDelay: '450ms' }} />
                        <circle cx="52" cy="38" r="3.0" fill="url(#waterDropGlow)" className="animate-droplet-shower" style={{ animationDelay: '540ms' }} />
                      </svg>
                    </div>
                  )}

                  {/* Growing Potted Plant */}
                  <div className="relative z-10 flex flex-col items-center">
                    
                    {/* Plant Foliage & Growth Stages */}
                    <div className={`relative mb-[-6px] transition-all duration-500 ${watering ? 'scale-105' : 'scale-100'}`}>
                      
                      {/* Hydration Sparkles when watering */}
                      {watering && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-30">
                          <span className="absolute -left-6 top-2 text-xs animate-bounce" style={{ animationDuration: '0.6s' }}>✨</span>
                          <span className="absolute -right-6 top-1 text-xs animate-bounce" style={{ animationDuration: '0.7s', animationDelay: '120ms' }}>✨</span>
                          <span className="absolute -top-5 px-2 py-0.5 rounded-full bg-cyan-600/90 text-white font-mono text-[9px] font-bold shadow-xs animate-pulse">
                            💧 +Hydration
                          </span>
                        </div>
                      )}

                      {growthStage === 0 && (
                        <div className="relative w-10 h-10 flex items-center justify-center text-earth-800 animate-pulse">
                          <span className="text-2xl drop-shadow-sm">🌰</span>
                          {watering && (
                            <span className="absolute -top-1 left-2 text-xs animate-ping">💧</span>
                          )}
                        </div>
                      )}

                      {growthStage === 1 && (
                        <svg viewBox="0 0 80 90" className="w-20 h-24 sm:w-24 sm:h-28 animate-grow drop-shadow-sm">
                          <path d="M40 85 Q40 50 40 20" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" fill="none" />
                          <path d="M40 70 C25 65 20 50 22 45 C28 55 35 65 40 70 Z" fill="#84cc16" stroke="#15803d" strokeWidth="1.5" />
                          <path d="M40 65 C55 60 60 45 58 40 C52 50 45 60 40 65 Z" fill="#4ade80" stroke="#15803d" strokeWidth="1.5" />
                          <path d="M40 45 C28 40 25 28 27 24 C33 32 38 40 40 45 Z" fill="#84cc16" stroke="#15803d" strokeWidth="1.5" />
                          <path d="M40 40 C52 35 55 23 53 19 C47 27 42 35 40 40 Z" fill="#4ade80" stroke="#15803d" strokeWidth="1.5" />
                          <path d="M40 20 C35 10 40 5 40 5 C40 5 45 10 40 20 Z" fill="#a3e635" stroke="#15803d" strokeWidth="1.2" />
                        </svg>
                      )}

                      {growthStage === 2 && (
                        <svg viewBox="0 0 100 110" className="w-24 h-28 sm:w-28 sm:h-32 animate-grow drop-shadow-md">
                          <path d="M50 105 Q48 60 50 15" stroke="#15803d" strokeWidth="5" strokeLinecap="round" fill="none" />
                          <path d="M50 90 C25 80 20 60 25 50 C32 65 42 80 50 90 Z" fill="#22c55e" stroke="#14532d" strokeWidth="2" />
                          <path d="M50 85 C75 75 80 55 75 45 C68 60 58 75 50 85 Z" fill="#84cc16" stroke="#14532d" strokeWidth="2" />
                          <path d="M50 60 C30 50 25 35 30 28 C38 40 45 52 50 60 Z" fill="#4ade80" stroke="#14532d" strokeWidth="1.8" />
                          <path d="M50 55 C70 45 75 30 70 23 C62 35 55 47 50 55 Z" fill="#84cc16" stroke="#14532d" strokeWidth="1.8" />
                          <path d="M50 30 C38 20 38 10 42 8 C48 18 48 24 50 30 Z" fill="#a3e635" stroke="#14532d" strokeWidth="1.5" />
                          <path d="M50 28 C62 18 62 8 58 6 C52 16 52 22 50 28 Z" fill="#a3e635" stroke="#14532d" strokeWidth="1.5" />
                        </svg>
                      )}

                      {growthStage === 3 && (
                        <svg viewBox="0 0 120 130" className="w-28 h-32 sm:w-32 sm:h-36 animate-grow drop-shadow-lg">
                          <path d="M60 125 Q58 70 60 10" stroke="#166534" strokeWidth="6" strokeLinecap="round" fill="none" />
                          <path d="M60 105 C25 90 15 65 22 50 C32 70 48 95 60 105 Z" fill="#16a34a" stroke="#052e16" strokeWidth="2" />
                          <path d="M60 100 C95 85 105 60 98 45 C88 65 72 90 60 100 Z" fill="#22c55e" stroke="#052e16" strokeWidth="2" />
                          <path d="M60 70 C30 55 25 35 32 25 C42 42 52 60 60 70 Z" fill="#84cc16" stroke="#052e16" strokeWidth="2" />
                          <path d="M60 65 C90 50 95 30 88 20 C78 37 68 55 60 65 Z" fill="#84cc16" stroke="#052e16" strokeWidth="2" />
                          <circle cx="38" cy="65" r="9" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
                          <circle cx="36" cy="63" r="2" fill="#fca5a5" />
                          <circle cx="82" cy="60" r="9" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
                          <circle cx="80" cy="58" r="2" fill="#fca5a5" />
                          <circle cx="60" cy="35" r="8" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
                        </svg>
                      )}
                    </div>

                    {/* Terracotta Plant Pot with Soil Rim & Ripple Effect */}
                    <div className="relative">
                      <svg viewBox="0 0 80 50" className="w-22 h-14 sm:w-24 sm:h-15 drop-shadow-md">
                        <rect x="10" y="2" width="60" height="10" rx="3" fill="#dc9970" stroke="#783827" strokeWidth="2" />
                        <path d="M15 12 L65 12 L58 48 L22 48 Z" fill="#c2410c" stroke="#783827" strokeWidth="2" />
                        <ellipse cx="40" cy="12" rx="22" ry="4" fill="#361611" />
                      </svg>

                      {/* Soil Water Ripple & Splashes when watering */}
                      {watering && (
                        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-14 h-4 pointer-events-none flex items-center justify-center">
                          <span className="absolute w-12 h-3.5 rounded-[100%] border-2 border-cyan-400 bg-cyan-300/30 animate-soil-ripple" />
                          <span className="absolute w-8 h-2.5 rounded-[100%] border border-cyan-200 bg-cyan-200/20 animate-soil-ripple" style={{ animationDelay: '200ms' }} />
                          <span className="absolute -top-2 left-3 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-splash-burst" />
                          <span className="absolute -top-2.5 right-3 w-1.5 h-1.5 rounded-full bg-cyan-200 animate-splash-burst" style={{ animationDelay: '150ms' }} />
                        </div>
                      )}
                    </div>
                  </div>

                </div>

              </div>

              {/* Plant Status Info */}
              <div className="mt-5 p-4 rounded-2xl bg-[#E8E5E5] border border-[#DCD7D7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">
                      {stageDescriptions[growthStage].name}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#dff2e3] text-verda-900 font-bold font-mono">
                      Stage {growthStage + 1}/4
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 mt-0.5 font-medium">
                    {stageDescriptions[growthStage].tip}
                  </p>
                </div>

                <button
                  onClick={handleWaterPlant}
                  disabled={watering}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <Droplets className={`w-4 h-4 ${watering ? 'animate-spin' : ''}`} />
                  <span>{watering ? 'Nourishing...' : 'Water Sapling'}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: 4 Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="text-xl font-black text-slate-900 font-display flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-verda-700" />
              <span>Why Agriculture Drives Everything</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AGRICULTURE_FOUNDATION.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#DCD7D7] hover:border-verda-500 hover:shadow-md transition-all duration-300 group shadow-xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#dff2e3] border border-[#b8dfc0] flex items-center justify-center text-verda-800 group-hover:scale-110 group-hover:bg-verda-200 transition-all">
                      {pillar.id === 'food-security' && <Wheat className="w-5 h-5" />}
                      {pillar.id === 'economic-growth' && <TrendingUp className="w-5 h-5" />}
                      {pillar.id === 'livelihoods' && <Users className="w-5 h-5" />}
                      {pillar.id === 'ecological-balance' && <Sprout className="w-5 h-5" />}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#E8E5E5] text-slate-800 border border-[#DCD7D7]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-base group-hover:text-verda-800 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-700 mt-2 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#DCD7D7] flex items-center gap-3.5 mt-2 shadow-xs">
              <HeartHandshake className="w-6 h-6 text-earth-700 shrink-0" />
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                <strong className="text-earth-800 font-bold">Vaibhav Nursery's Philosophy:</strong> By merging ancient soil stewardship with modern mobile guidance, we make sustainable agriculture and plant care accessible to everyone—from high-rise balcony growers to multi-acre organic farmers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
