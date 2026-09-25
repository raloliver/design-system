/*
 * File: button.ts
 * Project: design-system
 * Created: Friday, August 28th 2026, 9:27:01 am
 * Last Modified: Friday, September 25th 2026, 1:57:11 pm
 * Copyright © 2026 AMDE Agência
 */

import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

type ButtonVariant =
  'primary' | 'secondary' | 'outline' | 'info' | 'danger' | 'success' | 'warning';

const BASE_CLASSES = [
  'inline-flex',
  'items-center',
  'justify-center',
  'font-medium',
  'rounded-lg',
  'border',
  'transition-all',
  'duration-200',
  'ease-in-out',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
  'active:scale-95',
  'transform',
];

const SIZE_CLASSES: Record<ButtonSize, string[]> = {
  sm: ['px-3', 'py-1.5', 'text-sm', 'gap-1.5'],
  md: ['px-4', 'py-2', 'text-sm', 'gap-2'],
  lg: ['px-6', 'py-3', 'text-base', 'gap-2.5'],
  xl: ['px-8', 'py-4', 'text-lg', 'gap-3'],
};

const ICON_SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-6 h-6',
};

const VARIANT_CLASSES: Record<ButtonVariant, string[]> = {
  primary: [
    'bg-blue-600',
    'text-white',
    'border-blue-600',
    'hover:bg-blue-700',
    'hover:border-blue-700',
    'focus:ring-blue-500',
    'shadow-sm',
    'hover:shadow-md',
  ],
  secondary: [
    'bg-gray-100',
    'text-gray-900',
    'border-gray-200',
    'hover:bg-gray-200',
    'hover:border-gray-300',
    'focus:ring-gray-500',
    'shadow-sm',
    'hover:shadow-md',
  ],
  outline: [
    'bg-transparent',
    'text-blue-600',
    'border-blue-600',
    'hover:bg-blue-50',
    'hover:border-blue-700',
    'focus:ring-blue-500',
  ],
  info: [
    'bg-transparent',
    'text-gray-700',
    'border-transparent',
    'hover:bg-gray-100',
    'hover:text-gray-900',
    'focus:ring-gray-500',
  ],
  danger: [
    'bg-red-600',
    'text-white',
    'border-red-600',
    'hover:bg-red-700',
    'hover:border-red-700',
    'focus:ring-red-500',
    'shadow-sm',
    'hover:shadow-md',
  ],
  success: [
    'bg-green-600',
    'text-white',
    'border-green-600',
    'hover:bg-green-700',
    'hover:border-green-700',
    'focus:ring-green-500',
    'shadow-sm',
    'hover:shadow-md',
  ],
  warning: [
    'bg-yellow-500',
    'text-white',
    'border-yellow-500',
    'hover:bg-yellow-600',
    'hover:border-yellow-600',
    'focus:ring-yellow-400',
    'shadow-sm',
    'hover:shadow-md',
  ],
};

const ICON_PATHS: Record<string, string> = {
  plus: 'M12 4v16m8-8H4',
  minus: 'M20 12H4',
  check: 'M5 13l4 4L19 7',
  x: 'M6 18L18 6M6 6l12 12',
  'arrow-right': 'M17 8l4 4m0 0l-4 4m4-4H3',
  'arrow-left': 'M7 16l-4-4m0 0l4-4m-4 4h18',
  download: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
  upload: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
  trash:
    'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
  edit: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  heart:
    'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 18L18 6M6 6l12 12',
  settings:
    'M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5',
};

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  public readonly label = input.required<string>();
  public readonly type = input<'button' | 'submit' | 'reset'>('button');
  public readonly variant = input<ButtonVariant>('primary');
  public readonly size = input<ButtonSize>('md');
  public readonly disabled = input(false);
  public readonly loading = input(false);
  public readonly fullWidth = input(false);
  public readonly icon = input('');
  public readonly iconPosition = input<'left' | 'right'>('left');

  public readonly pressed = output<MouseEvent>();

  protected readonly isInactive = computed(() => this.disabled() || this.loading());

  protected readonly showLeftIcon = computed(
    () => !!this.icon() && this.iconPosition() === 'left' && !this.loading(),
  );

  protected readonly showRightIcon = computed(
    () => !!this.icon() && this.iconPosition() === 'right' && !this.loading(),
  );

  protected readonly classes = computed(() =>
    [
      ...BASE_CLASSES,
      ...SIZE_CLASSES[this.size()],
      ...VARIANT_CLASSES[this.variant()],
      this.fullWidth() ? 'w-full' : '',
    ]
      .filter(Boolean)
      .join(' '),
  );

  protected readonly iconClasses = computed(() => ICON_SIZE_CLASSES[this.size()]);

  protected onClick(e: MouseEvent) {
    if (!this.isInactive()) {
      this.pressed.emit(e);
    }
  }

  protected getIconPath(iconName: string): string {
    return ICON_PATHS[iconName] ?? ICON_PATHS['plus'];
  }
}
