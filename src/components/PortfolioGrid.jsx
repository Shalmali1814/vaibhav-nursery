import React, { useState } from 'react';
import { Play, Sparkles, Flame, TrendingUp, Clock, ArrowUpRight, Smartphone, Monitor } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function PortfolioGrid({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  const handleCategoryChange = (catId) => {
    soundEngine.playClick();
    setActiveCategory(catId);
  };

  return (
    <section id="showcase" className="py-24 relative bg-[#08080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono text-brand-cyan mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED CASE STUDIES & CLIENT EDITS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Selected Works &{' '}
              <span className="bg-gradient-to-r from-brand-cyan to-brand-violet bg-clip-text text-transparent">
                Proof of Retention
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
              Every cut is engineered for maximum watch time, dopamine-loop pacing, and immediate viewer engagement.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_DATA.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-violet text-slate-950 shadow-lg shadow-brand-cyan/20'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredProjects.map((project) => {
            const isVertical = project.aspectRatio === '9:16';

            return (
              <div
                key={project.id}
                onClick={() => {
                  soundEngine.playWhoosh();
                  onSelectProject(project);
                }}
                className={`group relative rounded-3xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-brand-cyan/50 transition-all duration-500 hover:-translate-y-1.5 shadow-xl ${
                  isVertical ? 'lg:row-span-2' : ''
                }`}
              >
                {/* Media Container */}
                <div className={`relative overflow-hidden bg-slate-950 ${
                  isVertical ? 'aspect-[9/16]' : 'aspect-video'
                }`}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c15] via-[#0d0c15]/40 to-transparent"></div>

                  {/* Aspect Ratio Badge & Format Icon */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-200 flex items-center gap-1.5">
                      {isVertical ? <Smartphone className="w-3 h-3 text-brand-pink" /> : <Monitor className="w-3 h-3 text-brand-cyan" />}
                      <span>{project.aspectRatio}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-300">
                      {project.duration}
                    </span>
                  </div>

                  {/* Retention Rate Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-mono font-bold text-emerald-400 backdrop-blur-md flex items-center gap-1 shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      {project.retentionRate}
                    </span>
                  </div>

                  {/* Center Play Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-violet to-brand-cyan text-slate-950 flex items-center justify-center shadow-2xl shadow-brand-cyan/60 scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />
                    </div>
                  </div>

                  {/* Views counter strip */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-mono text-amber-300 font-bold bg-black/70 px-2.5 py-1 rounded-lg border border-amber-500/20 backdrop-blur-sm">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.views}</span>
                  </div>
                </div>

                {/* Project Metadata Card Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                    {project.client}
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.highlight}
                  </p>

                  {/* Software Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    <span>Inspect Editing Breakdown</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
