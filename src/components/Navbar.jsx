import React, { useState, useEffect } from 'react';
import { Film, Play, Menu, X, Sparkles, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function Navbar({ onOpenShowreel, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundEngine.playClick();
    }
  };

  const navLinks = [
    { name: 'Showcase', href: '#showcase' },
    { name: 'Color Grading', href: '#color-grading' },
    { name: 'Sound FX', href: '#soundboard' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Gear & Tech', href: '#gear' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080c]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={() => soundEngine.playClick()}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-cyan p-[1px] shadow-lg shadow-brand-cyan/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0d0c15] rounded-[11px] flex items-center justify-center">
                <Film className="w-5 h-5 text-brand-cyan group-hover:text-brand-violet transition-colors duration-300" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg tracking-wider text-white uppercase group-hover:text-brand-cyan transition-colors">
                  {PORTFOLIO_DATA.creator.name}
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400/90 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                {PORTFOLIO_DATA.creator.status}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => soundEngine.playClick()}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={handleSoundToggle}
              title={isMuted ? 'Sound Muted - Click to Enable' : 'Sound Active - Click to Mute'}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:border-brand-cyan/40 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-brand-cyan" />}
            </button>

            {/* Watch Showreel Quick Button */}
            <button
              onClick={() => {
                soundEngine.playWhoosh();
                onOpenShowreel();
              }}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-white/[0.05] hover:bg-white/10 text-slate-200 border border-white/10 hover:border-brand-violet/40 transition-all flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 text-brand-violet fill-brand-violet" />
              <span>Showreel</span>
            </button>

            {/* Get Quote CTA */}
            <button
              onClick={() => {
                soundEngine.playImpact();
                onOpenQuote();
              }}
              className="relative group px-4 py-2 rounded-lg text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-cyan to-brand-violet hover:from-white hover:to-brand-cyan transition-all duration-300 shadow-md shadow-brand-cyan/25 flex items-center gap-1.5"
            >
              <span>Instant Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-brand-cyan" />}
            </button>
            <button
              onClick={() => {
                soundEngine.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0e0d17] border-b border-white/10 px-4 pt-3 pb-6 mt-2 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  soundEngine.playClick();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.03] rounded-lg border border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                soundEngine.playWhoosh();
                setMobileMenuOpen(false);
                onOpenShowreel();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-semibold bg-white/10 text-white flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 text-brand-cyan fill-brand-cyan" />
              Watch Showreel (2025)
            </button>
            <button
              onClick={() => {
                soundEngine.playImpact();
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-cyan to-brand-violet flex items-center justify-center gap-1.5"
            >
              Calculate Project Price
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
