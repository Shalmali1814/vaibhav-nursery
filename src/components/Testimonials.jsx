import React, { useState } from 'react';
import { Star, MessageSquare, ChevronDown, ChevronUp, Quote, Award, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function Testimonials() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    soundEngine.playClick();
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="testimonials" className="py-24 relative bg-[#090810] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-brand-violet/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>CLIENT PROOF & REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Trusted By High-Growth{' '}
            <span className="bg-gradient-to-r from-amber-400 via-brand-pink to-brand-cyan bg-clip-text text-transparent">
              Creators & Brands
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Real feedback from YouTube channels with 1M+ subscribers and VC-backed brands that scaled with high-retention video content.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {PORTFOLIO_DATA.testimonials.map((test) => (
            <div
              key={test.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                {/* 5 Stars + Stat Pill */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                    {test.stat}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-white/10 group-hover:text-brand-cyan/20 transition-colors" />

                <p className="text-slate-200 text-sm leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/10">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover border border-brand-cyan/40 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {test.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Everything you need to know before booking your project.
            </p>
          </div>

          <div className="space-y-3">
            {PORTFOLIO_DATA.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base font-display font-bold text-white">
                      {faq.q}
                    </span>
                    <div className={`p-1.5 rounded-lg bg-white/5 text-brand-cyan transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-cyan/20' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
