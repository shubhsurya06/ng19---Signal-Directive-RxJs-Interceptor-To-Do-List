import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { TodoDirective } from './todo.directive';

@Component({
  selector: 'app-todo',
  imports: [ReactiveFormsModule, NgClass, TodoDirective],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent implements OnInit {

  taskService = inject(TaskService);

  title!: string;

  todoForm!: FormGroup;

  strike!: string;

  isEditMode = false;
  editTaskId!: number;

  todoList!: any[];

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      todoItem: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.title = this.taskService.title;
    this.todoList = this.taskService.getTasks();
  }

  addTask() {
    if (this.todoForm.invalid) {
      console.log('form is not valid!');
      return;
    }

    if (this.isEditMode && this.editTaskId) {
      this.todoList = this.todoList.map((ele) => {
        return ele.id === this.editTaskId ? {...ele, name: this.todoForm.value.todoItem} : ele
      });
      this.isEditMode = false;
      this.editTaskId = 0;
    } else {
      let taskObj = {
        id: Date.now(),
        name: this.todoForm.value.todoItem,
        completed: false
      }
  
      let index = this.todoList.findIndex(ele => ele.name == taskObj.name);
      if (index == -1) {
        this.todoList.push(taskObj);
      }
    }

    this.taskService.saveTask(this.todoList);
    this.todoForm.reset();

  }

  toggleComplete(item: any) {
    item.completed = !item.completed;
    console.log(this.todoList);
    this.taskService.saveTask(this.todoList);
  }

  editItem(item: any) {
    this.isEditMode = true;
    this.editTaskId = item.id;
    this.todoForm.patchValue({ todoItem: item.name });
  }

  deleteItem(item: any) {
    this.todoList = this.todoList.filter(task => task.id != item.id);
    this.taskService.saveTask(this.todoList);
  }

}
