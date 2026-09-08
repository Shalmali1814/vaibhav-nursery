import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, TrendingUp, CheckCircle, Award, Film, Sparkles, Flame, Tag } from 'lucide-react';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function ProjectModal({ project, isOpen, onClose, onBookProject }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const togglePlay = () => {
    soundEngine.playClick();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    soundEngine.playClick();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const isVertical = project.aspectRatio === '9:16';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#0f0e17] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-black/50 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs font-bold uppercase">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-display font-bold text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          
          {/* Video Preview Container */}
          <div className={`relative bg-black rounded-2xl overflow-hidden border border-white/10 mx-auto shadow-2xl flex items-center justify-center ${
            isVertical ? 'max-w-xs aspect-[9/16]' : 'w-full aspect-video'
          }`}>
            <video
              ref={videoRef}
              src={project.videoUrl}
              onEnded={() => setIsPlaying(false)}
              playsInline
              autoPlay
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/30">
              <div className="flex items-center justify-between pointer-events-auto">
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono text-white border border-white/10">
                  {project.client}
                </span>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {!isPlaying && (
                <div className="self-center pointer-events-auto">
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full bg-brand-cyan text-slate-950 flex items-center justify-center shadow-xl shadow-brand-cyan/40 hover:scale-110 transition-transform"
                  >
                    <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between text-xs font-mono text-white/90">
                <span>Duration: {project.duration}</span>
                <span className="text-brand-cyan font-bold">{project.retentionRate}</span>
              </div>
            </div>
          </div>

          {/* Performance & Analytics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Total Reach</span>
              </div>
              <div className="text-xl font-display font-bold text-white">{project.views}</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Viewer Retention</span>
              </div>
              <div className="text-xl font-display font-bold text-emerald-400">{project.retentionRate}</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1">
                <Award className="w-4 h-4 text-brand-violet" />
                <span>Client Category</span>
              </div>
              <div className="text-base font-display font-bold text-white truncate">{project.client}</div>
            </div>
          </div>

          {/* Deep-Dive Case Breakdown */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                The Editing Strategy
              </h4>
              <p className="text-slate-200 text-sm leading-relaxed">{project.highlight}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Challenge
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">{project.challenge}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Execution & Impact
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Software & Skills Stack */}
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-brand-violet" />
              <span>Production Toolchain Used:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-medium text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer CTA */}
        <div className="p-4 sm:p-6 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Ready to achieve similar retention and views for your channel or brand?
          </div>
          <button
            onClick={() => {
              soundEngine.playImpact();
              onClose();
              onBookProject(project);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-brand-cyan to-brand-violet hover:from-white hover:to-brand-cyan transition-all shadow-lg shadow-brand-cyan/20"
          >
            Book Similar Style Video →
          </button>
        </div>

      </div>
    </div>
  );
}
