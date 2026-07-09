'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useThemeStore } from '@/stores/theme';
import { palettes } from '@/lib/palettes';
import { LogoMark } from './LogoMark';

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const theme = useThemeStore((s) => s.theme);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      const pal = palettes[theme];
      if (window.scrollY > 60) {
        nav.style.background = pal.nav.bg;
        nav.style.backdropFilter = 'blur(14px)';
        nav.style.borderColor = pal.nav.border;
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.borderColor = 'transparent';
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [theme]);

  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    window.addEventListener('scroll', handler, { once: true });
    return () => window.removeEventListener('scroll', handler);
  }, [open]);

  const links = [
    { label: 'Collections', href: '/#collections' },
    { label: 'Jewellery', href: '/jewelry' },
    { label: 'The 4 C\'s', href: '/#fourcs' },
    { label: 'Craft', href: '/#craft' },
    { label: 'About', href: '/about' },
    { label: 'Bespoke', href: '/#bespoke' },
    { label: 'Contact', href: '/#contact' },
  ];

  const linkStyle: React.CSSProperties = {
    color: 'var(--text-soft)',
    textDecoration: 'none',
    fontFamily: "'Jost', sans-serif",
    fontSize: 12,
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
  };

  // The global site nav belongs to the home page only. Sub-pages (the diamond
  // detail page, the about page) render their own back-nav, so rendering this
  // here too would stack two navbars.
  if (pathname !== '/') return null;

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
        padding: 'clamp(16px, 3vw, 26px) clamp(16px, 4vw, 48px)',
        transition: 'background 0.5s ease, border-color 0.5s ease',
        borderBottom: '1px solid transparent',
      }}
    >
      <a href="#top" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 11, lineHeight: 1, color: 'var(--text)', textDecoration: 'none' }}>
        <LogoMark size={32} />
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 500, letterSpacing: '0.14em' }}>
            GOPINATHJI
          </span>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 8, letterSpacing: '0.62em', color: 'var(--accent)', marginTop: 2, paddingLeft: 2 }}>
            DIAMONDS
          </span>
        </span>
      </a>

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text)',
          padding: 8,
          flexDirection: 'column',
          gap: 5,
          zIndex: 51,
        }}
        className="nav-hamburger"
      >
        <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--text)', transition: '0.3s', transform: open ? 'rotate(45deg) translate(4px, 5px)' : 'none' }} />
        <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--text)', transition: '0.3s', opacity: open ? 0 : 1 }} />
        <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--text)', transition: '0.3s', transform: open ? 'rotate(-45deg) translate(4px, -5px)' : 'none' }} />
      </button>

      <div
        className="nav-links"
        style={{
          display: 'flex',
          gap: 40,
          alignItems: 'center',
        }}
      >
        {links.map((l) => (
          <a key={l.label} href={l.href} style={linkStyle} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>

      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: 0,
            background: 'var(--bg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
            zIndex: 49,
          }}
        >
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{ ...linkStyle, fontSize: 18 }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-hamburger { display: flex !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
