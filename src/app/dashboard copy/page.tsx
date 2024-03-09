import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

export default async function Page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/dashboard');
  }

  console.log(session);

  return (
    <div>
      <h1>Hello, Dashboard Page!</h1>
      <p>
        Logged in as: {session?.user?.name} ({session?.user?.email})
      </p>
      <Image
        src={
          session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name}`
        }
        alt='user image'
        width={50}
        height={50}
        style={{ borderRadius: 999 }}
      />
    </div>
  );
}
