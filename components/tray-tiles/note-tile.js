// Dependencies
import Link from 'next/link';

// Style
import {
  NoteTileContainer,
  TileFooter,
  TileHeader,
  Date,
  InfoBox,
} from './sidebar-items.styles';
import { MdCancel, MdEdit } from 'react-icons/md';

const NoteTile = ({
  title,
  noteId,
  createdAt,
  currentProjectId,
  handleDeleteNote,
  deleteActive,
}) => {
  if (deleteActive) {
    return (
      <NoteTileContainer
        onClick={() => handleDeleteNote(currentProjectId, noteId)}
      >
        <TileHeader>
          <h3>{title}</h3>
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
      </NoteTileContainer>
    );
  }

  return (
    <Link href={`/projects/${currentProjectId}/notes/${noteId}`}>
      <NoteTileContainer>
        <TileHeader>
          <h3>{title}</h3>
        </TileHeader>
        <TileFooter>
          <Date>
            Created: <span>{createdAt}</span>
          </Date>
          <InfoBox style={{ '--color': 'hsl(222, 100%, 61%)' }}>
            <MdEdit />
          </InfoBox>
        </TileFooter>
      </NoteTileContainer>
    </Link>
  );
};

export default NoteTile;
