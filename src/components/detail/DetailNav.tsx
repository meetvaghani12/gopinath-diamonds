import Link from 'next/link';
import { LogoMark } from '@/components/layout/LogoMark';

export function DetailNav() {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(14px, 2vw, 20px) clamp(16px, 4vw, 48px)', background: 'var(--surface)', backdropFilter: 'blur(14px)', borderBottom: '1px solid var(--line)' }}>
      <Link href="/" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, lineHeight: 1, color: 'var(--text)', textDecoration: 'none' }}>
        <LogoMark size={30} />
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 500, letterSpacing: '0.14em' }}>
            GOPINATHJI
          </span>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 8, letterSpacing: '0.62em', color: 'var(--accent)', marginTop: 2, paddingLeft: 2 }}>
            DIAMONDS
          </span>
        </span>
      </Link>
      <Link href="/" style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-soft)', textDecoration: 'none' }}>
        ← Back
      </Link>
    </nav>
  );
}
