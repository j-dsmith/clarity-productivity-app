import Link from 'next/link';
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
  content,
  currentProjectId,
  handleDeleteNote,
  deleteActive,
}) => {
  if (deleteActive) {
    return (
      <NoteTileContainer
        onClick={() => handleDeleteNote(currentProjectId, noteId)}
        deleteactive="true"
      >
        <TileHeader>
          <h3>{title}</h3>
        </TileHeader>
        <TileFooter>
          <Date>
            Created: <span>{createdAt}</span>
          </Date>
          <InfoBox deleteactive="true">
            <MdCancel />
          </InfoBox>
        </TileFooter>
      </NoteTileContainer>
    );
  }

  return (
    // <Link>
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
        <InfoBox>
          <MdEdit />
        </InfoBox>
      </TileFooter>
    </NoteTileContainer>
    // </Link>
  );
};

export default NoteTile;
