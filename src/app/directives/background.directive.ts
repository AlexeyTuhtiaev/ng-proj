import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';
@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  @HostBinding ('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'blue');
    // this.renderer.addClass(nativeElement, 'white-text');
    // this.element.nativeElement.style.backgroundColor='red';
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
    this.background='green';

  }
  @HostListener('mouseleave') mouseLeave(event: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.background='transparent';
  }
}
