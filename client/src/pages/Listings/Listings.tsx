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

const Listings: FC = () => {
  const classes = useStyles();

  // TODO get listings
  const profiles = Array.from(Array(6).keys());

  return (
    <Box p={5} m={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
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
      <Grid container className={classes.listingsContainer} spacing={8}>
        {/* MAP OVER ARRAY OF LISTINGS / RESULTS */}
        {profiles &&
          profiles.map((p) => {
            <Grid item key={p}>
              <ListingCard />
            </Grid>;
          })}
      </Grid>
      <Button variant="outlined" size="large">
        Show More
      </Button>
    </Box>
  );
};

export default Listings;
