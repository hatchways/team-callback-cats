import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  listingCard: {
    textAlign: 'center',
    padding: '2rem 0 0',
    width: '300px',
  },
  content: {
    width: '75%',
    margin: '0 auto',
    padding: 0,
  },
  userAvatar: {
    height: '7rem',
    width: '7rem',
    margin: '0 auto 1rem',
  },
  name: {
    fontWeight: 600,
    fontSize: '1.5rem',
    marginBottom: '-.5rem',
  },
  cardSubtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  stars: {
    color: 'gold',
  },
  cardText: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  cardFooter: {
    borderTop: '1px solid rgba(2,2, 2, .5)',
  },
  footerText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16,
    margin: '0 auto 0 .5rem',
  },
  footerPrice: {
    fontWeight: 700,
    fontSize: 18,
  },
}));

export default useStyles;
