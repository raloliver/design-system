/*
 * File: main.ts
 * Project: design-system
 * Created: Friday, September 25th 2026, 5:56:17 pm
 * Last Modified: Friday, September 25th 2026, 7:07:25 pm
 * Copyright © 2026 AMDE Agência
 */

import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-links'],
  framework: '@storybook/angular',
};
export default config;
