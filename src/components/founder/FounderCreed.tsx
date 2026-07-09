'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { founder, founderValues } from '@/lib/constants';

export function FounderCreed() {
  return (
    <section style={{ padding: 'clamp(60px, 9vw, 110px) clamp(20px, 5vw, 56px)', background: 'var(--bg-deep)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 60px)' }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
            The Creed
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(26px, 4.4vw, 52px)', color: 'var(--text)', lineHeight: 1.05 }}>
            Three Rules of the Bench
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {founderValues.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: 'var(--surface)', padding: 'clamp(30px, 4vw, 48px) clamp(22px, 3vw, 36px)', textAlign: 'center' }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(30px, 3.4vw, 40px)', color: 'var(--muted)', marginBottom: 8 }}>
                {`0${i + 1}`}
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.4vw, 28px)', color: 'var(--accent-bright)', marginBottom: 14 }}>
                {v.name}
              </div>
              <p style={{ fontSize: 'clamp(14px, 1.5vw, 15.5px)', lineHeight: 1.85, color: 'var(--text-soft)', fontWeight: 300 }}>
                {v.line}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 'clamp(48px, 7vw, 84px)' }}
        >
          <blockquote style={{ maxWidth: 760, margin: '0 auto', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(24px, 3.6vw, 40px)', lineHeight: 1.35, color: 'var(--text)' }}>
            “Everything I know, a diamond taught me: that light rewards patience, and that beauty kept honest never fades.”
          </blockquote>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(20px, 2.2vw, 26px)', color: 'var(--accent-bright)', marginTop: 24 }}>
            {founder.name}
          </div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>
            {founder.title}
          </div>

          <div style={{ display: 'flex', gap: 'clamp(10px, 2vw, 16px)', justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
            <Link href="/#bespoke" style={{ padding: '14px clamp(22px, 3vw, 38px)', background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))', color: '#0A0A0A', fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Commission a Piece
            </Link>
            <Link href="/#contact" style={{ padding: '14px clamp(22px, 3vw, 38px)', border: '1px solid var(--line-2)', color: 'var(--accent-bright)', fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Visit Gopinathji Diamonds
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
