import { useEffect, useRef, useState, useCallback } from 'react';
import { PlasmaConfig, PlasmaPreset } from '../types';

interface ColorRGB {
  r: number;
  g: number;
  b: number;
}

// Color palettes for different plasma presets
const PALETTES: Record<PlasmaPreset, ColorRGB[]> = {
  'cosmic-purple': [
    { r: 24, g: 8, b: 50 },     // Deep cosmic dark
    { r: 88, g: 28, b: 135 },   // Purple 800
    { r: 147, g: 51, b: 234 },  // Purple 600
    { r: 79, g: 70, b: 229 },   // Indigo 600
    { r: 56, g: 189, b: 248 },  // Sky 400
    { r: 236, g: 72, b: 153 }   // Pink 500
  ],
  'cyber-cyan': [
    { r: 4, g: 24, b: 40 },     // Deep navy
    { r: 8, g: 145, b: 178 },   // Cyan 600
    { r: 6, g: 182, b: 212 },   // Cyan 500
    { r: 14, g: 165, b: 233 },  // Sky 500
    { r: 99, g: 102, b: 241 },  // Indigo 500
    { r: 165, g: 243, b: 252 }  // Cyan 200
  ],
  'solar-ember': [
    { r: 35, g: 10, b: 5 },     // Dark ember
    { r: 194, g: 65, b: 12 },   // Orange 700
    { r: 234, g: 88, b: 12 },   // Orange 600
    { r: 245, g: 158, b: 11 },  // Amber 500
    { r: 225, g: 29, b: 72 },   // Rose 600
    { r: 253, g: 224, b: 71 }   // Yellow 300
  ],
  'aurora-matrix': [
    { r: 4, g: 30, b: 20 },     // Dark emerald
    { r: 5, g: 150, b: 105 },   // Emerald 600
    { r: 16, g: 185, b: 129 },  // Emerald 500
    { r: 52, g: 211, b: 153 },  // Emerald 400
    { r: 13, g: 148, b: 136 },  // Teal 600
    { r: 167, g: 243, b: 208 }  // Emerald 200
  ],
  'neon-synth': [
    { r: 30, g: 5, b: 40 },     // Dark neon
    { r: 219, g: 39, b: 119 },  // Pink 600
    { r: 168, g: 85, b: 247 },  // Purple 500
    { r: 99, g: 102, b: 241 },  // Indigo 500
    { r: 244, g: 63, b: 94 },   // Rose 500
    { r: 240, g: 171, b: 252 }  // Fuchsia 300
  ]
};

// Linear color interpolation helper
function interpolatePalette(palette: ColorRGB[], factor: number): ColorRGB {
  const count = palette.length;
  const scaled = ((factor % 1) + 1) % 1 * (count - 1);
  const index = Math.floor(scaled);
  const t = scaled - index;
  const c1 = palette[index];
  const c2 = palette[Math.min(index + 1, count - 1)];

  return {
    r: Math.round(c1.r + (c2.r - c1.r) * t),
    g: Math.round(c1.g + (c2.g - c1.g) * t),
    b: Math.round(c1.b + (c2.b - c1.b) * t)
  };
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export function usePlasmaEngine(initialConfig?: Partial<PlasmaConfig>) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Check prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const [config, setConfig] = useState<PlasmaConfig>({
    preset: 'cosmic-purple',
    speed: prefersReducedMotion ? 0.3 : 1.0,
    complexity: 1.0,
    colorIntensity: 1.0,
    showParticles: true,
    interactiveMouse: true,
    paused: prefersReducedMotion,
    ...initialConfig
  });

  const [fps, setFps] = useState<number>(60);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, active: false });
  const animFrameId = useRef<number | null>(null);

  // Update mouse position normalized 0..1
  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!config.interactiveMouse) return;
    let clientX = 0;
    let clientY = 0;

    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const width = window.innerWidth || 1;
    const height = window.innerHeight || 1;

    mouseRef.current.targetX = clientX / width;
    mouseRef.current.targetY = clientY / height;
    mouseRef.current.active = true;
  }, [config.interactiveMouse]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => handlePointerMove(e);
    const handleTouch = (e: TouchEvent) => handlePointerMove(e);
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, [handlePointerMove]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // We render the plasma math into a scaled-down offscreen buffer
    // and smooth-stretch it to the full viewport for 60fps performance on any device.
    const bufferWidth = 140;
    const bufferHeight = 90;
    const offscreen = document.createElement('canvas');
    offscreen.width = bufferWidth;
    offscreen.height = bufferHeight;
    const offCtx = offscreen.getContext('2d');
    if (!offCtx) return;

    const imgData = offCtx.createImageData(bufferWidth, bufferHeight);
    const data = imgData.data;

    // Floating particles
    const particleCount = 35;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * bufferWidth,
        y: Math.random() * bufferHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.7 + 0.3
      });
    }

    let time = 0;
    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'medium';
    };

    resize();
    window.addEventListener('resize', resize);

    const render = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // FPS tracking
      frameCount++;
      if (now - lastFpsUpdate >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = now;
      }

      if (!config.paused) {
        time += delta * config.speed * 1.2;
      }

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const palette = PALETTES[config.preset] || PALETTES['cosmic-purple'];
      const complexity = config.complexity;

      // Compute procedural trigonometric plasma wave values per pixel
      let ptr = 0;
      for (let y = 0; y < bufferHeight; y++) {
        const ny = y / bufferHeight;
        for (let x = 0; x < bufferWidth; x++) {
          const nx = x / bufferWidth;

          // Wave equation combining 4 sinusoidal frequencies + mouse distortion
          const v1 = Math.sin(nx * 10 * complexity + time);
          const v2 = Math.sin((ny * 10 * complexity + time) * 0.8);
          const v3 = Math.sin((nx * 6 + ny * 6 + time) * 0.7);
          
          // Radial distortion from mouse pointer
          const dx = nx - mx;
          const dy = ny - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const v4 = Math.sin(dist * 12 - time * 1.5);

          // Combined wave normalized roughly -1 to 1 -> 0 to 1
          const combined = (v1 + v2 + v3 + v4) * 0.25;
          const normalized = (combined + 1) * 0.5;

          const color = interpolatePalette(palette, normalized);

          data[ptr] = color.r;
          data[ptr + 1] = color.g;
          data[ptr + 2] = color.b;
          data[ptr + 3] = 255;
          ptr += 4;
        }
      }

      offCtx.putImageData(imgData, 0, 0);

      // Render floating quantum energy particles onto the offscreen buffer if enabled
      if (config.showParticles) {
        offCtx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (!config.paused) {
            p.x += p.vx * config.speed;
            p.y += p.vy * config.speed;

            if (p.x < 0) p.x = bufferWidth;
            if (p.x > bufferWidth) p.x = 0;
            if (p.y < 0) p.y = bufferHeight;
            if (p.y > bufferHeight) p.y = 0;
          }

          offCtx.beginPath();
          offCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          offCtx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.6})`;
          offCtx.fill();
        }
      }

      // Draw offscreen buffer scaled up to main canvas
      ctx.drawImage(offscreen, 0, 0, canvas.width, canvas.height);

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, [config]);

  const updateConfig = (newSettings: Partial<PlasmaConfig>) => {
    setConfig((prev) => ({ ...prev, ...newSettings }));
  };

  const setPreset = (preset: PlasmaPreset) => {
    setConfig((prev) => ({ ...prev, preset }));
  };

  const togglePause = () => {
    setConfig((prev) => ({ ...prev, paused: !prev.paused }));
  };

  return {
    canvasRef,
    config,
    updateConfig,
    setPreset,
    togglePause,
    fps
  };
}
