'use client';

import { motion } from 'framer-motion';
import { GemViewer } from '@/components/gem/GemViewer';

export function HeroSection() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 55% at 50% 42%, var(--halo), transparent 70%), radial-gradient(ellipse 50% 40% at 50% 60%, var(--halo-2), transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, var(--line-2), transparent)',
        }}
      />

      <div style={{ position: 'relative', width: 'min(560px, 80vw)', height: 'min(560px, 80vw)', marginBottom: -40 }}>
        <GemViewer />
      </div>

      <div style={{ position: 'relative', zIndex: 3, maxWidth: 760 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 26 }}
        >
          Est. 1974 &nbsp;·&nbsp; Master Diamantaires
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(44px, 7vw, 92px)', lineHeight: 1.02, letterSpacing: '-0.01em', color: 'var(--text)' }}
        >
          Where Light<br /><span style={{ fontStyle: 'italic', color: 'var(--accent-bright)' }}>Finds Form</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 520, margin: '28px auto 0', fontSize: 16, lineHeight: 1.8, color: 'var(--text-soft)', fontWeight: 300 }}
        >
          An extraordinary house of rare diamonds and fine jewellery — each stone chosen for its fire, cut to reveal the soul of light within.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: 18, justifyContent: 'center', marginTop: 40 }}
        >
          <a href="#collections" style={{ padding: '15px 38px', background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))', color: '#0A0A0A', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, fontWeight: 500 }}>
            Explore Collections
          </a>
          <a href="#fourcs" style={{ padding: '15px 38px', border: '1px solid var(--line-2)', color: 'var(--accent-bright)', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2 }}>
            The Art of the 4 C&apos;s
          </a>
        </motion.div>
      </div>

      <div style={{ position: 'absolute', bottom: 34, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.4em', color: 'var(--muted)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 44, background: 'var(--line-2)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 12, background: 'var(--accent)', animation: 'scrollcue 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
