import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RecipeState } from './reducer';

export const SelectRecipeState = createFeatureSelector<RecipeState>('recipes');

/**
 * Selector for showing all recipe data
 */
export const recipeSelect = createSelector(
    SelectRecipeState,
    state => state.recipes
)


/**
 * Selector for showing loader when recipe data gets loading
 */
export const recipeLoading = createSelector(
    SelectRecipeState,
    state => state.loading
)


