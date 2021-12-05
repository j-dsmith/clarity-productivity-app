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
  // Initialize active state for tray type
  const [trayType, setTrayType] = useState('projects');

  // fetch animation context
  const { trayOpenState } = fetchContext();

  // initialize state for controlled input
  const [title, setTitle] = useState('');

  const tray = {
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
    <StyledTray variants={tray} initial="closed" animate="open" exit="closed">
      <StyledTrayHeader>
        <h2>{trayType === 'projects' ? 'Projects' : 'PROJECT_TITLE'}</h2>
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
        <SidebarBtn icon={<MdDelete />} color={theme.colors.bittersweet} />
      </StyledInputGroup>
      {/* 
          Add info row, column headers table style. (title, current sort order, more?) 
          <SidebarBtn icon={<MdFilterList />} color={theme.colors.bluecrayola} />
      */}
      <StyledContentSection>
        <ItemTile title="PRoject 1" />
        <ItemTile title="PRoject 1" />
        <ItemTile title="PRoject 1" />
      </StyledContentSection>
    </StyledTray>
  );
};

export default SidebarTray;
