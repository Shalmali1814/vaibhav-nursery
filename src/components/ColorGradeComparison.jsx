import React, { useState, useRef } from 'react';
import { Sliders, Sparkles, Eye, Layers, Palette, Check, HelpCircle, Activity } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function ColorGradeComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showScopes, setShowScopes] = useState(false);
  const containerRef = useRef(null);

  const activePreset = PORTFOLIO_DATA.colorGradingPresets[activePresetIndex];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const selectPreset = (index) => {
    soundEngine.playWhoosh();
    setActivePresetIndex(index);
  };

  return (
    <section id="color-grading" className="py-24 relative bg-[#08080c] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-brand-violet/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/30 text-xs font-mono text-brand-violet mb-4">
            <Palette className="w-3.5 h-3.5" />
            <span>STUDIO COLOR SCIENCE & ACES WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Cinematic Color Grading &{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-violet bg-clip-text text-transparent">
              VFX Breakdown
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Drag the interactive slider below to witness the transformation from flat camera LOG profiles (S-Log3 / Arri LogC) into rich, mood-defining cinema master grades.
          </p>
        </div>

        {/* Preset Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {PORTFOLIO_DATA.colorGradingPresets.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => selectPreset(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
                activePresetIndex === idx
                  ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 border-brand-cyan text-white shadow-lg shadow-brand-cyan/20'
                  : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  activePresetIndex === idx ? 'bg-brand-cyan animate-pulse' : 'bg-slate-600'
                }`}
              ></div>
              <span>{preset.name}</span>
            </button>
          ))}
        </div>

        {/* Comparison Viewer Card */}
        <div className="glass-card rounded-3xl p-4 sm:p-6 border border-white/15 shadow-2xl relative">
          
          {/* Top HUD bar of viewer */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-brand-cyan font-bold uppercase tracking-wider">{activePreset.name}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{activePreset.subtitle}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setShowScopes(!showScopes);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono border flex items-center gap-1.5 transition-colors ${
                  showScopes
                    ? 'bg-brand-violet text-white border-brand-violet'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>{showScopes ? 'Scopes Active' : 'Toggle Scopes HUD'}</span>
              </button>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 text-emerald-400 font-bold border border-emerald-500/20">
                12-BIT RAW / 4:4:4
              </span>
            </div>
          </div>

          {/* Interactive Dual-Layer Container */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-video sm:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-inner bg-black"
          >
            {/* Graded Image (Background full layer) */}
            <img
              src={activePreset.gradedImg}
              alt="Graded Master"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Graded Label */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-brand-cyan/40 text-brand-cyan font-mono text-xs font-bold shadow-lg">
              ● COLOR GRADED MASTER
            </div>

            {/* RAW / Flat Image (Clipped overlay layer) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activePreset.rawImg}
                alt="Raw Flat LOG"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: containerRef.current ? `${containerRef.current.clientHeight}px` : '100%',
                  filter: 'grayscale(60%) brightness(1.1) contrast(0.65)' // Flat S-Log3 simulation
                }}
              />
              
              {/* RAW Label */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-slate-300 font-mono text-xs font-bold shadow-lg">
                ○ RAW FLAT S-LOG3
              </div>
            </div>

            {/* Scopes Overlay (Simulated Vectorscope / Waveform) */}
            {showScopes && (
              <div className="absolute bottom-4 left-4 z-30 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 pointer-events-none max-w-xs text-[10px] font-mono space-y-1.5">
                <div className="text-brand-cyan font-bold flex items-center justify-between">
                  <span>DAVINCI SCOPES HUD</span>
                  <span className="text-emerald-400">PASSED DCI-P3</span>
                </div>
                <div className="text-slate-300">
                  {activePreset.scope}
                </div>
                <div className="h-10 w-full bg-slate-950/80 rounded border border-white/10 flex items-end gap-1 p-1">
                  <div className="flex-1 bg-red-500/70 h-[85%] rounded-t-sm animate-pulse"></div>
                  <div className="flex-1 bg-green-500/70 h-[92%] rounded-t-sm animate-pulse"></div>
                  <div className="flex-1 bg-blue-500/70 h-[78%] rounded-t-sm animate-pulse"></div>
                  <div className="flex-1 bg-cyan-400/80 h-[88%] rounded-t-sm animate-pulse"></div>
                  <div className="flex-1 bg-violet-400/80 h-[94%] rounded-t-sm animate-pulse"></div>
                </div>
              </div>
            )}

            {/* Vertical Divider Slider Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical line */}
              <div className="w-0.5 h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"></div>
              
              {/* Drag Pill */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-tr from-brand-violet to-brand-cyan border-2 border-white shadow-2xl flex items-center justify-center text-slate-950 pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                <Sliders className="w-4 h-4 text-slate-950 rotate-90" />
              </div>
            </div>

            {/* Helper Hint */}
            <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono text-slate-400 pointer-events-none">
              ← Drag or hover to compare →
            </div>
          </div>

          {/* Preset Notes Footer */}
          <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="text-slate-300">
              <strong className="text-brand-cyan">Colorist Note:</strong> {activePreset.description}
            </div>
            <div className="text-slate-400 font-mono flex items-center gap-1.5 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-brand-violet" />
              <span>DaVinci Resolve Studio 19 + FilmConvert Pro</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
