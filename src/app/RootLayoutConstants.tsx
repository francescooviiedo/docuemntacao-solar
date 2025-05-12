import type { Navigation } from '@toolpad/core/AppProvider';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Image from 'next/image';
import DescriptionIcon from '@mui/icons-material/Description';
export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Assuntos Principais',
  },
  {
    title: 'Documentação',
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
 {
    title: 'Paginas',
    segment: 'paginas',

    icon: <DashboardIcon />,
     children: [
      {
        segment: 'estrutura',
        title: 'Estrutura',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'validation',
        title: 'Validação',
        icon: <DescriptionIcon />,
      },
       {
        segment: 'padrao',
        title: 'Padrão de Código',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    title: 'Services',
    segment: 'services',
    icon: <DashboardIcon />,
    children: [
      {
        segment: 'format',
        title: 'Estrutura da classe Service',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'request',
        title: 'Estrutura da requisição',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'response',
        title: 'Estrutura da resposta',
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