# Gopinath Diamonds ✦

> *Because nothing says "I love you" like a rock that took a billion years to form and three business days to pick out.*

A luxury diamond showcase that proves you *can* build something gorgeous with Next.js 15 without a single WordPress plugin or stock photo of a handshake.

## What Is This, Exactly?

It's a diamond jewellery website that makes rocks look good. We've got:

- A **3D diamond** you can spin around like a fidget toy
- **5 colour themes** because choosing a diamond is hard enough without also picking a website colour
- **Scroll animations** so smooth your therapist will be proud
- A **contact form** that actually sends emails (revolutionary, we know)
- Zero jQuery. We're not animals.

## Tech Stack (The Boring but Important Part)

| Thing | What We Used | Why |
|-------|--------------|-----|
| Framework | Next.js 15 (App Router) | Because pages router is so 2023 |
| Language | TypeScript (strict) | `any` is not a type, Karen |
| Styling | Tailwind CSS | Writing actual CSS is for masochists |
| 3D | @react-three/fiber + drei | Yes, we put a diamond in a WebGL canvas like psychopaths |
| Animation | Framer Motion | Because `@keyframes` belong in a museum |
| State | Zustand | Redux would've required a whole 'nother therapy session |
| Forms | react-hook-form + zod | Validation so tight it squeaks |
| Fonts | Cormorant Garamond + Jost | One fancy font for headings, one readable one for everything else |
| Icons | Lucide React | Not FontAwesome. You're welcome. |

## Getting Started

```bash
npm install    # Go make tea. This'll take a while.
npm run dev    # If it compiles, it's a miracle.
```

Open [http://localhost:3000](http://localhost:3000). If you see a diamond, it worked. If you see a blank page, check the console and question your life choices.

## Scripts

| Command | What It Does | What It Actually Does |
|---------|-------------|----------------------|
| `npm run dev` | Start dev server | Compiles 2,540 modules while you stare at the terminal |
| `npm run build` | Production build | Prays nothing breaks |
| `npm run start` | Start production | The "I swear it worked in dev" button |
| `npm run lint` | Run ESLint | Yells at you for spaces instead of tabs |
| `npm run typecheck` | tsc --noEmit | Finds the one type error you missed at 2 AM |

## Project Structure (or: Where Did I Put That File?)

```
src/
├── app/                    # Pages that actually render
│   ├── page.tsx            # The homepage. You're soaking in it.
│   ├── layout.tsx          # The wrapper. Like a warm blanket of code.
│   └── diamonds/
│       └── the-aurora/     # One very fancy diamond's fan club page
├── components/
│   ├── home/               # All the pretty pieces that make the homepage
│   ├── detail/             # The diamond's modelling portfolio
│   ├── layout/             # Navbar, footer, sparkly things that follow you
│   └── gem/                # Three.js wizardry that makes a rock look 3D
├── lib/                    # Constants, colours, and the function that joins classes
├── stores/                 # Zustand. Because useEffect is so 2022.
└── public/images/          # Pictures of things you can't afford
```

## Features That Actually Work

- **3D Gem Viewer** — Drag to rotate. Watch light bounce. Impress your friends.
- **Theme Switcher** — 5 palettes. Bottom-right corner. Click until you're happy.
- **Diamond Shapes** — All 7 cuts rendered as tiny SVG icons that hurt to code.
- **4 C's Breakdown** — Cut, Colour, Clarity, Carat. We explain them so you sound smart at parties.
- **Contact Form** — Fills your inbox with inquiries from people who "are just looking."
- **Scroll Animations** — Framer Motion fade-ups that made the bundle size cry.

## Known Issues

- The diamond doesn't actually exist. It's a mesh with fancy lighting.
- You can't buy it through the website. This isn't Amazon.
- The 3D model might make your laptop fan sound like a jet engine.
- Yes, we know the pink diamond image is just another white diamond. Photography is hard.

## License

Private. Which is fancy for "don't steal our rock website."

---

*Built with way too much caffeine and a concerning lack of sunlight.*
