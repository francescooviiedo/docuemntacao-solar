import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { theme } from '../app/theme/index';
import { BRANDING, NAVIGATION } from './RootLayoutConstants';

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider>
          <NextAppProvider 
            navigation={NAVIGATION} 
            branding={BRANDING}
            theme={theme}
          >
            {props.children}
          </NextAppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
