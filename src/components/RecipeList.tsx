import RecipeCard from './RecipeCard';
import StyledDiv, { Header } from './RecipeList.styles';
import { Recipe } from '@/types';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <StyledDiv>
      <Header />
      <div className='grid'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </StyledDiv>
  );
};

export default RecipeList;
