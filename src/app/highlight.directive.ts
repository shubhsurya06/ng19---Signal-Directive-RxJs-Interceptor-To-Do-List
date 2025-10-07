import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string | undefined;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setHighlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHighlight('');
  }

  private setHighlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.setAttribute('title', 'Hover text');
  }
}
