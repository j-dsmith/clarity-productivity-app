// Dependencies
import { signOut } from 'next-auth/react';

// Style
import { MdLogout } from 'react-icons/md';
import { StyledIcon } from './sidebar.styles';

const LogoutBtn = () => {
  return (
    <StyledIcon
      whileHover="hover"
      color="#fcfaf9"
      btntype="logout"
      onClick={() => signOut()}
    >
      <MdLogout />
    </StyledIcon>
  );
};

export default LogoutBtn;
