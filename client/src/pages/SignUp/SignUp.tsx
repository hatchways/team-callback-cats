import { CssBaseline, Paper, Button, Box, Grid, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import SignUpForm from './SignUpForm/SignUpForm';
import { useLoginAndSignup } from '../../helpers/LoginAndSignup/useLoginAndSignup';
import AuthLink from '../../components/AuthLink/AuthLink';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { signupHandleSubmit, logInAsDemoUser } = useLoginAndSignup();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} className={classes.grid}>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5">
                  Sign up
                </Typography>
              </Grid>
            </Grid>
            <SignUpForm handleSubmit={signupHandleSubmit} />
          </Box>
          <Box className={classes.demoLoginContainer}>
            <Button onClick={logInAsDemoUser} size="small" variant="contained" color="secondary">
              {'LOGIN WITH DEMO USER'}
            </Button>
            <AuthLink linkTo="/login" asideText="Already a member?" btnText="Login" />
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
