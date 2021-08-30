import React, { FC, useState } from 'react';
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
  const [selectedFile, setSelectedFile] = useState({});

  // Upload Image
  // TODO hook up to upload route: images in s3, save url in User profile
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setSelectedFile(e.target.files[0]);
    console.log(selectedFile);
    // Pass file to upload function
    // upload user profile with image url
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
        <input
          accept="image/*"
          className={classes.input}
          id="upload-button-file"
          multiple
          type="file"
          onChange={handleFile}
        />
        <label htmlFor="upload-button-file">
          <Button
            variant="outlined"
            color="secondary"
            component="span"
            fullWidth={true}
            startIcon={<CloudUploadIcon />}
            className={classes.cta}
          >
            Upload a file from your device
          </Button>
        </label>

        <Button
          variant="text"
          component="button"
          fullWidth={true}
          onClick={handleDelete}
          startIcon={<DeleteOutlineIcon />}
        >
          Delete Photo
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePhoto;
