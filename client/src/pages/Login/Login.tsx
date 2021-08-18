import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import LoginForm from './LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useLoginAndSignup } from '../../context/useLoginAndSignup';

export default function Login(): JSX.Element {
  const { handleSubmit_login, logInAsDemoUser } = useLoginAndSignup();
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <AuthHeader linkTo="/signup" asideText="Don't have an account?" btnText="Create account" />
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5">
                  Welcome back!
                </Typography>
              </Grid>
            </Grid>
            <LoginForm handleSubmit={handleSubmit_login} />
          </Box>
          <div className={classes.demoLoginContainer}>
            <Button onClick={logInAsDemoUser} size="small" variant="contained" color="secondary">
              {'DEMO USER LOGIN'}
            </Button>
          </div>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
