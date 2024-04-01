'use client';

import { Recipe } from '@/types';
import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import { Star1, Apple, Milk } from 'iconsax-react';
import { convertTime } from '@/utils';
import Button from './Button';
import VegetarianIcon from '@/assets/svg-icons/vegan.svg';

interface RecipeCardProps {
  recipe: Recipe;
}

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  height: 400px;
  padding: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
  }

  img {
    object-fit: cover;
    filter: brightness(50%);
    z-index: -1;
  }

  .recipe__content {
    /* font-size: 0.75rem; */
  }

  .icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  .details {
    font-size: 0.75rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  button {
    font-size: 0.75rem;
  }

  .diet-icons {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    top: 1rem;
    left: 1rem;

    & svg {
      width: 3rem;
      height: 3rem;
      fill: white;
      color: black;
      background-color: ${(props) => props.theme.colors.other.green};
      padding: 0.75rem;
      border: 2px solid black;
      border-radius: 50%;
      overflow: visible;
      stroke-width: 5px;
    }
    & .vegan-icon {
      background-color: #1dc31d;
      color: black;
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      font-size: 1.5rem;
      border-radius: 50%;
      border: 2px solid black;
      font-weight: 500;
    }
    & .dairy-icon {
      background-color: ${(props) => props.theme.colors.other.pearl};
    }
    & .vegetarian-icon {
      background-color: white;
      fill: ${(props) => props.theme.colors.primary};
      padding: 0.5rem;
    }
  }
`;

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <StyledDiv>
      <Image src={recipe.image} alt={recipe.title} fill />
      <Star1 className='icon' size='32' />
      <h3 key={recipe.id}>{recipe.title}</h3>
      <p className='recipe__content'>{recipe.cuisines.join(', ')}</p>
      <p className='recipe__content'>
        {recipe.dishTypes
          .map(
            (dish) =>
              `${dish.slice(0, 1).toUpperCase()}${dish.slice(1).toLowerCase()}`,
          )
          .join(', ')}
      </p>
      <div className='details'>
        <p className='recipe__content'>Serves {recipe.servings}</p>
        <div className='diet-icons'>
          {recipe.dairyFree && <Milk className='dairy-icon' />}
          {recipe.vegetarian && <VegetarianIcon className='vegetarian-icon' />}
          {recipe.vegan && <div className='vegan-icon'>VG</div>}
        </div>
        <p className='recipe__content'>
          Time: {convertTime(recipe.readyInMinutes)}
        </p>
        <Button variant='ghost'>View Recipe</Button>
      </div>
    </StyledDiv>
  );
};

export default RecipeCard;
