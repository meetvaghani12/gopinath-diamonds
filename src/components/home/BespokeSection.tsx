'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function BespokeSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="bespoke" style={{ padding: 'clamp(70px, 10vw, 130px) clamp(16px, 4vw, 48px)', maxWidth: 1080, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'clamp(36px, 5vw, 64px)', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Bespoke Diamonds</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(28px, 4.4vw, 56px)', color: 'var(--text)', lineHeight: 1.06 }}>
            Commission the<br />Extraordinary
          </h2>
          <p style={{ color: 'var(--text-soft)', fontWeight: 300, fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.9, marginTop: 20, maxWidth: 420 }}>
            Bring us a vision — a heritage stone, a milestone, an idea. Our designers will render it, our diamantaires will source it, and our workshop will bring it into being.
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data = { name: formData.get('name') as string, email: formData.get('email') as string, message: formData.get('message') as string };
            await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
            setSubmitted(true);
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 16, background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 4, padding: 'clamp(24px, 3.5vw, 40px)' }}
        >
          <input required name="name" placeholder="Full Name" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--line-2)', padding: '12px 2px', color: 'var(--text)', fontFamily: "'Jost', sans-serif", fontSize: 14, outline: 'none' }} onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')} onBlur={(e) => (e.target.style.borderColor = '')} />
          <input required type="email" name="email" placeholder="Email" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--line-2)', padding: '12px 2px', color: 'var(--text)', fontFamily: "'Jost', sans-serif", fontSize: 14, outline: 'none' }} onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')} onBlur={(e) => (e.target.style.borderColor = '')} />
          <textarea name="message" placeholder="Describe your commission" rows={3} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--line-2)', padding: '12px 2px', color: 'var(--text)', fontFamily: "'Jost', sans-serif", fontSize: 14, outline: 'none', resize: 'none' }} onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')} onBlur={(e) => (e.target.style.borderColor = '')} />
          <button type="submit" style={{ marginTop: 10, padding: 15, background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))', color: '#0A0A0A', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', border: 'none', borderRadius: 2, fontWeight: 500, cursor: 'pointer', fontFamily: "'Jost', sans-serif" }}>
            {submitted ? 'Request Received ✦' : 'Request an Appointment'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
