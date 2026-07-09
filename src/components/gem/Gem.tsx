'use client';

import { useGLTF } from '@react-three/drei';
import { DiamondModel } from './DiamondModel';

const DIAMOND_MODEL = '/models/diamond.glb';

useGLTF.preload(DIAMOND_MODEL);

/** Hero stone: floats gently; the camera orbit (OrbitControls) provides rotation. */
export function Gem({ modelPath = DIAMOND_MODEL }: { modelPath?: string }) {
  return <DiamondModel modelPath={modelPath} fitRadius={1.15} bob={0.04} />;
}
