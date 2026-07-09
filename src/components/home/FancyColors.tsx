'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { colors } from '@/lib/constants';

export function FancyColors() {
  return (
    <section id="fancy" style={{ padding: 'clamp(60px, 8vw, 90px) clamp(16px, 4vw, 48px)', background: 'var(--bg-deep)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 60px)' }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Rare &amp; Fancy</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(28px, 4.4vw, 54px)', color: 'var(--text)', lineHeight: 1.05 }}>The Spectrum of Rarity</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'clamp(12px, 2vw, 22px)' }}>
          {colors.map((c, i) => (
            <motion.a
              key={c.name}
              href={`/colours/${c.slug}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: 'clamp(28px, 3.5vw, 44px) clamp(12px, 2vw, 20px)', border: '1px solid var(--line)', borderRadius: 4, background: 'var(--surface)', transition: 'border-color 0.5s ease', textDecoration: 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--line-2)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
            >
              <div
                style={{
                  width: 'clamp(96px, 10vw, 128px)',
                  height: 'clamp(96px, 10vw, 128px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'floaty 5s ease-in-out infinite',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/colors/${c.name.toLowerCase()}.png`}
                  alt={`${c.name} diamond`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', filter: `drop-shadow(0 0 22px ${c.tint}66)` }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 2vw, 24px)', color: 'var(--text)' }}>{c.name}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>{c.rarity}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
