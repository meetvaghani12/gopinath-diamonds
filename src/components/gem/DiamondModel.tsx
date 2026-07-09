'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useEnvironment } from '@react-three/drei';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as THREE from 'three';
import { createCenterDiamondMaterial, type CustomDiamondMaterial } from './diamondMaterial';
import { renderNormalCapture } from './DiamondNormalCapture';

const DIAMOND_ENV = '/environment/diamondenvironment.hdr';

export interface DiamondModelProps {
  /** Path to a center-stone GLB, e.g. "/models/diamond.glb". */
  modelPath: string;
  /** World-space radius the stone's girdle is normalized to (controls framing). */
  fitRadius?: number;
  /** Vertical floating-bob amplitude in world units (0 disables). */
  bob?: number;
  /** Self Y-rotation speed in radians/sec (0 = static; the mesh itself spins). */
  spin?: number;
  /** Static tilt applied around X, in radians (a flattering 3/4 pose). */
  tiltX?: number;
  /** Optional body-colour tint (hex) for fancy-coloured stones. */
  tint?: string;
}

/**
 * Extract a single, origin-centered diamond geometry from a GLB and scale it so
 * its widest horizontal radius (the girdle) equals `fitRadius`. Facet-per-
 * primitive exports are merged so the normal capture covers the whole stone.
 */
function prepareDiamondGeometry(root: THREE.Object3D, fitRadius: number): THREE.BufferGeometry {
  root.updateWorldMatrix(true, true);

  const geometries: THREE.BufferGeometry[] = [];
  root.traverse((child) => {
    if (!(child as THREE.Mesh).isMesh) return;
    const mesh = child as THREE.Mesh;
    const geom = mesh.geometry.clone();
    geom.applyMatrix4(mesh.matrixWorld);
    ['uv', 'uv2', 'tangent', 'color'].forEach((attr) => {
      if (geom.getAttribute(attr)) geom.deleteAttribute(attr);
    });
    geometries.push(geom);
  });

  const geometry =
    geometries.length > 1 ? (mergeGeometries(geometries) as THREE.BufferGeometry) : geometries[0];
  if (geometries.length > 1) geometries.forEach((g) => g.dispose());

  geometry.computeBoundingBox();
  const center = new THREE.Vector3();
  geometry.boundingBox!.getCenter(center);
  geometry.translate(-center.x, -center.y, -center.z);

  geometry.computeBoundingBox();
  const size = new THREE.Vector3();
  geometry.boundingBox!.getSize(size);
  const girdleHalfWidth = Math.max(size.x, size.z) / 2 || 1;
  const scale = fitRadius / girdleHalfWidth;
  geometry.scale(scale, scale, scale);

  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

export function DiamondModel({
  modelPath,
  fitRadius = 1.15,
  bob = 0,
  spin = 0,
  tiltX = 0,
  tint,
}: DiamondModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const clockRef = useRef(0);
  const { gl, invalidate } = useThree();

  const { scene: gltfScene } = useGLTF(modelPath);
  const envMap = useEnvironment({ files: DIAMOND_ENV });

  const isMobile = useMemo(
    () => typeof window !== 'undefined' && window.innerWidth < 768,
    []
  );

  const geometry = useMemo(
    () => prepareDiamondGeometry(gltfScene, fitRadius),
    [gltfScene, fitRadius]
  );

  const [normalCapture, setNormalCapture] = useState<{
    texture: THREE.CubeTexture;
    radius: number;
    centerOffset: THREE.Vector3;
  } | null>(null);

  useEffect(() => {
    const resolution = isMobile ? 256 : 512;
    try {
      setNormalCapture(renderNormalCapture(gl, geometry, resolution));
    } catch (e) {
      console.error('Diamond normal capture failed:', e);
    }
  }, [gl, geometry, isMobile]);

  const material = useMemo<CustomDiamondMaterial | null>(() => {
    if (!normalCapture) return null;
    const rayBounces = isMobile ? 4 : 5;
    const mat = createCenterDiamondMaterial(rayBounces);
    mat.uniforms.tCubeMapNormals.value = normalCapture.texture;
    mat.uniforms.radius.value = normalCapture.radius;
    mat.uniforms.centerOffset.value.copy(normalCapture.centerOffset);
    // Body colour: the shader absorbs (1 - color) along the ray path, so a warm
    // tint yields a fancy-yellow stone, a rose tint a pink stone, etc.
    if (tint) {
      mat.uniforms.color.value = new THREE.Color(tint);
      mat.uniforms.absorptionFactor.value = 1.6; // deepen the body colour
    }
    return mat;
  }, [normalCapture, isMobile, tint]);

  useEffect(() => {
    if (material && envMap) {
      material.uniforms.envMap.value = envMap;
      material.needsUpdate = true;
      invalidate(); // ensure at least one frame paints once everything is ready
    }
  }, [material, envMap, invalidate]);

  useEffect(() => {
    return () => {
      material?.dispose();
    };
  }, [material]);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh || !material) return;

    if (spin) mesh.rotation.y += spin * delta;
    if (bob) {
      clockRef.current += delta;
      mesh.position.y = Math.sin(clockRef.current * 1.6) * bob;
    }
    mesh.updateMatrixWorld();

    // Keep the ray tracer's model-offset matrices in sync with world transform.
    material.uniforms.modelOffsetMatrix.value.copy(mesh.matrixWorld);
    material.uniforms.modelOffsetMatrixInv.value.copy(mesh.matrixWorld).invert();

    if (spin || bob) invalidate();
  });

  if (!material) return null;

  return <mesh ref={meshRef} geometry={geometry} material={material} rotation-x={tiltX} />;
}
