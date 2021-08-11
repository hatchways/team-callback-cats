import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav: {
    backgroundColor: '#fff',
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  },
  logo: {
    width: '200px',
    marginLeft: '1rem',
  },
  publicLinks: {
    display: 'flex',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.6rem',
    fontWeight: 600,
  },
  sitterLink: {
    marginRight: '2rem',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    transition: 'all .2s ease',
    '&:hover, &:active': {
      color: '#ed4740',
    },
    '&:visited': {
      color: '#000',
    },
  },
  login: {
    color: '#ed4740',
    border: '1px solid #ed4740',
    marginRight: '1rem',
    padding: '.5rem 2rem',
    textTransform: 'uppercase',
  },
  signUp: {
    backgroundColor: '#ed4740',
    color: '#fff',
    border: '1px solid #fff',
    marginRight: '1rem',
    padding: '.5rem 2rem',
    textTransform: 'uppercase',
    boxShadow: 'none',
  },
}));

export default useStyles;
