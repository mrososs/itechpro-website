import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ContentService, SmartHotels } from '../../services/content.service';
import { GsapRevealDirective } from '../../directives/gsap-reveal.directive';
import { GsapParallaxDirective } from '../../directives/gsap-parallax.directive';

@Component({
  selector: 'app-smart-hotels',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonModule,
    CardModule,
    GsapRevealDirective,
    GsapParallaxDirective,
  ],
  template: `
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg via-surface to-bg pt-16"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-blue-primary/10 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-green-accent/10 rounded-full blur-3xl"
        ></div>
      </div>

      <div
        class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <h1
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span class="text-blue-primary">{{
            smartHotelsData?.hero?.title || 'Smart Hotels Suite'
          }}</span>
        </h1>

        <p
          gsapReveal="slide-up"
          [delay]="0.4"
          class="text-xl sm:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          {{
            smartHotelsData?.hero?.subtitle ||
              'Websites & Booking • PMS • Digital Keys • IoT • Analytics & More'
          }}
        </p>

        <div gsapReveal="slide-up" [delay]="0.6">
          <p-button
            label="{{ smartHotelsData?.hero?.cta || 'Book a discovery call' }}"
            icon="pi pi-calendar"
            severity="primary"
            [rounded]="true"
            [outlined]="false"
            routerLink="/contact"
            class="text-lg px-8 py-4"
          >
          </p-button>
        </div>
      </div>
    </section>

    <!-- Split Section: For Hotels vs For Guests -->
    <section class="py-20 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- For Hotels -->
          <div gsapReveal="slide-up">
            <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8">
              For <span class="text-primary">Hotels</span>
            </h2>
            <div class="space-y-6">
              <div
                *ngFor="let benefit of smartHotelsData?.forHotels"
                class="flex items-start space-x-4"
              >
                <div
                  class="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"
                ></div>
                <span class="text-white/80 text-lg">{{ benefit }}</span>
              </div>
            </div>
          </div>

          <!-- For Guests -->
          <div gsapReveal="slide-up" [delay]="0.2">
            <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8">
              For <span class="text-accent">Guests</span>
            </h2>
            <div class="space-y-6">
              <div
                *ngFor="let benefit of smartHotelsData?.forGuests"
                class="flex items-start space-x-4"
              >
                <div
                  class="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"
                ></div>
                <span class="text-white/80 text-lg">{{ benefit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Complete Smart Hotels Solution
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Everything you need to transform your hotel into a smart, connected
            experience
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let feature of smartHotelsData?.features; let i = index"
            gsapReveal="scale"
            [delay]="i * 0.1"
            class="feature-card group"
          >
            <div
              class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full"
            >
              <div
                class="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300"
              >
                <i class="pi pi-star text-2xl text-primary"></i>
              </div>
              <h3
                class="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300"
              >
                {{ feature.title }}
              </h3>
              <p class="text-white/70 leading-relaxed">
                {{ feature.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Device Mockups Section -->
    <section class="py-20 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            See It In Action
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Experience the future of hospitality technology
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Mobile App Mockup -->
          <div
            gsapReveal="slide-up"
            [delay]="0.1"
            gsapParallax="y"
            [speed]="0.2"
            class="device-mockup"
          >
            <div
              class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            >
              <div
                class="w-32 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl mx-auto mb-4 flex items-center justify-center"
              >
                <i class="pi pi-mobile text-4xl text-primary"></i>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Mobile App</h3>
              <p class="text-white/70 text-sm">Guest booking & room control</p>
            </div>
          </div>

          <!-- Tablet Dashboard Mockup -->
          <div
            gsapReveal="slide-up"
            [delay]="0.2"
            gsapParallax="y"
            [speed]="0.3"
            class="device-mockup"
          >
            <div
              class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            >
              <div
                class="w-48 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              >
                <i class="pi pi-tablet text-4xl text-accent"></i>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">
                Hotel Dashboard
              </h3>
              <p class="text-white/70 text-sm">
                Real-time operations & analytics
              </p>
            </div>
          </div>

          <!-- Smart Room Mockup -->
          <div
            gsapReveal="slide-up"
            [delay]="0.3"
            gsapParallax="y"
            [speed]="0.4"
            class="device-mockup"
          >
            <div
              class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            >
              <div
                class="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <i class="pi pi-home text-4xl text-primary"></i>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Smart Room</h3>
              <p class="text-white/70 text-sm">IoT automation & control</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2
          gsapReveal="slide-up"
          class="text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Ready to go smart?
        </h2>
        <p
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-xl text-white/70 mb-8"
        >
          Join the future of hospitality with ITECHPRO's Smart Hotels Suite
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <p-button
            label="Book a Demo"
            icon="pi pi-calendar"
            severity="primary"
            [rounded]="true"
            [outlined]="false"
            routerLink="/contact"
            class="text-lg px-8 py-4"
          >
          </p-button>
          <p-button
            label="View Case Studies"
            icon="pi pi-briefcase"
            severity="secondary"
            [rounded]="true"
            [outlined]="true"
            routerLink="/projects"
            class="text-lg px-8 py-4"
          >
          </p-button>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .feature-card {
        transition: all 0.3s ease;
      }

      .feature-card:hover {
        transform: translateY(-8px);
      }

      .feature-card:hover .bg-black\\/20 {
        background: rgba(0, 0, 0, 0.3) !important;
        border-color: rgba(0, 224, 255, 0.5) !important;
        box-shadow: 0 20px 40px rgba(0, 224, 255, 0.1);
      }

      .device-mockup {
        transition: all 0.3s ease;
      }

      .device-mockup:hover {
        transform: translateY(-8px);
      }

      .device-mockup:hover .bg-black\\/20 {
        background: rgba(0, 0, 0, 0.3) !important;
        border-color: rgba(0, 224, 255, 0.5) !important;
        box-shadow: 0 20px 40px rgba(0, 224, 255, 0.1);
      }
    `,
  ],
})
export class SmartHotelsComponent implements OnInit {
  private contentService = inject(ContentService);

  smartHotelsData: SmartHotels | null = null;

  ngOnInit() {
    this.loadSmartHotelsData();
  }

  private loadSmartHotelsData() {
    this.contentService.getSmartHotels().subscribe((data) => {
      this.smartHotelsData = data;
    });
  }
}
