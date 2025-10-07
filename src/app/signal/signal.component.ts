import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-signal',
  imports: [AsyncPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent implements OnInit {

  counter$: Observable<number>;

  store = inject(Store<IAppState>);

  firstName = signal('Shubham');

  lastName = signal<string>('Suryawanshi');

  courseName = signal<string>("Angular");

  oldCourseName : string = 'Old Angular'

  cityList = signal<string[]>(['Pune', 'Nagpur', 'Satara']);

  rollNo = signal<number>(0);

  stateList = signal<any>({
    name: 'Shubham',
    age: 29,
    city: 'Ahmedabad'
  })

  constructor() {

    this.counter$ = this.store.select('count');

    setTimeout(()=>{
      
      this.oldCourseName = 'Old React JS';
      // this.courseName.set('React JS');
    }, 5000)
  }

  ngOnInit(): void {
  }

  addCity() {
    this.cityList.update((oldArr: string[]) => [...oldArr, 'Mumbai']);
  }

  addPinCode() {
    this.stateList.update((oldObj: any) => ({...oldObj, 'pinCode': 380015}));
  }

  increment() {
    this.rollNo.update(oldValue => oldValue + 1);
  }

}
