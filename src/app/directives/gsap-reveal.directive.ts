import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[gsapReveal]',
  standalone: true
})
export class GsapRevealDirective implements OnInit, OnDestroy {
  @Input() gsapReveal: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' = 'fade';
  @Input() delay: number = 0;
  @Input() duration: number = 0.8;
  @Input() ease: string = 'power2.out';
  @Input() y: number = 40;
  @Input() x: number = 0;
  @Input() scale: number = 0.95;

  private element: HTMLElement;
  private scrollTrigger: ScrollTrigger | null = null;

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;
  }

  ngOnInit() {
    this.setupAnimation();
  }

  ngOnDestroy() {
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
    }
  }

  private setupAnimation() {
    // Set initial state
    const initialProps: any = {
      opacity: 0,
      duration: 0
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

    // Create animation
    const animationProps: any = {
      opacity: 1,
      duration: this.duration,
      delay: this.delay,
      ease: this.ease
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

    // Create ScrollTrigger
    this.scrollTrigger = ScrollTrigger.create({
      trigger: this.element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(this.element, animationProps);
      },
      onEnterBack: () => {
        gsap.to(this.element, animationProps);
      }
    });
  }
}
