'use client'
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import User from './User';

interface NavLink {
  name: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
      name: 'Home',
      link: "/"
  },
  {
      name: "My recipes",
      link: "/recipes"
  },
  {
      name: "About Us",
      link: "/about"
  }
]

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
    gap: .4rem;
  }
  & nav {
    text-transform: uppercase;
    display: flex;
    list-style: none;
    gap: 1rem;
  
    & a {
      color: ${props => props.theme.colors.neutral.grey};
      font-size: clamp(.7rem, 2vw, .8rem);
    }
    .active {
        color: ${props => props.theme.colors.neutral.black};
        border-bottom: 2px solid ${props => props.theme.colors.primary};
      }
  }
`;

const Navbar = () => {
  const pathname = usePathname();
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
                  <Link className={isActive(link.link) ? 'active' : ''} href={link.link}>{link.name}
                  </Link>
              </li>
          ))}
        </nav>
        <User />
      </StyledNavbar>
  );
};

export default Navbar;
