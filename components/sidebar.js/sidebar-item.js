// Dependencies
import Link from 'next/link';
import { useRouter } from 'next/router';

// Helpers
import { fetchContext } from '../../helpers/client';

// Style
import { StyledIcon } from './sidebar.styles';

const SidebarItem = ({ title, icon, color, href }) => {
  const { toggleTrayOpen } = fetchContext('animation');

  const router = useRouter();

  const handleTrayState = (path) => {
    if (path.includes('/projects')) {
      toggleTrayOpen(true);

      return;
    }
    toggleTrayOpen(false);
  };

  if (title === 'trash' || title === 'decks') {
    return (
      <StyledIcon
        style={{ '--color': color }}
        active={href === router.pathname ? true : false}
        onClick={() => alert('Feature in Development')}
      >
        {icon}
      </StyledIcon>
    );
  }

  return (
    <Link href={href}>
      <StyledIcon
        style={{ '--color': color }}
        active={href === router.pathname ? true : false}
        onClick={() => handleTrayState(router.pathname)}
      >
        {icon}
      </StyledIcon>
    </Link>
  );
};

export default SidebarItem;
