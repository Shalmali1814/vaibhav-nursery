import React, { useState } from 'react';
import { 
  BarChart3, 
  PieChart, 
  Sparkles, 
  Vote, 
  CheckCircle2, 
  TrendingUp, 
  ArrowUpRight, 
  HelpCircle 
} from 'lucide-react';
import { SURVEY_DATA } from '../data/verdaData';
import { playSproutChime, playSoftClick } from '../utils/audio';

export default function SurveyResearchSection() {
  const [activeQuestionId, setActiveQuestionId] = useState('q1');
  const [userVotes, setUserVotes] = useState({});
  const [pollCelebration, setPollCelebration] = useState(null);

  const activeQuestion = SURVEY_DATA.find((q) => q.id === activeQuestionId) || SURVEY_DATA[0];

  const handleVote = (optionIndex) => {
    playSproutChime();
    setUserVotes((prev) => ({
      ...prev,
      [activeQuestion.id]: optionIndex
    }));
    setPollCelebration(`Thank you for voting! You selected "${activeQuestion.options[optionIndex].label}"`);
    setTimeout(() => setPollCelebration(null), 4000);
  };

  return (
    <section id="research" className="py-20 lg:py-28 relative bg-[#E8E5E5] border-t border-[#DCD7D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dff2e3] border border-[#a8d6b1] text-verda-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <PieChart className="w-3.5 h-3.5" />
            <span>Primary Market Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Market Research & Questionnaires
          </h2>
          <p className="mt-4 text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
            Direct empirical data from the primary user study validating the urgent demand for Vaibhav Nursery's doorstep delivery and terrace farming guidance app.
          </p>
        </div>

        {/* 4 Interactive Survey Questions Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SURVEY_DATA.map((q, idx) => {
            const isSelected = activeQuestionId === q.id;
            const hasVoted = userVotes[q.id] !== undefined;

            return (
              <button
                key={q.id}
                onClick={() => {
                  playSoftClick();
                  setActiveQuestionId(q.id);
                }}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-2 border-verda-600 text-slate-900 shadow-md scale-[1.02]'
                    : 'bg-[#FFFFFF]/80 border border-[#DCD7D7] text-slate-800 hover:text-slate-950 hover:bg-[#FFFFFF]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-verda-800 uppercase">
                      Question {idx + 1}
                    </span>
                    {hasVoted && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#dff2e3] text-verda-900 font-bold">
                        Voted ✓
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold line-clamp-3">
                    {q.question}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#DCD7D7] flex items-center justify-between text-[11px] text-verda-800 font-mono font-semibold">
                  <span>View Breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Question Deep-Dive & Live Interactive Polling Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Animated Survey Chart */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#DCD7D7] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DCD7D7] mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-verda-800 uppercase">
                    Primary Study Data
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mt-1">
                    {activeQuestion.question}
                  </h3>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4 mb-6">
                {activeQuestion.options.map((opt, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                      <span className="text-slate-800">{opt.label}</span>
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {opt.percentage}%
                      </span>
                    </div>

                    <div className="h-4 w-full bg-[#E8E5E5] rounded-full overflow-hidden p-0.5 border border-[#DCD7D7]">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${Math.max(opt.percentage, 4)}%`,
                          backgroundColor: opt.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#dff2e3] border border-[#a8d6b1] text-xs sm:text-sm text-slate-900">
              <strong className="text-verda-950 font-bold block mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-verda-700" /> Key Research Takeaway:
              </strong>
              <p className="text-slate-800 leading-relaxed font-medium">{activeQuestion.insight}</p>
            </div>
          </div>

          {/* Right: Live Interactive Community Poll */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-verda-500 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 text-verda-800 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Vote className="w-4 h-4" />
                <span>Cast Your Live Vote</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                What is your stance?
              </h3>
              <p className="text-xs text-slate-700 mb-6 font-medium">
                Click your preference below to test our community consensus engine!
              </p>

              {/* Vote Buttons */}
              <div className="space-y-3">
                {activeQuestion.options.map((opt, idx) => {
                  const isVoted = userVotes[activeQuestion.id] === idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleVote(idx)}
                      className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                        isVoted
                          ? 'bg-verda-700 text-white border-2 border-verda-800 shadow-md scale-[1.02]'
                          : 'bg-[#F4F2F2] hover:bg-[#E8E5E5] border border-[#DCD7D7] text-slate-900'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {isVoted ? (
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      ) : (
                        <span className="text-[11px] font-mono text-slate-600 font-semibold">Vote</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Alert */}
              {pollCelebration && (
                <div className="mt-4 p-3 rounded-xl bg-[#dff2e3] border border-[#a8d6b1] text-xs text-verda-950 font-bold animate-fadeIn flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-verda-700 shrink-0" />
                  <span>{pollCelebration}</span>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#DCD7D7] flex items-center justify-between text-[11px] text-slate-600 font-mono font-medium">
              <span>{userVotes[activeQuestion.id] !== undefined ? 'Response recorded ✓' : 'Select an option to vote'}</span>
              <span className="text-verda-800 font-bold">Total Surveyed: 500+</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
