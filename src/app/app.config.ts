/*
 * File: app.config.ts
 * Project: design-system
 * Created: Friday, August 28th 2026, 9:20:44 am
 * Last Modified: Friday, August 28th 2026, 9:45:19 am
 * Copyright © 2026 AMDE Agência
 */

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes)],
};
