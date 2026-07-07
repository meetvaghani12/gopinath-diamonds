'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Gem } from './Gem';
import type { GemViewerProps } from './types';

export function GemViewer({ autoRotate = true, enableZoom = false }: GemViewerProps) {
  return (
    <Canvas camera={{ position: [0, 0.2, 4.4], fov: 38 }}>
      <Gem />
      <pointLight position={[3, 4, 3]} intensity={22} color="#ffe8c0" distance={30} />
      <pointLight position={[-4, -2, 3]} intensity={16} color="#bcd6ff" distance={30} />
      <pointLight position={[0, -3, -4]} intensity={12} color="#ffd0e6" distance={30} />
      <ambientLight intensity={0.35} />
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={1.6}
        enableZoom={enableZoom}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        minPolarAngle={Math.PI * 0.28}
        maxPolarAngle={Math.PI * 0.72}
      />
      <Environment preset="studio" />
    </Canvas>
  );
}
