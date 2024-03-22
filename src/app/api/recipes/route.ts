import { Recipe } from '@/types';
import data from '../../../data/recipes.json';
import { NextResponse } from 'next/server';

export const GET = async (req: any) => {
  const dishType = req.nextUrl.searchParams.get('dishType');
  const { recipes } = JSON.parse(JSON.stringify(data));
  if (dishType) {
    const filteredRecipes = recipes.filter((recipe: Recipe) =>
      recipe.dishTypes.includes(dishType.toLowerCase()),
    );
    return NextResponse.json({ recipes: filteredRecipes });
  }
  return NextResponse.json(data);
};
