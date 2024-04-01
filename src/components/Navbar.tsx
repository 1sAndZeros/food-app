'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import User from './User';
import { navLinks } from '@/data';
import Button from './Button';

const StyledNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #2625223e;
  border-radius: 2rem;
  & .brand {
    display: flex;
    align-items: center;
    font-weight: 600;
    gap: 0.4rem;
  }
  & nav {
    text-transform: uppercase;
    display: flex;
    list-style: none;
    gap: 1rem;

    & a {
      color: ${(props) => props.theme.colors.neutral.grey};
      font-size: clamp(0.7rem, 2vw, 0.8rem);
    }
    .active {
      color: ${(props) => props.theme.colors.neutral.black};
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    }
  }
  & .auth {
    display: flex;
    gap: 1rem;
    align-items: center;
    &.user {
      align-items: center;
      gap: 0.5rem;
    }
    & .create {
      background-color: black;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 999px;
    }
  }
`;

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isActive = (link: string) => pathname === link;

  return (
    <StyledNavbar>
      <Link href='/' className='brand'>
        <Image alt='logo' src='Logo.svg' width='40' height='30' />
        Food App
      </Link>
      <nav>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className={isActive(link.link) ? 'active' : ''}
              href={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </nav>
      {session && session.user ? (
        <div className='auth user'>
          <User />
          <Link href='/api/auth/signout'>Logout</Link>
        </div>
      ) : (
        <div className='auth'>
          <Link href='/api/auth/signin'>Login</Link>
          <Link href='/auth/signup' className='create'>
            Create Account
          </Link>
        </div>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
