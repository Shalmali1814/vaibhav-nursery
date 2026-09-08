import React, { useState } from 'react';
import { 
  Sprout, 
  Send, 
  Heart, 
  CheckCircle2, 
  Leaf, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Sparkles
} from 'lucide-react';
import { playSoftClick, playSproutChime } from '../utils/audio';

export default function VerdaFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      playSproutChime();
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    playSoftClick();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#E0DCDC] text-slate-800 border-t border-[#DCD7D7] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#DCD7D7]">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-verda-600 to-sprout-500 p-0.5 shadow-sm">
                <div className="w-full h-full bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-verda-700" />
                </div>
              </div>
              <div>
                <span className="font-chillin text-3xl sm:text-4xl tracking-wide text-slate-900">
                  Vaibhav Nursery
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-verda-900 block -mt-1 font-bold">
                  Plants & Organic Care
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed mb-6 font-medium">
              Take control of your health, food, and greenery. Vaibhav Nursery empowers plant lovers and home growers with verified organic inputs, live healthy saplings, AI plant diagnosis, and terrace garden setups.
            </p>

            <div className="flex items-center gap-2 text-xs text-verda-950 font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-verda-600 animate-pulse" />
              <span>100% Non-GMO • Zero Synthetic Chemicals</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase font-mono tracking-wider mb-4 text-verda-950">
              Platform
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-800">
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-verda-900 transition-colors">
                  Agriculture Foundation
                </a>
              </li>
              <li>
                <a href="#branches" onClick={(e) => scrollToSection(e, '#branches')} className="hover:text-verda-900 transition-colors">
                  14 Scientific Branches
                </a>
              </li>
              <li>
                <a href="#empathy" onClick={(e) => scrollToSection(e, '#empathy')} className="hover:text-verda-900 transition-colors">
                  User Empathy Maps
                </a>
              </li>
              <li>
                <a href="#research" onClick={(e) => scrollToSection(e, '#research')} className="hover:text-verda-900 transition-colors">
                  Market Research Data
                </a>
              </li>
              <li>
                <a href="#solution" onClick={(e) => scrollToSection(e, '#solution')} className="hover:text-verda-900 transition-colors">
                  Problem & Solution Matrix
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Tools & Store */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase font-mono tracking-wider mb-4 text-verda-950">
              Tools & Store
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-800">
              <li>
                <a href="#app-simulator" onClick={(e) => scrollToSection(e, '#app-simulator')} className="hover:text-verda-900 transition-colors">
                  9-Screen Mobile App Demo
                </a>
              </li>
              <li>
                <a href="#marketplace" onClick={(e) => scrollToSection(e, '#marketplace')} className="hover:text-verda-900 transition-colors">
                  Doorstep Organic Store
                </a>
              </li>
              <li>
                <a href="#calculator" onClick={(e) => scrollToSection(e, '#calculator')} className="hover:text-verda-900 transition-colors">
                  Terrace Yield Calculator
                </a>
              </li>
              <li>
                <a href="#diy-guides" onClick={(e) => scrollToSection(e, '#diy-guides')} className="hover:text-verda-900 transition-colors">
                  Jeevamrutha & DIY Recipes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-slate-900 text-xs uppercase font-mono tracking-wider mb-2 text-verda-950">
              Join the Organic Movement
            </h4>
            <p className="text-xs text-slate-800 mb-3 leading-relaxed font-medium">
              Get weekly terrace gardening tutorials, seasonal planting calendars, and exclusive discounts on heirloom seeds.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-verda-400 text-xs text-verda-900 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-verda-600 shrink-0" />
                <span>Welcome to Vaibhav Nursery! Check your inbox for your free starter guide.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#DCD7D7] text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-verda-600 font-medium"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-xs hover:scale-105 transition-transform flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700 font-mono font-medium">
          <div className="flex items-center gap-2">
            <span>© 2026 Vaibhav Nursery.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-800">
            <span>Designed with love for clean food & living soil</span>
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
}
