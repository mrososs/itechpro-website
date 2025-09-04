import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {
    this.initializeScrollToTop();
    this.initializeScrollTriggerRefresh();
  }

  private initializeScrollToTop() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTop();
      });
  }

  private initializeScrollTriggerRefresh() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Kill all existing ScrollTriggers first
        ScrollTrigger.killAll();

        // Refresh ScrollTrigger after route change with longer delay
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);
      });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  refreshScrollTrigger() {
    ScrollTrigger.refresh();
  }

  killAllScrollTriggers() {
    ScrollTrigger.killAll();
  }

  refreshAndTriggerAnimations() {
    // Kill all existing triggers
    ScrollTrigger.killAll();

    // Wait for DOM to settle
    setTimeout(() => {
      ScrollTrigger.refresh();

      // Force trigger animations for elements in viewport
      setTimeout(() => {
        const elements = document.querySelectorAll('[gsapReveal]');
        elements.forEach((element: Element) => {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

          if (isInViewport) {
            // Trigger animation manually if element is in viewport
            const event = new Event('scroll');
            window.dispatchEvent(event);
          }
        });
      }, 100);
    }, 100);
  }
}
