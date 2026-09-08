import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Flame, TrendingUp, CheckCircle2, Zap, ArrowDown, Scissors, Film, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function Hero({ onOpenShowreel, onOpenQuote }) {
  const [timecode, setTimecode] = useState('00:01:24:18');

  // Realistic rolling timecode effect
  useEffect(() => {
    let frame = 18;
    let sec = 24;
    let min = 1;
    let hour = 0;

    const interval = setInterval(() => {
      frame++;
      if (frame >= 30) {
        frame = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
          if (min >= 60) {
            min = 0;
            hour++;
          }
        }
      }
      const pad = (num) => String(num).padStart(2, '0');
      setTimecode(`${pad(hour)}:${pad(min)}:${pad(sec)}:${pad(frame)}`);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getMetricIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-brand-cyan" />;
      case 'Zap': return <Zap className="w-5 h-5 text-brand-violet" />;
      default: return <Award className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-violet/20 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-brand-cyan/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[300px] bg-brand-pink/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top HUD Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span className="text-red-400 font-bold">REC</span>
            <span className="text-slate-500">|</span>
            <span className="text-brand-cyan font-bold tracking-wider">{timecode}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/30 text-xs font-mono text-brand-violet backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-violet" />
            <span className="font-semibold text-slate-200">4K 60FPS • Apple ProRes & RED RAW</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5" />
            <span className="font-semibold">Top 1% Retention Pacing</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
            Transforming Raw Footage Into{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-[#c77dff] to-brand-pink bg-clip-text text-transparent drop-shadow-sm">
              Viral Masterpieces
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            I help top YouTubers, venture-backed startups, and DTC brands turn passive scrollers into obsessed fans with frame-accurate retention editing, 3D motion design, and immersive soundscapes.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            {/* Showreel Button */}
            <button
              onClick={() => {
                soundEngine.playWhoosh();
                onOpenShowreel();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-brand-cyan to-brand-violet hover:from-white hover:to-brand-cyan transition-all duration-300 shadow-xl shadow-brand-cyan/25 flex items-center justify-center gap-3 group"
            >
              <div className="w-7 h-7 rounded-full bg-slate-950/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-slate-950 fill-slate-950 translate-x-0.5" />
              </div>
              <span>Watch 2025 Showreel</span>
            </button>

            {/* Pricing Calculator Trigger */}
            <button
              onClick={() => {
                soundEngine.playImpact();
                onOpenQuote();
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-brand-cyan/50 backdrop-blur-md transition-all flex items-center justify-center gap-2 group"
            >
              <Zap className="w-4 h-4 text-brand-cyan group-hover:rotate-12 transition-transform" />
              <span>Calculate Project Cost</span>
            </button>

            {/* Scroll Down Link */}
            <a
              href="#showcase"
              onClick={() => soundEngine.playClick()}
              className="w-full sm:w-auto px-5 py-4 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>

        {/* Interactive Video Editor Timeline Mockup Strip */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-[#0e0d17]/80 border border-white/10 p-3 sm:p-5 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          {/* Top timeline bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-brand-cyan" />
              <span className="text-white font-semibold">MASTER_TIMELINE_V04.prproj</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-brand-violet/20 text-brand-violet text-[10px]">60.00 FPS</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-brand-cyan font-bold">{timecode}</span>
              <span className="hidden md:inline text-slate-500">|</span>
              <span className="hidden md:inline text-emerald-400">4K DCI (4096x2160)</span>
            </div>
          </div>

          {/* Simulated Multi-Track Timeline */}
          <div className="space-y-1.5 font-mono text-[11px] select-none">
            {/* Track V3 (Motion/Gfx) */}
            <div className="flex items-center gap-2">
              <span className="w-8 text-slate-500 font-bold">V3</span>
              <div className="flex-1 h-6 bg-slate-900/90 rounded border border-white/5 relative overflow-hidden flex gap-1 p-0.5">
                <div className="w-[18%] h-full bg-pink-600/60 rounded px-2 flex items-center text-white text-[10px] truncate">3D HUD Callout</div>
                <div className="w-[32%] h-full bg-pink-500/40 rounded px-2 flex items-center text-white text-[10px] truncate">Kinetic Captions (Karaoke)</div>
                <div className="w-[20%] h-full bg-pink-600/60 rounded px-2 flex items-center text-white text-[10px] truncate">Lower Thirds</div>
                <div className="w-[26%] h-full bg-pink-500/50 rounded px-2 flex items-center text-white text-[10px] truncate">Endscreen CTA</div>
              </div>
            </div>

            {/* Track V2 (B-Roll & Overlays) */}
            <div className="flex items-center gap-2">
              <span className="w-8 text-slate-500 font-bold">V2</span>
              <div className="flex-1 h-6 bg-slate-900/90 rounded border border-white/5 relative overflow-hidden flex gap-1 p-0.5">
                <div className="w-[28%] h-full bg-violet-600/60 rounded px-2 flex items-center text-white text-[10px] truncate">Cinematic Drone 4K</div>
                <div className="w-[22%] h-full bg-violet-500/50 rounded px-2 flex items-center text-white text-[10px] truncate">Archive Footage</div>
                <div className="w-[34%] h-full bg-violet-600/70 rounded px-2 flex items-center text-white text-[10px] truncate">Macro Product Macro 120fps</div>
                <div className="w-[12%] h-full bg-violet-500/40 rounded px-2 flex items-center text-white text-[10px] truncate">Logo Reveal</div>
              </div>
            </div>

            {/* Track V1 (A-Roll Primary) */}
            <div className="flex items-center gap-2">
              <span className="w-8 text-slate-500 font-bold">V1</span>
              <div className="flex-1 h-7 bg-slate-900/90 rounded border border-white/5 relative overflow-hidden flex gap-1 p-0.5">
                <div className="w-[100%] h-full bg-cyan-600/60 rounded px-2 flex items-center text-white text-[10px] justify-between font-bold">
                  <span>A-Roll Cam A (S-Log3 to Rec709 Graded)</span>
                  <span className="text-[9px] bg-black/40 px-1.5 py-0.5 rounded text-cyan-300">Sync Audio</span>
                </div>
              </div>
            </div>

            {/* Track A1 & A2 (Sound FX & Music) */}
            <div className="flex items-center gap-2">
              <span className="w-8 text-slate-500 font-bold">A1-4</span>
              <div className="flex-1 h-6 bg-slate-900/90 rounded border border-white/5 relative overflow-hidden flex gap-1 p-0.5">
                <div className="w-[15%] h-full bg-emerald-700/60 rounded px-1.5 flex items-center text-emerald-200 text-[9px] truncate">Whoosh.wav</div>
                <div className="w-[20%] h-full bg-blue-600/60 rounded px-1.5 flex items-center text-blue-200 text-[9px] truncate">Cyber_Beat_140BPM.wav</div>
                <div className="w-[15%] h-full bg-emerald-700/60 rounded px-1.5 flex items-center text-emerald-200 text-[9px] truncate">Sub_Drop_808.wav</div>
                <div className="w-[25%] h-full bg-emerald-800/60 rounded px-1.5 flex items-center text-emerald-200 text-[9px] truncate">Foley_Keyboard.wav</div>
                <div className="w-[20%] h-full bg-emerald-700/60 rounded px-1.5 flex items-center text-emerald-200 text-[9px] truncate">Tension_Riser.wav</div>
              </div>
            </div>

            {/* Animated Playhead line */}
            <div className="absolute top-0 bottom-0 left-[35%] w-[2px] bg-brand-pink shadow-[0_0_12px_#f72585] pointer-events-none flex flex-col items-center">
              <div className="w-3 h-3 bg-brand-pink rotate-45 -mt-1 shadow-md"></div>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {PORTFOLIO_DATA.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl relative overflow-hidden group hover:border-brand-cyan/40"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform">
                  {getMetricIcon(metric.icon)}
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-300">
                  {metric.change}
                </span>
              </div>
              <div className="text-3xl font-display font-extrabold text-white group-hover:text-brand-cyan transition-colors">
                {metric.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
