import React, { useState } from 'react';
import { PlasmaConfig, PlasmaPreset } from '../../types';
import { Settings, Play, Pause, Sparkles, Activity, Palette, ChevronDown, ChevronUp } from 'lucide-react';

interface PlasmaControlsProps {
  config: PlasmaConfig;
  onUpdate: (config: Partial<PlasmaConfig>) => void;
  onPresetChange: (preset: PlasmaPreset) => void;
  onTogglePause: () => void;
  fps: number;
}

const PRESET_OPTIONS: { id: PlasmaPreset; name: string; colorClass: string }[] = [
  { id: 'cosmic-purple', name: 'Cosmic Purple', colorClass: 'bg-purple-600' },
  { id: 'cyber-cyan', name: 'Cyber Cyan', colorClass: 'bg-cyan-500' },
  { id: 'solar-ember', name: 'Solar Ember', colorClass: 'bg-amber-500' },
  { id: 'aurora-matrix', name: 'Aurora Matrix', colorClass: 'bg-emerald-500' },
  { id: 'neon-synth', name: 'Neon Synth', colorClass: 'bg-pink-500' },
];

export const PlasmaControls: React.FC<PlasmaControlsProps> = ({
  config,
  onUpdate,
  onPresetChange,
  onTogglePause,
  fps,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Expanded Control Card */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-2xl glass-panel p-5 shadow-2xl border border-purple-500/20 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 dark:border-white/10 border-slate-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <h3 className="text-sm font-semibold tracking-wide text-slate-100 dark:text-slate-100 light:text-slate-900">
                Plasma Motion FX
              </h3>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-800/80 text-[11px] font-mono text-emerald-400 border border-emerald-500/20">
              <Activity className="w-3 h-3 animate-spin-slow" />
              <span>{fps} FPS</span>
            </div>
          </div>

          {/* Palette Selector */}
          <div className="mt-4">
            <label className="text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-1.5 mb-2">
              <Palette className="w-3.5 h-3.5 text-purple-400" />
              Theme Palettes
            </label>
            <div className="grid grid-cols-2 gap-2">
              {PRESET_OPTIONS.map((p) => {
                const isActive = config.preset === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => onPresetChange(p.id)}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all text-left ${
                      isActive
                        ? 'bg-purple-600/30 text-purple-300 border border-purple-500/50 shadow-sm'
                        : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-transparent'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${p.colorClass} shadow-sm`} />
                    <span className="truncate">{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Motion Speed Slider */}
          <div className="mt-4">
            <div className="flex justify-between items-center text-xs text-slate-300 mb-1.5">
              <span>Wave Speed</span>
              <span className="font-mono text-purple-400">{config.speed.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="2.5"
              step="0.1"
              value={config.speed}
              disabled={config.paused}
              onChange={(e) => onUpdate({ speed: parseFloat(e.target.value) })}
              className="w-full accent-purple-500 bg-slate-800 rounded-lg h-1.5 cursor-pointer disabled:opacity-50"
              aria-label="Plasma wave animation speed"
            />
          </div>

          {/* Wave Complexity Slider */}
          <div className="mt-3">
            <div className="flex justify-between items-center text-xs text-slate-300 mb-1.5">
              <span>Wave Density</span>
              <span className="font-mono text-purple-400">{config.complexity.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.1"
              value={config.complexity}
              onChange={(e) => onUpdate({ complexity: parseFloat(e.target.value) })}
              className="w-full accent-purple-500 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
              aria-label="Plasma wave complexity"
            />
          </div>

          {/* Toggles */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <button
              onClick={() => onUpdate({ showParticles: !config.showParticles })}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                config.showParticles
                  ? 'bg-purple-600/20 text-purple-300 border-purple-500/40'
                  : 'bg-slate-800/40 text-slate-400 border-slate-700/50'
              }`}
            >
              Quantum Sparks: {config.showParticles ? 'ON' : 'OFF'}
            </button>

            <button
              onClick={onTogglePause}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                config.paused
                  ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/30'
                  : 'bg-purple-600/30 text-purple-200 border border-purple-500/40 hover:bg-purple-600/40'
              }`}
              title={config.paused ? "Resume Animation" : "Pause Animation"}
              aria-label={config.paused ? "Resume Plasma Animation" : "Pause Plasma Animation"}
            >
              {config.paused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-panel border border-purple-500/30 text-slate-200 hover:text-white hover:border-purple-500/60 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
        aria-label="Toggle Plasma Settings Panel"
        aria-expanded={isOpen}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
        </span>
        <span className="text-xs font-semibold tracking-wider uppercase text-purple-300 group-hover:text-purple-200">
          Plasma FX
        </span>
        <Settings className="w-3.5 h-3.5 text-purple-400 transition-transform duration-300 group-hover:rotate-45" />
        {isOpen ? (
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        )}
      </button>
    </div>
  );
};
