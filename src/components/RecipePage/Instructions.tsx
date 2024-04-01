'use client';

import { useState, useEffect, use } from 'react';
import { Recipe } from '@/types';
import styled from 'styled-components';
import { Instruction } from '@/types';
import { fetchRecipeInstructions } from '@/utils';

interface InstructionsProps {
    recipe: Recipe
};

const StyledDiv = styled.div`
    display: flex;

    & img {
        object-fit: cover;
    }
`

export default function Instructions ({recipe} : InstructionsProps) {
    const [instructions, setInstructions] = useState<Instruction[]>([]);

    useEffect(() => {
        fetchRecipeInstructions(recipe.id)
            .then((data) => {
                const instructionsData = data;
                if (instructionsData){
                    setInstructions(instructionsData);
                }
            });
    }, []);

    return (
        <StyledDiv>
            Instructions
            {instructions.map((item) => {
                return (
                    <div key={item.name}>
                        <p >{item.name}</p>
                        {item.steps.map((step) => {
                            return (
                                <div>{step.step}</div>
                            )
                        })}
                    </div>
                )
            })}
        </StyledDiv>
    )
}