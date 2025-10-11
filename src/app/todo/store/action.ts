import { createAction, props } from "@ngrx/store";
import { Task } from '../../task/task.model';

// get todo
export const loadTodo = createAction('[Get To Do Items], Get to do items');

export const loadTodoSuccess = createAction(
    '[Load Todo Success]',
    props<{todoList: Task[]}>()
)

// add todo
export const addTodo = createAction(
    '[Todo] Add todo',
    props<{title: string}>()
)

// add todo success
export const addTodoSuccess = createAction(
    '[Todo] Add todo success',
    props<{todo: Task}>()
)

// update todo
export const updateTodo = createAction(
    '[Todo] Update Todo',
    props<{todo: Task}>()
)

// udpate todo success
export const updateTodoSuccess = createAction(
    '[Todo] Update Todo Success',
    props<{todo: Task}>()
)

// delete todo
export const deleteTodo = createAction(
    '[Todo] Delete Todo',
    props<{id: number}>()
)

// delete todo success
export const deleteTodoSuccess = createAction(
    '[Todo] Delete Todo Success',
    props<{id: number}>()
)


// toggle todo - complete or in-complete
export const toggleTodo = createAction(
    '[Todo] Toggle Todo',
    props<{todo: Task}>()
)

// toggle todo - complete or in-complete
export const toggleTodoSuccess = createAction(
    '[Todo] Toggle Todo Success',
    props<{todo: Task}>()
)