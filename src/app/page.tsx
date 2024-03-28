import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import HeroSection from '@/components/HeroSection';
import RecipeList from '@/components/RecipeList';
import { fetchRecipes } from '@/utils';
import { Dish, Recipe } from '@/types';
import { Header } from '@/components/RecipeList.styles';

interface HomeProps {
  searchParams: { dishType: Dish };
}

export default async function Home({ searchParams }: HomeProps) {
  const { recipes }: { recipes: Recipe[] } = await fetchRecipes({
    dishType: searchParams?.dishType || 'dinner',
  });
  const session = await getServerSession(options);

  return (
    <main style={{ display: 'grid', placeItems: 'center' }}>
      <HeroSection />
      <RecipeList recipes={recipes} />
    </main>
  );
}
