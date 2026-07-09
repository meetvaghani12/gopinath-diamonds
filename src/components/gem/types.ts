export interface GemViewerProps {
  autoRotate?: boolean;
  enableZoom?: boolean;
  /** Center-stone GLB to render; defaults to the round hero stone. */
  modelPath?: string;
  /** Camera position; defaults to the low profile view used by the home hero. */
  cameraPosition?: [number, number, number];
}
