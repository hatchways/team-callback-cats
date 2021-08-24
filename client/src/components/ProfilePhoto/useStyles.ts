import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    height: '60vh',
    width: '70%',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 0px 10px 2px rgba(2,2,2,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5rem auto',
  },
  container: {
    height: '85%',
    width: '40%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  avatar: {
    height: '7.5rem',
    width: '7.5rem',
  },
  subtitle: {
    width: '11rem',
    textAlign: 'center',
    fontSize: '.8rem',
    color: 'rgba(1, 1, 1, 0.5)',
    marginTop: '-1rem',
  },
  cta: {
    width: '15rem',
    padding: '.75rem 1.5rem',
    '&:first-of-type': {
      color: '#ed4740',
      border: '1px solid #ed4740',
      marginBottom: '-1rem',
      fontWeight: 600,
      '&:hover': {
        backgroundColor: '#ed4740',
        color: '#fff',
      },
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#eee',
    },
  },
  icon: {
    marginRight: '1rem',
  },
}));

export default useStyles;
