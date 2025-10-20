import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  // current time using RxJs Subject
  currentTime$: Subject<string> = new Subject<string>();

  // current date using RxJs Behaviour Subject
  currentDate$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getUserData() {
    return this.http.get('https://dummyjson.com/users/1');
  }

}
