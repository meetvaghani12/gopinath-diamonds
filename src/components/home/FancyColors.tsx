'use client';

import { motion } from 'framer-motion';
import { colors } from '@/lib/constants';

export function FancyColors() {
  return (
    <section style={{ padding: '90px 48px', background: 'var(--bg-deep)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Rare &amp; Fancy</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(32px, 4.4vw, 54px)', color: 'var(--text)', lineHeight: 1.05 }}>The Spectrum of Rarity</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 22 }}>
          {colors.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26, padding: '44px 20px', border: '1px solid var(--line)', borderRadius: 4, background: 'var(--surface)', transition: 'border-color 0.5s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--line-2)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
            >
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: '50%',
                  background: c.glow,
                  boxShadow: c.shadow,
                  animation: 'floaty 5s ease-in-out infinite',
                }}
              />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: 'var(--text)' }}>{c.name}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 8 }}>{c.rarity}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
