'use client';

import { motion } from 'framer-motion';
import { auroraGrades } from '@/lib/constants';

export function GradeBreakdown() {
  return (
    <section style={{ padding: '120px 48px', maxWidth: 1180, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 64 }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Grading Report</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(32px, 4.4vw, 52px)', color: 'var(--text)', lineHeight: 1.05 }}>This Stone, by the Four C&apos;s</h2>
      </motion.div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {auroraGrades.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'grid', gridTemplateColumns: '180px 1fr 90px', alignItems: 'center', gap: 28, padding: '26px 4px', borderBottom: '1px solid var(--line)' }}
          >
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: 'var(--text)' }}>{g.name}</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 2 }}>{g.note}</div>
            </div>
            <div style={{ height: 6, background: 'var(--line)', borderRadius: 20, overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: g.pct,
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-bright))',
                  borderRadius: 20,
                  animation: 'gradefill 1.6s cubic-bezier(.16,1,.3,1)',
                }}
              />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: 'var(--accent-bright)', textAlign: 'right' }}>{g.grade}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
