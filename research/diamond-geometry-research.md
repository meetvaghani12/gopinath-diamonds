# Diamond Geometry Research for Three.js

## Table of Contents
1. [Brilliant Cut Diamond Anatomy](#1-brilliant-cut-diamond-anatomy)
2. [Ideal Proportions (Tolkowsky)](#2-ideal-proportions-tolkowsky)
3. [GIA Grading Standards](#3-gia-grading-standards)
4. [Facet Structure](#4-facet-structure)
5. [Optical Properties](#5-optical-properties)
6. [Three.js Implementation Approaches](#6-threejs-implementation-approaches)
7. [GitHub Repositories](#7-github-repositories)
8. [3D Model Sources](#8-3d-model-sources)
9. [Code Examples](#9-code-examples)

---

## 1. Brilliant Cut Diamond Anatomy

### Key Terms
- **Crown**: Upper portion of the diamond (above girdle)
- **Pavilion**: Lower portion (below girdle), conical shape for light reflection
- **Girdle**: Thin edge separating crown and pavilion
- **Table**: Large flat facet on top (enters light)
- **Culet**: Tiny flat facet or point at the pavilion base (58th facet)

### Cross-Section View
```
        ___________  ← Table (top facet)
       /           \
      /    Crown    \ ← Crown angle (32-36°)
     /               \
    |    Girdle       | ← Girdle line
     \               /
      \   Pavilion  / ← Pavilion angle (40-42°)
       \           /
        \_________/  ← Culet (bottom point)
```

---

## 2. Ideal Proportions (Tolkowsky 1919)

Marcel Tolkowsky, Belgian mathematician, calculated ideal proportions for maximum brilliance and fire.

### Tolkowsky Ideal Cut (1919)
| Parameter | Value |
|-----------|-------|
| **Table %** | 53% of girdle diameter |
| **Crown Height** | 16.2% of girdle diameter |
| **Crown Angle** | 34.5° |
| **Pavilion Depth** | 43.1% of girdle diameter |
| **Pavilion Angle** | 40.75° |
| **Total Depth** | ~59-60% |
| **Culet** | None (point) |

### Calculation Formulas
```
Table % = (table diameter / girdle diameter) × 100
Crown Height % = (crown height / girdle diameter) × 100
Pavilion Depth % = (pavilion depth / girdle diameter) × 100
Total Depth % = (total depth / girdle diameter) × 100
```

---

## 3. GIA Grading Standards

### Excellent Cut Proportions (GIA)
| Parameter | Excellent Range |
|-----------|-----------------|
| **Table %** | 52-62% |
| **Crown Angle** | 31.5° - 36.5° |
| **Pavilion Angle** | 40.6° - 41.8° |
| **Crown Height** | 12.5-17% |
| **Pavilion Depth** | 42-44% |
| **Star Length** | 50-55% |
| **Lower Girdle %** | 75-80% |
| **Girdle Thickness** | Thin to Slightly Thick |
| **Culet Size** | None to Very Small |

### Cut Quality Factors
1. **Brightness**: Total internal and external reflection of white light
2. **Fire**: Dispersion of light into spectral colors
3. **Scintillation**: Pattern of light/dark areas and sparkle when moved
4. **Weight Ratio**: Overall proportions
5. **Durability**: Girdle thickness and culet size
6. **Polish**: Surface smoothness
7. **Symmetry**: Facet alignment

---

## 4. Facet Structure

### Round Brilliant Cut: 57 or 58 Facets

#### Crown (33 facets)
| Facet Type | Count | Description |
|------------|-------|-------------|
| **Table** | 1 | Large top facet |
| **Star** | 8 | Triangular facets from table to bezel |
| **Bezel (Kite)** | 8 | Large kite-shaped facets |
| **Upper Girdle** | 16 | Small triangular facets at girdle |

#### Pavilion (24 facets + culet)
| Facet Type | Count | Description |
|------------|-------|-------------|
| **Pavilion Main** | 8 | Large facets from girdle to culet |
| **Lower Girdle** | 16 | Small triangular facets at girdle |
| **Culet** | 0-1 | Optional tiny facet at bottom |

### Facet Arrangement (Top View)
```
         Table
        /  |  \
       /   |   \
      / 8   | 8 \     ← Star facets (8)
     /      |     \
    |  8    |    8  |  ← Bezel facets (8)
    |       |       |
    | 16    |   16  |  ← Upper girdle (16)
    \       |      /
     \      |     /
      \  8  | 8  /    ← Pavilion mains visible
       \    |   /
        \   |  /
         \  | /
```

---

## 5. Optical Properties

### Diamond Refractive Index
- **Refractive Index (n)**: 2.42 (very high)
- **Critical Angle**: ~24.4° (arcsin(1/2.42))
- **Dispersion**: 0.044 (separates white light into colors)
- **Abbe Number**: 55.3

### Light Path Through Diamond
1. Light enters through crown/table
2. Refracts at surface (Snell's Law)
3. Hits pavilion facets at angle > critical angle
4. **Total Internal Reflection** (TIR) occurs
5. Light reflects back toward crown
6. Exits through crown at angle < critical angle
7. Dispersion creates "fire" (rainbow colors)

### Why Pavilion Angle Matters
- **Too shallow** (<40°): Light escapes through bottom
- **Too deep** (>42°): Light escapes through sides
- **Ideal** (40.6-41.8°): Maximum light return through crown

### Snell's Law
```
n₁ × sin(θ₁) = n₂ × sin(θ₂)

Where:
- n₁ = refractive index of medium 1 (air = 1.0)
- n₂ = refractive index of medium 2 (diamond = 2.42)
- θ₁ = angle of incidence
- θ₂ = angle of refraction
```

### Critical Angle Calculation
```
θc = arcsin(n_air / n_diamond)
θc = arcsin(1 / 2.42)
θc ≈ 24.4°
```

---

## 6. Three.js Implementation Approaches

### Approach A: Simple Cone + Cylinder (Quick)
Use LatheGeometry with diamond profile points:
```javascript
const points = [
  new THREE.Vector2(0, -0.7),      // culet (bottom point)
  new THREE.Vector2(0.5, 0),       // girdle
  new THREE.Vector2(0.265, 0.162), // crown edge (table)
  new THREE.Vector2(0, 0.162),     // table center
];
const geometry = new THREE.LatheGeometry(points, 64);
```

### Approach B: Custom BufferGeometry (Accurate)
Build all 57 facets manually:
```javascript
// Calculate vertices for each facet
// Crown: table, star, bezel, upper girdle
// Pavilion: main, lower girdle, culet

const geometry = new THREE.BufferGeometry();
const positions = new Float32Array([...]); // vertex positions
const normals = new Float32Array([...]);   // face normals
const indices = new Uint16Array([...]);    // triangle indices

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
geometry.setIndex(new THREE.BufferAttribute(indices, 1));
```

### Approach C: Load Pre-made GLB/GLTF Model
```javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('/models/diamond.glb', (gltf) => {
  const diamond = gltf.scene;
  scene.add(diamond);
});
```

### Approach D: Ray-tracing Shader (Most Realistic)
Use custom shaders for:
- Refraction (Snell's Law)
- Fresnel reflection
- Total Internal Reflection
- Chromatic dispersion (fire)
- Internal bounces

Reference: `piellardj/diamond-webgl` implementation

---

## 7. GitHub Repositories

### Diamond Rendering & Geometry

| Repository | Stars | Description | Link |
|------------|-------|-------------|------|
| **piellardj/diamond-webgl** | 153 | Ray-tracing engine for real-time diamond rendering in WebGL. Supports precise cut control, ASET images, hearts/arrows patterns. | https://github.com/piellardj/diamond-webgl |
| **jbrialon/3d-diamond** | 0 | Diamond material for Three.js with custom shaders | https://github.com/jbrialon/3d-diamond |
| **twlick/diamond_three** | - | Three.js diamond with refraction and envMap | https://github.com/twlick/diamond_three |

### Three.js Diamond Shaders & Techniques

| Resource | Description | Link |
|----------|-------------|------|
| **Auriga IT Blog** | Custom diamond shaders with three-mesh-bvh for internal reflections | https://aurigait.com/blog/how-to-create-custom-shaders-for-a-diamond-in-three-js/ |
| **Three.js Forum: Real-time Diamond Rendering** | spidersharma's diamond rendering with ray tracing inside gem | https://discourse.threejs.org/t/real-time-diamond-rendering/4284 |
| **Three.js Forum: Diamond Material** | Discussion on diamond rendering approaches | https://discourse.threejs.org/t/how-to-render-a-diamond-properly-with-three-js/7900 |
| **pixotronics.com** | Live demo of Three.js diamond rendering | http://pixotronics.com/ |

### Custom BufferGeometry Resources

| Resource | Description | Link |
|----------|-------------|------|
| **Three.js Manual: Custom BufferGeometry** | Official guide on creating custom geometries | https://threejs.org/manual/en/custom-buffergeometry.html |
| **Three.js Fundamentals: Custom BufferGeometry** | Detailed tutorial with code examples | https://github.com/gfxfundamentals/threejsfundamentals/blob/master/threejs/lessons/threejs-custom-buffergeometry.md |
| **ramijames.com: Custom Geometries** | Tutorial on LatheGeometry and BufferGeometry | https://www.ramijames.com/learn-threejs/building-blocks/custom-geometries |

---

## 8. 3D Model Sources

### Free Diamond Models (.glb/.gltf/.obj)

| Source | Format | Polygons | License | Link |
|--------|--------|----------|---------|------|
| **CadNav: Brilliant Cut Diamond** | .obj, .fbx | 558 | Non-commercial | https://www.cadnav.com/3d-models/model-45831.html |
| **Sketchfab: Round Brilliant Blue Diamond** | .glb | 139 | CC Attribution | https://sketchfab.com/3d-models/round-brilliant-blue-diamond-e02f03112b8c41e7a46a3acc9cabdd40 |
| **Angular Three.js Example** | .glb | - | - | https://github.com/angular-threejs/angular-three/blob/main/apps/examples/public/diamond.glb |
| **Get3DModels: Three Diamond Ring** | .glb | - | - | https://www.get3dmodels.com/art-and-sculptures/three-diamond-ring |
| **Khronos glTF Sample Assets** | .glb | - | Various | https://github.khronos.org/glTF-Assets/ |

### Commercial / Premium Models

| Source | Description | Link |
|--------|-------------|------|
| **3DOcean: Round Diamond Brilliant Faceting** | NURBS geometry, multiple topologies (low poly to NURBS) | https://3docean.net/item/round-diamond-brilliant-faceting-ideal-cut/46890074 |
| **CGTrader: Round Diamond Ideal Cut** | Mathematically calculated proportions | https://www.cgtrader.com/3d-models/various/various-models/round-diamond-brilliant-faceting-ideal-cut-49e553a0-0a74-415f-a11a-d7fa3f8cdd25 |

### Three.js Official GLTF Models
```
https://github.com/mrdoob/three.js/tree/dev/examples/models/gltf
```

---

## 9. Code Examples

### Example 1: Simple Diamond with LatheGeometry

```javascript
import * as THREE from 'three';

function createDiamondGeometry() {
  // Diamond profile points (x = radius, y = height)
  // Based on Tolkowsky proportions
  const girdleRadius = 1.0;
  const tableRadius = girdleRadius * 0.53; // 53% table
  const crownHeight = girdleRadius * 0.162; // 16.2% crown
  const pavilionDepth = girdleRadius * 0.431; // 43.1% pavilion

  const points = [
    new THREE.Vector2(0, -pavilionDepth),           // Culet (bottom point)
    new THREE.Vector2(girdleRadius * 0.99, -0.01),  // Pavilion edge near girdle
    new THREE.Vector2(girdleRadius, 0),              // Girdle
    new THREE.Vector2(tableRadius, crownHeight),     // Crown edge (table)
    new THREE.Vector2(0, crownHeight),               // Table center
  ];

  // More segments = smoother circle
  return new THREE.LatheGeometry(points, 64);
}

const geometry = createDiamondGeometry();
const material = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  transmission: 0.95,        // Glass-like transparency
  thickness: 1.5,            // For refraction
  ior: 2.42,                 // Diamond refractive index
  envMapIntensity: 2,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

const diamond = new THREE.Mesh(geometry, material);
```

### Example 2: Custom BufferGeometry (Full Facet Control)

```javascript
import * as THREE from 'three';

function createBrilliantCutGeometry() {
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const normals = [];
  const indices = [];

  // Tolkowsky ideal proportions (normalized to diameter = 1)
  const girdleRadius = 0.5;
  const tableRadius = 0.53 * girdleRadius;  // 53% of diameter
  const crownHeight = 0.162;
  const pavilionDepth = 0.431;
  const starLength = 0.5;    // 50% star facet length
  const lowerGirdle = 0.775; // 77.5% lower girdle

  // Generate 16 points around the girdle
  const segments = 16;
  const angleStep = (Math.PI * 2) / segments;

  // Crown vertices
  const crownPoints = [];
  for (let i = 0; i < segments; i++) {
    const angle = i * angleStep;
    crownPoints.push({
      girdle: new THREE.Vector3(
        Math.cos(angle) * girdleRadius,
        0,
        Math.sin(angle) * girdleRadius
      ),
      bezel: new THREE.Vector3(
        Math.cos(angle) * girdleRadius * 0.75,
        crownHeight * 0.6,
        Math.sin(angle) * girdleRadius * 0.75
      ),
      star: new THREE.Vector3(
        Math.cos(angle + angleStep / 2) * tableRadius * 1.2,
        crownHeight * 0.9,
        Math.sin(angle + angleStep / 2) * tableRadius * 1.2
      ),
      table: new THREE.Vector3(
        Math.cos(angle) * tableRadius,
        crownHeight,
        Math.sin(angle) * tableRadius
      ),
    });
  }

  // Pavilion vertices
  const pavilionPoints = [];
  for (let i = 0; i < segments; i++) {
    const angle = i * angleStep;
    pavilionPoints.push({
      girdle: new THREE.Vector3(
        Math.cos(angle) * girdleRadius,
        0,
        Math.sin(angle) * girdleRadius
      ),
      main: new THREE.Vector3(
        Math.cos(angle) * girdleRadius * 0.4,
        -pavilionDepth * 0.8,
        Math.sin(angle) * girdleRadius * 0.4
      ),
      lowerGirdle: new THREE.Vector3(
        Math.cos(angle + angleStep / 2) * girdleRadius * 0.6,
        -pavilionDepth * 0.4,
        Math.sin(angle + angleStep / 2) * girdleRadius * 0.6
      ),
      culet: new THREE.Vector3(0, -pavilionDepth, 0),
    });
  }

  // Build triangles for each facet type...
  // (Full implementation requires ~200+ lines of vertex indexing)

  geometry.setAttribute('position',
    new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal',
    new THREE.Float32BufferAttribute(normals, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}
```

### Example 3: Diamond Material (PBR)

```javascript
// Realistic diamond material using MeshPhysicalMaterial
const diamondMaterial = new THREE.MeshPhysicalMaterial({
  // Base appearance
  color: 0xffffff,
  metalness: 0,

  // Transparency & refraction
  transmission: 1.0,
  thickness: 2.0,
  ior: 2.417,           // Diamond IOR
  specularIntensity: 1,
  specularColor: 0xffffff,

  // Surface
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0,

  // Environment
  envMapIntensity: 3.0,

  // Optional: attenuation for colored diamonds
  attenuationColor: new THREE.Color(0xfff5ee),
  attenuationDistance: 0.5,
});

// For more realistic rendering, use an HDR environment map
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { PMREMGenerator } from 'three';

const pmremGenerator = new PMREMGenerator(renderer);
const envTexture = await new RGBELoader().loadAsync('studio_env.hdr');
const envMap = pmremGenerator.fromEquirectangular(envTexture).texture;
diamondMaterial.envMap = envMap;
```

### Example 4: Diamond Viewer Component (React Three Fiber)

```jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function DiamondModel() {
  const { scene } = useGLTF('/models/diamond.glb');
  return <primitive object={scene} />;
}

export function DiamondViewer() {
  return (
    <Canvas camera={{ position: [0, 0.2, 4.4], fov: 38 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} />
      <Suspense fallback={null}>
        <DiamondModel />
        <Environment preset="studio" />
      </Suspense>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  );
}
```

### Example 5: WebGL Diamond Shader (Simplified)

```glsl
// Vertex Shader
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * mvPosition;
}

// Fragment Shader
uniform float ior;          // 2.42 for diamond
uniform vec3 lightDirection;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

vec3 refract(vec3 I, vec3 N, float eta) {
  float k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I));
  if (k < 0.0) return vec3(0.0);
  return eta * I - (eta * dot(N, I) + sqrt(k)) * N;
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);

  // Fresnel effect
  float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 5.0);

  // Refraction
  vec3 refracted = refract(-viewDir, normal, 1.0 / ior);

  // Dispersion (simplified)
  vec3 color;
  color.r = textureCube(envMap, refract(-viewDir, normal, 1.0 / 2.41)).r;
  color.g = textureCube(envMap, refract(-viewDir, normal, 1.0 / 2.42)).g;
  color.b = textureCube(envMap, refract(-viewDir, normal, 1.0 / 2.43)).b;

  // Combine with fresnel
  vec3 finalColor = mix(color, vec3(1.0), fresnel * 0.5);

  gl_FragColor = vec4(finalColor, 1.0);
}
```

---

## Summary of Key Values for Implementation

### Geometry Parameters
```javascript
const DIAMOND_PARAMS = {
  // Proportions (relative to girdle diameter)
  tablePercent: 0.53,        // 53%
  crownHeightPercent: 0.162, // 16.2%
  pavilionDepthPercent: 0.431, // 43.1%
  girdleRadius: 0.5,         // normalized radius

  // Angles (in degrees)
  crownAngle: 34.5,
  pavilionAngle: 40.75,

  // Facet counts
  crownFacets: 33,
  pavilionFacets: 24,
  totalFacets: 57, // or 58 with culet

  // Optical properties
  refractiveIndex: 2.417,
  dispersion: 0.044,
  criticalAngle: 24.4, // degrees
};
```

---

## References

- GIA Diamond Cut Grading: https://4cs.gia.edu/en-us/diamond-cut
- GIA Diamond Anatomy: https://4cs.gia.edu/en-us/blog/diamond-anatomy-explained
- Wikipedia - Brilliant Cut: https://en.wikipedia.org/wiki/Brilliant_(gemstone_cut)
- Wikipedia - Diamond Cut: https://en.wikipedia.org/wiki/Diamond_cut
- Three.js Docs - BufferGeometry: https://threejs.org/docs/#api/en/core/BufferGeometry
- Three.js Docs - MeshPhysicalMaterial: https://threejs.org/docs/#api/en/materials/MeshPhysicalMaterial
- Mathematics of Diamond Cut: https://www.mathscareers.org.uk/mathematics-of-the-perfect-diamond-cut
- GIA Research Paper (PDF): https://www.gia.edu/dam/jcr:bfcbe501-8614-43ad-9e2c-27d50d638499/Modeling-the-Appearance-of-the-Round-Brilliant-Cut-Diamond-An-Analysis-of-Brilliance.pdf

---

*Research compiled for Gopinath Diamonds project*
*Last updated: 2026-07-08*
