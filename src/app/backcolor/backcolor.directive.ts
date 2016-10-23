import {Directive, ElementRef, Input, Renderer, OnInit} from '@angular/core';

@Directive({
  selector: '[appBackcolor]'
})
export class BackcolorDirective implements OnInit {
  @Input() appBackcolor: string;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit(): void {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.appBackcolor);
  }
}
