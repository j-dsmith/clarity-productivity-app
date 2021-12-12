import Link from 'next/link';
import { MdCancel, MdDescription } from 'react-icons/md';
import {
  ProjectTileContainer,
  Tag,
  TileHeader,
  Date,
  TileFooter,
  NotesCounter,
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
          <NotesCounter deleteactive="true">
            {deleteActive ? (
              <MdCancel />
            ) : (
              <>
                <span>{numNotes}</span>
                <MdDescription />
              </>
            )}
          </NotesCounter>
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
          <NotesCounter>
            {/* Fix Hardcoded value, insert number of notes for the project */}
            {deleteActive ? (
              <MdCancel />
            ) : (
              <>
                <span>{numNotes}</span>
                <MdDescription />
              </>
            )}
          </NotesCounter>
        </TileFooter>
      </ProjectTileContainer>
    </Link>
  );
};

export default ProjectTile;
