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
      class="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a
              routerLink="/home"
              class="flex items-center space-x-2 text-white hover:text-primary transition-colors duration-200"
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
                routerLinkActive="text-primary active-link"
                [routerLinkActiveOptions]="{ exact: true }"
                class="nav-link text-white/80 hover:text-primary transition-all duration-200 pb-1 relative"
              >
                <i class="pi pi-home mr-2"></i>Home
              </a>
              <a
                routerLink="/smart-hotels"
                routerLinkActive="text-primary active-link"
                class="nav-link text-white/80 hover:text-primary transition-all duration-200 pb-1 relative"
              >
                <i class="pi pi-building mr-2"></i>Smart Hotels
              </a>
              <a
                routerLink="/projects"
                routerLinkActive="text-primary active-link"
                class="nav-link text-white/80 hover:text-primary transition-all duration-200 pb-1 relative"
              >
                <i class="pi pi-briefcase mr-2"></i>Projects
              </a>
              <a
                routerLink="/team"
                routerLinkActive="text-primary active-link"
                class="nav-link text-white/80 hover:text-primary transition-all duration-200 pb-1 relative"
              >
                <i class="pi pi-users mr-2"></i>Team
              </a>
              <a
                routerLink="/careers"
                routerLinkActive="text-primary active-link"
                class="nav-link text-white/80 hover:text-primary transition-all duration-200 pb-1 relative"
              >
                <i class="pi pi-briefcase mr-2"></i>Careers
              </a>
              <a
                routerLink="/contact"
                routerLinkActive="text-primary active-link"
                class="nav-link text-white/80 hover:text-primary transition-all duration-200 pb-1 relative"
              >
                <i class="pi pi-envelope mr-2"></i>Contact
              </a>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:block">
            <p-button
              label="Get Started"
              icon="pi pi-rocket"
              severity="primary"
              [rounded]="true"
              [outlined]="false"
              (onClick)="navigateToContact()"
              class="enhanced-button"
            >
            </p-button>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              (click)="toggleMobileMenu()"
              class="text-white hover:text-primary transition-colors duration-200 p-2"
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
        class="md:hidden bg-black/30 backdrop-blur-xl border-t border-white/10"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            routerLink="/home"
            routerLinkActive="text-primary bg-primary/10"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="closeMobileMenu()"
            class="block px-3 py-2 text-white/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-lg"
          >
            <i class="pi pi-home mr-2"></i>Home
          </a>
          <a
            routerLink="/smart-hotels"
            routerLinkActive="text-primary bg-primary/10"
            (click)="closeMobileMenu()"
            class="block px-3 py-2 text-white/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-lg"
          >
            <i class="pi pi-building mr-2"></i>Smart Hotels
          </a>
          <a
            routerLink="/projects"
            routerLinkActive="text-primary bg-primary/10"
            (click)="closeMobileMenu()"
            class="block px-3 py-2 text-white/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-lg"
          >
            <i class="pi pi-briefcase mr-2"></i>Projects
          </a>
          <a
            routerLink="/team"
            routerLinkActive="text-primary bg-primary/10"
            (click)="closeMobileMenu()"
            class="block px-3 py-2 text-white/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-lg"
          >
            <i class="pi pi-users mr-2"></i>Team
          </a>
          <a
            routerLink="/careers"
            routerLinkActive="text-primary bg-primary/10"
            (click)="closeMobileMenu()"
            class="block px-3 py-2 text-white/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-lg"
          >
            <i class="pi pi-briefcase mr-2"></i>Careers
          </a>
          <a
            routerLink="/contact"
            routerLinkActive="text-primary bg-primary/10"
            (click)="closeMobileMenu()"
            class="block px-3 py-2 text-white/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-lg"
          >
            <i class="pi pi-envelope mr-2"></i>Contact
          </a>
          <div class="px-3 py-2">
            <p-button
              label="Get Started"
              icon="pi pi-rocket"
              severity="primary"
              [rounded]="true"
              [outlined]="false"
              (onClick)="navigateToContact()"
              class="w-full enhanced-button"
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

      /* Active link styles */
      .nav-link {
        position: relative;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(
          90deg,
          var(--color-primary),
          var(--color-primary-light)
        );
        transition: width 0.3s ease;
        border-radius: 1px;
      }

      .nav-link:hover::after {
        width: 100%;
      }

      .active-link::after {
        width: 100%;
        background: linear-gradient(
          90deg,
          var(--color-primary),
          var(--color-primary-light)
        );
        box-shadow: 0 0 10px var(--color-primary);
      }

      /* Enhanced button styles */
      .enhanced-button {
        box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3),
          0 8px 25px rgba(0, 212, 255, 0.2);
        transition: all 0.3s ease;
      }

      .enhanced-button:hover {
        box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4),
          0 12px 35px rgba(0, 212, 255, 0.3);
        transform: translateY(-2px);
      }

      /* Enhanced hover effects */
      a:hover {
        transform: translateY(-1px);
      }

      /* Mobile menu animations */
      .mobile-menu-enter {
        opacity: 0;
        transform: translateY(-10px);
      }

      .mobile-menu-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.3s ease-out;
      }

      .mobile-menu-exit {
        opacity: 1;
        transform: translateY(0);
      }

      .mobile-menu-exit-active {
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease-in;
      }

      /* Logo hover effect */
      a:hover img {
        filter: brightness(1.2);
        transform: scale(1.05);
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
      transition('closed <=> open', [animate('300ms ease-in-out')]),
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
