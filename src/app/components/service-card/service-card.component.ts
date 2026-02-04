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
        class="glass-hover bg-surface/40 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-glow h-full flex flex-col relative overflow-hidden"
      >
        <!-- Shimmer effect -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        ></div>

        <!-- Icon -->
        <div
          class="w-16 h-16 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all duration-300 icon-glow"
        >
          <i
            [class]="getIconClass(service.icon)"
            class="text-3xl text-gold"
          ></i>
        </div>

        <!-- Content -->
        <div class="flex-1 relative z-10">
          <h3
            class="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300"
          >
            {{ service.title }}
          </h3>
          <p class="text-white/60 mb-6 leading-relaxed text-sm">
            {{ service.summary }}
          </p>
        </div>

        <!-- Button -->
        <div class="mt-auto relative z-10">
          <a
            [routerLink]="service.link"
            class="inline-flex items-center text-gold hover:text-primary-light transition-all duration-300 group-hover:translate-x-1 font-semibold text-sm uppercase tracking-wide"
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
        perspective: 1000px;
      }

      .service-card:hover {
        transform: translateY(-8px);
      }

      .icon-glow {
        filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.2));
      }

      .service-card:hover .icon-glow {
        filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.4));
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
