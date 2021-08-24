import { FC, useState } from 'react';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@material-ui/pickers';
import ListingCard from './ListingCard/ListingCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Listings: FC = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Box className={classes.root}>
      <Typography variant="h3">Your search results</Typography>
      <Box className={classes.searchContainer}>
        <TextField>
          <FontAwesomeIcon icon={faSearch} />
        </TextField>
        <DatePicker value={selectedDate} label="Select Date" onChange={handleDateChange} clearable />
      </Box>
    </Box>
  );
};

export default Listings;
