/*
 * File: welcome.stories.ts
 * Project: design-system
 * Created: Friday, September 25th 2026, 7:07:25 pm
 * Last Modified: Friday, September 25th 2026, 7:29:30 pm
 * Copyright © 2026 AMDE Agência
 */

import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from '../../../app/atoms/button/button';
import { name, version } from '../../../../package.json';

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Landing page for the design-system catalogue. Everything on it is generated from the real project setup: `package.json` versions, the `@theme` tokens in `src/styles.scss`, and the component inventory.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const STACK = [
  { label: 'Package', value: `${name} v${version}`, detail: 'read from package.json' },
  { label: 'Framework', value: 'Angular 21.2', detail: 'standalone, signals, zoneless-ready' },
  { label: 'Language', value: 'TypeScript 5.9', detail: 'strict mode' },
  { label: 'Styling', value: 'Tailwind CSS 4.3', detail: 'CSS-first @theme, no JS config' },
  { label: 'Catalogue', value: 'Storybook 10.6', detail: 'Angular + a11y, docs & links addons' },
  { label: 'API docs', value: 'Compodoc', detail: 'documentation.json at the repo root' },
  { label: 'Package mgr', value: 'npm 10.8', detail: 'pinned via packageManager' },
];

const COMPONENTS = [
  {
    name: 'Button',
    tier: 'Atom',
    path: 'src/app/atoms/button',
    stories: 'src/stories/components/buttons',
    status: 'Documented',
    summary: '7 variants, 4 sizes, 17 inline icons, loading and disabled states.',
  },
  {
    name: 'Molecules',
    tier: 'Molecule',
    path: 'src/app/molecules',
    stories: '—',
    status: 'Not started',
    summary: 'Folder does not exist yet.',
  },
  {
    name: 'Organisms',
    tier: 'Organism',
    path: 'src/app/organisms',
    stories: '—',
    status: 'Not started',
    summary: 'Folder does not exist yet.',
  },
];

const FAMILIES = [
  {
    name: 'primary',
    role: 'Brand actions, links, focus rings',
    steps: [
      'bg-primary-50',
      'bg-primary-100',
      'bg-primary-200',
      'bg-primary-300',
      'bg-primary-400',
      'bg-primary-500',
      'bg-primary-600',
      'bg-primary-700',
      'bg-primary-800',
      'bg-primary-900',
    ],
  },
  {
    name: 'secondary',
    role: 'Surfaces, neutral actions, dark-mode aware',
    steps: [
      'bg-secondary-50',
      'bg-secondary-100',
      'bg-secondary-200',
      'bg-secondary-300',
      'bg-secondary-400',
      'bg-secondary-500',
      'bg-secondary-600',
      'bg-secondary-700',
      'bg-secondary-800',
      'bg-secondary-900',
    ],
  },
  {
    name: 'danger',
    role: 'Destructive and irreversible actions',
    steps: [
      'bg-danger-50',
      'bg-danger-100',
      'bg-danger-200',
      'bg-danger-300',
      'bg-danger-400',
      'bg-danger-500',
      'bg-danger-600',
      'bg-danger-700',
      'bg-danger-800',
      'bg-danger-900',
    ],
  },
  {
    name: 'success',
    role: 'Confirmations and positive outcomes',
    steps: [
      'bg-success-50',
      'bg-success-100',
      'bg-success-200',
      'bg-success-300',
      'bg-success-400',
      'bg-success-500',
      'bg-success-600',
      'bg-success-700',
      'bg-success-800',
      'bg-success-900',
    ],
  },
  {
    name: 'warning',
    role: 'Caution states that need attention',
    steps: [
      'bg-warning-50',
      'bg-warning-100',
      'bg-warning-200',
      'bg-warning-300',
      'bg-warning-400',
      'bg-warning-500',
      'bg-warning-600',
      'bg-warning-700',
      'bg-warning-800',
      'bg-warning-900',
    ],
  },
];

const COMMANDS = [
  {
    run: 'npm start',
    does: 'Dev server on http://localhost:4200 with the live component gallery in src/app/app.html.',
  },
  {
    run: 'npm run storybook',
    does: 'This catalogue on http://localhost:6006 (ng run design-system:storybook).',
  },
  {
    run: 'npm run build-storybook',
    does: 'Static export to storybook-static/, with Compodoc running first.',
  },
  { run: 'npm test', does: 'Unit tests via the @angular/build:unit-test builder.' },
];

const CONVENTIONS = [
  {
    title: 'Code and stories are separated',
    body: 'Component code sits in src/app/<tier>/<name>/ as name.ts, name.html and name.scss. Stories live apart, in src/stories/components/<name>/, so the catalogue never ships inside a component folder. The story title still mirrors the tier, e.g. Atoms/Button.',
  },
  {
    title: 'File header block',
    body: 'Every source file opens with a File / Project / Created / Last Modified / Copyright header. Keep it updated when you edit a file.',
  },
  {
    title: 'Signals all the way down',
    body: 'input(), input.required(), output() and computed() instead of decorators. OnPush change detection, and protected members unless a consumer needs them.',
  },
  {
    title: 'Styling through Tailwind classes',
    body: 'Variants and sizes are plain class-name maps in the component, so every state is visible in one place. Component SCSS is reserved for interaction polish and media queries.',
  },
  {
    title: 'Tokens live in CSS',
    body: 'There is no tailwind.config.js. Colours are declared once in the @theme block of src/styles.scss, which is what generates the utility classes used here.',
  },
  {
    title: 'Documentation is generated',
    body: 'Compodoc writes documentation.json from the sources, and .storybook/preview.ts feeds it to the docs addon, so arg tables stay in sync with the code.',
  },
];

const GAPS = [
  'Only Atoms/Button exists so far. The molecules and organisms tiers are still empty.',
  'There is no lint, format or CI script in package.json, so nothing enforces the conventions on this page automatically.',
  'No story test runner is installed, so the disabled and loading stories are not asserted — their handlers only log.',
  'Dark mode is only half wired: secondary defines dark: classes, but styles.scss has no @custom-variant dark, so it resolves to prefers-color-scheme and cannot be previewed.',
  'Icon-only buttons render aria-label="" because the template binds aria-label to the label input with no fallback. The catalogue documents this as accessible; it is not.',
];

export const Home: Story = {
  render: () => ({
    moduleMetadata: {
      imports: [Button],
    },
    props: {
      stack: STACK,
      components: COMPONENTS,
      families: FAMILIES,
      commands: COMMANDS,
      conventions: CONVENTIONS,
      gaps: GAPS,
      onPressed: () => console.log('[design-system] welcome page: pressed output received'),
    },
    template: `
      <div class="min-h-full bg-white font-sans text-slate-900 antialiased">
        <div class="mx-auto max-w-5xl px-10 py-14">
          <header class="border-b border-slate-200 pb-12">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
              Angular Design System
            </p>
            <h1 class="mt-4 text-5xl font-bold tracking-tight">design-system</h1>
            <p class="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              A living catalogue of UI atoms for AMDE. Every component ships as a standalone Angular
              component with Tailwind CSS v4 tokens, and every component documents itself here.
            </p>
            <div class="mt-8 flex flex-wrap items-center gap-3">
              <app-button
                label="Browse Atoms/Button"
                variant="primary"
                size="lg"
                icon="arrow-right"
                iconPosition="right"
                (pressed)="onPressed()"
              ></app-button>
              <app-button label="Outline" variant="outline" size="lg"></app-button>
              <app-button label="Disabled" variant="secondary" size="lg" [disabled]="true"></app-button>
              <app-button label="Loading" variant="primary" size="lg" [loading]="true"></app-button>
            </div>
            <p class="mt-4 text-xs text-slate-400">
              The four buttons above are live instances of Atoms/Button. Click one and watch the
              console.
            </p>
          </header>

          <section class="py-12">
            <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Stack</h2>
            <div class="mt-6 grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-3">
              @for (item of stack; track item.label) {
                <div>
                  <p class="text-sm font-semibold text-slate-900">{{ item.value }}</p>
                  <p class="text-xs text-slate-500">{{ item.label }}</p>
                  <p class="mt-1 text-xs text-slate-400">{{ item.detail }}</p>
                </div>
              }
            </div>
          </section>

          <section class="border-t border-slate-200 py-12">
            <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Components</h2>
            <div class="mt-6 overflow-hidden rounded-lg border border-slate-200">
              <table class="w-full border-collapse text-left text-sm">
                <thead class="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th class="px-4 py-3 font-semibold">Component</th>
                    <th class="px-4 py-3 font-semibold">Tier</th>
                    <th class="px-4 py-3 font-semibold">Component source</th>
                    <th class="px-4 py-3 font-semibold">Story file</th>
                    <th class="px-4 py-3 font-semibold">Status</th>
                    <th class="px-4 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  @for (component of components; track component.name) {
                    <tr class="border-t border-slate-200 align-top">
                      <td class="px-4 py-3 font-semibold text-slate-900">{{ component.name }}</td>
                      <td class="px-4 py-3 text-slate-600">{{ component.tier }}</td>
                      <td class="px-4 py-3 font-mono text-xs text-slate-500">{{ component.path }}</td>
                      <td class="px-4 py-3 font-mono text-xs text-slate-500">
                        {{ component.stories }}
                      </td>
                      <td class="px-4 py-3">
                        @if (component.status === 'Documented') {
                          <span
                            class="rounded-full bg-success-100 px-2 py-0.5 text-xs font-medium text-success-800"
                          >
                            {{ component.status }}
                          </span>
                        } @else {
                          <span
                            class="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500"
                          >
                            {{ component.status }}
                          </span>
                        }
                      </td>
                      <td class="px-4 py-3 text-slate-600">{{ component.summary }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
            <p class="mt-3 text-xs text-slate-400">
              Component code lives under <code class="rounded bg-slate-100 px-1 py-0.5 font-mono">src/app/&lt;tier&gt;/&lt;name&gt;/</code>
              and its stories under
              <code class="rounded bg-slate-100 px-1 py-0.5 font-mono">src/stories/components/&lt;name&gt;/</code>.
            </p>
          </section>

          <section class="border-t border-slate-200 py-12">
            <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Design tokens
            </h2>
            <p class="mt-4 max-w-2xl text-sm text-slate-600">
              Fifty colour tokens: five families of ten steps, all in
              <code class="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs">oklch()</code>. They are
              declared in the <code class="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs">&#64;theme</code>
              block of <code class="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs">src/styles.scss</code>
              and exposed to Tailwind as the <code class="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs">--color-*</code>
              variables you see below.
            </p>
            <div class="mt-8 space-y-6">
              @for (family of families; track family.name) {
                <div>
                  <div class="flex items-baseline justify-between">
                    <p class="font-mono text-sm font-semibold text-slate-900">{{ family.name }}</p>
                    <p class="text-xs text-slate-400">{{ family.role }}</p>
                  </div>
                  <div class="mt-2 flex overflow-hidden rounded-md">
                    @for (step of family.steps; track step) {
                      <div class="h-12 flex-1" [class]="step" [title]="step"></div>
                    }
                  </div>
                  <div class="mt-1 flex font-mono text-[10px] text-slate-400">
                    @for (step of family.steps; track step) {
                      <span class="flex-1 text-center">{{ $index * 100 + 50 }}</span>
                    }
                  </div>
                </div>
              }
            </div>
          </section>

          <section class="border-t border-slate-200 py-12">
            <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Conventions
            </h2>
            <div class="mt-6 grid gap-8 md:grid-cols-2">
              @for (item of conventions; track item.title) {
                <div>
                  <p class="text-sm font-semibold text-slate-900">{{ item.title }}</p>
                  <p class="mt-1 text-sm leading-relaxed text-slate-600">{{ item.body }}</p>
                </div>
              }
            </div>
          </section>

          <section class="border-t border-slate-200 py-12">
            <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Commands</h2>
            <div class="mt-6 space-y-4">
              @for (command of commands; track command.run) {
                <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <code
                    class="w-64 shrink-0 rounded bg-slate-900 px-3 py-1.5 font-mono text-xs text-slate-100"
                  >
                    {{ command.run }}
                  </code>
                  <p class="text-sm text-slate-600">{{ command.does }}</p>
                </div>
              }
            </div>
          </section>

          <section class="border-t border-slate-200 py-12">
            <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Current gaps
            </h2>
            <ul class="mt-6 space-y-3">
              @for (gap of gaps; track gap) {
                <li class="flex gap-3 text-sm text-slate-600">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warning-500"></span>
                  <span>{{ gap }}</span>
                </li>
              }
            </ul>
          </section>

          <footer class="border-t border-slate-200 pt-8 text-xs text-slate-400">
            <p>Copyright &copy; 2026 AMDE Ag&ecirc;ncia. Maintained with Storybook and Compodoc.</p>
          </footer>
        </div>
      </div>
    `,
  }),
};
