import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  accAside: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.8)',
    fontWeight: 600,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem .25rem',
  },
  link: {
    textDecoration: 'underline',
    color: '#ed4740',
    fontSize: 14,
    fontWeight: 600,
    '&:visited': {
      color: '#ed4740',
    },
    '&:hover': {
      fontWeight: 700,
      textDecoration: 'none',
    },
  },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#ffffff',
    color: '#3a8dff',
    boxShadow: 'none',
    marginRight: 35,
  },
}));

export default useStyles;
