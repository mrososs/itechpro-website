import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  ContentService,
  Service,
  TeamMember,
} from '../../services/content.service';
import { GsapRevealDirective } from '../../directives/gsap-reveal.directive';
import { GsapParallaxDirective } from '../../directives/gsap-parallax.directive';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { TeamCardComponent } from '../../components/team-card/team-card.component';
import { ScheduleConsultantDialogComponent } from '../../components/schedule-consultant-dialog/schedule-consultant-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonModule,
    CardModule,
    GsapRevealDirective,
    GsapParallaxDirective,
    ServiceCardComponent,
    TeamCardComponent,
    ScheduleConsultantDialogComponent,
  ],
  template: `
    <!-- Hero Section -->
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <!-- Video Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/70 z-10"></div>
        <!-- Gold Accent Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-primary/10 z-10"
        ></div>
        <video
          class="w-full h-full object-cover"
          autoplay
          playsinline
          muted
          loop
        >
          <source src="assets/video/itechpro.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="relative z-20 text-center w-full px-4 sm:px-6 lg:px-8">
        <span
          gsapReveal="slide-up"
          class="inline-block py-1 px-3 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-semibold tracking-widest uppercase mb-6"
        >
          Premier Software Development Firm
        </span>
        <h1
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-5xl sm:text-6xl lg:text-8xl font-bold text-white force-light-text mb-8 leading-tight tracking-tight"
        >
          Building High-End <br />
          <span class="gradient-text-logo">Web Applications</span>
        </h1>

        <p
          gsapReveal="slide-up"
          [delay]="0.4"
          class="text-xl sm:text-2xl text-white/80 force-light-text mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Specializing in Interactive Dashboards and Mission-Critical Software
          Solutions.
        </p>

        <div
          gsapReveal="slide-up"
          [delay]="0.6"
          class="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
        >
          <p-button
            label="Get Started"
            icon="pi pi-arrow-right"
            severity="primary"
            [rounded]="false"
            [outlined]="false"
            (onClick)="openScheduleDialog()"
            class="text-lg enhanced-primary-button"
            styleClass="py-5 px-10 text-xl uppercase tracking-widest font-bold"
          >
          </p-button>
          <p-button
            label="View Portfolio"
            icon="pi pi-images"
            severity="secondary"
            [rounded]="false"
            [outlined]="true"
            routerLink="/projects"
            class="text-lg enhanced-secondary-button force-light-text"
            styleClass="py-5 px-10 text-xl uppercase tracking-widest font-bold bg-white/5 backdrop-blur-sm border-white/20 hover:border-gold hover:text-gold text-white force-light-text"
          >
          </p-button>
        </div>

        <!-- Trusted By Ticker -->
        <div
          gsapReveal="fade"
          [delay]="0.8"
          class="w-full max-w-6xl mx-auto overflow-hidden relative group"
        >
          <div
            class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/80 to-transparent z-10"
          ></div>
          <div
            class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/80 to-transparent z-10"
          ></div>

          <div
            class="flex items-center gap-16 animate-scroll whitespace-nowrap py-4"
          >
            <!-- Logos Loop (Duplicated for seamless scroll) -->
            <ng-container *ngFor="let client of clients">
              <img
                [src]="client"
                class="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 client-logo"
                alt="Client Logo"
              />
            </ng-container>
            <!-- Duplicate for loop -->
            <ng-container *ngFor="let client of clients">
              <img
                [src]="client"
                class="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 client-logo"
                alt="Client Logo"
              />
            </ng-container>
            <!-- Duplicate again if list is short -->
            <ng-container *ngIf="clients.length < 5">
              <ng-container *ngFor="let client of clients">
                <img
                  [src]="client"
                  class="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 client-logo"
                  alt="Client Logo"
                />
              </ng-container>
            </ng-container>
          </div>

          <div
            *ngIf="clients.length === 0"
            class="text-white/40 text-sm uppercase tracking-widest"
          >
            Trusted by Industry Leaders
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-32 bg-bg relative">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Elite <span class="gradient-text-primary">Solutions</span>
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Bespoke technology ecosystems engineered for the world's most
            prestigious hotels.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ng-container
            *ngTemplateOutlet="
              serviceTemplate;
              context: { $implicit: services }
            "
          >
          </ng-container>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-32 bg-surface relative overflow-hidden">
      <!-- Decor -->
      <div
        class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              gsapReveal="slide-up"
              class="text-gold font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Why ITECHPRO
            </span>
            <h2
              gsapReveal="slide-up"
              class="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              The Gold Standard in <br />
              <span class="gradient-text-primary">Hotel Technology</span>
            </h2>
            <p
              gsapReveal="slide-up"
              [delay]="0.2"
              class="text-xl text-white/70 mb-10 leading-relaxed font-light"
            >
              We don't just build software; we architect experiences. As Egypt's
              premier Hotel Technology partner, we combine decades of
              operational wisdom with cutting-edge innovation to deliver systems
              that are as beautiful as they are powerful.
            </p>

            <div class="space-y-8">
              <div class="flex items-center gap-6 group">
                <div
                  class="shrink-0 w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300"
                >
                  <i class="pi pi-star text-gold text-2xl"></i>
                </div>
                <div>
                  <h4
                    class="text-white font-bold text-xl mb-1 group-hover:text-gold transition-colors"
                  >
                    Excellence Driven
                  </h4>
                  <p class="text-white/60 text-lg font-light">
                    10+ years of setting benchmarks in hospitality technology.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-6 group">
                <div
                  class="shrink-0 w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300"
                >
                  <i class="pi pi-check-circle text-gold text-2xl"></i>
                </div>
                <div>
                  <h4
                    class="text-white font-bold text-xl mb-1 group-hover:text-gold transition-colors"
                  >
                    Proven Impact
                  </h4>
                  <p class="text-white/60 text-lg font-light">
                    50+ High-end hotel implementations across the region.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-6 group">
                <div
                  class="shrink-0 w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300"
                >
                  <i class="pi pi-shield text-gold text-2xl"></i>
                </div>
                <div>
                  <h4
                    class="text-white font-bold text-xl mb-1 group-hover:text-gold transition-colors"
                  >
                    Unwavering Support
                  </h4>
                  <p class="text-white/60 text-lg font-light">
                    24/7 White-glove technical monitoring and assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div gsapParallax="y" [speed]="0.2" class="relative hidden lg:block">
            <div
              class="absolute inset-0 bg-gold/20 blur-3xl rounded-full opacity-20 transform translate-x-10 -translate-y-10"
            ></div>
            <div
              class="glass-panel rounded-3xl p-12 text-center border border-white/10 relative"
            >
              <div class="text-8xl font-bold text-gold mb-2">100%</div>
              <div
                class="text-2xl font-semibold text-white mb-6 uppercase tracking-widest"
              >
                Client Satisfaction
              </div>
              <p class="text-white/60">
                "ITECHPRO delivered beyond our wildest expectations. A true
                partner in luxury."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Preview Section -->
    <section id="team" class="py-32 bg-bg relative">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Master <span class="gradient-text-primary">Architects</span>
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/60 max-w-2xl mx-auto"
          >
            The visionaries and engineers shaping the next generation of
            hospitality.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ng-container
            *ngTemplateOutlet="
              teamTemplate;
              context: { $implicit: teamPreview }
            "
          >
          </ng-container>
        </div>

        <div class="text-center mt-16">
          <p-button
            label="Meet the Team"
            icon="pi pi-users"
            severity="secondary"
            [rounded]="false"
            [outlined]="true"
            routerLink="/team"
            class="enhanced-secondary-button"
            styleClass="uppercase tracking-widest font-bold px-10 py-4 bg-white/5 backdrop-blur-sm border-white/20 hover:border-gold hover:text-gold text-white transition-all duration-300"
          >
          </p-button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="py-32 relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-bg via-surface to-bg z-0"
      ></div>
      <div class="absolute inset-0 bg-pattern opacity-10 z-0"></div>

      <div
        class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <h2
          gsapReveal="slide-up"
          class="text-5xl lg:text-7xl font-bold text-white mb-8 leading-none"
        >
          Ready for the <br /><span class="text-gold">Next Level?</span>
        </h2>
        <p
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
        >
          Elevate your hotel's technology infrastructure with our bespoke
          solutions.
        </p>
        <p-button
          label="Start Your Journey"
          icon="pi pi-arrow-right"
          severity="primary"
          [rounded]="false"
          [outlined]="false"
          routerLink="/contact"
          class="enhanced-primary-button"
          styleClass="py-5 px-10 text-xl uppercase tracking-widest font-bold"
        >
        </p-button>
      </div>
    </section>

    <!-- Services Template -->
    <ng-template #serviceTemplate let-services>
      <ng-container
        *ngFor="let service of services; trackBy: trackByService; let i = index"
      >
        <div gsapReveal="scale" [delay]="i * 0.1">
          <app-service-card [service]="service"></app-service-card>
        </div>
      </ng-container>
    </ng-template>

    <!-- Team Template -->
    <ng-template #teamTemplate let-team>
      <ng-container
        *ngFor="let member of team; trackBy: trackByTeam; let i = index"
      >
        <div gsapReveal="scale" [delay]="i * 0.1">
          <app-team-card [teamMember]="member"></app-team-card>
        </div>
      </ng-container>
    </ng-template>

    <app-schedule-consultant-dialog
      [(visible)]="scheduleVisible"
    ></app-schedule-consultant-dialog>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      /* Ticker Animation */
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-scroll {
        display: flex;
        animation: scroll 30s linear infinite;
      }

      .animate-scroll:hover {
        animation-play-state: paused;
      }

      .client-logo {
        filter: grayscale(100%) brightness(200%);
        transition: all 0.3s ease;
      }

      .client-logo:hover {
        filter: grayscale(0%) brightness(100%);
        transform: scale(1.1);
      }

      /* Enhanced button styles */

      .enhanced-primary-button {
        box-shadow:
          0 4px 15px rgba(212, 175, 55, 0.3),
          0 8px 25px rgba(212, 175, 55, 0.2);
        transition: all 0.3s ease;
      }

      .enhanced-primary-button:hover {
        box-shadow:
          0 8px 25px rgba(212, 175, 55, 0.4),
          0 12px 35px rgba(212, 175, 55, 0.3);
        transform: translateY(-2px);
      }

      .enhanced-secondary-button {
        box-shadow: none;
        transition: all 0.3s ease;
      }

      .enhanced-secondary-button:hover {
        box-shadow:
          0 8px 25px rgba(212, 175, 55, 0.15),
          0 12px 35px rgba(212, 175, 55, 0.1);
        transform: translateY(-2px);
      }

      .gradient-border {
        position: relative;
        background: linear-gradient(
          135deg,
          var(--color-bg),
          var(--color-surface)
        );
        border-radius: 1.5rem;
        padding: 2px;
      }

      .gradient-border::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 1.5rem;
        padding: 2px;
        background: linear-gradient(
          135deg,
          var(--color-primary),
          var(--color-secondary)
        );
        mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        mask-composite: exclude;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  private contentService = inject(ContentService);

  services: Service[] = [];
  teamPreview: TeamMember[] = [];
  clients: string[] = [];
  scheduleVisible = false;

  ngOnInit() {
    this.loadServices();
    this.loadTeamPreview();
    this.loadClients();
  }

  private loadClients() {
    this.clients = [
      'assets/images/clients/client-1.png',
      'assets/images/clients/client-2.png',
      'assets/images/clients/client-3.png',
      'assets/images/clients/client-4.png',
    ];
  }

  openScheduleDialog() {
    this.scheduleVisible = true;
  }

  private loadServices() {
    this.contentService.getServices().subscribe((services) => {
      this.services = services;
    });
  }

  private loadTeamPreview() {
    this.contentService.getTeam().subscribe((team) => {
      this.teamPreview = team.slice(0, 4);
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  trackByService(index: number, service: Service): string {
    return service.slug;
  }

  trackByTeam(index: number, member: TeamMember): string {
    return member.slug;
  }
}
