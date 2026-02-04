import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-bg pt-16 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span class="gradient-text-primary">Team Member</span>
          </h1>
          <p class="text-xl text-white/70 mb-8">
            Individual team member profile
          </p>
        </div>

        <div
          class="mt-20 text-center glass-panel p-10 rounded-3xl max-w-2xl mx-auto border border-white/5"
        >
          <div
            class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <i class="pi pi-user text-gold text-2xl"></i>
          </div>
          <p class="text-white/60 text-lg mb-6">
            Team detail page coming soon...
          </p>
          <a
            routerLink="/team"
            class="text-gold hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <i class="pi pi-arrow-left"></i> Back to Team
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .glass-panel {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
      }
    `,
  ],
})
export class TeamDetailComponent {}
