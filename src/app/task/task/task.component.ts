import { Component, inject, OnInit } from '@angular/core';
import { Task } from './../task.model';
import { NewTaskService } from './../new-task.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TaskDirective } from '../task.directive';
import { ToolTipDirective } from '../newTooltip.directive';

@Component({
  selector: 'app-task',
  imports: [ReactiveFormsModule, NgClass, TaskDirective, ToolTipDirective],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})

export class TaskComponent implements OnInit {

  newTaskSer = inject(NewTaskService);
  todoForm!: FormGroup;
  taskList: Task[] = [];

  isEditMode: boolean = false;
  editModeId: number = 0;

  edit: string = 'Edit Item';
  delete: string = 'Delete Item';

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.taskList = this.newTaskSer.getTasks();
  }

  saveTasks() {
    if (this.todoForm.invalid) return;
    console.log('task item:', this.todoForm.value.title);

    if (this.isEditMode && this.editModeId != 0) {
      this.taskList = this.taskList.map(ele => {
        return ele.id === this.editModeId ? { ...ele, title: this.todoForm.value.title } : ele;
      });
      this.editModeId = 0;
      this.isEditMode = false;
    } else {
      let obj: Task = {
        id: Date.now(),
        title: this.todoForm.value.title,
        isCompleted: false
      }

      let index = this.taskList.findIndex(item => item.title === obj.title);
      if (index == -1) {
        this.taskList.push(obj);
      }
    }


    this.todoForm.reset();
    this.newTaskSer.saveTask(this.taskList);
  }

  toggleCheckBox(item: Task) {
    item.isCompleted = !item.isCompleted;
    this.newTaskSer.saveTask(this.taskList);
  }

  onEdit(item: Task) {
    this.editModeId = item.id;
    this.isEditMode = true;
    this.todoForm.patchValue({ title: item.title });
  }

  onDelete(item: Task) {
    this.taskList = this.taskList.filter(task => item.id != task.id);
    this.newTaskSer.saveTask(this.taskList);
  }

}
