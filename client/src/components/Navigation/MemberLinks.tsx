import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './useStyles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import JoePlaceholder from '../../Images/775db5e79c5294846949f1f55059b53317f51e30.png';
import logout from '../../helpers/APICalls/logout';

/*********************************
TODO
  use context to fetch user role
**********************************/

const MemberLinks: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [role, setRole] = useState('owner');
  const [profileOpen, setProfileOpen] = useState(false);

  // Toggle profile dropdown, auto close after 10 seconds
  const handleProfileClick = () => {
    setProfileOpen((prevProfileState) => !prevProfileState);
    setTimeout(() => {
      setProfileOpen(false);
    }, 10000);
  };

  // Logout handler
  const handleLogout = () => {
    logout();
  };

  return (
    <List component="ul" className={classes.memberLinks}>
      {/* My sitters or My Jobs depending on user */}
      <ListItem className={classes.memberLinkItem} onClick={() => history.push(`/${role}`)}>
        {role === 'owner' ? 'My Sitters' : 'My Jobs'}
      </ListItem>
      <ListItem className={classes.memberLinkItem} onClick={() => history.push(`/messages`)}>
        Messages
      </ListItem>
      <ListItem className={`${classes.memberLinkItem} ${classes.profile}`} onClick={handleProfileClick}>
        <Avatar src={JoePlaceholder} alt="user placeholder" className={classes.userAvatar} />
        {profileOpen && (
          <List component="ul" className={classes.profileDropdown} style={{ top: !profileOpen ? '-100%' : '110%' }}>
            <ListItem onClick={() => history.push('/profile')} className={classes.dropdownItem}>
              Go to profile
            </ListItem>
            <ListItem onClick={handleLogout} className={classes.dropdownItem}>
              Logout
            </ListItem>
          </List>
        )}
      </ListItem>
    </List>
  );
};

export default MemberLinks;