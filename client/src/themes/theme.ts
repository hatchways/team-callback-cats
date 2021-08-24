import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 400,
      fontFamily: 'Roboto',
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: 25,
      fontWeight: 500,
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
