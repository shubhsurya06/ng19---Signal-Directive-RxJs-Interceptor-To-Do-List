import { createSelector, createFeatureSelector } from "@ngrx/store";
import { TodoInitialState } from "./reducer";


export const TodoSelectorState = createFeatureSelector<TodoInitialState>('todoList');


export const showTodoList = createSelector(
    TodoSelectorState,
    state => state.todoList
)

