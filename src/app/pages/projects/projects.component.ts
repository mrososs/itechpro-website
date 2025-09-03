import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-bg pt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our Projects
          </h1>
          <p class="text-xl text-white/70 mb-8">
            Showcasing our work in Smart Hotels, Web Development, and IoT Solutions
          </p>
        </div>
        
        <div class="mt-20 text-center">
          <p class="text-white/60">Projects page coming soon...</p>
          <a routerLink="/" class="text-primary hover:text-primary/80 mt-4 inline-block">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  `
})
export class ProjectsComponent {}
