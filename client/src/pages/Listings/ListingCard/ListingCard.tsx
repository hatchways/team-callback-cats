import { FC } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
import JoePlaceholder from '../../../Images/775db5e79c5294846949f1f55059b53317f51e30.png';
import { useHistory } from 'react-router-dom';
import { Listing } from '../../../interface/Listing';
interface ListingCardProps {
  listing: Listing;
}

const ListingCard: FC<ListingCardProps> = ({ listing }) => {
  const classes = useStyles();
  const history = useHistory();

  //extract variables from listing
  const { id, profilePic, username, subtitle, rating, details, city, rate } = listing;

  // Truncate details if too long
  const truncatedText = () => {
    if (details && details.length > 60) {
      return details.substring(0, 60);
    }
  };

  // route to details page
  const handleClick = () => {
    const location = {
      pathname: `/listings/${id}-${username.split(' ').join('-')}`,
      state: { listing },
    };
    history.push(location);
  };

  return (
    <Card raised={true} className={classes.listingCard} onClick={handleClick}>
      <CardContent className={classes.content}>
        <Avatar src={profilePic ? profilePic : JoePlaceholder} alt="user placeholder" className={classes.userAvatar} />
        <Typography variant="h6" className={classes.name}>
          {username}
        </Typography>
        <Typography variant="subtitle1" className={classes.cardSubtitle}>
          {subtitle}
        </Typography>
        <Box m={1} display="flex" justifyContent="center" className={classes.stars}>
          <Rating value={rating} readOnly />
        </Box>
        <Typography component="p" className={classes.cardText}>
          {`${truncatedText()} ...`}
        </Typography>
      </CardContent>
      <Box display="flex" p={2} alignItems="center" className={classes.cardFooter}>
        <LocationOnIcon color="secondary" />
        <Typography component="p" className={classes.footerText}>
          {city}
        </Typography>
        <Typography component="p" className={classes.footerPrice}>
          ${rate}/hr
        </Typography>
      </Box>
    </Card>
  );
};

export default ListingCard;
