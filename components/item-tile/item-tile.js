import { MdDescription } from 'react-icons/md';
import {
  StyledTile,
  StyledTag,
  StyledTileHeader,
  StyledDate,
  StyledTileFooter,
  StyledNotesCounter,
} from './item-tile.styles';

const ItemTile = ({ title }) => {
  const tag = {
    hover: {
      scale: 1.5,
    },
  };

  //TODO: Create renderTags function to render tags based on project tags from db

  return (
    <StyledTile>
      <StyledTileHeader>
        <h3>{title}</h3>
        <StyledTag variants={tag} whileHover="hover" color="red" />
      </StyledTileHeader>
      <StyledTileFooter>
        <StyledDate>
          {/* Add correct date of creation from db */}
          Created: <span>11/30/2021</span>
        </StyledDate>
        <StyledNotesCounter>
          {/* Fix Hardcoded value, insert number of notes for the project */}
          <span>5</span>
          <MdDescription />
        </StyledNotesCounter>
      </StyledTileFooter>
    </StyledTile>
  );
};

export default ItemTile;
