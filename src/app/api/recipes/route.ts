import { Recipe } from "@/types";
import data from "../../../data/recipes.json";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const dishType = req.nextUrl.searchParams.get("dishType");
  const cuisine = req.nextUrl.searchParams.get("cuisine");
  // const dishType = req.nextUrl.searchParams.get('dishType');
  // const dishType = req.nextUrl.searchParams.get('dishType');
  // const dishType = req.nextUrl.searchParams.get('dishType');
  let { recipes } = JSON.parse(JSON.stringify(data));
  if (dishType) {
    recipes = recipes.filter((recipe: Recipe) =>
      recipe.dishTypes.includes(dishType.toLowerCase())
    );
    // return NextResponse.json({ recipes: filteredRecipes });
  }
  if (cuisine) {
    recipes = recipes.filter((recipe: Recipe) =>
      recipe.cuisines.includes(cuisine)
    );
    // return NextResponse.json({ recipes: filteredRecipes });
  }
  return NextResponse.json({ recipes: recipes });
};
