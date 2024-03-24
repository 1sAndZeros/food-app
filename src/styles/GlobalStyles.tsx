import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    color: black;
    padding: 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h4,
  label {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }

  @media screen and (min-width: 1280px) {
    body {
      padding: 3rem;
    }
  }
`;

export default GlobalStyles;
