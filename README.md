# Next.js Project Template

This is a [Next.js](https://nextjs.org/) project template originally bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First:

```bash
pnpm install
pnpm prepare
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Configure (optional)

- Project `name` and dependencies in [package.json](package.json)
- Emoji used for favicon in [src/app/icon.tsx](src/app/icon.tsx)
  - Or delete that file and use a `favicon.ico` file within `src/app/`
- Metadata in [src/app/layout.tsx](src/app/layout.tsx) and [src/app/page.tsx](src/app/page.tsx)
- Style all error pages - [src/app/error.tsx](src/app/error.tsx), [src/app/global-error.tsx](src/app/global-error.tsx), and [src/app/not-found.tsx](src/app/not-found.tsx)
  - Possibly create an `ErrorBoundary` component for reuse
- Update `paths` in [tsconfig.json](tsconfig.json) and `importOrder` in [prettier.config.js](prettier.config.js)
- Update [next.config.ts](next.config.ts)
