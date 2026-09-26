/*
 * File: typings.d.ts
 * Project: design-system
 * Created: Friday, September 25th 2026, 8:45:00 pm
 * Last Modified: Friday, September 25th 2026, 8:45:00 pm
 * Copyright © 2026 AMDE Agência
 */

/**
 * Storybook's webpack config maps `.md` to `asset/source`, so a markdown import
 * resolves to its raw text at build time, ready to be parsed by `marked` or rendered as
 * plain text. The Change Log page is a summary and keeps its own data, so it does not
 * import markdown; this stays for any page that wants to render a file verbatim rather
 * than restate it. Declared here, in src/, rather than only in .storybook/ so that editors
 * resolving a project for src/stories/ see it too.
 */
declare module '*.md' {
  const content: string;
  export default content;
}
