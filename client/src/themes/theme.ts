import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto', 'Open Sans', 'sans-serif'].join(','),
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 400,
    },
    h3: {
      fontSize: 25,
      fontWeight: 500,
    },
    subtitle1: {
      width: 150,
      fontSize: 10,
      margin: '-15 auto 0',
      color: 'rgba(1, 1, 1, 0.5)',
      textAlign: 'center',
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#3A8DFF',
    },
  },
  shape: {
    borderRadius: 5,
  },
});
