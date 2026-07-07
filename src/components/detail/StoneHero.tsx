'use client';

import { GemViewer } from '@/components/gem/GemViewer';

export function StoneHero() {
  const specs = [
    { label: 'Carat', value: '8.02' },
    { label: 'Colour', value: 'D' },
    { label: 'Clarity', value: 'FL' },
    { label: 'Cut', value: '3EX' },
  ];

  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', minHeight: 'calc(100vh - 66px)' }}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse 65% 55% at 50% 45%, var(--halo), transparent 70%)', borderRight: '1px solid var(--line)' }}>
        <div style={{ position: 'relative', width: 'min(520px, 82%)', aspectRatio: '1/1' }}>
          <GemViewer autoRotate={false} />
        </div>
        <div style={{ position: 'absolute', bottom: 34, display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          <span style={{ width: 14, height: 14, border: '1px solid var(--muted)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8 }}>↻</span>
          Drag to rotate · 360° view
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 72px' }}>
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
          House Signature · No. GD-0801
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(42px, 4.8vw, 68px)', lineHeight: 1.02, color: 'var(--text)' }}>
          The Aurora<br /><span style={{ fontStyle: 'italic', color: 'var(--accent-bright)' }}>Brilliant</span>
        </h1>
        <p style={{ maxWidth: 440, margin: '24px 0 0', fontSize: 16, lineHeight: 1.85, color: 'var(--text-soft)', fontWeight: 300 }}>
          A round brilliant of extraordinary presence — D colour, internally flawless, and cut to triple-excellent proportions that return light with rare intensity. One of the finest stones ever to pass through our atelier.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', marginTop: 38 }}>
          {specs.map((s) => (
            <div key={s.label} style={{ background: 'var(--surface)', padding: '22px 18px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.label}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, color: 'var(--text)', marginTop: 6 }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 34 }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)' }}>Price</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontStyle: 'italic', color: 'var(--accent-bright)' }}>On Request</span>
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
          <a href="#viewing" style={{ padding: '15px 34px', background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))', color: '#0A0A0A', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, fontWeight: 500 }}>
            Request a Private Viewing
          </a>
          <a href="#certificate" style={{ padding: '15px 34px', border: '1px solid var(--line-2)', color: 'var(--accent-bright)', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2 }}>
            GIA Report
          </a>
        </div>
      </div>
    </section>
  );
}
