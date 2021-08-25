import { FC, useState } from 'react';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@material-ui/pickers';
// import ListingCard from './ListingCard/ListingCard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Listings: FC = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Box className={classes.root}>
      <Typography variant="h3">Your search results</Typography>
      <Box className={classes.searchContainer}>
        <TextField className={classes.searchInput}>{/* <FontAwesomeIcon icon={faSearch} /> */}</TextField>
        <DatePicker
          value={selectedDate}
          label="Select Date"
          onChange={handleDateChange}
          className={classes.searchInput}
          clearable
        />
      </Box>
      <Box className={classes.listingsContainer}></Box>
    </Box>
  );
};

export default Listings;
