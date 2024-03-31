import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import SearchRecipes from "@/components/SearchRecipes";
import Container from "@/components/Container";
import InfoCard from "@/components/InfoCard";
import RecipeList from "@/components/RecipeList";
import { Recipe, Dish, Cuisine } from "@/types";
import { fetchRecipes } from "@/utils";

interface RecipePageProps {
  searchParams: {
    dishType: Dish;
    cuisine: Cuisine;
    dairyFree: boolean;
    vegan: boolean;
    vegetarian: boolean;
    servings: number;
    minCookingTime: number;
    maxCookingTime: number;
  };
}

const RecipesPage = async ({ searchParams }: RecipePageProps) => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/recipes");
  }

  const { recipes }: { recipes: Recipe[] } = await fetchRecipes({
    dishType: searchParams?.dishType || "Dinner",
    cuisine: searchParams?.cuisine || "Italian",
    dairyFree: searchParams?.dairyFree || false,
    vegan: searchParams?.vegan || false,
    vegetarian: searchParams?.vegetarian || false,
    servings: searchParams?.servings || 1,
    cookingTime: {
      min: searchParams?.minCookingTime || 10,
      max: searchParams?.maxCookingTime || 180,
    },
  });

  return (
    <>
      <h1>My Recipes</h1>
      <div
        style={{ display: "grid", gridTemplateColumns: "4fr 5fr", gap: "2rem" }}
      >
        <SearchRecipes />
        <InfoCard />
      </div>
      <RecipeList recipes={recipes} />
    </>
  );
};

export default RecipesPage;
