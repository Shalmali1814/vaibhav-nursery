import React, { useState, useEffect } from 'react';
import { Send, Calendar, Mail, MessageSquare, CheckCircle2, Sparkles, Clock, Link as LinkIcon, DollarSign, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEngine } from '../utils/audioSynthesizer.js';

export default function ContactSection({ prefilledPackage, onClearPackage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channelLink: '',
    projectType: 'youtube',
    budget: '$1,000 - $3,000',
    deadline: 'Within 1-2 Weeks',
    footageLink: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // If user selected an estimate from the PricingCalculator, populate form automatically
  useEffect(() => {
    if (prefilledPackage) {
      setFormData(prev => ({
        ...prev,
        projectType: prefilledPackage.formatName,
        message: `Hi Alex,\n\nI configured a project estimate on your portfolio:\n• Package / Format: ${prefilledPackage.formatName}\n• Quantity: ${prefilledPackage.quantity} video(s)\n• Turnaround: ${prefilledPackage.turnaroundName}\n• Selected Add-ons: ${prefilledPackage.addons.length > 0 ? prefilledPackage.addons.join(', ') : 'None'}\n• Estimated Total: $${prefilledPackage.estimatedPrice}\n\nLooking forward to getting this started!`
      }));
    }
  }, [prefilledPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playImpact();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#08080c] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/3 w-[600px] h-[500px] bg-brand-cyan/15 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono text-brand-cyan mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Let's Make Your Next Video{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-pink bg-clip-text text-transparent">
              Impossible to Skip
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Fill out the project scope below or book a 15-minute discovery call to discuss pacing, retention strategy, and delivery timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Availability (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Quick Calendly Card */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-cyan p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#12111d] rounded-[14px] flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-brand-cyan" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-white">Book a Discovery Call</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Have a complex channel or upcoming launch? Jump on a quick 15-min Google Meet / Zoom call.
                </p>
              </div>

              <a
                href={PORTFOLIO_DATA.creator.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEngine.playClick()}
                className="w-full py-3 rounded-xl text-xs font-bold text-slate-900 bg-gradient-to-r from-brand-cyan to-brand-violet hover:from-white hover:to-brand-cyan transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Schedule 15-Min Chat</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Contact Details */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4 text-xs">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Direct Contact Channels
              </div>

              <div className="space-y-3 font-mono">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-brand-cyan" />
                  <a href={`mailto:${PORTFOLIO_DATA.creator.email}`} className="hover:text-white transition-colors truncate">
                    {PORTFOLIO_DATA.creator.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <MessageSquare className="w-4 h-4 text-brand-violet" />
                  <span>Discord: <strong className="text-white">@{PORTFOLIO_DATA.creator.discord}</strong></span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Response Time: <strong className="text-emerald-400">&lt; 2 Hours</strong></span>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-3 font-mono">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
              <div>
                <strong className="block text-white font-bold">Currently Accepting Clients</strong>
                <span>Q3 / Q4 slots open for YouTube & Short-Form retainers.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Intake Form (8 cols) */}
          <div className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-white">
                  Project Brief Received!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you! I have received your project details and will review your footage and brief. You'll receive a detailed proposal and Frame.io workspace invite within 2-4 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      if (onClearPackage) onClearPackage();
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {prefilledPackage && (
                  <div className="p-4 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 text-xs text-brand-cyan flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Applied Configuration from Calculator: <strong>{prefilledPackage.formatName} (~${prefilledPackage.estimatedPrice})</strong></span>
                    </div>
                    <button
                      type="button"
                      onClick={onClearPackage}
                      className="text-slate-400 hover:text-white underline text-[11px]"
                    >
                      Clear
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Marcus Vance or Apex Media"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@creatorbrand.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Channel or Website link */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                      YouTube / Socials / Website URL
                    </label>
                    <input
                      type="url"
                      name="channelLink"
                      placeholder="https://youtube.com/@yourchannel"
                      value={formData.channelLink}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  {/* Estimated Budget Range */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Estimated Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0b15] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                    >
                      <option value="Under $500">Under $500 (Single Short/Reel)</option>
                      <option value="$500 - $1,500">$500 - $1,500 (1-3 Videos)</option>
                      <option value="$1,500 - $3,500">$1,500 - $3,500 (Full Channel Batch)</option>
                      <option value="$3,500+">$3,500+ (Monthly Retainer / Commercial)</option>
                    </select>
                  </div>
                </div>

                {/* Raw Footage Link */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Raw Footage / Reference Link (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      name="footageLink"
                      placeholder="Google Drive, Dropbox, WeTransfer, or Frame.io URL"
                      value={formData.footageLink}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                    <LinkIcon className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Project Brief / Message */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Project Vision, Style References & Goals *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about the video style you want, creators you admire (e.g. Ali Abdaal, Iman Gadzhi, Vox, MagnatesMedia), pacing expectations, and any target deadlines..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-pink hover:from-white hover:to-brand-cyan transition-all duration-300 shadow-xl shadow-brand-cyan/25 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {submitting ? (
                    <span>Transmitting Project Brief...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] font-mono text-slate-500">
                  🔒 Strictly confidential. 100% NDA protected. Never shared with 3rd parties.
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
