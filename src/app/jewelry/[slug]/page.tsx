import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DetailNav } from '@/components/detail/DetailNav';
import { ProductGallery } from '@/components/jewelry/ProductGallery';
import { type JewelryProduct } from '@/lib/jewelry';
import data from '@/lib/jewelryData.json';

const products = data as JewelryProduct[];

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  const images = [p.image, p.imageYellow].filter(Boolean) as string[];
  const metals = p.metals && p.metals.length ? p.metals : ['White Gold'];
  const specLine = [p.shape, p.setting, p.carat].filter(Boolean).join('  ·  ');

  return (
    <>
      <DetailNav />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(24px, 4vw, 48px) clamp(16px, 4vw, 48px) clamp(60px, 8vw, 100px)' }}>
        {/* breadcrumb */}
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', marginBottom: 'clamp(20px, 3vw, 34px)' }}>
          <Link href="/jewelry" style={{ color: 'var(--text-soft)', textDecoration: 'none' }}>Jewellery</Link>
          {'  /  '}
          <Link href={`/jewelry?category=${p.category}`} style={{ color: 'var(--text-soft)', textDecoration: 'none' }}>{p.category}</Link>
          {'  /  '}
          <span style={{ color: 'var(--text)' }}>{p.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
          <ProductGallery images={images} metals={metals} />

          <div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 22, flexWrap: 'wrap' }}>
              {p.bestseller && (
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--accent-bright)', border: '1px solid var(--line-2)', padding: '6px 12px', borderRadius: 2 }}>Bestseller</span>
              )}
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted)', border: '1px solid var(--line)', padding: '6px 12px', borderRadius: 2 }}>{p.category}</span>
            </div>

            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(30px, 4.4vw, 52px)', lineHeight: 1.05, color: 'var(--text)' }}>{p.name}</h1>

            {specLine && (
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(11px, 1.2vw, 13px)', letterSpacing: '0.1em', color: 'var(--text-soft)', marginTop: 18 }}>{specLine}</div>
            )}
            {p.sku && (
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 10 }}>Style: {p.sku}</div>
            )}

            <div style={{ height: 1, background: 'var(--line)', margin: 'clamp(24px, 3vw, 34px) 0' }} />

            {p.description && (
              <>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1vw, 11px)', letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Description</div>
                <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.9, color: 'var(--text-soft)', fontWeight: 300, maxWidth: 480 }}>{p.description}</p>
              </>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 'clamp(28px, 4vw, 40px)', maxWidth: 460 }}>
              <Link href="/#contact" style={{ textAlign: 'center', padding: '15px 28px', background: 'linear-gradient(135deg, var(--accent-bright), var(--accent))', color: '#0A0A0A', fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, fontWeight: 500, textDecoration: 'none' }}>
                Inquire About This Piece
              </Link>
              <Link href="/#bespoke" style={{ textAlign: 'center', padding: '15px 28px', border: '1px solid var(--line-2)', color: 'var(--accent-bright)', fontFamily: "'Jost', sans-serif", fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none' }}>
                Customize This Design
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
