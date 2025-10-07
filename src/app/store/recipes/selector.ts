import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RecipeState } from './reducer';

export const SelectRecipeState = createFeatureSelector<RecipeState>('recipes');

export const recipeSelect = createSelector(
    SelectRecipeState,
    state => state.recipes
)

export const recipeLoading = createSelector(
    SelectRecipeState,
    state => state.loading
)


