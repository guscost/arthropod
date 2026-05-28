# Repository Guidelines

## Project Overview

Arthropod is a React & TypeScript app kit with **zero bundler and zero package manager at runtime**. All external dependencies (React, shadcn/ui, @dnd-kit, etc.) are bundled as UMD scripts. The `src/` directory compiles to AMD modules via `tsc`, then a custom script loader bootstraps the dependency graph in the browser.

Live demo: https://arthropod.dev/

## Architecture & Data Flow

1. **Compile time**: `tsc` (root tsconfig) transpiles `src/**/*.tsx` → AMD `.js` files in `www/js/`.
2. **Bootstrap**: `lib/arthropod.js` injects `<script>` tags in dependency order, loading UMD bundles from `www/js/lib/`.
3. **Module resolution**: `lib/define.js` implements a custom AMD loader that resolves relative paths, tracks pending dependencies, and detects circular imports at runtime.
4. **App mount**: Once all scripts are loaded, the entry module (`index.js`) calls `createRoot(document.getElementById("root"))`.

No Webpack/Vite/esbuild. No `node_modules` shipped to production. The only server is a static file host.

## Key Directories

| Directory | Purpose |
|---|---|
| `src/` | App source — components, hooks, lib |
| `src/components/ui/` | shadcn/ui component copies (Button, Card, Dialog, etc.) |
| `src/components/demo-*/*/` | Demo pages (Cards, Form, Kanban, SWR) |
| `src/hooks/` | Custom React hooks |
| `src/lib/` | Bootstrapping code, Tailwind config, custom module loader |
| `types/` | TypeScript `.d.ts` files for all bundled dependencies |
| `www/js/` | Compiled AMD output + UMD dependency bundles (gitignored in most cases) |
| `update/` | Script that downloads and processes external deps into the project |

## Development Commands

```bash
# Install tsc and a local server (one-time)
npm install -g typescript serve

# Watch mode + serve
tsc -w & serve -s www &

# Update bundled dependencies
cd update && npm run update
```

There is no test runner, linter, or bundler. Changes compile on save via `tsc -w`; you must refresh the browser manually.

## Code Conventions & Common Patterns

### Import paths
- `@/*` → `src/*` (e.g., `import { Button } from "@/components/ui/button"`)
- Bare package names → resolved to `types/*` via tsconfig paths (e.g., `"react"` maps to `types/react`)
- No relative imports between components — always use `@/` alias

### Component patterns
- Default exports are a single function component per file (e.g., `<KanbanBoard />`, `<CardsDemo />`)
- Props are inferred inline; no separate interface unless the type is reused
- JSX uses Tailwind utility classes exclusively (no CSS modules or styled-components)
- shadcn/ui primitives from `@/components/ui/*` compose the UI

### Routing
- `wouter` for client-side routing (`<Switch>`, `<Route>`, `<Link>`)
- Custom hook `useRoutes<T>()` in `src/hooks/use-routes.ts` provides type-safe route matching with inferred params
- App routes: `/` (Cards), `/form`, `/drag-n-drop`, `/swr`; fallback is Cards

### State management
- Local state via React `useState` / `useReducer` — no global store for the demo pages
- `zustand` is bundled but not used in current demos
- The Kanban board uses `useState<Column[]>` + `useState<Task[]>` with refs for mutable tracking

### Hooks
- `useIsMobile()` — media query hook at 768px breakpoint (from shadcn pattern)
- `useRoutes<T>()` — batched wouter matching over a route table, returns `[matchedRoute, params]`

### Tailwind
- Full config in `src/lib/tailwind-config.ts` (~21KB): theme overrides, plugins, animations (tw-animate-css), shadcn variable-based theming with CSS custom properties for colors

## Important Files

| File | Purpose |
|---|---|
| `tsconfig.json` | Root config: AMD output to `www/js/`, path aliases, JSX transform |
| `src/index.tsx` | App entry — creates React root, renders `<App />` in StrictMode |
| `src/components/app.tsx` | Route table with 4 demo pages and nav buttons |
| `src/lib/arthropod.ts` | Bootstrap script tag injector (runs as the first loaded script) |
| `src/lib/define.ts` | Custom AMD module loader with cycle detection |
| `src/hooks/use-routes.ts` | Type-safe wouter route matching hook |
| `types/global.d.ts` | Global type declarations for injected globals (`__ROOT_PATH__`, etc.) |
| `update/update.ts` | Dependency update script (UMD bundling + .d.ts collection) |

## Runtime/Tooling Preferences

- **Runtime**: Node.js only for the build step; browser at runtime with no Node APIs
- **Package manager**: `npm` (only in the `update/` directory for dependency resolution)
- **Compiler**: `tsc` directly, no tsx/ts-node/esbuild — target is ES2018
- **Module format**: AMD output from tsc; UMD bundles for external deps via webpack (inside update script)
- **No bundler at build time** — each `.tsx` file produces its own `.js`; the custom loader handles dynamic loading

## Testing & QA

No automated tests. Verify changes by:
1. `tsc --noEmit` for type checking
2. `tsc -w & serve -s www &`, then open the served page in a browser
3. Check each demo route and visual behavior (drag-and-drop, form validation, theme toggle)
