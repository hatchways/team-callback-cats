import { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import useStyles from './useStyles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

const PublicLinks: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <List component="ul" className={classes.publicLinks}>
      {/* TODO REMOVE TEMPORARY LINK FOR STYLING */}
      <Link to="/listings/" className={classes.sitterLink}>
        Listings temp
      </Link>
      <Link to="/become-a-sitter" className={classes.sitterLink}>
        Become a sitter
      </Link>
      <Button variant="outlined" size="large" className={classes.login} onClick={() => history.push('/login')}>
        Login
      </Button>
      <Button variant="contained" size="large" className={classes.signUp} onClick={() => history.push('/signup')}>
        Sign Up
      </Button>
    </List>
  );
};

export default PublicLinks;
