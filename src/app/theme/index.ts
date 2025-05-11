'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          light: '#A4E559',
          main: '#207840',
          dark: '#21783B',
          contrastText: '#FFFFFF',
        },
        secondary: {
          light: '#8BC34A',
          main: '#38833B',
          dark: '#2E7D32',
          contrastText: '#FFFFFF',
        },
        text: {
          primary: '#444444',
          secondary: '#757575',
          disabled: '#949494',
        },
        grey: {
          500: '#757575',
          300: '#DDDDDD',
        },
        error: {
          main: '#DA3737',
        },
        warning: {
          main: '#FA8518',
        },
        info: {
          main: '#4165E7',
        },
        success: {
          main: '#23A740',
        },
        background: {
          default: '#FFFFFF',
          paper: '#F5F5F5',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          light: '#A4E559',
          main: '#207840',
          dark: '#21783B',
          contrastText: '#FFFFFF',
        },
        secondary: {
          light: '#8BC34A',
          main: '#38833B',
          dark: '#2E7D32',
          contrastText: '#FFFFFF',
        },
        text: {
          primary: '#DDDDDD',
          secondary: '#949494',
          disabled: '#757575',
        },
        grey: {
          500: '#757575',
          300: '#444444',
        },
        error: {
          main: '#DA3737',
        },
        warning: {
          main: '#FA8518',
        },
        info: {
          main: '#4165E7',
        },
        success: {
          main: '#23A740',
        },
        background: {
          default: '#121212',
          paper: '#1E1E1E',
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 500,
          padding: '10px',
          borderRadius: '4px',
          height: '40px',
          '@media (max-width:600px)': {
            height: '56px',
          },
          '@media (min-width:600px)': {
            height: '40px',
          },
        },
      },
    },
  },
});