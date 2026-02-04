import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div
      class="min-h-screen bg-bg pt-16 relative overflow-hidden flex items-center justify-center"
    >
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div
          class="text-center glass-panel p-16 rounded-3xl border border-white/5"
        >
          <h1 class="text-4xl lg:text-7xl font-bold text-white mb-6">
            Our <span class="gradient-text-primary">Projects</span>
          </h1>
          <p class="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
            Showcasing our work in Smart Hotels, Web Development, and IoT
            Solutions.
          </p>
          <p class="text-gold font-bold tracking-widest uppercase mb-8">
            Coming Soon
          </p>

          <div class="mt-8">
            <a
              routerLink="/"
              class="inline-flex items-center text-white/60 hover:text-gold transition-colors duration-300"
            >
              <i class="pi pi-arrow-left mr-2"></i> Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProjectsComponent {}
