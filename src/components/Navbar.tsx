import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <header>
      <nav>
        <div>Food App</div>
        <div>
          <Link href='/'>Home</Link>
          <Link href='/dashboard'>Dashboard</Link>
          {session ? (
            <Link href='/api/auth/signout?callbackUrl=/'>Logout</Link>
          ) : (
            <Link href='/api/auth/signin'>Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
