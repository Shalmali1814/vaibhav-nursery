import React, { useState } from 'react';
import { 
  Network, 
  Search, 
  Sparkles, 
  Wheat, 
  Cpu, 
  Flower2, 
  Trees, 
  Microscope, 
  Layers, 
  Dna, 
  ShieldCheck, 
  Bug, 
  Fish, 
  Coins, 
  GraduationCap, 
  Milk, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Leaf 
} from 'lucide-react';
import { AGRICULTURE_BRANCHES } from '../data/verdaData';
import { playSoftClick, playSproutChime } from '../utils/audio';

const iconMap = {
  Wheat: Wheat,
  Cpu: Cpu,
  Flower2: Flower2,
  Trees: Trees,
  Microscope: Microscope,
  Layers: Layers,
  Dna: Dna,
  ShieldCheck: ShieldCheck,
  Bug: Bug,
  Fish: Fish,
  Coins: Coins,
  GraduationCap: GraduationCap,
  Milk: Milk,
  Sparkles: Sparkles,
};

export default function BranchesOfAgriculture() {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Plant & Soil', 'Tech & Systems', 'Plant Health', 'Ecology & Trees', 'Livestock & Animals', 'Economics & Policy', 'Core Focus'];

  const filteredBranches = AGRICULTURE_BRANCHES.filter((branch) => {
    const matchesSearch = branch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          branch.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          branch.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || branch.category === selectedCategory || (selectedCategory === 'Core Focus' && branch.isPrimary);
    return matchesSearch && matchesCategory;
  });

  const handleSelectBranch = (branch) => {
    playSproutChime();
    setSelectedBranch(branch);
  };

  return (
    <section id="branches" className="py-20 lg:py-28 relative bg-[#F4F2F2] border-t border-[#DCD7D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dff2e3] border border-[#a8d6b1] text-verda-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>14 Agricultural Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            14 Branches of Agriculture
          </h2>
          <p className="mt-4 text-slate-800 text-sm sm:text-base leading-relaxed font-normal">
            As mapped in the Vaibhav Nursery blueprint, modern sustainable farming is an interconnected ecosystem spanning 14 scientific disciplines—all converging at <strong>Organic Farming</strong>.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#FFFFFF] border border-[#DCD7D7] rounded-2xl shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playSoftClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-verda-700 text-white shadow-xs'
                    : 'text-slate-700 hover:text-verda-800 hover:bg-[#E8E5E5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-verda-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search branch, tech, or soil..."
              className="w-full pl-9 pr-4 py-2 bg-[#FFFFFF] border border-[#DCD7D7] rounded-xl text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-verda-600 shadow-xs font-medium"
            />
          </div>

        </div>

        {/* Visual Mindmap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredBranches.map((branch) => {
            const IconComponent = iconMap[branch.icon] || Sparkles;
            const isOrganicCore = branch.isPrimary;

            return (
              <div
                key={branch.id}
                onClick={() => handleSelectBranch(branch)}
                className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between shadow-xs ${
                  isOrganicCore
                    ? 'bg-gradient-to-br from-[#dff2e3] via-[#FFFFFF] to-[#dff2e3] border-2 border-verda-600 shadow-md sm:col-span-2 lg:col-span-2'
                    : 'bg-[#FFFFFF] border border-[#DCD7D7] hover:border-verda-500 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isOrganicCore 
                        ? 'bg-verda-700 text-white shadow-md' 
                        : 'bg-[#dff2e3] border border-[#a8d6b1] text-verda-900'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full ${
                      isOrganicCore 
                        ? 'bg-verda-800 text-white' 
                        : 'bg-[#E8E5E5] text-slate-800 border border-[#DCD7D7]'
                    }`}>
                      {branch.category}
                    </span>
                  </div>

                  <h3 className={`font-bold font-display text-base group-hover:text-verda-800 transition-colors ${
                    isOrganicCore ? 'text-xl text-slate-900' : 'text-slate-900'
                  }`}>
                    {branch.title}
                  </h3>

                  <p className="text-xs text-slate-700 mt-2 leading-relaxed font-medium">
                    {branch.shortDesc}
                  </p>
                </div>

                {/* Tags & Footnote */}
                <div className="mt-4 pt-3 border-t border-[#DCD7D7] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {branch.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-[#E8E5E5] text-slate-800 font-semibold">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-verda-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Central Mindmap Linker Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FFFFFF] border border-[#DCD7D7] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-verda-600 to-sprout-500 p-0.5 shrink-0 shadow-md">
              <div className="w-full h-full bg-[#FFFFFF] rounded-[14px] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-verda-700 animate-pulse" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                How Vaibhav Nursery Unifies All 14 Disciplines
              </h4>
              <p className="text-xs text-slate-700 mt-0.5 font-medium">
                From Soil Biology (Jeevamrutha) to Plant Pathology (AI Disease Scanner) and Agricultural Economics (Direct Nursery Marketplace), Vaibhav Nursery wraps these complex sciences into 1 simple platform.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playSoftClick();
              const el = document.querySelector('#solution');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-verda-700 hover:bg-verda-800 text-white font-bold text-xs transition-colors shrink-0 shadow-xs"
          >
            See Problem & Solution Matrix
          </button>
        </div>

      </div>

      {/* Branch Detail Modal */}
      {selectedBranch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#FFFFFF] border-2 border-[#DCD7D7] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => {
                playSoftClick();
                setSelectedBranch(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#E8E5E5] text-slate-700 hover:text-slate-900 transition-colors border border-[#DCD7D7]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-verda-600 to-sprout-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#FFFFFF] rounded-[14px] flex items-center justify-center text-verda-700">
                  {(() => {
                    const Comp = iconMap[selectedBranch.icon] || Sparkles;
                    return <Comp className="w-6 h-6" />;
                  })()}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono text-verda-800 uppercase font-bold tracking-wider">
                  {selectedBranch.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                  {selectedBranch.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-800">
              <div className="p-4 rounded-xl bg-[#F4F2F2] border border-[#DCD7D7]">
                <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-verda-700" />
                  <span>Domain Overview</span>
                </h4>
                <p className="leading-relaxed text-slate-700">
                  {selectedBranch.fullDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#dff2e3] border border-[#a8d6b1]">
                <h4 className="font-bold text-verda-950 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-verda-700" />
                  <span>How Vaibhav Nursery Implements This Branch</span>
                </h4>
                <p className="leading-relaxed text-slate-900 font-medium">
                  {selectedBranch.verdaIntegration}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-600 font-bold block mb-2">
                  Specialized Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedBranch.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-[#E8E5E5] border border-[#DCD7D7] text-xs text-slate-800 font-semibold">
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DCD7D7] flex justify-end">
              <button
                onClick={() => {
                  playSoftClick();
                  setSelectedBranch(null);
                }}
                className="px-5 py-2 rounded-xl bg-verda-700 hover:bg-verda-800 text-white font-bold text-xs transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
