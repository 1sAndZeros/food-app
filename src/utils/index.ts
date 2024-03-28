import { Dish } from '@/types';

export const fetchRecipes = async (filters: { dishType?: Dish }) => {
  const { dishType } = filters;
  try {
    const API_KEY = process.env.FOOD_API_KEY;
    // const URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`;
    const URL = `http://localhost:3000/api/recipes?dishType=${dishType}`;
    console.log('url', URL);
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
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
