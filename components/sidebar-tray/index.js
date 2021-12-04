import { fetchContext } from '../../helpers';
import {
  StyledTray,
  StyledTrayHeader,
  StyledInputGroup,
  StyledInput,
  StyledContentSection,
} from './tray.styles';
import SidebarBtn from './sidebar-btn';
import ItemTile from '../item-tile/item-tile';
import { MdAdd, MdFilterList, MdDelete } from 'react-icons/md';
import { BsTagsFill } from 'react-icons/bs';
import { theme } from '../../pages/_app';
import { useState } from 'react';

const SidebarTray = () => {
  // fetch animation context
  const { trayOpenState } = fetchContext();

  // initialize state for controlled input
  const [title, setTitle] = useState('');

  const variants = {
    closed: {
      left: '-30%',
      transition: {
        type: 'linear',
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      left: '0%',
      transition: {
        type: 'linear',
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <StyledTray
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <StyledTrayHeader>
        <h2>Projects</h2>
        <BsTagsFill />
      </StyledTrayHeader>
      <StyledInputGroup>
        <StyledInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          maxLength={35}
          placeholder="Title"
        />
        <SidebarBtn icon={<MdAdd />} color={theme.colors.turquoise} />
        <SidebarBtn icon={<MdFilterList />} color={theme.colors.bluecrayola} />
        <SidebarBtn icon={<MdDelete />} color={theme.colors.bittersweet} />
      </StyledInputGroup>
      {/* add info row, column headers table style. (title, current sort order, more?) */}
      <StyledContentSection>
        <ItemTile title="PRoject 1" />
        <ItemTile title="PRoject 1" />
        <ItemTile title="PRoject 1" />
      </StyledContentSection>
    </StyledTray>
  );
};

export default SidebarTray;
