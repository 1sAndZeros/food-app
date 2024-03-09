import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function Page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/dashboard');
  }

  return (
    <div>
      <h1>Hello, Dashboard Page!</h1>
      <p>
        Logged in as: {session.user.name} ({session.user.email})
      </p>
      <Image
        src={session?.user?.image || ''}
        alt='user image'
        width={50}
        height={50}
        style={{ borderRadius: 999 }}
      />
    </div>
  );
}

export default DashboardPage;
