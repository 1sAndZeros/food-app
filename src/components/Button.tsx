import styled, { css, DefaultTheme } from 'styled-components';

type Variants = 'primary' | 'secondary' | 'danger' | 'warning';

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
  }[variant]);

// Define our button, but with the use of props.theme this time
const Button = styled.button<{ variant?: Variants }>`
  min-width: 200px;
  border: none;
  border-radius: 999px;
  font-size: 18px;
  padding: 7px 10px;
  ${(props) => variants(props.theme, props.variant)};
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
