import { createAction, props } from "@ngrx/store";
import { IRecipesState } from "./model";

export const getRecipesData = createAction('[GetRecipeData] Get recipes from API');

export const loadRecipesDataSuccess = createAction(
    '[Load Recipe Data Success] Load Recipe data success',
    props<{recipes: IRecipesState}>()
)
