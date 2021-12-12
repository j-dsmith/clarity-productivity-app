import Link from 'next/link';
import { MdCancel, MdDescription } from 'react-icons/md';
import {
  ProjectTileContainer,
  Tag,
  TileHeader,
  Date,
  TileFooter,
  InfoBox,
} from './sidebar-items.styles';

const ProjectTile = ({
  title,
  createdAt,
  numNotes,
  deleteActive,
  handleDeleteProject,
  id,
}) => {
  const tag = {
    hover: {
      scale: 1.5,
    },
  };

  //TODO: Create renderTags function to render tags based on project tags from db
  if (deleteActive) {
    return (
      <ProjectTileContainer
        deleteactive="true"
        onClick={() => handleDeleteProject(id)}
      >
        <TileHeader>
          <h3>{title}</h3>
          {/* <Tag variants={tag} whileHover="hover" color="red" /> */}
        </TileHeader>
        <TileFooter>
          <Date>
            Created: <span>{createdAt}</span>
          </Date>
          <InfoBox deleteactive="true">
            <MdCancel />
          </InfoBox>
        </TileFooter>
      </ProjectTileContainer>
    );
  }

  return (
    <Link href={`/projects/${id}`}>
      <ProjectTileContainer>
        <TileHeader>
          <h3>{title}</h3>
          {/* <Tag variants={tag} whileHover="hover" color="red" /> */}
        </TileHeader>
        <TileFooter>
          <Date>
            {/* Add correct date of creation from db */}
            Created: <span>{createdAt}</span>
          </Date>
          <InfoBox>
            <span>{numNotes}</span>
            <MdDescription />
          </InfoBox>
        </TileFooter>
      </ProjectTileContainer>
    </Link>
  );
};

export default ProjectTile;
