import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Sparkles, Wind, Zap, Activity, Radio, Cpu, Sliders, Music, Headphones } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function Soundboard() {
  const [activeSFX, setActiveSFX] = useState(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  const getSFXIcon = (iconName) => {
    switch (iconName) {
      case 'Wind': return <Wind className="w-5 h-5 text-cyan-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-pink-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-violet-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-blue-400" />;
      default: return <Volume2 className="w-5 h-5 text-brand-cyan" />;
    }
  };

  const handlePlaySound = (sfx) => {
    setActiveSFX(sfx.id);

    if (sfx.type === 'whoosh') soundEngine.playWhoosh();
    else if (sfx.type === 'impact') soundEngine.playImpact();
    else if (sfx.type === 'riser') soundEngine.playRiser();
    else if (sfx.type === 'bassDrop') soundEngine.playBassDrop();
    else if (sfx.type === 'glitch') soundEngine.playGlitch();
    else if (sfx.type === 'click') soundEngine.playClick();

    setTimeout(() => {
      setActiveSFX(null);
    }, 600);
  };

  // Real-time Audio Visualizer Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.offsetWidth * 2);
    let height = (canvas.height = canvas.offsetHeight * 2);

    const render = () => {
      animationFrameRef.current = requestAnimationFrame(render);
      const analyser = soundEngine.getAnalyser();

      ctx.clearRect(0, 0, width, height);

      const bufferLength = analyser ? analyser.frequencyBinCount : 32;
      const dataArray = new Uint8Array(bufferLength);

      if (analyser) {
        analyser.getByteFrequencyData(dataArray);
      }

      const barWidth = (width / bufferLength) * 1.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const val = dataArray[i] || Math.sin(Date.now() * 0.003 + i) * 6 + 10;
        const barHeight = (val / 255) * (height * 0.85);

        const gradient = ctx.createLinearGradient(0, height, 0, 0);
        gradient.addColorStop(0, '#00f2fe');
        gradient.addColorStop(0.5, '#9d4edd');
        gradient.addColorStop(1, '#f72585');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, height - barHeight, barWidth - 4, barHeight);

        x += barWidth;
      }
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="soundboard" className="py-24 relative bg-[#090810] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[350px] bg-brand-violet/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-xs font-mono text-brand-pink mb-4">
            <Headphones className="w-3.5 h-3.5" />
            <span>SOUND DESIGN & FOLEY ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Sound Is 50% Of The{' '}
            <span className="bg-gradient-to-r from-brand-pink via-brand-violet to-brand-cyan bg-clip-text text-transparent">
              Viewer Experience
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Click any trigger below to test procedural sound effects generated live via the Web Audio API engine. In production edits, every cut is layered with 8 to 15 discrete audio tracks.
          </p>
        </div>

        {/* Soundboard Console Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative max-w-5xl mx-auto">
          
          {/* Top Console HUD */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-bold text-white uppercase">FAIRLIGHT & AUDITION ENGINE</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400">-14 LUFS TARGET MASTER</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <span>SAMPLE RATE: 48.0 kHz / 24-BIT</span>
            </div>
          </div>

          {/* Visualizer Canvas Monitor */}
          <div className="w-full h-24 sm:h-32 bg-black/60 rounded-2xl border border-white/10 p-3 mb-8 relative overflow-hidden flex items-end">
            <canvas ref={canvasRef} className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 text-[10px] font-mono text-white/50 flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-brand-cyan animate-pulse" />
              <span>REAL-TIME FFT SPECTRUM ANALYZER</span>
            </div>
          </div>

          {/* Interactive Trigger Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
            {PORTFOLIO_DATA.soundboardSFX.map((sfx) => {
              const isActive = activeSFX === sfx.id;

              return (
                <button
                  key={sfx.id}
                  onClick={() => handlePlaySound(sfx)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden group ${
                    isActive
                      ? 'bg-gradient-to-tr from-brand-violet to-brand-cyan border-white text-slate-950 scale-[0.98] shadow-lg shadow-brand-cyan/40'
                      : 'bg-white/[0.04] border-white/10 hover:border-brand-cyan/40 hover:bg-white/[0.08] text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-xl border ${
                      isActive ? 'bg-black/20 border-white/20' : 'bg-black/40 border-white/5'
                    }`}>
                      {getSFXIcon(sfx.icon)}
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-black/30 text-white' : 'bg-white/5 text-slate-400'
                    }`}>
                      CLICK TO TRIGGER
                    </span>
                  </div>

                  <div className={`text-sm sm:text-base font-display font-bold ${
                    isActive ? 'text-slate-950' : 'text-white group-hover:text-brand-cyan'
                  } transition-colors`}>
                    {sfx.name}
                  </div>

                  <div className={`text-xs mt-1 ${
                    isActive ? 'text-slate-900 font-medium' : 'text-slate-400'
                  }`}>
                    {sfx.desc}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Audio Engineering Standard Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
            <div className="flex items-start gap-2.5 text-slate-300">
              <Sparkles className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Noise Reduction:</strong>
                iZotope RX 10 spectral repair removes room echo, clicks, and background hum.
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-300">
              <Music className="w-4 h-4 text-brand-violet shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Beat-Synced Cuts:</strong>
                Sub-frame accurate visual cuts locked into drum transients and bass drops.
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-300">
              <Sliders className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Loudness Mastering:</strong>
                Mixed to optimal platform targets (-14 LUFS for YouTube, -13 LUFS for Reels).
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
