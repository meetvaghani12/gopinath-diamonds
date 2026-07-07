'use client';

import { create } from 'zustand';
import { palettes, type ThemeKey } from '@/lib/palettes';

interface ThemeState {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'onyx',
  setTheme: (theme) => set({ theme }),
}));

export function applyTheme(theme: ThemeKey) {
  const pal = palettes[theme];
  const root = document.documentElement;
  Object.entries(pal.css).forEach(([k, v]) => root.style.setProperty(k, v));
}
