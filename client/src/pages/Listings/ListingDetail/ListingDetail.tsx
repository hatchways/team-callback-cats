import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const dummyListing = {
  headerImg: 'https://source.unsplash.com/random',
  profilePic: 'https://source.unsplash.com/random',
  id: 1,
  username: 'Norma Byers',
  subtitle: ' Loving Dog Sitter',
  city: 'Toronto, Canada',
  rate: 14,
  details:
    'Kombucha tumblr kickstarter salvia XOXO heirloom cold-pressed schlitz, vegan etsy plaid next level. Yuccie listicle jean shorts ramps chambray, quinoa distillery PBR&B iceland. Enamel pin flannel chia austin keffiyeh scenester quinoa single-origin coffee crucifix. Squid single-origin coffee affogato ramps messenger bag chillwave, vape salvia echo park fanny pack semiotics flannel pinterest.',
  rating: 4,
  additionalPics: [
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
  ],
};

const ListingDetail = (): JSX.Element => {
  const classes = useStyles();
  const [listing, setListing] = useState();

  const { id, profilePic, username, subtitle, rating, details, city, rate } = dummyListing;

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" p={3} m={3} className={classes.root}>
      <Box m={3} p={2} className={classes.details}>
        <p>details</p>
      </Box>
      <Box m={3} p={2} className={classes.bookingContainer}>
        <p>Booking</p>
      </Box>
    </Box>
  );
};

export default ListingDetail;
