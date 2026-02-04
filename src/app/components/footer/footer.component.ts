import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-surface/50 border-t border-white/5 backdrop-blur-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Company Info -->
          <div class="col-span-1 md:col-span-2">
            <div class="text-2xl font-bold text-white mb-6">
              <span class="text-gold"
                ><img
                  src="assets/img/logo.png"
                  alt="ITECHPRO Logo"
                  class="h-10 w-auto"
              /></span>
            </div>
            <p class="text-white/60 mb-8 max-w-md leading-relaxed">
              Egypt's pioneering Smart Hotels technology partner. We build
              high-performing hospitality products that transform guest
              experiences and hotel operations.
            </p>
            <div class="flex space-x-5">
              <a
                href="#"
                class="text-white/40 hover:text-gold transition-colors duration-300"
              >
                <i class="pi pi-facebook text-xl"></i>
              </a>
              <a
                href="#"
                class="text-white/40 hover:text-gold transition-colors duration-300"
              >
                <i class="pi pi-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                class="text-white/40 hover:text-gold transition-colors duration-300"
              >
                <i class="pi pi-twitter text-xl"></i>
              </a>
              <a
                href="#"
                class="text-white/40 hover:text-gold transition-colors duration-300"
              >
                <i class="pi pi-instagram text-xl"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3
              class="text-white font-bold mb-6 tracking-wide uppercase text-sm"
            >
              Quick Links
            </h3>
            <ul class="space-y-4">
              <li>
                <a
                  routerLink="/smart-hotels"
                  class="text-white/60 hover:text-gold transition-colors duration-200 block"
                  >Smart Hotels</a
                >
              </li>
              <li>
                <a
                  routerLink="/projects"
                  class="text-white/60 hover:text-gold transition-colors duration-200 block"
                  >Projects</a
                >
              </li>
              <li>
                <a
                  routerLink="/team"
                  class="text-white/60 hover:text-gold transition-colors duration-200 block"
                  >Team</a
                >
              </li>
              <li>
                <a
                  routerLink="/contact"
                  class="text-white/60 hover:text-gold transition-colors duration-200 block"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3
              class="text-white font-bold mb-6 tracking-wide uppercase text-sm"
            >
              Services
            </h3>
            <ul class="space-y-4">
              <li>
                <a
                  routerLink="/smart-hotels"
                  class="text-white/60 hover:text-gold transition-colors duration-200 block"
                  >Digital Transformation</a
                >
              </li>
              <li>
                <a
                  routerLink="/projects"
                  class="text-white/60 hover:text-gold transition-colors duration-200 block"
                  >Web & Mobile Apps</a
                >
              </li>
              <li>
                <a
                  routerLink="/projects"
                  class="text-white/60 hover:text-gold transition-colors duration-200 block"
                  >IoT & Automation</a
                >
              </li>
              <li>
                <a
                  routerLink="/contact"
                  class="text-white/60 hover:text-gold transition-colors duration-200 block"
                  >Technical Support</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p class="text-white/40 text-sm">
            © 2026 ITECHPRO. All rights reserved.
          </p>
          <div class="flex space-x-8 mt-6 md:mt-0">
            <a
              href="#"
              class="text-white/40 hover:text-gold text-sm transition-colors"
              >Privacy Policy</a
            >
            <a
              href="#"
              class="text-white/40 hover:text-gold text-sm transition-colors"
              >Terms of Service</a
            >
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FooterComponent {}
