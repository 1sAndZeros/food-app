import { Cuisine, Dish, Recipe, RecipeSearchParams } from '@/types';
import data from '../../../data/recipes.json';
import { NextResponse, NextRequest } from 'next/server';

type FilterChecks = {
  [key: string]: (recipe: Recipe, value: string) => boolean;
};

const filterChecks: FilterChecks = {
  dairyFree: (recipe: Recipe, value: string) =>
    String(recipe.dairyFree) === value,
  vegan: (recipe: Recipe, value: string) => String(recipe.vegan) === value,
  vegetarian: (recipe: Recipe, value: string) => String(recipe.vegetarian) === value,
  minCookingTime: (recipe: Recipe, value: string) =>
    recipe.readyInMinutes >= +value,
  maxCookingTime: (recipe: Recipe, value: string) =>
    recipe.readyInMinutes <= +value,
  servings: (recipe: Recipe, value: string) =>
    recipe.servings === Number(value),
  dishType: (recipe: Recipe, value: string) =>
    recipe.dishTypes.includes(value.toLowerCase()),
  cuisine: (recipe: Recipe, value: string) => recipe.cuisines.includes(value),
};

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const keys = searchParams.keys() as IterableIterator<string>;
  const keyArr = Array.from(keys);

  let { recipes }: { recipes: Recipe[] } = JSON.parse(JSON.stringify(data));
  recipes = recipes.filter((recipe) => {
    let include = true;
    for (let index = 0; index < keyArr.length; index++) {
      if (!include) {
        return include;
      }
      const key = keyArr[index];
      const func = filterChecks[key as string];
      const check = !func(recipe, searchParams.get(key) as string);
      if (check) include = false;
    }
    return include;
  });

  console.log('recipes', recipes);
  return NextResponse.json({ recipes: recipes });
};
