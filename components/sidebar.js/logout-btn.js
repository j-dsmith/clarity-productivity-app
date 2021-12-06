import { MdLogout } from 'react-icons/md';
import { StyledIcon } from './sidebar.styles';
import { signOut } from 'next-auth/react';

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
