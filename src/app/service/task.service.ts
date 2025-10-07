import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  title = 'Angular 19, To Do Service'

  keyItem = 'todo';

  constructor() { }

  getTasks() {
    let tasks = localStorage.getItem(this.keyItem);
    return tasks ? JSON.parse(tasks) : [];
  }

  saveTask(list: any) {
    localStorage.setItem(this.keyItem, JSON.stringify(list));
  }
}
