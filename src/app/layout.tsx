import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import DashboardIcon from '@mui/icons-material/Dashboard';
import type { Navigation } from '@toolpad/core/AppProvider';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { theme } from '../app/theme/index';
import Image from 'next/image';
const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
   segment: 'teste',
   title: 'Teste',
   icon: <AccessAlarmIcon />,
 },
];

const BRANDING = {
  title: 'Documentação Solar',
  logo: <Image
          src="/images/logo-mobile.png"
          alt="Logo"
          width={40}
          height={50}
          />,
};

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
