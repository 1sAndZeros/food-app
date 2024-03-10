import { fetchRecipes } from '@/utils';
import { Recipe } from '@/types';
import RecipeCard from './RecipeCard';

const RecipeList = async () => {
  const { recipes }: { recipes: Recipe[] } = await fetchRecipes();
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto'}}>
      <h1>Recipes</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
