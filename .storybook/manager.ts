/*
 * File: manager.ts
 * Project: design-system
 * Created: Friday, September 25th 2026, 8:10:00 pm
 * Last Modified: Friday, September 25th 2026, 8:10:00 pm
 * Copyright © 2026 AMDE Agência
 */

import { addons } from 'storybook/manager-api';
import { create, getPreferredColorScheme } from 'storybook/theming';
import { name, version } from '../package.json';

/**
 * Replaces the "Storybook" wordmark in the sidebar header with the package name and version.
 * The version is read from package.json at build time, so it can never drift from the
 * version that was actually published.
 *
 * `create` requires a `base`, and Storybook's own default for that is the visitor's colour
 * scheme, so reusing `getPreferredColorScheme` keeps the toggle behaving exactly as it does
 * without this file.
 */
addons.setConfig({
  theme: create({
    base: getPreferredColorScheme(),
    brandTitle: `${name} v${version}`,
  }),
});
