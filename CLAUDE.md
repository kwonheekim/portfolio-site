# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

```bash
# Install dependencies (use pnpm for better performance)
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

The development server runs on `http://localhost:3000` with hot module reloading enabled.

## Project Overview

This is a **React 18 portfolio website** built with:
- **Vite** - Fast build tool with HMR
- **Tailwind CSS** - Utility-first styling with custom theme
- **Motion** - Smooth animations and scroll-based effects
- **shadcn/ui** - Accessible component library built on Radix UI
- **TypeScript** - Type-safe development

## Architecture

### Directory Structure

```
src/
├── components/
│   ├── Header.tsx          # Fixed navigation with scroll detection
│   ├── Hero.tsx            # Landing section with animations
│   ├── About.tsx           # About section with image & text
│   ├── Skills.tsx          # Skills showcase with badges
│   ├── Projects.tsx        # Project cards with tech stacks
│   ├── Contact.tsx         # Contact & social links
│   ├── Navigation.tsx      # Navigation component
│   ├── ui/                 # 48 shadcn/ui components
│   └── figma/              # Custom utilities (ImageWithFallback)
├── styles/
│   └── globals.css         # Tailwind theme variables
├── App.tsx                 # Root component
├── main.tsx                # Entry point
└── index.css               # Tailwind imports
```

### Key Architectural Patterns

1. **Section-Based Components**: Each portfolio section (Hero, About, Skills, etc.) is a self-contained functional component
2. **Scroll-Based Animations**: Uses Motion library's `useInView` hook to trigger animations as sections enter viewport
3. **Static Data**: All content (skills, projects) hardcoded in component files - no API calls
4. **Local State Only**: Uses React hooks (`useState`, `useRef`) with no global state management
5. **Tailwind + CSS Variables**: Theme system uses CSS custom properties for light/dark mode support

### Component Patterns

**Animation Pattern** (used in Hero, About, Skills, Projects):
```tsx
import { motion } from "motion/react";
import { useInView } from "motion/react";

const ref = useRef(null);
const isInView = useInView(ref);

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.6, delay: 0.2 }}
/>
```

**Scroll Detection Pattern** (Header.tsx):
```tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

**Smooth Scroll Navigation**:
```tsx
const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};
```

## Styling System

### Theme Colors (defined in `styles/globals.css`)
- **Light mode**: White background (#ffffff), dark text
- **Dark mode**: Very dark background (oklch(0.145 0 0)), light text
- Uses CSS variables for colors, spacing, font sizes, border radius
- Base border radius: 0.625rem
- Fully compatible with Tailwind utility classes

### Adding Styles
1. Use Tailwind classes directly in JSX (preferred)
2. Create reusable components in `components/ui/` using CVA (class-variance-authority)
3. Override theme in `styles/globals.css` for global changes

## Common Development Tasks

### Adding a New Section
1. Create component file: `src/components/SectionName.tsx`
2. Use `useInView` hook for scroll animations
3. Import and add to `App.tsx` in main element
4. Add navigation link to Header (if applicable)

### Adding UI Components
```tsx
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
```

All UI components are in `components/ui/` and use Tailwind + CVA for variants.

### Updating Content
- **Skills**: Edit array in `src/components/Skills.tsx`
- **Projects**: Edit array in `src/components/Projects.tsx`
- **Social Links**: Edit Contact.tsx

## Important Configuration Files

### `vite.config.ts`
- Path alias: `@/` maps to `/src`
- React plugin uses SWC for fast builds
- Build output: `build/` directory
- Development server: port 3000 with auto-open

### `package.json`
- React 18.3.1, TypeScript enabled
- Vite as build tool
- 30+ dependencies (UI, animations, forms, charts)

## Key Dependencies & Their Roles

| Dependency | Version | Purpose |
|-----------|---------|---------|
| `motion` | * | Framer Motion replacement for animations |
| `@radix-ui/*` | various | Accessible component primitives |
| `class-variance-authority` | ^0.7.1 | Type-safe CSS class variants |
| `lucide-react` | ^0.487.0 | SVG icon library |
| `react-hook-form` | ^7.55.0 | Form state management |
| `recharts` | ^2.15.2 | Data visualization |
| `embla-carousel-react` | ^8.6.0 | Carousel component |
| `next-themes` | ^0.4.6 | Dark mode theme switching |
| `sonner` | ^2.0.3 | Toast notifications |

## Important Notes

- **No Testing Framework**: Project currently has no tests. Consider Vitest + React Testing Library for future additions.
- **No Linting**: No ESLint/Prettier configured. Consider adding for consistency.
- **All Static Content**: No database or API integration. Data is hardcoded in components.
- **TypeScript**: Basic setup - consider enabling strict mode for better type safety.
- **Performance**: Ready for optimization with code splitting and image lazy loading.

## Build & Deployment

```bash
# Development
pnpm run dev           # Hot reload on save

# Production
pnpm run build         # Output to /build directory
pnpm run preview       # Preview build locally (requires vite preview)
```

Built files are optimized and ready for static hosting (Vercel, Netlify, GitHub Pages).

## Next Developer Resources

1. **First time?** Start with `App.tsx` to see overall structure
2. **Adding animations?** Check `Hero.tsx` for patterns
3. **Styling changes?** Review `styles/globals.css` for theme
4. **Understanding components?** Look at any `ui/` component for CVA patterns
5. **Vite docs**: https://vitejs.dev/
6. **Motion docs**: https://motionjs.com/
7. **Tailwind docs**: https://tailwindcss.com/
8. **shadcn/ui**: https://ui.shadcn.com/
