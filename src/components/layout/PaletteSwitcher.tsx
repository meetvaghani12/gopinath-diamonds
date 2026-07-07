'use client';

import { useThemeStore } from '@/stores/theme';
import { palettes, type ThemeKey } from '@/lib/palettes';

export function PaletteSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <>
      <div
        className="palette-desktop"
        style={{
          position: 'fixed',
          top: '50%',
          right: 16,
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

      <div
        className="palette-mobile"
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 60,
          display: 'none',
          gap: 10,
          padding: '12px 16px',
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
                width: 20,
                height: 20,
                borderRadius: '50%',
                cursor: 'pointer',
                background: pal.dot,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid rgba(255,255,255,0.25)',
                transform: active ? 'scale(1.3)' : 'scale(1)',
                boxShadow: active ? '0 0 0 2px var(--bg), 0 0 0 3px var(--accent)' : 'none',
              }}
            />
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .palette-desktop { display: none !important; }
          .palette-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
