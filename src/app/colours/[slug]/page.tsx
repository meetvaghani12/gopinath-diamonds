import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DetailNav } from '@/components/detail/DetailNav';
import { colors } from '@/lib/constants';

export function generateStaticParams() {
  return colors.map((c) => ({ slug: c.slug }));
}

export default async function ColourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = colors.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <DetailNav />
      <section
        style={{
          minHeight: 'calc(100dvh - 66px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          alignItems: 'center',
        }}
      >
        {/* image side, tinted radial wash */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 420,
            padding: 'clamp(32px, 6vw, 80px)',
            background: `radial-gradient(ellipse 60% 55% at 50% 45%, ${c.tint}22, transparent 70%)`,
            borderRight: '1px solid var(--line)',
          }}
        >
          <div style={{ width: 'min(360px, 70vw)', aspectRatio: '1/1', animation: 'floaty 6s ease-in-out infinite' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/colors/${c.slug}.png`}
              alt={`${c.name} diamond`}
              style={{ width: '100%', height: '100%', objectFit: 'contain', filter: `drop-shadow(0 0 40px ${c.tint}55)` }}
            />
          </div>
        </div>

        {/* details side */}
        <div style={{ padding: 'clamp(32px, 6vw, 72px) clamp(24px, 6vw, 72px)' }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
            Fancy Colour · {c.rarity}
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(36px, 5.2vw, 72px)', lineHeight: 1.0, color: 'var(--text)' }}>
            {c.name}<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent-bright)' }}>Diamonds</span>
          </h1>

          <p style={{ maxWidth: 460, margin: '22px 0 0', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.9, color: 'var(--text-soft)', fontWeight: 300 }}>
            {c.blurb}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'clamp(28px, 4vw, 40px)', maxWidth: 500 }}>
            {c.facts.map((f) => (
              <div key={f.k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '14px 2px', borderBottom: '1px solid var(--line)' }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-soft)', flexShrink: 0 }}>{f.k}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(16px, 1.7vw, 19px)', color: 'var(--text)', textAlign: 'right' }}>{f.v}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 'clamp(10px, 2vw, 16px)', marginTop: 32, flexWrap: 'wrap' }}>
            <Link href="/#contact" style={{ padding: '14px clamp(20px, 3vw, 34px)', background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))', color: '#0A0A0A', fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Enquire About {c.name} Diamonds
            </Link>
            <Link href="/#fancy" style={{ padding: '14px clamp(20px, 3vw, 34px)', border: '1px solid var(--line-2)', color: 'var(--accent-bright)', fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              ← All Colours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
