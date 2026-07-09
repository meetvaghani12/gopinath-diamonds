'use client';

import { motion } from 'framer-motion';
import { founderMilestones } from '@/lib/constants';

export function FounderTimeline() {
  return (
    <section style={{ padding: 'clamp(60px, 9vw, 110px) clamp(20px, 5vw, 56px)', maxWidth: 940, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 72px)' }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
          The Years
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(26px, 4.4vw, 52px)', color: 'var(--text)', lineHeight: 1.05 }}>
A Decade, by Hand
        </h2>
      </motion.div>

      <div style={{ position: 'relative', paddingLeft: 'clamp(28px, 5vw, 48px)' }}>
        {/* vertical rule */}
        <div style={{ position: 'absolute', left: 'clamp(6px, 1.2vw, 12px)', top: 6, bottom: 6, width: 1, background: 'linear-gradient(var(--accent), var(--line) 85%)' }} />

        {founderMilestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', paddingBottom: i === founderMilestones.length - 1 ? 0 : 'clamp(30px, 4vw, 46px)' }}
          >
            {/* node */}
            <span
              style={{
                position: 'absolute',
                left: 'calc(clamp(6px, 1.2vw, 12px) - clamp(28px, 5vw, 48px) - 4px)',
                top: 7,
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: 'var(--accent-bright)',
                boxShadow: '0 0 12px var(--halo)',
                transform: 'translateX(-50%)',
              }}
            />
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 3vw, 36px)', fontStyle: 'italic', color: 'var(--accent-bright)', lineHeight: 1 }}>
              {m.year}
            </div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(11px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text)', margin: '10px 0 8px' }}>
              {m.title}
            </div>
            <p style={{ maxWidth: 620, fontSize: 'clamp(14px, 1.5vw, 15.5px)', lineHeight: 1.85, color: 'var(--text-soft)', fontWeight: 300 }}>
              {m.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
