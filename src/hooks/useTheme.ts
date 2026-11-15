import { useState, useEffect } from 'react';
import { Theme } from '../types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedTheme = window.localStorage.getItem('portfolio-theme') as Theme | null;
        if (savedTheme === 'light' || savedTheme === 'dark') {
          return savedTheme;
        }
        if (window.matchMedia) {
          return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        }
      }
    } catch {
      // Fallback
    }
    return 'dark';
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('portfolio-theme', theme);
      }
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, setTheme };
}
