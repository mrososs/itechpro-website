import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-bg pt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
            Team Member
          </h1>
          <p class="text-xl text-white/70 mb-8">
            Individual team member profile
          </p>
        </div>
        
        <div class="mt-20 text-center">
          <p class="text-white/60">Team detail page coming soon...</p>
          <a routerLink="/team" class="text-primary hover:text-primary/80 mt-4 inline-block">
            ← Back to Team
          </a>
        </div>
      </div>
    </div>
  `
})
export class TeamDetailComponent {}
