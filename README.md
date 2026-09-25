# @amde/design-system

An Angular design system built with Tailwind CSS v4, published as a standalone npm package.

Component library, design tokens, and a Storybook catalogue for building consistent product
interfaces at [AMDE Agência](https://github.com/raloliver/design-system).

[![Angular](https://img.shields.io/badge/Angular-21.2- DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Storybook](https://img.shields.io/badge/Storybook-10.6-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![npm](https://img.shields.io/badge/npm-@amde/design-system-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## Status

> **Pre-release — not yet on npm.**
> The package is under active development and has not been published. The install command below
> is the intended public contract. See [Roadmap to publication](#roadmap-to-publication) for the
> work still required before `npm install @amde/design-system` resolves.

|            |                                            |
| ---------- | ------------------------------------------ |
| Version    | `0.0.0` (unpublished)                      |
| Angular    | 21.2 (peer range)                          |
| Components | 1 documented (`Button`) — more in progress |
| Tokens     | 50 colour tokens across 5 families         |
| Stories    | 25 across 2 files                          |
| Tests      | Not yet configured                         |

---

## Stack

| Layer           | Choice                                    | Notes                                                                                   |
| --------------- | ----------------------------------------- | --------------------------------------------------------------------------------------- |
| Framework       | **Angular 21.2**                          | Standalone components, signal APIs, zoneless (no `zone.js`)                             |
| Component model | Standalone + `OnPush`                     | No `NgModule`s anywhere in the library                                                  |
| State           | Signal APIs                               | `input()`, `input.required()`, `output()`, `computed()` — no decorators                 |
| Language        | **TypeScript 5.9**                        | `strict`, `strictTemplates`, `noImplicitOverride`, `noPropertyAccessFromIndexSignature` |
| Styling         | **Tailwind CSS 4.3**                      | CSS-first config via `@theme` — there is no `tailwind.config.js`                        |
| Build           | `@angular/build` (esbuild)                | `module: preserve`, `target: ES2022`                                                    |
| Catalogue       | **Storybook 10.6** (`@storybook/angular`) | Addons: a11y, docs, links                                                               |
| API docs        | **Compodoc 2.0**                          | Auto-generated to `documentation.json`, consumed by the Storybook docs addon            |
| Package manager | npm 10.8                                  | `packageManager` pinned                                                                 |
| Editor          | Prettier 3.8 + EditorConfig               | `printWidth: 100`, single quotes, 2-space indent                                        |

Deliberate non-choices, for now: no `zone.js`, no NgModule, no Karma/Jasmine (the `test` target uses
the Angular `@angular/build:unit-test` builder, which resolves **Vitest** by default).

---

## Installation

```bash
npm install @amde/design-system
```

### Peer dependencies

`@amde/design-system` declares Angular as peers, so it never installs its own copy and always
dedupes against the host application's version.

```json
{
  "peerDependencies": {
    "@angular/common": ">=21.0.0 <22.0.0",
    "@angular/core": ">=21.0.0 <22.0.0"
  }
}
```

Your application also needs Tailwind CSS v4, since the components ship Tailwind utility classes
rather than pre-compiled CSS:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

See [Tailwind's Angular install guide](https://tailwindcss.com/docs/installation/framework-guides/angular).

---

## Quick start

### 1. Import the theme

The design tokens are shipped as a stylesheet entry point. Add it once, globally, so every
`--color-*` token is available:

```scss
/* styles.scss */
@use '@amde/design-system/theme.css';
```

This emits the `@theme` layer, the Tailwind base layer, and the utility layer. It must be a global
stylesheet — not a component style — so the generated utilities are visible to every component.

### 2. Use a component

All components are standalone, so import them directly. No module to register.

```ts
import { Component } from '@angular/core';
import { Button } from '@amde/design-system';

@Component({
  selector: 'app-demo',
  imports: [Button],
  template: `
    <app-button
      label="Save changes"
      variant="primary"
      size="md"
      icon="check"
      iconPosition="left"
      (pressed)="onSave()"
    ></app-button>
  `,
})
export class Demo {
  onSave() {
    // handle click
  }
}
```

### 3. Point Storybook at your components

```json
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mjs)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/angular',
};

export default config;
```

```ts
// .storybook/preview.ts
import '../src/styles.scss';
```

---

## Components

### `Button`

Selector: `<app-button>` · Export: `Button` · Standalone · `OnPush` · Signal inputs

Renders a native `<button>` with seven colour variants, four sizes, an optional leading or trailing
inline SVG icon, a loading spinner, a disabled state, and a full-width mode. Icons are inlined as
SVG paths — no icon-font or runtime dependency.

```ts
import { Button } from '@amde/design-system';
```

#### Inputs

| Input          | Type                                                                                    | Default      | Description                                                                  |
| -------------- | --------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------- |
| `label`        | `string`                                                                                | _(required)_ | Visible text. Also bound to `aria-label`.                                    |
| `type`         | `'button' \| 'submit' \| 'reset'`                                                       | `'button'`   | Native button type.                                                          |
| `variant`      | `'primary' \| 'secondary' \| 'outline' \| 'info' \| 'danger' \| 'success' \| 'warning'` | `'primary'`  | Colour treatment.                                                            |
| `size`         | `'sm' \| 'md' \| 'lg' \| 'xl'`                                                          | `'md'`       | Padding, font size, icon size, and gap scale together.                       |
| `disabled`     | `boolean`                                                                               | `false`      | Disables the button and suppresses `pressed`.                                |
| `loading`      | `boolean`                                                                               | `false`      | Shows a spinner, sets `aria-busy`, hides the icon, and suppresses `pressed`. |
| `fullWidth`    | `boolean`                                                                               | `false`      | Stretches the button to the container width.                                 |
| `icon`         | `string`                                                                                | `''`         | Name of a built-in icon. Unknown names fall back to `plus`.                  |
| `iconPosition` | `'left' \| 'right'`                                                                     | `'left'`     | Which side the icon sits on.                                                 |

#### Outputs

| Output    | Payload      | Description                                                              |
| --------- | ------------ | ------------------------------------------------------------------------ |
| `pressed` | `MouseEvent` | Emitted on click. **Not** emitted while `disabled` or `loading` is true. |

#### Built-in icons

17 names, all stroke-based 24×24 paths rendered at `currentColor`:

`plus` · `minus` · `check` · `x` · `close` · `arrow-right` · `arrow-left` · `download` · `upload` ·
`trash` · `edit` · `eye` · `heart` · `star` · `search` · `menu` · `settings`

#### Variants

| Variant     | Treatment                                                                          |
| ----------- | ---------------------------------------------------------------------------------- |
| `primary`   | Gradient `--color-primary-500 → 700`, white text, filled focus ring                |
| `secondary` | Gradient `--color-secondary-50 → 100`, dark text, **includes `dark:` classes**     |
| `outline`   | Transparent, `--color-primary-600` border and text, tints on hover                 |
| `info`      | Transparent, neutral `--color-secondary-*` text, tints on hover                    |
| `danger`    | Gradient `--color-danger-500 → 600`, white text                                    |
| `success`   | Gradient `--color-success-500 → 600`, white text                                   |
| `warning`   | Gradient `--color-warning-500 → 600`, white text, `--color-warning-400` focus ring |

#### Examples

```html
<!-- Destructive action -->
<app-button label="Delete item" variant="danger" icon="trash" iconPosition="left"></app-button>

<!-- Async submit -->
<app-button
  label="Saving"
  type="submit"
  variant="success"
  icon="check"
  [loading]="isSaving()"
  fullWidth
></app-button>

<!-- Disabled -->
<app-button label="Unavailable" [disabled]="true"></app-button>

<!-- Icon-only. Pass a real label: it doubles as the accessible name. -->
<app-button label="Open settings" icon="settings" variant="info"></app-button>
```

#### Accessibility

- Renders a real `<button>`, so keyboard activation, focus order, and form submission work natively.
- `aria-disabled` and the native `disabled` attribute are kept in sync.
- `aria-busy="true"` is set while `loading`.
- Focus is visible via `focus:ring-2` + `focus:ring-offset-2`, ring colour per variant.
- `button.scss` honours `prefers-reduced-motion: reduce` (spinner and transitions disabled) and
  `prefers-contrast: high` (borders thickened to 2px with a currentColor outline).

> **Known issue — icon-only buttons.** `aria-label` is bound directly to `label`, with no fallback.
> Passing `label=""` emits `aria-label=""`, which leaves the button with an empty accessible name.
> Always pass a non-empty `label`, even when it is visually hidden by your own CSS.

---

## Design tokens

Tokens are defined in a single Tailwind v4 `@theme` block, so every token is simultaneously a CSS
custom property and a generated utility. There is no JavaScript config file and no runtime token
object.

```scss
@use 'tailwindcss';

@theme {
  --color-primary-500: oklch(62.3% 0.214 259.815);
}
```

The token above automatically gives you `bg-primary-500`, `text-primary-500`,
`border-primary-500`, and `var(--color-primary-500)` in plain CSS.

### Colour families

Five families, ten steps each (`50` through `900`), 50 tokens total, all authored in `oklch()` for
perceptually uniform ramps.

| Family      | Role                                      | Steps                                                      |
| ----------- | ----------------------------------------- | ---------------------------------------------------------- |
| `primary`   | Brand actions, links, focus rings         | `50` `100` `200` `300` `400` `500` `600` `700` `800` `900` |
| `secondary` | Surfaces, neutral actions, secondary text | `50` … `900`                                               |
| `danger`    | Destructive and irreversible actions      | `50` … `900`                                               |
| `success`   | Confirmations and positive outcomes       | `50` … `900`                                               |
| `warning`   | Caution states                            | `50` … `900`                                               |

### Extending the theme

Import the library theme first, then override or add tokens in your own `@theme` block. Because both
blocks are the same cascade layer, your values win.

```scss
@use '@amde/design-system/theme.css';

@theme {
  --color-brand-500: oklch(55% 0.2 300);
  --color-primary-500: oklch(55% 0.2 300); /* rebrand primary */
}
```

### Theming notes

- **Spacing, radius, typography, shadows, and breakpoints are not yet tokenised** and still resolve
  to Tailwind's defaults. Adding `--spacing-*`, `--radius-*`, `--font-*`, `--text-*`, and
  `--shadow-*` tokens is on the roadmap.
- **Dark mode is partially wired.** The `secondary` variant uses `dark:` classes, but no
  `@custom-variant dark` is defined, so they currently compile to `prefers-color-scheme` media
  queries and cannot be toggled manually or previewed in Storybook. Register the custom variant to
  take control:

  ```scss
  @custom-variant dark (&:where(.dark, .dark *));
  ```

- Tailwind v4 only emits the theme variables that a generated utility actually references, so
  unused steps are pruned from the build output even though they remain declared in source.

---

## Project structure

```
design-system/
├── .storybook/                  # Storybook config (webpack5 builder + Compodoc wiring)
├── public/                      # Static assets copied verbatim
├── src/
│   ├── styles.scss              # Tailwind import + the entire @theme token block
│   ├── index.html
│   ├── main.ts                  # bootstrapApplication(App, appConfig)
│   ├── app/                     # Dev playground application
│   │   ├── app.ts / .html       # Root shell + live component gallery
│   │   ├── app.config.ts        # provideBrowserGlobalErrorListeners, provideRouter
│   │   ├── app.routes.ts        # empty — reserved for gallery pages
│   │   └── atoms/
│   │       └── button/          # button.ts, button.html, button.scss
│   └── stories/
│       ├── components/buttons/  # button.stories.ts
│       └── pages/welcome/       # welcome.stories.ts — project status dashboard
├── angular.json                 # build, serve, test, storybook targets
├── tsconfig*.json               # strict TS + Angular compiler options
└── documentation.json           # Compodoc output, consumed by Storybook docs
```

Components follow an **atomic** taxonomy, mirroring Brad Frost's classification:

| Tier      | Location             | Definition                             | Status      |
| --------- | -------------------- | -------------------------------------- | ----------- |
| Atoms     | `src/app/atoms/`     | Cannot be broken down further          | `Button`    |
| Molecules | `src/app/molecules/` | Composition of 2–3 atoms               | Not started |
| Organisms | `src/app/organisms/` | Composed sections with their own state | Not started |

---

## Development

### Prerequisites

- Node.js 20+
- npm 10.8 (`npm@10.8.2` is pinned via `packageManager`)

```bash
npm install
```

### Scripts

| Script                    | Command                                        | What it does                                                          |
| ------------------------- | ---------------------------------------------- | --------------------------------------------------------------------- |
| `npm start`               | `ng serve`                                     | Dev server with the live component gallery on `http://localhost:4200` |
| `npm run build`           | `ng build`                                     | Production build into `dist/design-system`                            |
| `npm run watch`           | `ng build --watch --configuration development` | Incremental unoptimized rebuild                                       |
| `npm test`                | `ng test`                                      | Unit tests via `@angular/build:unit-test` (Vitest) — **no specs yet** |
| `npm run storybook`       | `ng run design-system:storybook`               | Storybook on `http://localhost:6006`                                  |
| `npm run build-storybook` | `ng run design-system:build-storybook`         | Static Storybook into `storybook-static/`                             |
| `npm run ng`              | `ng`                                           | Pass-through to the Angular CLI                                       |

Both Storybook targets run **Compodoc** first and write `documentation.json` to the repo root, so
the Storybook docs addon picks up source and description tabs automatically.

### The dev playground

`npm start` serves a live gallery at `http://localhost:4200` covering all four button sizes, the
loading state, all seven variants, and all seventeen icons. It is the fastest way to eyeball a
change without opening Storybook.

### Storybook

```bash
npm run storybook
```

- **Welcome** story is a project dashboard: stack, component inventory, every colour swatch, the
  coding conventions, available commands, and a list of known gaps.
- **Atoms/Button** documents all 24 stories — one per variant and size, icon placement, icon-only,
  disabled, loading, submit/reset, full width, plus composed patterns (`SaveAndCancel`,
  `ActionButtons`, `SizeComparison`, `VariantShowcase`).
- `@storybook/addon-a11y` is registered, so every story is scanned in the a11y panel.

### Type checking

`tsconfig.json` is strict across the board — `strict`, `strictTemplates`, `noImplicitOverride`,
`noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`,
`isolatedModules`. `ng build` type-checks the stories too, so Storybook files are held to the same
standard as the library.

### Formatting

Prettier with `printWidth: 100`, `singleQuote: true`, and the `angular` parser for `.html`.

```bash
npx prettier --write .
```

---

## Conventions

1. **Signals, not decorators.** Use `input()`, `input.required()`, `output()`, and `computed()`. No
   `@Input`, `@Output`, or `ngOnChanges` in new components.
2. **`OnPush` everywhere.** Every component sets `changeDetection: ChangeDetectionStrategy.OnPush`.
3. **Standalone only.** No `NgModule`. List dependencies in the component's `imports` array.
4. **Tailwind classes in the component, tokens in `styles.scss`.** Variant and size styling is
   driven by `Record<Variant, string[]>` lookup maps, not `@Input`-driven conditionals. Never hardcode
   a colour that already exists as a token.
5. **No `tailwind.config.js`.** Tailwind v4 is configured CSS-first via `@theme`.
6. **Class names do not need the `app-` prefix** in a consuming app — Angular's emulated
   encapsulation scopes component styles automatically.
7. **Suppress events when inactive.** Guard `output.emit()` behind a computed `isInactive` so
   `disabled` and `loading` never fire.
8. **Keyboard and motion are not optional.** Every interactive component needs a visible focus ring,
   a real ARIA mapping, and `prefers-reduced-motion` handling.
9. **Storybook is part of done.** A new component ships with `autodocs`, an `argTypes` table, and
   stories for every variant.

---

## Roadmap to publication

Everything below is required before `npm publish` will succeed. Items are ordered roughly by
dependency.

### Packaging

- [ ] Add `ng-packagr` and a `library` project target to `angular.json` (currently
      `"projectType": "application"`)
- [ ] Create `ng-package.json` with a `dest` and an allow-list of entry points
- [ ] Add a `public-api.ts` barrel — there is **no** public entry point today, so nothing is
      importable from the package root
- [ ] Replace `"private": true` and the placeholder `"version": "0.0.0"`
- [ ] Add `peerDependencies` for `@angular/core` and `@angular/common`; move the Angular packages
      from `dependencies` to `peerDependencies`
- [ ] Add `exports`, `main`, `module`, `types`, `sideEffects`, `files`, and `publishConfig` to
      `package.json`
- [ ] Expose the stylesheet as a subpath export (`@amde/design-system/theme.css`) so the `@theme`
      tokens are reachable
- [ ] Add `LICENSE` (MIT), `CHANGELOG.md`, and `CONTRIBUTING.md`
- [ ] Add `repository`, `bugs`, `homepage`, `keywords`, `author`, `description`, and `engines` fields
- [ ] Exclude `documentation.json` (54 KB of generated output) from the published tarball

### API quality

- [ ] Export the `ButtonVariant` and `ButtonSize` types — they are currently module-local, so
      consumers cannot type a variant string
- [ ] Decide on the selector prefix: `app-` is an application convention and will collide with the
      host app's own `app-*` selectors. `amde-` or `ds-` is the safer default
- [ ] Rename `Button` → `ButtonComponent` to follow the Angular naming convention
- [ ] Move components out of `src/app/` into a library-appropriate path

### Gaps in the current implementation

- [ ] **Dark mode** — add `@custom-variant dark` and add a Storybook background/global decorator so
      the `secondary` variant's `dark:` classes can actually be previewed
- [ ] **Icon-only accessibility** — add a fallback so an empty `label` cannot produce an empty
      accessible name
- [ ] **Tokens** — add `--spacing-*`, `--radius-*`, `--font-*`, `--text-*`, and `--shadow-*` so the
      design system is fully self-describing rather than half Tailwind-default
- [ ] **Tests** — no spec files exist. Add Vitest and cover the disabled/loading event-suppression
      and the variant/size class maps
- [ ] **Storybook test runner** — `@storybook/test-runner` and interaction tests, so a11y and
      behaviour are asserted rather than only displayed
- [ ] **Linting** — no ESLint configuration in the repo yet
- [ ] **CI** — no GitHub Actions workflow; build, test, and storybook should gate every push
- [ ] **Molecules and organisms** — the `molecules/` and `organisms/` tiers do not exist yet

---

## Contributing

Contributions are welcome. Please read the [Conventions](#conventions) section first — they are
enforced by code review, not tooling.

1. Fork the repository and create a feature branch.
2. Add or update the component under the correct atomic tier.
3. Register every variant, size, and state in Storybook with `autodocs`.
4. Run `npm run build` to verify strict type checking and template type checking pass.
5. Run `npx prettier --write .` and open a pull request describing the change and its rationale.

Component commits follow the pattern `Atom Button: <what changed and why>`. Stories and docs
commits use `Storybook <what was documented>`.

---

## License

MIT © 2026 AMDE Agência

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
