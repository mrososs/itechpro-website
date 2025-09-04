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
  ],
  template: `
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern-hero pt-16"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-blue-primary/20 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-green-accent/20 rounded-full blur-3xl animate-pulse"
          style="animation-delay: 1s;"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-secondary/10 rounded-full blur-3xl animate-float"
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
          <span class="gradient-text-primary">ITECHPRO</span> — Egypt's
          Pioneering
          <span class="gradient-text-secondary">Smart Hotels</span> Tech
        </h1>

        <p
          gsapReveal="slide-up"
          [delay]="0.4"
          class="text-xl sm:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          We build high-performing hospitality products: Booking Websites,
          Mobile Apps, PMS Integrations, IoT Room Automation, and Data
          Analytics.
        </p>

        <div
          gsapReveal="slide-up"
          [delay]="0.6"
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <p-button
            label="Talk to an Expert"
            icon="pi pi-comments"
            severity="primary"
            [rounded]="true"
            [outlined]="false"
            routerLink="/contact"
            class="text-lg px-8 py-4 enhanced-primary-button"
          >
          </p-button>
          <p-button
            label="Explore Smart Hotels"
            icon="pi pi-building"
            severity="secondary"
            [rounded]="true"
            [outlined]="true"
            routerLink="/smart-hotels"
            class="text-lg px-8 py-4 enhanced-secondary-button"
          >
          </p-button>
        </div>
      </div>

      <!-- Scroll Down Arrow -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          (click)="scrollToSection('services')"
          class="scroll-down-button group"
          aria-label="Scroll down to services"
        >
          <div class="scroll-down-circle">
            <i
              class="pi pi-chevron-down text-xl text-blue-primary group-hover:text-blue-secondary transition-colors duration-300"
            ></i>
          </div>
        </button>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-surface bg-pattern">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our <span class="gradient-text-primary">Services</span>
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed specifically for the
            hospitality industry
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
    <section id="about" class="py-20 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              gsapReveal="slide-up"
              class="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Why Choose <span class="gradient-text-primary">ITECHPRO</span>?
            </h2>
            <p
              gsapReveal="slide-up"
              [delay]="0.2"
              class="text-xl text-white/70 mb-8 leading-relaxed"
            >
              As Egypt's first specialized Smart Hotels technology company, we
              bring deep expertise in hospitality operations combined with
              cutting-edge technology solutions. Our team understands the unique
              challenges of the tourism sector and delivers solutions that drive
              real business value.
            </p>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div
                  class="w-3 h-3 bg-blue-primary rounded-full shadow-glow-primary"
                ></div>
                <span class="text-white/80"
                  >10+ years hospitality technology experience</span
                >
              </div>
              <div class="flex items-center space-x-3">
                <div
                  class="w-3 h-3 bg-green-accent rounded-full shadow-glow-secondary"
                ></div>
                <span class="text-white/80"
                  >50+ successful hotel implementations</span
                >
              </div>
              <div class="flex items-center space-x-3">
                <div
                  class="w-3 h-3 bg-blue-secondary rounded-full shadow-glow-primary"
                ></div>
                <span class="text-white/80"
                  >24/7 technical support & monitoring</span
                >
              </div>
            </div>
          </div>

          <div gsapParallax="y" [speed]="0.3" class="relative">
            <div class="gradient-border">
              <div
                class="bg-black/30 backdrop-blur-xl rounded-3xl p-8 text-center"
              >
                <div class="text-6xl font-bold gradient-text-primary mb-4">
                  100%
                </div>
                <div class="text-2xl font-semibold text-white mb-2">
                  Client Satisfaction
                </div>
                <div class="text-white/70">
                  Every project delivered on time and exceeds expectations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Preview Section -->
    <section id="team" class="py-20 bg-surface bg-pattern">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            People who ship exceptional
            <span class="gradient-text-secondary">hospitality tech</span>
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Meet the multi-disciplinary team behind ITECHPRO. Click any profile
            to explore skills, socials and reach out.
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

        <div class="text-center mt-12">
          <p-button
            label="View Full Team"
            icon="pi pi-users"
            severity="secondary"
            [rounded]="true"
            [outlined]="true"
            routerLink="/team"
            class="text-lg enhanced-secondary-button"
          >
          </p-button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      id="cta"
      class="py-20 bg-gradient-to-r from-blue-primary/10 to-green-accent/10"
    >
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2
          gsapReveal="slide-up"
          class="text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Ready to transform your hotel?
        </h2>
        <p
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-xl text-white/70 mb-8"
        >
          Let's discuss how ITECHPRO can help you create the next generation of
          smart hospitality experiences.
        </p>
        <p-button
          label="Start Your Project"
          icon="pi pi-rocket"
          severity="primary"
          [rounded]="true"
          [outlined]="false"
          routerLink="/contact"
          class="text-lg px-8 py-4 "
        >
        </p-button>
      </div>
    </section>

    <!-- Scroll to Top Button -->
    <button
      *ngIf="showScrollToTop"
      (click)="scrollToTop()"
      class="fixed bottom-8 right-8 z-50 bg-blue-primary/80 hover:bg-blue-primary text-white p-3 rounded-full shadow-glow-primary transition-all duration-300 hover:scale-110 backdrop-blur-xl"
      [@fadeInOut]="showScrollToTop ? 'visible' : 'hidden'"
    >
      <i class="pi pi-chevron-up text-xl"></i>
    </button>

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
  `,
  styles: [
    `
      :host {
        display: block;
      }

      /* Enhanced button styles */
      .enhanced-primary-button {
        box-shadow: 0 4px 15px rgba(0, 152, 238, 0.3),
          0 8px 25px rgba(0, 152, 238, 0.2);
        transition: all 0.3s ease;
      }

      .enhanced-primary-button:hover {
        box-shadow: 0 8px 25px rgba(0, 152, 238, 0.4),
          0 12px 35px rgba(0, 152, 238, 0.3);
        transform: translateY(-2px);
      }

      .enhanced-secondary-button {
        box-shadow: 0 4px 15px rgba(0, 240, 66, 0.3),
          0 8px 25px rgba(0, 240, 66, 0.2);
        transition: all 0.3s ease;
      }

      .enhanced-secondary-button:hover {
        box-shadow: 0 8px 25px rgba(0, 240, 66, 0.4),
          0 12px 35px rgba(0, 240, 66, 0.3);
        transform: translateY(-2px);
      }

      /* Enhanced scroll down button */
      .scroll-down-button {
        transition: all 0.3s ease;
        border: none;
        background: none;
      }

      .scroll-down-button:hover {
        transform: translateY(4px);
      }

      .scroll-down-circle {
        width: 60px;
        height: 60px;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(20px);
        border: 2px solid rgba(0, 152, 238, 0.3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 152, 238, 0.2);
      }

      .scroll-down-button:hover .scroll-down-circle {
        border-color: rgba(0, 152, 238, 0.6);
        box-shadow: 0 8px 25px rgba(0, 152, 238, 0.3),
          0 0 20px rgba(0, 152, 238, 0.2);
        transform: scale(1.1);
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
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
      }

      /* Scroll to top button animations */
      .scroll-to-top-enter {
        opacity: 0;
        transform: translateY(20px);
      }

      .scroll-to-top-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.3s ease-out;
      }

      .scroll-to-top-exit {
        opacity: 1;
        transform: translateY(0);
      }

      .scroll-to-top-exit-active {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease-in;
      }
    `,
  ],
  animations: [
    trigger('fadeInOut', [
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        })
      ),
      transition('hidden <=> visible', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  private contentService = inject(ContentService);

  services: Service[] = [];
  teamPreview: TeamMember[] = [];
  showScrollToTop = false;

  ngOnInit() {
    this.loadServices();
    this.loadTeamPreview();
    this.setupScrollListener();
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

  private setupScrollListener() {
    window.addEventListener('scroll', () => {
      this.showScrollToTop = window.scrollY > 500;
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

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  trackByService(index: number, service: Service): string {
    return service.slug;
  }

  trackByTeam(index: number, member: TeamMember): string {
    return member.slug;
  }
}
