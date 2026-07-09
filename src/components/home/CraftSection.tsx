'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function CraftSection() {
  return (
    <section id="craft" style={{ position: 'relative', minHeight: '80dvh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image src="/images/craft.png" alt="A master diamantaire examining a diamond through a loupe at the workbench" fill style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,6,8,0.94) 20%, rgba(6,6,8,0.6) 60%, rgba(6,6,8,0.3))', pointerEvents: 'none' }} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px, 5vw, 48px) clamp(16px, 4vw, 48px)', width: '100%' }}
      >
        <div style={{ maxWidth: 520 }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginBottom: 16 }}>Handcrafted Diamonds · Since 2015</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(28px, 4.8vw, 60px)', color: '#F7F4ED', lineHeight: 1.06 }}>
            Every Stone,<br />Read by Hand
          </h2>
          <p style={{ color: '#C4C4CB', fontWeight: 300, fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.9, marginTop: 22 }}>
            At Gopinathji Diamonds, no diamond is left to the machine alone. Our master diamantaires turn each stone to the light again and again — reading its fire, planning every facet, and cutting until it gives back all the brilliance the earth locked inside.
          </p>
          <div style={{ display: 'flex', gap: 'clamp(24px, 5vw, 52px)', marginTop: 32, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--accent-bright)' }}>10+</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#B4B4BB', marginTop: 4 }}>Years at the Bench</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--accent-bright)' }}>57</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#B4B4BB', marginTop: 4 }}>Facets, Hand-Cut</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--accent-bright)' }}>100%</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#B4B4BB', marginTop: 4 }}>GIA Certified</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
