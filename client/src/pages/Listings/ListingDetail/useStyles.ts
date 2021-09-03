import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fcfcfc',
  },
  details: {
    flex: 1.8,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.2)',
    backgroundColor: '#fff',
  },
  top: {
    height: '60%',
    position: 'relative',
  },
  coverContainer: {
    width: '100%',
    height: '250px',
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
  },
  profilePic: {
    position: 'absolute',
    left: '50%',
    top: 'calc(250px - 5rem)',
    transform: 'translateX(-50%)',
    height: '10rem',
    width: '10rem',
    border: '7px solid #fff',
  },
  userDetails: {
    width: '40%',
    margin: '7rem auto 1rem',
    lineHeight: '1.5',
    textAlign: 'center',
  },
  city: {
    marginTop: '1rem',
    fontSize: '1rem',
  },
  bottom: {
    height: '40%',
  },
  detailsBody: {
    margin: '1rem 0',
    lineHeight: '1.5',
    fontSize: '1rem',
    color: 'rgba(1, 1, 1, 0.8)',
  },
  additionalImg: {
    '& > img': {
      height: '8rem',
      width: '8rem',
      margin: '.5rem 1rem .5rem 0',
      borderRadius: theme.shape.borderRadius,
    },
  },
  bookingContainer: {
    padding: '2rem 1rem',
    backgroundColor: '#fff',
    // height: '60%',
    flex: 0.8,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.2)',
  },
  rating: {
    margin: '1rem 0',
  },
  datePick: {
    margin: '1rem 0',
    '&:last-of-type': {
      marginBottom: '3rem',
    },
  },
  dateLabel: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  date: {
    border: '1px solid rgba(0, 0, 0, 0.5',
    flex: 2,
  },
  time: {
    border: '1px solid rgba(0, 0, 0, 0.5',
    flex: 1,
  },
}));

export default useStyles;
