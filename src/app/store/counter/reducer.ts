import { createReducer, on } from "@ngrx/store";
import { increment, decrement } from "../counter/action";

export const initialState = 5;

export const NewCounterReducer = createReducer(
    initialState,

    on(increment, (state) => state + 1),

    on(decrement, (state) => state > 0 ? state - 1: 0)
)
