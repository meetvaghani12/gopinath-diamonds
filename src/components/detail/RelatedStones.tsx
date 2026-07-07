'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stones = [
  { name: 'The Solene', specs: '5.11ct · Oval · E · VVS1', image: '/images/solene.jpg' },
  { name: 'The Cendre', specs: '3.44ct · Emerald · D · IF', image: '/images/cendre.jpg' },
  { name: 'The Aurelle', specs: '2.08ct · Pink · Fancy Vivid', image: '/images/aurelle.jpg' },
];

export function RelatedStones() {
  return (
    <section style={{ padding: '110px 48px', maxWidth: 1280, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 56 }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>The Vault</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(30px, 4.2vw, 50px)', color: 'var(--text)', lineHeight: 1.05 }}>Other Exceptional Stones</h2>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {stones.map((stone, i) => (
          <Link key={stone.name} href="/diamonds/the-aurora" style={{ textDecoration: 'none' }}>
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 3, background: 'var(--surface-2)', cursor: 'pointer' }}
            >
              <Image src={stone.image} alt={stone.name} fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,8,0.9) 8%, transparent 55%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', left: 22, bottom: 22, pointerEvents: 'none' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: '#fff' }}>{stone.name}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginTop: 4 }}>{stone.specs}</div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
