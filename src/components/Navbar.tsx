import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import Image from 'next/image';

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
              <Image
                src={
                  session?.user?.image ||
                  `https://ui-avatars.com/api/?name=${session?.user?.name}`
                }
                alt='user image'
                width={50}
                height={50}
                style={{ borderRadius: 999 }}
              />
              <Link
                href='/api/auth/signout?callbackUrl=/'
                style={{
                  backgroundColor: 'tomato',
                  padding: 10,
                  borderRadius: 999,
                }}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                href='/api/auth/signin'
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 999,
                }}
              >
                Login
              </Link>
              <Link
                href='/auth/signup'
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 999,
                }}
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
