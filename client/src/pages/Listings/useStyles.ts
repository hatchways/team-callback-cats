import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  searchContainer: {
    width: '500px',
  },
  searchInput: {
    width: '60%',
    padding: '.5rem 0',
  },
  datePicker: {
    width: '40%',
    padding: '.5rem 0',
  },
  listingsContainer: {
    width: '90%',
    margin: '1rem auto 2rem',
  },
}));

export default useStyles;
