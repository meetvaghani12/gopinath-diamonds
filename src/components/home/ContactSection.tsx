'use client';

import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 48px)', borderTop: '1px solid var(--line)', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(28px, 4vw, 48px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Visit Us</div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px, 2vw, 22px)', color: 'var(--text)', lineHeight: 1.5 }}>
            EW-27, Bharat Diamond Bourse<br />Bandra Kurla Complex (BKC)<br />Mumbai · 400 051
          </p>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', marginTop: 16 }}>GSTIN · 24CGNPK3957M1ZR</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Private Appointments</div>
          <p style={{ color: 'var(--text-soft)', fontWeight: 300, lineHeight: 1.9, fontSize: 14 }}>
            Monday — Saturday<br />10:00 — 19:00<br />
            <a href="tel:+919920332836" style={{ color: 'var(--accent)', textDecoration: 'none' }}>+91 99203 32836</a><br />
            <a href="mailto:diamonds@gopinathji.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>diamonds@gopinathji.com</a>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Follow the House</div>
          <p style={{ color: 'var(--text-soft)', fontWeight: 300, lineHeight: 2, fontSize: 14 }}>
            <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Instagram</a><br />
            <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Pinterest</a><br />
            <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Journal</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
