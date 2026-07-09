'use client';

import { useSearchParams } from 'next/navigation';
import { GemViewer } from '@/components/gem/GemViewer';
import { shapeInfo } from '@/lib/constants';

export function StoneHero() {
  const params = useSearchParams();
  const requested = params.get('shape') ?? 'round';
  const shape = shapeInfo[requested] ? requested : 'round';
  const info = shapeInfo[shape];
  const modelPath = `/models/shapes/${shape}.glb`;

  const specs = [
    { label: 'Carat', value: '8.02' },
    { label: 'Colour', value: 'D' },
    { label: 'Clarity', value: 'FL' },
    { label: 'Cut', value: '3EX' },
  ];

  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', minHeight: 'calc(100dvh - 66px)' }}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse 65% 55% at 50% 45%, var(--halo), transparent 70%)', borderRight: '1px solid var(--line)', minHeight: 400 }}>
        <div style={{ position: 'relative', width: 'min(400px, 75vw)', aspectRatio: '1/1' }}>
          <GemViewer autoRotate modelPath={modelPath} cameraPosition={[0, 2.6, 3.2]} />
        </div>
        <div style={{ position: 'absolute', bottom: 24, display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          <span style={{ width: 14, height: 14, border: '1px solid var(--muted)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 8 }}>↻</span>
          Drag to rotate · 360° view
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(32px, 6vw, 64px) clamp(24px, 6vw, 72px)' }}>
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
          House Signature · No. GD-0801
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(34px, 4.8vw, 68px)', lineHeight: 1.02, color: 'var(--text)' }}>
          The Aurora<br /><span style={{ fontStyle: 'italic', color: 'var(--accent-bright)' }}>{info.title2}</span>
        </h1>
        <p style={{ maxWidth: 440, margin: '20px 0 0', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.85, color: 'var(--text-soft)', fontWeight: 300 }}>
          {info.blurb}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', marginTop: 32 }}>
          {specs.map((s) => (
            <div key={s.label} style={{ background: 'var(--surface)', padding: 'clamp(16px, 2vw, 22px) 12px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 8, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.label}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.6vw, 30px)', color: 'var(--text)', marginTop: 4 }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 28 }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)' }}>Price</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontStyle: 'italic', color: 'var(--accent-bright)' }}>On Request</span>
        </div>

        <div style={{ display: 'flex', gap: 'clamp(10px, 2vw, 16px)', marginTop: 20, flexWrap: 'wrap' }}>
          <a href="#viewing" style={{ padding: '14px clamp(20px, 3vw, 34px)', background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))', color: '#0A0A0A', fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Request a Private Viewing
          </a>
          <a href="#certificate" style={{ padding: '14px clamp(20px, 3vw, 34px)', border: '1px solid var(--line-2)', color: 'var(--accent-bright)', fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            GIA Report
          </a>
        </div>
      </div>
    </section>
  );
}
