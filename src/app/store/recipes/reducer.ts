import { createReducer, on } from "@ngrx/store";
import { IRecipesState } from "./model";
import { getRecipesData, loadRecipesDataSuccess } from "./actions";

export interface RecipeState {
    recipes: IRecipesState[],
    loading: boolean
}


// initial state of recipe, which will be blank array and loader
export const initialState: RecipeState = {
    recipes: [],
    loading: false
}

export const recipesReducer = createReducer(
    initialState,

    on(getRecipesData, (state) => ({
        ...state,
        loading: true
    })),

    on(loadRecipesDataSuccess, (state, { recipes }) => ({
        ...state,
        recipes: Array.isArray(recipes) ? recipes : [recipes],
        loading: false
    }))

)



