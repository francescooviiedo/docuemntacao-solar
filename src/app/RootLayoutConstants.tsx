import type { Navigation } from '@toolpad/core/AppProvider';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Image from 'next/image';
import DescriptionIcon from '@mui/icons-material/Description';
export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Documentation',
    icon: <DashboardIcon />,
  },
  {
   segment: 'designSystem',
   title: 'Design System',
   icon: <AccessAlarmIcon />,
   children: [
      {
        segment: 'colors',
        title: 'Cores',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'typography',
        title: 'Tipografia',
        icon: <DescriptionIcon />,
      },
    ],
 },
];

export const BRANDING = {
  title: 'Documentação Solar',
  logo: <Image
          src="/images/logo-mobile.png"
          alt="Logo"
          width={40}
          height={50}
          />,
};