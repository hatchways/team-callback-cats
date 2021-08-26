import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    height: '60vh',
    width: '70%',
    boxShadow: '0px 0px 10px 2px rgba(2,2,2,0.1)',
  },
  container: {
    height: '85%',
    width: '40%',
  },
  avatar: {
    height: '7.5rem',
    width: '7.5rem',
    marginBottom: '-1.5rem',
  },
  cta: {
    width: '15rem',
    padding: '.75rem 1.5rem',
    '&:first-of-type': {
      color: '#ed4740',
      border: '1px solid #ed4740',
      marginBottom: '-1rem',
      fontWeight: 500,
      // '&:hover': {
      //   backgroundColor: '#ed4740',
      //   color: '#fff',
      // },
    },
  },
  icon: {
    marginRight: '1rem',
  },
}));

export default useStyles;
