import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Task } from '../task/task.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
    taskObj1: Task = {
        id: Date.now(),
        title: 'task 1',
        isCompleted: false
    }

    private todoList: Task[] = [this.taskObj1];

    // returns a todo list with a simulated delay
    getTodos(): Observable<Task[]> {
        return of([...this.todoList]).pipe(delay(300));
    }

    // adds a new todo with a simulated delay
    addTodo(title: string): Observable<Task> {
        const newTodo: Task = {
            id: Date.now(),
            title,
            isCompleted: false
        };
        this.todoList.push(newTodo);
        return of(newTodo).pipe(delay(300));
    }

    // updates a todo title with a simulated delay
    updateTodo(id: number, title: string): Observable<Task> {
        const index = this.todoList.findIndex(t => t.id === id);
        if (index !== -1) {
            // avoid mutating objects that may be frozen by NgRx runtime checks
            const updated: Task = { ...this.todoList[index], title };
            this.todoList[index] = updated;
            return of(updated).pipe(delay(300));
        }
        return of(undefined as unknown as Task).pipe(delay(300));
    }

    // deletes a todo with a simulated delay
    deleteTodo(id: number): Observable<void> {
        this.todoList = this.todoList.filter(t => t.id !== id);
        return of(void 0).pipe(delay(300));
    }

    // toggles a todo's completion status with a simulated delay
    toggleTodo(todo: Task): Observable<Task> {
        const index = this.todoList.findIndex(item => item.id === todo.id);
        if (index !== -1) {
            const updatedTask: Task = { ...this.todoList[index], isCompleted: todo.isCompleted };
            this.todoList[index] = updatedTask;
            return of(updatedTask).pipe(delay(100));
        }
        return of(undefined as unknown as Task).pipe(delay(100));
    }
}