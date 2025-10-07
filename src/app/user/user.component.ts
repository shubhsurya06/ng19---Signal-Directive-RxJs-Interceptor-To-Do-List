import { Component, inject, OnInit } from '@angular/core';
import { getUserData, loadUserDataSuccess } from '../store/user/action';
import { IAppState } from '../store/store';
import { Store, select } from '@ngrx/store';
import { selectLoading, selectUser } from '../store/user/selector';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IUser } from "../store/user/model";
import { increment, decrement } from '../store/counter/action';

@Component({
  selector: 'app-user',
  imports: [AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  // user store
  userStore = inject(Store<IUser>);

  // counter store
  counterStore = inject(Store<IAppState>);
  counter$!: Observable<IAppState>;

  // user store selectors, which will be used to show data on html
  user$ = this.userStore.select(selectUser);
  loading$ = this.userStore.select(selectLoading);
  
  constructor() {
    this.counter$ = this.counterStore.select('counter');
  }

  ngOnInit(): void {
    // dispatch or call getUserData() from userStore.
    this.userStore.dispatch(getUserData());
  }

  // increment counter from counter store
  increment() {
    this.counterStore.dispatch(increment());
  }

  // decrement counter from counter store
  decrement() {
    this.counterStore.dispatch(decrement());
  }

}
