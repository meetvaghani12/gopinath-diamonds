'use client';

import { create } from 'zustand';
import { palettes, type ThemeKey } from '@/lib/palettes';

interface ThemeState {
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
}

// Theme numbers used by NEXT_PUBLIC_THEME in .env (1–5).
export const THEME_ORDER: ThemeKey[] = ['onyx', 'sapphire', 'emerald', 'rose', 'pearl'];

/** Default palette, chosen by NEXT_PUBLIC_THEME (1–5); falls back to Sapphire (blue). */
export function getDefaultTheme(): ThemeKey {
  const n = Number(process.env.NEXT_PUBLIC_THEME);
  if (Number.isInteger(n) && n >= 1 && n <= THEME_ORDER.length) return THEME_ORDER[n - 1];
  return 'sapphire';
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: getDefaultTheme(),
  setTheme: (theme) => set({ theme }),
}));

export function applyTheme(theme: ThemeKey) {
  const pal = palettes[theme];
  const root = document.documentElement;
  Object.entries(pal.css).forEach(([k, v]) => root.style.setProperty(k, v));
}
