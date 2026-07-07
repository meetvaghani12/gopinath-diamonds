'use client';

import { useEffect, useRef } from 'react';
import { useThemeStore } from '@/stores/theme';
import { palettes } from '@/lib/palettes';

export function SparkleField() {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.done) return;
    el.dataset.done = '1';
    const color = palettes[theme].sparkle;
    for (let i = 0; i < 46; i++) {
      const s = document.createElement('div');
      const size = 1 + Math.random() * 2.4;
      s.style.cssText = `
        position:absolute;
        top:${Math.random() * 100}%;
        left:${Math.random() * 100}%;
        width:${size}px;
        height:${size}px;
        border-radius:50%;
        background:${color};
        box-shadow:0 0 6px 1px ${color}88;
        opacity:0;
        animation:twinkle ${2.5 + Math.random() * 4}s ease-in-out ${Math.random() * 4}s infinite
      `;
      el.appendChild(s);
    }
  }, [theme]);

  return (
    <div
      ref={ref}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}
    />
  );
}
