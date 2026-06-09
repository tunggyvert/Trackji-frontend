# Trackji Frontend

Frontend baseline for Trackji built with Vite, React, TypeScript, Redux Toolkit, React Router, and Vitest.

## Stack

- Vite for the dev server and production build
- React 19 + TypeScript
- Redux Toolkit for predictable application state
- React Router for route composition
- Vitest + Testing Library for unit and UI tests
- ESLint with type-aware TypeScript rules

## Quick Start

```bash
pnpm install
pnpm dev
```

Open the local Vite URL shown in the terminal.

## Scripts

- `pnpm dev` starts the development server
- `pnpm build` type-checks and builds the app
- `pnpm preview` serves the production build locally
- `pnpm lint` runs ESLint
- `pnpm test` runs the test suite once
- `pnpm test:watch` runs Vitest in watch mode

## Project Structure

```text
src/
  app/         app bootstrap, providers, router, global styles
  assets/      static assets
  components/  reusable UI building blocks
  features/    feature state and feature-specific UI logic
  hooks/       shared hooks
  pages/       route-level screens
  services/    API clients and external integrations
  store/       Redux store, root reducer, typed hooks
  test/        test utilities and setup
  types/       shared TypeScript types
  utils/       pure utilities
```

## Architecture Notes

- `src/app` owns the application shell and wiring.
- `src/pages` should stay thin and compose feature/UI blocks.
- `src/features` owns feature state, selectors, and feature-specific presentation.
- `src/store` exposes only the global store contract and typed hooks.
- Shared utilities move outward into `components`, `hooks`, `services`, `types`, and `utils` only when they are reused across features.

## Redux Conventions

- Create slices under `src/features/<feature-name>`.
- Register reducers centrally in `src/store/rootReducer.ts`.
- Use `useAppDispatch` and `useAppSelector` from `src/store/hooks.ts` instead of raw Redux hooks.
- Keep async and integration logic out of components; promote it into services or thunk/query layers when needed.

## Adding a New Page

1. Add the route component under `src/pages`.
2. Register the route in `src/app/router.tsx`.
3. Compose reusable UI from `components` and feature-specific logic from `features`.

## Adding a New Feature Slice

1. Create a feature folder under `src/features/<feature-name>`.
2. Add the slice and exported actions/selectors.
3. Register the reducer in `src/store/rootReducer.ts`.
4. Cover the slice with focused tests.

## Testing

- UI rendering tests live close to the app or feature under test.
- Pure reducer and selector tests should stay next to the feature module.
- `src/test/setup.ts` centralizes Testing Library setup.

