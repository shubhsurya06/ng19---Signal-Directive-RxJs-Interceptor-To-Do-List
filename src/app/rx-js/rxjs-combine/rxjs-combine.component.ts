import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { forkJoin, mergeMap, of, from, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-combine',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-combine.component.html',
  styleUrl: './rxjs-combine.component.scss'
})
export class RxjsCombineComponent {

  http = inject(HttpClient);

  cityList$ = of(['Nagpur', 'Pune', 'Satara', 'Latur']);
  stateList$ = of(['MH', 'MP', 'GJ', 'RJ', 'Goa', 'Punjab']);

  user$ = this.http.get('https://jsonplaceholder.typicode.com/users');
  posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts');

  userList: any[] = [];
  postsList: [] = [];

  searchText = new FormControl();

  constructor() {
    this.cityList$.subscribe(res => {
      console.log('City List observable:', res);
    })

    this.stateList$.pipe(
      mergeMap((cities) => from(cities))
    ).subscribe(res => {
      console.log('State List observable:', res);
    });

    forkJoin([this.cityList$, this.stateList$]).subscribe(res => {
      console.log('Fork Join data:', res);
    });


    forkJoin([this.user$, this.posts$]).subscribe(res => {
      // debugger;
      // this.userList = res[0];

    }, error => {
      console.error('Error is this:', error)
    })

    this.searchText.valueChanges.pipe(
      switchMap((search: string) => this.http.get('https://dummyjson.com/products/search?q=' + search))
    ).subscribe(prod => {
      console.log(prod);
    })


  }
}
