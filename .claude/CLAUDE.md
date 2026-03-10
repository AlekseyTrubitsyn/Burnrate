@.claude/AGENTS.md

# Burnrate

A personal finance tracker / tech sandbox built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

## Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **UI**: React 19, Tailwind CSS v4, Radix UI primitives
- **Testing**: Vitest (unit), Playwright (e2e), Storybook
- **Package manager**: pnpm

## Commands

```bash
pnpm dev          # start dev server (Turbopack)
pnpm build        # production build
pnpm test         # run unit tests (vitest)
pnpm e2e:headless # run e2e tests (playwright)
pnpm lint         # eslint
pnpm format       # prettier
```

## Next.js MCP

When starting work on a Next.js project, ALWAYS call the `init` tool from
next-devtools-mcp FIRST to set up proper context and establish documentation
requirements. Do this automatically without being asked.

## Conventions

- All pages live in `app/` (Next.js App Router)
- Shared components in `components/` with co-located stories and tests
- Styles via Tailwind utility classes; global styles in `styles/tailwind.css`
- Env validation via `@t3-oss/env-nextjs` in `env.mjs`
