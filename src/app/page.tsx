import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import RecipeList from '@/components/RecipeList';

export default async function Home() {
  const session = await getServerSession(options);
  
  return (
    <main style={{ display: 'grid', placeItems: 'center' }}>
      <HeroSection />
      <RecipeList />
    </main>
  );
}
