'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing';
import { HalfFloatType } from 'three';
import { ToneMappingMode } from 'postprocessing';
import * as THREE from 'three';
import { DiamondModel } from './DiamondModel';
import { ShapeIcon } from '@/components/home/ShapeIcon';

/** Small 3D canvas for one grid card. Static until hovered, then it spins. */
function ShapeGem({ modelPath, active }: { modelPath: string; active: boolean }) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'demand'}
      camera={{ position: [0, 2.5, 2.6], fov: 34, near: 0.05, far: 50 }}
      gl={{ antialias: true, toneMapping: THREE.NoToneMapping, alpha: true }}
      dpr={[1, 1.5]}
      style={{ touchAction: 'none' }}
    >
      <Suspense fallback={null}>
        <DiamondModel modelPath={modelPath} fitRadius={1.05} spin={active ? 0.7 : 0} />
      </Suspense>
      <EffectComposer frameBufferType={HalfFloatType}>
        <Bloom intensity={0.4} luminanceThreshold={1.0} luminanceSmoothing={0.25} radius={0.6} mipmapBlur />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </Canvas>
  );
}

/**
 * Renders the shape's SVG icon as the baseline (also the SSR output and the
 * mobile fallback), and upgrades to a live 3D diamond on desktop once the card
 * scrolls into view — keeping WebGL contexts off the page until they're needed.
 */
export function ShapeDiamond({
  kind,
  modelPath,
  active,
}: {
  kind: string;
  modelPath: string;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDesktop(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: '160px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted]);

  const show3D = mounted && desktop && inView;

  return (
    <div ref={ref} style={{ width: 92, height: 92, position: 'relative' }}>
      {show3D ? (
        <ShapeGem modelPath={modelPath} active={active} />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          <ShapeIcon kind={kind} />
        </div>
      )}
    </div>
  );
}
