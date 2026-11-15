import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { usePlasmaEngine } from '../hooks/usePlasmaEngine';

describe('usePlasmaEngine hook', () => {
  it('initializes with default config and allows preset switching', () => {
    const { result } = renderHook(() => usePlasmaEngine({ preset: 'cosmic-purple' }));

    expect(result.current.config.preset).toBe('cosmic-purple');
    expect(result.current.config.speed).toBeGreaterThan(0);

    act(() => {
      result.current.setPreset('cyber-cyan');
    });

    expect(result.current.config.preset).toBe('cyber-cyan');
  });

  it('toggles pause and resume states', () => {
    const { result } = renderHook(() => usePlasmaEngine({ paused: false }));

    expect(result.current.config.paused).toBe(false);

    act(() => {
      result.current.togglePause();
    });

    expect(result.current.config.paused).toBe(true);
  });
});
