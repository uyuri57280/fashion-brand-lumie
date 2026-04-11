'use client';
import { blue, pink, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { Ballet } from "next/font/google";
import { Merriweather } from "next/font/google";

const accentFont = Ballet({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    accentDisplay: React.CSSProperties;
    topDisplay: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    accentDisplay?: React.CSSProperties;
    topDisplay?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    accentDisplay: true;
    topDisplay: true;
    h3: false;
  }
}

const lumieThemebg = blue[50]
const lumieThemetext = blue[900]

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    accentDisplay: {
      fontSize: '4rem',
      fontFamily: accentFont.style.fontFamily,
      color: lumieThemetext
    },
    topDisplay:{
      fontSize:'4rem',
      fontFamily:merriweather.style.fontFamily,
      color:pink[50]
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          accentDisplay: 'h1',
          topDisplay:'h1'
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: lumieThemebg,
        }
      }
    }
  },
  palette: {
    primary: {
      light: blue[50],
      main: blue[300],
      dark: blue[600],
      contrastText: blue[900],
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
});

export default theme;
