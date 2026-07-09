# Three.js Diamond, Gem & Jewelry 3D Implementations

Research compiled on 2026-07-08

---

## Table of Contents

1. [Diamond Rendering Libraries](#1-diamond-rendering-libraries)
2. [Gem Geometry Generators](#2-gem-geometry-generators)
3. [Refraction & Caustics](#3-refraction--caustics)
4. [React Three Fiber (R3F) Gem Components](#4-react-three-fiber-r3f-gem-components)
5. [Jewelry Showcase Examples](#5-jewelry-showcase-examples)
6. [Commercial/Production Examples](#6-commercialproduction-examples)
7. [Key Code Patterns & Snippets](#7-key-code-patterns--snippets)
8. [Summary & Recommendations](#8-summary--recommendations)

---

## 1. Diamond Rendering Libraries

### N8python/diamonds
- **URL:** https://github.com/N8python/diamonds
- **Stars:** 26
- **License:** MIT
- **Key Features:**
  - Custom GLSL diamond refraction shader
  - Physically-based rendering with chromatic dispersion
  - Environment map reflections
  - Multi-pass rendering pipeline
  - Supports `.glb` diamond models

**Code Snippet - Diamond Material:**
```javascript
// From EffectShader.js - Core diamond refraction shader
// Uses MeshPhysicalMaterial with custom shader modifications
const material = new THREE.MeshPhysicalMaterial({
  transmission: 1,
  ior: 2.42,          // Diamond IOR
  roughness: 0,
  thickness: 0.5,
  envMapIntensity: 1,
  clearcoat: 1,
  clearcoatRoughness: 0,
  side: THREE.DoubleSide
});
```

**Relevance:** Foundational diamond shader implementation. The shader handles internal reflections and chromatic dispersion that creates the "fire" effect in diamonds.

---

### pmndrs/drei - MeshRefractionMaterial
- **URL:** https://github.com/pmndrs/drei
- **Stars:** 9,700+
- **License:** MIT
- **Key Features:**
  - `MeshRefractionMaterial` - Production-ready diamond/gem material
  - `MeshTransmissionMaterial` - Transmissive materials
  - Built-in caustics support
  - Environment mapping helpers
  - Works with React Three Fiber

**Code Snippet - MeshRefractionMaterial:**
```jsx
import { MeshRefractionMaterial, useGLTF, useTexture } from '@react-three/drei';

function Diamond({ envMap }) {
  const { nodes } = useGLTF('/diamond.glb');
  
  return (
    <mesh geometry={nodes.Diamond.geometry}>
      <MeshRefractionMaterial
        envMap={envMap}
        bounces={3}
        aberrationStrength={0.1}
        ior={2.42}
        fresnel={0.5}
        color="#ffffff"
        fastChroma={false}
      />
    </mesh>
  );
}
```

**Live Demo:** https://codesandbox.io/s/zqrreo

**Relevance:** The most production-ready solution for diamond rendering in React Three Fiber. Used in real jewelry e-commerce applications.

---

## 2. Gem Geometry Generators

### rgmarquez/gem-render
- **URL:** https://github.com/rgmarquez/gem-render
- **Stars:** 1
- **License:** MIT
- **Key Features:**
  - **57-facet brilliant-cut geometry** (parametric)
  - Two implementations: Three.js (web) + Vulkan/C
  - Tolkowsky ideal cut proportions
  - Physically accurate optical properties per gemstone
  - Supports diamond, sapphire, emerald, citrine
  - Complete settings UI with real-time controls

**Gemstone Presets:**
| Stone | IOR | Dispersion | Body Color |
|-------|-----|------------|------------|
| Diamond | 2.42 | 0.044 | Colorless |
| Blue Sapphire | 1.77 | 0.018 | Deep blue |
| Green Emerald | 1.57 | 0.014 | Green |
| Amber Citrine | 1.55 | 0.013 | Warm amber |

**Key Architecture:**
```
prototypes/
├── index.html
├── data/
│   └── brilliant-cut.json    # Parametric gem proportions
└── js/
    ├── main.js               # Renderer, scene, camera, lights
    ├── gem-geometry.js       # 57-facet geometry builder
    ├── gem-material.js       # MeshPhysicalMaterial factory
    └── settings-ui.js        # Data-driven slider panel
```

**Geometry Generation Pattern:**
```javascript
// From gem-geometry.js - Parametric brilliant cut
// Crown facets slope outward from table to girdle
const getCrownRadiusAtHeight = (height) => {
  return Math.max(
    tableRadius,
    girdleRadius - height * Math.tan(crownAngleRad)
  );
};

// Pavilion includes bulge for realistic shape
const getPavilionRadiusAtDepth = (depthRatio) => {
  const depth = depthRatio * pavilionDepth;
  const baseRadiusReduction = depth * Math.tan(pavilionAngleRad);
  const baseRadius = girdleRadius - baseRadiusReduction;
  const bulgeAmount = Math.sin(Math.PI * depthRatio * 1.2) 
    * pavilionBulge * girdleRadius * (1 - depthRatio);
  return Math.max(0, baseRadius + bulgeAmount);
};
```

**Relevance:** The most comprehensive gem geometry implementation. Perfect reference for creating parametric brilliant-cut diamonds.

---

### Leveq/gem-debugger
- **URL:** https://github.com/Leveq/gem-debugger
- **Stars:** 0
- **License:** MIT
- **Tech Stack:** Next.js 16.1 + React Three Fiber 9.5 + TypeScript
- **Key Features:**
  - Procedurally-generated 57-facet brilliant-cut geometry
  - Real-time parameter controls (Leva GUI)
  - Physically-based refraction with `MeshRefractionMaterial`
  - Chromatic aberration simulation
  - Multi-bounce raytracing (up to 6 bounces)
  - Mobile responsive touch controls

**Live Demo:** https://leveq.dev/diamond-debug

**Code Snippet - Geometry Hook:**
```typescript
// useBrilliantCut.ts - Procedural geometry generation
const useBrilliantCut = (params: GemParams) => {
  return useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const normals: number[] = [];
    
    // Generate 57 facets using rotational symmetry
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      // Crown facets...
      // Pavilion facets...
    }
    
    // Flat shading: calculate per-face normals
    for (let i = 0; i < vertices.length; i += 9) {
      const v1 = new THREE.Vector3(...vertices.slice(i, i + 3));
      const v2 = new THREE.Vector3(...vertices.slice(i + 3, i + 6));
      const v3 = new THREE.Vector3(...vertices.slice(i + 6, i + 9));
      const normal = new THREE.Vector3()
        .crossVectors(
          new THREE.Vector3().subVectors(v2, v1),
          new THREE.Vector3().subVectors(v3, v1)
        )
        .normalize();
      normals.push(normal.x, normal.y, normal.z, 
                    normal.x, normal.y, normal.z,
                    normal.x, normal.y, normal.z);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    return geometry;
  }, [params]);
};
```

**Relevance:** Excellent TypeScript implementation with Next.js. Great reference for modern React-based jewelry showcases.

---

## 3. Refraction & Caustics

### martinRenou/threejs-caustics
- **URL:** https://github.com/martinRenou/threejs-caustics
- **Stars:** 361
- **License:** BSD-3-Clause
- **Key Features:**
  - Real-time caustics computation
  - Water surface refraction
  - GLSL shader implementation
  - Interactive demo with shark/rock/plant scenes

**Live Demo:** https://martinrenou.github.io/threejs-caustics

**Implementation Details:** https://medium.com/@martinRenou/real-time-rendering-of-water-caustics-59cda1d74aa

**Relevance:** While focused on water caustics, the techniques are directly applicable to diamond light patterns. The shader math for refraction and light convergence is similar.

---

### pmndrs/drei - Caustics Component
- **URL:** https://github.com/pmndrs/drei
- **Component:** `<Caustics>`
- **Key Features:**
  - Ray-marched caustics for transmissive surfaces
  - Works with any geometry
  - Configurable intensity and scale
  - Production-ready

**Code Snippet - Caustics:**
```jsx
import { Caustics, MeshTransmissionMaterial } from '@react-three/drei';

function DiamondWithCaustics() {
  return (
    <>
      <Caustics
        frames={1}
        ior={1.5}
        light={[0, 5, -5]}
        intensity={0.1}
        causticsScale={10}
      >
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshTransmissionMaterial
            ior={2.42}
            thickness={0.5}
            roughness={0}
          />
        </mesh>
      </Caustics>
    </>
  );
}
```

**Live Demo:** https://codesandbox.io/s/caustics-szj6p7

**Relevance:** Essential for creating realistic light patterns that diamonds cast on surfaces.

---

### Maxime Heckel - Caustics Blog Post
- **URL:** https://blog.maximeheckel.com/posts/caustics-in-webgl
- **Key Features:**
  - Step-by-step caustics implementation guide
  - React Three Fiber focused
  - Render targets + normals recomputation
  - Physically-based approach

**Key Techniques:**
1. Render scene from light's perspective
2. Compute screen-space distortion map
3. Apply distortion to background texture
4. Add chromatic aberration for realism

**Relevance:** Best educational resource for understanding caustics implementation in Three.js/R3F.

---

## 4. React Three Fiber (R3F) Gem Components

### pmndrs/drei - Essential Components for Jewelry

**MeshRefractionMaterial:**
```jsx
// For diamond/gem rendering
<MeshRefractionMaterial
  envMap={envMap}
  bounces={3}              // Internal reflection bounces
  aberrationStrength={0.1} // Chromatic dispersion
  ior={2.42}               // Index of refraction
  fresnel={0.5}            // Edge brightness
  color="#ffffff"
  fastChroma={false}       // High quality dispersion
/>
```

**MeshTransmissionMaterial:**
```jsx
// For transparent/translucent gems
<MeshTransmissionMaterial
  transmission={1}
  thickness={0.5}
  roughness={0}
  ior={1.5}
  chromaticAberration={0.06}
  anisotropy={0.1}
  distortion={0}
  temporalDistortion={0}
/>
```

**Environment:**
```jsx
// Studio lighting for jewelry
<Environment preset="studio" />
// Or custom HDRI
<Environment files="/studio_small_08_1k.hdr" />
```

**Sparkles:**
```jsx
// Diamond sparkle effect
<Sparkles
  count={100}
  scale={2}
  size={2}
  speed={0.4}
  color="#E7CE96"
/>
```

---

## 5. Jewelry Showcase Examples

### Zales Jewelers 3D Diamond
- **URL:** https://www.zales.com/celebration-diamond
- **Developer:** The Virtual Wild
- **Key Features:**
  - Production e-commerce diamond viewer
  - Real-time refraction and shaders
  - Deployed across 300+ stores
  - iPad compatible for in-store use
  - Handles 2-5 million monthly visitors

**Forum Discussion:** https://discourse.threejs.org/t/zales-jewelers-3d-diamond/43231

**Relevance:** Gold standard for production diamond showcases. Proves Three.js can handle enterprise-scale jewelry rendering.

---

### Gems Rendering Service (yesbird)
- **URL:** https://gemview.yesbird.online
- **Developer:** yesbird
- **Key Features:**
  - Gem designs from Facetdiagrams.org database
  - Shader based on N8python's diamonds code
  - Multiple gem types supported
  - Pure vanilla JavaScript (no React)

**Forum Thread:** https://discourse.threejs.org/t/gems-rendering-service/76484

**Relevance:** Shows how to integrate real gem cutting data with Three.js rendering.

---

## 6. Commercial/Production Examples

### webgi-jewelry (Three.js Showcase)
- **URL:** https://webgi-jewelry.vercel.app
- **Featured on:** threejs.org homepage
- **Key Features:**
  - Professional jewelry visualization
  - Real-time material editing
  - High-quality rendering

---

### iJewel Design
- **Forum Thread:** https://discourse.threejs.org/t/jewelry-designer-portfolio-create-a-captivating-portfolio-using-ijewel-design/65935
- **Key Features:**
  - Jewelry designer portfolio platform
  - 3D model visualization
  - Textures, geometry, animation
  - WebGL renderer optimization

---

## 7. Key Code Patterns & Snippets

### Diamond Material Configuration
```javascript
// Physically accurate diamond material
const diamondMaterial = new THREE.MeshPhysicalMaterial({
  // Transmission
  transmission: 1.0,           // Fully transparent body
  thickness: 0.5,              // Internal optical path
  
  // Refraction
  ior: 2.42,                   // Diamond index of refraction
  
  // Surface
  roughness: 0.0,              // Perfectly smooth
  metalness: 0.0,              // Dielectric (non-metal)
  clearcoat: 1.0,              // Polished surface sheen
  clearcoatRoughness: 0.0,     // Sharp surface reflections
  
  // Color
  attenuationColor: '#ffffff', // Colorless
  attenuationDistance: 0.5,    // Color saturation rate
  
  // Rendering
  side: THREE.DoubleSide,      // Required for transmission
  envMapIntensity: 1.0,        // Reflection strength
});
```

### Flat Shading for Facets
```javascript
// Essential for diamond realism - per-face normals
function createFlatShadedGeometry(geometry) {
  const positions = geometry.getAttribute('position');
  const normals = new THREE.Float32Array(positions.count * 3);
  
  const vA = new THREE.Vector3();
  const vB = new THREE.Vector3();
  const vC = new THREE.Vector3();
  const normal = new THREE.Vector3();
  
  for (let i = 0; i < positions.count; i += 3) {
    vA.fromBufferAttribute(positions, i);
    vB.fromBufferAttribute(positions, i + 1);
    vC.fromBufferAttribute(positions, i + 2);
    
    normal.crossVectors(
      new THREE.Vector3().subVectors(vB, vA),
      new THREE.Vector3().subVectors(vC, vA)
    ).normalize();
    
    normals[i] = normal.x;
    normals[i + 1] = normal.y;
    normals[i + 2] = normal.z;
    normals[i + 3] = normal.x;
    normals[i + 4] = normal.y;
    normals[i + 5] = normal.z;
    normals[i + 6] = normal.x;
    normals[i + 7] = normal.y;
    normals[i + 8] = normal.z;
  }
  
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  return geometry;
}
```

### Environment Lighting for Jewelry
```javascript
// Studio lighting setup for diamond showcase
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

function createStudioLighting(renderer) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const envTexture = pmremGenerator.fromScene(
    new RoomEnvironment()
  ).texture;
  
  return envTexture;
}

// Scene setup
const scene = new THREE.Scene();
scene.environment = createStudioLighting(renderer);

// Add point lights for "fire" spots
const fireLight1 = new THREE.PointLight(0xffffff, 100, 10);
fireLight1.position.set(2, 3, 2);

const fireLight2 = new THREE.PointLight(0xffffff, 100, 10);
fireLight2.position.set(-2, 3, -2);
```

### Post-Processing Bloom for Sparkle
```javascript
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';

// Create bloom for diamond sparkle
const composer = new EffectComposer(renderer);

const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.3,    // strength - subtle
  0.4,    // radius
  0.85    // threshold - only bright highlights bloom
);
composer.addPass(bloomPass);
```

---

## 8. Summary & Recommendations

### For Your Diamond Jewelry Showcase

**Recommended Stack:**
- **Framework:** Next.js 15 (App Router) - matches your AGENTS.md
- **3D:** React Three Fiber + @react-three/drei
- **Geometry:** Custom 57-facet brilliant-cut generator (reference rgmarquez/gem-render)
- **Material:** `MeshRefractionMaterial` from drei (reference Leveq/gem-debugger)
- **Lighting:** Environment preset="studio" + point lights for fire
- **Post-processing:** UnrealBloomPass for sparkle

**Key Implementation Priorities:**

1. **Geometry First** - Build parametric 57-facet brilliant-cut generator
   - Reference: `rgmarquez/gem-render/js/gem-geometry.js`
   - Reference: `Leveq/gem-debugger/src/components/gem/useBrilliantCut.ts`

2. **Material System** - Use MeshRefractionMaterial with diamond presets
   - IOR: 2.42
   - Bounces: 3-6
   - Aberration: 0.05-0.15

3. **Lighting** - Studio environment + point lights
   - Use `<Environment preset="studio" />`
   - Add 4 asymmetric point lights for fire spots

4. **Post-Processing** - Selective bloom
   - Threshold: 0.85 (only brightest highlights)
   - Strength: 0.3 (subtle)

5. **Interaction** - OrbitControls + auto-rotation
   - `<OrbitControls autoRotate enableZoom={false} />`

**Resources to Study:**
- https://github.com/rgmarquez/gem-render (geometry patterns)
- https://github.com/Leveq/gem-debugger (R3F implementation)
- https://github.com/pmndrs/drei (MeshRefractionMaterial docs)
- https://blog.maximeheckel.com/posts/caustics-in-webgl (advanced effects)

---

*Research compiled for Gopinath Diamonds showcase project*
