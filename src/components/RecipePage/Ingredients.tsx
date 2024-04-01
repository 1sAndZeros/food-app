'use client';

import { Recipe } from '@/types';
import styled from 'styled-components';

interface IngredientsProps {
    recipe: Recipe
};

const StyledDiv = styled.div`
    display: flex;
`

export default function Ingredients({recipe} : IngredientsProps) {

    return (
        <StyledDiv>
            {/* <Image src={recipe.image} alt={recipe.title} width='600' height='600' /> */}
            <div>
                <p>Ingredients</p>
                <div>
                    {recipe.extendedIngredients.map((item) => {
                        return (<p key={item.id}>
                            {item.nameClean}
                        </p>)
                    })}
                </div>
            </div>
        </StyledDiv>
    )
};