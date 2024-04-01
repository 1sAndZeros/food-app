'use client';
import Image from 'next/image';
import styled from 'styled-components';
import Container from './Container';

interface SectionDetails {
  heading: string;
  content: string;
  image: string;
}

const sections: SectionDetails[] = [
  {
    image: 'scales',
    heading: 'Measuring Accuracy',
    content: 'Use measuring cups and spoons for precise ingredient quantities.',
  },
  {
    image: 'knife',
    heading: 'Quality Tools',
    content: 'Invest in high-quality knives, cutting boards, and cookware.',
  },
  {
    image: 'utensil',
    heading: 'Essential Utensils',
    content:
      'Have a variety of utensils, including spatulas, tongs, and ladles.',
  },
];

const Header = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #26252299;
`;

const StyledSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  & img {
  }
  & h4 {
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  & p {
    font-size: 1rem;
  }
`;

const Section = ({ details }: { details: SectionDetails }) => (
  <StyledSection>
    <Image
      src={`/${details.image}.svg`}
      alt={details.image}
      width={80}
      height={80}
    />
    <div>
      <h4>{details.heading}</h4>
      <p>{details.content}</p>
    </div>
  </StyledSection>
);

export default function InfoCard() {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxHeight: '650px',
        overflow: 'auto',
        scrollbarWidth: 'none',
      }}
    >
      <Header>
        Welcome to Food App's treasure trove of cooking wisdom! Whether you're a
        seasoned chef or just starting your culinary journey, our recipes are
        designed to elevate your skills, enhance your kitchen experience, and
        bring joy to your cooking adventures.
      </Header>
      {sections.map((details, key) => (
        <Section key={key} details={details} />
      ))}
    </Container>
  );
}
