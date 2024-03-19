'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import AuthProvider from '@/components/AuthProvider';
import GlobalStyles from '@/styles/GlobalStyles';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>{props.children}</AuthProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
