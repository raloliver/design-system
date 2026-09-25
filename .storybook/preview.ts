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
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Welcome'],
      },
    },
  },
};

export default preview;
