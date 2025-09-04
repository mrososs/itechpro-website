import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Service } from '../../services/content.service';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CardModule, ButtonModule],
  template: `
    <div class="service-card h-full group">
      <div
        class="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-primary/50 transition-all duration-500 hover:scale-105 h-full flex flex-col relative overflow-hidden"
      >
        <!-- Shimmer effect -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        ></div>

        <!-- Icon -->
        <div
          class="w-20 h-20 bg-gradient-to-br from-blue-primary/20 to-green-accent/20 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-blue-primary/30 transition-all duration-300 mx-auto group-hover:scale-110 icon-glow"
        >
          <i
            [class]="getIconClass(service.icon)"
            class="text-3xl text-blue-primary"
          ></i>
        </div>

        <!-- Content -->
        <div class="flex-1 relative z-10">
          <h3
            class="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-primary transition-colors duration-300"
          >
            {{ service.title }}
          </h3>
          <p class="text-white/70 mb-6 text-center leading-relaxed">
            {{ service.summary }}
          </p>
        </div>

        <!-- Button -->
        <div class="mt-auto text-center relative z-10">
          <a
            [routerLink]="service.link"
            class="inline-flex items-center text-blue-primary hover:text-blue-secondary transition-all duration-300 group-hover:translate-x-1 font-semibold px-4 py-2 rounded-xl hover:bg-blue-primary/10"
          >
            Learn more
            <i
              class="pi pi-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"
            ></i>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .service-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .service-card:hover {
        transform: translateY(-12px);
      }

      .service-card:hover .bg-black\\/30 {
        background: rgba(0, 0, 0, 0.4) !important;
        border-color: rgba(0, 152, 238, 0.5) !important;
        box-shadow: 0 25px 50px var(--color-shadow-primary);
      }

      .icon-glow {
        filter: drop-shadow(0 0 15px var(--color-primary));
      }

      .service-card:hover .icon-glow {
        filter: drop-shadow(0 0 25px var(--color-primary));
      }
    `,
  ],
})
export class ServiceCardComponent {
  @Input() service!: Service;

  getIconClass(icon: string): string {
    const iconMap: { [key: string]: string } = {
      cpu: 'pi pi-microchip',
      'code-2': 'pi pi-code',
      cloud: 'pi pi-cloud',
      headphones: 'pi pi-headphones',
      'shield-check': 'pi pi-shield',
      megaphone: 'pi pi-megaphone',
    };

    return iconMap[icon] || 'pi pi-star';
  }
}
