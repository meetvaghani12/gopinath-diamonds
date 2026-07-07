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
    <section style={{ padding: 'clamp(60px, 8vw, 110px) clamp(16px, 4vw, 48px)', maxWidth: 1280, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 56px)' }}
      >
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>The Vault</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(26px, 4.2vw, 50px)', color: 'var(--text)', lineHeight: 1.05 }}>Other Exceptional Stones</h2>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(12px, 2vw, 24px)' }}>
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
              <div style={{ position: 'absolute', left: 'clamp(16px, 2vw, 22px)', bottom: 'clamp(16px, 2vw, 22px)', pointerEvents: 'none' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 2vw, 24px)', color: '#fff' }}>{stone.name}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginTop: 4 }}>{stone.specs}</div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
