// Web Audio API Procedural Sound Engine
// Generates professional sound effects in real-time without external audio files

class AudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.analyser = null;
    this.isMuted = false;
    this.onAudioDataCallback = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.analyser = this.ctx.createAnalyser();
        this.analyser.fftSize = 64;
        this.analyser.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  getAnalyser() {
    return this.analyser;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  playWhoosh() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.setValueAtTime(3.0, t);
    filter.frequency.setValueAtTime(300, t);
    filter.frequency.exponentialRampToValueAtTime(3500, t + 0.18);
    filter.frequency.exponentialRampToValueAtTime(150, t + 0.38);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.4, t + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.analyser);

    whiteNoise.start(t);
    whiteNoise.stop(t + 0.4);
  }

  playImpact() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // Sub thump
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(35, t + 0.4);

    gain.gain.setValueAtTime(0.7, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

    // Transient click/snap
    const snapOsc = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(450, t);
    snapOsc.frequency.exponentialRampToValueAtTime(60, t + 0.08);

    snapGain.gain.setValueAtTime(0.4, t);
    snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    osc.connect(gain);
    snapOsc.connect(snapGain);

    gain.connect(this.analyser);
    snapGain.connect(this.analyser);

    osc.start(t);
    snapOsc.start(t);

    osc.stop(t + 0.6);
    snapOsc.stop(t + 0.08);
  }

  playRiser() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(90, t);
    osc.frequency.exponentialRampToValueAtTime(1200, t + 0.9);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, t);
    filter.frequency.exponentialRampToValueAtTime(5000, t + 0.9);

    gain.gain.setValueAtTime(0.02, t);
    gain.gain.linearRampToValueAtTime(0.35, t + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.95);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.analyser);

    osc.start(t);
    osc.stop(t + 0.95);
  }

  playBassDrop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.exponentialRampToValueAtTime(28, t + 0.8);

    gain.gain.setValueAtTime(0.65, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);

    osc.connect(gain);
    gain.connect(this.analyser);

    osc.start(t);
    osc.stop(t + 0.9);
  }

  playGlitch() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.setValueAtTime(300, t + 0.05);
    osc.frequency.setValueAtTime(1200, t + 0.09);
    osc.frequency.setValueAtTime(450, t + 0.14);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

    osc.connect(gain);
    gain.connect(this.analyser);

    osc.start(t);
    osc.stop(t + 0.22);
  }

  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, t);
    osc.frequency.exponentialRampToValueAtTime(200, t + 0.03);

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    osc.connect(gain);
    gain.connect(this.analyser);

    osc.start(t);
    osc.stop(t + 0.03);
  }
}

export const soundEngine = new AudioSynthesizer();
