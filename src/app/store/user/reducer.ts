import { createReducer, on } from "@ngrx/store";
import { IUser } from "./model";
import { getUserData, loadUserDataSuccess } from "./action";
import { Action } from "@ngrx/store";

export interface UserState {
    user: IUser | null,
    loading: boolean
}

export const initialState: UserState = {
    user: null,
    loading: false
}

export const userReducer = createReducer(
    initialState,

    on(getUserData, state => ({
        ...state,
        loading: true
    })),

    on(loadUserDataSuccess, (state, {user}) => ({
        ...state,
        user, // or user: action.user if your action creator returns { user: IUser }
        loading: false
    }))
)





