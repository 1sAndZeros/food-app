'use client';

import { Recipe } from '@/types';
import styled from 'styled-components';
import { Clock, Blur, MenuBoard, Reserve } from 'iconsax-react';

interface HeaderProps {
    recipe: Recipe
}

const StylesDiv = styled.div`
    text-align: center;

    & h2 {
        margin: 2rem auto;
        text-transform: uppercase;
        font-size: 3.5rem;
        max-width: 800px;
    }

    & .details {
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;

        & p {
            display: flex;
            align-items: center;
            gap: .4rem;
        }
    }
`
export default function Header({recipe} : HeaderProps) {
    return (
        <StylesDiv>
            <h2>{recipe.title}</h2>
            <div className='details'>
                <p><Clock /> {recipe.readyInMinutes} min</p>
                <p><Reserve /> {recipe.servings}</p>
                {recipe.cuisines.length > 0 ?
                    <p><MenuBoard /> {recipe.cuisines[0]}</p> :
                    <p><Blur />{recipe.diets[0]}</p>
                }
            </div>
        </StylesDiv>
    )
}