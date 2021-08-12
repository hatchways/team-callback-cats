import { FC, useState } from 'react';
import useStyles from './useStyles';
import Logo from '../../Images/logo.png';
import PublicLinks from './PublicLinks';
import MemberLinks from './MemberLinks';

const Navbar: FC = () => {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);

  //placeholder toggle state
  const handleClick = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className={classes.nav}>
      <img src={Logo} className={classes.logo} onClick={handleClick} />
      {!loggedIn ? <PublicLinks /> : <MemberLinks />}
    </div>
  );
};

export default Navbar;
