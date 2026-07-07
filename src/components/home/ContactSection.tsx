'use client';

import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" style={{ padding: '100px 48px', borderTop: '1px solid var(--line)', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48 }}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Visit the Maison</div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: 'var(--text)', lineHeight: 1.5 }}>
            17 Rue de la Lumière<br />Jewellery Quarter<br />Mumbai · 400 001
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Private Appointments</div>
          <p style={{ color: 'var(--text-soft)', fontWeight: 300, lineHeight: 1.9, fontSize: 15 }}>
            Tuesday — Saturday<br />10:00 — 19:00<br />
            <a href="tel:+910000000000" style={{ color: 'var(--accent)', textDecoration: 'none' }}>+91 000 000 0000</a><br />
            <a href="mailto:atelier@gopinath.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>atelier@gopinath.com</a>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Follow the House</div>
          <p style={{ color: 'var(--text-soft)', fontWeight: 300, lineHeight: 2, fontSize: 15 }}>
            <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Instagram</a><br />
            <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Pinterest</a><br />
            <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Journal</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
