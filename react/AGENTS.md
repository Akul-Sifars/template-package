---
description: Rules for the agents.
globs: "AGENTS.md"
alwaysApply: true
---

# AGENTS.md

## Rules

- Be caveman
- Use `bun` instead of `node` & `npm`; read more at `.agents/rules/use-bun.mdc`
- Keep files short and concise, it its taking more than 200 lines, split it into multiple files
- Task won't be considered complete unless there's even a single error/warning in build/lint/test
- Before committing, review the code with coderabbit cli and fix the issues
- If present, ALWAYS use primitive components from `src/components/ui`
- NEVER add, delete or modify any file from `src/components/ui` unless asked explicitly
- ALWAYS use TanStack Query (`@tanstack/react-query`) for all server state (fetching, caching, mutations); use Zustand only for client/UI state
- NEVER use `useMemo` or `useCallback` — plain logic/deriving values during render is enough. Only allowed when REALLY necessary (proven perf issue), get explicit approval first
- NEVER use `useEffect` without explicit approval — prefer event handlers, derived state, or TanStack Query. Ask before adding any `useEffect`
- All types MUST live in a dedicated types file under the `types` folder, named `<contract>.types.ts` (e.g. `user.types.ts`). No inline types scattered in components
- NEVER use string literal comparisons (e.g. `if (status === "active")`) — use enums, constants, or union types instead
- All constants MUST live in a constants file under the `constants` folder, named `<contract>.constants.ts` (e.g. `user.constants.ts`)
- Always load these skills in very start of chat
  - shadcn
  - shadcn-ui
  - tailwindcss-v4
