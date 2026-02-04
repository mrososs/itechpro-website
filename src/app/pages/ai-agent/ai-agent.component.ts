import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TextareaModule } from 'primeng/textarea';
import { GsapRevealDirective } from '../../directives/gsap-reveal.directive';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface CompanyService {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  icon: string;
  color: string;
}

interface ConsultationForm {
  date: Date | null;
  time: string | null;
  name: string;
  phone: string;
  requirements: string;
}

@Component({
  selector: 'app-ai-agent',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    TextareaModule,
    GsapRevealDirective,
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

      <!-- Abstract Shapes -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
          style="animation-delay: 1s;"
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
          <span class="gradient-text-primary">AI Assistant</span>
        </h1>

        <p
          gsapReveal="slide-up"
          [delay]="0.4"
          class="text-xl sm:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Ask me anything about your project ideas, and I'll show you how
          ITECHPRO can help bring your vision to life with our smart hospitality
          solutions.
        </p>

        <div
          gsapReveal="slide-up"
          [delay]="0.6"
          class="flex flex-wrap justify-center gap-4 text-sm text-white/60"
        >
          <span class="flex items-center">
            <i class="pi pi-check-circle text-gold mr-2"></i>
            Hotel Management Systems
          </span>
          <span class="flex items-center">
            <i class="pi pi-check-circle text-gold mr-2"></i>
            Digital Transformation
          </span>
          <span class="flex items-center">
            <i class="pi pi-check-circle text-gold mr-2"></i>
            System Integration
          </span>
          <span class="flex items-center">
            <i class="pi pi-check-circle text-gold mr-2"></i>
            Custom Development
          </span>
        </div>
      </div>
    </section>

    <!-- AI Chat Interface -->
    <section class="py-20 bg-bg relative">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Chat Container -->
        <div
          gsapReveal="slide-up"
          [delay]="0.2"
          class="glass-panel rounded-3xl p-6 box-glow"
        >
          <!-- Chat Header -->
          <div
            class="flex items-center justify-between mb-6 pb-4 border-b border-white/10"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5"
              >
                <img
                  src="assets/img/logo.png"
                  alt="ITECHPRO Logo"
                  class="h-6 w-auto"
                />
              </div>
              <div>
                <h2 class="text-xl font-bold text-white">
                  ITECHPRO AI Assistant
                </h2>
                <p class="text-white/60 text-sm">
                  Ready to help with your project
                </p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
              <span class="text-gold text-sm">Online</span>
            </div>
          </div>

          <!-- Chat Messages -->
          <div
            #chatContainer
            class="chat-messages h-96 overflow-y-auto mb-6 space-y-4 pr-2"
          >
            @if (messages.length === 0) {
              <div class="text-center py-8">
                <div
                  class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10"
                >
                  <i class="pi pi-comments text-gold text-2xl icon-glow"></i>
                </div>
                <h3 class="text-white font-semibold mb-2">
                  Start a Conversation
                </h3>
                <p class="text-white/60 text-sm">
                  Ask me about your project ideas, and I'll show you how we can
                  help!
                </p>
              </div>
            } @else {
              @for (message of messages; track message.id) {
                <div
                  class="flex"
                  [class]="
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  "
                >
                  <div
                    class="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl"
                    [class]="getMessageClasses(message.type)"
                  >
                    @if (message.type === 'ai') {
                      <div class="flex items-start space-x-2">
                        <div
                          class="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 bg-white/10"
                        >
                          <img
                            src="assets/img/logo.png"
                            alt="ITECHPRO Logo"
                            class="h-4 w-auto"
                          />
                        </div>
                        <div class="flex-1">
                          <div
                            class="text-sm"
                            [innerHTML]="message.content"
                          ></div>
                          @if (message.isTyping) {
                            <div class="flex space-x-1 mt-2">
                              <div
                                class="w-2 h-2 bg-white/40 rounded-full animate-bounce"
                              ></div>
                              <div
                                class="w-2 h-2 bg-white/40 rounded-full animate-bounce"
                                style="animation-delay: 0.1s"
                              ></div>
                              <div
                                class="w-2 h-2 bg-white/40 rounded-full animate-bounce"
                                style="animation-delay: 0.2s"
                              ></div>
                            </div>
                          }
                        </div>
                      </div>
                    } @else {
                      <p class="text-sm">{{ message.content }}</p>
                    }
                    <p class="text-xs opacity-60 mt-1">
                      {{ message.timestamp | date: 'short' }}
                    </p>
                  </div>
                </div>
              }
            }
          </div>

          <!-- Chat Input -->
          <div class="flex space-x-3">
            <input
              pInputText
              [(ngModel)]="userInput"
              placeholder="Ask me about your project ideas..."
              class="flex-1 glass-input"
              (keyup.enter)="sendMessage()"
              [disabled]="isTyping"
            />
            <p-button
              icon="pi pi-send"
              severity="primary"
              [rounded]="true"
              [outlined]="false"
              [loading]="isTyping"
              [disabled]="!userInput.trim() || isTyping"
              (onClick)="sendMessage()"
              class="enhanced-button"
            >
            </p-button>
          </div>

          <!-- Quick Actions -->
          <div class="mt-4 pt-4 border-t border-white/10">
            <p class="text-white/60 text-sm mb-3">Quick questions:</p>
            <div class="flex flex-wrap gap-2">
              @for (quickQuestion of quickQuestions; track quickQuestion) {
                <button
                  (click)="sendQuickQuestion(quickQuestion)"
                  class="px-3 py-1 bg-white/5 hover:bg-gold/20 hover:text-gold border border-white/10 hover:border-gold/30 text-white text-xs rounded-full transition-all duration-300"
                  [disabled]="isTyping"
                >
                  {{ quickQuestion }}
                </button>
              }
            </div>
          </div>
        </div>

        <!-- Company Services Showcase -->
        <div gsapReveal="slide-up" [delay]="0.4" class="mt-12">
          <h3 class="text-2xl font-bold text-white text-center mb-8">
            How We Can Help Your Project
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (service of companyServices; track service.id) {
              <div class="glass-panel p-6 rounded-2xl hover-card group">
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  [class]="service.color"
                >
                  <i
                    [class]="service.icon + ' text-white text-xl icon-glow'"
                  ></i>
                </div>
                <h4
                  class="text-white font-semibold mb-2 group-hover:text-gold transition-colors"
                >
                  {{ service.name }}
                </h4>
                <p class="text-white/70 text-sm">{{ service.description }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation Dialog -->
    <p-dialog
      header="Schedule a Consultation"
      [(visible)]="displayConsultationDialog"
      [modal]="true"
      [style]="{ width: '90%', maxWidth: '600px' }"
      [draggable]="false"
      [resizable]="false"
      styleClass="glass-dialog"
    >
      <div class="p-4" *ngIf="displayConsultationDialog">
        <div class="grid gap-6">
          <!-- Step 1: Date & Time -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="field">
              <label class="block text-white mb-2 font-semibold"
                >Select Date</label
              >
              <p-calendar
                [(ngModel)]="consultationForm.date"
                [minDate]="minDate"
                [inline]="false"
                styleClass="w-full"
                inputStyleClass="glass-input w-full"
                placeholder="Choose a date"
                [showIcon]="true"
              ></p-calendar>
            </div>
            <div class="field">
              <label class="block text-white mb-2 font-semibold"
                >Select Time</label
              >
              <p-dropdown
                [options]="timeSlots"
                [(ngModel)]="consultationForm.time"
                placeholder="Choose a time slot"
                styleClass="w-full glass-dropdown"
                panelStyleClass="glass-dropdown-panel"
              ></p-dropdown>
            </div>
          </div>

          <!-- Step 2: Details -->
          <div class="field">
            <label class="block text-white mb-2 font-semibold">Your Name</label>
            <input
              pInputText
              [(ngModel)]="consultationForm.name"
              class="w-full glass-input"
              placeholder="Enter your full name"
            />
          </div>

          <div class="field">
            <label class="block text-white mb-2 font-semibold"
              >Phone Number</label
            >
            <input
              pInputText
              [(ngModel)]="consultationForm.phone"
              class="w-full glass-input"
              placeholder="Enter your phone number"
            />
          </div>

          <div class="field">
            <label class="block text-white mb-2 font-semibold"
              >Project Requirements</label
            >
            <textarea
              pInputTextarea
              [(ngModel)]="consultationForm.requirements"
              rows="4"
              class="w-full glass-input"
              placeholder="Tell us briefly about your project or needs..."
            ></textarea>
          </div>
        </div>
      </div>
      <ng-template pTemplate="footer">
        <div class="flex justify-end gap-3 mt-4">
          <p-button
            label="Cancel"
            (onClick)="displayConsultationDialog = false"
            styleClass="p-button-text text-white"
          ></p-button>
          <p-button
            label="Confirm Booking"
            icon="pi pi-check"
            (onClick)="confirmConsultation()"
            [disabled]="!isValidConsultationForm()"
            styleClass="enhanced-primary-button"
          ></p-button>
        </div>
      </ng-template>
    </p-dialog>

    <!-- CTA Section -->
    <section class="py-20 bg-bg relative overflow-hidden">
      <!-- Background Elements -->
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
          Let's discuss how ITECHPRO can transform your hotel business with
          cutting-edge technology.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <p-button
            label="Schedule a Consultation"
            icon="pi pi-calendar"
            severity="primary"
            [rounded]="true"
            [outlined]="false"
            (onClick)="openConsultationDialog()"
            class="text-lg px-8 py-4 enhanced-button"
          >
          </p-button>
          <p-button
            label="Contact Us"
            icon="pi pi-envelope"
            severity="secondary"
            [rounded]="true"
            [outlined]="true"
            routerLink="/contact"
            class="text-lg px-8 py-4 enhanced-button-secondary"
          >
          </p-button>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      /* Example of component-specific styles if any remain.
         Most generic styles have been moved to styles.scss for global theming. */
      :host {
        display: block;
      }

      /* Chat Messages Styling */
      .chat-messages {
        scrollbar-width: thin;
        scrollbar-color: rgba(212, 175, 55, 0.3) transparent;
      }

      .chat-messages::-webkit-scrollbar {
        width: 6px;
      }

      .chat-messages::-webkit-scrollbar-track {
        background: transparent;
      }

      .chat-messages::-webkit-scrollbar-thumb {
        background: rgba(212, 175, 55, 0.3);
        border-radius: 3px;
      }

      .chat-messages::-webkit-scrollbar-thumb:hover {
        background: rgba(212, 175, 55, 0.5);
      }

      /* Enhanced Buttons for AI Agent - Override global if needed or keep here */
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

      /* In light mode, secondary button needs to be visible */
      :host-context(.light-theme)
        ::ng-deep
        .enhanced-button-secondary
        .p-button,
      :host ::ng-deep .light-theme .enhanced-button-secondary .p-button {
        border-color: rgba(0, 0, 0, 0.2) !important;
        color: var(--color-text) !important;
      }

      :host ::ng-deep .enhanced-button-secondary .p-button:hover {
        border-color: var(--color-primary) !important;
        color: var(--color-primary) !important;
        background: rgba(212, 175, 55, 0.05) !important;
      }

      /* Message styling */
      .message-user {
        background: linear-gradient(
          135deg,
          rgba(212, 175, 55, 0.8),
          rgba(184, 134, 11, 0.8)
        );
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
      }

      .message-ai {
        background: rgba(255, 255, 255, 0.05); /* Default Dark */
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
      }

      /* Light Mode Message Overrides */
      :host-context(.light-theme) .message-ai,
      :host-context(body.light-theme) .message-ai {
        background: rgba(0, 0, 0, 0.05);
        color: var(--color-text);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .box-glow {
        box-shadow:
          0 0 20px rgba(0, 0, 0, 0.2),
          0 0 1px rgba(212, 175, 55, 0.3);
      }

      .icon-glow {
        filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.4));
      }

      .glass-panel {
        /* This is now global, but if we keep it here it overrides. 
           We should let global handle it or refine. 
           Let's keep it here but add light override if not handled globally perfectly yet */
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }

      :host-context(.light-theme) .glass-panel {
        background: rgba(255, 255, 255, 0.8);
        border-color: rgba(0, 0, 0, 0.05);
      }

      .hover-card {
        transition: all 0.3s ease;
      }

      .hover-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(212, 175, 55, 0.3);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }

      :host-context(.light-theme) .hover-card:hover {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .chat-messages {
          height: 300px;
        }
      }
    `,
  ],
})
export class AiAgentComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatContainer') chatContainer!: ElementRef;

  userInput = '';
  isTyping = false;
  messages: ChatMessage[] = [];

  // Consultation Form Data
  displayConsultationDialog = false;
  minDate = new Date();
  consultationForm: ConsultationForm = {
    date: null,
    time: null,
    name: '',
    phone: '',
    requirements: '',
  };

  timeSlots = [
    { label: '09:00 AM', value: '09:00' },
    { label: '10:00 AM', value: '10:00' },
    { label: '11:00 AM', value: '11:00' },
    { label: '01:00 PM', value: '13:00' },
    { label: '02:00 PM', value: '14:00' },
    { label: '03:00 PM', value: '15:00' },
    { label: '04:00 PM', value: '16:00' },
  ];

  quickQuestions = [
    'Smart hotel solutions?',
    'System integration?',
    'Digital transformation?',
    'Custom development?',
    'Mobile app development?',
    'Data analytics?',
  ];

  companyServices: CompanyService[] = [
    {
      id: 'smart-hotels',
      name: 'Smart Hotel Solutions',
      description:
        'Complete system integration for modern hospitality management',
      keywords: ['hotel', 'smart', 'automation', 'hospitality', 'system'],
      icon: 'pi pi-building',
      color: 'bg-gold/10',
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description:
        'Modernize your business with cutting-edge technology solutions',
      keywords: [
        'digital',
        'transformation',
        'modernize',
        'technology',
        'upgrade',
      ],
      icon: 'pi pi-cog',
      color: 'bg-white/10',
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Applications',
      description: 'Custom mobile apps for iOS and Android platforms',
      keywords: ['mobile', 'app', 'ios', 'android', 'application'],
      icon: 'pi pi-mobile',
      color: 'bg-gold/10',
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Responsive web applications and e-commerce solutions',
      keywords: ['web', 'website', 'ecommerce', 'online', 'responsive'],
      icon: 'pi pi-globe',
      color: 'bg-white/10',
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Business intelligence and data-driven insights',
      keywords: [
        'data',
        'analytics',
        'business intelligence',
        'insights',
        'reporting',
      ],
      icon: 'pi pi-chart-bar',
      color: 'bg-gold/10',
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      keywords: ['cloud', 'aws', 'azure', 'deployment', 'infrastructure'],
      icon: 'pi pi-cloud',
      color: 'bg-white/10',
    },
  ];

  ngOnInit() {
    this.addWelcomeMessage();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  // Consultation Methods
  openConsultationDialog() {
    this.displayConsultationDialog = true;
  }

  isValidConsultationForm(): boolean {
    return !!(
      this.consultationForm.date &&
      this.consultationForm.time &&
      this.consultationForm.name.trim() &&
      this.consultationForm.phone.trim()
    );
  }

  confirmConsultation() {
    // In a real app, this would submit to backend
    this.displayConsultationDialog = false;

    // Add success message to chat
    const successMessage: ChatMessage = {
      id: this.generateId(),
      type: 'ai',
      content: `I've successfully scheduled your consultation for ${this.consultationForm.date?.toLocaleDateString()} at ${this.consultationForm.time}. We'll contact you at ${this.consultationForm.phone} shortly to confirm details. Thank you!`,
      timestamp: new Date(),
    };
    this.messages.push(successMessage);

    // Reset form
    this.consultationForm = {
      date: null,
      time: null,
      name: '',
      phone: '',
      requirements: '',
    };
  }

  private addWelcomeMessage() {
    const welcomeMessage: ChatMessage = {
      id: this.generateId(),
      type: 'ai',
      content: `Hello! I'm your ITECHPRO AI Assistant. I'm here to help you understand how our company can assist with your project ideas and business needs. 
<br><br>
What would you like to know about? I can help you with:
<br>• Smart hotel solutions and system integration
<br>• Digital transformation strategies
<br>• Custom software development
<br>• Mobile and web applications
<br>• Data analytics and business intelligence
<br>• Cloud solutions and deployment
<br><br>
Just ask me anything about your project, and I'll show you how ITECHPRO can help bring your vision to life!`,
      timestamp: new Date(),
    };
    this.messages.push(welcomeMessage);
  }

  sendMessage() {
    if (!this.userInput.trim() || this.isTyping) return;

    const userMessage: ChatMessage = {
      id: this.generateId(),
      type: 'user',
      content: this.userInput.trim(),
      timestamp: new Date(),
    };

    this.messages.push(userMessage);
    const userInput = this.userInput.trim();
    this.userInput = '';
    this.isTyping = true;

    // Simulate AI thinking time
    setTimeout(
      () => {
        this.generateAIResponse(userInput);
      },
      1000 + Math.random() * 2000,
    );
  }

  sendQuickQuestion(question: string) {
    this.userInput = question;
    this.sendMessage();
  }

  private generateAIResponse(userInput: string) {
    const response = this.createAIResponse(userInput);

    const aiMessage: ChatMessage = {
      id: this.generateId(),
      type: 'ai',
      content: response,
      timestamp: new Date(),
      isTyping: true,
    };

    this.messages.push(aiMessage);
    this.isTyping = false;

    // Simulate typing effect
    setTimeout(() => {
      const messageIndex = this.messages.findIndex(
        (m) => m.id === aiMessage.id,
      );
      if (messageIndex !== -1) {
        this.messages[messageIndex].isTyping = false;
      }
    }, 2000);
  }

  private createAIResponse(input: string): string {
    const lowerInput = input.toLowerCase();

    // Find matching services
    const matchingServices = this.companyServices.filter((service) =>
      service.keywords.some((keyword) => lowerInput.includes(keyword)),
    );

    if (matchingServices.length > 0) {
      const service = matchingServices[0];
      return this.generateServiceResponse(service, input);
    }

    // General responses based on common queries
    if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      return `Great question about pricing! Our solutions are tailored to your specific needs and project scope. 
<br><br>
We offer:
<br>• <strong>Free consultation</strong> to understand your requirements
<br>• <strong>Custom quotes</strong> based on your project complexity
<br>• <strong>Flexible payment plans</strong> for larger projects
<br>• <strong>Competitive rates</strong> with no hidden fees
<br><br>
I'd recommend scheduling a consultation with our team to discuss your specific project and get a detailed quote. Would you like me to help you understand what factors influence the pricing for your type of project?`;
    }

    if (
      lowerInput.includes('time') ||
      lowerInput.includes('duration') ||
      lowerInput.includes('how long')
    ) {
      return `Project timelines vary based on complexity and requirements. Here's a general overview:
<br><br>
• <strong>Small projects</strong> (websites, simple apps): 2-4 weeks
<br>• <strong>Medium projects</strong> (custom applications): 1-3 months  
<br>• <strong>Large projects</strong> (enterprise solutions): 3-6 months
<br>• <strong>Smart hotel systems</strong>: 2-4 months depending on property size
<br><br>
We always provide detailed project timelines during our consultation phase. Our agile development approach ensures regular updates and the ability to adjust timelines as needed.
<br><br>
What type of project are you considering? I can give you a more specific timeline estimate.`;
    }

    if (lowerInput.includes('support') || lowerInput.includes('maintenance')) {
      return `We provide comprehensive support and maintenance services:
<br><br>
• <strong>24/7 Technical Support</strong> for critical systems
<br>• <strong>Regular maintenance</strong> and updates
<br>• <strong>Performance monitoring</strong> and optimization
<br>• <strong>Security updates</strong> and patches
<br>• <strong>Training sessions</strong> for your team
<br>• <strong>Documentation</strong> and user guides
<br><br>
Our support packages are designed to keep your systems running smoothly and securely. We offer different support tiers based on your needs and budget.
<br><br>
Would you like to know more about our specific support packages?`;
    }

    // Default response
    return `Thank you for your question! Based on what you've shared, I can see you're interested in exploring how ITECHPRO can help with your project.
<br><br>
Here's how we typically approach new projects:
<br><br>
1. <strong>Discovery Phase</strong> - We understand your goals and requirements
<br>2. <strong>Solution Design</strong> - We create a tailored approach for your needs  
<br>3. <strong>Development</strong> - Our expert team builds your solution
<br>4. <strong>Testing & Deployment</strong> - We ensure everything works perfectly
<br>5. <strong>Ongoing Support</strong> - We're here for long-term success
<br><br>
Our expertise includes:
<br>• Smart hotel and hospitality solutions
<br>• Custom software development
<br>• Mobile and web applications
<br>• System integration and automation
<br>• Data analytics and business intelligence
<br>• Cloud solutions and infrastructure
<br><br>
Would you like to schedule a consultation to discuss your specific project in more detail? I can also provide more information about any of these areas.`;
  }

  private generateServiceResponse(
    service: CompanyService,
    input: string,
  ): string {
    const responses: any = {
      'smart-hotels': `Excellent! Smart hotel solutions are one of our specialties. We can help you transform your hospitality business with:
<br><br>
<strong>Key Features:</strong>
<br>• System integration (PMS, POS, Access Control)
<br>• Guest mobile app with check-in/out capabilities
<br>• Room automation and energy management
<br>• Real-time analytics and reporting
<br>• Integration with existing hotel management systems
<br><br>
<strong>Benefits:</strong>
<br>• Enhanced guest experience
<br>• Reduced operational costs
<br>• Improved energy efficiency
<br>• Better staff productivity
<br>• Data-driven decision making
<br><br>
We've successfully implemented smart hotel solutions for properties ranging from boutique hotels to large resorts. Our solutions are scalable and can grow with your business.
<br><br>
What specific aspects of smart hotel technology interest you most?`,

      'digital-transformation': `Perfect! Digital transformation is crucial for staying competitive in today's market. Here's how we can help:
<br><br>
<strong>Our Approach:</strong>
<br>• Assessment of your current systems and processes
<br>• Strategic roadmap for digital transformation
<br>• Modern technology stack implementation
<br>• Staff training and change management
<br>• Ongoing optimization and support
<br><br>
<strong>Common Solutions:</strong>
<br>• Legacy system modernization
<br>• Cloud migration and infrastructure
<br>• Process automation and workflow optimization
<br>• Data integration and analytics
<br>• Customer experience enhancement
<br><br>
We understand that digital transformation can be overwhelming, which is why we provide comprehensive support throughout the entire process.
<br><br>
What areas of your business are you looking to transform digitally?`,

      'mobile-apps': `Great choice! Mobile applications are essential for modern businesses. We develop:
<br><br>
<strong>App Types:</strong>
<br>• Native iOS and Android applications
<br>• Cross-platform solutions (React Native, Flutter)
<br>• Progressive Web Apps (PWAs)
<br>• Enterprise mobile solutions
<br>• E-commerce and marketplace apps
<br><br>
<strong>Our Process:</strong>
<br>• User experience (UX) design and research
<br>• Prototyping and user testing
<br>• Development with modern frameworks
<br>• Quality assurance and testing
<br>• App store deployment and optimization
<br><br>
<strong>Industries We Serve:</strong>
<br>• Hospitality and tourism
<br>• Healthcare and wellness
<br>• E-commerce and retail
<br>• Education and training
<br>• Business and productivity
<br><br>
What type of mobile app are you considering? I can provide more specific guidance based on your needs.`,

      'web-development': `Excellent! Web development is fundamental to your online presence. We create:
<br><br>
<strong>Web Solutions:</strong>
<br>• Responsive websites and web applications
<br>• E-commerce platforms and online stores
<br>• Content management systems (CMS)
<br>• Custom web portals and dashboards
<br><br>
We focus on creating fast, secure, and user-friendly web experiences that drive results.
<br><br>
Do you have a specific web project in mind?`,

      'data-analytics': `Data is your most valuable asset. We help you unlock its potential with:
<br><br>
<strong>Analytics Solutions:</strong>
<br>• Custom dashboard development
<br>• Business intelligence (BI) implementation
<br>• Data visualization and reporting
<br>• Predictive analytics and forecasting
<br>• User behavior tracking
<br><br>
Our solutions help you make informed, data-driven decisions to grow your business.
<br><br>
What kind of data are you looking to analyze?`,

      'cloud-solutions': `Cloud infrastructure provides the scalability and reliability modern businesses need. We offer:
<br><br>
<strong>Cloud Services:</strong>
<br>• Cloud migration strategies
<br>• Serverless architecture design
<br>• DevOps and CI/CD pipelines
<br>• Database management and optimization
<br>• Security and compliance auditing
<br><br>
We work with major cloud providers including AWS, Azure, and Google Cloud to build the best infrastructure for your needs.
<br><br>
Are you currently using cloud services or looking to migrate?`,
    };

    return (
      responses[service.id] ||
      `I'd be happy to tell you more about our ${service.name} services. Could you provide a bit more detail about what you're looking for?`
    );
  }

  private scrollToBottom() {
    try {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  getMessageClasses(type: 'user' | 'ai'): string {
    return type === 'user' ? 'message-user' : 'message-ai';
  }

  generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
