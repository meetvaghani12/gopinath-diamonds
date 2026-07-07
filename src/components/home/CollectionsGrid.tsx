'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { shapes } from '@/lib/constants';
import { ShapeIcon } from './ShapeIcon';

export function CollectionsGrid() {
  return (
    <section id="collections" style={{ padding: '130px 48px 90px', maxWidth: 1280, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 64 }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>
          The Collection
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.05, color: 'var(--text)' }}>
          Every Silhouette of Light
        </h2>
        <p style={{ maxWidth: 540, margin: '20px auto 0', color: 'var(--text-soft)', fontWeight: 300, fontSize: 15, lineHeight: 1.8 }}>
          Seven signature cuts, each engineered to bend light in its own language of brilliance.
        </p>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
        {shapes.map((s, i) => (
          <Link key={s.kind} href="/diamonds/the-aurora" style={{ textDecoration: 'none' }}>
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: 'var(--surface)', padding: '38px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, cursor: 'pointer', transition: 'background 0.5s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface-2)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '')}
            >
              <ShapeIcon kind={s.kind} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: 'var(--text)' }}>{s.name}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>{s.facets}</div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
