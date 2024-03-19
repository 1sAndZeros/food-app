import styled, { css, DefaultTheme } from 'styled-components';
import React from 'react';

type Variant = 'default' | 'danger';

const variants = (theme: DefaultTheme, variant: Variant) =>
  ({
    default: css`
      background: ${theme.colors.primary};
      color: ${theme.colors.neutral.black};
    `,
    danger: css`
      background: ${theme.colors.danger};
      color: ${theme.colors.neutral.black};
    `,
  }[variant]);

// Define our button, but with the use of props.theme this time
const Wrapper = styled.div<{ variant: Variant }>`
  min-width: 200px;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px;
  ${(props) => variants(props.theme, props.variant)};
`;

const Message = ({
  variant = 'default',
  children,
}: {
  variant?: Variant;
  children: React.ReactNode;
}) => {
  return <Wrapper variant={variant}>{children}</Wrapper>;
};

export default Message;
