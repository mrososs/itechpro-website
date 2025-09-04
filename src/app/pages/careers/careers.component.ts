import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { GsapRevealDirective } from '../../directives/gsap-reveal.directive';

interface JobPosition {
  id: string;
  title: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;
  department: string;
  experience: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  salary?: string;
  postedDate: string;
  isRemote: boolean;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonModule,
    CardModule,
    ChipModule,
    GsapRevealDirective,
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
          Join Our
          <span class="text-primary">Innovation</span> Journey
        </h1>

        <p
          gsapReveal="slide-up"
          [delay]="0.4"
          class="text-xl sm:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Be part of a team that's revolutionizing hospitality technology. We're
          looking for passionate individuals who want to make a real impact.
        </p>

        <div gsapReveal="slide-up" [delay]="0.6">
          <p-button
            label="Browse Open Positions"
            icon="pi pi-briefcase"
            severity="primary"
            [rounded]="true"
            [outlined]="false"
            (onClick)="scrollToSection('positions')"
            class="text-lg px-8 py-4 "
          >
          </p-button>
        </div>
      </div>
    </section>

    <!-- Full-Time Positions Section -->
    <section id="positions" class="py-20 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Full-Time <span class="text-primary">Positions</span>
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Join our core team and help shape the future of smart hospitality
            technology
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            *ngFor="let position of fullTimePositions; let i = index"
            gsapReveal="slide-up"
            [delay]="i * 0.1"
            class="job-card group"
          >
            <div
              class="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:scale-105 h-full relative overflow-hidden"
            >
              <!-- Shimmer effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              ></div>

              <!-- Header -->
              <div class="relative z-10 mb-6">
                <div class="flex items-start justify-between mb-4">
                  <h3
                    class="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300"
                  >
                    {{ position.title }}
                  </h3>
                  <div class="flex flex-col items-end space-y-2">
                    <span
                      class="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                    >
                      {{ position.type }}
                    </span>
                    <span
                      class="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30"
                    >
                      {{ position.department }}
                    </span>
                  </div>
                </div>

                <div
                  class="flex items-center space-x-4 text-white/70 text-sm mb-4"
                >
                  <div class="flex items-center space-x-2">
                    <i class="pi pi-map-marker text-primary"></i>
                    <span>{{ position.location }}</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <i class="pi pi-clock text-primary"></i>
                    <span>{{ position.experience }}</span>
                  </div>
                  <div
                    *ngIf="position.isRemote"
                    class="flex items-center space-x-2"
                  >
                    <i class="pi pi-wifi text-primary"></i>
                    <span>Remote</span>
                  </div>
                </div>

                <p class="text-white/80 leading-relaxed">
                  {{ position.description }}
                </p>
              </div>

              <!-- Skills -->
              <div class="relative z-10 mb-6">
                <h4 class="text-lg font-semibold text-white mb-3">
                  Key Skills
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    *ngFor="let skill of position.skills.slice(0, 4)"
                    class="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Footer -->
              <div class="relative z-10 flex items-center justify-between">
                <div class="text-white/60 text-sm">
                  Posted {{ position.postedDate }}
                </div>
                <p-button
                  label="Apply Now"
                  icon="pi pi-arrow-right"
                  severity="primary"
                  [rounded]="true"
                  [outlined]="true"
                  class=""
                >
                </p-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Internships Section -->
    <section class="py-20 bg-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            <span class="text-accent">Internship</span> Opportunities
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Kickstart your career with hands-on experience in cutting-edge
            hospitality technology
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            *ngFor="let internship of internships; let i = index"
            gsapReveal="slide-up"
            [delay]="i * 0.1"
            class="internship-card group"
          >
            <div
              class="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-accent/50 transition-all duration-500 hover:scale-105 h-full relative overflow-hidden"
            >
              <!-- Shimmer effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              ></div>

              <!-- Header -->
              <div class="relative z-10 mb-6">
                <div class="flex items-start justify-between mb-4">
                  <h3
                    class="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300"
                  >
                    {{ internship.title }}
                  </h3>
                  <span
                    class="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30"
                  >
                    {{ internship.type }}
                  </span>
                </div>

                <div
                  class="flex items-center space-x-4 text-white/70 text-sm mb-4"
                >
                  <div class="flex items-center space-x-2">
                    <i class="pi pi-map-marker text-accent"></i>
                    <span>{{ internship.location }}</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <i class="pi pi-calendar text-accent"></i>
                    <span>{{ internship.experience }}</span>
                  </div>
                  <div
                    *ngIf="internship.isRemote"
                    class="flex items-center space-x-2"
                  >
                    <i class="pi pi-wifi text-accent"></i>
                    <span>Remote</span>
                  </div>
                </div>

                <p class="text-white/80 leading-relaxed">
                  {{ internship.description }}
                </p>
              </div>

              <!-- Skills -->
              <div class="relative z-10 mb-6">
                <h4 class="text-lg font-semibold text-white mb-3">
                  What You'll Learn
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    *ngFor="let skill of internship.skills.slice(0, 4)"
                    class="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Benefits -->
              <div class="relative z-10 mb-6">
                <h4 class="text-lg font-semibold text-white mb-3">Benefits</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    *ngFor="let benefit of internship.benefits.slice(0, 3)"
                    class="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30"
                  >
                    {{ benefit }}
                  </span>
                </div>
              </div>

              <!-- Footer -->
              <div class="relative z-10 flex items-center justify-between">
                <div class="text-white/60 text-sm">
                  Posted {{ internship.postedDate }}
                </div>
                <p-button
                  label="Apply Now"
                  icon="pi pi-arrow-right"
                  severity="secondary"
                  [rounded]="true"
                  [outlined]="true"
                  class=""
                >
                </p-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Work With Us Section -->
    <section class="py-20 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            gsapReveal="slide-up"
            class="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Why Work at <span class="text-primary">ITECHPRO</span>?
          </h2>
          <p
            gsapReveal="slide-up"
            [delay]="0.2"
            class="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Discover what makes us a great place to grow your career
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div gsapReveal="slide-up" [delay]="0.1" class="benefit-card group">
            <div
              class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full text-center"
            >
              <div
                class="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/30 transition-colors duration-300"
              >
                <i class="pi pi-rocket text-2xl text-primary"></i>
              </div>
              <h3
                class="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300"
              >
                Innovation Culture
              </h3>
              <p class="text-white/70 leading-relaxed">
                Work with cutting-edge technologies and be part of projects that
                shape the future of hospitality.
              </p>
            </div>
          </div>

          <div gsapReveal="slide-up" [delay]="0.2" class="benefit-card group">
            <div
              class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:scale-105 h-full text-center"
            >
              <div
                class="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/30 transition-colors duration-300"
              >
                <i class="pi pi-users text-2xl text-accent"></i>
              </div>
              <h3
                class="text-xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300"
              >
                Collaborative Team
              </h3>
              <p class="text-white/70 leading-relaxed">
                Join a diverse team of experts who support each other and share
                knowledge freely.
              </p>
            </div>
          </div>

          <div gsapReveal="slide-up" [delay]="0.3" class="benefit-card group">
            <div
              class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full text-center"
            >
              <div
                class="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/30 transition-colors duration-300"
              >
                <i class="pi pi-chart-line text-2xl text-primary"></i>
              </div>
              <h3
                class="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300"
              >
                Career Growth
              </h3>
              <p class="text-white/70 leading-relaxed">
                Continuous learning opportunities, mentorship programs, and
                clear career progression paths.
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
          Ready to Join Our Team?
        </h2>
        <p
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-xl text-white/70 mb-8"
        >
          Don't see a position that fits? Send us your resume and we'll keep you
          in mind for future opportunities.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <p-button
            label="Send Your Resume"
            icon="pi pi-envelope"
            severity="primary"
            [rounded]="true"
            [outlined]="false"
            routerLink="/contact"
            class="text-lg px-8 py-4 "
          >
          </p-button>
          <p-button
            label="Contact HR"
            icon="pi pi-comments"
            severity="secondary"
            [rounded]="true"
            [outlined]="true"
            routerLink="/contact"
            class="text-lg px-8 py-4 "
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

      .job-card,
      .internship-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .job-card:hover,
      .internship-card:hover {
        transform: translateY(-8px);
      }

      .job-card:hover .bg-black\\/30 {
        background: rgba(0, 0, 0, 0.4) !important;
        border-color: rgba(0, 212, 255, 0.5) !important;
        box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
      }

      .internship-card:hover .bg-black\\/30 {
        background: rgba(0, 0, 0, 0.4) !important;
        border-color: rgba(168, 85, 247, 0.5) !important;
        box-shadow: 0 20px 40px rgba(168, 85, 247, 0.1);
      }

      .benefit-card {
        transition: all 0.3s ease;
      }

      .benefit-card:hover {
        transform: translateY(-8px);
      }

      .benefit-card:hover .bg-black\\/20 {
        background: rgba(0, 0, 0, 0.3) !important;
        border-color: rgba(0, 224, 255, 0.5) !important;
        box-shadow: 0 20px 40px rgba(0, 224, 255, 0.1);
      }
    `,
  ],
})
export class CareersComponent implements OnInit {
  fullTimePositions: JobPosition[] = [];
  internships: JobPosition[] = [];

  ngOnInit() {
    this.loadJobData();
  }

  private loadJobData() {
    // Full-time positions test data
    this.fullTimePositions = [
      {
        id: 'ft-1',
        title: 'Senior Frontend Engineer',
        type: 'Full-time',
        location: 'Cairo, Egypt',
        department: 'Engineering',
        experience: '5+ years',
        skills: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'GSAP'],
        description:
          'Lead frontend development for our hospitality applications, creating exceptional user experiences.',
        responsibilities: [
          'Architect and develop scalable frontend solutions',
          'Mentor junior developers',
          'Collaborate with design and product teams',
        ],
        requirements: [
          'Strong Angular expertise',
          'Experience with modern CSS frameworks',
          'Understanding of UX principles',
        ],
        benefits: [
          'Competitive salary',
          'Health insurance',
          'Professional development budget',
          'Flexible working hours',
        ],
        salary: 'EGP 25,000 - 35,000',
        postedDate: '2 days ago',
        isRemote: true,
      },
      {
        id: 'ft-2',
        title: 'Backend & IoT Specialist',
        type: 'Full-time',
        location: 'Cairo, Egypt',
        department: 'Engineering',
        experience: '4+ years',
        skills: ['Node.js', 'IoT', 'Cloud', 'PMS', 'Docker'],
        description:
          'Develop backend systems and IoT integrations for smart hotel solutions.',
        responsibilities: [
          'Design and implement IoT device integrations',
          'Develop RESTful APIs',
          'Ensure system scalability and security',
        ],
        requirements: [
          'Strong Node.js experience',
          'IoT protocol knowledge',
          'Database design skills',
        ],
        benefits: [
          'Competitive salary',
          'Health insurance',
          'Latest hardware',
          'Conference attendance',
        ],
        salary: 'EGP 22,000 - 30,000',
        postedDate: '1 week ago',
        isRemote: false,
      },
      {
        id: 'ft-3',
        title: 'UI/UX Designer',
        type: 'Full-time',
        location: 'Cairo, Egypt',
        department: 'Design',
        experience: '3+ years',
        skills: ['Figma', 'Prototyping', 'User Research', 'Accessibility'],
        description:
          'Create intuitive and beautiful user interfaces for hospitality applications.',
        responsibilities: [
          'Design user interfaces and experiences',
          'Conduct user research and testing',
          'Create design systems and guidelines',
        ],
        requirements: [
          'Strong portfolio',
          'Figma expertise',
          'Understanding of hospitality industry',
        ],
        benefits: [
          'Competitive salary',
          'Health insurance',
          'Design tools subscription',
          'Creative freedom',
        ],
        salary: 'EGP 18,000 - 25,000',
        postedDate: '3 days ago',
        isRemote: true,
      },
      {
        id: 'ft-4',
        title: 'DevOps Engineer',
        type: 'Full-time',
        location: 'Cairo, Egypt',
        department: 'Engineering',
        experience: '4+ years',
        skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
        description:
          'Build and maintain our cloud infrastructure and deployment pipelines.',
        responsibilities: [
          'Manage cloud infrastructure',
          'Automate deployment processes',
          'Monitor system performance',
        ],
        requirements: [
          'AWS certification preferred',
          'Container orchestration experience',
          'Infrastructure as code skills',
        ],
        benefits: [
          'Competitive salary',
          'Health insurance',
          'Cloud certification support',
          'Latest tools and equipment',
        ],
        salary: 'EGP 25,000 - 35,000',
        postedDate: '5 days ago',
        isRemote: true,
      },
    ];

    // Internships test data
    this.internships = [
      {
        id: 'int-1',
        title: 'Frontend Development Intern',
        type: 'Internship',
        location: 'Cairo, Egypt',
        department: 'Engineering',
        experience: 'Student/Recent Graduate',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
        description:
          'Learn frontend development by working on real hospitality applications.',
        responsibilities: [
          'Assist in UI development',
          'Learn modern frontend frameworks',
          'Participate in code reviews',
        ],
        requirements: [
          'Basic programming knowledge',
          'Eagerness to learn',
          'Good communication skills',
        ],
        benefits: [
          'Stipend provided',
          'Mentorship program',
          'Real project experience',
          'Potential full-time offer',
        ],
        postedDate: '1 week ago',
        isRemote: false,
      },
      {
        id: 'int-2',
        title: 'UI/UX Design Intern',
        type: 'Internship',
        location: 'Cairo, Egypt',
        department: 'Design',
        experience: 'Student/Recent Graduate',
        skills: ['Design Thinking', 'Sketching', 'Figma', 'User Research'],
        description:
          'Gain hands-on experience in designing user interfaces for hospitality technology.',
        responsibilities: [
          'Assist in design projects',
          'Conduct user research',
          'Create design mockups',
        ],
        requirements: [
          'Design or related field student',
          'Creative mindset',
          'Basic design software knowledge',
        ],
        benefits: [
          'Stipend provided',
          'Design mentorship',
          'Portfolio building',
          'Industry exposure',
        ],
        postedDate: '2 weeks ago',
        isRemote: true,
      },
      {
        id: 'int-3',
        title: 'Backend Development Intern',
        type: 'Internship',
        location: 'Cairo, Egypt',
        department: 'Engineering',
        experience: 'Student/Recent Graduate',
        skills: ['Python', 'JavaScript', 'Databases', 'APIs', 'Git'],
        description:
          'Learn backend development by working on real-world hospitality solutions.',
        responsibilities: [
          'Assist in API development',
          'Learn database design',
          'Participate in system architecture',
        ],
        requirements: [
          'Programming fundamentals',
          'Database knowledge',
          'Problem-solving skills',
        ],
        benefits: [
          'Stipend provided',
          'Technical mentorship',
          'Real project experience',
          'Career guidance',
        ],
        postedDate: '1 week ago',
        isRemote: false,
      },
      {
        id: 'int-4',
        title: 'Marketing & Growth Intern',
        type: 'Internship',
        location: 'Cairo, Egypt',
        department: 'Marketing',
        experience: 'Student/Recent Graduate',
        skills: [
          'Digital Marketing',
          'Social Media',
          'Content Creation',
          'Analytics',
        ],
        description:
          'Learn digital marketing strategies for B2B hospitality technology.',
        responsibilities: [
          'Assist in content creation',
          'Social media management',
          'Marketing campaign support',
        ],
        requirements: [
          'Marketing or business student',
          'Social media savvy',
          'Creative writing skills',
        ],
        benefits: [
          'Stipend provided',
          'Marketing mentorship',
          'Industry networking',
          'Portfolio building',
        ],
        postedDate: '3 days ago',
        isRemote: true,
      },
    ];
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
}
