import { createReducer, on } from "@ngrx/store";
import { Task } from "../../task/task.model";
import { addTodoSuccess, updateTodoSuccess, deleteTodoSuccess, loadTodoSuccess, toggleTodoSuccess } from "./action";
import * as TodoActions from './action';

export interface TodoInitialState {
    todoList: Task[]
}

export const initialState: TodoInitialState = {
    todoList: []
}

export const todoReducer = createReducer(
    initialState,

    on(TodoActions.addTodoSuccess, (state, {todo}) => ( {
        ...state,
        todoList: [...state.todoList, todo]
    })),

    on(TodoActions.loadTodoSuccess, (state, {todoList}) => ( {
        ...state,
        todoList
    })),

    on(TodoActions.updateTodoSuccess, (state, {todo}) => ({
        ...state,
        todoList: state.todoList.map((item) => item.id === todo.id ? todo : item)
    })),

    on(TodoActions.deleteTodoSuccess, (state, {id}) => ({
        ...state,
        todoList: state.todoList.filter((item) => item.id != id)
    })),

    on(TodoActions.toggleTodoSuccess, (state, {todo}) => ({
        ...state,
        todoList: state.todoList.map((item) => item.id === todo.id ? todo : item)
    }))


)

