'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing';
import { HalfFloatType } from 'three';
import { ToneMappingMode } from 'postprocessing';
import * as THREE from 'three';
import { DiamondModel } from './DiamondModel';

const ROUND_MODEL = '/models/shapes/round.glb';

function ColorGem({ tint, active }: { tint: string; active: boolean }) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'demand'}
      camera={{ position: [0, 1.7, 3.0], fov: 34, near: 0.05, far: 50 }}
      gl={{ antialias: true, toneMapping: THREE.NoToneMapping, alpha: true }}
      dpr={[1, 1.5]}
      style={{ touchAction: 'none' }}
    >
      <Suspense fallback={null}>
        <DiamondModel modelPath={ROUND_MODEL} fitRadius={1.0} tint={tint} spin={active ? 0.7 : 0} />
      </Suspense>
      <EffectComposer frameBufferType={HalfFloatType}>
        <Bloom intensity={0.4} luminanceThreshold={1.0} luminanceSmoothing={0.25} radius={0.6} mipmapBlur />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </Canvas>
  );
}

/**
 * A fancy-coloured diamond rendered with the site's 3D diamond engine. The
 * glowing gradient orb is the loading placeholder and the mobile fallback;
 * on desktop, once scrolled into view, it upgrades to the live tinted stone.
 */
export function ColorDiamond({
  tint,
  glow,
  shadow,
  size = 'clamp(84px, 9vw, 110px)',
}: {
  tint: string;
  glow: string;
  shadow: string;
  size?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [inView, setInView] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDesktop(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { rootMargin: '160px' });
    io.observe(el);
    return () => io.disconnect();
  }, [mounted]);

  const show3D = mounted && desktop && inView;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ width: size, height: size, position: 'relative' }}
    >
      {show3D ? (
        <ColorGem tint={tint} active={hover} />
      ) : (
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: glow, boxShadow: shadow, animation: 'floaty 5s ease-in-out infinite' }} />
      )}
    </div>
  );
}
