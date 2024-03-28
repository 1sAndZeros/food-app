import { cusines, dishTypes } from "@/data";

export interface Recipe {
  id: number;
  title: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  healthScore: number;
  extendedIngredients: any[];
  readyInMinutes: number;
  servings: number;
  image: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  instructions: string;
}

export type Dish = (typeof dishTypes)[number];

export type Cuisine = (typeof cusines)[number];

export interface NavLink {
  name: string;
  link: string;
}

export type CookingTime = {
  min: number;
  max: number;
};
