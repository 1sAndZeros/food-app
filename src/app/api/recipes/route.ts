import data from '../../../data/recipes.json';
import { NextResponse } from 'next/server';

export const GET = async (req: any) => {
  return NextResponse.json(data);
};