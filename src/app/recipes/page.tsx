import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import SearchRecipes from "@/components/SearchRecipes";
import InfoCard from "@/components/InfoCard";
import RecipeList from "@/components/RecipeList";
import { Recipe, RecipeSearchParams } from "@/types";
import { fetchRecipes } from "@/utils";

interface RecipePageProps {
  searchParams: RecipeSearchParams
}

const RecipesPage = async ({ searchParams }: RecipePageProps) => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/recipes");
  }

  const data = await fetchRecipes(searchParams);

  const recipes = data?.recipes as Recipe[];

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
