import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './useStyles';
import Avatar from '@material-ui/core/Avatar';
import JoePlaceholder from '../../Images/775db5e79c5294846949f1f55059b53317f51e30.png';
import logout from '../../helpers/APICalls/logout';

/*********************************
TODO
  use context to define user role?
**********************************/

const MemberLinks: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [role, setRole] = useState('owner');
  const [profileOpen, setProfileOpen] = useState(false);

  // Toggle profile dropdown, auto close after 10 seconds
  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
    setTimeout(() => {
      setProfileOpen(false);
    }, 10000);
  };

  // Logout handler
  const handleLogout = () => {
    logout();
  };

  return (
    <ul className={classes.memberLinks}>
      {/* <li className={classes.memberLinkItem}>Notifications</li> */}
      <li className={classes.memberLinkItem} onClick={() => history.push(`/${role}`)}>
        {role === 'owner' ? 'My Sitters' : 'My Jobs'}
      </li>
      {/* My sitters or My Jobs depending on user */}
      <li className={classes.memberLinkItem} onClick={() => history.push(`/messages`)}>
        Messages
      </li>
      <li className={`${classes.memberLinkItem} ${classes.profile}`} onClick={handleProfileClick}>
        <Avatar src={JoePlaceholder} alt="user placeholder" className={classes.userAvatar} />
        {profileOpen && (
          <ul className={classes.profileDropdown} style={{ top: !profileOpen ? '-100%' : '130%' }}>
            <li onClick={() => history.push('/profile')} className={classes.dropdownItem}>
              Go to profile
            </li>
            <li onClick={handleLogout} className={classes.dropdownItem}>
              Logout
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default MemberLinks;
