import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  AfterViewInit,
  NgZone,
  Injector,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollService } from '../services/scroll.service';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[gsapReveal]',
  standalone: true,
})
export class GsapRevealDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() gsapReveal:
    | 'fade'
    | 'slide-up'
    | 'slide-left'
    | 'slide-right'
    | 'scale' = 'fade';
  @Input() delay: number = 0;
  @Input() duration: number = 0.8;
  @Input() ease: string = 'power2.out';
  @Input() y: number = 40;
  @Input() x: number = 0;
  @Input() scale: number = 0.95;

  private element: HTMLElement;
  private scrollTrigger: ScrollTrigger | null = null;
  private animation: gsap.core.Tween | null = null;
  private isInitialized = false;
  private scrollService: ScrollService;

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    private injector: Injector
  ) {
    this.element = this.el.nativeElement;
    this.scrollService = this.injector.get(ScrollService);
  }

  ngOnInit() {
    // Don't setup animation immediately, wait for AfterViewInit
  }

  ngAfterViewInit() {
    // Use NgZone to ensure we're in the Angular zone
    this.ngZone.runOutsideAngular(() => {
      // Add a small delay to ensure the DOM is fully rendered
      setTimeout(() => {
        this.setupAnimation();
      }, 150);
    });
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private cleanup() {
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
      this.scrollTrigger = null;
    }
    if (this.animation) {
      this.animation.kill();
      this.animation = null;
    }
    this.isInitialized = false;
  }

  private setupAnimation() {
    // Prevent multiple initializations
    if (this.isInitialized) {
      return;
    }

    // Clean up any existing instances
    this.cleanup();

    // Set initial state
    const initialProps: any = {
      opacity: 0,
      duration: 0,
    };

    switch (this.gsapReveal) {
      case 'slide-up':
        initialProps.y = this.y;
        break;
      case 'slide-left':
        initialProps.x = -this.x;
        break;
      case 'slide-right':
        initialProps.x = this.x;
        break;
      case 'scale':
        initialProps.scale = this.scale;
        break;
      default: // fade
        break;
    }

    gsap.set(this.element, initialProps);

    // Create animation properties
    const animationProps: any = {
      opacity: 1,
      duration: this.duration,
      delay: this.delay,
      ease: this.ease,
    };

    switch (this.gsapReveal) {
      case 'slide-up':
        animationProps.y = 0;
        break;
      case 'slide-left':
      case 'slide-right':
        animationProps.x = 0;
        break;
      case 'scale':
        animationProps.scale = 1;
        break;
    }

    // Check if element is already in viewport
    const rect = this.element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewport) {
      // Element is already visible, animate immediately
      this.animation = gsap.to(this.element, animationProps);
      this.isInitialized = true;
    } else {
      // Element is not in viewport, create ScrollTrigger
      this.scrollTrigger = ScrollTrigger.create({
        trigger: this.element,
        start: 'top 90%',
        end: 'bottom 10%',
        onEnter: () => {
          this.animation = gsap.to(this.element, animationProps);
        },
        onEnterBack: () => {
          this.animation = gsap.to(this.element, animationProps);
        },
        once: true,
        invalidateOnRefresh: true,
      });

      this.isInitialized = true;
    }

    // Force a refresh after a short delay to ensure proper initialization
    setTimeout(() => {
      this.scrollService.refreshScrollTrigger();
    }, 100);

    // Additional fallback: if element is in viewport but animation didn't trigger
    setTimeout(() => {
      if (this.isInitialized && !this.animation) {
        const rect = this.element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
          // Force animation if element is visible but animation didn't trigger
          this.animation = gsap.to(this.element, animationProps);
        }
      }
    }, 300);
  }
}
