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



