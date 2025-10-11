import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Task } from '../task/task.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
    private todoList: Task[] = [{
        id: Date.now(),
        title: 'task 1',
        isCompleted: false
    }];

    getTodos(): Observable<Task[]> {
        return of([...this.todoList]).pipe(delay(300));
    }

    addTodo(title: string): Observable<Task> {
        const newTodo: Task = {
            id: Date.now(),
            title,
            isCompleted: false
        };
        this.todoList.push(newTodo);
        return of(newTodo).pipe(delay(300));
    }

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

    deleteTodo(id: number): Observable<void> {
        this.todoList = this.todoList.filter(t => t.id !== id);
        return of(void 0).pipe(delay(300));
    }

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