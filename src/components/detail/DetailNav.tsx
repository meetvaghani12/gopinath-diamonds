import Link from 'next/link';

export function DetailNav() {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px', background: 'var(--surface)', backdropFilter: 'blur(14px)', borderBottom: '1px solid var(--line)' }}>
      <Link href="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, color: 'var(--text)' }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 23, fontWeight: 500, letterSpacing: '0.14em' }}>
          GOPINATH
        </span>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.62em', color: 'var(--accent)', marginTop: 3, paddingLeft: 2 }}>
          DIAMONDS
        </span>
      </Link>
      <Link href="/" style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-soft)' }}>
        ← Back to Collection
      </Link>
    </nav>
  );
}
