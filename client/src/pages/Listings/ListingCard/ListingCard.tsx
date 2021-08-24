import { FC } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';

const ListingCard: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.listingCard}>
      <p>Listing card</p>
    </Box>
  );
};

export default ListingCard;
