import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
    height: '60vh',
    width: '70%',
    boxShadow: '0px 0px 10px 2px rgba(2,2,2,0.1)',
  },
  container: {
    height: '85%',
    width: '50%',
  },
  avatar: {
    height: '7.5rem',
    width: '7.5rem',
    marginBottom: '-1.5rem',
  },
  input: {
    display: 'none',
  },
  cta: {
    width: '15.5rem',
    marginBottom: '-1rem',
    fontWeight: 500,
  },
  icon: {
    marginRight: '1rem',
  },
}));

export default useStyles;
