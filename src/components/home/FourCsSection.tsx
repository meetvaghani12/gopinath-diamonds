'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { csData } from '@/lib/constants';

export function FourCsSection() {
  const [activeC, setActiveC] = useState(0);
  const c = csData[activeC];

  return (
    <section id="fourcs" style={{ padding: '130px 48px', maxWidth: 1180, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 56 }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>The Science of Beauty</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(34px, 4.6vw, 58px)', color: 'var(--text)', lineHeight: 1.05 }}>The Four C&apos;s</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}
      >
        {csData.map((item, i) => (
          <button
            key={item.name}
            onClick={() => setActiveC(i)}
            style={{
              padding: '12px 26px',
              fontFamily: "'Jost', sans-serif",
              fontSize: 12,
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
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', minHeight: 340 }}
      >
        <div style={{ padding: 56, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--surface)' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 96, lineHeight: 0.9, color: 'var(--line-2)', fontWeight: 300 }}>{c.letter}</div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 38, color: 'var(--text)', marginTop: 8 }}>{c.name}</h3>
          <p style={{ color: 'var(--text-soft)', fontWeight: 300, fontSize: 15, lineHeight: 1.9, marginTop: 18, maxWidth: 420 }}>{c.desc}</p>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at 50% 45%, var(--halo), var(--bg-deep))', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 220, height: 220, border: '1px solid var(--line-2)', borderRadius: '50%', animation: 'spinslow 26s linear infinite' }} />
          <div style={{ position: 'absolute', width: 300, height: 300, border: '1px solid var(--line)', borderRadius: '50%' }} />
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 44px)', color: 'var(--accent-bright)', textAlign: 'center', padding: '0 30px', fontStyle: 'italic' }}>{c.stat}</div>
        </div>
      </motion.div>
    </section>
  );
}
