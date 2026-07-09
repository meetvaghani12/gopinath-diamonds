'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { shapeSpecs } from '@/lib/constants';
import { CutAnatomy } from './CutAnatomy';

export function ProportionsSection() {
  const params = useSearchParams();
  const requested = params.get('shape') ?? 'round';
  const specs = shapeSpecs[requested] ?? shapeSpecs.round;

  const specVal = (k: string) => specs.find((s) => s.k === k)?.v ?? '';
  const table = parseFloat(specVal('Table')) || 57;
  const depth = parseFloat(specVal('Depth')) || 61.4;
  const cutLabel = specVal('Shape & Cut');

  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 48px)', background: 'var(--bg-deep)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 'clamp(36px, 6vw, 72px)', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1', background: 'radial-gradient(circle at 50% 45%, var(--halo), var(--bg-deep))', border: '1px solid var(--line)', borderRadius: 4, padding: 'clamp(20px, 3vw, 40px)' }}
        >
          <CutAnatomy table={table} depth={depth} label={cutLabel} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Anatomy of the Cut</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(26px, 4vw, 48px)', color: 'var(--text)', lineHeight: 1.06, marginBottom: 24 }}>Measurements &amp; Proportions</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {specs.map((sp) => (
              <div key={sp.k} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 2px', borderBottom: '1px solid var(--line)', gap: 12 }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(11px, 1.1vw, 12px)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-soft)', flexShrink: 0 }}>{sp.k}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(17px, 1.7vw, 19px)', color: 'var(--text)', textAlign: 'right' }}>{sp.v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
