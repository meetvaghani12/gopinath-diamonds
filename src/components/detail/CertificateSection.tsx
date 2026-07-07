'use client';

import { motion } from 'framer-motion';

export function CertificateSection() {
  return (
    <section id="certificate" style={{ padding: 'clamp(70px, 10vw, 120px) clamp(16px, 4vw, 48px)', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>Assured Provenance</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(26px, 4vw, 50px)', color: 'var(--text)', lineHeight: 1.08 }}>Every Stone, Fully Documented</h2>
        <p style={{ maxWidth: 540, margin: '20px auto 0', color: 'var(--text-soft)', fontWeight: 300, fontSize: 'clamp(13px, 1.4vw, 15px)', lineHeight: 1.85, padding: '0 12px' }}>
          The Aurora is accompanied by a full GIA grading report, laser-inscribed girdle, and a certificate of conflict-free origin traceable to its rough.
        </p>
        <div style={{ display: 'flex', gap: 'clamp(10px, 2vw, 20px)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 36 }}>
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 4, padding: 'clamp(20px, 3vw, 30px) clamp(24px, 4vw, 44px)', background: 'var(--surface)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 3vw, 34px)', color: 'var(--accent-bright)' }}>GIA</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>Certified</div>
          </div>
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 4, padding: 'clamp(20px, 3vw, 30px) clamp(24px, 4vw, 44px)', background: 'var(--surface)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 3vw, 34px)', color: 'var(--accent-bright)' }}>2201·8894</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>Report No.</div>
          </div>
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 4, padding: 'clamp(20px, 3vw, 30px) clamp(24px, 4vw, 44px)', background: 'var(--surface)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 3vw, 34px)', color: 'var(--accent-bright)' }}>✦</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>Conflict-Free</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
