import React, { useState } from 'react';
import { 
  Sprout, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  Layers, 
  TrendingDown, 
  FileCheck2, 
  Truck, 
  Cpu, 
  Store, 
  HelpCircle 
} from 'lucide-react';
import { PROBLEM_SOLUTION } from '../data/verdaData';
import { playSoftClick } from '../utils/audio';

export default function OrganicDeepDive() {
  const challenges = [
    {
      id: 'yield',
      title: 'Lower Initial Yield in Conversion Phase',
      icon: TrendingDown,
      color: 'text-amber-700',
      badge: 'Challenge #1',
      problemDesc: 'When transitioning away from chemical salts, depleted soil micro-biomes take 1 to 3 seasons to regenerate natural fertility, causing temporary yield dips.',
      verdaFix: 'Vaibhav Nursery Bio-Booster Protocols (Jeevamrutha, Mycorrhizal fungi & aged vermicompost) accelerate microbial recolonization, cutting conversion lag by 60%.'
    },
    {
      id: 'knowledge',
      title: 'High Labor & Specialized Knowledge Barrier',
      icon: HelpCircle,
      color: 'text-orange-700',
      badge: 'Challenge #2',
      problemDesc: 'Organic farming requires constant pest vigilance, companion planting know-how, and precise biological timing that overwhelms beginners and terrace gardeners.',
      verdaFix: 'Vaibhav Nursery AI Plant Doctor provides instant 3-second camera diagnostics, while the Smart Care Calendar gives step-by-step daily micro-tasks.'
    },
    {
      id: 'certification',
      title: 'Costly & Convoluted Certification Process',
      icon: ShieldAlert,
      color: 'text-rose-700',
      badge: 'Challenge #3',
      problemDesc: 'Smallholder farmers and urban growers struggle with thousands of dollars in audit fees, exhaustive paperwork, and opaque multi-year third-party reviews.',
      verdaFix: 'Vaibhav Nursery Digital Traceability & Audit Ledger logs every verified input batch and harvest date, creating instant verifiable organic passports.'
    }
  ];

  return (
    <section id="solution" className="py-20 lg:py-28 relative bg-[#E8E5E5] border-t border-[#DCD7D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dff2e3] border border-[#a8d6b1] text-verda-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Sprout className="w-3.5 h-3.5" />
            <span>Organic Framework & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Organic Farming & The Vaibhav Nursery Solution
          </h2>
          <p className="mt-4 text-slate-800 text-sm sm:text-base leading-relaxed font-normal">
            Bridging the gap between ancient sustainable wisdom and modern digital empowerment.
          </p>
        </div>

        {/* Definition Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#DCD7D7] shadow-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-verda-800 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Core Definition</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display mb-3">
                What is Organic Farming?
              </h3>
              <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
                "Organic farming is a method of agriculture that focuses on natural processes and avoids the use of synthetic fertilizers, pesticides, genetically modified organisms (GMOs), and chemical additives."
              </p>
            </div>

            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <span className="px-3 py-1 rounded-lg bg-[#dff2e3] border border-[#a8d6b1] text-xs text-verda-950 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-verda-700" /> Zero Synthetics
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#dff2e3] border border-[#a8d6b1] text-xs text-verda-950 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-verda-700" /> 100% Non-GMO
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#dff2e3] border border-[#a8d6b1] text-xs text-verda-950 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-verda-700" /> Living Soil Ecology
              </span>
            </div>
          </div>
        </div>

        {/* 3 Core Challenges Breakdown */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                Industry Roadblocks
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                The 3 Major Organic Farming Challenges
              </h3>
            </div>
            <span className="text-xs text-slate-600 font-mono hidden sm:inline-block font-semibold">
              Analyzed & Solved by Vaibhav Nursery
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((c) => {
              const IconComp = c.icon;
              return (
                <div 
                  key={c.id}
                  className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#DCD7D7] hover:border-verda-500 hover:shadow-lg transition-all flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        {c.badge}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base mb-2 group-hover:text-amber-800 transition-colors">
                      {c.title}
                    </h4>

                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 mb-4 text-xs text-slate-800 leading-relaxed font-medium">
                      <strong className="text-rose-800 font-bold block mb-0.5">The Friction:</strong>
                      {c.problemDesc}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#dff2e3] border border-[#a8d6b1] text-xs text-slate-900 leading-relaxed font-medium">
                    <strong className="text-verda-950 font-bold flex items-center gap-1 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-verda-700" /> Vaibhav Nursery Solution:
                    </strong>
                    {c.verdaFix}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Problem vs Solution Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-rose-300 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-800 text-xs font-mono font-bold uppercase mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Page 6 Problem Statement</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-4">
                {PROBLEM_SOLUTION.problem.title}
              </h3>

              <div className="space-y-3">
                {PROBLEM_SOLUTION.problem.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50/80 border border-rose-200 text-xs sm:text-sm text-slate-800 font-medium">
                    <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✕
                    </span>
                    <p className="leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-200 text-xs text-rose-900 font-mono font-bold">
              Result: Over 53.8% of individuals cannot find trusted doorstep organic inputs.
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-verda-500 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dff2e3] border border-[#a8d6b1] text-verda-950 text-xs font-mono font-bold uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-verda-700" />
                <span>Page 6 Solution Proposition</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-4">
                {PROBLEM_SOLUTION.solution.title}
              </h3>

              <div className="space-y-3">
                {PROBLEM_SOLUTION.solution.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#dff2e3]/70 border border-[#a8d6b1] text-xs sm:text-sm text-slate-900 font-medium">
                    <span className="w-5 h-5 rounded-full bg-verda-700 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <p className="leading-relaxed font-semibold">{pt}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DCD7D7] flex items-center justify-between">
              <span className="text-xs text-verda-900 font-mono font-bold">
                Complete Closed-Loop Ecosystem
              </span>
              <button
                onClick={() => {
                  playSoftClick();
                  const el = document.querySelector('#app-simulator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-xs hover:scale-105 transition-transform flex items-center gap-1.5 shadow-xs"
              >
                <span>Experience App Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
