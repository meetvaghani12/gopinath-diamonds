# Diamond Rendering: Ring Configurator vs Showcase Design

## Overview

| Aspect | Showcase (current) | Ring Configurator (origem) |
|---|---|---|
| **File** | `src/components/gem/Gem.tsx` (259 lines) | `Centerdiamond.tsx` (75 lines) + `RingModel.tsx` (~1700 lines) |
| **Approach** | Procedural geometry + `meshPhysicalMaterial` | GLTF model + custom `MeshRefractionMaterial` / custom shader |
| **Maturity** | Standalone prototype | Production-grade, battle-tested across mobile + desktop |

---

## 1. Geometry Creation

### Showcase (Current)
- **Procedural round brilliant cut** built from scratch in `createRoundBrilliant()`.
- Hand-coded vertex positions for crown (table, star, bezel, upper girdle) and pavilion (girdle, main, lower girdle, culet).
- 16 segments around the circumference, resulting in ~16 tris for table, ~16 quads for bezel, etc.
- **Exaggerated proportions**: pavilion depth `0.75 × girdleRadius` (vs real ~0.43), crown height `0.25` (vs real ~0.16). This makes the diamond look taller/deeper for dramatic 3D showcase effect.
- Geometry is `useMemo`-d once and reused.
- Uses `computeVertexNormals()` for smooth lighting.

### Ring Configurator
- **No procedural geometry** — diamonds come from GLTF/GLB model files (`crownPaths.diamondPath`).
- Each diamond shape (round, oval, pear, radiant, cushion, etc.) is a pre-modeled GLB with authentic proportions and facet patterns.
- For multi-facet GLBs (e.g. radiant cut has ~100+ child meshes), geometries are **merged via `mergeGeometries()`** before normal capture.
- Geometry is prepared with `computeVertexNormals()`, `computeBoundingBox()`, `computeBoundingSphere()`.

### Verdict
The ring configurator's approach is far more realistic — real diamond proportions come from the GLB models. The showcase's procedural geometry is acceptable for a standalone display piece but lacks the precision of a proper model.

---

## 2. Material & Shader Quality

### Showcase (Current)
Uses Three.js built-in `meshPhysicalMaterial`:

```tsx
<meshPhysicalMaterial
  color={0xffffff}
  metalness={0}
  roughness={0}
  transmission={1}
  thickness={3}
  ior={2.42}
  envMapIntensity={4}
  clearcoat={1}
  clearcoatRoughness={0}
  specularIntensity={1}
  specularColor={0xffffff}
  transparent
  side={THREE.DoubleSide}
/>
```

- Relies entirely on Three.js PBR pipeline for refraction simulation.
- `transmission=1` + `ior=2.42` gives a glass-like translucency but **not true diamond refraction**.
- `envMapIntensity=4` is cranked high to fake fire/sparkle.
- No chromatic dispersion (no rainbow fire).
- No internal reflection bouncing.

### Ring Configurator
Uses a **custom GLSL shader** (~190 lines of fragment shader) implementing:

1. **Normal Capture Cubemap** (`DiamondNormalCapture.ts`): A CubeCamera placed inside the diamond renders the inner surface normals into a cubemap texture. This is the key innovation — it encodes facet surface normals (RGB) + distance (A) per texel.

2. **Multi-bounce refraction** (`DIAMOND_FRAGMENT_SHADER`): The fragment shader traces rays through the diamond with configurable bounces (3-5). Each bounce:
   - Reads the surface normal from the cubemap
   - Computes Fresnel reflection/refraction
   - Applies wavelength-dependent dispersion (chromatic aberration via `rIndexDelta`)
   - Applies absorption along the path length

3. **Key shader uniforms**:
   - `refractiveIndex: 2.42` (real diamond IOR)
   - `rIndexDelta: 0.005` (dispersion → rainbow fire)
   - `rayBounces: 3-5` (internal reflection depth)
   - `squashFactor: 0.98` (slight oblate spheroid for realism)
   - `boostFactors: (1.45, 1.45, 1.45)` (brightness multiplier)
   - `absorptionFactor: 1` (light absorption through stone)
   - `gammaFactor: 1.5` (tone correction)

4. **`MeshRefractionMaterial` from drei** is also used as a simpler alternative in `Centerdiamond.tsx` for the GLTF-based diamonds.

### Verdict
The ring configurator's shader is **vastly superior**. It produces real chromatic dispersion, multi-bounce internal refraction, and physically-based absorption — none of which `meshPhysicalMaterial` can achieve. The showcase material is essentially a "glass sphere" approximation.

---

## 3. Environment Map & Reflections

### Showcase (Current)
- No explicit environment map setup. Relies on whatever `Environment` preset is in the Canvas (`<Environment preset="studio" />`).
- `envMapIntensity=4` compensates for lack of proper diamond-specific environment handling.

### Ring Configurator
- **Two separate environment maps**: one for metal (ring body), one for gems (diamond).
- `useDiamondEnvMap` hook: Generates a PMREM (pre-filtered mipmap radiance) from the scene environment for proper specular reflections.
- Environment is loaded as HDR files: `/environment/ringbodyenvironment.hdr` for metal, separate gem env for diamonds.
- **`diamondOrientedEnvMap`** control: When `0`, the environment stays static relative to the diamond (stones stay bright regardless of ring rotation). When `1`, it rotates with the diamond.
- `envMapRotation` uniform allows fine-tuning reflection orientation.

### Verdict
Ring configurator has proper dual-environment mapping with HDR support. The showcase uses a generic preset with no diamond-specific tuning.

---

## 4. Performance Considerations

### Showcase (Current)
- **Geometry**: ~256 vertices (16 segments × ~16 vertices). Very lightweight.
- **Material**: `meshPhysicalMaterial` with `transmission=1` is one of the **most expensive PBR features** — Three.js renders a separate transmission pass behind the object.
- **No mobile optimizations**: Same shader everywhere.
- **No caching**: Material and geometry recreated on each mount.
- Uses `useFrame` for gentle bobbing animation (cheap).

### Ring Configurator
Extensive performance engineering:

1. **Material caching**: Module-level `Map` caches (`metalMaterialCache`, `diamondMaterialCache`) — materials are created once and reused across configuration switches. No shader recompilation.

2. **Normal capture caching**: `normalCaptureCache` keyed by `geometryUUID@resolution`. Switching back to a previously used diamond is instant.

3. **Mobile adaptations**:
   - `CubeCamera frames=1` on mobile (static cubemap), `Infinity` on desktop (dynamic).
   - Resolution: 256px on mobile, 512px on desktop.
   - `fastChroma=true` on mobile for cheaper chromatic aberration.
   - `bounces=2` on mobile vs `3` on desktop.
   - Shadows disabled on mobile.
   - Large carat stones (>2ct): capped at 4 bounces on mobile.
   - `UnsignedByteType` cubemaps on mobile (avoids `EXT_color_buffer_half_float` issues).
   - `renderer.getContext().finish()` on mobile (guarantees cubemap write completion).

4. **Geometry merging**: Multi-primitive GLBs merged into single mesh → fewer draw calls.

5. **Debounced model loading**: 150ms debounce prevents rapid config switches from spawning simultaneous GLTF loads.

6. **GPU state management**: Full save/restore of renderer state around CubeCamera captures, `renderer.resetState()` to prevent EffectComposer artifacts.

### Verdict
The ring configurator is production-hardened. The showcase has none of these optimizations.

---

## 5. What to Borrow from the Ring Configurator

### Priority 1: Custom Diamond Shader
The single biggest quality improvement would be adopting the custom GLSL diamond shader. Key components to port:
- `DIAMOND_VERTEX_SHADER` + `DIAMOND_FRAGMENT_SHADER` (the ~190 line fragment shader)
- `CustomDiamondMaterial` class extending `ShaderMaterial`
- `DiamondNormalCapture.ts` (the cubemap normal capture system)
- Key uniforms: `refractiveIndex`, `rIndexDelta` (dispersion), `rayBounces`, `squashFactor`, `boostFactors`, `absorptionFactor`, `gammaFactor`

### Priority 2: Environment Map System
- Implement `useDiamondEnvMap` hook (PMREM generation from scene environment)
- Consider separate HDR environments for gem vs ambient lighting
- Add `envMapRotation` for tuning reflections

### Priority 3: Mobile Performance
- Downsample cubemap resolution on mobile (256px)
- Reduce ray bounces on mobile (2-3 vs 5)
- Use `fastChroma` mode
- Detect mobile GPU and fall back to `UnsignedByteType` for cubemaps

### Priority 4: Material Caching
- Implement module-level `Map` caches for materials
- Cache normal capture results by geometry UUID
- This prevents shader recompilation lag on configuration switches

### Priority 5: Geometry
- Consider loading a GLTF round brilliant model instead of procedural geometry
- Or at minimum, match real diamond proportions (the current exaggerated height is unrealistic)
- Add support for multiple cuts (oval, pear, emerald, etc.) via GLB models

### Not Recommended to Borrow
- **Ring-specific code** (engraving, band paths, crown paths, metal configs) — not applicable to standalone showcase
- **GLB loading pipeline** (`useDisposableGLTF`, `SafeModel`, `ModelLoader`) — overkill for a single diamond; the procedural geometry is fine for a showcase piece
- **Color transition lerp system** — specific to ring metal switching UX

---

## Summary

| Dimension | Showcase | Ring Configurator | Gap |
|---|---|---|---|
| Geometry | Procedural, exaggerated | GLTF models, real proportions | Medium — procedural is fine for showcase |
| Material | `meshPhysicalMaterial` (PBR approx) | Custom GLSL shader (ray-traced) | **Critical** — biggest quality gap |
| Fire/Dispersion | None | Chromatic aberration via `rIndexDelta` | **Critical** |
| Internal Reflections | None | Multi-bounce ray tracing | **Critical** |
| Environment | Generic preset | Dual HDR + PMREM | High |
| Mobile Perf | None | Extensive adaptations | High |
| Caching | None | Material + cubemap caching | Medium |
| Maturity | Prototype | Production-grade | High |

**Bottom line**: The ring configurator's diamond shader is a production-quality physically-based renderer. The showcase's `meshPhysicalMaterial` approach produces a decent "glass sphere" but lacks the defining visual characteristics of a diamond (fire, scintillation, internal reflections). Adopting the custom shader system (Priority 1) would be the single highest-impact improvement.
