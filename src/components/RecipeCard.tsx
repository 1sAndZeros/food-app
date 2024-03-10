import { Recipe } from '@/types';
import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 20 }}>
      <h2 key={recipe.id}>{recipe.title}</h2>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={400}
        height={200}
        objectFit='cover'
      />
      <div className='recipe__content'>{parse(recipe.summary)}</div>
    </div>
  );
};

export default RecipeCard;
