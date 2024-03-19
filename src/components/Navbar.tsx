import Link from './Link';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import Image from 'next/image';
import Avatar from './Avatar';

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <header>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          backgroundColor: session
            ? 'rgba(75, 127, 82)'
            : 'rgba(75, 127, 82, 0.5)',
          marginBottom: 20,
        }}
      >
        <Link href='/'>Food App</Link>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}
        >
          {session ? (
            <>
              <Link href='/client'>Client</Link>
              <Link href='/dashboard'>Dashboard</Link>
              <p>
                {session?.user?.name} ({session?.user?.email})
              </p>
              <Avatar size='small' />
              <Link href='/api/auth/signout?callbackUrl=/' variant='danger'>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link href='/api/auth/signin'>Login</Link>
              <Link href='/auth/signup'>Signup</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
