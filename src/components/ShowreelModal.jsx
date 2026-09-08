import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles, Film, Clock, Eye } from 'lucide-react';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function ShowreelModal({ isOpen, onClose, videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

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

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      soundEngine.playClick();
    }
  };

  const cycleSpeed = () => {
    soundEngine.playClick();
    const speeds = [0.5, 1, 1.5, 2];
    const nextIndex = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIndex];
    setPlaybackSpeed(nextSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
    }
  };

  const toggleMute = () => {
    soundEngine.playClick();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullScreen = () => {
    soundEngine.playClick();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return '00:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const frames = Math.floor((timeInSeconds % 1) * 30);
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#0e0d17] border border-white/15 rounded-2xl overflow-hidden shadow-2xl shadow-brand-cyan/20 flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-brand-violet/20 text-brand-violet border border-brand-violet/30 font-bold">
              <Film className="w-3.5 h-3.5" />
              <span>SHOWREEL 2025</span>
            </div>
            <span className="hidden sm:inline text-slate-400">Alex Vance • Senior Video Editor & Motion Designer</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-brand-cyan font-bold">{formatTime(currentTime)}</span>
            <button
              onClick={() => {
                soundEngine.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player Box */}
        <div className="relative bg-black aspect-video flex items-center justify-center overflow-hidden group">
          <video
            ref={videoRef}
            src={videoUrl}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            playsInline
            autoPlay
            className="w-full h-full object-contain cursor-pointer"
            onClick={togglePlay}
          />

          {/* Big Play Overlay if Paused */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute w-20 h-20 rounded-full bg-brand-cyan/90 text-slate-950 flex items-center justify-center shadow-2xl shadow-brand-cyan/50 hover:scale-110 transition-transform"
            >
              <Play className="w-8 h-8 fill-slate-950 translate-x-1" />
            </button>
          )}

          {/* Scannable HUD Guidelines */}
          <div className="absolute top-4 left-4 pointer-events-none text-[10px] font-mono text-white/40 border-t border-l border-white/20 pt-1 pl-1">
            SAFE_AREA_90% [REC]
          </div>
          <div className="absolute bottom-16 right-4 pointer-events-none text-[10px] font-mono text-white/40 border-b border-r border-white/20 pb-1 pr-1">
            4K UHD (3840x2160)
          </div>

          {/* Bottom Custom Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 transition-opacity duration-300">
            {/* Scrubber Timeline Bar */}
            <div
              ref={progressBarRef}
              onClick={handleSeek}
              className="w-full h-2.5 bg-white/20 hover:h-3.5 rounded-full cursor-pointer relative transition-all mb-3 overflow-hidden"
            >
              <div
                className="h-full bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-pink relative"
                style={{ width: `${progressPercent}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-lg shadow-brand-cyan"></div>
              </div>
            </div>

            {/* Buttons Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <div className="text-slate-300 text-xs">
                  <span className="text-white font-bold">{formatTime(currentTime)}</span>
                  <span className="text-slate-500 mx-1">/</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Speed toggle */}
                <button
                  onClick={cycleSpeed}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 font-bold"
                >
                  {playbackSpeed}x SPEED
                </button>

                {/* Fullscreen */}
                <button
                  onClick={handleFullScreen}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Metadata / Production Breakdown footer */}
        <div className="p-4 sm:p-5 bg-[#0a0912] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-300">Included Disciplines:</span>
            {["Fast-Paced YouTube", "Viral 9:16 Shorts", "Commercial Grading", "3D Camera Tracking", "Custom Foley SFX"].map((tag, i) => (
              <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              soundEngine.playImpact();
              onClose();
              const el = document.getElementById('calculator');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-brand-cyan to-brand-violet text-slate-950 hover:brightness-110 transition-all shadow-md shadow-brand-cyan/20"
          >
            Hire For Your Next Project →
          </button>
        </div>

      </div>
    </div>
  );
}
