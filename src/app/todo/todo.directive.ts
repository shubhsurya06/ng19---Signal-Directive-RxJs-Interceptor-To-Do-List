import { Directive, HostListener, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appTodo]'
})
export class TodoDirective implements OnChanges {

  constructor() { }

  @Input() isCompleted!: boolean;

  @HostBinding('style.backgroundColor') bgColor = '#417e41ff';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isCompleted']) {
      this.bgColor = this.isCompleted ? '#c24352ff' : '#417e41ff'
    }
  }

}
