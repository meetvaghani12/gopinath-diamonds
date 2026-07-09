import * as THREE from "three";

/**
 * Captures diamond geometry normals into a cubemap texture.
 * Replicates  normalsCaptureMap approach:
 * - CubeCamera sits at geometry center, renders BACK faces (inner surface)
 * - Stores surface normal (RGB, 0-1 encoded) and distance/radius (A)
 * - Operates in LOCAL/OBJECT space
 */

// ─── Normal Capture Cache ───────────────────────────────────────────
// Keyed by geometry UUID + resolution. Same diamond geometry loaded from
// the same GLB always has the same UUID, so switching back to a previously
// rendered configuration returns the cached cubemap instantly instead of
// re-rendering 6 cube faces on the GPU (~300-500ms saved per diamond).
export type NormalCaptureResult = {
  texture: THREE.CubeTexture;
  radius: number;
  centerOffset: THREE.Vector3;
  renderTarget: THREE.WebGLCubeRenderTarget;
};

const normalCaptureCache = new Map<string, NormalCaptureResult>();

function getCacheKey(geometryUuid: string, resolution: number): string {
  return `${geometryUuid}@${resolution}`;
}

/** Check if a cached capture exists for this geometry + resolution */
export function getCachedNormalCapture(
  geometryUuid: string,
  resolution: number,
): NormalCaptureResult | undefined {
  return normalCaptureCache.get(getCacheKey(geometryUuid, resolution));
}

/** Remove a specific entry from the cache and dispose its GPU resources */
export function evictNormalCapture(
  geometryUuid: string,
  resolution: number,
): void {
  const key = getCacheKey(geometryUuid, resolution);
  const cached = normalCaptureCache.get(key);
  if (cached) {
    cached.texture.dispose();
    cached.renderTarget.dispose();
    normalCaptureCache.delete(key);
  }
}

/** Clear the entire normal capture cache (e.g. on WebGL context loss) */
export function clearNormalCaptureCache(): void {
  normalCaptureCache.forEach((entry) => {
    entry.texture.dispose();
    entry.renderTarget.dispose();
  });
  normalCaptureCache.clear();
}

// Render back faces — the CubeCamera is INSIDE the diamond looking out.
// We flip the normal so it points inward (toward camera), matching what
// the diamond shader expects when it does getSurfaceNormal (which negates).
const CAPTURE_VERTEX_SHADER = `
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vPosition = position;
  // Flip normal for back-face rendering: the diamond shader's
  // getSurfaceNormal() does -normalize(decoded), so we store
  // the outward normal and let the shader negate it.
  vNormal = normalize(normal);
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`;

const CAPTURE_FRAGMENT_SHADER = `
varying vec3 vPosition;
varying vec3 vNormal;
uniform vec3 centerOffset;
uniform float radius;

void main() {
  // Encode normal to 0-1 range (diamond shader decodes: normal*2-1, then negates)
  vec3 encodedNormal = vNormal * 0.5 + 0.5;
  // Distance from center normalized by radius
  float dist = length(vPosition - centerOffset) / radius;
  gl_FragColor = vec4(encodedNormal, dist);
}
`;

/**
 * Renders the normal capture cubemap using the provided WebGL renderer.
 * CubeCamera is placed at geometry center and captures back faces (inner surface).
 *
 * IMPORTANT for EffectComposer compatibility:
 * - We save/restore ALL renderer state that CubeCamera.update() modifies
 * - We call renderer.resetState() to clear Three.js's internal WebGL state cache
 *   so it doesn't skip re-binding programs/textures/VAOs on the next real render
 * - We do NOT call setRenderTarget(null) or bindFramebuffer(null) which would
 *   unbind the EffectComposer's FBOs
 */
export function renderNormalCapture(
  renderer: THREE.WebGLRenderer,
  geometry: THREE.BufferGeometry,
  resolution: number = 512,
): NormalCaptureResult {
  // ── Cache check: return existing cubemap if same geometry was captured before ──
  const cacheKey = getCacheKey(geometry.uuid, resolution);
  const cached = normalCaptureCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  const center = new THREE.Vector3();
  geometry.boundingBox!.getCenter(center);
  const radius = geometry.boundingSphere!.radius;

  // Save ALL renderer state before modifying anything
  const prevRenderTarget = renderer.getRenderTarget();
  const prevClearColor = new THREE.Color();
  renderer.getClearColor(prevClearColor);
  const prevClearAlpha = renderer.getClearAlpha();
  const prevAutoClear = renderer.autoClear;
  const prevToneMapping = renderer.toneMapping;
  const prevOutputColorSpace = renderer.outputColorSpace;

  // Get current viewport and scissor state
  const prevViewport = new THREE.Vector4();
  const prevScissor = new THREE.Vector4();
  const prevScissorTest = renderer.getScissorTest();
  renderer.getViewport(prevViewport);
  renderer.getScissor(prevScissor);

  const captureMaterial = new THREE.ShaderMaterial({
    vertexShader: CAPTURE_VERTEX_SHADER,
    fragmentShader: CAPTURE_FRAGMENT_SHADER,
    uniforms: {
      centerOffset: { value: center.clone() },
      radius: { value: radius },
    },
    // BackSide: CubeCamera is INSIDE the diamond, so we see inner faces
    side: THREE.BackSide,
    toneMapped: false, // Disable tone mapping for raw normal data
    depthWrite: true,
    depthTest: true,
  });

  // Use original geometry directly — cloning doubles peak VRAM which
  // causes Chrome to crash on mobile with large (3ct+) models.
  const mesh = new THREE.Mesh(geometry, captureMaterial);
  // Keep mesh at origin in local space — no world transform
  mesh.matrixAutoUpdate = false;
  mesh.matrix.identity();
  mesh.matrixWorld.identity();
  mesh.matrixWorldNeedsUpdate = false;

  const captureScene = new THREE.Scene();
  captureScene.add(mesh);

  // On mobile GPUs, HalfFloatType cubemap render targets can silently produce
  // garbage when EXT_color_buffer_half_float isn't available — the render
  // "succeeds" (no exception) but the texture contains undefined data.
  // The normal capture stores encoded normals (0-1 range) and normalized
  // distance, which fits perfectly in 8-bit UnsignedByteType.
  // Use UnsignedByteType FIRST on mobile for guaranteed correctness.
  const isMobileGPU =
    typeof navigator !== "undefined" &&
    (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ||
      (typeof window !== "undefined" && window.innerWidth < 768));

  const cubeTypesToTry: THREE.TextureDataType[] = isMobileGPU
    ? [THREE.UnsignedByteType]
    : [THREE.FloatType, THREE.HalfFloatType, THREE.UnsignedByteType];

  let cubeRT: THREE.WebGLCubeRenderTarget | null = null;
  let lastError: unknown = null;

  // Temporarily disable tone mapping and set proper color space for raw data capture
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.autoClear = true;

  // Set clear color to encode a neutral outward normal (0.5,0.5,1.0 = 0,0,1 in decoded space)
  // and distance = 1.0 (at radius). This prevents black artifacts at cubemap seams.
  renderer.setClearColor(new THREE.Color(0.5, 0.5, 1.0), 1.0);

  for (const texType of cubeTypesToTry) {
    let candidateRT: THREE.WebGLCubeRenderTarget | null = null;
    try {
      candidateRT = new THREE.WebGLCubeRenderTarget(resolution, {
        format: THREE.RGBAFormat,
        type: texType,
        generateMipmaps: false,
        // NearestFilter is critical for the normal cubemap:
        // LinearFilter interpolates between adjacent texels encoding different
        // facet normals, creating averaged normals at facet edges. These
        // averaged normals cause refract() to produce degenerate zero vectors
        // → NaN cascading → black dot artifacts on mobile.
        // Diamond facets have sharp edges; nearest-neighbor is physically correct.
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        depthBuffer: true,
        stencilBuffer: false,
      });

      const cubeCamera = new THREE.CubeCamera(
        radius * 0.001,
        radius * 10,
        candidateRT,
      );
      cubeCamera.position.copy(center);
      cubeCamera.update(renderer, captureScene);
      cubeRT = candidateRT;
      break;
    } catch (error) {
      if (candidateRT) {
        candidateRT.dispose();
      }
      lastError = error;
    }
  }

  if (!cubeRT) {
    throw new Error(
      `Failed to create/render diamond normal cubemap. Last error: ${String(
        lastError,
      )}`,
    );
  }

  // On mobile, use finish() to guarantee the cubemap is fully written before
  // the diamond shader reads it. flush() is non-blocking and the cubemap may
  // contain incomplete/garbage data when sampled immediately after.
  // On desktop, flush() is sufficient as GPU pipelines are deeper.
  if (isMobileGPU) {
    renderer.getContext().finish();
  } else {
    renderer.getContext().flush();
  }

  // Reset Three.js's internal WebGL state cache. CubeCamera.update() renders 6
  // faces using the capture shader/geometry, leaving stale program/VAO/texture
  // bindings in the cache. Without this reset, the EffectComposer's next render
  // pass may skip re-binding its own programs, causing visual artifacts.
  renderer.resetState();

  // Restore all renderer state AFTER resetState so Three.js picks up the correct
  // values on the next render call.
  renderer.setRenderTarget(prevRenderTarget);
  renderer.setClearColor(prevClearColor, prevClearAlpha);
  renderer.autoClear = prevAutoClear;
  renderer.toneMapping = prevToneMapping;
  renderer.outputColorSpace = prevOutputColorSpace;
  renderer.setViewport(prevViewport);
  renderer.setScissor(prevScissor);
  renderer.setScissorTest(prevScissorTest);

  // Cleanup — detach mesh from capture scene and dispose the temporary material.
  // We do NOT dispose the geometry since it's the caller's original (not a clone).
  captureScene.remove(mesh);
  captureMaterial.dispose();

  const result: NormalCaptureResult = {
    texture: cubeRT.texture,
    radius,
    centerOffset: center,
    renderTarget: cubeRT,
  };

  // ── Store in cache for instant reuse on config switch-back ──
  normalCaptureCache.set(cacheKey, result);

  return result;
}
