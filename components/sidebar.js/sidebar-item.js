// Dependencies
import Link from 'next/link';
import { useRouter } from 'next/router';

// Helpers
import { fetchContext } from '../../helpers/client';

// Style
import { StyledIcon } from './sidebar.styles';

const SidebarItem = ({ icon, color, href }) => {
  const { toggleTrayOpen } = fetchContext('animation');

  const router = useRouter();

  const handleTrayState = (path) => {
    if (path.includes('/projects')) {
      toggleTrayOpen(true);

      return;
    }
    toggleTrayOpen(false);
  };

  return (
    <Link href={href}>
      <StyledIcon
        color={color}
        onClick={() => handleTrayState(router.pathname)}
      >
        {icon}
      </StyledIcon>
    </Link>
  );
};

export default SidebarItem;
