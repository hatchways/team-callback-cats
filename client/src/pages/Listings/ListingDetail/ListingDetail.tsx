// import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './useStyles';
import { Listing } from '../../../interface/Listing';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Button from '@material-ui/core/Button';

/********************
 TODO implement mui datepicker & Form validation
 ********************/
interface LocationType {
  state: Listing;
}

const ListingDetail = (): JSX.Element => {
  const classes = useStyles();
  const location: LocationType = useLocation();
  const listing: Listing = location.state;

  const { id, profilePic, headerImg, username, subtitle, additionalPics, details, city, rating, rate } = listing;

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" p={8} className={classes.root}>
      <Box m={5} className={classes.details}>
        <Box className={classes.top}>
          <Box className={classes.coverContainer}>
            <img src={headerImg} alt="cover photo" className={classes.coverPhoto} />
          </Box>
          <Avatar alt={username} src={profilePic} className={classes.profilePic} />
          <Box
            className={classes.userDetails}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h3">{username}</Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
            <Typography variant="subtitle1" className={classes.city}>
              <LocationOnIcon color="secondary" fontSize="inherit" /> {city}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.bottom} p={4}>
          <Typography variant="h5">About Me</Typography>
          <Typography component="p" className={classes.detailsBody}>
            {details}
          </Typography>
          <Box className={classes.additionalImg} p={1}>
            {additionalPics && additionalPics.map((pic) => <img src={pic} alt="additional picture" key={pic} />)}
          </Box>
        </Box>
      </Box>
      <Box
        m={5}
        className={classes.bookingContainer}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3">${rate}/hr</Typography>
        <Rating value={rating} readOnly className={classes.rating} />
        <Box className={classes.datePick} id="DropIn">
          <Typography component="p" className={classes.dateLabel}>
            Drop In
          </Typography>
          <Box display="flex">
            <OutlinedInput
              type="date"
              className={classes.date}
              startAdornment={
                <InputAdornment position="start">
                  <CalendarIcon />
                </InputAdornment>
              }
            />
            <OutlinedInput
              type="time"
              className={classes.time}
              endAdornment={
                <InputAdornment position="end">
                  <ArrowDown />
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <Box className={classes.datePick} id="DropOff">
          <Typography component="p" className={classes.dateLabel}>
            Drop Off
          </Typography>
          <Box display="flex">
            <OutlinedInput
              type="date"
              className={classes.date}
              startAdornment={
                <InputAdornment position="start">
                  <CalendarIcon />
                </InputAdornment>
              }
            />
            <OutlinedInput
              type="time"
              className={classes.time}
              endAdornment={
                <InputAdornment position="end">
                  <ArrowDown />
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <Button variant="contained" size="large" color="secondary">
          Send Request
        </Button>
      </Box>
    </Box>
  );
};

export default ListingDetail;
