import React, { FC, useState, useEffect } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import JoePlaceholder from '../../Images/775db5e79c5294846949f1f55059b53317f51e30.png';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useAuth } from '../../context/useAuthContext';

/*****************
 TODO move image functions to helper file
 *******************/

const ProfilePhoto: FC = () => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const [profilePicUrl, setProfilePicUrl] = useState('');

  // Get selected image
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const formData = new FormData();
    formData.append('profileImage', e.target.files[0]);

    // Upload to s3 and return url
    const response = await fetch('/upload/profile-image', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setProfilePicUrl(data.location);
  };

  // Update User and DOM
  useEffect(() => {
    const updateUser = async () => {
      if (loggedInUser) {
        await fetch(`/profile`, {
          method: 'PATCH',
          body: JSON.stringify({ profilePic: profilePicUrl }),
        });
      }
    };
    updateUser();
  }, [loggedInUser, profilePicUrl]);

  // TODO Delete Image
  // Permanently from DB ?
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
        <Avatar
          src={profilePicUrl.length === 0 ? JoePlaceholder : profilePicUrl}
          alt="User Profile Photo"
          className={classes.avatar}
        />
        <Typography variant="subtitle1">Be sure to use a photo that clearly shows your face</Typography>
        <input accept="image/*" className={classes.input} id="upload-button-file" type="file" onChange={handleFile} />
        <label htmlFor="upload-button-file">
          <Button
            variant="outlined"
            color="secondary"
            component="span"
            fullWidth
            startIcon={<CloudUploadIcon />}
            className={classes.cta}
          >
            Upload a file from your device
          </Button>
        </label>

        <Button variant="text" component="button" fullWidth onClick={handleDelete} startIcon={<DeleteOutlineIcon />}>
          Delete Photo
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePhoto;
