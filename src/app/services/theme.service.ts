import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Default to true (Dark/Gold theme)
  darkMode = signal<boolean>(true);

  constructor() {
    this.initTheme();
  }

  toggleTheme() {
    this.darkMode.update((val) => !val);
    this.updateBodyClass();
    localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
  }

  private initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode.set(savedTheme === 'dark');
    } else {
      // Default to dark theme as per user preference for "Gold" aesthetic
      this.darkMode.set(true);
    }
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.darkMode()) {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
  }
}
