'use client';

import styled, { css, DefaultTheme } from 'styled-components';

type Variant = 'default';

const variants = (theme: DefaultTheme, variant: Variant = 'default') =>
  ({
    default: css`
      background: ${theme.colors.secondary};
      color: ${theme.colors.neutral.black};
    `,
  }[variant]);

const Container = styled.div<{ variant?: Variant }>`
  padding: 3rem;
  border-radius: 3rem;
  ${(props) => variants(props.theme, props.variant)};
`;

export default Container;
