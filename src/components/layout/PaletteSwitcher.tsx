'use client';

import { useThemeStore } from '@/stores/theme';
import { palettes, type ThemeKey } from '@/lib/palettes';

export function PaletteSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        right: 20,
        transform: 'translateY(-50%)',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: '14px 11px',
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: 40,
        backdropFilter: 'blur(10px)',
      }}
    >
      {(Object.keys(palettes) as ThemeKey[]).map((k) => {
        const pal = palettes[k];
        const active = k === theme;
        return (
          <button
            key={k}
            onClick={() => setTheme(k)}
            title={pal.label}
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              cursor: 'pointer',
              background: pal.dot,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '1px solid rgba(255,255,255,0.25)',
              transform: active ? 'scale(1.28)' : 'scale(1)',
              boxShadow: active ? '0 0 0 2px var(--bg), 0 0 0 3px var(--accent)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
}
