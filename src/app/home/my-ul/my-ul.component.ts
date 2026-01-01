
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-my-ul',
  imports: [],
  templateUrl: './my-ul.component.html',
  styleUrl: './my-ul.component.scss'
})
export class MyUlComponent {

  @Input() itemList: string [] = [];

}
