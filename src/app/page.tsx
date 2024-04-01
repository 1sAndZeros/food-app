import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import HeroSection from '@/components/HeroSection';
import RecipeList from '@/components/RecipeList';
import { fetchRecipes } from '@/utils';
import { Recipe, RecipeSearchParams } from '@/types';
import { Header } from '@/components/RecipeList.styles';

interface HomeProps {
  searchParams: RecipeSearchParams;
}

export default async function Home({ searchParams }: HomeProps) {
  // const { recipes = [] } = await fetchRecipes({
  //   dishType: searchParams?.dishType || 'Dinner',
  //   cuisine: searchParams?.cuisine || 'Italian',
  //   dairyFree: searchParams?.dairyFree || false,
  //   vegan: searchParams?.vegan || false,
  //   vegetarian: searchParams?.vegetarian || false,
  //   servings: searchParams?.servings || 1,
  //   cookingTime: {
  //     min: searchParams?.minCookingTime || 10,
  //     max: searchParams?.maxCookingTime || 180,
  //   },
  // });
  const session = await getServerSession(options);

  const data = await fetchRecipes(searchParams);

  const recipes = data?.recipes as Recipe[];

  return (
    <main style={{ display: 'grid', placeItems: 'center' }}>
      <HeroSection />
      <Header />
      <RecipeList recipes={recipes} />
    </main>
  );
}
