import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewTaskService implements OnInit {

  keyItem: string = 'task';

  constructor() { }

  ngOnInit(): void {
    
  }

  // return all tasks and get it from localStorage
  getTasks() {
    let task = localStorage.getItem(this.keyItem);
    return task ? JSON.parse(task) : [];
  }

  // save tasks in localStorage
  saveTask(list: any) {
    localStorage.setItem(this.keyItem, JSON.stringify(list));
  }

}
