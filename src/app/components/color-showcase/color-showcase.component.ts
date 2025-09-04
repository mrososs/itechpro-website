import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="color-showcase-container p-8 bg-surface rounded-2xl">
      <h2 class="text-3xl font-bold text-white mb-8 text-center">
        New Color Scheme Showcase
      </h2>

      <!-- Primary Blue Colors -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-white mb-4">
          Primary Blue Palette
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div
            class="color-card bg-blue-primary text-white p-4 rounded-lg text-center"
          >
            <div class="font-mono text-sm">#0098ee</div>
            <div class="text-xs mt-1">blue-primary</div>
          </div>
          <div
            class="color-card bg-blue-secondary text-white p-4 rounded-lg text-center"
          >
            <div class="font-mono text-sm">#0197ec</div>
            <div class="text-xs mt-1">blue-secondary</div>
          </div>
          <div
            class="color-card bg-blue-tertiary text-white p-4 rounded-lg text-center"
          >
            <div class="font-mono text-sm">#0098ec</div>
            <div class="text-xs mt-1">blue-tertiary</div>
          </div>
          <div
            class="color-card bg-blue-quaternary text-white p-4 rounded-lg text-center"
          >
            <div class="font-mono text-sm">#0099ec</div>
            <div class="text-xs mt-1">blue-quaternary</div>
          </div>
          <div
            class="color-card bg-blue-quinary text-white p-4 rounded-lg text-center"
          >
            <div class="font-mono text-sm">#0296ec</div>
            <div class="text-xs mt-1">blue-quinary</div>
          </div>
        </div>
      </div>

      <!-- Green Accent -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-white mb-4">Green Accent</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            class="color-card bg-green-accent text-black p-4 rounded-lg text-center"
          >
            <div class="font-mono text-sm">#00f042</div>
            <div class="text-xs mt-1">green-accent</div>
          </div>
          <div
            class="color-card bg-green-500 text-white p-4 rounded-lg text-center"
          >
            <div class="font-mono text-sm">#00f042</div>
            <div class="text-xs mt-1">green-500</div>
          </div>
          <div
            class="color-card bg-green-600 text-white p-4 rounded-lg text-center"
          >
            <div class="font-mono text-sm">#16a34a</div>
            <div class="text-xs mt-1">green-600</div>
          </div>
        </div>
      </div>

      <!-- Gradient Examples -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-white mb-4">Gradient Examples</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            class="gradient-card bg-gradient-primary text-white p-6 rounded-lg text-center"
          >
            <h4 class="text-lg font-semibold mb-2">Primary Gradient</h4>
            <p class="text-sm opacity-90">blue-primary to blue-secondary</p>
          </div>
          <div
            class="gradient-card bg-gradient-secondary text-white p-6 rounded-lg text-center"
          >
            <h4 class="text-lg font-semibold mb-2">Secondary Gradient</h4>
            <p class="text-sm opacity-90">green-accent to blue-primary</p>
          </div>
          <div
            class="gradient-card bg-gradient-blue text-white p-6 rounded-lg text-center"
          >
            <h4 class="text-lg font-semibold mb-2">Blue Gradient</h4>
            <p class="text-sm opacity-90">blue-primary to blue-quaternary</p>
          </div>
          <div
            class="gradient-card bg-gradient-mixed text-white p-6 rounded-lg text-center"
          >
            <h4 class="text-lg font-semibold mb-2">Mixed Gradient</h4>
            <p class="text-sm opacity-90">blue-primary to green-accent</p>
          </div>
        </div>
      </div>

      <!-- Text Gradient Examples -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-white mb-4">
          Text Gradient Examples
        </h3>
        <div class="space-y-4">
          <h1 class="text-4xl font-bold gradient-text-primary">
            Primary Gradient Text
          </h1>
          <h2 class="text-3xl font-bold gradient-text-secondary">
            Secondary Gradient Text
          </h2>
          <h3 class="text-2xl font-bold gradient-text-blue">
            Blue Gradient Text
          </h3>
          <h4 class="text-xl font-bold gradient-text-accent">
            Accent Gradient Text
          </h4>
        </div>
      </div>

      <!-- Button Examples -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-white mb-4">Button Examples</h3>
        <div class="flex flex-wrap gap-4">
          <button
            class="px-6 py-3 bg-blue-primary text-white rounded-lg hover:bg-blue-secondary transition-colors"
          >
            Primary Button
          </button>
          <button
            class="px-6 py-3 bg-green-accent text-black rounded-lg hover:bg-green-600 hover:text-white transition-colors"
          >
            Secondary Button
          </button>
          <button
            class="px-6 py-3 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Gradient Button
          </button>
          <button
            class="px-6 py-3 border-2 border-blue-primary text-blue-primary rounded-lg hover:bg-blue-primary hover:text-white transition-all"
          >
            Outline Button
          </button>
        </div>
      </div>

      <!-- Shadow Examples -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-white mb-4">Shadow Examples</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-6 bg-surface rounded-lg shadow-glow-primary">
            <h4 class="text-lg font-semibold text-white mb-2">Primary Glow</h4>
            <p class="text-white/70">shadow-glow-primary class</p>
          </div>
          <div class="p-6 bg-surface rounded-lg shadow-glow-secondary">
            <h4 class="text-lg font-semibold text-white mb-2">
              Secondary Glow
            </h4>
            <p class="text-white/70">shadow-glow-secondary class</p>
          </div>
        </div>
      </div>

      <!-- Background Pattern Examples -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-white mb-4">
          Background Pattern Examples
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-6 rounded-lg bg-pattern-blue">
            <h4 class="text-lg font-semibold text-white mb-2">Blue Pattern</h4>
            <p class="text-white/70">bg-pattern-blue class</p>
          </div>
          <div class="p-6 rounded-lg bg-pattern-green">
            <h4 class="text-lg font-semibold text-white mb-2">Green Pattern</h4>
            <p class="text-white/70">bg-pattern-green class</p>
          </div>
        </div>
      </div>

      <!-- Usage Instructions -->
      <div class="bg-bg/50 p-6 rounded-lg border border-blue-primary/20">
        <h3 class="text-xl font-semibold text-white mb-4">
          How to Use These Colors
        </h3>
        <div class="space-y-3 text-white/80">
          <p>
            <strong>Tailwind Classes:</strong> Use classes like
            <code class="bg-surface px-2 py-1 rounded text-blue-primary"
              >bg-blue-primary</code
            >,
            <code class="bg-surface px-2 py-1 rounded text-green-accent"
              >text-green-accent</code
            >
          </p>
          <p>
            <strong>CSS Variables:</strong> Use
            <code class="bg-surface px-2 py-1 rounded text-blue-primary"
              >var(--color-primary)</code
            >
            in custom CSS
          </p>
          <p>
            <strong>Gradients:</strong> Use classes like
            <code class="bg-surface px-2 py-1 rounded text-blue-primary"
              >gradient-text-primary</code
            >,
            <code class="bg-surface px-2 py-1 rounded text-blue-primary"
              >bg-gradient-mixed</code
            >
          </p>
          <p>
            <strong>Shadows:</strong> Use classes like
            <code class="bg-surface px-2 py-1 rounded text-blue-primary"
              >shadow-glow-primary</code
            >,
            <code class="bg-surface px-2 py-1 rounded text-blue-primary"
              >shadow-glow-secondary</code
            >
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .color-card {
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .color-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      }

      .gradient-card {
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .gradient-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      }

      code {
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
      }
    `,
  ],
})
export class ColorShowcaseComponent {}
