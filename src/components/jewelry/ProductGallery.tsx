'use client';

import { useState } from 'react';

/**
 * Product image with metal variants (e.g. White Gold / Yellow Gold).
 * Clicking the image cycles to the next variant; the metal buttons jump to a
 * specific one. Variants crossfade.
 */
export function ProductGallery({ images, metals }: { images: string[]; metals: string[] }) {
  const [i, setI] = useState(0);
  const multi = images.length > 1;

  return (
    <div>
      <div
        onClick={() => multi && setI((v) => (v + 1) % images.length)}
        style={{
          position: 'relative',
          aspectRatio: '1/1',
          background: '#f4f3f1',
          borderRadius: 6,
          overflow: 'hidden',
          cursor: multi ? 'pointer' : 'default',
          border: '1px solid var(--line)',
        }}
      >
        {images.map((src, idx) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            loading={idx === 0 ? 'eager' : 'lazy'}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: idx === i ? 1 : 0,
              transition: 'opacity 0.55s cubic-bezier(.16,1,.3,1)',
            }}
          />
        ))}
        {multi && (
          <div style={{ position: 'absolute', right: 14, bottom: 12, fontFamily: "'Jost', sans-serif", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', background: 'rgba(255,255,255,0.7)', padding: '5px 9px', borderRadius: 2 }}>
            Tap to switch metal
          </div>
        )}
      </div>

      {multi && (
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          {images.map((label, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '9px 16px',
                borderRadius: 2,
                cursor: 'pointer',
                color: idx === i ? '#0A0A0A' : 'var(--text-soft)',
                background: idx === i ? 'linear-gradient(135deg, var(--accent-bright), var(--accent))' : 'transparent',
                border: `1px solid ${idx === i ? 'transparent' : 'var(--line-2)'}`,
              }}
            >
              {metals[idx] ?? `View ${idx + 1}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
