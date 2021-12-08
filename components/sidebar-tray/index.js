import {
  StyledTray,
  StyledTrayHeader,
  StyledContentSection,
} from './tray.styles';
import { StyledInputGroup, StyledInput } from '../ui/ui-items.styles';
import UIBtn from '../ui/ui-btn';
import ItemTile from '../item-tile/item-tile';
import { MdAdd, MdFilterList, MdDelete } from 'react-icons/md';
import { BsTagsFill } from 'react-icons/bs';
import { theme } from '../../pages/_app';
import { useState } from 'react';

const SidebarTray = () => {
  // Initialize active state for tray type
  const [trayType, setTrayType] = useState('projects');

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
      <StyledInputGroup width="100%">
        <StyledInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          maxLength={35}
          placeholder="Title"
        />
        <UIBtn icon={<MdAdd />} color={theme.colors.turquoise} outline />
        <UIBtn icon={<MdDelete />} color={theme.colors.bittersweet} />
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
