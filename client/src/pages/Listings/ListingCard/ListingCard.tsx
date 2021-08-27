import { FC } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import JoePlaceholder from '../../../Images/775db5e79c5294846949f1f55059b53317f51e30.png';
import StarIcon from '@material-ui/icons/Star';

const ListingCard: FC = () => {
  const classes = useStyles();

  return (
    <Card raised={true} className={classes.listingCard}>
      <CardContent className={classes.content}>
        <Avatar src={JoePlaceholder} alt="user placeholder" className={classes.userAvatar} />
        <Typography variant="h6" className={classes.name}>
          Norma Byers
        </Typography>
        <Typography variant="subtitle1" className={classes.cardSubtitle}>
          Loving pet sitter
        </Typography>
        <Box m={1} display="flex" justifyContent="center" className={classes.stars}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Box>
        <Typography component="p" className={classes.cardText}>
          Dog Sitting, cat sitting, pocket pet and bird care
        </Typography>
      </CardContent>
      <Box display="flex" p={2} alignItems="center" className={classes.cardFooter}>
        <LocationOnIcon color="secondary" />
        <Typography component="p" className={classes.footerText}>
          Toronto, Ontario
        </Typography>
        <Typography component="p" className={classes.footerPrice}>
          $14/hr
        </Typography>
      </Box>
    </Card>
  );
};

export default ListingCard;
