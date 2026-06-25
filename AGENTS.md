# AGENTS.md

> Operating manual for any agent — human or AI — contributing to the **Youmii** project.
> Read this **in full** before writing a single line of code. Every rule here exists because this is a production marketing site. Quality, consistency, and extensibility are non-negotiable.

---

## 0. Project Overview

**Youmii** is an AI-powered restaurant discovery and reservation web app built as a marketing/landing site. The goal is to drive app downloads for the Youmii mobile app (available in Bern, Zurich, and Basel, Switzerland).

- **Framework:** React 19 + Vite 8
- **Language:** TypeScript 6 (strict)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` — token-based design system
- **Linter:** oxlint
- **Package manager:** npm (uses `package-lock.json`)
- **Node:** see `.nvmrc` or use ≥ 20

### Primary Directories

```
src/
├── assets/               # Static images and SVGs — import locally, never reference Figma URLs
├── components/
│   ├── layout/           # Header, Footer — one of each, no variants
│   └── ui/               # Reusable primitives: Button, CtaBanner, …
├── App.tsx               # Root component — composes Header + main content + Footer
├── main.tsx              # React DOM entry point
└── index.css             # Design tokens (:root), @theme mapping, @layer base
```

### Key Files

| File | Purpose |
|---|---|
| `src/index.css` | `:root` CSS variables (raw tokens) + `@theme` Tailwind mapping + `@layer base` resets |
| `src/App.tsx` | Root shell — `<Header /> + <main> + <Footer />` |
| `src/components/index.ts` | Barrel — single import point for all public components |
| `src/components/layout/Header.tsx` | Sticky nav with logo, nav pill, language switcher, mobile drawer |
| `src/components/layout/Footer.tsx` | CTA banner + link columns + social icons + copyright |
| `src/components/ui/Button.tsx` | Polymorphic button — `Button` (variants) + `PrimaryGradientButton` |
| `src/components/ui/CtaBanner.tsx` | Reusable CTA banner with orange gradient — prop-driven |
| `vite.config.ts` | Vite config — `@vitejs/plugin-react` + `@tailwindcss/vite` |
| `tsconfig.app.json` | TypeScript config — strict mode |

---

## 0.1 Commands

```bash
# Development
npm run dev

# Type-check
npx tsc --noEmit

# Lint
npm run lint         # oxlint

# Production build
npm run build        # tsc -b && vite build

# Preview production build
npm run preview
```

---

## 0.2 Core Rules

- Use **Tailwind CSS v4 utility classes** for all styling. No custom CSS in component files.
- Use **CSS variable shorthand syntax** in Tailwind classes: `text-(--primary)`, `bg-(--card-bg)`. Do not use the verbose `bg-[var(--primary)]` form — the linter flags it.
- Use **semantic token names** defined in `src/index.css`. Do not use arbitrary hex values or raw Tailwind palette colors (`text-orange-500`, `bg-slate-100`) in components.
- Use **named shadow utilities** (`shadow-nav`, `shadow-100`, etc.). Do not write arbitrary shadow values.
- Do **not** use inline `style={...}` except for CSS custom property gradients that cannot be expressed as a static Tailwind class (e.g., `style={{ background: 'var(--cta-gr)' }}`). This is the only allowed exception.
- For conditional class names use **template literal concatenation with a ternary** or extract to a `const`. Keep it readable. The project does not use `clsx`/`cn` — do not add it without discussion.
- Use **`import type { ... }`** for type-only imports.
- All component props are typed with a named `interface` or `type`. No `any`.
- Every interactive element needs hover, focus-visible, active, and disabled states.
- **No trailing slashes** on internal links (`/about` not `/about/`).
- **Responsive first.** Mobile baseline is 360px. Test 360px, 640px, 768px, 1024px, 1440px, 1920px.
- **No Figma MCP asset URLs** in any component or page. These are workspace-scoped temporary URLs that break in production. Download every image to `src/assets/`, import it (`import img from '@/assets/file.png'`), and reference `img` or `img.src`.

---

## 1. Mission & Mindset

Youmii is a consumer-facing product. Every page is a conversion surface — the goal is to get users to download the app. Every change you make either helps or hurts that goal.

- **Think before you type.** Analyze the requirement, choose the right component primitive, design the prop API, *then* implement.
- **Build for reuse and override.** Components must be prop-driven, composable, and extensible without forking.
- **Do the smallest correct thing.** Smaller, sharper changes beat sprawling refactors.
- **Care is the default.** No magic numbers. No unexplained workarounds. No "just make it work" code.

---

## 2. Quality Gates (Non-Negotiable)

Run these **before declaring any task complete**:

```bash
npx tsc --noEmit    # zero TypeScript errors
npm run lint        # zero oxlint errors
npm run build       # production build must succeed
```

Never suppress errors with `// @ts-ignore`, `eslint-disable`, or by deleting checks. If a rule is wrong for a specific case, justify the suppression inline.

---

## 3. Engineering Standards

### 3.1 Language & Types

- **TypeScript strict everywhere.** No `any` unless interfacing with an untyped third-party API, and even then, narrow immediately.
- **Public component props** are typed with a named `interface Props` or exported `interface ComponentNameProps`.
- **Discriminated unions** over boolean flag soup.
- Prefer `import type { ... }` for type-only imports.

### 3.2 Components

- **Reusable.** Every component takes props and exposes sensible defaults.
- **Overridable.** Accept a `className` prop and concatenate with existing classes so consumer classes can win.
- **No prop drilling more than 2 levels.** Lift to the layout component or pass via composition.
- **Accessible by default.** Semantic HTML, correct ARIA roles, focus-visible states, keyboard navigation, WCAG AA contrast minimum.
- **Polymorphic where appropriate.** `Button` renders as `<button>` or `<a>` via the `as` prop — follow this pattern.

### 3.3 Folder Structure & Naming

- **Components:** `PascalCase.tsx`
- **Utilities & lib:** `kebab-case.ts`
- **Assets:** `kebab-case.png/svg/webp`
- One default **or** named export per concept per file.
- Co-locate types in the same file unless shared across multiple components.
- New UI primitives go in `src/components/ui/`.
- New page-level layout pieces go in `src/components/layout/`.
- Export every public component through `src/components/index.ts`.

### 3.4 Images & Assets

- **All images must live in `src/assets/`** and be imported:
  ```tsx
  import heroPng from '../assets/hero.png'
  // then: <img src={heroPng} alt="..." />
  ```
- Never reference `public/` files with absolute paths unless the file genuinely needs to be publicly accessible at a known URL (e.g., `favicon.svg`).
- Always provide `alt` text. Empty `alt=""` only for decorative images.
- Provide `width` and `height` attributes to prevent CLS.

### 3.5 Extensibility

Every component must answer: *"how does a future page or section customize this without forking?"*

- Accept a `className` prop — always.
- Expose props for labels, hrefs, icons — never hardcode strings inside components.
- Centralize navigation config and site metadata in a config file (not yet extracted — do so before the config list grows beyond 3–4 items).
- Prefer composition over deeply nested option objects.

### 3.6 Consistency & Responsiveness

- **Mobile-first.** Base styles target 360px. Use `sm:`, `md:`, `lg:`, `xl:` prefixes for progressive enhancement.
- **Consistent spacing** via Tailwind's spacing scale. No magic pixel numbers.
- **Predictable interactions.** Every interactive element must have hover, focus-visible, active, and (where relevant) disabled states.
- **No `overflow-x` leaks.** Test horizontal scroll at every breakpoint.

---

## 4. Design System

### 4.1 Token Architecture

```
src/index.css :root {}     → Raw CSS custom properties (colors, gradients)
         ↓
src/index.css @theme {}    → Tailwind v4 token mapping (--color-*, --shadow-*, etc.)
         ↓
Components                 → Tailwind utilities: text-(--primary), bg-(--card-bg), shadow-nav
```

Tokens live in two places — `:root` for raw values, `@theme` for Tailwind registration. Never hardcode raw values in components.

### 4.2 Color Tokens

All defined in `src/index.css :root`:

| Token | Value | Usage |
|---|---|---|
| `--body-bg` | `#ffffff` | Page background |
| `--body-text` | `#16100d` | Primary text, headings |
| `--secondary` | `#817874` | Body copy, supporting text, muted labels |
| `--header-bg` | `#ffffff` | Header background |
| `--header-text` | `#16100d` | Nav link text |
| `--header-text-hover` | `#ed5f18` | Nav link hover |
| `--footer-bg` | `#ffffff` | Footer background |
| `--footer-text` | `#16100d` | Footer text |
| `--primary` | `#ed5f18` | Brand orange — CTAs, accents |
| `--grey-border` | `#ededed` | Default borders, dividers |
| `--card-bg` | `#f8f7f2` | Card and subtle surface backgrounds |
| `--grey-muted` | `#817874` | Alias for `--secondary` — muted text |
| `--yellow-400` | `#ffa800` | Star ratings, highlights |
| `--red-400` | `#ff3b30` | Error states |
| `--brand-primary-subtle` | `#fcf3ed` | Subtle brand-tinted surface (Tailwind: `bg-(--brand-subtle)`) |
| `--brand-border` | `rgba(237, 95, 24, 0.2)` | Subtle orange border (social icons, cards) |
| `--badge-border` | `#ed5f18` | Badge/pill solid orange border |

### 4.3 Gradient Tokens

| Token | Value | Usage |
|---|---|---|
| `--primary-gr` | `linear-gradient(to right, #ff934f, #ce4714)` | CTA buttons ("Download App") |
| `--cta-gr` | `linear-gradient(166.1deg, #f6ad79 2.44%, #fdeee2 53.34%, #f6ad79 88.28%)` | CTA banner background |
| `--badge-gr` | `linear-gradient(to right, #ffede0, #ffffff)` | Badge pill background |
| `--featured-tag-gr` | `linear-gradient(97.33deg, #930b7d 11.38%, #c9593e 67.73%, #ffa800 98.39%)` | Featured tags |

Gradients cannot be expressed as static Tailwind classes. They are the **only** case where `style={{ background: 'var(--token)' }}` is permitted.

### 4.4 Shadow Tokens

| Tailwind utility | Value | Usage |
|---|---|---|
| `shadow-nav` | `0px 1px 16px 0px rgba(0,0,0,0.06)` | Nav pill |
| `shadow-100` | `0px 4px 20px 0px rgba(237,95,24,0.1)` | Cards with brand glow |
| `shadow-10` | `0px 1px 2px -1px rgba(0,0,0,0.1)` | Subtle depth |
| `shadow-60` | `0px 4px 4px 0px rgba(152,152,152,0.15)` | Mid-level cards |
| `shadow-foot` | `-3px 0px 20px 0px rgba(237,95,24,0.15)` | Footer content card — left-side shadow |

Always use named shadow utilities. Never write `shadow-[0px_4px_8px_...]`.

### 4.5 Typography

- **Font:** Plus Jakarta Sans (loaded from Google Fonts via `@import` in `src/index.css`)
- **Weights available:** 300, 400, 500, 600, 700, 800 (+ italic 400)
- **Stack:** `'Plus Jakarta Sans', system-ui, -apple-system, …` (defined as `--font-sans` in `@theme`)
- Use standard Tailwind size utilities: `text-sm`, `text-base`, `text-xl`, `text-2xl`, etc.
- Heading weight: `font-bold` (700) or `font-semibold` (600)
- Body: `font-normal` (400), line-height `leading-relaxed` or `leading-snug`
- Labels/buttons: `font-medium` (500) or `font-semibold` (600)

### 4.6 Spacing & Layout

- Base spacing unit: Tailwind's 4px scale (`p-4` = 16px, `gap-6` = 24px, etc.)
- **Fractional spacing:** Tailwind v4 supports `.5` increments (`gap-12.5` = 50px, `px-15` = 60px)
- Container max-width: `max-w-[1600px] mx-auto` (defined as `max-w-400` in `@utility container`)
- Container horizontal padding: `px-4 sm:px-6 lg:px-10`
- Section vertical padding: `py-12 sm:py-16 lg:py-20` (adjust per section weight)
- No magic pixel values — use Tailwind scale or `clamp()` via a CSS variable if fluid scaling is needed.

### 4.7 Border Radius

| Usage | Class |
|---|---|
| Badges, small pills | `rounded-full` |
| Inputs, small controls | `rounded-lg` |
| Cards | `rounded-2xl` |
| Large banners | `rounded-[30px]` (Figma spec) |
| Buttons (CTA pill) | `rounded-full` |

---

## 5. Component Reference

### `Button` — `src/components/ui/Button.tsx`

Polymorphic. Renders as `<button>` (default) or `<a>` via `as="a"`.

```tsx
import { Button } from '@/components'

// Button
<Button variant="primary" size="md" onClick={handleClick}>
  Get Started
</Button>

// Anchor
<Button as="a" href="/download" variant="primary">
  Download
</Button>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'outline'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Padding + font size |
| `as` | `'button' \| 'a'` | `'button'` | Rendered element |
| `href` | `string` | — | Required when `as="a"` |
| `className` | `string` | `''` | Extra Tailwind classes |
| `children` | `ReactNode` | — | Required |

**Variants:**

| Variant | Background | Text | Hover |
|---|---|---|---|
| `primary` | `--primary` (orange solid) | white | `opacity-90` |
| `secondary` | `--body-text` (dark) | white | `opacity-90` |
| `ghost` | transparent | `--body-text` | `text-(--primary)` |
| `outline` | white | `--body-text` | `border-(--primary) text-(--primary)` |

---

### `PrimaryGradientButton` — `src/components/ui/Button.tsx`

Convenience export for the orange gradient CTA pill (`--primary-gr`).

```tsx
import { PrimaryGradientButton } from '@/components'

<PrimaryGradientButton onClick={() => window.open('https://app.youmii.ch')}>
  Download App
</PrimaryGradientButton>

// Full width on mobile
<PrimaryGradientButton className="w-full sm:w-auto">
  Download App
</PrimaryGradientButton>
```

Accepts all `<button>` HTML attributes plus `className`. Does not support `as="a"` — use `<Button as="a">` with the primary gradient applied manually if you need a link.

---

### `CtaBanner` — `src/components/ui/CtaBanner.tsx`

Reusable CTA section banner. All content is prop-driven — no hardcoded copy.

```tsx
import { CtaBanner } from '@/components'

// Minimal
<CtaBanner headline="Ready to find your table?" />

// Full
<CtaBanner
  badge="Your Table is Waiting"
  badgeIcon={sparkIconSrc}
  headline="Discover. Match. Reserve."
  description="Download Youmii free and find your next great restaurant in Bern, Zurich, or Basel — tonight."
  buttonLabel="Download App"
  buttonHref="https://app.youmii.ch"
/>

// With click handler
<CtaBanner
  headline="Join the waitlist"
  buttonLabel="Get Early Access"
  onButtonClick={() => openModal()}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `badge` | `string` | `'Your Table is Waiting'` | Pill label above headline |
| `badgeIcon` | `string` | `undefined` | Local asset `src` string for badge icon — import the file first |
| `headline` | `string` | **required** | Main `<h2>` content |
| `description` | `string` | `undefined` | Supporting paragraph |
| `buttonLabel` | `string` | `'Download App'` | CTA button text |
| `buttonHref` | `string` | `undefined` | Renders as `<a>` when set |
| `onButtonClick` | `() => void` | `undefined` | Click handler (button mode) |
| `className` | `string` | `''` | Extra classes on the wrapper |

The banner background uses `var(--cta-gr)` via an inline style (the only permitted exception — see rule 0.2).

---

### `Header` — `src/components/layout/Header.tsx`

Sticky top navigation. One design — no variants. The component **is** the design.

- Logo from local asset imports (Figma vector PNGs)
- Nav links as a pill (desktop) / drawer (mobile)
- Language switcher
- "Download App" gradient CTA

**Do not add `variant`, `shape`, or `layout` props.** If the header design changes, update the component directly.

Nav links are defined inline. When the list grows or needs to be shared, extract to a `src/config/nav.ts` file.

---

### `Footer` — `src/components/layout/Footer.tsx`

Full-width footer. One design — no variants.

- `<CtaBanner>` at the top (passes content via props)
- Brand block: logo + tagline
- Four-column nav grid (2-col on mobile, 4-col on `sm:+`)
- Brand block + nav stack vertically on mobile, sit side-by-side on `md:+`
- Divider
- Copyright + social icon row (stacked/reversed on mobile, inline on `sm:+`)
- Uses `shadow-foot` on the inner content card

Footer link data is defined as a `const` inside the file. When it needs to be shared or CMS-driven, extract to `src/config/footer.ts`.

---

## 6. Styling Rules (Detailed)

### Always

- Use Tailwind utility classes for all layout, spacing, color, and typography.
- Use CSS variable shorthand in Tailwind: `text-(--primary)`, `bg-(--card-bg)`, `border-(--grey-border)`.
- Use named shadow utilities: `shadow-nav`, `shadow-100`, etc.
- Use `rounded-full` for pill shapes, `rounded-2xl` or `rounded-[30px]` for banners.
- Use `transition-colors` or `transition-opacity` for interactive state changes.
- Pair `focus-visible:outline-2 focus-visible:outline-(--primary)` (or `focus-visible:ring-2`) on all focusable elements.

### Never

- ❌ Raw hex or OKLCH values in components (`text-[#ed5f18]`, `bg-[oklch(…)]`)
- ❌ Arbitrary Tailwind palette colors (`text-orange-500`, `bg-slate-100`)
- ❌ Arbitrary shadow values (`shadow-[0px_4px_8px_...]`)
- ❌ CSS variable verbose syntax in classes (`bg-[var(--primary)]`) — use `bg-(--primary)` instead
- ❌ Custom `<style>` blocks in component files
- ❌ Inline `style={...}` except for CSS gradient variables (the one documented exception)
- ❌ `https://www.figma.com/api/mcp/asset/...` URLs — always download to `src/assets/` and import

---

## 7. Figma → React Workflow

When implementing from a Figma design:

1. Use the Figma MCP (`get_design_context`, `get_screenshot`) to extract layout, spacing, and token values.
2. Map Figma color values to existing `:root` tokens in `src/index.css`. If a color is new, add a token first.
3. Download all image/icon assets to `src/assets/`. Never use the `figma.com/api/mcp/asset/…` URL in committed code.
4. Translate Figma output to the project's Tailwind token system — not literal pixel values.
5. Validate against the Figma screenshot at all breakpoints before marking complete.

---

## 8. What "Done" Looks Like

A change is done when **all** of the following are true:

- [ ] Component is reusable, prop-driven, typed, and accessible.
- [ ] Responsive across 360px, 640px, 768px, 1024px, 1440px.
- [ ] `npx tsc --noEmit` — zero errors.
- [ ] `npm run lint` — zero errors.
- [ ] `npm run build` — succeeds.
- [ ] No Figma MCP asset URLs in any component.
- [ ] No raw hex values or arbitrary colors in Tailwind classes.
- [ ] No inline styles except documented gradient exception.
- [ ] All interactive elements have hover, focus-visible, and active states.
- [ ] Naming, folder placement, and conventions match this document.

If any box is unchecked, the task is **not done**.

---

## 9. Hard Rules (Do Not Violate)

- ❌ Do **not** use `https://www.figma.com/api/mcp/asset/...` URLs in any committed file. Download all assets to `src/assets/` and import them.
- ❌ Do **not** write custom CSS in component files. Tailwind utilities only.
- ❌ Do **not** use inline `style={...}` except for CSS gradient variables where no static Tailwind class is possible.
- ❌ Do **not** use arbitrary Tailwind colors, hex values, or arbitrary shadow values in components.
- ❌ Do **not** use the verbose `bg-[var(--token)]` syntax — use `bg-(--token)` (Tailwind v4 shorthand).
- ❌ Do **not** add `variant`, `shape`, or `layout` props to `Header` or `Footer` unless multiple confirmed distinct designs are required. One brand = one design = the component IS the design.
- ❌ Do **not** suppress TypeScript or lint errors to ship faster.
- ❌ Do **not** declare a task complete without running all three quality gates.
- ❌ Do **not** add dark mode (`dark:` classes) — this project is light-only.
- ❌ Do **not** hardcode nav links, footer links, or site metadata strings inside layout components — externalize to config when the list has more than 3–4 items.

---

## 10. When You're Stuck

- Re-read this document and `DESIGN.md`.
- Read sibling components in the same folder — match the established pattern.
- Prefer the simpler option; complexity is the bug.
- Ask the user before introducing a new dependency, new top-level folder, or a breaking API change.

---

**Remember:** every page on this site is a chance to convert a visitor into a Youmii user. Leave the code better than you found it.
