'use client';

import styled, { css, DefaultTheme } from 'styled-components';
import NextLink, { LinkProps } from 'next/link';

type Variant = 'primary' | 'secondary' | 'danger' | 'warning';

const variants = (theme: DefaultTheme, variant: Variant = 'primary') =>
  ({
    primary: css`
      color: ${theme.colors.neutral.white};
      background: ${theme.colors.primary};
    `,
    secondary: css`
      color: ${theme.colors.neutral.white};
      background: ${theme.colors.secondary};
    `,
    danger: css`
      color: ${theme.colors.neutral.white};
      background: ${theme.colors.danger};
    `,
    warning: css`
      color: ${theme.colors.neutral.white};
      background: ${theme.colors.warning};
    `,
  }[variant]);

const StyledLink = styled.div<{ variant: Variant }>`
  border-radius: 999px;
  padding: 10px 20px;
  text-decoration: none;
  ${(props) => variants(props.theme, props.variant)};
`;

const Link = (
  props: {
    variant?: Variant;
    children: React.ReactNode;
  } & LinkProps,
) => {
  const { variant = 'primary', children, ...linkProps } = props;
  return (
    <StyledLink variant={variant}>
      <NextLink style={{ appearance: 'none' }} {...linkProps}>
        {children}
      </NextLink>
    </StyledLink>
  );
};

export default Link;
