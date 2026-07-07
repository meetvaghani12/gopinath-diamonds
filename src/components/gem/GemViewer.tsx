'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Gem } from './Gem';
import type { GemViewerProps } from './types';

export function GemViewer({ autoRotate = true, enableZoom = false }: GemViewerProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.1, 4.2], fov: 36 }}
      gl={{ antialias: true, toneMapping: 3, toneMappingExposure: 1.2 }}
    >
      <Gem />
      <pointLight position={[2.5, 3.5, 3]} intensity={28} color="#fff2d6" distance={30} decay={1} />
      <pointLight position={[-3.5, -1.5, 3]} intensity={18} color="#c8e0ff" distance={30} decay={1} />
      <pointLight position={[0, -3, -3.5]} intensity={14} color="#ffd6e8" distance={30} decay={1} />
      <pointLight position={[0, 4.5, -1]} intensity={10} color="#ffffff" distance={30} decay={1} />
      <ambientLight intensity={0.15} />
      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.25}
        scale={4}
        blur={2}
        far={2}
      />
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={1.8}
        enableZoom={enableZoom}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
      />
      <Environment preset="studio" resolution={1024} />
    </Canvas>
  );
}
