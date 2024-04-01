import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import SearchRecipes from "@/components/SearchRecipes";
import InfoCard from "@/components/InfoCard";
import RecipeList from "@/components/RecipeList";
import { Recipe, RecipeSearchParams } from "@/types";
import { fetchRecipes } from "@/utils";
import { Container } from "./styles";

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
      <h1 style={{marginBottom: '1rem'}}>My Recipes</h1>
      <Container>
        <SearchRecipes />
        <InfoCard />
      </Container>
      <RecipeList recipes={recipes} />
    </>
  );
};

export default RecipesPage;
