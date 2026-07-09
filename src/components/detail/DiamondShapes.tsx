'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { shapes } from '@/lib/constants';
import { ShapeIcon } from '@/components/home/ShapeIcon';

export function DiamondShapes() {
  return (
    <section id="shapes" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 48px)', maxWidth: 1280, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 60px)' }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Diamond Shapes</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(26px, 4.2vw, 50px)', color: 'var(--text)', lineHeight: 1.05 }}>
          Choose Your Silhouette
        </h2>
        <p style={{ maxWidth: 540, margin: '14px auto 0', color: 'var(--text-soft)', fontWeight: 300, fontSize: 'clamp(13px, 1.4vw, 15px)', lineHeight: 1.8, padding: '0 12px' }}>
          Each cut expresses a different relationship with light. Here are the shapes we craft.
        </p>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
        {shapes.map((s, i) => (
          <Link key={s.kind} href={`/diamonds/the-aurora?shape=${s.kind}`} scroll style={{ textDecoration: 'none' }}>
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: 'var(--surface)', padding: 'clamp(24px, 3vw, 38px) clamp(10px, 2vw, 20px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, cursor: 'pointer', transition: 'background 0.5s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface-2)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '')}
            >
              <ShapeIcon kind={s.kind} />
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
