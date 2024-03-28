import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import SearchRecipes from '@/components/SearchRecipes';
import Container from '@/components/Container';
import InfoCard from '@/components/InfoCard';
import RecipeList from '@/components/RecipeList';

const RecipesPage = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/recipes');
  }

  return (
    <>
      <h1>My Recipes</h1>
      <div
        style={{ display: 'grid', gridTemplateColumns: '4fr 5fr', gap: '2rem' }}
      >
        <SearchRecipes />
        <InfoCard />
        <RecipeList recipes={[]} />
      </div>
    </>
  );
};

export default RecipesPage;
