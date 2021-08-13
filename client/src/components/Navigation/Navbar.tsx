import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import useStyles from './useStyles';
import Logo from '../../Images/logo.png';
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
    <nav className={classes.nav}>
      <img src={Logo} className={classes.logo} onClick={handleClick} />
      {loggedInUser ? <PublicLinks /> : <MemberLinks />}
    </nav>
  );
};

export default Navbar;
