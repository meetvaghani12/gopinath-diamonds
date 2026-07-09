'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { founder } from '@/lib/constants';

export function FounderHero() {
  return (
    <section
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        alignItems: 'center',
        gap: 'clamp(36px, 6vw, 80px)',
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(60px, 9vw, 120px) clamp(20px, 5vw, 56px) clamp(40px, 6vw, 72px)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(40px, 6.5vw, 84px)', lineHeight: 1.0, color: 'var(--text)' }}>
          {founder.name.split(' ')[0]}<br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent-bright)' }}>{founder.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--text-soft)', marginTop: 20 }}>
          {founder.title}
        </div>
        <p style={{ maxWidth: 460, marginTop: 26, fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.9, color: 'var(--text-soft)', fontWeight: 300 }}>
          The hand that first turned a rough stone to the light — and built a house on the belief that a
          diamond is not sold, but <span style={{ fontStyle: 'italic', color: 'var(--accent-bright)' }}>revealed</span>.
        </p>
      </motion.div>

      {/* Founder portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div
          style={{
            position: 'relative',
            width: 'min(400px, 82vw)',
            aspectRatio: '832 / 1266',
            borderRadius: 8,
            overflow: 'hidden',
            border: '1px solid var(--line-2)',
            boxShadow: '0 30px 80px -40px rgba(0,0,0,0.9)',
          }}
        >
          <Image
            src="/images/founder.jpg"
            alt={`${founder.name}, ${founder.title}`}
            fill
            priority
            sizes="(max-width: 768px) 82vw, 400px"
            style={{ objectFit: 'cover' }}
          />
          {/* soft halo + bottom vignette to seat the photo in the dark page */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 80% 60% at 50% 30%, transparent 55%, var(--halo) 120%)' }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', boxShadow: 'inset 0 0 0 1px var(--line)' }} />
        </div>
      </motion.div>
    </section>
  );
}
