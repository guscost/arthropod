# Arthropod

React & TSX webapp with no package management or bundling. The `src` folder transpiles to `www` for a [demo](https://arthropod.dev/).

## Development

To watch for TypeScript changes and serve the app:

```
npm install -g typescript serve
tsc -w & serve -s www &
```

Changes will compile on save, but you will need to refresh the browser manually.

## Deployment

After transpiling with `tsc`, copy the contents of the `www` folder to a static file server, and you're done.

## Included dependencies

- `react` and `react-dom`
- `lucide-react`
- `tailwindcss`
- `shadcn` dependencies: `clsx`, `zod`, `react-day-picker`, etc
- `@radix-ui/*`
- `@dnd-kit/*`
- `swr`, `wouter`, and `zustand` in extras.min.js
- `use-mask-input`

### Updating dependencies

See `update/README.md` for instructions on updating the included dependencies.
