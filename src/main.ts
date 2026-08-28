/*
 * File: main.ts
 * Project: design-system
 * Created: Friday, August 28th 2026, 9:20:44 am
 * Last Modified: Friday, August 28th 2026, 9:45:04 am
 * Copyright © 2026 AMDE Agência
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
