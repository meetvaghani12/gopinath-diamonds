# Gopinath Diamonds — Build Plan

## Overview
Two-page luxury diamond jewellery showcase with interactive 3D diamond viewer, theme system, and inquiry forms.

## Routes (Next.js App Router)

| Route | Page | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Homepage — hero, collections, 4 C's, craft, showcase, testimonials, bespoke, contact |
| `/diamonds/the-aurora` | `app/diamonds/the-aurora/page.tsx` | Stone detail — 3D viewer, grading breakdown, proportions, certificate |
| `/api/contact` | API route | Handle bespoke / viewing form submissions |

## Component Tree

```
Layout (RootLayout)
├── ThemeProvider (Zustand — CSS vars on :root)
├── SparkleField (fixed canvas of twinkling dots)
├── PaletteSwitcher (floating right rail, 5 color themes)
│
├── Page: Home (/)
│   ├── Navbar (fixed, transparent→solid on scroll)
│   ├── HeroSection
│   │   ├── GemCanvas (3D diamond, auto-rotate)
│   │   └── ScrollIndicator
│   ├── MarqueeStrip
│   ├── CollectionsGrid (7 diamond shapes)
│   │   └── ShapeCard (SVG icon + name + facet count)
│   ├── JewelleryTypes (rings, necklaces, earrings, bracelets)
│   │   └── CategoryCard (image overlay + gradient)
│   ├── FancyColors (4 colour diamond cards)
│   │   └── ColorCard (glowing orb + name + rarity)
│   ├── FourCsSection
│   │   ├── TabBar (Cut, Colour, Clarity, Carat)
│   │   └── CsDetailPanel (letter + name + desc + stat + animated rings)
│   ├── CraftSection (full-bleed bg image + overlay text)
│   ├── SignatureShowcase
│   │   ├── ShowcaseImage
│   │   └── SpecGrid (carat, colour, clarity, cut)
│   ├── TestimonialsCarousel (auto-rotating quotes + dot nav)
│   ├── BespokeSection
│   │   └── InquiryForm (name, email, message → /api/contact)
│   ├── ContactSection (address, hours, social)
│   └── Footer
│
├── Page: Diamond Detail (/diamonds/the-aurora)
│   ├── DetailNav (sticky, back link)
│   ├── StoneHero (split: 3D viewer left + specs right)
│   │   ├── GemViewer (draggable 360° with OrbitControls)
│   │   └── StoneSpecs (carat/colour/clarity/cut tiles + price + CTAs)
│   ├── GradeBreakdown (4 animated progress bars)
│   ├── ProportionsSection (measurements + animated diagram)
│   ├── CertificateSection (GIA badges)
│   ├── ViewingForm (email → /api/contact)
│   ├── RelatedStones (3-card grid)
│   └── Footer
```

## Data Flow

### Theme System
```
Zustand store: { theme: 'onyx' | 'sapphire' | 'emerald' | 'rose' | 'pearl' }
  → ThemeProvider reads store, sets CSS custom properties on <html>
  → PaletteSwitcher reads/writes store
  → All components consume CSS vars via Tailwind or inline style
```

### 4 C's Tab State
```
Local state in FourCsSection: { activeC: number (0-3) }
  → TabBar sets activeC
  → CsDetailPanel reads activeC to show correct content
```

### Testimonials
```
Local state: { quoteIndex: number }
  → Auto-rotates every 5.5s (setInterval)
  → Dot nav overrides index
```

### Forms (Bespoke + Viewing)
```
react-hook-form + zod validation
  → onSubmit → POST /api/contact
  → On success: show thank-you state
```

## Key Technical Decisions

1. **Gem 3D** — Port `gem.js` Three.js logic into a React component using `@react-three/fiber`. The existing `LatheGeometry`, `MeshPhysicalMaterial` (transmission/ior/dispersion), and 3-point lighting map directly.

2. **Themes** — 5 palette objects (same as design) stored as JS config. Apply via `document.documentElement.style.setProperty()` in a `useEffect`. No CSS-in-JS library needed.

3. **Animations** — Framer Motion for scroll reveals (`useInView` + `motion.div`). CSS keyframes for sparkle twinkle, scroll cue, and floating orbs (keep as CSS).

4. **Images** — Replace `image-slot` placeholders with real product images via `next/image`. Store in `public/images/`.

5. **Fonts** — Use `next/font` to load Cormorant Garamond + Jost from Google Fonts (self-hosted, no FOUT).

## State Management Summary

| State | Scope | Mechanism |
|-------|-------|-----------|
| Active theme | Global | Zustand |
| 4 C's tab | Local | `useState` |
| Testimonial index | Local | `useState` + `useEffect` interval |
| Form submitted | Local | `useState` |
| Scroll position | Local | `useEffect` listener |
| Intersection reveals | Per-element | Framer Motion `useInView` |

## Build Order

1. Scaffold Next.js + Tailwind + dependencies
2. Theme system (Zustand store + CSS vars + PaletteSwitcher)
3. Layout (Navbar, Footer, SparkleField)
4. HeroSection with GemCanvas (integrate Three.js)
5. CollectionsGrid + JewelleryTypes
6. FancyColors + FourCsSection
7. CraftSection + SignatureShowcase
8. Testimonials + BespokeSection + ContactSection
9. Diamond Detail page (all sub-sections)
10. API route for contact form
11. Polish (responsive, performance, loading states)
