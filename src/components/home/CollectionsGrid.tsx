'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { shapes } from '@/lib/constants';
import { ShapeDiamond } from '@/components/gem/ShapeDiamond';

export function CollectionsGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="collections" style={{ padding: 'clamp(70px, 10vw, 130px) clamp(16px, 4vw, 48px) clamp(50px, 7vw, 90px)', maxWidth: 1280, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 64px)' }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
          The Collection
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(28px, 4.6vw, 58px)', lineHeight: 1.05, color: 'var(--text)' }}>
          Every Silhouette of Light
        </h2>
        <p style={{ maxWidth: 540, margin: '16px auto 0', color: 'var(--text-soft)', fontWeight: 300, fontSize: 'clamp(13px, 1.4vw, 15px)', lineHeight: 1.8, padding: '0 12px' }}>
          Seven signature cuts, each engineered to bend light in its own language of brilliance.
        </p>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
        {shapes.map((s, i) => (
          <Link key={s.kind} href={`/diamonds/the-aurora?shape=${s.kind}`} style={{ textDecoration: 'none' }}>
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: hovered === i ? 'var(--surface-2)' : 'var(--surface)', padding: 'clamp(24px, 3vw, 38px) clamp(12px, 2vw, 20px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, cursor: 'pointer', transition: 'background 0.5s ease' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
            >
              <ShapeDiamond kind={s.kind} modelPath={`/models/shapes/${s.kind}.glb`} active={hovered === i} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px, 1.8vw, 22px)', color: 'var(--text)' }}>{s.name}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>{s.facets}</div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
