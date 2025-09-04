# New Color Scheme Implementation Guide

## Overview

This project now uses a new color scheme based on the provided color palette. The colors have been integrated into both Tailwind CSS configuration and global CSS variables for maximum flexibility.

## Color Palette

### Primary Blue Colors

- **blue-primary**: `#0098ee` - Main brand color
- **blue-secondary**: `#0197ec` - Light variant
- **blue-tertiary**: `#0098ec` - Medium variant
- **blue-quaternary**: `#0099ec` - Dark variant
- **blue-quinary**: `#0296ec` - Darkest variant

### Green Accent

- **green-accent**: `#00f042` - Primary accent color

## Usage Methods

### 1. Tailwind CSS Classes

#### Background Colors

```html
<div class="bg-blue-primary">Primary Blue Background</div>
<div class="bg-blue-secondary">Secondary Blue Background</div>
<div class="bg-green-accent">Green Accent Background</div>
```

#### Text Colors

```html
<h1 class="text-blue-primary">Primary Blue Text</h1>
<h2 class="text-green-accent">Green Accent Text</h2>
```

#### Border Colors

```html
<div class="border border-blue-primary">Primary Blue Border</div>
<div class="border-2 border-green-accent">Green Accent Border</div>
```

### 2. CSS Variables

#### In Component Styles

```css
.my-component {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border-color: var(--color-border-hover);
}
```

#### In Global Styles

```css
.custom-element {
  background: var(--color-primary);
  box-shadow: 0 4px 15px var(--color-shadow-primary);
}
```

### 3. Gradient Classes

#### Text Gradients

```html
<h1 class="gradient-text-primary">Primary Gradient Text</h1>
<h2 class="gradient-text-secondary">Secondary Gradient Text</h2>
<h3 class="gradient-text-blue">Blue Gradient Text</h3>
<h4 class="gradient-text-accent">Accent Gradient Text</h4>
```

#### Background Gradients

```html
<div class="bg-gradient-primary">Primary Gradient Background</div>
<div class="bg-gradient-secondary">Secondary Gradient Background</div>
<div class="bg-gradient-blue">Blue Gradient Background</div>
<div class="bg-gradient-mixed">Mixed Gradient Background</div>
```

### 4. Shadow and Glow Effects

```html
<div class="shadow-glow-primary">Primary Glow Shadow</div>
<div class="shadow-glow-secondary">Secondary Glow Shadow</div>
<div class="shadow-glow">Default Glow Shadow</div>
<div class="shadow-glow-accent">Accent Glow Shadow</div>
```

### 5. Background Patterns

```html
<div class="bg-pattern-blue">Blue Pattern Background</div>
<div class="bg-pattern-green">Green Pattern Background</div>
<div class="bg-pattern">Default Pattern Background</div>
<div class="bg-pattern-hero">Hero Pattern Background</div>
```

### 6. Enhanced Button Classes

```html
<button class="enhanced-primary-button">Primary Enhanced Button</button>
<button class="enhanced-secondary-button">Secondary Enhanced Button</button>
<button class="enhanced-button">Default Enhanced Button</button>
```

## Component Integration Examples

### Service Card Component

```html
<div class="service-card bg-surface border border-blue-primary/20 hover:border-blue-primary/40">
  <h3 class="text-blue-primary">Service Title</h3>
  <p class="text-white/70">Service description</p>
  <button class="bg-gradient-primary text-white px-4 py-2 rounded-lg">Learn More</button>
</div>
```

### Team Card Component

```html
<div class="team-card bg-surface border border-green-accent/20 hover:border-green-accent/40">
  <h4 class="gradient-text-secondary">Team Member Name</h4>
  <p class="text-white/70">Role description</p>
</div>
```

### Hero Section

```html
<section class="bg-pattern-hero">
  <h1 class="gradient-text-primary text-6xl font-bold">Welcome to ITECHPRO</h1>
  <p class="text-white/80 text-xl">Your smart hotel technology partner</p>
  <button class="enhanced-primary-button bg-blue-primary text-white px-8 py-4 rounded-lg">Get Started</button>
</section>
```

## Color Variables Reference

### CSS Variables Available

```css
--color-primary: #0098ee
--color-primary-light: #0197ec
--color-primary-dark: #0098ec
--color-primary-darker: #0099ec
--color-primary-darkest: #0296ec
--color-secondary: #00f042
--color-accent: #0099ec
--color-accent-light: #0296ec
--color-accent-dark: #0098ec
--color-border-hover: rgba(0, 152, 238, 0.3)
--color-shadow: rgba(0, 152, 238, 0.1)
--color-shadow-accent: rgba(0, 240, 66, 0.1)
--color-shadow-primary: rgba(0, 152, 238, 0.2)
--color-shadow-secondary: rgba(0, 240, 66, 0.2)
```

## Best Practices

1. **Consistency**: Use the same color classes throughout your components
2. **Accessibility**: Ensure sufficient contrast between text and background colors
3. **Hover States**: Use the provided hover classes for interactive elements
4. **Gradients**: Use gradient classes for visual hierarchy and emphasis
5. **Shadows**: Apply glow effects sparingly for important elements

## Migration from Old Colors

If you have existing components using the old color scheme, you can update them by:

1. Replacing `bg-primary` with `bg-blue-primary`
2. Replacing `text-primary` with `text-blue-primary`
3. Replacing `border-primary` with `border-blue-primary`
4. Using the new gradient classes for enhanced visual appeal

## Testing the Color Scheme

To see all colors in action, you can use the `ColorShowcaseComponent` that demonstrates all available colors, gradients, and effects. Simply import and use it in any component to see the full color palette.
