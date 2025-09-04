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

@Component({
  selector: 'app-ai-agent',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
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
          class="absolute top-20 left-10 w-72 h-72 bg-blue-primary/10 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-green-accent/10 rounded-full blur-3xl animate-pulse"
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
            <i class="pi pi-check-circle text-green-accent mr-2"></i>
            Smart Hotel Solutions
          </span>
          <span class="flex items-center">
            <i class="pi pi-check-circle text-green-accent mr-2"></i>
            Digital Transformation
          </span>
          <span class="flex items-center">
            <i class="pi pi-check-circle text-green-accent mr-2"></i>
            IoT Integration
          </span>
          <span class="flex items-center">
            <i class="pi pi-check-circle text-green-accent mr-2"></i>
            Custom Development
          </span>
        </div>
      </div>
    </section>

    <!-- AI Chat Interface -->
    <section class="py-20 bg-surface bg-pattern">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Chat Container -->
        <div
          gsapReveal="slide-up"
          [delay]="0.2"
          class="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-glow-primary"
        >
          <!-- Chat Header -->
          <div
            class="flex items-center justify-between mb-6 pb-4 border-b border-white/10"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10  rounded-xl flex items-center justify-center"
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
              <div
                class="w-2 h-2 bg-green-accent rounded-full animate-pulse"
              ></div>
              <span class="text-green-accent text-sm">Online</span>
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
                class="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <i class="pi pi-comments text-white text-2xl"></i>
              </div>
              <h3 class="text-white font-semibold mb-2">
                Start a Conversation
              </h3>
              <p class="text-white/60 text-sm">
                Ask me about your project ideas, and I'll show you how we can
                help!
              </p>
            </div>
            } @else { @for (message of messages; track message.id) {
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
                    class="w-6 h-6  rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <img
                      src="assets/img/logo.png"
                      alt="ITECHPRO Logo"
                      class="h-4 w-auto"
                    />
                  </div>
                  <div class="flex-1">
                    <p class="text-sm" [innerHTML]="message.content"></p>
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
                  {{ message.timestamp | date : 'short' }}
                </p>
              </div>
            </div>
            } }
          </div>

          <!-- Chat Input -->
          <div class="flex space-x-3">
            <input
              pInputText
              [(ngModel)]="userInput"
              placeholder="Ask me about your project ideas..."
              class="flex-1"
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
              class="enhanced-primary-button"
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
                class="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded-full transition-all duration-300"
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
            <div
              class="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                [class]="service.color"
              >
                <i [class]="service.icon + ' text-white text-xl'"></i>
              </div>
              <h4 class="text-white font-semibold mb-2">{{ service.name }}</h4>
              <p class="text-white/70 text-sm">{{ service.description }}</p>
            </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-20 bg-gradient-to-r from-blue-primary/10 to-green-accent/10"
    >
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
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
          Let's discuss how ITECHPRO can transform your hospitality business
          with cutting-edge technology.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <p-button
            label="Schedule a Consultation"
            icon="pi pi-calendar"
            severity="primary"
            [rounded]="true"
            [outlined]="false"
            class="text-lg px-8 py-4 enhanced-primary-button"
          >
          </p-button>
          <p-button
            label="Contact Us"
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

      /* Chat Messages Styling */
      .chat-messages {
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
      }

      .chat-messages::-webkit-scrollbar {
        width: 6px;
      }

      .chat-messages::-webkit-scrollbar-track {
        background: transparent;
      }

      .chat-messages::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
      }

      .chat-messages::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      /* PrimeNG Input Styling */
      ::ng-deep .p-inputtext {
        background: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        color: white !important;
        border-radius: 1rem !important;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease !important;
      }

      ::ng-deep .p-inputtext:focus {
        border-color: var(--color-primary) !important;
        box-shadow: 0 0 0 3px rgba(0, 152, 238, 0.2) !important;
        background: rgba(255, 255, 255, 0.08) !important;
      }

      ::ng-deep .p-inputtext::placeholder {
        color: rgba(255, 255, 255, 0.5) !important;
      }

      /* PrimeNG Button Styling */
      ::ng-deep .p-button {
        border-radius: 1rem !important;
        font-weight: 600 !important;
        transition: all 0.3s ease !important;
        position: relative;
        overflow: hidden;
      }

      ::ng-deep .p-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        transition: left 0.5s;
      }

      ::ng-deep .p-button:hover::before {
        left: 100%;
      }

      ::ng-deep .p-button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 25px var(--color-shadow-primary) !important;
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

      /* Message styling */
      .message-user {
        background: linear-gradient(
          135deg,
          var(--color-primary),
          var(--color-secondary)
        );
        color: white;
      }

      .message-ai {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
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

  quickQuestions = [
    'Smart hotel solutions?',
    'IoT integration?',
    'Digital transformation?',
    'Custom development?',
    'Mobile app development?',
    'Data analytics?',
  ];

  companyServices: CompanyService[] = [
    {
      id: 'smart-hotels',
      name: 'Smart Hotel Solutions',
      description: 'Complete IoT integration for modern hospitality management',
      keywords: ['hotel', 'iot', 'smart', 'automation', 'hospitality'],
      icon: 'pi pi-building',
      color: 'bg-blue-primary/20',
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
      color: 'bg-green-accent/20',
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Applications',
      description: 'Custom mobile apps for iOS and Android platforms',
      keywords: ['mobile', 'app', 'ios', 'android', 'application'],
      icon: 'pi pi-mobile',
      color: 'bg-blue-secondary/20',
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Responsive web applications and e-commerce solutions',
      keywords: ['web', 'website', 'ecommerce', 'online', 'responsive'],
      icon: 'pi pi-globe',
      color: 'bg-purple-500/20',
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
      color: 'bg-orange-500/20',
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      keywords: ['cloud', 'aws', 'azure', 'deployment', 'infrastructure'],
      icon: 'pi pi-cloud',
      color: 'bg-cyan-500/20',
    },
  ];

  ngOnInit() {
    this.addWelcomeMessage();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private addWelcomeMessage() {
    const welcomeMessage: ChatMessage = {
      id: this.generateId(),
      type: 'ai',
      content: `Hello! I'm your ITECHPRO AI Assistant. I'm here to help you understand how our company can assist with your project ideas and business needs. 

What would you like to know about? I can help you with:
• Smart hotel solutions and IoT integration
• Digital transformation strategies
• Custom software development
• Mobile and web applications
• Data analytics and business intelligence
• Cloud solutions and deployment

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
    setTimeout(() => {
      this.generateAIResponse(userInput);
    }, 1000 + Math.random() * 2000);
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
        (m) => m.id === aiMessage.id
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
      service.keywords.some((keyword) => lowerInput.includes(keyword))
    );

    if (matchingServices.length > 0) {
      const service = matchingServices[0];
      return this.generateServiceResponse(service, input);
    }

    // General responses based on common queries
    if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      return `Great question about pricing! Our solutions are tailored to your specific needs and project scope. 

We offer:
• <strong>Free consultation</strong> to understand your requirements
• <strong>Custom quotes</strong> based on your project complexity
• <strong>Flexible payment plans</strong> for larger projects
• <strong>Competitive rates</strong> with no hidden fees

I'd recommend scheduling a consultation with our team to discuss your specific project and get a detailed quote. Would you like me to help you understand what factors influence the pricing for your type of project?`;
    }

    if (
      lowerInput.includes('time') ||
      lowerInput.includes('duration') ||
      lowerInput.includes('how long')
    ) {
      return `Project timelines vary based on complexity and requirements. Here's a general overview:

• <strong>Small projects</strong> (websites, simple apps): 2-4 weeks
• <strong>Medium projects</strong> (custom applications): 1-3 months  
• <strong>Large projects</strong> (enterprise solutions): 3-6 months
• <strong>Smart hotel systems</strong>: 2-4 months depending on property size

We always provide detailed project timelines during our consultation phase. Our agile development approach ensures regular updates and the ability to adjust timelines as needed.

What type of project are you considering? I can give you a more specific timeline estimate.`;
    }

    if (lowerInput.includes('support') || lowerInput.includes('maintenance')) {
      return `We provide comprehensive support and maintenance services:

• <strong>24/7 Technical Support</strong> for critical systems
• <strong>Regular maintenance</strong> and updates
• <strong>Performance monitoring</strong> and optimization
• <strong>Security updates</strong> and patches
• <strong>Training sessions</strong> for your team
• <strong>Documentation</strong> and user guides

Our support packages are designed to keep your systems running smoothly and securely. We offer different support tiers based on your needs and budget.

Would you like to know more about our specific support packages?`;
    }

    // Default response
    return `Thank you for your question! Based on what you've shared, I can see you're interested in exploring how ITECHPRO can help with your project.

Here's how we typically approach new projects:

1. <strong>Discovery Phase</strong> - We understand your goals and requirements
2. <strong>Solution Design</strong> - We create a tailored approach for your needs  
3. <strong>Development</strong> - Our expert team builds your solution
4. <strong>Testing & Deployment</strong> - We ensure everything works perfectly
5. <strong>Ongoing Support</strong> - We're here for long-term success

Our expertise includes:
• Smart hotel and hospitality solutions
• Custom software development
• Mobile and web applications
• IoT integration and automation
• Data analytics and business intelligence
• Cloud solutions and infrastructure

Would you like to schedule a consultation to discuss your specific project in more detail? I can also provide more information about any of these areas.`;
  }

  private generateServiceResponse(
    service: CompanyService,
    input: string
  ): string {
    const responses = {
      'smart-hotels': `Excellent! Smart hotel solutions are one of our specialties. We can help you transform your hospitality business with:

<strong>Key Features:</strong>
• IoT device integration (smart locks, thermostats, lighting)
• Guest mobile app with check-in/out capabilities
• Room automation and energy management
• Real-time analytics and reporting
• Integration with existing hotel management systems

<strong>Benefits:</strong>
• Enhanced guest experience
• Reduced operational costs
• Improved energy efficiency
• Better staff productivity
• Data-driven decision making

We've successfully implemented smart hotel solutions for properties ranging from boutique hotels to large resorts. Our solutions are scalable and can grow with your business.

What specific aspects of smart hotel technology interest you most?`,

      'digital-transformation': `Perfect! Digital transformation is crucial for staying competitive in today's market. Here's how we can help:

<strong>Our Approach:</strong>
• Assessment of your current systems and processes
• Strategic roadmap for digital transformation
• Modern technology stack implementation
• Staff training and change management
• Ongoing optimization and support

<strong>Common Solutions:</strong>
• Legacy system modernization
• Cloud migration and infrastructure
• Process automation and workflow optimization
• Data integration and analytics
• Customer experience enhancement

We understand that digital transformation can be overwhelming, which is why we provide comprehensive support throughout the entire process.

What areas of your business are you looking to transform digitally?`,

      'mobile-apps': `Great choice! Mobile applications are essential for modern businesses. We develop:

<strong>App Types:</strong>
• Native iOS and Android applications
• Cross-platform solutions (React Native, Flutter)
• Progressive Web Apps (PWAs)
• Enterprise mobile solutions
• E-commerce and marketplace apps

<strong>Our Process:</strong>
• User experience (UX) design and research
• Prototyping and user testing
• Development with modern frameworks
• Quality assurance and testing
• App store deployment and optimization

<strong>Industries We Serve:</strong>
• Hospitality and tourism
• Healthcare and wellness
• E-commerce and retail
• Education and training
• Business and productivity

What type of mobile app are you considering? I can provide more specific guidance based on your needs.`,

      'web-development': `Excellent! Web development is fundamental to your online presence. We create:

<strong>Web Solutions:</strong>
• Responsive websites and web applications
• E-commerce platforms and online stores
• Content management systems (CMS)
• Custom web portals and dashboards
• API development and integration

<strong>Technologies We Use:</strong>
• Modern frameworks (Angular, React, Vue.js)
• Backend development (Node.js, Python, .NET)
• Database design and optimization
• Cloud deployment and hosting
• SEO optimization and performance tuning

<strong>Key Features:</strong>
• Mobile-first responsive design
• Fast loading times and optimization
• Security and data protection
• Scalable architecture
• Analytics and reporting integration

What type of web solution are you looking for? I can help you understand the best approach for your specific needs.`,

      'data-analytics': `Fantastic! Data analytics can transform how you make business decisions. We provide:

<strong>Analytics Solutions:</strong>
• Business intelligence dashboards
• Real-time data visualization
• Predictive analytics and forecasting
• Customer behavior analysis
• Performance monitoring and KPI tracking

<strong>Data Sources We Integrate:</strong>
• Customer databases and CRM systems
• Website and app analytics
• Social media and marketing data
• IoT sensors and device data
• Financial and operational systems

<strong>Benefits:</strong>
• Data-driven decision making
• Improved operational efficiency
• Better customer insights
• Competitive advantage
• Cost reduction and optimization

What type of data are you looking to analyze? I can help you understand how to extract valuable insights from your information.`,

      'cloud-solutions': `Perfect! Cloud solutions provide scalability, security, and cost-effectiveness. We offer:

<strong>Cloud Services:</strong>
• Cloud migration and strategy
• Infrastructure as a Service (IaaS)
• Platform as a Service (PaaS)
• Software as a Service (SaaS) solutions
• Hybrid and multi-cloud architectures

<strong>Cloud Providers:</strong>
• Amazon Web Services (AWS)
• Microsoft Azure
• Google Cloud Platform (GCP)
• Private cloud solutions
• Cloud security and compliance

<strong>Benefits:</strong>
• Scalable infrastructure
• Reduced IT costs
• Enhanced security and compliance
• Disaster recovery and backup
• Global accessibility and performance

What type of cloud solution are you considering? I can help you understand the best cloud strategy for your business needs.`,
    };

    return (
      responses[service.id as keyof typeof responses] ||
      this.createAIResponse(input)
    );
  }

  getMessageClasses(type: 'user' | 'ai'): string {
    return type === 'user' ? 'message-user' : 'message-ai';
  }

  private scrollToBottom() {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
