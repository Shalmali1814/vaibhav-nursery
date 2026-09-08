import React, { useState } from 'react';
import { 
  Smartphone, 
  Search, 
  Camera, 
  Calendar as CalendarIcon, 
  Droplets, 
  ShoppingBag, 
  User, 
  ChevronRight, 
  Sparkles, 
  Check, 
  ArrowLeft, 
  Menu, 
  Leaf, 
  Sprout, 
  Plus, 
  Heart, 
  RotateCw, 
  Sun, 
  ShieldCheck, 
  Zap, 
  Play, 
  Share2 
} from 'lucide-react';
import { PLANT_DIRECTORY, SHOP_PRODUCTS, SCAN_SAMPLES } from '../data/verdaData';
import { playSoftClick, playSproutChime, playWaterDrop, playScanBeep } from '../utils/audio';

export default function AppSimulator({ onAddToCart, cartCount = 0 }) {
  const [activeScreen, setActiveScreen] = useState('home');
  const [selectedPlant, setSelectedPlant] = useState(PLANT_DIRECTORY[0]);
  const [selectedScanSample, setSelectedScanSample] = useState(SCAN_SAMPLES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(SCAN_SAMPLES[0]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState('Home Gardener');

  const [myPlantsList, setMyPlantsList] = useState([
    { id: 'p1', name: 'Aqua', plantType: 'Organic Baby Spinach', health: 95, lastWatered: 'Today', nextWater: 'Tomorrow', status: 'Thriving', color: 'bg-cyan-500' },
    { id: 'p2', name: 'Orga', plantType: 'Roma Tomato Potted', health: 88, lastWatered: 'Yesterday', nextWater: 'Today', status: 'Flowering', color: 'bg-amber-500' },
    { id: 'p3', name: 'Mua', plantType: 'Holy Basil (Tulsi)', health: 98, lastWatered: '2 days ago', nextWater: 'Today', status: 'Healthy', color: 'bg-emerald-500' },
  ]);

  const [wateredDays, setWateredDays] = useState([1, 4, 8, 12, 15, 18, 22]);
  const [plannedDays, setPlannedDays] = useState([9, 13, 16, 20, 24, 27, 30]);

  const screens = [
    { id: 'splash', name: '1. Splash Screen', desc: 'Logo & animated sprout' },
    { id: 'login', name: '2. Login / Auth', desc: 'User profile sign-in' },
    { id: 'home', name: '3. Main Dashboard', desc: 'Core hub & quick actions' },
    { id: 'maintenance', name: '4. Plant Care Guide', desc: 'Snake Plant & crop directory' },
    { id: 'shop', name: '5. Organic Shop', desc: 'Inputs & fresh produce' },
    { id: 'scanner', name: '6. AI Plant Doctor', desc: 'Leaf camera diagnostics' },
    { id: 'menu', name: '7. Slide Menu', desc: 'Drawer navigation' },
    { id: 'my-plants', name: '8. My Garden Tracker', desc: 'Aqua, Orga, Mua plants' },
    { id: 'schedule', name: '9. Care Calendar', desc: 'Watering reminders' },
  ];

  const handleNavigate = (screenId) => {
    playSoftClick();
    setActiveScreen(screenId);
  };

  const handleWaterCalendarDay = (day) => {
    playWaterDrop();
    if (wateredDays.includes(day)) {
      setWateredDays(wateredDays.filter(d => d !== day));
    } else {
      setWateredDays([...wateredDays, day]);
      setPlannedDays(plannedDays.filter(d => d !== day));
    }
  };

  const handleRunScan = (sample) => {
    playScanBeep();
    setSelectedScanSample(sample);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult(sample);
      playSproutChime();
    }, 1200);
  };

  const handleWaterMyPlant = (id) => {
    playWaterDrop();
    setMyPlantsList(myPlantsList.map(p => {
      if (p.id === id) {
        return { ...p, lastWatered: 'Just now', nextWater: 'In 2 days', health: Math.min(100, p.health + 5) };
      }
      return p;
    }));
  };

  return (
    <section id="app-simulator" className="py-20 lg:py-28 relative bg-[#F4F2F2] border-t border-[#DCD7D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dff2e3] border border-[#a8d6b1] text-verda-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Interactive Mobile Companion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Interactive Mobile App Prototype
          </h2>
          <p className="mt-4 text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
            Every screen illustrated in the Page 7 design drawings has been brought to life. Click any screen below or use the in-app phone navigation!
          </p>
        </div>

        {/* 9-Screen Selector Pill Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNavigate(s.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeScreen === s.id
                  ? 'bg-verda-700 text-white shadow-md scale-105'
                  : 'bg-[#FFFFFF] text-slate-700 hover:text-slate-900 hover:bg-[#E8E5E5] border border-[#DCD7D7]'
              }`}
            >
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Contextual Feature Explainer */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#DCD7D7] shadow-lg">
              <span className="text-xs font-mono font-bold text-verda-800 uppercase tracking-wider">
                Current App View
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display mt-1">
                {screens.find(s => s.id === activeScreen)?.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed font-medium">
                {screens.find(s => s.id === activeScreen)?.desc}
              </p>

              {/* Dynamic Feature Highlights */}
              <div className="mt-5 space-y-2.5 pt-4 border-t border-[#e8dfcc] text-xs text-slate-800">
                {activeScreen === 'maintenance' && (
                  <div className="p-3.5 rounded-xl bg-[#dff2e3] border border-[#a8d6b1]">
                    <strong className="text-verda-950 block mb-1 font-bold">Page 7 Highlight: Snake Plant</strong>
                    "A hardy plant that tolerates low light and infrequent watering, producing oxygen at night." Featured directly from the hand-drawn sketches.
                  </div>
                )}
                {activeScreen === 'my-plants' && (
                  <div className="p-3.5 rounded-xl bg-[#dff2e3] border border-[#a8d6b1]">
                    <strong className="text-verda-950 block mb-1 font-bold">Page 7 Highlight: Aqua, Orga & Mua</strong>
                    Track named plants with customized soil watering intervals, growth badges, and health meters.
                  </div>
                )}
                {activeScreen === 'schedule' && (
                  <div className="p-3.5 rounded-xl bg-[#dff2e3] border border-[#a8d6b1]">
                    <strong className="text-verda-950 block mb-1 font-bold">Page 7 Highlight: April Care Schedule</strong>
                    Visual water droplets indicator (💧 Watered) and planned care reminders (⚠️ Planned). Click dates on the phone screen to test!
                  </div>
                )}
                {activeScreen === 'scanner' && (
                  <div className="p-3.5 rounded-xl bg-[#dff2e3] border border-[#a8d6b1]">
                    <strong className="text-verda-950 block mb-1 font-bold">AI Leaf Doctor</strong>
                    Select test leaves or simulate camera scan to diagnose blight, aphids, and nutrient deficiencies with zero-chemical remedies.
                  </div>
                )}
                {activeScreen === 'shop' && (
                  <div className="p-3.5 rounded-xl bg-[#dff2e3] border border-[#a8d6b1]">
                    <strong className="text-verda-950 block mb-1 font-bold">Doorstep Organic Marketplace</strong>
                    100% certified organic inputs: non-GMO seeds, vermicompost, and safe biological neem sprays.
                  </div>
                )}
                {activeScreen === 'home' && (
                  <div className="p-3.5 rounded-xl bg-[#dff2e3] border border-[#a8d6b1]">
                    <strong className="text-verda-950 block mb-1 font-bold">Vaibhav Nursery Command Hub</strong>
                    Instant access to Maintenance, Shop, My Plant tracker, Profile, and Camera Scanner.
                  </div>
                )}
              </div>

              {/* Quick Jump Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleNavigate('scanner')}
                  className="py-2.5 px-3 rounded-xl bg-[#dff2e3] hover:bg-[#d0ebd5] border border-[#a8d6b1] text-xs font-bold text-verda-900 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Camera className="w-3.5 h-3.5 text-verda-700" />
                  <span>Test AI Scan</span>
                </button>
                <button
                  onClick={() => handleNavigate('schedule')}
                  className="py-2.5 px-3 rounded-xl bg-[#e4effa] hover:bg-[#d5e7f7] border border-[#bad7f2] text-xs font-bold text-blue-900 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <CalendarIcon className="w-3.5 h-3.5 text-blue-700" />
                  <span>Care Calendar</span>
                </button>
              </div>

              {/* In-App Mascot Companion Callout */}
              <div className="mt-4 p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#DCD7D7] flex items-center gap-3 shadow-xs">
                <img src="/mascot.png" alt="Verdi" className="w-12 h-14 object-contain shrink-0 drop-shadow-sm animate-float" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900 font-display">Verdi AI Companion</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#dff2e3] text-verda-900 font-bold border border-[#a8d6b1]">Active Guide</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight mt-0.5 font-medium">
                    Built into all 9 screens to guide terrace watering routines, organic inputs, and live plant care!
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Smartphone Shell */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-[340px] sm:w-[380px] h-[720px] bg-[#121c14] border-[10px] border-[#223627] rounded-[48px] shadow-2xl shadow-slate-900/30 flex flex-col overflow-hidden ring-4 ring-verda-600/30">
              
              {/* Phone Status Bar */}
              <div className="relative z-30 pt-3 px-6 pb-2 bg-[#0c180f] flex items-center justify-between text-[11px] font-mono text-slate-300 select-none">
                <span>9:41 AM</span>
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-verda-500 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px]">5G</span>
                  <div className="w-4 h-2.5 border border-slate-400 rounded-sm p-0.5">
                    <div className="h-full w-full bg-sprout-400 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Phone Content */}
              <div className="flex-1 bg-[#0f2114] text-slate-100 overflow-y-auto relative flex flex-col justify-between">
                
                {activeScreen === 'splash' && (
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-fadeIn bg-radial-verda">
                    <div className="w-36 h-48 mb-2 relative flex items-center justify-center">
                      <img 
                        src="/mascot.png" 
                        alt="Verdi Mascot" 
                        className="w-full h-full object-contain drop-shadow-2xl animate-float"
                      />
                    </div>
                    <h1 className="verda-3d-text text-3xl sm:text-4xl font-bold tracking-wide text-white">
                      Vaibhav Nursery
                    </h1>
                    <p className="text-xs text-sprout-300 font-mono mt-0.5">
                      Meet Verdi • Your AI Gardening Companion
                    </p>
                    <button
                      onClick={() => handleNavigate('home')}
                      className="mt-6 px-6 py-2.5 rounded-xl bg-sprout-500 text-slate-950 font-bold text-xs shadow-lg shadow-sprout-500/40 hover:scale-105 transition-transform"
                    >
                      Enter Platform →
                    </button>
                  </div>
                )}

                {activeScreen === 'login' && (
                  <div className="flex-1 p-6 flex flex-col justify-between animate-fadeIn bg-[#0d1d12]">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <button onClick={() => handleNavigate('home')} className="p-1 text-slate-400">
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <h2 className="text-lg font-bold text-white font-display">Sign In to Vaibhav Nursery</h2>
                      </div>

                      <div className="space-y-3.5">
                        <div>
                          <label className="text-[11px] font-mono text-verda-300 block mb-1">Username / Email</label>
                          <input
                            type="text"
                            defaultValue="priya.gardener@vaibhavnursery.com"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#08120a] border border-verda-700/50 text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-mono text-verda-300 block mb-1">Password</label>
                          <input
                            type="password"
                            defaultValue="••••••••••••"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#08120a] border border-verda-700/50 text-xs text-white"
                          />
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-sprout-400 font-mono">
                          <span>Remember me</span>
                          <span className="underline cursor-pointer">Forgot pass?</span>
                        </div>

                        <button
                          onClick={() => {
                            playSproutChime();
                            handleNavigate('home');
                          }}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-xs shadow-md mt-2"
                        >
                          Sign In to Garden
                        </button>
                      </div>

                      <div className="mt-6 pt-4 border-t border-verda-800/40">
                        <span className="text-[10px] font-mono text-slate-400 block mb-2">Switch Demo Profile:</span>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => {
                              setUserRole('Home Gardener');
                              handleNavigate('home');
                            }}
                            className="p-2 rounded-lg bg-verda-950 border border-verda-800 text-[11px] text-sprout-300 font-medium text-left"
                          >
                            🌱 Priya (Urban Balcony)
                          </button>
                          <button
                            onClick={() => {
                              setUserRole('Organic Farmer');
                              handleNavigate('home');
                            }}
                            className="p-2 rounded-lg bg-earth-950 border border-earth-800 text-[11px] text-earth-300 font-medium text-left"
                          >
                            👨‍🌾 Rajesh (5-Acre Farm)
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-[11px] text-slate-400 font-mono">
                      Don't have an account? <span className="text-sprout-400 underline font-bold cursor-pointer">Sign Up</span>
                    </div>
                  </div>
                )}

                {activeScreen === 'home' && (
                  <div className="flex-1 p-5 flex flex-col justify-between animate-fadeIn bg-radial-verda">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <button onClick={() => handleNavigate('menu')} className="p-1.5 rounded-xl bg-verda-950 border border-verda-800/60 text-slate-300">
                          <Menu className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-1.5">
                          <Sprout className="w-4 h-4 text-sprout-400" />
                          <span className="font-display font-extrabold text-sm text-white tracking-wider">Vaibhav Nursery</span>
                        </div>
                        <button onClick={() => handleNavigate('login')} className="w-7 h-7 rounded-full bg-earth-600 border border-sprout-400 text-xs flex items-center justify-center font-bold text-white">
                          PG
                        </button>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-verda-900/90 to-emerald-950/90 border border-sprout-500/40 mb-4 flex items-center justify-between gap-2 shadow-md">
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-[10px] font-mono text-sprout-400 font-bold uppercase">Verdi AI Companion</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-sprout-400 animate-pulse" />
                          </div>
                          <h3 className="text-xs font-bold text-white leading-snug">"Good morning! Your garden is 94% hydrated 🌿"</h3>
                          <span className="text-[10px] text-slate-300 block mt-0.5">Next watering: Roma Tomato today at 5 PM</span>
                        </div>
                        <div className="w-14 h-16 shrink-0 relative flex items-center justify-center">
                          <img src="/mascot.png" alt="Verdi" className="w-full h-full object-contain drop-shadow-md animate-float" />
                        </div>
                      </div>

                      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                        Core Modules
                      </span>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <button
                          onClick={() => handleNavigate('maintenance')}
                          className="p-3.5 rounded-2xl bg-[#0d2214] hover:bg-[#12301c] border border-verda-700/50 text-left transition-all group flex items-center gap-3"
                        >
                          <div className="w-9 h-9 rounded-xl bg-verda-950 border border-sprout-400/40 flex items-center justify-center text-sprout-400 group-hover:scale-110 transition-transform">
                            <Leaf className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white group-hover:text-sprout-300">Maintenance</h4>
                            <span className="text-[10px] text-slate-400">Care Guides</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleNavigate('shop')}
                          className="p-3.5 rounded-2xl bg-[#0d2214] hover:bg-[#12301c] border border-verda-700/50 text-left transition-all group flex items-center gap-3"
                        >
                          <div className="w-9 h-9 rounded-xl bg-verda-950 border border-earth-400/40 flex items-center justify-center text-earth-400 group-hover:scale-110 transition-transform">
                            <ShoppingBag className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white group-hover:text-earth-300">Buy / Shop</h4>
                            <span className="text-[10px] text-slate-400">Organic Inputs</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleNavigate('my-plants')}
                          className="p-3.5 rounded-2xl bg-[#0d2214] hover:bg-[#12301c] border border-verda-700/50 text-left transition-all group flex items-center gap-3"
                        >
                          <div className="w-9 h-9 rounded-xl bg-verda-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                            <Sprout className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white group-hover:text-cyan-300">My Plants</h4>
                            <span className="text-[10px] text-slate-400">3 Active Crops</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleNavigate('schedule')}
                          className="p-3.5 rounded-2xl bg-[#0d2214] hover:bg-[#12301c] border border-verda-700/50 text-left transition-all group flex items-center gap-3"
                        >
                          <div className="w-9 h-9 rounded-xl bg-verda-950 border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                            <CalendarIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white group-hover:text-amber-300">Schedule</h4>
                            <span className="text-[10px] text-slate-400">April 2026</span>
                          </div>
                        </button>
                      </div>

                      <button
                        onClick={() => handleNavigate('scanner')}
                        className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-emerald-900/60 to-verda-900/60 border border-sprout-400/40 text-left flex items-center justify-between group hover:scale-[1.01] transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-sprout-500 text-slate-950 flex items-center justify-center font-bold">
                            <Camera className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white">AI Leaf Doctor Scanner</h4>
                            <span className="text-[10px] text-sprout-300">3-sec organic disease scan</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-sprout-400 group-hover:translate-x-1 transition-transform" />
                      </button>

                    </div>
                  </div>
                )}

                {activeScreen === 'maintenance' && (
                  <div className="flex-1 p-5 flex flex-col justify-between animate-fadeIn bg-[#0d1f14]">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <button onClick={() => handleNavigate('home')} className="p-1 text-slate-400">
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div className="relative flex-1">
                          <Search className="w-3.5 h-3.5 text-verda-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Search plants & care..."
                            defaultValue="Snake Plant"
                            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#08120a] border border-verda-800 text-xs text-white"
                          />
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#0a180e] border-2 border-sprout-500/50 shadow-xl mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-extrabold text-base text-white font-display">Snake Plant</h3>
                          <span className="text-xs font-mono font-bold text-sprout-400 px-2 py-0.5 rounded-md bg-verda-950 border border-verda-700">
                            ₹163/-
                          </span>
                        </div>

                        <div className="h-32 rounded-xl bg-gradient-to-b from-[#122819] to-[#0a140d] flex items-center justify-center mb-3">
                          <div className="text-5xl animate-float">🪴</div>
                        </div>

                        <p className="text-xs text-slate-200 leading-relaxed font-normal bg-verda-950/60 p-2.5 rounded-xl border border-verda-800/40 mb-3">
                          "A hardy plant that tolerates low light and infrequent watering, producing oxygen at night."
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-300">
                          <div className="p-2 rounded-lg bg-verda-900/30 border border-verda-800/40">
                            <span className="text-sprout-400 block font-bold">☀️ Light:</span>
                            Low to bright indirect
                          </div>
                          <div className="p-2 rounded-lg bg-verda-900/30 border border-verda-800/40">
                            <span className="text-cyan-400 block font-bold">💧 Water:</span>
                            Every 10-14 days
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono text-slate-400 block mb-2">Other Recommended Crops:</span>
                      <div className="space-y-1.5">
                        {PLANT_DIRECTORY.slice(1, 3).map((p) => (
                          <div key={p.id} className="p-2.5 rounded-xl bg-verda-950/50 border border-verda-800/40 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{p.image}</span>
                              <span className="font-semibold text-white">{p.name}</span>
                            </div>
                            <span className="text-sprout-400 font-mono text-[11px]">₹{p.price}/-</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                )}

                {activeScreen === 'shop' && (
                  <div className="flex-1 p-5 flex flex-col justify-between animate-fadeIn bg-[#0d1e12]">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleNavigate('home')} className="p-1 text-slate-400">
                            <ArrowLeft className="w-4 h-4" />
                          </button>
                          <h3 className="font-bold text-white text-base">Vaibhav Nursery Store</h3>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-mono text-sprout-400 bg-verda-950 px-2 py-1 rounded-lg border border-verda-800">
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Cart ({cartCount})</span>
                        </div>
                      </div>

                      <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                        {SHOP_PRODUCTS.slice(0, 3).map((prod) => (
                          <div key={prod.id} className="p-3 rounded-xl bg-botanical-dark/90 border border-verda-700/40 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-10 h-10 rounded-lg bg-verda-950 border border-verda-800 flex items-center justify-center text-lg p-1 overflow-hidden shrink-0">
                                {typeof prod.image === 'string' && (prod.image.startsWith('/') || prod.image.includes('.')) ? (
                                  <img src={prod.image} alt={prod.name} className="w-7 h-7 object-contain" />
                                ) : (
                                  prod.image
                                )}
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-white line-clamp-1">{prod.name}</h4>
                                <span className="text-[10px] text-sprout-300 font-mono">₹{prod.price} <s className="text-slate-500">₹{prod.origPrice}</s></span>
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                playSproutChime();
                                if (onAddToCart) onAddToCart(prod);
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-sprout-500 text-slate-950 font-bold text-[10px] hover:bg-sprout-400 shrink-0"
                            >
                              + Add
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 p-2.5 rounded-xl bg-earth-950/70 border border-earth-700/40 flex items-center gap-2 text-[10px] text-earth-200">
                        <span>🌱</span>
                        <span>100% Guaranteed pure organic inputs delivered to doorstep.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen === 'scanner' && (
                  <div className="flex-1 p-5 flex flex-col justify-between animate-fadeIn bg-[#09150c]">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleNavigate('home')} className="p-1 text-slate-400">
                            <ArrowLeft className="w-4 h-4" />
                          </button>
                          <h3 className="font-bold text-white text-sm">AI Leaf Scanner</h3>
                        </div>
                        <span className="text-[10px] font-mono text-sprout-400 bg-verda-950 px-2 py-0.5 rounded-md border border-verda-800">
                          Live Lens
                        </span>
                      </div>

                      <div className="relative h-44 rounded-2xl bg-black border-2 border-sprout-400/80 overflow-hidden flex flex-col items-center justify-center">
                        <div className="w-28 h-28 border border-dashed border-sprout-400 rounded-xl relative flex items-center justify-center">
                          <span className="text-4xl animate-pulse">{selectedScanSample.image}</span>
                          {isScanning && (
                            <div className="absolute left-0 right-0 h-1 bg-sprout-400 shadow-lg shadow-sprout-400 animate-bounce" />
                          )}
                        </div>

                        <div className="absolute bottom-2 px-3 py-0.5 rounded-full bg-black/70 text-[9px] text-sprout-300 font-mono">
                          {isScanning ? 'Analyzing chlorophyll patterns...' : 'Center leaf inside bounding box'}
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1">
                        {SCAN_SAMPLES.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleRunScan(s)}
                            className={`px-2 py-1 rounded-lg text-[10px] font-mono shrink-0 transition-colors ${
                              selectedScanSample.id === s.id
                                ? 'bg-sprout-500 text-slate-950 font-bold'
                                : 'bg-verda-950 text-slate-300 border border-verda-800'
                            }`}
                          >
                            {s.plantName}
                          </button>
                        ))}
                      </div>

                      <div className="mt-3 p-3 rounded-xl bg-botanical-dark border border-sprout-500/40 text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-white text-[11px]">{scanResult.status}</span>
                          <span className="text-[10px] font-mono text-sprout-400 font-bold">{scanResult.confidence}</span>
                        </div>
                        <p className="text-[10px] text-slate-300 mb-2">{scanResult.symptoms}</p>
                        <div className="p-2 rounded-lg bg-verda-950 text-[10px] text-sprout-200 border border-verda-800/60 flex items-start gap-2">
                          <img src="/mascot.png" alt="Verdi" className="w-7 h-9 object-contain shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-sprout-400 block font-bold">Verdi's Organic Rx:</strong>
                            {scanResult.organicRemedy}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {activeScreen === 'menu' && (
                  <div className="flex-1 p-6 flex flex-col justify-between animate-fadeIn bg-[#0a180e]">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-verda-800/40 mb-4">
                        <div className="flex items-center gap-2">
                          <Sprout className="w-5 h-5 text-sprout-400" />
                          <span className="font-display font-bold text-base text-white">Vaibhav Nursery Menu</span>
                        </div>
                        <button onClick={() => handleNavigate('home')} className="p-1 text-slate-400 hover:text-white">
                          ✕
                        </button>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl bg-verda-950 border border-verda-800/60 mb-4">
                        <div className="w-9 h-9 rounded-full bg-verda-700 text-white font-bold flex items-center justify-center text-xs">
                          PG
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white">Priya Ganguly</h4>
                          <span className="text-[10px] text-sprout-400 font-mono">Terrace Level 4 (450 pts)</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <button onClick={() => handleNavigate('home')} className="w-full p-2.5 rounded-lg bg-verda-900/30 hover:bg-verda-900/60 text-left text-slate-200 flex items-center justify-between">
                          <span>🌿 Home Dashboard</span>
                          <ChevronRight className="w-3.5 h-3.5 text-verda-500" />
                        </button>
                        <button onClick={() => handleNavigate('my-plants')} className="w-full p-2.5 rounded-lg bg-verda-900/30 hover:bg-verda-900/60 text-left text-slate-200 flex items-center justify-between">
                          <span>🪴 My Active Garden (Aqua, Orga, Mua)</span>
                          <ChevronRight className="w-3.5 h-3.5 text-verda-500" />
                        </button>
                        <button onClick={() => handleNavigate('schedule')} className="w-full p-2.5 rounded-lg bg-verda-900/30 hover:bg-verda-900/60 text-left text-slate-200 flex items-center justify-between">
                          <span>📅 April Care Calendar</span>
                          <ChevronRight className="w-3.5 h-3.5 text-verda-500" />
                        </button>
                        <button onClick={() => handleNavigate('shop')} className="w-full p-2.5 rounded-lg bg-verda-900/30 hover:bg-verda-900/60 text-left text-slate-200 flex items-center justify-between">
                          <span>🛒 Doorstep Organic Inputs Store</span>
                          <ChevronRight className="w-3.5 h-3.5 text-verda-500" />
                        </button>
                        <button onClick={() => handleNavigate('scanner')} className="w-full p-2.5 rounded-lg bg-verda-900/30 hover:bg-verda-900/60 text-left text-slate-200 flex items-center justify-between">
                          <span>🔬 AI Plant Doctor Camera</span>
                          <ChevronRight className="w-3.5 h-3.5 text-verda-500" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleNavigate('login')}
                      className="w-full py-2.5 rounded-xl bg-red-950/40 border border-red-800/40 text-red-300 font-bold text-xs"
                    >
                      Sign Out
                    </button>
                  </div>
                )}

                {activeScreen === 'my-plants' && (
                  <div className="flex-1 p-5 flex flex-col justify-between animate-fadeIn bg-[#0c1c11]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleNavigate('home')} className="p-1 text-slate-400">
                            <ArrowLeft className="w-4 h-4" />
                          </button>
                          <h3 className="font-bold text-white text-base">My Plants</h3>
                        </div>
                        <span className="text-[10px] font-mono text-sprout-400 bg-verda-950 px-2 py-0.5 rounded-md border border-verda-800">
                          {myPlantsList.length} Active
                        </span>
                      </div>

                      <div className="space-y-3">
                        {myPlantsList.map((p) => (
                          <div key={p.id} className="p-3.5 rounded-2xl bg-botanical-dark/90 border border-verda-700/50 shadow-md">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className={`w-3 h-3 rounded-full ${p.color} animate-pulse`} />
                                <h4 className="font-bold text-white text-sm">{p.name}</h4>
                                <span className="text-[10px] text-slate-400 font-mono">({p.plantType})</span>
                              </div>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-verda-950 text-sprout-300 font-bold border border-verda-800">
                                {p.health}% Health
                              </span>
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-slate-300 mb-3 font-mono">
                              <span>Watered: {p.lastWatered}</span>
                              <span className="text-amber-400">Next: {p.nextWater}</span>
                            </div>

                            <button
                              onClick={() => handleWaterMyPlant(p.id)}
                              className="w-full py-1.5 rounded-xl bg-verda-900/70 hover:bg-verda-800/80 border border-sprout-500/40 text-sprout-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Water {p.name} Now</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleNavigate('maintenance')}
                      className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Plant to Garden</span>
                    </button>
                  </div>
                )}

                {activeScreen === 'schedule' && (
                  <div className="flex-1 p-5 flex flex-col justify-between animate-fadeIn bg-[#0d1f14]">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleNavigate('home')} className="p-1 text-slate-400">
                            <ArrowLeft className="w-4 h-4" />
                          </button>
                          <div>
                            <h3 className="font-bold text-white text-sm">Schedule</h3>
                            <span className="text-[10px] text-sprout-400 font-mono">April 2026</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#09150c] border border-verda-700/50 mb-3">
                        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-mono text-slate-400 font-bold mb-2">
                          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>

                        <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
                          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                            const isWatered = wateredDays.includes(day);
                            const isPlanned = plannedDays.includes(day);

                            return (
                              <div
                                key={day}
                                onClick={() => handleWaterCalendarDay(day)}
                                className={`h-8 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${
                                  isWatered
                                    ? 'bg-cyan-950 border border-cyan-500 text-cyan-200 font-bold'
                                    : isPlanned
                                    ? 'bg-amber-950/60 border border-amber-500/50 text-amber-200'
                                    : 'bg-verda-950/40 text-slate-400 hover:bg-verda-900/50'
                                }`}
                              >
                                <span>{day}</span>
                                {isWatered && <span className="text-[8px] -mt-1">💧</span>}
                                {isPlanned && <span className="text-[8px] -mt-1">⚠️</span>}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-verda-950/60 border border-verda-800/50 flex items-center justify-around text-[10px] font-mono text-slate-200">
                        <div className="flex items-center gap-1.5">
                          <span className="text-cyan-400 text-xs">💧</span>
                          <span>Watered ({wateredDays.length})</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-amber-400 text-xs">⚠️</span>
                          <span>Planned to water</span>
                        </div>
                      </div>

                    </div>

                    <button
                      onClick={() => handleWaterCalendarDay(9)}
                      className="mt-2 w-full py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Droplets className="w-3.5 h-3.5" />
                      <span>Log Today's Irrigation</span>
                    </button>
                  </div>
                )}

                {/* Bottom App Nav */}
                <div className="p-2 bg-[#09150c] border-t border-verda-800/60 flex items-center justify-around text-slate-400 select-none">
                  <button
                    onClick={() => handleNavigate('home')}
                    className={`flex flex-col items-center gap-0.5 text-[9px] font-mono ${
                      activeScreen === 'home' ? 'text-sprout-400 font-bold' : 'hover:text-white'
                    }`}
                  >
                    <Leaf className="w-4 h-4" />
                    <span>Home</span>
                  </button>
                  <button
                    onClick={() => handleNavigate('my-plants')}
                    className={`flex flex-col items-center gap-0.5 text-[9px] font-mono ${
                      activeScreen === 'my-plants' ? 'text-sprout-400 font-bold' : 'hover:text-white'
                    }`}
                  >
                    <Sprout className="w-4 h-4" />
                    <span>My Plants</span>
                  </button>
                  <button
                    onClick={() => handleNavigate('scanner')}
                    className={`flex flex-col items-center gap-0.5 text-[9px] font-mono ${
                      activeScreen === 'scanner' ? 'text-sprout-400 font-bold' : 'hover:text-white'
                    }`}
                  >
                    <Camera className="w-4 h-4" />
                    <span>Scan</span>
                  </button>
                  <button
                    onClick={() => handleNavigate('schedule')}
                    className={`flex flex-col items-center gap-0.5 text-[9px] font-mono ${
                      activeScreen === 'schedule' ? 'text-sprout-400 font-bold' : 'hover:text-white'
                    }`}
                  >
                    <CalendarIcon className="w-4 h-4" />
                    <span>Schedule</span>
                  </button>
                  <button
                    onClick={() => handleNavigate('shop')}
                    className={`flex flex-col items-center gap-0.5 text-[9px] font-mono ${
                      activeScreen === 'shop' ? 'text-sprout-400 font-bold' : 'hover:text-white'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Shop</span>
                  </button>
                </div>

              </div>

              <div className="h-4 bg-[#09150c] flex items-center justify-center">
                <div className="w-32 h-1 bg-slate-600 rounded-full" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
