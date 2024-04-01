import styled, { css, DefaultTheme } from 'styled-components';

type Variants = 'primary' | 'secondary' | 'danger' | 'warning' | 'ghost' | 'ghostgrey';

const variants = (theme: DefaultTheme, variant: Variants = 'primary') =>
  ({
    primary: css`
      color: ${theme.colors.neutral.white};
      background: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};
    `,
    secondary: css`
      color: ${theme.colors.neutral.white};
      background: ${theme.colors.secondary};
      border: 2px solid ${theme.colors.secondary};
    `,
    danger: css`
      color: ${theme.colors.neutral.white};
      background: ${theme.colors.danger};
      border: 2px solid ${theme.colors.danger};
    `,
    warning: css`
      color: ${theme.colors.neutral.black};
      background: ${theme.colors.warning};
      border: 2px solid ${theme.colors.warning};
    `,
    ghost: css`
      color: ${theme.colors.secondary};
      background: transparent;
      border: 2px solid ${theme.colors.secondary};
    `,
    ghostgrey: css`
      color: ${theme.colors.neutral.grey};
      background: transparent;
      border: 2px solid ${theme.colors.neutral.grey};
    `,
  }[variant]);

// Define our button, but with the use of props.theme this time
const Button = styled.button<{ variant?: Variants }>`
  min-width: fit-content;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-family: inherit;
  ${(props) => variants(props.theme, props.variant)};
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
