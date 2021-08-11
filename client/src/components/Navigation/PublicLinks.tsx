import { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import useStyles from './useStyles';
import Button from '@material-ui/core/Button';

const PublicLinks: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <ul className={classes.publicLinks}>
      <Link to="/become-a-sitter" className={classes.sitterLink}>
        <a>Become a sitter</a>
      </Link>
      <Button variant="outlined" size="large" className={classes.login} onClick={() => history.push('/login')}>
        Login
      </Button>
      <Button variant="contained" size="large" className={classes.signUp} onClick={() => history.push('/signup')}>
        Sign Up
      </Button>
    </ul>
  );
};

export default PublicLinks;
