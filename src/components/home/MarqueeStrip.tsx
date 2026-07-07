export function MarqueeStrip() {
  const items = ['GIA Certified', 'Conflict-Free', 'Hand-Selected Rough', 'Bespoke Atelier', 'Lifetime Assurance'];

  return (
    <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '22px 0', overflow: 'hidden', background: 'var(--surface)' }}>
      <div style={{ display: 'flex', gap: 56, justifyContent: 'center', flexWrap: 'wrap', fontFamily: "'Cormorant Garamond', serif", fontSize: 20, letterSpacing: '0.06em', color: 'var(--muted)', fontStyle: 'italic' }}>
        {items.map((item, i) => (
          <span key={item} style={{ display: 'flex', gap: 56, alignItems: 'center' }}>
            {i > 0 && <span style={{ color: 'var(--accent)' }}>◆</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
