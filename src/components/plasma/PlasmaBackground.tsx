import React from 'react';
import { usePlasmaEngine } from '../../hooks/usePlasmaEngine';
import { PlasmaControls } from './PlasmaControls';
import { PlasmaConfig, PlasmaPreset } from '../../types';

interface PlasmaBackgroundProps {
  interactive?: boolean;
  showControls?: boolean;
  intensity?: 'subtle' | 'vibrant' | 'ambient';
  initialPreset?: PlasmaPreset;
  className?: string;
  onConfigChange?: (config: PlasmaConfig) => void;
}

export const PlasmaBackground: React.FC<PlasmaBackgroundProps> = ({
  showControls = true,
  intensity = 'subtle',
  initialPreset = 'cosmic-purple',
  className = '',
}) => {
  const { canvasRef, config, updateConfig, setPreset, togglePause, fps } = usePlasmaEngine({
    preset: initialPreset,
  });

  // Calculate overlay opacity based on intensity
  const overlayOpacity = {
    subtle: 'opacity-85 dark:opacity-85 bg-slate-950/80 dark:bg-slate-950/85 light:bg-slate-50/85',
    ambient: 'opacity-70 dark:opacity-75 bg-slate-950/70 dark:bg-slate-950/75 light:bg-slate-50/75',
    vibrant: 'opacity-40 dark:opacity-45 bg-slate-950/40 dark:bg-slate-950/45 light:bg-slate-50/45',
  }[intensity];

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* HTML5 Plasma Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover filter contrast-125 saturate-150 transition-opacity duration-1000"
        style={{
          opacity: config.paused ? 0.75 : 0.95,
        }}
      />

      {/* Atmospheric Vignette & Grid Overlay for depth & high-contrast readability */}
      <div
        className={`absolute inset-0 backdrop-blur-[2px] transition-colors duration-500 ${overlayOpacity}`}
      />

      {/* Subtle modern cyber dot matrix texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Interactive Controls UI (only when enabled and user hovers/interacts) */}
      {showControls && (
        <div className="pointer-events-auto">
          <PlasmaControls
            config={config}
            onUpdate={updateConfig}
            onPresetChange={setPreset}
            onTogglePause={togglePause}
            fps={fps}
          />
        </div>
      )}
    </div>
  );
};
