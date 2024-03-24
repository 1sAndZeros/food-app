'use client';

import styled from 'styled-components';
import React, { useState } from 'react';
import Button from './Button';
import { cusines, dishTypes } from '@/data';
import { Cuisine, Dish } from '@/types';
import RangeInput from './RangeInput';
import Container from './Container';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  text-transform: uppercase;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    align-self: center;
  }

  h4,
  label {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }

  .button-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-block: 0.5rem;
  }

  button {
    font-size: 0.75rem;
  }

  button[type='submit'] {
    font-size: 0.75rem;
    background-color: ${(props) => props.theme.colors.neutral.black};
    border: none;
    color: ${(props) => props.theme.colors.neutral.white};
  }

  & button.active {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.neutral[800]};
    border-color: ${(props) => props.theme.colors.neutral[800]};
  }

  .input-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    accent-color: red;
  }

  input[type='checkbox'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid ${(props) => props.theme.colors.neutral[800]};
    position: relative;
    border-radius: 0.25rem;
  }

  input[type='checkbox']:checked::before {
    content: '';
    border: 2px solid ${(props) => props.theme.colors.neutral[800]};
    background-color: ${(props) => props.theme.colors.neutral[800]};
    position: absolute;
    inset: 2px;
    border-radius: 0.25rem;
  }

  select {
    padding: 0.25rem;
    border: 2px solid ${(props) => props.theme.colors.neutral[800]};
    border-radius: 0.25rem;
    font-size: 1rem;
    font-family: inherit;
    background-color: transparent;

    & option {
      border: 2px solid ${(props) => props.theme.colors.neutral[800]};
      border-radius: 0.25rem;
      font-family: inherit;
    }
  }

  .form-group {
    position: relative;
  }

  input[type='range'] {
    ~ p {
      position: absolute;
      bottom: 0;
      font-size: 0.75rem;
      translate: -5px;
    }

    ~ p:last-of-type {
      right: 0;
      translate: 5px;
    }
  }
`;

const SearchRecipes = () => {
  const [activeDishType, setActiveDishType] = useState<Dish | null>('Dinner');
  const [activeCuisineType, setActiveCuisineType] = useState<Cuisine | null>(
    'Italian',
  );
  return (
    <Container>
      <StyledForm>
        <h3>Create Your Recipe</h3>
        <div className='form-group'>
          <h4>Meal Type:</h4>
          <div className='button-container'>
            {dishTypes.map((type, i) => (
              <Button
                className={activeDishType === type ? 'active' : ''}
                key={i}
                type='button'
                variant='ghostgrey'
                onClick={(e) => setActiveDishType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
        <div className='input-group'>
          <label htmlFor='vegetarian'>Vegetarian</label>
          <input id='vegetarian' type='checkbox' />
          <label htmlFor='vegan'>Vegan</label>
          <input id='vegan' type='checkbox' />
          <label htmlFor='dairy-free'>Dairy Free</label>
          <input id='dairy-free' type='checkbox' />
        </div>
        <div className='input-group'>
          <h4>Servings:</h4>
          <select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4+</option>
          </select>
        </div>
        <div className='form-group'>
          <h4>Cuisine:</h4>
          <div className='button-container'>
            {cusines.map((cuisine, i) => (
              <Button
                className={activeCuisineType === cuisine ? 'active' : ''}
                key={i}
                type='button'
                variant='ghostgrey'
                onClick={(e) => setActiveCuisineType(cuisine)}
              >
                {cuisine}
              </Button>
            ))}
          </div>
        </div>
        <div className='form-group'>
          <h4>Cooking Time:</h4>
          <RangeInput min={10} max={180} step={10} />
          <p>10 min</p>
          <p>3H</p>
        </div>
        <Button type='submit'>Apply</Button>
      </StyledForm>
    </Container>
  );
};

export default SearchRecipes;
