export function MarqueeStrip() {
  const items = ['GIA Certified', 'Conflict-Free', 'Hand-Selected Rough', 'Bespoke Diamonds', 'Lifetime Assurance'];

  return (
    <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: 'clamp(16px, 2vw, 22px) 0', overflow: 'hidden', background: 'var(--surface)' }}>
      <div style={{ display: 'flex', gap: 'clamp(20px, 4vw, 56px)', justifyContent: 'center', flexWrap: 'wrap', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(16px, 1.8vw, 20px)', letterSpacing: '0.06em', color: 'var(--muted)', fontStyle: 'italic', padding: '0 clamp(12px, 3vw, 24px)' }}>
        {items.map((item, i) => (
          <span key={item} style={{ display: 'flex', gap: 'clamp(20px, 4vw, 56px)', alignItems: 'center' }}>
            {i > 0 && <span style={{ color: 'var(--accent)' }}>◆</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
