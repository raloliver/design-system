import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Component

A versatile button component with multiple variants, sizes, and states. Built with Tailwind CSS for consistent styling and accessibility.

## Features
- **7 Variants**: Primary, Secondary, Outline, Info, Danger, Success, Warning
- **4 Sizes**: Small, Medium, Large, Extra Large
- **Icon Support**: Left or right positioned icons with 20+ built-in icons
- **Loading State**: Built-in loading spinner with disabled state
- **Full Width**: Optional full-width button for forms
- **Accessibility**: ARIA labels, disabled states, and keyboard navigation
- **Type Support**: Button, Submit, Reset types

## Usage
\`\`\`html
<app-button 
  label="Click me" 
  variant="primary" 
  size="md"
  (pressed)="onButtonClick($event)">
</app-button>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The text content of the button',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'info', 'danger', 'success', 'warning'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width',
    },
    icon: {
      control: 'select',
      options: [
        'plus',
        'minus',
        'check',
        'x',
        'arrow-right',
        'arrow-left',
        'download',
        'upload',
        'trash',
        'edit',
        'eye',
        'heart',
        'star',
        'search',
        'menu',
        'close',
        'settings',
      ],
      description: 'Icon name to display in the button',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to the text',
    },
    pressed: {
      description: 'Event emitted when button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
    pressed: () => console.log('Primary button clicked'),
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
    pressed: () => console.log('Secondary button clicked'),
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
    size: 'md',
    pressed: () => console.log('Outline button clicked'),
  },
};

export const Info: Story = {
  args: {
    label: 'Info Button',
    variant: 'info',
    size: 'md',
    pressed: () => console.log('Info button clicked'),
  },
};

export const Danger: Story = {
  args: {
    label: 'Delete Item',
    variant: 'danger',
    size: 'md',
    pressed: () => console.log('Danger button clicked'),
  },
};

export const Success: Story = {
  args: {
    label: 'Save Changes',
    variant: 'success',
    size: 'md',
    pressed: () => console.log('Success button clicked'),
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Action',
    variant: 'warning',
    size: 'md',
    pressed: () => console.log('Warning button clicked'),
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'sm',
    pressed: () => console.log('Small button clicked'),
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    variant: 'primary',
    size: 'md',
    pressed: () => console.log('Medium button clicked'),
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'lg',
    pressed: () => console.log('Large button clicked'),
  },
};

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large Button',
    variant: 'primary',
    size: 'xl',
    pressed: () => console.log('Extra large button clicked'),
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Add Item',
    variant: 'primary',
    size: 'md',
    icon: 'plus',
    iconPosition: 'left',
    pressed: () => console.log('Button with left icon clicked'),
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Continue',
    variant: 'primary',
    size: 'md',
    icon: 'arrow-right',
    iconPosition: 'right',
    pressed: () => console.log('Button with right icon clicked'),
  },
};

export const IconOnly: Story = {
  args: {
    label: '',
    variant: 'info',
    size: 'md',
    icon: 'settings',
    pressed: () => console.log('Icon only button clicked'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Icon-only button for compact interfaces. The label is empty but aria-label is still set for accessibility.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
    pressed: () => console.log('Disabled button clicked (should not fire)'),
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    variant: 'primary',
    size: 'md',
    loading: true,
    pressed: () => console.log('Loading button clicked (should not fire)'),
  },
};

export const LoadingWithIcon: Story = {
  args: {
    label: 'Saving',
    variant: 'success',
    size: 'md',
    icon: 'check',
    loading: true,
    pressed: () => console.log('Loading button with icon clicked (should not fire)'),
  },
};

export const SubmitButton: Story = {
  args: {
    label: 'Submit Form',
    variant: 'primary',
    size: 'md',
    type: 'submit',
    pressed: () => console.log('Submit button clicked'),
  },
};

export const ResetButton: Story = {
  args: {
    label: 'Reset Form',
    variant: 'secondary',
    size: 'md',
    type: 'reset',
    pressed: () => console.log('Reset button clicked'),
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    variant: 'primary',
    size: 'md',
    fullWidth: true,
    pressed: () => console.log('Full width button clicked'),
  },
  parameters: {
    layout: 'padded',
  },
};

export const SaveAndCancel: Story = {
  render: () => ({
    template: `
      <div class="flex gap-3">
        <app-button 
          label="Cancel" 
          variant="secondary" 
          size="md"
          (pressed)="onCancel()">
        </app-button>
        <app-button 
          label="Save Changes" 
          variant="primary" 
          size="md"
          (pressed)="onSave()">
        </app-button>
      </div>
    `,
    props: {
      onCancel: () => console.log('Cancel clicked'),
      onSave: () => console.log('Save clicked'),
    },
  }),
  parameters: {
    docs: {
      description: {
        story: 'Common pattern for form actions with Cancel and Save buttons.',
      },
    },
  },
};

export const ActionButtons: Story = {
  render: () => ({
    template: `
      <div class="flex gap-2">
        <app-button 
          label="Edit" 
          variant="outline" 
          size="sm"
          icon="edit"
          iconPosition="left"
          (pressed)="onEdit()">
        </app-button>
        <app-button 
          label="Delete" 
          variant="danger" 
          size="sm"
          icon="trash"
          iconPosition="left"
          (pressed)="onDelete()">
        </app-button>
        <app-button 
          label="View" 
          variant="info" 
          size="sm"
          icon="eye"
          iconPosition="left"
          (pressed)="onView()">
        </app-button>
      </div>
    `,
    props: {
      onEdit: () => console.log('Edit clicked'),
      onDelete: () => console.log('Delete clicked'),
      onView: () => console.log('View clicked'),
    },
  }),
  parameters: {
    docs: {
      description: {
        story: 'Common action buttons for data tables and lists.',
      },
    },
  },
};

export const SizeComparison: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <span class="w-16 text-sm text-gray-600">Small:</span>
          <app-button label="Small" variant="primary" size="sm" (pressed)="onClick()"></app-button>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-16 text-sm text-gray-600">Medium:</span>
          <app-button label="Medium" variant="primary" size="md" (pressed)="onClick()"></app-button>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-16 text-sm text-gray-600">Large:</span>
          <app-button label="Large" variant="primary" size="lg" (pressed)="onClick()"></app-button>
        </div>
        <div class="flex items-center gap-4">
          <span class="w-16 text-sm text-gray-600">XL:</span>
          <app-button label="Extra Large" variant="primary" size="xl" (pressed)="onClick()"></app-button>
        </div>
      </div>
    `,
    props: {
      onClick: () => console.log('Size comparison button clicked'),
    },
  }),
  parameters: {
    docs: {
      description: {
        story: 'Visual comparison of all button sizes.',
      },
    },
  },
};

export const VariantShowcase: Story = {
  render: () => ({
    template: `
      <div class="grid grid-cols-2 gap-4">
        <app-button label="Primary" variant="primary" size="md" (pressed)="onClick()"></app-button>
        <app-button label="Secondary" variant="secondary" size="md" (pressed)="onClick()"></app-button>
        <app-button label="Outline" variant="outline" size="md" (pressed)="onClick()"></app-button>
        <app-button label="Info" variant="info" size="md" (pressed)="onClick()"></app-button>
        <app-button label="Danger" variant="danger" size="md" (pressed)="onClick()"></app-button>
        <app-button label="Success" variant="success" size="md" (pressed)="onClick()"></app-button>
        <app-button label="Warning" variant="warning" size="md" (pressed)="onClick()"></app-button>
      </div>
    `,
    props: {
      onClick: () => console.log('Variant showcase button clicked'),
    },
  }),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all button variants.',
      },
    },
  },
};
