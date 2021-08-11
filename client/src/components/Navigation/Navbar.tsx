import { FC } from 'react';
import useStyles from './useStyles';

const Navbar: FC = () => {
  console.log('navbar created');
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <h1>I will be the navbar!</h1>
    </div>
  );
};

export default Navbar;
