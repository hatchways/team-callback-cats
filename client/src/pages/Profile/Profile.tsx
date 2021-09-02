import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';

export default function Profile(): JSX.Element {
  const classes = useStyles();
  return (
    <Box className={classes.root} p={2} display="flex" alignItems="flex-start" justifyContent="center">
      <Typography variant="h3">Profile page</Typography>
    </Box>
  );
}
