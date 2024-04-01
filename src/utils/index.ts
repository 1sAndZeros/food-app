import { Dish, FilterProps, Recipe, Instruction } from '@/types';

export const fetchRecipes = async (
  filters: FilterProps,
): Promise<{ recipes: Recipe[] } | undefined> => {

  try {
    const API_KEY = process.env.FOOD_API_KEY;
    // const URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`;
    const searchParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (key === 'cookingTime') {
        searchParams.set('cookingTimeMin', value.min.toString());
        searchParams.set('cookingTimeMax', value.max.toString());
        return;
      }
      searchParams.set(key, value);
    });
    // const URL = `http://localhost:3000/api/recipes?dishType=${dishType}&cuisine=${cuisine}&dairyFree=${dairyFree}&vegan=${vegan}&vegetarian=${vegetarian}&servings=${servings}&minCookingTime=${cookingTime.min}&maxCookingTime=${cookingTime.max}`;
    const URL = `http://localhost:3000/api/recipes?${searchParams.toString()}`;
    console.log('url', URL);
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('error:', error);
  }
};

export const convertTime = (time: number) => {
  if (time < 60) return `${time} min`;
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes ? minutes + 'min' : ''}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};

export const fetchRecipe = async (
  id: string,
): Promise<{ recipe: Recipe } | undefined> => {

  try {
    const URL = `http://localhost:3000/api/recipes/${id}`;
    console.log('url', URL);
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('error:', error);
  }
};

export const fetchRecipeInstructions = async (
  id: number,
): Promise<Instruction[] | undefined> => {

  try {
    const API_KEY = process.env.FOOD_API_KEY;
    console.log(API_KEY, 'keyy')
    const URL = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`;
    console.log('url', URL);
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('error:', error);
  }
};
