/*
 * File: preview.ts
 * Project: design-system
 * Created: Friday, September 25th 2026, 5:56:17 pm
 * Last Modified: Friday, September 25th 2026, 7:07:25 pm
 * Copyright © 2026 AMDE Agência
 */

import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { name, version } from '../package.json';
setCompodocJson(docJson);

/**
 * Exposed as a parameter so the Welcome and Changelog pages can render the version without
 * importing package.json themselves. The sidebar wordmark reads the same value in
 * .storybook/manager.ts, so there is exactly one source of truth: package.json.
 */
const preview: Preview = {
  parameters: {
    package: { name, version },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Welcome', 'Changelog'],
      },
    },
  },
};

export default preview;
