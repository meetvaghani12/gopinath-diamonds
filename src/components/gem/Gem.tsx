'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Gem() {
  const meshRef = useRef<THREE.Mesh>(null);
  const clockRef = useRef(0);

  const profile = [
    new THREE.Vector2(0.001, -1.05),
    new THREE.Vector2(0.62, -0.42),
    new THREE.Vector2(1.00, 0.00),
    new THREE.Vector2(1.00, 0.10),
    new THREE.Vector2(0.72, 0.42),
    new THREE.Vector2(0.50, 0.52),
    new THREE.Vector2(0.001, 0.52),
  ];

  const geometry = new THREE.LatheGeometry(profile, 16);
  geometry.computeVertexNormals();

  useFrame(() => {
    if (meshRef.current) {
      clockRef.current += 0.01;
      meshRef.current.position.y = Math.sin(clockRef.current) * 0.06;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={[1.25, 1.25, 1.25]}>
      <meshPhysicalMaterial
        color={0xffffff}
        metalness={0}
        roughness={0.02}
        transmission={1}
        thickness={2.4}
        ior={2.42}
        dispersion={5}
        envMapIntensity={2.6}
        clearcoat={1}
        clearcoatRoughness={0}
        flatShading
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
