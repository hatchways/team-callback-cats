import { FC } from 'react';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import ListingCard from './ListingCard/ListingCard';
import dummyListing from './dummyListing';

const Listings: FC = () => {
  const classes = useStyles();
  const listings = [dummyListing, dummyListing, dummyListing]; // listings === search results

  return (
    <Box p={4} m={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography variant="h1">Your search results</Typography>
      <Box display="flex" m={4} className={classes.searchContainer}>
        <TextField
          variant="outlined"
          className={classes.searchInput}
          placeholder="Toronto, Ontario"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField variant="outlined" type="date" className={classes.datePicker}></TextField>
      </Box>
      <Grid container className={classes.listingsContainer} spacing={6}>
        {/* MAP OVER ARRAY OF LISTINGS / RESULTS */}
        {listings &&
          listings.map((l) => (
            <Grid item key={l.id}>
              <ListingCard listing={l} />
            </Grid>
          ))}
      </Grid>
      <Button variant="outlined" size="large">
        Show More
      </Button>
    </Box>
  );
};

export default Listings;
