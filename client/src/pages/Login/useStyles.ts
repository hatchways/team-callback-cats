import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '90vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    maxWidth: '600px',
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'column',
    minHeight: 'fit-content',
    maxHeight: '80vh',
    maxWidth: '600px',
    padding: '2rem',
  },
  welcome: {
    fontSize: 25,
    padding: '20px 0 10px',
    color: '#000000',
    fontWeight: 700,
    fontFamily: 'Roboto',
    letterSpacing: '.5px',
    textAlign: 'center',
  },
  demoLoginContainer: {
    width: 200,
    textAlign: 'center',
    margin: 'auto',
    fontFamily: '-apple-system',
  },
}));

export default useStyles;
