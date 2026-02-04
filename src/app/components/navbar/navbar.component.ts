import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    MenuModule,
  ],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a
              routerLink="/home"
              class="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="assets/img/logo.png"
                alt="ITECHPRO Logo"
                class="h-10 w-auto"
              />
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a
                routerLink="/home"
                routerLinkActive="text-gold active-link"
                [routerLinkActiveOptions]="{ exact: true }"
                class="nav-link text-white/70 hover:text-gold transition-all duration-300 pb-1 relative font-medium tracking-wide"
              >
                Home
              </a>
              <a
                routerLink="/smart-hotels"
                routerLinkActive="text-gold active-link"
                class="nav-link text-white/70 hover:text-gold transition-all duration-300 pb-1 relative font-medium tracking-wide"
              >
                Smart Hotels
              </a>
              <a
                routerLink="/projects"
                routerLinkActive="text-gold active-link"
                class="nav-link text-white/70 hover:text-gold transition-all duration-300 pb-1 relative font-medium tracking-wide"
              >
                Projects
              </a>
              <a
                routerLink="/team"
                routerLinkActive="text-gold active-link"
                class="nav-link text-white/70 hover:text-gold transition-all duration-300 pb-1 relative font-medium tracking-wide"
              >
                Team
              </a>
              <a
                routerLink="/careers"
                routerLinkActive="text-gold active-link"
                class="nav-link text-white/70 hover:text-gold transition-all duration-300 pb-1 relative font-medium tracking-wide"
              >
                Careers
              </a>
              <a
                routerLink="/ai-agent"
                routerLinkActive="text-gold active-link"
                class="nav-link text-white/70 hover:text-gold transition-all duration-300 pb-1 relative font-medium tracking-wide"
              >
                AI Assistant
              </a>
              <a
                routerLink="/contact"
                routerLinkActive="text-gold active-link"
                class="nav-link text-white/70 hover:text-gold transition-all duration-300 pb-1 relative font-medium tracking-wide"
              >
                Contact
              </a>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:block">
            <p-button
              label="Get Started"
              icon="pi pi-arrow-right"
              severity="primary"
              [rounded]="false"
              [outlined]="false"
              (onClick)="navigateToContact()"
              class="enhanced-primary-button"
              styleClass="uppercase tracking-widest text-xs font-bold"
            >
            </p-button>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              (click)="toggleMobileMenu()"
              class="text-white hover:text-gold transition-colors duration-200 p-2"
            >
              <i
                [class]="isMobileMenuOpen() ? 'pi pi-times' : 'pi pi-bars'"
                class="text-xl"
              >
              </i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        [@slideDown]="isMobileMenuOpen() ? 'open' : 'closed'"
        class="md:hidden bg-bg/95 backdrop-blur-xl border-t border-white/5"
      >
        <div class="px-4 pt-4 pb-6 space-y-2">
          <a
            routerLink="/home"
            routerLinkActive="text-gold bg-white/5 border-l-2 border-gold"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 transition-all duration-200"
          >
            Home
          </a>
          <a
            routerLink="/smart-hotels"
            routerLinkActive="text-gold bg-white/5 border-l-2 border-gold"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 transition-all duration-200"
          >
            Smart Hotels
          </a>
          <a
            routerLink="/projects"
            routerLinkActive="text-gold bg-white/5 border-l-2 border-gold"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 transition-all duration-200"
          >
            Projects
          </a>
          <a
            routerLink="/team"
            routerLinkActive="text-gold bg-white/5 border-l-2 border-gold"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 transition-all duration-200"
          >
            Team
          </a>
          <a
            routerLink="/careers"
            routerLinkActive="text-gold bg-white/5 border-l-2 border-gold"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 transition-all duration-200"
          >
            Careers
          </a>
          <a
            routerLink="/ai-agent"
            routerLinkActive="text-gold bg-white/5 border-l-2 border-gold"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 transition-all duration-200"
          >
            AI Assistant
          </a>
          <a
            routerLink="/contact"
            routerLinkActive="text-gold bg-white/5 border-l-2 border-gold"
            (click)="closeMobileMenu()"
            class="block px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 transition-all duration-200"
          >
            Contact
          </a>
          <div class="px-4 py-4 mt-2">
            <p-button
              label="Get Started"
              icon="pi pi-arrow-right"
              severity="primary"
              [rounded]="false"
              [outlined]="false"
              (onClick)="navigateToContact()"
              class="w-full enhanced-primary-button"
            >
            </p-button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      /* Active link styles with Gold Underline */
      .nav-link {
        position: relative;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: var(--color-primary);
        transition: width 0.3s ease;
      }

      .nav-link:hover::after {
        width: 100%;
      }

      .active-link {
        color: var(--color-primary);
      }

      .active-link::after {
        width: 100%;
        background: var(--color-primary);
        box-shadow: 0 0 10px var(--color-primary-slight);
      }

      /* Logo hover effect */
      a:hover img {
        filter: brightness(1.1);
      }

      a img {
        transition: all 0.3s ease;
      }
    `,
  ],
  animations: [
    trigger('slideDown', [
      state(
        'closed',
        style({
          height: '0',
          opacity: '0',
          overflow: 'hidden',
        })
      ),
      state(
        'open',
        style({
          height: '*',
          opacity: '1',
          overflow: 'visible',
        })
      ),
      transition('closed <=> open', [animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')]),
    ]),
  ],
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);

  constructor(public router: Router) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
    this.closeMobileMenu();
  }
}
