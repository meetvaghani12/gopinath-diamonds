'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { csData } from '@/lib/constants';

export function FourCsSection() {
  const [activeC, setActiveC] = useState(0);
  const c = csData[activeC];

  return (
    <section id="fourcs" style={{ padding: 'clamp(70px, 10vw, 130px) clamp(16px, 4vw, 48px)', maxWidth: 1180, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 56px)' }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>The Science of Beauty</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(28px, 4.6vw, 58px)', color: 'var(--text)', lineHeight: 1.05 }}>The Four C&apos;s</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'clamp(28px, 4vw, 52px)' }}
      >
        {csData.map((item, i) => (
          <button
            key={item.name}
            onClick={() => setActiveC(i)}
            style={{
              padding: '10px clamp(14px, 2vw, 26px)',
              fontFamily: "'Jost', sans-serif",
              fontSize: 'clamp(10px, 1.1vw, 12px)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              fontWeight: 400,
              border: `1px solid ${i === activeC ? 'var(--line-2)' : 'var(--line)'}`,
              background: i === activeC ? 'var(--surface)' : 'transparent',
              color: i === activeC ? 'var(--accent-bright)' : 'var(--muted)',
            }}
          >
            {item.letter} · {item.name}
          </button>
        ))}
      </motion.div>
      <motion.div
        key={activeC}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 0, border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden' }}
      >
        <div style={{ padding: 'clamp(32px, 5vw, 56px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--surface)' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(56px, 8vw, 96px)', lineHeight: 0.9, color: 'var(--line-2)', fontWeight: 300 }}>{c.letter}</div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3.2vw, 38px)', color: 'var(--text)', marginTop: 8 }}>{c.name}</h3>
          <p style={{ color: 'var(--text-soft)', fontWeight: 300, fontSize: 'clamp(13px, 1.4vw, 15px)', lineHeight: 1.9, marginTop: 16, maxWidth: 420 }}>{c.desc}</p>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden', minHeight: 'clamp(280px, 34vw, 440px)', background: 'var(--bg-deep)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={c.image}
            src={c.image}
            alt={`${c.name} — ${c.stat}`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,8,0.92) 4%, rgba(6,6,8,0.25) 45%, rgba(6,6,8,0.15))', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 3vw, 40px)', color: 'var(--accent-bright)', textAlign: 'center', padding: '0 24px clamp(28px, 4vw, 44px)', fontStyle: 'italic', lineHeight: 1.3 }}>{c.stat}</div>
        </div>
      </motion.div>
    </section>
  );
}
