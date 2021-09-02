import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'inherit',
    height: '100%',
    width: '90%',
    border: '1px solid green',
  },
  details: {
    border: '1px solid red',
    height: '100%',
    flex: 2,
  },
  bookingContainer: {
    border: '1px solid blue',
    height: '60%',
    flex: 1,
  },
}));

export default useStyles;
