import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'inherit',
    width: '100%',
    height: '100%',
  },
  details: {
    border: '1px solid red',
    height: '100%',
    flex: 1,
  },
  availability: {
    border: '1px solid blue',
    height: '60%',
    width: '400px',
  },
}));

export default useStyles;
