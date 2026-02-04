import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ContentService, TeamMember } from '../../services/content.service';
import { GsapRevealDirective } from '../../directives/gsap-reveal.directive';
import { TeamCardComponent } from '../../components/team-card/team-card.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonModule,
    CardModule,
    GsapRevealDirective,
    TeamCardComponent,
  ],
  template: `
    <!-- Hero Section -->
    <section
      class="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-bg pt-16"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg"
      ></div>

      <div class="absolute inset-0">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
          People who ship exceptional
          <span class="gradient-text-primary">hospitality tech</span>
        </h1>

        <p
          gsapReveal="slide-up"
          [delay]="0.4"
          class="text-xl sm:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Meet the multi-disciplinary team behind ITECHPRO. Click any profile to
          explore skills, socials and reach out.
        </p>

        <div gsapReveal="slide-up" [delay]="0.6">
          <p-button
            label="Join Our Team"
            icon="pi pi-users"
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

    <!-- Team Grid Section -->
    <section class="py-20 bg-surface relative">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Meet the <span class="gradient-text-primary">Team</span>
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Our diverse team brings together expertise in frontend, backend,
            IoT, design, and DevOps to deliver exceptional hospitality
            solutions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            *ngFor="let member of team; let i = index"
            gsapReveal="scale"
            [delay]="i * 0.1"
            class="h-full"
          >
            <app-team-card
              [teamMember]="member"
              class="h-full block"
            ></app-team-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Stats Section -->
    <section class="py-20 bg-bg relative">
      <div
        class="absolute inset-0 bg-gradient-to-r from-bg to-surface opacity-50"
      ></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            gsapReveal="slide-up"
            [delay]="0.1"
            class="text-center glass-panel p-8 rounded-2xl border border-white/5"
          >
            <div
              class="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold/20"
            >
              <i class="pi pi-users text-3xl text-blue-400"></i>
            </div>
            <div class="text-4xl font-bold text-white mb-2">4</div>
            <div class="text-white/70 uppercase tracking-widest text-sm">
              Team Members
            </div>
          </div>

          <div
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-center glass-panel p-8 rounded-2xl border border-white/5"
          >
            <div
              class="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20"
            >
              <i class="pi pi-star text-3xl text-white"></i>
            </div>
            <div class="text-4xl font-bold text-white mb-2">15+</div>
            <div class="text-white/70 uppercase tracking-widest text-sm">
              Years Combined Experience
            </div>
          </div>

          <div
            gsapReveal="slide-up"
            [delay]="0.3"
            class="text-center glass-panel p-8 rounded-2xl border border-white/5"
          >
            <div
              class="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/20"
            >
              <i class="pi pi-check-circle text-3xl text-green-400"></i>
            </div>
            <div class="text-4xl font-bold text-white mb-2">50+</div>
            <div class="text-white/70 uppercase tracking-widest text-sm">
              Projects Delivered
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-surface relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our Values
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/70 max-w-3xl mx-auto"
          >
            The principles that guide our work and relationships
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            gsapReveal="slide-up"
            [delay]="0.1"
            class="value-card group h-full"
          >
            <div
              class="glass-hover bg-surface/30 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-glow h-full text-center flex flex-col"
            >
              <div
                class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-500/20 transition-colors duration-300 icon-glow"
              >
                <i class="pi pi-heart text-2xl text-blue-400"></i>
              </div>
              <h3
                class="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300"
              >
                Passion for Excellence
              </h3>
              <p class="text-white/60 leading-relaxed text-sm">
                We're driven by the desire to create exceptional experiences
                that exceed expectations.
              </p>
            </div>
          </div>

          <div
            gsapReveal="slide-up"
            [delay]="0.2"
            class="value-card group h-full"
          >
            <div
              class="glass-hover bg-surface/30 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 hover:shadow-glow h-full text-center flex flex-col"
            >
              <div
                class="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-colors duration-300 icon-glow"
              >
                <i class="pi pi-lightbulb text-2xl text-white"></i>
              </div>
              <h3
                class="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300"
              >
                Innovation First
              </h3>
              <p class="text-white/60 leading-relaxed text-sm">
                We embrace cutting-edge technology and creative solutions to
                solve complex challenges.
              </p>
            </div>
          </div>

          <div
            gsapReveal="slide-up"
            [delay]="0.3"
            class="value-card group h-full"
          >
            <div
              class="glass-hover bg-surface/30 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 hover:shadow-glow h-full text-center flex flex-col"
            >
              <div
                class="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-green-500/20 transition-colors duration-300 icon-glow"
              >
                <i class="pi pi-handshake text-2xl text-green-400"></i>
              </div>
              <h3
                class="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300"
              >
                Client Partnership
              </h3>
              <p class="text-white/60 leading-relaxed text-sm">
                We build long-term relationships based on trust, transparency,
                and mutual success.
              </p>
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
          Want to join our <span class="gradient-text-primary">team?</span>
        </h2>
        <p
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-xl text-white/70 mb-10"
        >
          We're always looking for talented individuals who share our passion
          for hospitality technology
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <p-button
            label="View Open Positions"
            icon="pi pi-briefcase"
            severity="primary"
            [rounded]="false"
            [outlined]="false"
            routerLink="/careers"
            class="enhanced-primary-button"
            styleClass="uppercase tracking-widest font-bold px-8 py-4"
          >
          </p-button>
          <p-button
            label="Send Your CV"
            icon="pi pi-envelope"
            severity="secondary"
            [rounded]="false"
            [outlined]="true"
            routerLink="/contact"
            class="enhanced-secondary-button"
            styleClass="uppercase tracking-widest font-bold px-8 py-4 bg-transparent border-white/20 text-white hover:text-blue-400 hover:border-blue-400"
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

      .value-card {
        transition: all 0.3s ease;
      }

      .value-card:hover {
        transform: translateY(-8px);
      }

      .value-card:hover .bg-black\\/20 {
        background: rgba(0, 0, 0, 0.3) !important;
        border-color: rgba(0, 224, 255, 0.5) !important;
        box-shadow: 0 20px 40px rgba(0, 224, 255, 0.1);
      }
    `,
  ],
})
export class TeamComponent implements OnInit {
  private contentService = inject(ContentService);

  team: TeamMember[] = [];

  ngOnInit() {
    this.loadTeam();
  }

  private loadTeam() {
    this.contentService.getTeam().subscribe((team) => {
      this.team = team;
    });
  }
}
