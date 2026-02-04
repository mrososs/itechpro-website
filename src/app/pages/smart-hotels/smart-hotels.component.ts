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
      class="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-bg pt-16"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-pattern opacity-10"></div>

      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg"
      ></div>

      <div
        class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <h1
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span class="gradient-text-primary">{{
            smartHotelsData?.hero?.title || 'Hospitality Intelligence Suite'
          }}</span>
        </h1>

        <p
          gsapReveal="slide-up"
          [delay]="0.4"
          class="text-xl sm:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
        >
          {{
            smartHotelsData?.hero?.subtitle ||
              'Websites & Booking • PMS Integration • Digital Keys • Business Analytics • Staff Mobility'
          }}
        </p>

        <div gsapReveal="slide-up" [delay]="0.6">
          <p-button
            label="{{ smartHotelsData?.hero?.cta || 'Book a discovery call' }}"
            icon="pi pi-calendar"
            severity="primary"
            [rounded]="false"
            [outlined]="false"
            routerLink="/contact"
            class="enhanced-primary-button"
            styleClass="text-lg px-8 py-4 uppercase tracking-widest font-bold"
          >
          </p-button>
        </div>
      </div>
    </section>

    <!-- Split Section: For Hotels vs For Guests -->
    <section class="py-20 bg-surface relative">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- For Hotels -->
          <div
            gsapReveal="slide-up"
            class="glass-panel p-8 rounded-3xl border border-white/5"
          >
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-8">
              For <span class="gradient-text-primary">Hotels</span>
            </h2>
            <div class="space-y-6">
              <div
                *ngFor="let benefit of smartHotelsData?.forHotels"
                class="flex items-start space-x-4"
              >
                <div
                  class="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0 box-glow"
                ></div>
                <span class="text-white/80 text-lg">{{ benefit }}</span>
              </div>
            </div>
          </div>

          <!-- For Guests -->
          <div
            gsapReveal="slide-up"
            [delay]="0.2"
            class="glass-panel p-8 rounded-3xl border border-white/5"
          >
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-8">
              For <span class="gradient-text-primary">Guests</span>
            </h2>
            <div class="space-y-6">
              <div
                *ngFor="let benefit of smartHotelsData?.forGuests"
                class="flex items-start space-x-4"
              >
                <div
                  class="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"
                ></div>
                <span class="text-white/80 text-lg">{{ benefit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 bg-bg relative">
      <div
        class="absolute inset-0 bg-gradient-to-r from-bg to-surface opacity-50"
      ></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Complete Management Solution
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Everything you need to transform your hotel into a high-performance,
            data-driven business
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let feature of smartHotelsData?.features; let i = index"
            gsapReveal="scale"
            [delay]="i * 0.1"
            class="feature-card group h-full"
          >
            <div
              class="glass-hover bg-surface/30 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 hover:shadow-glow h-full flex flex-col"
            >
              <div
                class="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors duration-300 icon-glow"
              >
                <i class="pi pi-star text-2xl text-gold"></i>
              </div>
              <h3
                class="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300"
              >
                {{ feature.title }}
              </h3>
              <p class="text-white/60 leading-relaxed text-sm">
                {{ feature.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Device Mockups Section -->
    <section class="py-32 bg-surface relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20">
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
            [speed]="0.1"
            class="device-mockup h-full"
          >
            <div
              class="bg-surface/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 text-center h-full hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div class="flex-grow flex items-center justify-center mb-6">
                <div
                  class="w-32 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl flex items-center justify-center border border-white/10"
                >
                  <i class="pi pi-mobile text-5xl text-blue-400"></i>
                </div>
              </div>
              <div class="mt-auto">
                <h3 class="text-lg font-bold text-white mb-2">Mobile App</h3>
                <p class="text-white/60 text-sm">
                  Guest booking & room control
                </p>
              </div>
            </div>
          </div>

          <!-- Tablet Dashboard Mockup -->
          <div
            gsapReveal="slide-up"
            [delay]="0.2"
            gsapParallax="y"
            [speed]="0.2"
            class="device-mockup h-full"
          >
            <div
              class="bg-surface/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 text-center h-full hover:border-green-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div class="flex-grow flex items-center justify-center mb-6">
                <!-- Wrapper to ensure height matches phone interaction if needed, or just center -->
                <!-- We force a min-height container to align with the phone's 64 height visual if they are side by side? 
                     Actually, just centering nicely in flex-grow space works best for responsive. 
                     But the user complained about alignment. Let's make the container h-64 to match. -->
                <div class="h-64 flex items-center justify-center">
                  <div
                    class="w-48 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl flex items-center justify-center border border-white/10"
                  >
                    <i class="pi pi-tablet text-5xl text-green-400"></i>
                  </div>
                </div>
              </div>
              <div class="mt-auto">
                <h3 class="text-lg font-bold text-white mb-2">
                  Hotel Dashboard
                </h3>
                <p class="text-white/60 text-sm">
                  Real-time operations & analytics
                </p>
              </div>
            </div>
          </div>

          <!-- Staff Mobile Mockup -->
          <div
            gsapReveal="slide-up"
            [delay]="0.3"
            gsapParallax="y"
            [speed]="0.3"
            class="device-mockup h-full"
          >
            <div
              class="bg-surface/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 text-center h-full hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div class="flex-grow flex items-center justify-center mb-6">
                <div
                  class="w-32 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl flex items-center justify-center border border-white/10"
                >
                  <i class="pi pi-users text-5xl text-blue-400"></i>
                </div>
              </div>
              <div class="mt-auto">
                <h3 class="text-lg font-bold text-white mb-2">
                  Staff Operations
                </h3>
                <p class="text-white/60 text-sm">Housekeeping & Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 bg-gradient-to-r from-bg via-surface to-bg relative">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <div
        class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <h2
          gsapReveal="slide-up"
          class="text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Ready to optimize
          <span class="gradient-text-primary">operations?</span>
        </h2>
        <p
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-xl text-white/70 mb-10"
        >
          Join the future of hospitality with ITECHPRO's Intelligence Suite
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <p-button
            label="Book a Demo"
            icon="pi pi-calendar"
            severity="primary"
            [rounded]="false"
            [outlined]="false"
            routerLink="/contact"
            class="enhanced-primary-button"
            styleClass="uppercase tracking-widest font-bold px-8 py-4"
          >
          </p-button>
          <p-button
            label="View Case Studies"
            icon="pi pi-briefcase"
            severity="secondary"
            [rounded]="false"
            [outlined]="true"
            routerLink="/projects"
            class="enhanced-secondary-button"
            styleClass="uppercase tracking-widest font-bold px-8 py-4 bg-transparent border-white/20 text-white hover:text-gold hover:border-gold"
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
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        perspective: 1000px;
      }

      .feature-card:hover {
        transform: translateY(-8px);
      }

      .box-glow {
        box-shadow: 0 0 10px var(--color-primary);
      }

      .icon-glow {
        filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.2));
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
