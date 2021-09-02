// import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { username, rate } from '../dummyListing';
import { Listing } from '../../../interface/Listing';
interface LocationType {
  state: Listing;
}

const ListingDetail = (): JSX.Element => {
  const classes = useStyles();
  const location: LocationType = useLocation();
  const listing = location.state;

  console.log(listing);

  //   const { id, profilePic, username, subtitle, rating, details, city, rate } = listing;

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" p={3} m={3} className={classes.root}>
      <Box m={3} p={2} className={classes.details}>
        <p>Details</p>
      </Box>
      <Box m={3} p={2} className={classes.bookingContainer}>
        <p>booking</p>
      </Box>
    </Box>
  );
};

export default ListingDetail;
