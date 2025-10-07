import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appToolTipDirective]'
})

export class ToolTipDirective {

    @Input() title!: string;

    @HostBinding('attr.title') elementTitle: string = '';

    @HostListener('mouseenter') onMouseEnter() {
        this.elementTitle = this.title;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.elementTitle = '';
    }
}