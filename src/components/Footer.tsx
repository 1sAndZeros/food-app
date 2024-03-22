"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px, 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding: 1.5rem;
  border: 1px solid #2625223e;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.neutral[800]};
  color: ${(props) => props.theme.colors.secondary};
  & .brand {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    align-items: center;
    font-weight: 600;
    gap: 0.4rem;
    & img {
      filter: grayscale(100%)
    }
  }
  & nav {
    grid-area: 1 / 2 / 2 / 3;
    justify-self: center;
    text-transform: uppercase;
    display: flex;
    list-style: none;
    gap: 1rem;

    & a {
      color: ${(props) => props.theme.colors.secondary};
      font-size: clamp(0.7rem, 2vw, 0.8rem);
    }
  }
  & .copyright {
    grid-area: 2 / 2 / 3 / 3;
    text-align: center;
    color: #F0EBE199;
    text-transform: uppercase;
    font-size: 0.7rem;
  }
`;

const Footer = () => {
  const pathname = usePathname();
  const isActive = (link: string) => pathname === link;

  return (
    <StyledFooter>
      <Link href="/" className="brand">
        <Image alt="logo" src="Logo.svg" width="40" height="30" />
        Food App
      </Link>
      <nav>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className={isActive(link.link) ? "active" : ""}
              href={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </nav>
      <div className="copyright">
        <p>Copyright: © 2024 Food app.</p>
        <p>Rikie Patrick, Alina Ermakova, Roberto Quadraccia</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
