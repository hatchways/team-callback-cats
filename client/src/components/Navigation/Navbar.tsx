import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import useStyles from './useStyles';
import Logo from '../../Images/logo.png';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import PublicLinks from './PublicLinks';
import MemberLinks from './MemberLinks';

const Navbar: FC = () => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();

  // Go to home page
  const handleClick = () => {
    history.push('/');
  };

  return (
    <AppBar className={classes.nav}>
      <Toolbar>
        <Grid justify="space-between" container>
          <Grid item>
            <img src={Logo} className={classes.logo} onClick={handleClick} />
          </Grid>
          <Grid item>{!loggedInUser ? <PublicLinks /> : <MemberLinks />}</Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
