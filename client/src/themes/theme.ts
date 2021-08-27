import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  palette: {
    primary: { main: '#3A8DFF' },
  },
  shape: {
    borderRadius: 5,
  },
});
