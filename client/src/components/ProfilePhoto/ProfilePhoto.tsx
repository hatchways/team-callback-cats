import { FC } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ProfilePhoto: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Typography component="h3">Profile Photo</Typography>
        <Avatar />
        <Typography component="p" className={classes.subtitle}>
          Be sure to use a photo that clearly shows your face
        </Typography>
        <Button>Upload a file form your device</Button>
        <Button>Delete Photo</Button>
      </Box>
    </Box>
  );
};

export default ProfilePhoto;
