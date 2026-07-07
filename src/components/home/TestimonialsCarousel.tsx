'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { quotes } from '@/lib/constants';

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((s) => (s + 1) % quotes.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section style={{ padding: '100px 48px', background: 'var(--bg-deep)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 64, color: 'var(--line-2)', lineHeight: 0, height: 30 }}>&ldquo;</div>
        <motion.p
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(24px, 3.2vw, 38px)', lineHeight: 1.4, color: 'var(--text)', minHeight: '1.4em' }}
        >
          {quotes[active].q}
        </motion.p>
        <div style={{ marginTop: 30, fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          {quotes[active].a}
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 40 }}>
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 26 : 8,
                height: 8,
                borderRadius: 20,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                background: i === active ? 'var(--accent)' : 'var(--line-2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
