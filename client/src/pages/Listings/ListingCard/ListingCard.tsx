import { FC } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import JoePlaceholder from '../../Images/775db5e79c5294846949f1f55059b53317f51e30.png';

const ListingCard: FC = () => {
  const classes = useStyles();

  return (
    <Card raised={true} className={classes.listingCard}>
      <Avatar src={JoePlaceholder} alt="user placeholder" className={classes.userAvatar} />
      <Typography variant="h4">Norma Byers</Typography>
      <Typography component="p">Loving pet sitter</Typography>
      {/* * * * */}
      <Typography component="p">Dog Sitting, cat sitting, pocket pet and bird care</Typography>
      <Box className={classes.cardFooter}>
        <FontAwesomeIcon icon={faLocationDot} />
        <Typography component="p">Toronto, Ontario</Typography>
        <Typography component="p">$14/hr</Typography>
      </Box>
    </Card>
  );
};

export default ListingCard;
