import { FC } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import JoePlaceholder from '../../Images/775db5e79c5294846949f1f55059b53317f51e30.png';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
    <Box display="flex" justifyContent="center" alignItems="center" m={10} borderRadius={5} className={classes.root}>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        className={classes.container}
      >
        <Typography variant="h3">Profile Photo</Typography>
        <Avatar src={JoePlaceholder} alt="User Profile Photo" className={classes.avatar} />
        <Typography variant="subtitle1">Be sure to use a photo that clearly shows your face</Typography>
        <Button
          variant="outlined"
          startIcon={<CloudUploadIcon />}
          className={classes.cta}
          onClick={handleUpload}
          color="secondary"
        >
          Upload a file from your device
        </Button>
        <Button className={classes.cta} onClick={handleDelete} startIcon={<DeleteOutlineIcon />}>
          Delete Photo
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePhoto;
