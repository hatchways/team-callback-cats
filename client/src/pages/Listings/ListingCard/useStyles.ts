import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  listingCard: {
    padding: '1rem',
    margin: '1rem',
  },
  userAvatar: {
    height: '2rem',
  },
  cardFooter: {
    borderTop: '1px solid rgba(2,2, 2, .5)',
  },
}));

export default useStyles;
