'use client';

import { motion } from 'framer-motion';
import { auroraSpecs } from '@/lib/constants';

export function ProportionsSection() {
  return (
    <section style={{ padding: '100px 48px', background: 'var(--bg-deep)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1', background: 'radial-gradient(circle at 50% 45%, var(--halo), var(--bg-deep))', border: '1px solid var(--line)', borderRadius: 4 }}
        >
          <div style={{ position: 'absolute', width: '64%', height: '64%', border: '1px solid var(--line-2)', borderRadius: '50%', animation: 'spinslow 30s linear infinite' }} />
          <div style={{ position: 'absolute', width: '44%', height: '44%', border: '1px solid var(--line)', borderRadius: '50%' }} />
          <div style={{ width: 0, height: 0, borderLeft: '74px solid transparent', borderRight: '74px solid transparent', borderTop: '110px solid var(--accent-bright)', filter: 'drop-shadow(0 0 24px var(--halo))' }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>Anatomy of the Cut</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(30px, 4vw, 48px)', color: 'var(--text)', lineHeight: 1.06, marginBottom: 30 }}>Measurements &amp; Proportions</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {auroraSpecs.map((sp) => (
              <div key={sp.k} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 2px', borderBottom: '1px solid var(--line)' }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-soft)' }}>{sp.k}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, color: 'var(--text)' }}>{sp.v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
