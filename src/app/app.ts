/*
 * File: app.ts
 * Project: design-system
 * Created: Friday, August 28th 2026, 9:20:44 am
 * Last Modified: Friday, September 25th 2026, 12:49:29 pm
 * Copyright © 2026 AMDE Agência
 */

import { Component, signal } from '@angular/core';
import { Button } from './atoms/button/button';

@Component({
  selector: 'app-root',
  imports: [Button],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('design-system');
}
