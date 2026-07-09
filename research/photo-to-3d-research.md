# Photo to 3D Model — Diamond Jewelry Research

> Research compiled July 2026 for the Gopinath Diamonds showcase project.

---

## 1. Core Techniques

### Photogrammetry (Multi-View)
- Takes 20–200+ overlapping photos from different angles
- Software triangulates matching feature points to reconstruct 3D geometry
- Produces dense point clouds → meshes → textured 3D models
- Accuracy: down to 0.05mm for jewelry-scale objects
- **Best for:** Production-quality models when you can physically photograph the piece

### Neural Single-Image Lift (AI)
- Infers depth, silhouette, and geometry from a single photo
- Uses diffusion models or NeRF-based architectures
- Generates mesh + PBR materials in under 90 seconds
- **Best for:** Quick prototyping, e-commerce previews, when multi-angle photos unavailable

### Gaussian Splatting
- Stores radiance as clouds of oriented Gaussian blobs
- Produces photorealistic renderings from video or photo sets
- Heavier file sizes, harder to edit like CAD
- **Best for:** Marketing turntables, visual showcases, AR experiences

### Depth Map Based
- AI estimates a depth map from a single 2D image
- Displaces geometry based on depth values
- Simple but limited in occluded areas
- **Best for:** Simple objects, quick web visualizations

---

## 2. Tools & Services

### Cloud AI Services (Single Photo → 3D)

| Service | Input | Speed | Export Formats | Pricing | Best For |
|---------|-------|-------|----------------|---------|----------|
| **Meshy** | 1 photo | ~60s | FBX, OBJ, GLB, USDZ, STL, BLEND | Free tier + $20/mo | Game dev, general use |
| **Tripo3D** | 1 photo | ~60s | GLB, OBJ, USDZ | Free tier + $15.90/mo | Fast iteration |
| **Neural4D** | 1 photo | <90s | OBJ, FBX, GLB, USDZ, STL | Free tier | 3D printing, e-commerce |
| **3DMyPhoto** | 1 photo | Minutes | GLB, STL, OBJ, PLY, OpenSCAD | Free tier | 3D printing, parametric |
| **Sirv AI Studio** | 1 photo | Seconds | GLB, USDZ, OBJ | 80 credits/image | Jewelry specifically |
| **Hunyuan3D** (Tencent) | 1 photo | ~30s | GLB, OBJ | Open source | High quality, production |
| **Microsoft TRELLIS** | 1 photo | ~3s | GLB | Open source (4B params) | Research, local deploy |
| **Hyper3D Rodin** | Text/photo | Minutes | GLB, OBJ | Free tier | Quick generation |

### Mobile Photogrammetry Apps

| App | Platform | Features | Pricing |
|-----|----------|----------|---------|
| **Polycam** | iOS/Android | Photogrammetry + LiDAR, floor plans, 15+ export formats | Free + $150/yr Pro |
| **Luma AI** | iOS/Android | Gaussian splatting from video, best visual quality | Free tier available |
| **KIRI Engine** | iOS/Android | Photogrammetry, 3D scanning | Free tier available |

### Desktop Software

| Software | Type | Cost |
|----------|------|------|
| **Blender** | Full 3D suite with photogrammetry add-ons | Free/Open Source |
| **Meshroom** | Node-based photogrammetry | Free/Open Source |
| **3DF Zephyr Free** | Professional reconstruction | Free (limited) |
| **Agisoft Metashape** | Professional photogrammetry | $179+ |
| **RealityCapture** | Fast photogrammetry | Paid license |

---

## 3. Jewelry Industry Techniques

### How Jewelers Create 3D Models

1. **CAD Design** (Most Common)
   - Designed from scratch in Rhino/Matrix, JewelCAD, or similar
   - Parametric modeling with exact stone settings and prong geometry
   - Exports STL/3DM for 3D printing → wax casting

2. **3D Scanning of Existing Pieces**
   - Structured-light scanning at 10–20 micron resolution
   - Services like Tech-Designs NY, CadCamNYC offer jewelry 3D scanning
   - STL/OBJ output for modification or replication

3. **Photogrammetry for Catalog Digitization**
   - 80–200 photos per piece, 20–60 minutes capture time
   - Creates virtual catalogs for e-commerce and insurance
   - Enables virtual try-on with AR integration

4. **Hybrid Approach**
   - Use AI to generate base shape from single photo
   - Refine in CAD software (Rhino, Blender)
   - Add precise stone settings, prong geometry, metal details

### Jewelry-Specific Considerations

- **Diamond facets** require high-polygon meshes to capture light behavior
- **Reflective metals** (gold, platinum) are challenging for photogrammetry — use polarizing filters
- **Small scale** means even tiny errors in scanning are visible
- **Production-ready** models need watertight meshes, exact tolerances for stone seats

---

## 4. GitHub Repositories

### AI Image-to-3D (Research-Grade)

| Repository | Stars | Description | License |
|------------|-------|-------------|---------|
| [Tencent-Hunyuan/Hunyuan3D-2](https://github.com/Tencent-Hunyuan/Hunyuan3D-2) | 14k | High-res 3D asset generation with large-scale diffusion | Open |
| [microsoft/TRELLIS](https://github.com/microsoft/TRELLIS) | 12.9k | Structured 3D latents for scalable 3D generation (CVPR'25) | Open |
| [ashawkey/stable-dreamfusion](https://github.com/ashawkey/stable-dreamfusion) | 8.8k | Text/Image-to-3D with NeRF + Diffusion | Open |
| [dreamgaussian/dreamgaussian](https://github.com/dreamgaussian/dreamgaussian) | 4.3k | Generative Gaussian Splatting (ICLR 2024 Oral) | Open |
| [AiuniAI/Unique3D](https://github.com/AiuniAI/Unique3D) | 3.6k | High-quality 3D mesh from single image (NeurIPS 2024) | Open |
| [facebookresearch/map-anything](https://github.com/facebookresearch/map-anything) | 3.5k | Universal metric 3D reconstruction | Open |
| [cvlab-columbia/zero123](https://github.com/cvlab-columbia/zero123) | 3.1k | Zero-shot one image to 3D (ICCV 2023) | Open |
| [xxlong0/Wonder3D](https://github.com/xxlong0/Wonder3D) | ~3k | Single image to 3D via cross-domain diffusion (CVPR 2024) | Open |
| [SUBHADIPMAITI-DEV/2D-to-3D-Image-Converter](https://github.com/SUBHADIPMAITI-DEV/2D-to-3D-Image-Converter) | 47 | Next.js + Python app: depth estimation → 3D mesh (Three.js + MiDaS) | MIT |

### Practical / Web-Ready

| Repository | Description |
|------------|-------------|
| [junebee66/DepthMap-To-3DModel](https://github.com/junebee66/DepthMap-To-3DModel) | Depth map + image → 3D model in browser using Three.js |
| [Fatcatcreate/2D-to-3D-Converter](https://github.com/Fatcatcreate/2D-to-3D-Converter) | Visual hull technique from 6 orthographic views → 3D mesh |

### GitHub Topic Pages
- [github.com/topics/image-to-3d](https://github.com/topics/image-to-3d) — 164+ public repos
- [github.com/topics/image-to-3d-object-conversion](https://github.com/topics/image-to-3d-object-conversion) — Additional repos

---

## 5. Three.js Libraries for 3D Viewing

### Core Three.js Loaders

| Loader | Format | Import |
|--------|--------|--------|
| `GLTFLoader` | .glb, .gltf | `three/addons/loaders/GLTFLoader.js` |
| `OBJLoader` | .obj + .mtl | `three/addons/loaders/OBJLoader.js` |
| `FBXLoader` | .fbx | `three/addons/loaders/FBXLoader.js` |
| `STLLoader` | .stl | `three/addons/loaders/STLLoader.js` |

### Recommended Libraries (already in our stack)

| Library | Purpose |
|---------|---------|
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | Helpers: OrbitControls, Environment, ContactShadows, etc. |
| `@react-three/postprocessing` | Bloom, SSAO, chromatic aberration effects |
| `three` | Core library with all loaders above |

### Viewer Patterns for the Showcase

```tsx
// Load GLB model (from AI generation or photogrammetry)
import { useGLTF } from '@react-three/drei';

function DiamondModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

// In Canvas:
<Canvas camera={{ position: [0, 0.2, 4.4], fov: 38 }}>
  <DiamondModel url="/models/diamond.glb" />
  <OrbitControls autoRotate enableZoom={false} />
  <Environment preset="studio" />
</Canvas>
```

### Compression for Web
- **Draco compression** — reduces GLB file size by 10–20x
- **KTX2 textures** — GPU-compressed textures for faster loading
- Use `gltf-pipeline` or `gltf-transform` CLI to optimize

---

## 6. Recommended Workflow for This Project

### Option A: AI-Generated 3D (Fastest)
1. Take a clear, well-lit photo of the diamond/jewelry piece
2. Upload to **Meshy** or **Hunyuan3D** (open source)
3. Export as GLB with PBR materials
4. Optimize with `gltf-transform` (Draco + KTX2)
5. Load in React Three Fiber viewer

### Option B: Hand-Crafted 3D (Highest Quality)
1. Model in Rhino/Matrix or Blender using reference photos
2. Export as GLB/OBJ
3. Optimize and load in Three.js viewer
4. **This is what most professional jewelers do** — AI won't match CAD precision for stone settings yet

### Option C: Hybrid Approach (Recommended)
1. Use AI to generate a base mesh from photos
2. Refine geometry in Blender (add facet details, fix topology)
3. Bake PBR textures
4. Export optimized GLB for web

---

## 7. Limitations & Best Practices

### Limitations
- **Single-photo AI** hallucinates occluded sides — accuracy degrades for complex geometry
- **Diamond facets** are extremely hard to reconstruct from photos due to refraction and internal reflections
- **Reflective surfaces** (polished gold, platinum) confuse photogrammetry algorithms
- **Very small objects** (<5mm) need specialized macro photography setups
- **Open source models** require NVIDIA GPU with 24GB+ VRAM for local inference
- **Web file sizes** — raw 3D scans can be 50–200MB; must optimize for web

### Best Practices for Photo Input
1. Use **diffuse lighting** (softbox or ring light) to minimize harsh reflections
2. Shoot against a **neutral, non-reflective background** (matte gray/black)
3. Capture **multiple angles** if possible (minimum 20 for photogrammetry)
4. Ensure **sharp focus** — blur kills feature matching
5. Use **macro lens** for jewelry-scale objects
6. **Polarizing filter** helps with metallic reflections
7. Minimum **12MP resolution** for good detail capture

### For Web Delivery
- Target **<5MB** GLB files for fast loading
- Use **Draco compression** (gltf-transform)
- **KTX2 textures** for GPU-friendly format
- Implement **progressive loading** (low-poly first, then high-res)
- Consider **LOD (Level of Detail)** for different devices
- **GLB** is the preferred format — single binary file, web-native

---

## 8. Quick Start: Converting Our Diamond Photos

Given our existing Next.js + Three.js stack, the fastest path:

```bash
# 1. Install gltf-transform CLI
npm install -g @gltf-transform/cli

# 2. Generate 3D from photo (using Meshy API or Hunyuan3D locally)
# Export as .glb

# 3. Optimize for web
gltf-transform optimize input.glb output.glb --compress draco --texture-compress ktx2

# 4. Place in public/models/ directory
# 5. Load in component using @react-three/drei's useGLTF()
```

---

*Last updated: July 2026*
