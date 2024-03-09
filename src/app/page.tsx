import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(options);
  if (session) {
    redirect('/dashboard');
  }
  return (
    <main style={{ display: 'grid', placeItems: 'center' }}>
      <h1>Welcome to Food App</h1>
      <p>
        The best place to find the most delicious food and drinks in the world.
      </p>
      <Image
        src='/image-bg.jpg'
        alt=''
        fill
        style={{ zIndex: -99, objectFit: 'cover' }}
      />
    </main>
  );
}
