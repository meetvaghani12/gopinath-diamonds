'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function CraftSection() {
  return (
    <section id="craft" style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image src="/images/craft-bg.jpg" alt="Atelier craftsmanship" fill style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,6,8,0.94) 30%, rgba(6,6,8,0.5) 70%, rgba(6,6,8,0.2))', pointerEvents: 'none' }} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 48px', width: '100%' }}
      >
        <div style={{ maxWidth: 520 }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginBottom: 20 }}>Since 1974</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(34px, 4.8vw, 60px)', color: '#F7F4ED', lineHeight: 1.06 }}>
            Three Generations<br />of the Loupe
          </h2>
          <p style={{ color: '#C4C4CB', fontWeight: 300, fontSize: 16, lineHeight: 1.9, marginTop: 26 }}>
            From a single cutting bench in the old quarter to a house entrusted with the world&apos;s rarest rough, our diamantaires still judge every stone by hand — turning it to the light until it speaks.
          </p>
          <div style={{ display: 'flex', gap: 52, marginTop: 44 }}>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, color: 'var(--accent-bright)' }}>50+</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#B4B4BB', marginTop: 4 }}>Years of Craft</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, color: 'var(--accent-bright)' }}>57</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#B4B4BB', marginTop: 4 }}>Facets, Hand-Set</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, color: 'var(--accent-bright)' }}>100%</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#B4B4BB', marginTop: 4 }}>GIA Certified</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
