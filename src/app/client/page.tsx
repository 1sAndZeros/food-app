'use client';

import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Client Rendered Page!</h1>
      <p>
        Logged in as: {session?.user?.name} ({session?.user?.email})
      </p>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt='user image'
          width={50}
          height={50}
          style={{ borderRadius: 999 }}
        />
      )}
    </div>
  );
}
