/*
 * File: changelog.stories.ts
 * Project: design-system
 * Created: Friday, September 25th 2026, 8:10:00 pm
 * Last Modified: Friday, September 25th 2026, 9:15:46 pm
 * Copyright © 2026 AMDE Agência
 */

import type { Meta, StoryObj } from '@storybook/angular';
import { name, version } from '../../../../package.json';

/**
 * One line of a release. `scope` is the Conventional Commits scope, shown in bold in front
 * of the text, and `hash` links to the commit on GitHub so a reader who wants the diff
 * can jump straight to it. Both are optional: a release line without a scope is fine, and
 * a section without hashes is fine too.
 *
 * Only the summary belongs here. The diff, the review conversation and the full release
 * notes live in the commits and in the GitHub release, which is why the lines below stay
 * short and why nobody should paste a paragraph into this file.
 */
interface ReleaseItem {
  scope?: string;
  text: string;
  hash?: string;
}

/**
 * A group of lines under one heading. `heading` is free text, so a release can use
 * `Features`, `Bug Fixes`, `Performance`, `BREAKING CHANGES`, or anything else that fits.
 * An empty section is never rendered — leave it out of the release instead.
 */
interface ReleaseSection {
  heading: string;
  items: ReleaseItem[];
}

/**
 * A single published version, newest first. `date` is optional: an entry without one is
 * the unreleased work in progress, and its heading drops the parenthesised date.
 */
interface Release {
  version: string;
  date?: string;
  sections: ReleaseSection[];
}

/**
 * The remote behind the commit links. `git remote get-url origin` is the same string, and
 * nothing reads the remote at build time, so it is written out here in one place.
 */
const REPO = 'https://github.com/raloliver/design-system';

const LINKS = {
  conventional: 'https://www.conventionalcommits.org/en/v1.0.0/',
  commits: `${REPO}/commits`,
  releases: `${REPO}/releases`,
  changelog: `${REPO}/blob/main/CHANGELOG.md`,
};

/**
 * Newest release first. To cut one, prepend the entry, bump `version` in `package.json`,
 * and tag — the summary here is a digest of that release, not a second changelog.
 */
const RELEASES: Release[] = [
  {
    version: '0.1.0',
    date: '2026-09-25',
    sections: [
      {
        heading: 'Features',
        items: [
          {
            scope: 'button',
            text: 'Atom with 7 variants, 4 sizes, 17 inline icons, and loading and disabled states.',
            hash: 'bdfc8b8',
          },
          {
            scope: 'tokens',
            text: 'Tailwind v4 with 50 oklch() colours across 5 families, declared in a @theme block.',
            hash: '2dbcb3c',
          },
          {
            scope: 'storybook',
            text: 'Catalogue with 24 button stories, a Welcome dashboard, and this Change Log page.',
            hash: '0321c20',
          },
          {
            scope: 'docs',
            text: 'Compodoc writes documentation.json and feeds the docs addon.',
            hash: '67d15f4',
          },
        ],
      },
      {
        heading: 'Bug Fixes',
        items: [
          {
            scope: 'button',
            text: 'Replaced the hand-written CSS with Tailwind classes, dropping the hard-coded colour.',
            hash: '3121662',
          },
        ],
      },
    ],
  },
];

const meta: Meta = {
  title: 'Changelog',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'One entry per release, a line per change, scoped the way a Conventional Commit is. This page is a digest only: the diff behind every line is one click away on its commit, and the long-form notes live in `CHANGELOG.md` and in the release description. To add a release, prepend it to `RELEASES` in this file, bump `version` in `package.json`, then tag and publish.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Releases: Story = {
  render: () => ({
    props: {
      name,
      version,
      releases: RELEASES,
      links: LINKS,
      commitUrl: (hash: string) => `${REPO}/commit/${hash}`,
    },
    template: `
      <div class="min-h-full bg-white font-sans text-slate-900 antialiased">
        <div class="mx-auto max-w-3xl px-10 py-14">
          <header>
            <h1 class="text-4xl font-bold tracking-tight text-primary-900">Change Log</h1>
            <p class="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600">
              Every release of <code class="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs">{{ name }}</code>,
              one line per change. Scopes and headings follow
              <a class="text-primary-600 underline underline-offset-2" [href]="links.conventional" target="_blank"
                rel="noreferrer">Conventional Commits</a>, and every line links to the commit behind it. For the
              diff and the full notes, read the
              <a class="text-primary-600 underline underline-offset-2" [href]="links.commits" target="_blank" rel="noreferrer"
                >commit history</a
              >
              or the
              <a class="text-primary-600 underline underline-offset-2" [href]="links.releases" target="_blank" rel="noreferrer"
                >release notes</a
              >.
            </p>
          </header>

          @for (release of releases; track release.version) {
            <section class="mt-12">
              <h2 class="text-2xl font-bold">
                <span class="text-primary-600">{{ release.version }}</span>
                @if (release.date) {
                  &ngsp;<span class="text-primary-900">({{ release.date }})</span>
                }
              </h2>

              @for (section of release.sections; track section.heading) {
                <div class="mt-6">
                  <h3 class="text-base font-semibold text-violet-700">{{ section.heading }}</h3>
                  <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                    @for (item of section.items; track item.text) {
                      <li>
                        @if (item.scope) {
                          <span class="font-semibold text-slate-900">{{ item.scope }}:</span>&ngsp;
                        }
                        {{ item.text }}
                        @if (item.hash) {
                          &ngsp;<a
                            class="font-mono text-xs text-primary-600 underline underline-offset-2"
                            [href]="commitUrl(item.hash)"
                            target="_blank"
                            rel="noreferrer"
                            >{{ item.hash }}</a
                          >
                        }
                      </li>
                    }
                  </ul>
                </div>
              }
            </section>
          }

          <footer class="mt-16 border-t border-slate-200 pt-6 text-xs leading-relaxed text-slate-400">
            <p>
              This page is a summary of the published versions, currently
              <span class="font-mono">v{{ version }}</span> in package.json. The long-form notes are in
              <a class="text-slate-500 underline underline-offset-2" [href]="links.changelog" target="_blank" rel="noreferrer"
                >CHANGELOG.md</a
              >.
            </p>
          </footer>
        </div>
      </div>
    `,
  }),
};
