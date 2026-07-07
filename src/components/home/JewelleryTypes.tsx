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
    <section style={{ padding: '70px 48px 90px', maxWidth: 1280, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}
      >
        <div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Fine Jewellery</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(32px, 4.4vw, 54px)', color: 'var(--text)', lineHeight: 1.05 }}>Worn Like Heirlooms</h2>
        </div>
        <a href="#showcase" style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--accent)', borderBottom: '1px solid var(--line-2)', paddingBottom: 6 }}>
          View the House Signature →
        </a>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
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
              <div style={{ position: 'absolute', left: 24, bottom: 24, pointerEvents: 'none' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: '#fff' }}>{cat.name}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginTop: 4 }}>{cat.tagline}</div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
