import { CssBaseline, Paper, Button, Box, Grid, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import LoginForm from './LoginForm/LoginForm';
import AuthLink from '../../components/AuthLink/AuthLink';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { useLoginAndSignup } from '../../helpers/LoginAndSignup/useLoginAndSignup';

export default function Login(): JSX.Element {
  const { loginHandleSubmit, logInAsDemoUser } = useLoginAndSignup();
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} className={classes.grid}>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5">
                  Welcome back!
                </Typography>
              </Grid>
            </Grid>
            <LoginForm handleSubmit={loginHandleSubmit} />
            <AuthLink linkTo="/signup" asideText="Don't have an account?" btnText="Create account" />
          </Box>
          <Box className={classes.demoLoginContainer}>
            <Button onClick={logInAsDemoUser} size="small" variant="contained" color="secondary">
              {'LOGIN WITH DEMO USER'}
            </Button>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
