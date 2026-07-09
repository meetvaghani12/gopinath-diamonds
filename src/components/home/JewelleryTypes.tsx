'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { featuredJewelry } from '@/lib/jewelry';

const taglines: Record<string, string> = {
  Rings: 'Solitaire · Halo · Eternity',
  Necklaces: 'Pendant · Riviera · Station',
  Earrings: 'Stud · Halo · Drop',
  Bracelets: 'Tennis · Bangle · Cuff',
};

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
        <Link href="/jewelry" style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--accent)', borderBottom: '1px solid var(--line-2)', paddingBottom: 4, textDecoration: 'none' }}>
          View All Jewellery →
        </Link>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(14px, 1.6vw, 22px)' }}>
        {featuredJewelry.map((p, i) => (
          <Link key={p.sku || p.slug} href={`/jewelry?category=${p.category}`} style={{ textDecoration: 'none' }}>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{ cursor: 'pointer' }}
            >
              <div className="jw-swap" style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', borderRadius: 4, background: '#f4f3f1', border: '1px solid var(--line)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="jw-alt" src={p.image.replace('-white.jpg', '-yellow.jpg')} alt={`${p.name} in yellow gold`} loading="lazy" />
              </div>
              <div style={{ marginTop: 12 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 2vw, 25px)', color: 'var(--text)', lineHeight: 1.2 }}>{p.category}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginTop: 6 }}>
                  {taglines[p.category]}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
