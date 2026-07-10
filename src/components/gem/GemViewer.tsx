'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing';
import { HalfFloatType } from 'three';
import { ToneMappingMode } from 'postprocessing';
import { Gem } from './Gem';
import type { GemViewerProps } from './types';
import * as THREE from 'three';

export function GemViewer({
  autoRotate = true,
  enableZoom = false,
  modelPath,
  cameraPosition = [0, 0.1, 4.2],
}: GemViewerProps) {
  return (
    <Canvas
      camera={{ position: cameraPosition, fov: 36, near: 0.05, far: 50 }}
      gl={{ antialias: true, toneMapping: THREE.NoToneMapping, alpha: true }}
      dpr={[1, 1.5]}
      style={{ touchAction: 'none' }}
    >
      {/* The diamond is fully self-lit: its shader samples the HDR environment
          directly, so no scene lights are needed. */}
      <Suspense fallback={null}>
        <Gem modelPath={modelPath} />
      </Suspense>

      <ContactShadows position={[0, -1.2, 0]} opacity={0.3} scale={4} blur={1.5} far={2} />

      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={1.5}
        enableZoom={enableZoom}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        minPolarAngle={Math.PI * 0.02}
        maxPolarAngle={Math.PI * 0.98}
        touches={{ ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE }}
      />

      {/* HDR buffer so the diamond's >1.0 specular output survives to bloom,
          then a single ACES tone-map at the end of the chain. */}
      <EffectComposer frameBufferType={HalfFloatType}>
        <Bloom
          intensity={0.5}
          luminanceThreshold={1.0}
          luminanceSmoothing={0.25}
          radius={0.6}
          mipmapBlur
        />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </Canvas>
  );
}
