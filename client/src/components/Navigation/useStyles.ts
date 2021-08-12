import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav: {
    backgroundColor: '#fff',
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
    height: '10vh',
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
      cursor: 'pointer',
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
  memberLinks: {
    display: 'flex',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.6rem',
    listStyle: 'none',
  },
  memberLinkItem: {
    padding: '.5rem 1rem',
    marginRight: '1rem',
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  userAvatar: {
    '&:hover': {
      cursor: 'pointer',
      filter: 'brightness(110%)',
    },
  },
  profile: {
    position: 'relative',
  },
  profileDropdown: {
    position: 'absolute',
    right: 0,
    padding: '.25rem',
    width: '150px',
    listStyle: 'none',
    background: '#fff',
    borderRadius: '5px',
    boxShadow: '0px 2px 6px rgba(74,106,149,0.2)',
  },
  dropdownItem: {
    padding: '.25rem 1rem',
    fontSize: '.9rem',
    '&:hover': {
      cursor: 'pointer',
      filter: 'brightness(90%)',
    },
    '&:first-of-type': {
      borderBottom: '1px solid rgba(74,106,149,0.2)',
    },
  },
}));

export default useStyles;
