import { Directive, HostBinding, HostListener, Input, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appTaskDirective]'
})

export class TaskDirective implements OnChanges {

    @Input() isCompleted: boolean = false;

    constructor(){}

    @HostBinding('style.backgroundColor') bgColor = '#c0e9c0';

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['isCompleted']) {
            this.bgColor = this.isCompleted ?  '#e4a2a2' : '#c0e9c0';
        }
    }


}