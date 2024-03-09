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
          backgroundColor: 'cadetblue',
          marginBottom: 20,
        }}
      >
        <Link href='/dashboard'>Food App</Link>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Link href='/client'>Client</Link>
          <Link href='/dashboard'>Dashboard</Link>
          {session ? (
            <>
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
            <div
              style={{
                backgroundColor: 'green',
                padding: 10,
                borderRadius: 999,
              }}
            >
              <Link href='/api/auth/signin'>Login</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
