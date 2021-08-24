import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    height: '60vh',
    width: '80%',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3rem auto', // remove when outer box positioned by parent container
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
  title: {
    fontWeight: 600,
    fontSize: '1.2rem',
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
    fontWeight: 600,
    '&:first-of-type': {
      color: '#ed4740',
      border: '1px solid #ed4740',
      marginBottom: '-1rem',
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
