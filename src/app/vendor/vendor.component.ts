import { Component, inject, OnDestroy } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';
import { OfflineDirective } from "../directive/offline.directive";
import { ReUsableComponent } from '../re-usable/re-usable.component';

@Component({
  selector: 'app-vendor',
  imports: [AlertComponent, OfflineDirective, ReUsableComponent],
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

  // reUsable component data sharing starts here
  reUsableType: string = 'password';
  reUsablePlaceholder: string = 'Enter password'
  inputValueFromChild: string = '';
  // reUsable component data sharing ends here

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

  /**
   * get data from child re-usable component
   * @param data 
   */
  getValueFromChild(data: any) {
    console.log('Data received from re-usable component in vendor component:', data);
    this.inputValueFromChild = data;
  }
}
