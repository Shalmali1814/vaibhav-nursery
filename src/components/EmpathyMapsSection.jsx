import React, { useState } from 'react';
import { 
  Users, 
  Brain, 
  Ear, 
  Eye, 
  MessageSquare, 
  AlertOctagon, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Heart 
} from 'lucide-react';
import { EMPATHY_MAPS } from '../data/verdaData';
import { playSoftClick, playSproutChime } from '../utils/audio';

export default function EmpathyMapsSection() {
  const [activePersonaKey, setActivePersonaKey] = useState('farmer');
  const [selectedInsight, setSelectedInsight] = useState(null);

  const activePersona = EMPATHY_MAPS[activePersonaKey];

  const handleSwitchPersona = (key) => {
    playSproutChime();
    setActivePersonaKey(key);
    setSelectedInsight(null);
  };

  const quadrantSections = [
    {
      id: 'thinksFeels',
      title: 'THINKS & FEELS',
      subtitle: 'Internal motivations, doubts & regulatory concerns',
      icon: Brain,
      color: 'bg-[#ede5f5]/80',
      borderColor: 'border-[#cbb9e2]',
      iconColor: 'text-purple-700',
      items: activePersona.thinksFeels
    },
    {
      id: 'hears',
      title: 'HEARS',
      subtitle: 'Auditor advice, news, union advisories & community voice',
      icon: Ear,
      color: 'bg-[#e4effa]/80',
      borderColor: 'border-[#bad7f2]',
      iconColor: 'text-blue-700',
      items: activePersona.hears
    },
    {
      id: 'sees',
      title: 'SEES',
      subtitle: 'Market export trends, emerging tech & consumer shifts',
      icon: Eye,
      color: 'bg-[#e0f3e6]/80',
      borderColor: 'border-[#a8dcc0]',
      iconColor: 'text-emerald-700',
      items: activePersona.sees
    },
    {
      id: 'saysDoes',
      title: 'SAYS & DOES',
      subtitle: 'Buyer communication, farm practices & documentation',
      icon: MessageSquare,
      color: 'bg-[#fcf0dc]/80',
      borderColor: 'border-[#edd0a4]',
      iconColor: 'text-amber-700',
      items: activePersona.saysDoes
    }
  ];

  return (
    <section id="empathy" className="py-20 lg:py-28 relative bg-[#F4F2F2] border-t border-[#DCD7D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dff2e3] border border-[#a8d6b1] text-verda-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Grower Personas & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            User Empathy Maps
          </h2>
          <p className="mt-4 text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
            Directly modeled from field research: understanding both commercial organic producers and home terrace gardeners.
          </p>
        </div>

        {/* Persona Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#FFFFFF] border border-[#DCD7D7] rounded-2xl shadow-xs">
            <button
              onClick={() => handleSwitchPersona('farmer')}
              className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePersonaKey === 'farmer'
                  ? 'bg-verda-800 text-white shadow-md scale-[1.02]'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-[#E8E5E5]'
              }`}
            >
              <span className="text-lg">👨‍🌾</span>
              <span>Commercial Organic Farmer</span>
            </button>

            <button
              onClick={() => handleSwitchPersona('enthusiast')}
              className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePersonaKey === 'enthusiast'
                  ? 'bg-gradient-to-r from-verda-600 to-sprout-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-[#E8E5E5]'
              }`}
            >
              <span className="text-lg">🌱</span>
              <span>Urban Terrace Enthusiast</span>
            </button>
          </div>
        </div>

        {/* Active Persona Banner */}
        <div className="mb-8 p-5 rounded-2xl bg-[#FFFFFF] border border-[#DCD7D7] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#dff2e3] border border-[#a8d6b1] flex items-center justify-center text-2xl shadow-xs">
              {activePersona.avatar}
            </div>
            <div>
              <span className="text-[11px] font-mono text-verda-800 font-bold uppercase">
                {activePersona.role} • {activePersona.location}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                {activePersona.title}
              </h3>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#E8E5E5] border border-[#DCD7D7] text-xs text-slate-800 max-w-md font-medium">
            <strong className="text-verda-950 font-bold block mb-0.5">Primary Target:</strong>
            {activePersona.primaryGoal}
          </div>
        </div>

        {/* 4 Core Radar Quadrants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {quadrantSections.map((quad) => {
            const IconComp = quad.icon;
            return (
              <div
                key={quad.id}
                className={`p-6 rounded-3xl ${quad.color} border-2 ${quad.borderColor} shadow-xs`}
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-black/5">
                  <div className={`w-9 h-9 rounded-xl bg-[#FFFFFF] border border-black/5 flex items-center justify-center ${quad.iconColor} shadow-xs`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base tracking-wide font-display">
                      {quad.title}
                    </h4>
                    <span className="text-[11px] text-slate-600 font-mono font-medium">
                      {quad.subtitle}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {quad.items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        playSoftClick();
                        setSelectedInsight(item);
                      }}
                      className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DCD7D7] hover:border-verda-500 hover:shadow-xs transition-all text-xs text-slate-900 leading-relaxed cursor-pointer flex items-start gap-2.5 group font-medium"
                    >
                      <span className="text-verda-700 font-bold group-hover:scale-125 transition-transform mt-0.5">
                        •
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pains & Gains Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Pains Card */}
          <div className="p-6 rounded-3xl bg-[#fae8e8]/80 border-2 border-rose-300 shadow-xs">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-rose-200">
              <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-rose-200 flex items-center justify-center text-rose-700 shadow-xs">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base font-display">
                  PAINS & FRICTIONS
                </h4>
                <span className="text-[11px] text-rose-800 font-mono font-medium">
                  Financial stress, certification costs & uncertainty
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              {activePersona.pains.map((pain, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#FFFFFF] border border-rose-200 text-xs text-slate-900 font-medium flex items-start gap-2.5">
                  <span className="text-rose-700 font-bold">⚠️</span>
                  <span>{pain}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gains Card */}
          <div className="p-6 rounded-3xl bg-[#e0f3e6]/80 border-2 border-[#a8dcc0] shadow-xs">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-verda-200">
              <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-verda-200 flex items-center justify-center text-verda-700 shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base font-display">
                  GAINS & REWARDS
                </h4>
                <span className="text-[11px] text-verda-800 font-mono font-medium">
                  Health, rich living soil & direct premium contracts
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              {activePersona.gains.map((gain, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#FFFFFF] border border-verda-200 text-xs text-slate-900 font-medium flex items-start gap-2.5">
                  <span className="text-verda-700 font-bold">✨</span>
                  <span>{gain}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* VERDA Targeted Solution Footer */}
        <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DCD7D7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-verda-700 shrink-0" />
            <div>
              <span className="text-[10px] font-mono font-bold text-verda-800 uppercase">
                Vaibhav Nursery Persona Alignment
              </span>
              <p className="text-xs sm:text-sm text-slate-900 mt-0.5 font-semibold">
                {activePersona.verdaSolution}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playSoftClick();
              const el = document.querySelector('#app-simulator');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2 rounded-xl bg-verda-700 hover:bg-verda-800 text-white font-bold text-xs transition-colors shrink-0 shadow-xs"
          >
            Explore In-App Features →
          </button>
        </div>

      </div>
    </section>
  );
}
