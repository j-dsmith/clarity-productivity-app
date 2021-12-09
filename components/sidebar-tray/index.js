import { useState } from 'react';
import { TrayContainer, TrayHeader, ContentList } from './tray.styles';
import { InputGroup, TextInput } from '../ui/ui-items.styles';
import UIBtn from '../ui/ui-btn';
import GeneralFolder from '../sidebar-items/general-folder';
import ProjectTile from '../sidebar-items/project-tile';
import { MdAdd, MdFilterList, MdDelete } from 'react-icons/md';
import { BsTagsFill } from 'react-icons/bs';
import { theme } from '../../pages/_app';

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
    <TrayContainer
      variants={tray}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <TrayHeader>
        <h2>{trayType === 'projects' ? 'Projects' : 'PROJECT_TITLE'}</h2>
        <BsTagsFill />
      </TrayHeader>
      <InputGroup width="100%">
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          maxLength={35}
          placeholder="Title"
        />
        <UIBtn icon={<MdAdd />} color={theme.colors.turquoise} outline />
        <UIBtn icon={<MdDelete />} color={theme.colors.bittersweet} />
      </InputGroup>
      {/* 
          Add info row, column headers table style. (title, current sort order, more?) 
          <SidebarBtn icon={<MdFilterList />} color={theme.colors.bluecrayola} />
      */}
      <ContentList>
        <GeneralFolder />
        <ProjectTile title="Placeholder" />
      </ContentList>
    </TrayContainer>
  );
};

export default SidebarTray;
