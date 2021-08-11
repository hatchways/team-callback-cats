import { FC } from 'react';
import useStyles from './useStyles';
import Logo from '../../Images/logo.png';
import PublicLinks from './PublicLinks';

const Navbar: FC = () => {
  console.log('navbar created');
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <img src={Logo} className={classes.logo} />
      <PublicLinks />
    </div>
  );
};

export default Navbar;
