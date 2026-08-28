/*
 * File: app.ts
 * Project: design-system
 * Created: Friday, August 28th 2026, 9:20:44 am
 * Last Modified: Friday, August 28th 2026, 9:45:09 am
 * Copyright © 2026 AMDE Agência
 */

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('design-system');
}
