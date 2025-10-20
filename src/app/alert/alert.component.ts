import { Component, inject } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  userSer = inject(UserService);

  currentTime!: string;
  currentDate!: string;

  constructor() {
    this.userSer.currentTime$.subscribe((time) => {
      console.log('Alert current time gets printed using SUBJECT:');
      this.currentTime = time;
    });
    
    this.userSer.currentDate$.subscribe((date) => {
      console.log('Alert current date gets printed using Behaviour Subject:');
      this.currentDate = date;
    });
  }
}
