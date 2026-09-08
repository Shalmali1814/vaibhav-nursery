import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Menu, 
  X, 
  ShoppingBag, 
  Smartphone, 
  Volume2, 
  VolumeX, 
  Search, 
  Sparkles, 
  Leaf 
} from 'lucide-react';
import { toggleSound, isSoundEnabled, playSoftClick } from '../utils/audio';

export default function VerdaNavbar({ 
  cartCount = 0, 
  onOpenCart, 
  onOpenAppDemo, 
  onOpenPlantDoctor 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const newState = toggleSound(!soundActive);
    setSoundActive(newState);
    if (newState) playSoftClick();
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: '14 Branches', href: '#branches' },
    { name: 'Empathy Maps', href: '#empathy' },
    { name: 'Research Data', href: '#research' },
    { name: 'Problem & Solution', href: '#solution' },
    { name: 'App Simulator', href: '#app-simulator' },
    { name: 'Store', href: '#marketplace' },
    { name: 'Yield Calculator', href: '#calculator' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    playSoftClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#DCD7D7] py-3 shadow-md shadow-slate-900/5' 
        : 'bg-[#F4F2F2]/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-verda-600 to-sprout-500 p-0.5 shadow-md shadow-verda-600/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#FFFFFF] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <Sprout className="w-6 h-6 text-verda-600 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-chillin text-3xl sm:text-4xl tracking-wide text-slate-900 group-hover:text-verda-700 transition-colors pb-1 pr-2 inline-block">
                Vaibhav Nursery
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-sprout-500 animate-pulse" />
            </div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-verda-800 -mt-1 font-bold">
              Plants & Organic Nursery
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#FFFFFF] border border-[#DCD7D7] rounded-full px-4 py-1.5 backdrop-blur-md shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-xs font-bold text-slate-800 hover:text-verda-900 hover:bg-[#E8E5E5] rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleToggleAudio}
            className="p-2 rounded-xl bg-[#FFFFFF] border border-[#DCD7D7] text-slate-700 hover:text-verda-700 hover:border-verda-500 transition-colors shadow-xs"
            title={soundActive ? 'Mute audio cues' : 'Enable audio cues'}
            aria-label="Toggle Sound"
          >
            {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          <button
            onClick={() => {
              playSoftClick();
              if (onOpenPlantDoctor) onOpenPlantDoctor();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#dff2e3] border border-[#a8d6b1] text-verda-900 hover:bg-[#d0ebd5] text-xs font-bold transition-all shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-verda-700 animate-spin" style={{ animationDuration: '6s' }} />
            <span>AI Doctor</span>
          </button>

          <button
            onClick={() => {
              playSoftClick();
              if (onOpenCart) onOpenCart();
            }}
            className="relative p-2 rounded-xl bg-[#FFFFFF] border border-[#DCD7D7] text-slate-700 hover:text-verda-800 hover:border-verda-500 transition-all shadow-xs"
            aria-label="Open Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-verda-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-earth-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-[#FFFFFF] animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              playSoftClick();
              if (onOpenAppDemo) {
                onOpenAppDemo();
              } else {
                const target = document.querySelector('#app-simulator');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Smartphone className="w-4 h-4" />
            <span>Open App Demo</span>
          </button>

          <button
            onClick={() => {
              playSoftClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-xl bg-[#FFFFFF] border border-[#DCD7D7] text-slate-700 shadow-xs"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#DCD7D7] px-6 py-5 mt-3 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 px-3 rounded-lg text-sm font-bold text-slate-800 hover:text-verda-800 hover:bg-[#E8E5E5] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Leaf className="w-3.5 h-3.5 text-verda-600 opacity-60" />
              </a>
            ))}
            <div className="pt-3 border-t border-[#DCD7D7] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  playSoftClick();
                  setMobileMenuOpen(false);
                  if (onOpenPlantDoctor) onOpenPlantDoctor();
                }}
                className="w-full py-2.5 rounded-xl bg-[#dff2e3] border border-[#a8d6b1] text-verda-900 text-sm font-bold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-verda-700" />
                <span>AI Plant Doctor Scanner</span>
              </button>
              <button
                onClick={() => {
                  playSoftClick();
                  setMobileMenuOpen(false);
                  const target = document.querySelector('#app-simulator');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-verda-600/20"
              >
                <Smartphone className="w-4 h-4" />
                <span>Interactive 9-Screen Mobile App Demo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
