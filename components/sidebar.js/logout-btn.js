// Dependencies
import { signOut } from 'next-auth/react';
import axios from 'axios';

// Style
import { MdLogout } from 'react-icons/md';
import { StyledIcon } from './sidebar.styles';

// Helpers
import { fetchContext } from '../../helpers/client';

const LogoutBtn = () => {
  const { user } = fetchContext('user');

  const handleLogout = async () => {
    if (user.isGuest) {
      // Send delete request to db for guest user
      const response = await axios.delete(`/api/user/${user._id}`);
      if (response.statusText === 'OK') {
        await signOut();
      } else {
        console.log(response.message);
      }
    } else {
      await signOut();
    }
  };

  return (
    <StyledIcon
      whileHover="hover"
      style={{ '--color': 'hsl(0,100%, 71%)' }}
      btntype="logout"
      onClick={handleLogout}
    >
      <MdLogout />
    </StyledIcon>
  );
};

export default LogoutBtn;
