import { FC } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import JoePlaceholder from '../../Images/775db5e79c5294846949f1f55059b53317f51e30.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProfilePhoto: FC = () => {
  const classes = useStyles();

  // Upload Image
  // TODO hook up to upload route: images in s3, save url in mongoDB
  const handleUpload = () => {
    console.log('You are trying to upload an image');
  };

  // Delete Image
  // Permanently from DB ? TODO Create delete route
  const handleDelete = () => {
    console.log('You are trying to delete this image');
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h3">Profile Photo</Typography>
        <Avatar src={JoePlaceholder} alt="User Profile Photo" className={classes.avatar} />
        <Typography component="p" className={classes.subtitle}>
          Be sure to use a photo that clearly shows your face
        </Typography>
        <Button variant="outlined" className={classes.cta} onClick={handleUpload}>
          Upload a file from your device
        </Button>
        <Button className={classes.cta} onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} className={classes.icon} />
          Delete Photo
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePhoto;
