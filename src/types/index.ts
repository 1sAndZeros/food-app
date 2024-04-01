import { cusines, dishTypes } from '@/data';

export interface Recipe {
  id: number;
  title: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  healthScore: number;
  extendedIngredients: Ingredient[];
  readyInMinutes: number;
  servings: number;
  image: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  instructions: string;
  diets: string[];
};

export type Dish = (typeof dishTypes)[number];

export type Cuisine = (typeof cusines)[number];

export interface NavLink {
  name: string;
  link: string;
};

export type CookingTime = {
  min: number;
  max: number;
};

export interface Ingredient {
  id: number;
  nameClean: string;
  aisle: string | null;
  amount: number;
  unit: string;
};

export interface Instruction {
  name: string;
  steps: Step[];
};

export interface Step {
  equipment: any[];
  ingredients: Ingredient[];
  number: number;
  step: string;
};

export interface FilterProps {
  dishType?: Dish;
  cuisine?: Cuisine;
  dairyFree?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
  servings?: number;
  cookingTime?: CookingTime;
};

export interface RecipeSearchParams {
  dishType?: Dish;
  cuisine?: Cuisine;
  dairyFree?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
  servings?: number;
  minCookingTime?: number;
  maxCookingTime?: number;
};
