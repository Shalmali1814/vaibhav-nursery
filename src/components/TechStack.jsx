import React from 'react';
import { Cpu, Film, Palette, Layers, Box, Volume2, Sparkles, MessageSquare, Image, HardDrive, Monitor, Speaker } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export default function TechStack() {
  const getToolIcon = (iconName) => {
    switch (iconName) {
      case 'Film': return <Film className="w-5 h-5 text-brand-violet" />;
      case 'Palette': return <Palette className="w-5 h-5 text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-brand-cyan" />;
      case 'Box': return <Box className="w-5 h-5 text-brand-pink" />;
      case 'Volume2': return <Volume2 className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-300" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-indigo-400" />;
      case 'Image': return <Image className="w-5 h-5 text-blue-400" />;
      default: return <Film className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="gear" className="py-24 relative bg-[#08080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>PRODUCTION ARSENAL & WORKSTATION SPECS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Engineered For{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-violet bg-clip-text text-transparent">
              High-Speed 4K/8K RAW
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Zero dropped frames, instant proxy generation, and calibrated DCI-P3 color accuracy for broadcast-ready deliverables.
          </p>
        </div>

        {/* Software Toolchain Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {PORTFOLIO_DATA.techArsenal.map((tool, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                  {getToolIcon(tool.icon)}
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-brand-cyan">
                  {tool.proficiency}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-display font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                {tool.name}
              </h3>
              <div className="text-xs font-mono text-slate-400">
                {tool.category}
              </div>
            </div>
          ))}
        </div>

        {/* Workstation Hardware Specs Bar */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan font-bold uppercase">
              <HardDrive className="w-4 h-4" />
              <span>Studio Hardware Rig Specifications</span>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
              8K PRORES & RED RAW READY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.hardwareSpecs.map((hw, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">{hw.item}</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">{hw.spec}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
