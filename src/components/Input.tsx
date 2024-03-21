import styled, { css, DefaultTheme } from 'styled-components';

type Variants = 'primary' | 'secondary' | 'danger' | 'warning';

const variants = (theme: DefaultTheme, variant: Variants = 'primary') =>
  ({
    primary: css`
      background: ${theme.colors.neutral.white};
      border: 2px solid ${theme.colors.primary};
    `,
    secondary: css`
      background: ${theme.colors.neutral.white};
      border: 2px solid ${theme.colors.secondary};
    `,
    danger: css`
      background: ${theme.colors.neutral.white};
      border: 2px solid ${theme.colors.danger};
    `,
    warning: css`
      background: ${theme.colors.neutral.white};
      border: 2px solid ${theme.colors.warning};
    `,
  }[variant]);

// Define our button, but with the use of props.theme this time
const Input = styled.input<{ variant: Variants }>`
  min-width: 200px;
  border: none;
  border-radius: 999px;
  font-size: 18px;
  padding: 7px 10px;
  ${(props) => variants(props.theme, props.variant)};
`;

export default Input;
