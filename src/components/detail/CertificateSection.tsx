'use client';

import { motion } from 'framer-motion';

export function CertificateSection() {
  return (
    <section id="certificate" style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 22 }}>Assured Provenance</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(30px, 4vw, 50px)', color: 'var(--text)', lineHeight: 1.08 }}>Every Stone, Fully Documented</h2>
        <p style={{ maxWidth: 540, margin: '22px auto 0', color: 'var(--text-soft)', fontWeight: 300, fontSize: 15, lineHeight: 1.85 }}>
          The Aurora is accompanied by a full GIA grading report, laser-inscribed girdle, and a certificate of conflict-free origin traceable to its rough.
        </p>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginTop: 46 }}>
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 4, padding: '30px 44px', background: 'var(--surface)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, color: 'var(--accent-bright)' }}>GIA</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>Certified</div>
          </div>
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 4, padding: '30px 44px', background: 'var(--surface)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, color: 'var(--accent-bright)' }}>2201·8894</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>Report No.</div>
          </div>
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 4, padding: '30px 44px', background: 'var(--surface)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, color: 'var(--accent-bright)' }}>✦</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>Conflict-Free</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
