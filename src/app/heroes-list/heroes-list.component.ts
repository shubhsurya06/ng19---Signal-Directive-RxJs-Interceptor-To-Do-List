import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-heroes-list',
  imports: [],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent {

  http = inject(HttpClient);
  userList: any = [];
  loader: boolean = true;

  constructor() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      this.loader = false;
      this.userList = res;
    })
  }

}
