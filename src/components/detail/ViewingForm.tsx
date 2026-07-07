'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function ViewingForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="viewing" style={{ padding: '110px 48px', background: 'var(--bg-deep)', borderTop: '1px solid var(--line)' }}>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}
      >
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(30px, 4.2vw, 54px)', color: 'var(--text)', lineHeight: 1.1 }}>
          See the Aurora in person.
        </h2>
        <p style={{ maxWidth: 480, margin: '20px auto 0', color: 'var(--text-soft)', fontWeight: 300, fontSize: 15, lineHeight: 1.85 }}>
          Private viewings are held by appointment in our Mumbai salon, where you may study the stone under natural and controlled light with a master diamantaire.
        </p>
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: formData.get('email') }) });
            setSubmitted(true);
          }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 38 }}
        >
          <input required type="email" name="email" placeholder="Your email" style={{ minWidth: 280, background: 'transparent', border: '1px solid var(--line-2)', borderRadius: 2, padding: '15px 18px', color: 'var(--text)', fontFamily: "'Jost', sans-serif", fontSize: 14, outline: 'none' }} onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')} onBlur={(e) => (e.target.style.borderColor = '')} />
          <button type="submit" style={{ padding: '15px 34px', background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))', color: '#0A0A0A', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', border: 'none', borderRadius: 2, fontWeight: 500, cursor: 'pointer', fontFamily: "'Jost', sans-serif" }}>
            {submitted ? 'Request Received ✦' : 'Request Viewing'}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
