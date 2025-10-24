import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal, computed, effect } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/store';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signal',
  imports: [AsyncPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent implements OnInit, OnDestroy {

  counter$: Observable<number>;

  store = inject(Store<IAppState>);

  userService = inject(UserService);

  firstName = signal('Shubham');

  lastName = signal<string>('Suryawanshi');

  courseName = signal<string>("Angular");

  oldCourseName : string = 'Old Angular'

  cityList = signal<string[]>(['Pune', 'Nagpur', 'Satara']);

  currentTime$ = signal<string>('');
  currentTimeSubscription!: Subscription;;
  currentDate$ = signal<string>('');
  currentDateSubscription!: Subscription;

  fullName = computed(() => this.firstName() + ' '+ this.lastName())


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

    this.currentDateSubscription = this.userService.currentTime$.subscribe(res => {
      console.log('Time received using Subject in Signal:');
      this.currentTime$.set(res);
    });

    this.currentDateSubscription = this.userService.currentDate$.subscribe(res => {
      console.log('Date received using Behaviour Subject in Signal:');
      this.currentDate$.set(res);
    });

    effect(() => {
      console.log(this.lastName() + ' change in lastName() & checking using effects.')
    })

    effect(() => {
      console.log(this.firstName() + ' change in firstName() & checking using effects.')
    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.currentTimeSubscription?.unsubscribe();
    this.currentDateSubscription?.unsubscribe();
    console.log('Signal Component Destroyed and unsubscribing the subscriptions');
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

  changeLName() {
    this.lastName.set('Nikam');
  }

  changeFName() {
    this.firstName.set('Santosh');
  }

}
