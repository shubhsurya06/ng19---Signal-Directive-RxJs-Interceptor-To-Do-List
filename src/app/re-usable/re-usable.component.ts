import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-re-usable',
  imports: [],
  templateUrl: './re-usable.component.html',
  styleUrl: './re-usable.component.scss',
})
export class ReUsableComponent implements OnInit {

  @Input() type: string = '';
  @Input() placeholder: string = '';

  @Output() sendEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    console.log('Re-usable component initialized with type:', this.type, 'and placeholder:', this.placeholder);
  }

  sendToParent(ev: Event, input: HTMLInputElement) {
    this.sendEventEmitter.emit(input.value);
    input.value = '';
  }

}
