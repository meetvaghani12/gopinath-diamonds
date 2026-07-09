'use client';

import { motion } from 'framer-motion';

export function FounderStory() {
  return (
    <section style={{ padding: 'clamp(50px, 7vw, 90px) clamp(20px, 5vw, 56px)', background: 'var(--bg-deep)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
          In His Own Time
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(28px, 4.6vw, 56px)', color: 'var(--text)', lineHeight: 1.05, marginBottom: 32 }}>
          A Life Cut for Light
        </h2>
      </motion.div>

      <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 22 }}>
        {[
          'Nikunj Kalathiya learned to read a diamond long before he ever sold one — years at the cutting bench, turning rough stones to the light until he understood the private language a diamond speaks only to the patient.',
          'In 2015 he opened a house of his own: one bench, one loupe, and a rule he has never broken — cut for the light a stone can give, never for the weight a scale can read. Clients noticed. A diamond from his hand did not simply shine; it seemed lit from within.',
          'A decade on, Gopinathji Diamonds is entrusted with exceptional stones and a team of diamantaires trained to the same exacting eye. Nikunj still comes to the bench — because a great stone, he insists, deserves to be met by the eye that has waited longest for it.',
        ].map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.95, color: 'var(--text-soft)', fontWeight: 300 }}
          >
            {p}
          </motion.p>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: 720, margin: 'clamp(40px, 6vw, 64px) auto 0', textAlign: 'center', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(22px, 3.2vw, 34px)', lineHeight: 1.4, color: 'var(--accent-bright)' }}
      >
        “A diamond keeps every promise the earth made to it. My only work is to let the light find its way out.”
      </motion.blockquote>
    </section>
  );
}
