import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-bg pt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p class="text-xl text-white/70 mb-8">
            Get in touch to discuss your Smart Hotels project
          </p>
        </div>
        
        <div class="mt-20 text-center">
          <p class="text-white/60">Contact page coming soon...</p>
          <a routerLink="/" class="text-primary hover:text-primary/80 mt-4 inline-block">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {}
