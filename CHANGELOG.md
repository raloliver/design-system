# Changelog

All notable changes to `@amde/design-system` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> **Do not edit released sections.** Move anything new into `## [Unreleased]`. A release is made by
> renaming that heading to the new version, setting the date, bumping `version` in `package.json`,
> and tagging. This file is the single source of truth — the Storybook **Changelog** page and the
> npm package page both render it, so never keep a second copy of the notes anywhere else.

## [Unreleased]

Nothing yet. Add new work here as `-` bullets grouped under `### Added`, `### Changed`,
`### Fixed`, `### Deprecated`, or `### Removed`.

## [0.1.0] - 2026-09-25

First release. Ships the Button atom, the design token layer, and the Storybook catalogue.

### Added

- **Button atom** (`app-button`) with 7 variants (`primary`, `secondary`, `outline`, `info`,
  `danger`, `success`, `warning`) and 4 sizes (`sm`, `md`, `lg`, `xl`).
- Signal-based API: 9 inputs via `input()` / `input.required()` and 1 output via `output()`. No
  decorators, no `NgModule`, `OnPush` throughout.
- `loading` state with an inline spinner, `aria-busy`, and event suppression.
- `disabled` state with the native `disabled` attribute mirrored to `aria-disabled`.
- `fullWidth` mode.
- 17 built-in inline SVG icons (`plus`, `minus`, `check`, `x`, `close`, `arrow-right`, `arrow-left`,
  `download`, `upload`, `trash`, `edit`, `eye`, `heart`, `star`, `search`, `menu`, `settings`) with
  `left` / `right` placement. Unknown names fall back to `plus`.
- Design token layer: 50 `oklch()` colour tokens across 5 families (`primary`, `secondary`, `danger`,
  `success`, `warning`), 10 steps each, defined in a Tailwind v4 `@theme` block.
- Storybook 10.6 catalogue: 25 stories, `autodocs`, and the a11y / docs / links addons. Compodoc runs
  automatically and feeds the docs addon's source tabs.
- 24 Button stories covering every variant, size, icon position, icon-only, disabled, loading,
  submit/reset, full width, and four composed patterns.
- A Welcome page acting as a project dashboard: stack, component inventory, all colour swatches,
  conventions, commands, and known gaps.
- A Changelog page that renders this file.
- Version surfaced in the Storybook UI, read from `package.json` — no duplicated version string.

### Accessibility

- Visible focus ring per variant via `focus:ring-2` + `focus:ring-offset-2`.
- Full keyboard and form participation, since the component renders a native `<button>`.
- `button.scss` honours `prefers-reduced-motion: reduce` and `prefers-contrast: high`.

### Known issues

- The `Button` class is exported without the `Component` suffix, and `ButtonVariant` / `ButtonSize`
  are not exported, so consumers cannot type a variant string.
- The selector prefix is `app-`, an application convention that will collide with a host app's own
  `app-*` selectors.
- `dark:` classes on the `secondary` variant resolve to `prefers-color-scheme` because no
  `@custom-variant dark` is registered, so dark mode cannot be toggled or previewed.
- `aria-label` is bound directly to `label` with no fallback, so `label=""` yields an empty
  accessible name on icon-only buttons.
- The package is not yet consumable from npm: no `ng-packagr` build, no `public-api.ts` entry point,
  and no `exports` map.

[Unreleased]: https://github.com/raloliver/design-system/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/raloliver/design-system/releases/tag/v0.1.0
