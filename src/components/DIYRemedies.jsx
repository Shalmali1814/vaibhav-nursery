import React, { useState } from 'react';
import { 
  FlaskConical, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Droplets, 
  BookOpen, 
  ArrowRight
} from 'lucide-react';
import { DIY_RECIPES } from '../data/verdaData';
import { playSoftClick, playSproutChime } from '../utils/audio';

export default function DIYRemedies() {
  const [selectedRecipe, setSelectedRecipe] = useState(DIY_RECIPES[0]);

  return (
    <section id="diy-guides" className="py-20 lg:py-28 relative bg-[#E8E5E5] border-t border-[#DCD7D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#DCD7D7] text-verda-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Organic Alchemy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            DIY Natural Farming Elixirs
          </h2>
          <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Ancient zero-budget natural farming recipes you can brew at home or on the farm without spending on synthetic agro-chemicals.
          </p>
        </div>

        {/* Recipe Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {DIY_RECIPES.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => {
                playSoftClick();
                setSelectedRecipe(recipe);
              }}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                selectedRecipe.id === recipe.id
                  ? 'bg-verda-600 text-white shadow-md shadow-verda-600/30 scale-105'
                  : 'bg-[#FFFFFF] text-slate-700 hover:text-slate-900 border border-[#DCD7D7] hover:bg-[#F4F2F2]'
              }`}
            >
              <span className="text-lg">{recipe.icon}</span>
              <span>{recipe.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Recipe Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Purpose & Ingredients Checklist */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#DCD7D7] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DCD7D7] mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedRecipe.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg font-display">
                      {selectedRecipe.title}
                    </h3>
                    <span className="text-[11px] text-verda-800 font-mono font-bold">
                      {selectedRecipe.prepTime} • Shelf Life: {selectedRecipe.shelfLife}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed p-3.5 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] mb-6 font-medium">
                <strong className="text-verda-900 font-bold block mb-0.5">Core Purpose:</strong>
                {selectedRecipe.purpose}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold text-verda-800 uppercase tracking-wider mb-3">
                  Ingredients Needed
                </h4>
                <div className="space-y-2">
                  {selectedRecipe.ingredients.map((ing, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-verda-700 shrink-0" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DCD7D7] text-[11px] text-slate-600 font-mono font-medium">
              Tested & endorsed by Vaibhav Nursery agronomists.
            </div>
          </div>

          {/* Right Column: Steps */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-verda-500 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DCD7D7] mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-verda-800 uppercase">
                    Step-by-Step Guide
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
                    Preparation & Application Protocol
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7] flex items-center justify-center text-verda-700">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3.5">
                {selectedRecipe.steps.map((st, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F4F2F2] border border-[#DCD7D7] text-xs sm:text-sm text-slate-800 font-medium">
                    <span className="w-6 h-6 rounded-xl bg-verda-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      {idx + 1}
                    </span>
                    <p className="leading-relaxed font-normal">{st}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DCD7D7] flex items-center justify-between">
              <span className="text-xs text-verda-800 font-mono font-bold">Zero synthetic additives required.</span>
              <button
                onClick={() => {
                  playSproutChime();
                  const el = document.querySelector('#app-simulator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-verda-600 hover:bg-verda-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Log Recipe in App Calendar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
