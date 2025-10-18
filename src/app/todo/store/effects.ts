import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Task } from "../../task/task.model";
import { Injectable, inject } from '@angular/core';
import * as TodoActions from "./action";
import { mergeMap, map, switchMap } from "rxjs";
import { TodoService } from "../todo.service";


@Injectable()
export class TodoEffects {

    actions$ = inject(Actions);
    todoService = inject(TodoService);

    // load TODO successfully
    loadTodoSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.loadTodo),
            switchMap(() =>
                this.todoService.getTodos().pipe(
                    map(todoList => TodoActions.loadTodoSuccess({ todoList }))
                )
            )
        )
    )

    // add todo and load addTodoSuccess method
    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.addTodo),
            switchMap(({ title }) => (
                this.todoService.addTodo(title).pipe(
                    map(todo => TodoActions.addTodoSuccess({ todo }))
                )
            ))
        )
    )

    // update todo and load updateTodoSuccess method
    updateTodoSuccess$ = createEffect(() => (
        this.actions$.pipe(
            ofType(TodoActions.updateTodo),
            switchMap(({ todo }) =>
                this.todoService.updateTodo(todo.id, todo.title).pipe(
                    map(updatedTodo => TodoActions.updateTodoSuccess({ todo: updatedTodo }))
                )
            )
        )
    ))

    // delete todo and load deleteTodoSuccess method
    deleteTodoSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.deleteTodo),
            switchMap(({ id }) =>
                this.todoService.deleteTodo(id).pipe(
                    map(() => TodoActions.deleteTodoSuccess({ id }))
                )
            )
        )
    )

    // toggle todo and load toggleTodoSuccess method (when click on DONE, mark it as task done)
    toggleTodoSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.toggleTodo),
            switchMap(({ todo }) =>
                this.todoService.toggleTodo(todo).pipe(
                    map(todo => TodoActions.toggleTodoSuccess({ todo }))
                )
            )
        )
    )


}



