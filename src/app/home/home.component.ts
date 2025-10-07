import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, signal, inject } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { MyUlComponent } from './my-ul/my-ul.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IAppState } from '../store/store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-home',
  imports: [HighlightDirective, MyUlComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  color = '';

  count = signal(0);

  counter$: Observable<number>;

  store = inject(Store<IAppState>);

  cityList: string[] = ['Mumbai', 'Pune', 'Nagpur'];

  constructor(private changeDetRef: ChangeDetectorRef){
    this.counter$ = this.store.select('count');
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('it should run after 5 seconds');
      this.count.set(10);
      this.changeDetRef.detectChanges();
    }, 5000);

  }

  getCount() {

  }

}
