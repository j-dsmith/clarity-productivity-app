import { MdDescription } from 'react-icons/md';
import {
  ProjectTileContainer,
  Tag,
  TileHeader,
  Date,
  TileFooter,
  NotesCounter,
} from './sidebar-items.styles';

const ProjectTile = ({ title }) => {
  const tag = {
    hover: {
      scale: 1.5,
    },
  };

  //TODO: Create renderTags function to render tags based on project tags from db

  return (
    <ProjectTileContainer>
      <TileHeader>
        <h3>{title}</h3>
        <Tag variants={tag} whileHover="hover" color="red" />
      </TileHeader>
      <TileFooter>
        <Date>
          {/* Add correct date of creation from db */}
          Created: <span>11/30/2021</span>
        </Date>
        <NotesCounter>
          {/* Fix Hardcoded value, insert number of notes for the project */}
          <span>5</span>
          <MdDescription />
        </NotesCounter>
      </TileFooter>
    </ProjectTileContainer>
  );
};

export default ProjectTile;
