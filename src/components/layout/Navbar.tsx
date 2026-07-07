'use client';

import { useEffect, useRef } from 'react';
import { useThemeStore } from '@/stores/theme';
import { palettes } from '@/lib/palettes';

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      const pal = palettes[theme];
      if (window.scrollY > 60) {
        nav.style.background = pal.nav.bg;
        nav.style.backdropFilter = 'blur(14px)';
        nav.style.padding = '16px 48px';
        nav.style.borderColor = pal.nav.border;
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.padding = '26px 48px';
        nav.style.borderColor = 'transparent';
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [theme]);

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '26px 48px',
        transition: 'background 0.5s ease, padding 0.5s ease, border-color 0.5s ease',
        borderBottom: '1px solid transparent',
      }}
    >
      <a href="#top" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, color: 'var(--text)' }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 23, fontWeight: 500, letterSpacing: '0.14em' }}>
          GOPINATH
        </span>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.62em', color: 'var(--accent)', marginTop: 3, paddingLeft: 2 }}>
          DIAMONDS
        </span>
      </a>
      <div style={{ display: 'flex', gap: 40, alignItems: 'center', fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
        <a href="#collections" style={{ color: 'var(--text-soft)' }}>Collections</a>
        <a href="#fourcs" style={{ color: 'var(--text-soft)' }}>The 4 C&apos;s</a>
        <a href="#craft" style={{ color: 'var(--text-soft)' }}>Craft</a>
        <a href="#bespoke" style={{ color: 'var(--text-soft)' }}>Bespoke</a>
        <a href="#contact" style={{ color: 'var(--text-soft)' }}>Contact</a>
      </div>
    </nav>
  );
}
