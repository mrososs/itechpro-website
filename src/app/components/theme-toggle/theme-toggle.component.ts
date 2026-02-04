import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <button
      class="theme-toggle-btn"
      (click)="themeService.toggleTheme()"
      [attr.aria-label]="
        themeService.darkMode() ? 'Switch to Light Mode' : 'Switch to Dark Mode'
      "
    >
      <i
        class="pi"
        [ngClass]="themeService.darkMode() ? 'pi-sun' : 'pi-moon'"
      ></i>
    </button>
  `,
  styles: [
    `
      .theme-toggle-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background: var(--color-primary); /* Gold */
        border: 2px solid rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
      }

      .theme-toggle-btn:hover {
        transform: scale(1.1) rotate(15deg);
        box-shadow: 0 6px 20px rgba(212, 175, 55, 0.6);
        border-color: white;
      }

      .theme-toggle-btn:active {
        transform: scale(0.95);
      }
    `,
  ],
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}
}
