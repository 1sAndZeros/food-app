import { Recipe } from '@/types';
import data from '../../../../data/recipes.json';
import { NextResponse, NextRequest } from 'next/server';

interface Props {
  params: {
    id: string;
  };
}

export const GET = async (req: NextRequest, { params }: Props) => {

  let { recipes }: { recipes: Recipe[] } = JSON.parse(JSON.stringify(data));
  const recipe = recipes.find((recipe) => recipe.id.toString() === params.id);
  return NextResponse.json({ recipe });
};