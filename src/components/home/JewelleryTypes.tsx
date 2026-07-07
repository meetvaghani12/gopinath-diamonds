'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Rings', tagline: 'Solitaire · Eternity · Trilogy', image: '/images/rings.jpg' },
  { name: 'Necklaces', tagline: 'Riviera · Pendant · Choker', image: '/images/necklaces.jpg' },
  { name: 'Earrings', tagline: 'Studs · Drops · Halo', image: '/images/earrings.jpg' },
  { name: 'Bracelets', tagline: 'Tennis · Bangle · Cuff', image: '/images/bracelets.jpg' },
];

export function JewelleryTypes() {
  return (
    <section style={{ padding: 'clamp(40px, 6vw, 70px) clamp(16px, 4vw, 48px) clamp(60px, 8vw, 90px)', maxWidth: 1280, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 'clamp(28px, 4vw, 48px)' }}
      >
        <div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Fine Jewellery</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(28px, 4.4vw, 54px)', color: 'var(--text)', lineHeight: 1.05 }}>Worn Like Heirlooms</h2>
        </div>
        <a href="#showcase" style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--accent)', borderBottom: '1px solid var(--line-2)', paddingBottom: 4, textDecoration: 'none' }}>
          View the House Signature →
        </a>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
        {categories.map((cat, i) => (
          <Link key={cat.name} href="/diamonds/the-aurora" style={{ textDecoration: 'none' }}>
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', borderRadius: 3, background: 'var(--surface-2)', cursor: 'pointer' }}
            >
              <Image src={cat.image} alt={cat.name} fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,8,0.85) 6%, transparent 55%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', left: 'clamp(16px, 2vw, 24px)', bottom: 'clamp(16px, 2vw, 24px)', pointerEvents: 'none' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 2.4vw, 28px)', color: '#fff' }}>{cat.name}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(8px, 0.9vw, 10px)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginTop: 4 }}>{cat.tagline}</div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
