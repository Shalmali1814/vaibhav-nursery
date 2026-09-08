import React, { useState, useEffect } from 'react';
import { Film, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundEngine.playWhoosh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-cyan p-[1px]">
              <div className="w-full h-full bg-[#0d0c15] rounded-[11px] flex items-center justify-center">
                <Film className="w-5 h-5 text-brand-cyan" />
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white">
                {PORTFOLIO_DATA.creator.name}
              </div>
              <div className="text-xs font-mono text-slate-400">
                {PORTFOLIO_DATA.creator.role}
              </div>
            </div>
          </div>

          {/* Time & Availability */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>LOCAL TIME: <strong className="text-white">{currentTime}</strong></span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <span>{PORTFOLIO_DATA.creator.location}</span>
            </div>
          </div>

          {/* Social Icons SVGs */}
          <div className="flex items-center gap-3">
            {/* X / Twitter */}
            <a
              href={PORTFOLIO_DATA.creator.twitter}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundEngine.playClick()}
              title="X (Twitter)"
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-brand-cyan hover:bg-brand-cyan/10 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a
              href={PORTFOLIO_DATA.creator.instagram}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundEngine.playClick()}
              title="Instagram"
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-brand-pink hover:bg-brand-pink/10 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href={PORTFOLIO_DATA.creator.youtube}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundEngine.playClick()}
              title="YouTube"
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-red-500 hover:bg-red-500/10 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.creator.name}. All rights reserved. Built for high retention.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
