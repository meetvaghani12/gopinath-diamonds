import Link from 'next/link';
import { DetailNav } from '@/components/detail/DetailNav';
import { jewelryCategories, type JewelryProduct } from '@/lib/jewelry';
import data from '@/lib/jewelryData.json';

const products = data as JewelryProduct[];

export default async function JewelryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = (jewelryCategories as readonly string[]).includes(category ?? '')
    ? (category as string)
    : 'Rings';
  const items = products.filter((p) => p.category === active);

  return (
    <>
      <DetailNav />

      <section style={{ padding: 'clamp(48px, 7vw, 90px) clamp(16px, 4vw, 48px) clamp(60px, 8vw, 100px)', maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 44px)' }}>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
            The Collection
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(30px, 5vw, 60px)', color: 'var(--text)', lineHeight: 1.04 }}>
            Fine Jewellery
          </h1>
        </div>

        {/* category tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(6px, 1.5vw, 12px)', marginBottom: 'clamp(30px, 4vw, 48px)' }}>
          {jewelryCategories.map((c) => {
            const isActive = c === active;
            return (
              <Link
                key={c}
                href={`/jewelry?category=${c}`}
                scroll
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 'clamp(10px, 1.1vw, 12px)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  borderRadius: 2,
                  color: isActive ? '#0A0A0A' : 'var(--text-soft)',
                  background: isActive ? 'linear-gradient(135deg, var(--accent-bright), var(--accent))' : 'transparent',
                  border: `1px solid ${isActive ? 'transparent' : 'var(--line-2)'}`,
                }}
              >
                {c}
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 'clamp(24px, 3vw, 36px)' }}>
          {items.length} pieces
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 'clamp(14px, 1.6vw, 24px)' }}>
          {items.map((p) => (
            <Link key={p.sku || p.slug} href={`/jewelry/${p.slug}`} className="jw-card" style={{ textDecoration: 'none' }}>
              <div className="jw-swap" style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', borderRadius: 4, background: '#f4f3f1', border: '1px solid var(--line)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {p.imageYellow && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="jw-alt" src={p.imageYellow} alt={`${p.name} in yellow gold`} loading="lazy" />
                )}
              </div>
              <div style={{ marginTop: 11 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'var(--text)', lineHeight: 1.25 }}>{p.name}</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginTop: 5 }}>
                  {[p.shape, p.setting].filter(Boolean).join(' · ') || p.category}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .jw-card img { transition: transform .6s cubic-bezier(.16,1,.3,1); }
        .jw-card:hover img { transform: scale(1.05); }
      `}</style>
    </>
  );
}
