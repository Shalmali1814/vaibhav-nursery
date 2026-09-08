import React from 'react';
import { UploadCloud, Scissors, Layers, Sparkles, CheckCircle2, ShieldAlert, FileText, Headphones, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export default function WorkflowSection() {
  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'UploadCloud': return <UploadCloud className="w-6 h-6 text-brand-cyan" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-brand-violet" />;
      case 'Layers': return <Layers className="w-6 h-6 text-brand-pink" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      default: return <CheckCircle2 className="w-6 h-6 text-brand-cyan" />;
    }
  };

  return (
    <section id="workflow" className="py-24 relative bg-[#090810] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-brand-cyan/10 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/30 text-xs font-mono text-brand-violet mb-4">
            <Scissors className="w-3.5 h-3.5" />
            <span>SEAMLESS COLLABORATION PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            From Raw Chaos to{' '}
            <span className="bg-gradient-to-r from-brand-violet via-brand-cyan to-emerald-400 bg-clip-text text-transparent">
              Polished Masterpiece
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            A frictionless 5-step post-production workflow powered by Frame.io timestamped reviews and high-speed cloud sync.
          </p>
        </div>

        {/* 5-Step Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {PORTFOLIO_DATA.workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-white/10 relative flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-2xl font-display font-extrabold text-white/20 group-hover:text-brand-cyan transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-display font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-400">
                Phase {step.step} Complete
              </div>
            </div>
          ))}
        </div>

        {/* Client Guarantees Box */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-brand-violet/15 via-[#16152b] to-brand-cyan/15 border border-white/15 shadow-2xl">
          <h3 className="text-lg sm:text-xl font-display font-bold text-white text-center mb-6">
            The 4-Point Editor Guarantee
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block font-semibold mb-0.5">On-Time Or 20% Refund</strong>
                <span className="text-slate-300">Strict delivery deadlines honored with zero ghosting or delays.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-brand-cyan/20 text-brand-cyan shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block font-semibold mb-0.5">Frame-Accurate Notes</strong>
                <span className="text-slate-300">Click anywhere on Frame.io timeline to leave instant timestamped feedback.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-brand-pink/20 text-brand-pink shrink-0">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block font-semibold mb-0.5">Zero Copyright Claims</strong>
                <span className="text-slate-300">100% commercial licenses for every song, SFX, and graphic asset.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block font-semibold mb-0.5">Strict NDA Protected</strong>
                <span className="text-slate-300">Unreleased product footage and channel strategies kept 100% confidential.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
