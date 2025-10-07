import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { mergeMap, Observable, of, from, interval, timer, filter, map, Subject, BehaviorSubject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CommonServiceService } from '../common-service.service';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-basic',
  imports: [ReactiveFormsModule, FormsModule],
  standalone: true,
  templateUrl: './rxjs-basic.component.html',
  styleUrl: './rxjs-basic.component.scss'
})
export class RxjsBasicComponent implements OnInit {

  userId: number = 0;
  
  commonSer = inject(CommonServiceService);

  cityList$ = of('Pune', 'Mumbai', 'Nagpur');

  stateList$ = from(['Maharashtra', 'Gujarat', 'Rajasthan']);

  interval$ = interval(3000).pipe(
    take(10)
  );

  noList$ = from([11,12,13,14,15,16,17,18,19,20]);
  newNoList$ = of(11,12,13,14,15,16,17,18,19,20);

  searchText = new FormControl();

  // subjects
  justName$ = new Subject();
  rollNo$ = new Subject<number>();
  timer$ = timer(5000);

  // behaviour subject
  behaveSub$ = new BehaviorSubject('1st behaviour subject');

  constructor() {

    this.searchText.valueChanges.pipe(
      filter((values: string) => values.length >= 5)
    ).subscribe(val => {
      console.log(val);
    })

    // first basic observable
    const myObs$ = new Observable((value) => {
      value.next('This is my first observable');
    });

    myObs$.subscribe(res => {
      console.log(res);
    })

    // cityList observable using .of() operator
    this.cityList$.pipe(
      // mergeMap(cities => from(cities))
    ).subscribe((city) => {
      console.log('city is this:', city)
    })

    // stateList using .from() operator
    this.stateList$.subscribe(states => {
      console.log('Current state is:', states)
    })

    // Interval operator, same as setInterval in JS
    this.interval$.subscribe(val => {
      console.log('Interval time:', val)
    })

    // get all no from noList$() which created using .from() operator
    this.noList$.subscribe((val: number) => {
      console.log('Value:', val)
    })

    // return only even no from noList$() 
    this.noList$.pipe(
      filter(item => item % 2 == 0)
    ).subscribe(even => {
      console.log('Even values:', even)
    })

    // filter even elements from newNoList$ which created using .of() operator
    this.newNoList$.pipe(
      // map((item) => item.filter(m => m % 2 === 0))
    ).subscribe(res => {
      console.log('Even array using newNoList$ Observable:', res)
    })

    // get all users
    this.commonSer.getAllUsers().subscribe(res => {
      console.log('All users using service:', res)
    })

    // get single user data
    this.commonSer.getSingleUser().subscribe(user => {
      console.log('single user data:', user)
    })

  }

  ngOnInit(): void {}

  // constructor() {
  //   this.timer$.subscribe(val => {
  //     this.justName$.next('Darshana Jangam');
  //     this.rollNo$.next(45);

  //     this.behaveSub$.next('2nd Behaviour Subject');
  //   })
  // }

  // ngOnInit(): void {
  //   this.justName$.subscribe(name => {
  //     console.log('Subject name is:', name);
  //   });

  //   this.rollNo$.subscribe((num: number) => {
  //     console.log('Roll no is:', num);
  //   })

  //   this.behaveSub$.subscribe((val: string) => {
  //     console.log('Behaviour Subject:', val);
  //   })
  // }

    getUserId() {
      console.log('userId:', this.userId);
      this.commonSer.getOneUser(this.userId).subscribe((user: any) => {
        console.log('this is user:', user);
      });
    }

}

