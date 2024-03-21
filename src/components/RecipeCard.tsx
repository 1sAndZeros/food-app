import { Recipe } from '@/types';
import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';

interface RecipeCardProps {
  recipe: Recipe;
}



const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div>
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
