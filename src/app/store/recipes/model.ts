export interface IRecipesState {
      id: number;
      name: string;
      difficulty: string;
      cuisine: string;
      image: string;
      caloriesPerServing: number;
      servings: number;
      prepTimeMinutes: number;
      cookTimeMinutes: number;
      rating: number;
      reviewCount: number;
      userId: number;
      ingredients: Ingredients[];
      instructions: Instructions[];
      tags: Tags[];
      mealType: MealType[];
    }

    export interface Ingredients {
        ingredients: string[]
    }

    export interface Instructions {
        instructions: string[]
    }

    export interface Tags {
        tags: string[]
    }

    export interface MealType {
        mealType: string[]
    }