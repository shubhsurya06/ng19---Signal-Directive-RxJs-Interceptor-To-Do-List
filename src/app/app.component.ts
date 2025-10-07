import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from './store/store';
import { decrement, increment } from './store/counter.action';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19';

  router = inject(Router);

  // counter store
  counter$: Observable<number>;
  store = inject(Store<IAppState>);

  constructor() {
    this.counter$ = this.store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToCrisisList() {
    this.router.navigate(['crisis-list']);
  }

  goToHeroesList() {
    this.router.navigate(['heroes-list']);
  }
}
