import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

export const breakpoints = {
  breakpoints: {
    keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: {
      xxs: 0,
      xs: 600,
      sm: 800,
      md: 1000,
      lg: 1200,
      xl: 1536,
      xxl: 2560,
    },
  },
};

export const componentsOverride = {
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'body1' },
          style: {
            opacity: 0.7,
          },
        },
        {
          props: { variant: 'body2' },
          style: {
            opacity: 0.7,
          },
        },
      ],
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#333',
          fontSize: 16,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'main' },
          style: {
            color: '#FFF',
            background:
              'radial-gradient(100% 100% at 50% 0%, #F47B53 0%, #BF5C4F 88.79%)',
            borderRadius: 10,
            padding: '10px 20px',
            textTransform: 'none',
            letterSpacing: '-0.04em',
            boxShadow: '0 4px 14px rgba(81, 70, 118, 0.62)',

            '&:hover': {
              background:
                'radial-gradient(100% 100% at 50% 0%, #F47B53EE 0%, #BF5C4FEE 50%)',
            },
          },
        },
        {
          props: { variant: 'navigation' },
          style: {
            fontSize: '0.9rem !important',
            letterSpacing: 0,
            padding: '10px 10px',
          },
        },
      ],
    },
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#F5894E',
    },
    ...(mode === 'light'
      ? {
          // palette values for light mode
          text: {
            primary: '#1D2538',
            secondary: '#273150CC',
            subtitle: '#8B8B8B',
          },
        }
      : {
          // palette values for dark mode
          background: {
            default: '#341245',
            paper: '#161137',
          },
          text: {
            primary: '#F3E7D9',
            secondary: '#efefef',
            subtitle: '#8B8B8B',
          },
        }),
  },
});

export const getTypography = (themeWithBreakpoints) => ({
  typography: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    h1: {
      fontFamily: 'Circular',
      fontWeight: 'bold',
      fontSize: themeWithBreakpoints.typography.pxToRem(62),
      letterSpacing: '-0.04em',
      lineHeight: 1.1,
      [themeWithBreakpoints.breakpoints.down('md')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(58),
      },
      [themeWithBreakpoints.breakpoints.down('sm')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(52),
      },
      [themeWithBreakpoints.breakpoints.down('xs')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(40),
      },
      '@media(max-width: 370px)': {
        fontSize: themeWithBreakpoints.typography.pxToRem(38),
      },
      '@media(max-width: 354px)': {
        fontSize: themeWithBreakpoints.typography.pxToRem(36),
      },
    },
    h2: {
      fontFamily: 'Circular',
      fontWeight: 'bold',
      fontSize: themeWithBreakpoints.typography.pxToRem(40),
      letterSpacing: '-0.04em',
      lineHeight: 1.1,
      [themeWithBreakpoints.breakpoints.down('md')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(36),
      },
      [themeWithBreakpoints.breakpoints.down('sm')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(34),
      },
      [themeWithBreakpoints.breakpoints.down('xs')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(32),
      },
    },
    h3: {
      fontFamily: 'Circular, Roboto',
      fontWeight: 700,
      fontSize: themeWithBreakpoints.typography.pxToRem(32),
      letterSpacing: '-0.04em',
      [themeWithBreakpoints.breakpoints.down('md')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(29),
      },
      [themeWithBreakpoints.breakpoints.down('sm')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(26),
      },
      [themeWithBreakpoints.breakpoints.down('xs')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(24),
      },
    },
    h4: {
      fontFamily: 'Circular, Roboto',
      fontWeight: 'normal',
      fontSize: themeWithBreakpoints.typography.pxToRem(20),
    },
    body1: {
      fontFamily: 'Circular, Roboto',
      fontWeight: 300,
      fontSize: themeWithBreakpoints.typography.pxToRem(18),
      letterSpacing: 0,
      lineHeight: 1.3,
      [themeWithBreakpoints.breakpoints.down('sm')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(17),
      },
      [themeWithBreakpoints.breakpoints.down('xs')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(16),
      },
    },
    body2: {
      fontFamily: 'Circular, Roboto',
      fontSize: themeWithBreakpoints.typography.pxToRem(16),
      fontWeight: 300,
      letterSpacing: 0,
      lineHeight: 1.43,
    },
    button: {
      fontFamily: 'Circular, Roboto',
      fontWeight: 'bold',
      fontSize: themeWithBreakpoints.typography.pxToRem(20),
      [themeWithBreakpoints.breakpoints.down('sm')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(18),
      },
    },
    subtitle1: {
      fontFamily: 'Circular, Roboto',
      fontWeight: 300,
      fontSize: themeWithBreakpoints.typography.pxToRem(20),
      letterSpacing: 0,
      lineHeight: 1.3,
      opacity: 0.8,
      [themeWithBreakpoints.breakpoints.down('sm')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(18),
      },
    },
    subtitle2: {
      fontFamily: 'Circular, Roboto',
      fontWeight: 'normal',
      fontSize: themeWithBreakpoints.typography.pxToRem(28),
      letterSpacing: 0,
      lineHeight: 0.93,
      [themeWithBreakpoints.breakpoints.down('md')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(26),
      },
      [themeWithBreakpoints.breakpoints.down('sm')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(24),
        lineHeight: 1,
      },
      [themeWithBreakpoints.breakpoints.down('xs')]: {
        fontSize: themeWithBreakpoints.typography.pxToRem(22),
        lineHeight: 1,
      },
    },
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});
