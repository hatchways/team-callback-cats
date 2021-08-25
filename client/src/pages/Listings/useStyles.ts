import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'greenblue',
  },
  searchContainer: {
    border: '1px solid red',
    display: 'flex',
    margin: '1rem 0',
  },
  searchInput: {
    border: '1px solid rgba(1, 1, 1, .5)',
  },
  listingsContainer: {
    margin: '2rem 0',
    border: '1px solid red',
  },
}));

export default useStyles;
