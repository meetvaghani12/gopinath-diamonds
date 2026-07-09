'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function SignatureShowcase() {
  const specs = [
    { label: 'Carat', value: '8.02' },
    { label: 'Colour', value: 'D' },
    { label: 'Clarity', value: 'FL' },
    { label: 'Cut', value: '3EX' },
  ];

  return (
    <section id="showcase" style={{ padding: 'clamp(70px, 10vw, 130px) clamp(16px, 4vw, 48px)', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
        <Link href="/diamonds/the-aurora" style={{ textDecoration: 'none' }}>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 4, overflow: 'hidden', background: 'var(--surface-2)', cursor: 'pointer' }}
          >
            <Image src="/images/aurora.png" alt="The Aurora Brilliant round diamond" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 'clamp(14px, 1.8vw, 20px)', left: 'clamp(14px, 1.8vw, 20px)', padding: '6px 14px', background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(6px)', border: '1px solid var(--line-2)', borderRadius: 2, fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-bright)', pointerEvents: 'none' }}>
              The Aurora
            </div>
          </motion.div>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>House Signature</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(28px, 4.4vw, 56px)', color: 'var(--text)', lineHeight: 1.06 }}>The Aurora Brilliant</h2>
          <p style={{ color: 'var(--text-soft)', fontWeight: 300, fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.9, marginTop: 20, maxWidth: 460 }}>
            A D-flawless round brilliant of exceptional fire — 8.02 carats, triple-excellent cut, and a table proportioned to the golden ratio. The stone that defines the house.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', marginTop: 28 }}>
            {specs.map((s) => (
              <div key={s.label} style={{ background: 'var(--surface)', padding: 'clamp(16px, 2vw, 22px) clamp(16px, 2vw, 24px)' }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.label}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 2.6vw, 30px)', color: 'var(--text)', marginTop: 4 }}>{s.value}</div>
              </div>
            ))}
          </div>
          <a
            href="/diamonds/the-aurora"
            style={{ display: 'inline-block', marginTop: 28, padding: '14px clamp(24px, 3vw, 38px)', background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))', color: '#0A0A0A', fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            View the Stone in Detail →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
