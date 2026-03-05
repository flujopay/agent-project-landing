# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev      # Start development server (localhost:3000)
yarn build    # Production build (standalone output)
yarn start    # Run production server
yarn lint     # Run ESLint
```

## Architecture

This is a Next.js 16 landing page for "Recupera" (B2B debt collection CRM), using the App Router with React 19.

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/ui/` - React components organized by page/feature
  - `ui/recupera/sections/` - Landing page sections (Hero, FAQ, ContactForm, etc.)
  - `ui/shared/` - Reusable components (Button, Input, Modal, Toast, WhatsApp widget)
  - `ui/layout/` - Header and Footer
- `src/lib/` - Business logic and utilities
  - `lib/store/` - Zustand stores (modalStore, useCurrencyStore, useToastStore)
  - `lib/services/` - API services with TanStack Query mutations
  - `lib/data/constants.ts` - Site configuration (social links, footer nav, contact info)
- `src/api/` - Axios instances for API calls (base URL: services.flujolink.com)

### Key Patterns

**State Management**: Zustand for global state (modals, toasts, currency). TanStack Query for server state.

**Server Components**: Layout fetches IP/country data server-side via `getIpInfoServer()` and `getCountriesServer()`, passed to client via Providers.

**Styling**: Tailwind CSS 4 with custom theme variables in `globals.css`:
- Brand colors: `brand-primary` (blue #3771d1), `brand-secondary` (orange #f6793a)
- Custom fonts: `font-canaro`, `font-adobe`, `font-caslon`

**SVG Imports**: Uses @svgr/webpack via Turbopack to import SVGs as React components.

**Forms**: react-hook-form for form handling, submitted to `/api/v1/users/send_contact_info/`.
