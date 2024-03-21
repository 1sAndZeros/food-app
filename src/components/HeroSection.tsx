'use client'
import Image from "next/image";
import styled from 'styled-components';
import Button from "./Button";

const StyledDiv = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    height: 70vh;
    border-radius: 2rem;
    overflow: hidden;
    & img {
        object-fit: cover;
        filter: brightness(30%);
        z-index: -1;
    }
    & div{
        max-width: 1000px;
        padding: 2rem;
        text-align: center;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        color: ${props => props.theme.colors.secondary};
        & h1 {
            font-size: clamp(3rem, 6.5vw, 4.5rem);
            text-transform: uppercase;
        }
        & p {
            max-width: 500px;
            font-size: clamp(1rem, 1vw, 1.2rem);
        }
    }
`

export default function HeroSection() {
    return (
        <StyledDiv>
            <Image src='/hero-section.jpg' alt="cooking" fill={true} />
            <div>
                <h1>Unleash Culinary Excellence</h1>
                <p>Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen</p>
                <Button>Explore recipes</Button>
            </div>
        </StyledDiv>
    )
}