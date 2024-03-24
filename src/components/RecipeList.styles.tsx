'use client';

import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { updateSearchParams } from '@/utils';
import { dishTypes } from '@/data';
import { Dish } from '@/types';

const StyledDiv = styled.div`
  /* max-width: 1400px; */
  margin: 0 auto;
  width: 100%;

  & .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  @media screen and (min-width: 1280px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
    }
  }
`;

const StyledHeader = styled.div`
  font-size: 2rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.neutral.black};

  & h2 {
    text-transform: uppercase;
  }

  & p {
    font-size: 1.25rem;
    max-width: 500px;
  }

  > div {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-block: 1rem;
  }

  & button.active {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.neutral.black};
    border-color: ${(props) => props.theme.colors.neutral.black};
  }
`;

export const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dish = searchParams.get('dishType') as Dish | null;
  const [activeType, setActiveType] = useState<Dish | null>(dish || 'Dinner');

  const handleChangeType = (type: Dish) => {
    setActiveType(type);
    const newPathName = updateSearchParams('dishType', type.toLowerCase());
    router.push(newPathName, { scroll: false });
  };

  return (
    <StyledHeader>
      <h2>Featured Recipes</h2>
      <p>
        With our diverse collection of recipes we have something to satisfy
        every palate.
      </p>
      <div>
        {dishTypes.map((type, i) => (
          <Button
            className={activeType === type ? 'active' : ''}
            key={i}
            type='button'
            variant='ghostgrey'
            onClick={(e) => handleChangeType(type)}
          >
            {type}
          </Button>
        ))}
      </div>
    </StyledHeader>
  );
};

export default StyledDiv;
