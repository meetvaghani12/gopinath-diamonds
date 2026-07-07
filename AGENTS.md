# Gopinath Diamonds — Agent Guide

## Project Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **3D:** @react-three/fiber + @react-three/drei
- **Animation:** Framer Motion
- **State:** Zustand
- **Forms:** react-hook-form + zod
- **Fonts:** next/font (Cormorant Garamond + Jost)
- **Icons:** Lucide React

## Code Conventions

### Imports
```typescript
// External packages first, then internal, alphabetically
import { motion, useInView } from 'framer-motion';
import { useThemeStore } from '@/stores/theme';
import { GemViewer } from '@/components/gem/GemViewer';
```

### Components
- **Each component gets its own file** in the appropriate directory
- Co-locate sub-components in a folder (e.g. `hero/HeroSection.tsx`, `hero/GemCanvas.tsx`)
- Export named, not default (except pages in `app/` dir)

### Directory Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── diamonds/the-aurora/page.tsx
│   ├── globals.css
│   └── api/contact/route.ts
├── components/
│   ├── layout/        (Navbar, Footer, SparkleField, PaletteSwitcher)
│   ├── home/          (HeroSection, CollectionsGrid, FourCsSection, etc.)
│   ├── detail/        (StoneHero, GradeBreakdown, ProportionsSection, etc.)
│   └── gem/           (GemViewer, GemCanvas — Three.js wrapper)
├── stores/
│   └── theme.ts       (Zustand store)
├── lib/
│   ├── palettes.ts    (5 theme palette definitions)
│   ├── constants.ts   (shapes, colors, csData, quotes, specs)
│   └── utils.ts       (cn() helper, formatters)
│
├── public/images/     (product images)
```

### Naming
- **Files:** PascalCase for components, kebab-case for utilities
- **Functions:** camelCase
- **Types/Interfaces:** PascalCase, prefixed with `I` only when disambiguation is needed
- **CSS classes:** Tailwind utility classes — no custom CSS unless absolutely needed
- **Tailwind custom values:** Define in `tailwind.config.ts` under `theme.extend`

### Theme System
The 5 palettes are defined in `src/lib/palettes.ts` as a const object map:

```typescript
export const palettes = {
  onyx: {
    label: 'Onyx & Champagne',
    dot: 'linear-gradient(135deg,#E7CE96,#C9A96A)',
    css: { '--bg': '#08080A', '--text': '#F4F1EA', /* ... */ },
    sparkle: '#E7CE96',
  },
  // ... sapphire, emerald, rose, pearl
} as const;

export type ThemeKey = keyof typeof palettes;
```

Apply via Zustand store → `useEffect` sets properties on `document.documentElement`:

```typescript
const { theme, setTheme } = useThemeStore();
useEffect(() => {
  const vars = palettes[theme].css;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
}, [theme]);
```

### 3D Gem Component
Wrap Three.js in a dedicated component using `@react-three/fiber`:

```typescript
// src/components/gem/GemViewer.tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Gem } from './Gem';
import type { GemViewerProps } from './types';

export function GemViewer({ autoRotate = true }: GemViewerProps) {
  return (
    <Canvas camera={{ position: [0, 0.2, 4.4], fov: 38 }}>
      <Gem />
      <OrbitControls autoRotate={autoRotate} enableZoom={false} />
      <Environment preset="studio" />
    </Canvas>
  );
}
```

### Animations
- **Scroll reveals:** Framer Motion — `motion.div` with `initial`/`whileInView`/`viewport`
- **Micro-interactions:** `whileHover` on cards, buttons
- **CSS-only animations:** Sparkle twinkle, floating orbs, scroll cue (keep as CSS `@keyframes`)
- **Duration/timing:** Match the design's deliberate luxury feel (0.8–1.2s reveals, 0.4–0.6s transitions)

### Forms
```typescript
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().optional(),
});

function InquiryForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ schema });
  const [submitted, setSubmitted] = useState(false);
  // onSubmit → fetch('/api/contact')
}
```

### API Routes
```
POST /api/contact
Body: { name, email, message? }
Response: { success: boolean }
Rate-limit: optional (upstash or Vercel KV)
```

## Design Reference
- **Font stack:** Cormorant Garamond (serif, headings) + Jost (sans-serif, UI/text)
- **Primary accent:** `#C9A96A` (gold/champagne)
- **Bright accent:** `#E7CE96`
- **Background:** `#08080A` (near-black)
- **Border treatment:** Subtle gold lines at `rgba(201,169,106,0.14)` to `0.24`
- **Scroll animation:** Elements fade up + translateY(36px) over 1.1s with cubic-bezier(.16,1,.3,1)
- **Image aspect ratios:** 4:5 for jewellery type cards, 1:1 for showcase, 16:9 for craft background

## Verification
```bash
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm run build       # production build
```
