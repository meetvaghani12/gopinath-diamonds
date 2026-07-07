'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function vec(x: number, y: number, z: number) {
  return new THREE.Vector3(x, y, z);
}

function createRoundBrilliant(): THREE.BufferGeometry {
  const rGirdle = 1;
  const rTable = 0.57;
  const hCrown = 0.31;
  const hPavilion = 0.86;

  const verts: THREE.Vector3[] = [];
  const faces: number[] = [];

  function ring(
    count: number,
    offset: number,
    y: number,
    radiusFn: (i: number, total: number) => number,
  ) {
    const start = verts.length;
    for (let i = 0; i < count; i++) {
      const a = offset + (i / count) * Math.PI * 2;
      const r = radiusFn(i, count);
      verts.push(vec(Math.cos(a) * r, y, Math.sin(a) * r));
    }
    return { start, count };
  }

  function addQuad(a: number, b: number, c: number, d: number) {
    faces.push(a, b, c, a, c, d);
  }

  function addTri(a: number, b: number, c: number) {
    faces.push(a, b, c);
  }

  const r0 = ring(1, 0, hCrown, () => 0); // table center
  const r1 = ring(8, Math.PI / 8, hCrown * 0.82, () => rTable * 0.55); // star inner
  const r2 = ring(8, 0, hCrown, (i) => {
    const angle = (i / 8) * Math.PI * 2;
    const r = rTable / Math.max(Math.abs(Math.cos(angle)), Math.abs(Math.sin(angle)));
    return r;
  }); // table edge (octagon)

  const r3 = ring(16, Math.PI / 16, hCrown * 0.42, (i) => {
    return i % 2 === 0 ? rGirdle * 0.88 : rGirdle * 0.78;
  }); // crown mid

  const r4 = ring(16, Math.PI / 16, 0, (i) => {
    return i % 2 === 0 ? rGirdle * 0.98 : rGirdle;
  }); // girdle

  const r5 = ring(16, Math.PI / 16, -hPavilion * 0.35, (i) => {
    return i % 2 === 0 ? rGirdle * 0.82 : rGirdle * 0.70;
  }); // upper pavilion

  const r6 = ring(8, 0, -hPavilion * 0.72, (i) => {
    const angle = (i / 8) * Math.PI * 2;
    const r = rGirdle * 0.35 / Math.max(Math.abs(Math.cos(angle)), Math.abs(Math.sin(angle)));
    return r;
  }); // pavilion bottom (octagon)

  const r7 = ring(1, 0, -hPavilion, () => 0); // culet

  // Star facets (table center → star inner → table edge)
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    addTri(r0.start, r1.start + i, r1.start + next);
    addTri(r0.start, r1.start + next, r2.start + next);
    addTri(r0.start, r2.start + next, r2.start + i);
    addTri(r0.start, r2.start + i, r1.start + i);
  }

  // Crown: connect table edge → star inner → crown mid
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    // Star facet (lower triangle)
    addTri(r1.start + i, r2.start + i, r3.start + i * 2);
    addTri(r2.start + next, r1.start + next, r3.start + i * 2 + 1);

    // Crown main (kite) from table edge to girdle
    addQuad(
      r2.start + i,
      r2.start + next,
      r4.start + i * 2 + 1,
      r3.start + i * 2,
    );

    // Upper girdle facet
    addQuad(
      r3.start + i * 2,
      r4.start + i * 2 + 1,
      r4.start + i * 2,
      r3.start + i * 2 - 1 + (i === 0 ? 16 : 0),
    );
  }

  // Lower girdle facets
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    // Pavilion main (kite from girdle to bottom)
    addQuad(
      r4.start + i * 2,
      r4.start + i * 2 + 1,
      r6.start + next,
      r6.start + i,
    );

    // Lower girdle facet
    addTri(
      r4.start + i * 2 + 1,
      r5.start + i * 2 + 1,
      r6.start + next,
    );
    addTri(
      r4.start + i * 2 + 1,
      r5.start + i * 2,
      r5.start + i * 2 + 1,
    );
    addTri(
      r4.start + i * 2,
      r5.start + (i === 0 ? 16 : i * 2 - 1),
      r5.start + i * 2,
    );
    addTri(
      r4.start + i * 2,
      r6.start + i,
      r5.start + (i === 0 ? 16 : i * 2 - 1),
    );
    addTri(
      r5.start + i * 2,
      r6.start + i,
      r5.start + i * 2 + 1,
    );
    addTri(
      r5.start + i * 2 + 1,
      r6.start + i,
      r6.start + next,
    );
  }

  // Pavilion bottom to culet
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    addTri(r6.start + i, r7.start, r6.start + next);
  }

  const geometry = new THREE.BufferGeometry();
  const position = new Float32Array(verts.length * 3);
  for (let i = 0; i < verts.length; i++) {
    position[i * 3] = verts[i].x;
    position[i * 3 + 1] = verts[i].y;
    position[i * 3 + 2] = verts[i].z;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(position, 3));
  geometry.setIndex(faces);
  geometry.computeVertexNormals();

  return geometry;
}

export function Gem() {
  const meshRef = useRef<THREE.Mesh>(null);
  const clockRef = useRef(0);

  const geometry = useMemo(() => createRoundBrilliant(), []);

  useFrame(() => {
    if (meshRef.current) {
      clockRef.current += 0.01;
      meshRef.current.position.y = Math.sin(clockRef.current) * 0.04;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={[1.2, 1.2, 1.2]}>
      <meshPhysicalMaterial
        color={0xffffff}
        metalness={0}
        roughness={0.01}
        transmission={1}
        thickness={2.8}
        ior={2.42}
        dispersion={5}
        envMapIntensity={3.2}
        clearcoat={1}
        clearcoatRoughness={0}
        flatShading
        transparent
        side={THREE.DoubleSide}
        envMapRotation={new THREE.Euler(0, 0, 0)}
      />
    </mesh>
  );
}
