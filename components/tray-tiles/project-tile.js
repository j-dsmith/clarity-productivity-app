// Dependencies
import Link from 'next/link';

// Style
import { MdCancel, MdDescription } from 'react-icons/md';
import {
  ProjectTileContainer,
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
  if (deleteActive) {
    return (
      <ProjectTileContainer onClick={() => handleDeleteProject(id)}>
        <TileHeader>
          <h3>{title}</h3>
          {/* <Tag variants={tag} whileHover="hover" color="red" /> */}
        </TileHeader>
        <TileFooter>
          <Date>
            Created: <span>{createdAt}</span>
          </Date>
          <InfoBox
            style={{
              '--color': deleteActive
                ? 'hsl(0,100%, 71%)'
                : 'hsl(222, 100%, 61%)',
            }}
          >
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
        </TileHeader>
        <TileFooter>
          <Date>
            Created: <span>{createdAt}</span>
          </Date>
          <InfoBox style={{ '--color': 'hsl(222, 100%, 61%)' }}>
            <span>{numNotes}</span>
            <MdDescription />
          </InfoBox>
        </TileFooter>
      </ProjectTileContainer>
    </Link>
  );
};

export default ProjectTile;
