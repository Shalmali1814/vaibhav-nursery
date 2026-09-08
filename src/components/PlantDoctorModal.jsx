import React, { useState } from 'react';
import { 
  X, 
  Camera, 
  Sparkles, 
  Upload, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  ShieldCheck,
  Zap,
  Leaf
} from 'lucide-react';
import { SCAN_SAMPLES } from '../data/verdaData';
import { playScanBeep, playSproutChime, playSoftClick } from '../utils/audio';

export default function PlantDoctorModal({ isOpen, onClose }) {
  const [selectedSample, setSelectedSample] = useState(SCAN_SAMPLES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [diagnosis, setDiagnosis] = useState(SCAN_SAMPLES[0]);
  const [customPhotoName, setCustomPhotoName] = useState(null);

  if (!isOpen) return null;

  const handleScanSample = (sample) => {
    playScanBeep();
    setSelectedSample(sample);
    setIsScanning(true);
    setCustomPhotoName(null);

    setTimeout(() => {
      setIsScanning(false);
      setDiagnosis(sample);
      playSproutChime();
    }, 1400);
  };

  const handleSimulateUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCustomPhotoName(file.name);
      playScanBeep();
      setIsScanning(true);

      setTimeout(() => {
        setIsScanning(false);
        setDiagnosis({
          id: 'custom-scan',
          plantName: file.name.replace(/\.[^/.]+$/, ""),
          status: 'Mild Leaf Spot (Cercospora sp.)',
          confidence: '95.4% AI Match',
          severity: 'Early Detection - Treatable',
          image: '🍃',
          symptoms: 'Small circular chlorotic spots with grey center on upper leaf foliage.',
          organicRemedy: 'Prune affected leaves. Apply cold-pressed neem oil (5ml/L) emulsified with gentle soap spray at sunset.',
          prevention: 'Improve morning air circulation and water exclusively at the root base.'
        });
        playSproutChime();
      }, 1600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#FFFFFF] border-2 border-[#DCD7D7] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        
        <button
          onClick={() => {
            playSoftClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#E8E5E5] text-slate-700 hover:text-slate-900 border border-[#DCD7D7] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#DCD7D7]">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-verda-600 to-sprout-500 p-0.5 shadow-md">
            <div className="w-full h-full bg-[#FFFFFF] rounded-[14px] flex items-center justify-center text-verda-800">
              <Camera className="w-6 h-6" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-verda-800 uppercase">
                Vaibhav Nursery AI Vision Engine
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8E5E5] text-verda-950 font-bold border border-[#DCD7D7]">
                Live Scanner
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
              AI Plant Doctor & Disease Diagnostic Lens
            </h3>
          </div>
        </div>

        {/* Scanner Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          
          {/* Left: Viewport */}
          <div className="md:col-span-6 flex flex-col justify-between">
            
            <div className="relative h-60 rounded-2xl bg-[#0e1f13] border-2 border-verda-500 overflow-hidden flex flex-col items-center justify-center">
              <div className="w-36 h-36 border-2 border-dashed border-sprout-400 rounded-2xl relative flex items-center justify-center">
                <span className="text-6xl animate-pulse">
                  {customPhotoName ? '🌿' : selectedSample.image}
                </span>

                {isScanning && (
                  <div className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-sprout-400 to-transparent shadow-lg shadow-sprout-400 animate-bounce" />
                )}
              </div>

              <div className="absolute bottom-3 px-3 py-1 rounded-full bg-black/80 text-[10px] font-mono text-sprout-300 flex items-center gap-1.5">
                {isScanning ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin text-sprout-400" />
                    <span>Analyzing cellular chlorophyll spectral bands...</span>
                  </>
                ) : (
                  <span>Ready • Center leaf in box</span>
                )}
              </div>
            </div>

            {/* Test Sample Triggers */}
            <div className="mt-3">
              <span className="text-[10px] font-mono text-slate-700 font-bold block mb-1.5">
                Or Select a Plant Sample to Diagnose:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {SCAN_SAMPLES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleScanSample(s)}
                    className={`p-2 rounded-xl text-left text-xs transition-all flex items-center gap-2 ${
                      selectedSample.id === s.id && !customPhotoName
                        ? 'bg-verda-600 text-white font-bold'
                        : 'bg-[#E8E5E5] border border-[#DCD7D7] text-slate-800 hover:bg-[#E0DCDC]'
                    }`}
                  >
                    <span className="text-base">{s.image}</span>
                    <span className="truncate">{s.plantName}</span>
                  </button>
                ))}
              </div>

              <label className="mt-2 w-full py-2 px-3 rounded-xl bg-[#E8E5E5] border border-dashed border-[#DCD7D7] hover:border-verda-600 text-xs text-slate-800 flex items-center justify-center gap-2 cursor-pointer transition-colors font-medium">
                <Upload className="w-3.5 h-3.5 text-verda-800" />
                <span>Upload Potted Plant Photo</span>
                <input type="file" accept="image/*" onChange={handleSimulateUpload} className="hidden" />
              </label>
            </div>

          </div>

          {/* Right: AI Diagnosis Results */}
          <div className="md:col-span-6 p-5 rounded-2xl bg-[#F4F2F2] border-2 border-[#DCD7D7] flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#DCD7D7] mb-3">
                <span className="text-xs font-mono font-bold text-verda-800 uppercase">
                  Diagnosis Report
                </span>
                <span className="text-xs font-mono font-bold text-verda-900 bg-verda-100 px-2 py-0.5 rounded-md border border-verda-300">
                  {diagnosis.confidence}
                </span>
              </div>

              <h4 className="font-extrabold text-slate-900 text-lg font-display mb-1">
                {diagnosis.status}
              </h4>
              <span className="text-[11px] font-mono text-amber-800 font-bold block mb-3">
                Severity: {diagnosis.severity}
              </span>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DCD7D7]">
                  <strong className="text-slate-900 block mb-1 font-bold">Observed Symptoms:</strong>
                  <p className="text-slate-700 leading-relaxed font-medium">{diagnosis.symptoms}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-verda-300 text-slate-800">
                  <strong className="text-verda-900 font-bold flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-verda-700" /> 100% Organic Prescription:
                  </strong>
                  <p className="leading-relaxed font-medium">{diagnosis.organicRemedy}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#DCD7D7] text-[10px] text-slate-600 font-mono flex items-center justify-between font-medium">
              <span>Zero chemical pesticides recommended</span>
              <span className="text-verda-800 font-bold">Safe for pets & bees ✓</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
