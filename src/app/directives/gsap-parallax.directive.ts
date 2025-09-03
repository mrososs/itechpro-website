import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[gsapParallax]',
  standalone: true
})
export class GsapParallaxDirective implements OnInit, OnDestroy {
  @Input() gsapParallax: 'y' | 'x' = 'y';
  @Input() speed: number = 0.5;
  @Input() start: string = 'top bottom';
  @Input() end: string = 'bottom top';

  private element: HTMLElement;
  private scrollTrigger: ScrollTrigger | null = null;

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;
  }

  ngOnInit() {
    this.setupParallax();
  }

  ngOnDestroy() {
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
    }
  }

  private setupParallax() {
    const direction = this.gsapParallax === 'y' ? 'yPercent' : 'xPercent';
    const value = this.gsapParallax === 'y' ? -this.speed * 100 : -this.speed * 100;

    this.scrollTrigger = ScrollTrigger.create({
      trigger: this.element,
      start: this.start,
      end: this.end,
      scrub: true,
      animation: gsap.to(this.element, {
        [direction]: value,
        ease: 'none'
      })
    });
  }
}
