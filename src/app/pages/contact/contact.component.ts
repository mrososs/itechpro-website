import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { GsapRevealDirective } from '../../directives/gsap-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    CardModule,
    MessageModule,
    GsapRevealDirective,
  ],
  template: `
    <!-- Hero Section -->
    <section
      class="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-bg pt-16"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-pattern opacity-10"></div>

      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg"
      ></div>

      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
          style="animation-delay: 1s;"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
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
          <span class="gradient-text-primary">Get In Touch</span>
        </h1>

        <p
          gsapReveal="slide-up"
          [delay]="0.4"
          class="text-xl sm:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Ready to transform your hotel? Let's discuss how ITECHPRO can help you
          create the next generation of smart hospitality experiences.
        </p>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="py-20 bg-bg relative">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div gsapReveal="slide-up" [delay]="0.2">
            <div class="glass-panel rounded-3xl p-8 box-glow">
              <h2 class="text-3xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              <p class="text-white/70 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form
                [formGroup]="contactForm"
                (ngSubmit)="onSubmit()"
                class="space-y-6"
              >
                <!-- Full Name -->
                <div class="form-group">
                  <label
                    for="fullName"
                    class="block text-white/90 text-sm font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    pInputText
                    id="fullName"
                    formControlName="fullName"
                    placeholder="Enter your full name"
                    class="w-full glass-input"
                    [class.ng-invalid]="isFieldInvalid('fullName')"
                  />
                  <p-message
                    *ngIf="isFieldInvalid('fullName')"
                    severity="error"
                    text="Full name is required"
                    class="mt-1"
                  >
                  </p-message>
                </div>

                <!-- Email -->
                <div class="form-group">
                  <label
                    for="email"
                    class="block text-white/90 text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    pInputText
                    id="email"
                    formControlName="email"
                    placeholder="Enter your email address"
                    class="w-full glass-input"
                    [class.ng-invalid]="isFieldInvalid('email')"
                  />
                  <p-message
                    *ngIf="isFieldInvalid('email')"
                    severity="error"
                    [text]="getEmailErrorMessage()"
                    class="mt-1"
                  >
                  </p-message>
                </div>

                <!-- Message -->
                <div class="form-group">
                  <label
                    for="message"
                    class="block text-white/90 text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    pTextarea
                    id="message"
                    formControlName="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows="6"
                    class="w-full glass-input"
                    [class.ng-invalid]="isFieldInvalid('message')"
                  ></textarea>
                  <p-message
                    *ngIf="isFieldInvalid('message')"
                    severity="error"
                    text="Message is required"
                    class="mt-1"
                  >
                  </p-message>
                </div>

                <!-- Submit Button -->
                <div class="pt-4">
                  <p-button
                    type="submit"
                    label="Send Message"
                    icon="pi pi-send"
                    severity="primary"
                    [rounded]="true"
                    [outlined]="false"
                    [loading]="isSubmitting"
                    [disabled]="contactForm.invalid"
                    class="w-full text-lg py-4 enhanced-button"
                  >
                  </p-button>
                </div>

                <!-- Success Message -->
                <div *ngIf="isSubmitted && contactForm.valid" class="mt-4">
                  <p-message
                    severity="success"
                    text="Thank you! Your message has been sent successfully. We'll get back to you soon."
                    class="w-full"
                  >
                  </p-message>
                </div>
              </form>
            </div>
          </div>

          <!-- Company Information -->
          <div gsapReveal="slide-up" [delay]="0.4">
            <div class="contact-cards-grid-2x2">
              @for (card of contactCards; track card.id) {
                <div
                  class="contact-card-2x2 glass-panel"
                  [class]="getCardClasses(card.type)"
                >
                  @if (card.type === 'info') {
                    <h2 class="text-2xl font-bold text-white mb-4">
                      {{ card.title }}
                    </h2>
                    <p class="text-white/70 mb-6 text-sm">
                      {{ card.description }}
                    </p>
                    <div class="space-y-4 flex-1">
                      @for (item of card.content; track item.title) {
                        <div
                          class="flex items-start space-x-3 group cursor-pointer"
                        >
                          <div
                            class="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                            [class]="item.iconBg"
                          >
                            <i
                              [class]="
                                item.icon +
                                ' ' +
                                item.iconColor +
                                ' text-lg icon-glow'
                              "
                            ></i>
                          </div>
                          <div class="flex-1">
                            <h3
                              class="text-white font-semibold mb-1 text-sm group-hover:text-gold transition-colors"
                            >
                              {{ item.title }}
                            </h3>
                            @if (item.link) {
                              <a
                                [href]="item.link"
                                [class]="
                                  item.linkColor +
                                  ' transition-colors duration-300 text-sm'
                                "
                              >
                                {{ item.value }}
                              </a>
                            } @else {
                              <p
                                class="text-white/80 text-sm"
                                [innerHTML]="item.value"
                              ></p>
                            }
                            @if (item.subtitle) {
                              <p class="text-white/60 text-xs mt-1">
                                {{ item.subtitle }}
                              </p>
                            }
                          </div>
                        </div>
                      }
                    </div>
                  } @else if (card.type === 'response') {
                    <div
                      class="text-center flex-1 flex flex-col justify-center"
                    >
                      <div
                        class="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-3"
                      >
                        <i class="pi pi-clock text-gold text-xl icon-glow"></i>
                      </div>
                      <h3 class="text-lg font-bold text-white mb-2">
                        {{ card.title }}
                      </h3>
                      <p class="text-white/70 mb-4 text-sm">
                        {{ card.description }}
                      </p>
                      <div
                        class="flex flex-wrap items-center justify-center gap-2 text-xs text-white/60"
                      >
                        @for (feature of card.features; track feature) {
                          <span class="flex items-center">
                            <i class="pi pi-check-circle text-gold mr-1"></i>
                            {{ feature }}
                          </span>
                        }
                      </div>
                    </div>
                  } @else if (card.type === 'hours') {
                    <h3
                      class="text-lg font-semibold text-white mb-4 flex items-center"
                    >
                      <i class="pi pi-calendar text-gold mr-2 icon-glow"></i>
                      {{ card.title }}
                    </h3>
                    <div class="space-y-2 text-white/80 flex-1">
                      @for (hour of card.hours; track hour.day) {
                        <div class="flex justify-between text-sm">
                          <span>{{ hour.day }}</span>
                          <span
                            [class]="
                              hour.active ? 'text-gold' : 'text-white/40'
                            "
                            >{{ hour.time }}</span
                          >
                        </div>
                      }
                    </div>
                    <p class="text-white/60 text-xs mt-4">
                      <i class="pi pi-info-circle mr-1"></i>
                      {{ card.note }}
                    </p>
                  } @else if (card.type === 'support') {
                    <div
                      class="text-center flex-1 flex flex-col justify-center"
                    >
                      <div
                        class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3"
                      >
                        <i
                          class="pi pi-headphones text-white text-xl icon-glow"
                        ></i>
                      </div>
                      <h3 class="text-lg font-bold text-white mb-2">
                        {{ card.title }}
                      </h3>
                      <p class="text-white/70 mb-4 text-sm">
                        {{ card.description }}
                      </p>
                      <div class="space-y-1">
                        @for (feature of card.features; track feature) {
                          <div
                            class="flex items-center justify-center text-xs text-white/60"
                          >
                            <i class="pi pi-shield text-gold mr-2"></i>
                            {{ feature }}
                          </div>
                        }
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-bg relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg"
      ></div>

      <div
        class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <h2
          gsapReveal="slide-up"
          class="text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Ready to Start Your Project?
        </h2>
        <p
          gsapReveal="slide-up"
          [delay]="0.2"
          class="text-xl text-white/70 mb-8"
        >
          Join the future of hospitality with ITECHPRO's Smart Hotels technology
          solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <p-button
            label="Schedule a Call"
            icon="pi pi-calendar"
            severity="primary"
            [rounded]="true"
            [outlined]="false"
            class="text-lg px-8 py-4 enhanced-button"
          >
          </p-button>
          <p-button
            label="View Our Work"
            icon="pi pi-briefcase"
            severity="secondary"
            [rounded]="true"
            [outlined]="true"
            routerLink="/projects"
            class="text-lg px-8 py-4 enhanced-button-secondary"
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

      .form-group {
        position: relative;
      }

      /* Glass Input (Reuse from other components) */
      .glass-input {
        background: rgba(255, 255, 255, 0.03) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        color: white !important;
        border-radius: 1rem !important;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease !important;
      }

      :host ::ng-deep .glass-input:focus {
        border-color: var(--color-primary) !important;
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2) !important;
        background: rgba(255, 255, 255, 0.05) !important;
      }

      /* PrimeNG Message Styling */
      ::ng-deep .p-message {
        border-radius: 0.75rem !important;
        backdrop-filter: blur(10px);
      }

      ::ng-deep .p-message.p-message-error {
        background: rgba(239, 68, 68, 0.1) !important;
        border: 1px solid rgba(239, 68, 68, 0.3) !important;
        color: #fca5a5 !important;
      }

      ::ng-deep .p-message.p-message-success {
        background: rgba(34, 197, 94, 0.1) !important;
        border: 1px solid rgba(34, 197, 94, 0.3) !important;
        color: #86efac !important;
      }

      /* Enhanced button styles */
      :host ::ng-deep .enhanced-button .p-button {
        background: linear-gradient(
          135deg,
          var(--color-primary),
          #b8860b
        ) !important;
        border: none !important;
        color: white !important;
        padding: 1rem 2rem !important;
        font-weight: 600 !important;
        letter-spacing: 0.5px !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
      }

      :host ::ng-deep .enhanced-button .p-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
      }

      :host ::ng-deep .enhanced-button-secondary .p-button {
        background: transparent !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        color: white !important;
        padding: 1rem 2rem !important;
        transition: all 0.3s ease !important;
      }

      :host ::ng-deep .enhanced-button-secondary .p-button:hover {
        border-color: var(--color-primary) !important;
        color: var(--color-primary) !important;
        background: rgba(212, 175, 55, 0.05) !important;
      }

      /* Hover effects for contact info cards */
      .group:hover .w-10 {
        transform: scale(1.1);
      }

      /* Contact cards 2x2 grid styling */
      .contact-cards-grid-2x2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1.5rem;
        height: 100%;
        min-height: 500px;
      }

      .contact-card-2x2 {
        display: flex;
        flex-direction: column;
        min-height: 0;
        height: 100%;
        transition: all 0.3s ease;
      }

      .contact-card-2x2:hover {
        transform: translateY(-5px);
        box-shadow:
          0 10px 30px rgba(0, 0, 0, 0.3),
          0 0 1px rgba(212, 175, 55, 0.3);
        border-color: rgba(212, 175, 55, 0.3) !important;
      }

      .glass-panel {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }

      .box-glow {
        box-shadow:
          0 0 20px rgba(0, 0, 0, 0.2),
          0 0 1px rgba(212, 175, 55, 0.2);
      }

      .icon-glow {
        filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.3));
      }

      /* Ensure equal height distribution for 2x2 grid */
      @media (min-width: 1024px) {
        .contact-cards-grid-2x2 {
          min-height: 600px;
        }
      }

      /* Responsive adjustments for 2x2 grid */
      @media (max-width: 1024px) {
        .contact-cards-grid-2x2 {
          min-height: 450px;
        }
      }

      @media (max-width: 768px) {
        .grid {
          gap: 2rem;
        }

        .contact-cards-grid-2x2 {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto auto auto;
          gap: 1rem;
          min-height: auto;
        }
      }

      @media (max-width: 640px) {
        .contact-cards-grid-2x2 {
          gap: 0.75rem;
        }
      }
    `,
  ],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  isSubmitted = false;

  contactCards = [
    {
      id: 'contact-info',
      title: 'Contact Information',
      description:
        "Reach out to us through any of these channels. We're here to help you transform your hospitality business.",
      type: 'info',
      content: [
        {
          icon: 'pi pi-envelope',
          iconBg: 'bg-gold/10',
          iconColor: 'text-gold',
          title: 'Email',
          value: 'info@itechpro-eg.com',
          link: 'mailto:info@itechpro-eg.com',
          linkColor: 'text-gold hover:text-white',
          subtitle: "We'll respond within 24 hours",
        },
        {
          icon: 'pi pi-phone',
          iconBg: 'bg-white/10',
          iconColor: 'text-white',
          title: 'Phone',
          value: '(+20) 100 259 1589',
          link: 'tel:+201002591589',
          linkColor: 'text-white hover:text-gold',
          subtitle: 'Mon-Fri 9AM-6PM (GMT+2)',
        },
        {
          icon: 'pi pi-map-marker',
          iconBg: 'bg-gold/10',
          iconColor: 'text-gold',
          title: 'Address',
          value: '43 Studio-Masr, Zahret El-Maryotia,<br />El-Haram, GIZA',
          subtitle: 'Egypt',
        },
      ],
    },
    {
      id: 'quick-response',
      title: 'Quick Response',
      description:
        'We typically respond to all inquiries within 24 hours during business days.',
      type: 'response',
      features: ['Free Consultation', 'No Obligation'],
    },
    {
      id: 'business-hours',
      title: 'Business Hours',
      type: 'hours',
      hours: [
        { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM', active: true },
        { day: 'Saturday', time: '10:00 AM - 4:00 PM', active: true },
        { day: 'Sunday', time: 'Closed', active: false },
      ],
      note: 'All times are in GMT+2 (Egypt Standard Time)',
    },
    {
      id: 'support',
      title: '24/7 Support',
      description:
        'Our dedicated support team is available around the clock to assist with any technical issues.',
      type: 'support',
      features: [
        'Emergency Support',
        'Technical Assistance',
        'System Monitoring',
      ],
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getEmailErrorMessage(): string {
    const emailControl = this.contactForm.get('email');
    if (emailControl?.errors?.['required']) {
      return 'Email is required';
    }
    if (emailControl?.errors?.['email']) {
      return 'Please enter a valid email address';
    }
    return 'Email is required';
  }

  getCardClasses(type: string): string {
    const baseClasses = 'p-6 flex flex-col';

    switch (type) {
      case 'info':
        return `${baseClasses}`; // Default glass style applied via template
      case 'response':
        return `${baseClasses}`;
      case 'hours':
        return `${baseClasses}`;
      case 'support':
        return `${baseClasses}`;
      default:
        return `${baseClasses}`;
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.contactForm.reset();

        // Reset submitted state after 5 seconds
        setTimeout(() => {
          this.isSubmitted = false;
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
