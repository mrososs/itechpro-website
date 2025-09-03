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
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg via-surface to-bg pt-16"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
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
          <span class="text-primary">hospitality tech</span>
        </h1>

        <p
          gsapReveal="slide-up"
          [delay]="0.4"
          class="text-xl sm:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Meet the multi-disciplinary team behind ITECHPRO. Click any profile to
          explore skills, socials and reach out.
        </p>

        <div gsapReveal="slide-up" [delay]="0.6">
          <p-button
            label="Join Our Team"
            icon="pi pi-users"
            severity="primary"
            [rounded]="true"
            [outlined]="false"
            routerLink="/contact"
            class="text-lg px-8 py-4 enhanced-primary-button"
          >
          </p-button>
        </div>
      </div>
    </section>

    <!-- Team Grid Section -->
    <section class="py-20 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Meet the Team
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
          >
            <app-team-card [teamMember]="member"></app-team-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Stats Section -->
    <section class="py-20 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div gsapReveal="slide-up" [delay]="0.1" class="text-center">
            <div
              class="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <i class="pi pi-users text-3xl text-primary"></i>
            </div>
            <div class="text-4xl font-bold text-white mb-2">4</div>
            <div class="text-white/70">Team Members</div>
          </div>

          <div gsapReveal="slide-up" [delay]="0.2" class="text-center">
            <div
              class="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <i class="pi pi-star text-3xl text-accent"></i>
            </div>
            <div class="text-4xl font-bold text-white mb-2">15+</div>
            <div class="text-white/70">Years Combined Experience</div>
          </div>

          <div gsapReveal="slide-up" [delay]="0.3" class="text-center">
            <div
              class="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <i class="pi pi-check-circle text-3xl text-primary"></i>
            </div>
            <div class="text-4xl font-bold text-white mb-2">50+</div>
            <div class="text-white/70">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div gsapReveal="slide-up" [delay]="0.1" class="value-card group">
            <div
              class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full text-center"
            >
              <div
                class="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/30 transition-colors duration-300"
              >
                <i class="pi pi-heart text-2xl text-primary"></i>
              </div>
              <h3
                class="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300"
              >
                Passion for Excellence
              </h3>
              <p class="text-white/70 leading-relaxed">
                We're driven by the desire to create exceptional experiences
                that exceed expectations.
              </p>
            </div>
          </div>

          <div gsapReveal="slide-up" [delay]="0.2" class="value-card group">
            <div
              class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full text-center"
            >
              <div
                class="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/30 transition-colors duration-300"
              >
                <i class="pi pi-lightbulb text-2xl text-accent"></i>
              </div>
              <h3
                class="text-xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300"
              >
                Innovation First
              </h3>
              <p class="text-white/70 leading-relaxed">
                We embrace cutting-edge technology and creative solutions to
                solve complex challenges.
              </p>
            </div>
          </div>

          <div gsapReveal="slide-up" [delay]="0.3" class="value-card group">
            <div
              class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full text-center"
            >
              <div
                class="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/30 transition-colors duration-300"
              >
                <i class="pi pi-handshake text-2xl text-primary"></i>
              </div>
              <h3
                class="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300"
              >
                Client Partnership
              </h3>
              <p class="text-white/70 leading-relaxed">
                We build long-term relationships based on trust, transparency,
                and mutual success.
              </p>
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
          Want to join our team?
        </h2>
        <p
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-xl text-white/70 mb-8"
        >
          We're always looking for talented individuals who share our passion
          for hospitality technology
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <p-button
            label="View Open Positions"
            icon="pi pi-briefcase"
            severity="primary"
            [rounded]="true"
            [outlined]="false"
            routerLink="/careers"
            class="text-lg px-8 py-4 enhanced-primary-button"
          >
          </p-button>
          <p-button
            label="Send Your CV"
            icon="pi pi-envelope"
            severity="secondary"
            [rounded]="true"
            [outlined]="true"
            routerLink="/contact"
            class="text-lg px-8 py-4 enhanced-secondary-button"
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
