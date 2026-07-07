export function Footer() {
  return (
    <footer
      style={{
        padding: 'clamp(28px, 4vw, 48px) clamp(16px, 4vw, 48px)',
        borderTop: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, letterSpacing: '0.14em', color: 'var(--text)' }}>
          GOPINATH
        </span>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 8, letterSpacing: '0.6em', color: 'var(--accent)', marginTop: 3 }}>
          DIAMONDS
        </span>
      </div>
      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.16em', color: 'var(--muted)', width: '100%', textAlign: 'center' }} className="footer-copy">
        &copy; 2026 Gopinath Diamonds · Crafted in Light
      </div>
      <style>{`
        @media (min-width: 640px) {
          .footer-copy { width: auto !important; text-align: left !important; }
        }
      `}</style>
    </footer>
  );
}
