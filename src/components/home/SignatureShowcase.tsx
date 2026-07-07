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
    <section id="showcase" style={{ padding: '130px 48px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <Link href="/diamonds/the-aurora" style={{ textDecoration: 'none' }}>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 4, overflow: 'hidden', background: 'var(--surface-2)', cursor: 'pointer' }}
          >
            <Image src="/images/aurora.jpg" alt="The Aurora Brilliant" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 20, left: 20, padding: '8px 16px', background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(6px)', border: '1px solid var(--line-2)', borderRadius: 2, fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-bright)', pointerEvents: 'none' }}>
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
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>House Signature</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(32px, 4.4vw, 56px)', color: 'var(--text)', lineHeight: 1.06 }}>The Aurora Brilliant</h2>
          <p style={{ color: 'var(--text-soft)', fontWeight: 300, fontSize: 16, lineHeight: 1.9, marginTop: 22, maxWidth: 460 }}>
            A D-flawless round brilliant of exceptional fire — 8.02 carats, triple-excellent cut, and a table proportioned to the golden ratio. The stone that defines the house.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', marginTop: 36 }}>
            {specs.map((s) => (
              <div key={s.label} style={{ background: 'var(--surface)', padding: '22px 24px' }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.label}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, color: 'var(--text)', marginTop: 4 }}>{s.value}</div>
              </div>
            ))}
          </div>
          <a
            href="/diamonds/the-aurora"
            style={{ display: 'inline-block', marginTop: 36, padding: '15px 38px', background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))', color: '#0A0A0A', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, fontWeight: 500 }}
          >
            View the Stone in Detail →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
