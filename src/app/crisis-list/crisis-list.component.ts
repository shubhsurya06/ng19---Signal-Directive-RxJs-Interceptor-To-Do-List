import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IAppState } from '../store/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { increment, decrement } from '../store/counter.action';

@Component({
  standalone: true,
  selector: 'app-crisis-list',
  imports: [AsyncPipe],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.scss'
})
export class CrisisListComponent implements OnInit {

  // routerState = inject(Router.routerState);

  counter$: Observable<number>;
  store = inject(Store<IAppState>);


  cart = ['shoes', 'bags', 'Kurtas'];

  constructor(private router: Router) {
    this.counter$ = this.store.select('count');
  }

  ngOnInit() {
    console.log('this is router state:', this.router.routerState);

    // create new promise for better understanding
    this.startPromiseCreation();
  }

  startPromiseCreation() {

    this.createOrder(this.cart).then((orderId: any) => {
      console.log('OrderId is this:', orderId);
    })

  }

  validateOrder() {
    return true;
  }

  createOrder(cart: any) {

    const pr = new Promise((resolve, reject) => {

      //validateOrder
      if (!this.validateOrder()) {
        let err = new Error('Cart is not valid');
        reject(err);
      }

      // createOrderId
      const orderId = '45234';
      if (orderId) {
        resolve(orderId);
      }

    })

    return pr;

  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
