import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AsyncPipe, NgClass } from '@angular/common';
import { TodoDirective } from './todo.directive';
import { Store } from '@ngrx/store';
import { Task } from '../task/task.model';
import { showTodoList } from './store/selector';
import * as TodoActions from './store/action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  imports: [ReactiveFormsModule, NgClass, TodoDirective, AsyncPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

// export class TodoComponent implements OnInit {

//   taskService = inject(TaskService);

//   title!: string;

//   todoForm!: FormGroup;

//   strike!: string;

//   isEditMode = false;
//   editTaskId!: number;

//   todoList!: any[];

//   constructor(private fb: FormBuilder) {
//     this.todoForm = this.fb.group({
//       todoItem: ['', Validators.required]
//     })
//   }

//   ngOnInit(): void {
//     this.title = this.taskService.title;
//     this.todoList = this.taskService.getTasks();
//   }

//   addTask() {
//     if (this.todoForm.invalid) {
//       console.log('form is not valid!');
//       return;
//     }

//     if (this.isEditMode && this.editTaskId) {
//       this.todoList = this.todoList.map((ele) => {
//         return ele.id === this.editTaskId ? {...ele, name: this.todoForm.value.todoItem} : ele
//       });
//       this.isEditMode = false;
//       this.editTaskId = 0;
//     } else {
//       let taskObj = {
//         id: Date.now(),
//         name: this.todoForm.value.todoItem,
//         completed: false
//       }

//       let index = this.todoList.findIndex(ele => ele.name == taskObj.name);
//       if (index == -1) {
//         this.todoList.push(taskObj);
//       }
//     }

//     this.taskService.saveTask(this.todoList);
//     this.todoForm.reset();

//   }

//   toggleComplete(item: any) {
//     item.completed = !item.completed;
//     console.log(this.todoList);
//     this.taskService.saveTask(this.todoList);
//   }

//   editItem(item: any) {
//     this.isEditMode = true;
//     this.editTaskId = item.id;
//     this.todoForm.patchValue({ todoItem: item.name });
//   }

//   deleteItem(item: any) {
//     this.todoList = this.todoList.filter(task => task.id != item.id);
//     this.taskService.saveTask(this.todoList);
//   }

// }

export class TodoComponent implements OnInit {

  title!: string;
  todoForm!: FormGroup;
  isEditMode: boolean = false;
  editTaskId: number = 0;
  strike!: string;

  todoStore = inject(Store<Task>);
  todoList$: Observable<Task[]> = this.todoStore.select(showTodoList);

  constructor(private readonly fb: FormBuilder) {
    this.todoForm = this.fb.group({
      id: [],
      title: ['', Validators.required],
      isCompleted: ['']
    })
  }

  ngOnInit(): void {
    this.todoStore.dispatch(TodoActions.loadTodo());
  }

  addTask(): void {
    if (this.todoForm.valid) {
      if (this.isEditMode && this.editTaskId) {
        let obj: Task = {
          id: this.editTaskId,
          title: this.todoForm.value.title,
          isCompleted: this.todoForm.value.isCompleted
        }
        this.todoStore.dispatch(TodoActions.updateTodo({ todo: obj }));
        this.todoForm.reset();
        this.isEditMode = false;
        this.editTaskId = 0;
        return;
      }


      let title = this.todoForm.value.title;
      this.todoStore.dispatch(TodoActions.addTodo({ title }));
      this.todoForm.reset();
    } else
      alert('Please add todo item.')
  }

  editItem(item: Task) {
    this.isEditMode = true;
    this.editTaskId = item.id;
    this.todoForm.patchValue({ title: item.title, id: item.id, isCompleted: item.isCompleted });
  }

  deleteItem(item: Task) {
    this.todoStore.dispatch(TodoActions.deleteTodo({ id: item.id }))
  }

  toggleComplete(item: Task) {
    let isCompleted = !item.isCompleted;
    let todo = { ...item, isCompleted };
    this.todoStore.dispatch(TodoActions.toggleTodo({ todo }))
  }

}

