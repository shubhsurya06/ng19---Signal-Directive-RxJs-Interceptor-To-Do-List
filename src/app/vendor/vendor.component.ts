import { Component, inject, OnDestroy } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vendor',
  imports: [AlertComponent],
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnDestroy {
  userSer = inject(UserService);
  currentTime!: string;
  private currentTimeSub?: Subscription;
  currentDate!: string;
  private currentDateSub?: Subscription;

  isShowAlert : boolean = false;

  constructor() {
    this.currentTimeSub = this.userSer.currentTime$.subscribe((time) => {
      console.log('Vendor current time gets printed using SUBJECT:');
      this.currentTime = time;
    });

    this.currentDateSub = this.userSer.currentDate$.subscribe((date) => {
      console.log('Vendor current date gets printed using Behaviour Subject:');
      this.currentDate = date;
    });

  }

  ngOnDestroy(): void {
    console.log('unsubscribe from vendor successfully.')
    this.currentTimeSub?.unsubscribe();
    this.currentDateSub?.unsubscribe();
  }
}
