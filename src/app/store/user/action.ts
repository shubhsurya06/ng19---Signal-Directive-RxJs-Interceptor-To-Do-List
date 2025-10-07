import { createAction, props } from "@ngrx/store";
import { IUser } from "./model";

export const getUserData = createAction('[Get User Data] Get User data from API');

export const loadUserDataSuccess = createAction(
    '[Load User Data Success] Load user data successfully after data received from API',
    props<{user: IUser}>()
)